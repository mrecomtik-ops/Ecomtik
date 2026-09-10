// Generates public/sitemap.xml at build time from the same published-content
// rules as src/content/registry.ts (duplicated here in plain JS since this
// script runs outside the Vite/TS toolchain — keep INACTIVE_IDS in sync).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const recordsPath = path.join(here, "..", "src", "content", "records.json");
const outPath = path.join(here, "..", "public", "sitemap.xml");

const ORIGIN = "https://ecomtik.com";
const INACTIVE_IDS = new Set(["S06", "S07", "S17", "S18", "S19"]);

const records = JSON.parse(readFileSync(recordsPath, "utf-8"));
const published = records.filter((r) => !INACTIVE_IDS.has(r.metadata.id));

const urls = published
  .map((r) => {
    const loc = new URL(r.metadata.path, ORIGIN).toString();
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(outPath, xml, "utf-8");
console.log(`Wrote ${published.length} URLs to ${outPath}`);

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
