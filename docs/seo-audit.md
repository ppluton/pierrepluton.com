# Portfolio SEO audit — 11 October 2026

Scope: the personal portfolio `ppluton/pierrepluton.com`, branch
`codex/portfolio-oc-parcours`. Changes are local; no publication was performed.

## Findings and changes

The initial generated site contained 56 native French/English pages. Six pages
shared the generic French description; all 56 lacked social preview images and
structured data. There was no generated sitemap. A read-only browser inspection
of the public site also showed that `/sitemap.xml` rendered the homepage as HTML.

- Centralized unique titles, descriptions, canonical URLs and social images in
  `src/data/seo.ts`, with reciprocal French/English/x-default alternatives.
- Added a generated XML sitemap covering the 56 indexable pages and advertised it
  in `robots.txt`.
- Added Person, WebSite, page and breadcrumb JSON-LD. These describe the portfolio
  and its owner without inventing achievements or qualifications.
- Added a noindex 404 page. Historical HTML audit files also carry noindex tags;
  Cloudflare headers repeat that policy for `/formation-oc/*` after deployment.
- Removed outgoing OpenClassrooms links from the native training pages and HTML
  archive. GitHub project links remain. Historical source data and ZIP archives
  are preserved.
- Clarified the home H1 and optimized the portrait through responsive Astro WebP
  images: approximately 4–63 KB per variant, versus 1.77 MB for the source PNG.
- Reused a purple marker underline on selected main headings. The effect is CSS
  only and has a lighter variant for dark mode.

## Local validation

`npm run check`: 45 files, zero errors, warnings or hints.
`npm run build`: 57 HTML pages including the 404, plus the sitemap endpoint.
`npm run seo:check`: 56 indexable pages, 56 sitemap URLs, zero errors.

The SEO checker validates generated titles/descriptions, single H1s, language,
canonical URLs, reciprocal alternatives, social metadata, valid JSON-LD,
image files/alt attributes, internal links and fragments, sitemap coverage,
noindex archives and absence of outgoing OpenClassrooms links.

Browser checks covered nine key routes at CSS widths 320, 390, 800 and 1440 px:
no horizontal document overflow or marker extending past the viewport. Visual
checks included the desktop background page, mobile training page and dark-mode
marker color. This is browser evidence, not a physical-device test.

## Maintenance and deployment follow-up

Run `npm run check`, `npm run build`, then `npm run seo:check` (Python 3 required).
Register any new indexable route in `src/data/seo.ts`; sitemap coverage is checked
against generated native pages. Preserve proper French/English counterparts.

After an authorized deployment, verify the live XML sitemap, actual 404 status,
archive response headers and canonical/social metadata. Search Console submission,
Google rich-result validation, PageSpeed and field Core Web Vitals were not
performed. No search-ranking or traffic improvement is claimed.

References: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions),
[profile structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page),
[Astro images](https://docs.astro.build/en/guides/images/).
