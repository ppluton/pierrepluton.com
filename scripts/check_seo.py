"""Validate SEO contracts against the generated static site, without network access."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote
import json
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
ORIGIN = "https://pierrepluton.com"


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.title = ""
        self.lang = ""
        self.h1 = 0
        self.meta = {}
        self.canonical = []
        self.alternates = {}
        self.links = []
        self.images = []
        self.ids = set()
        self.schemas = []
        self.capture = None
        self.json_text = ""
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "html":
            self.lang = attrs.get("lang")
        elif tag == "h1":
            self.h1 += 1
        elif tag == "title":
            self.capture = "title"
        elif tag == "meta":
            self.meta[attrs.get("name", attrs.get("property"))] = attrs.get("content", "")
        elif tag == "link":
            if attrs.get("rel") == "canonical":
                self.canonical.append(attrs.get("href"))
            if attrs.get("rel") == "alternate" and "hreflang" in attrs:
                self.alternates[attrs["hreflang"]] = attrs.get("href")
        elif tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        elif tag == "img":
            self.images.append(attrs)
        elif tag == "script" and attrs.get("type") == "application/ld+json":
            self.capture = "json"
            self.json_text = ""

    def handle_data(self, text):
        if self.capture == "title":
            self.title += text
        elif self.capture == "json":
            self.json_text += text

    def handle_endtag(self, tag):
        if tag == "script" and self.capture == "json":
            self.schemas.append(json.loads(self.json_text))
            self.capture = None
        elif tag == "title":
            self.capture = None


pages = {}
for file in DIST.rglob("index.html"):
    if "formation-oc" in file.relative_to(DIST).parts:
        continue
    relative = file.parent.relative_to(DIST).as_posix()
    path = "/" if relative == "." else f"/{relative}/"
    pages[path] = Page(file.read_text())

errors = []


def require(condition, message):
    if not condition:
        errors.append(message)


require(bool(pages), "No built pages found; run npm run build first.")
for path, page in pages.items():
    canonical = ORIGIN + path
    lang = "en" if path.startswith("/en/") else "fr"
    fr = path.removeprefix("/en") if lang == "en" else path
    expected = {"fr": ORIGIN + fr, "en": ORIGIN + "/en" + fr, "x-default": ORIGIN + fr}
    require(page.lang == lang, f"{path}: incorrect HTML language")
    require(page.h1 == 1, f"{path}: expected one H1, got {page.h1}")
    require(bool(page.title.strip()), f"{path}: missing title")
    require(bool(page.meta.get("description")), f"{path}: missing description")
    require(page.canonical == [canonical], f"{path}: incorrect canonical")
    require(page.alternates == expected, f"{path}: incorrect hreflang alternatives")
    require("noindex" not in page.meta.get("robots", ""), f"{path}: unexpectedly excluded from indexing")
    for locale, url in expected.items():
        require(urlparse(url).path in pages, f"{path}: missing {locale} page")
    for key in ["og:title", "og:description", "og:image", "og:image:alt", "og:url", "twitter:card", "twitter:title", "twitter:description", "twitter:image"]:
        require(bool(page.meta.get(key)), f"{path}: missing {key}")
    require(page.meta.get("og:url") == canonical, f"{path}: OG URL differs from canonical")
    require(page.meta.get("og:title") == page.title, f"{path}: OG title differs from title")
    require(page.meta.get("og:description") == page.meta.get("description"), f"{path}: OG description mismatch")
    image = urlparse(page.meta.get("og:image", ""))
    require(image.netloc == "pierrepluton.com" and (DIST / image.path.lstrip("/")).is_file(), f"{path}: missing local social image")
    require(bool(page.schemas), f"{path}: missing JSON-LD")
    graph = page.schemas[0].get("@graph", []) if page.schemas else []
    require(any(node.get("@type") == "Person" for node in graph), f"{path}: missing Person entity")
    require(any(node.get("url") == canonical and node.get("inLanguage") == lang for node in graph), f"{path}: incorrect page entity")
    if path not in ["/", "/en/"]:
        require(any(node.get("@type") == "BreadcrumbList" for node in graph), f"{path}: missing breadcrumb schema")
    for image in page.images:
        require("alt" in image, f"{path}: image without alt")
        source = urlparse(image.get("src", ""))
        if not source.scheme and source.path.startswith("/"):
            require((DIST / source.path.lstrip("/")).is_file(), f"{path}: missing image {source.path}")
    for href in page.links:
        target = urlparse(urljoin(canonical, href))
        require(not target.netloc.endswith("openclassrooms.com"), f"{path}: unwanted OpenClassrooms link")
        if target.netloc != "pierrepluton.com":
            continue
        target_path = unquote(target.path)
        exists = target_path in pages or (DIST / target_path.lstrip("/")).is_file()
        require(exists, f"{path}: broken internal link {href}")
        if target.fragment and target_path in pages:
            require(unquote(target.fragment) in pages[target_path].ids, f"{path}: missing anchor {href}")

for key, values in [("title", [p.title for p in pages.values()]), ("description", [p.meta.get("description") for p in pages.values()])]:
    require(not any(count > 1 for count in Counter(values).values()), f"Duplicate {key}s found")

tree = ET.parse(DIST / "sitemap.xml")
ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9", "x": "http://www.w3.org/1999/xhtml"}
entries = tree.findall("s:url", ns)
locations = [entry.findtext("s:loc", namespaces=ns) for entry in entries]
require(set(locations) == {ORIGIN + path for path in pages}, "Sitemap differs from generated indexable pages")
require(len(locations) == len(set(locations)), "Sitemap contains duplicate URLs")
for entry in entries:
    page = pages.get(urlparse(entry.findtext("s:loc", namespaces=ns)).path)
    alternatives = {link.attrib["hreflang"]: link.attrib["href"] for link in entry.findall("x:link", ns)}
    require(page is not None and alternatives == page.alternates, "Sitemap hreflang differs from HTML")
require(f"Sitemap: {ORIGIN}/sitemap.xml" in (DIST / "robots.txt").read_text(), "robots.txt does not advertise sitemap")
for file in (DIST / "formation-oc").glob("*.html"):
    archive = Page(file.read_text())
    require("noindex" in archive.meta.get("robots", ""), f"Archive is indexable: {file.name}")
    require(not any(urlparse(link).netloc.endswith("openclassrooms.com") for link in archive.links), f"Archive has an OpenClassrooms link: {file.name}")
missing = Page((DIST / "404.html").read_text())
require("noindex" in missing.meta.get("robots", ""), "404 page is indexable")
require(not missing.canonical and not missing.alternates, "404 has canonical or language alternatives")

print(json.dumps({"indexable_pages": len(pages), "sitemap_urls": len(locations), "errors": errors}, ensure_ascii=False, indent=2))
sys.exit(1 if errors else 0)
