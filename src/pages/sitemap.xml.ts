import type { APIRoute } from "astro";
import { seoPages, localizedPaths } from "../data/seo";

export const GET: APIRoute = ({ site }) => {
  if (!site)
    throw new Error("A canonical site URL is required for the sitemap.");
  const xmlEscape = (value: string) =>
    value.replace(
      /[<>&"']/g,
      (char) =>
        ({
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          '"': "&quot;",
          "'": "&apos;",
        })[char]!,
    );
  const urls = Object.keys(seoPages).map((path) => {
    const alternatives = localizedPaths(
      path,
      path.startsWith("/en/") ? "en" : "fr",
    );
    return `<url><loc>${xmlEscape(new URL(path, site).href)}</loc>${Object.entries(
      { ...alternatives, "x-default": alternatives.fr },
    )
      .map(
        ([locale, alternate]) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${xmlEscape(new URL(alternate, site).href)}"/>`,
      )
      .join("")}</url>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
