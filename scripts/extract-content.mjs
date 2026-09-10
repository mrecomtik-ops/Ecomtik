// One-time import: parses the Ecomtik master spec doc's BEGIN/END ECOMTIK_PAGE
// records into src/content/records.json. Adapted from the spec's own supplied
// Python helper (section 18) to Node so it runs via `bun run extract-content`.
// This script is not part of the app runtime — it produces a committed data
// file that src/content/registry.ts imports.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error("Usage: node scripts/extract-content.mjs <path-to-master-spec.md>");
  process.exit(1);
}
const destinationPath = path.join(here, "..", "src", "content", "records.json");

const text = readFileSync(sourcePath, "utf-8");

const recordPattern = /<!-- BEGIN ECOMTIK_PAGE (?<id>[A-Za-z0-9_-]+) -->\n(?<block>[\s\S]*?)\n<!-- END ECOMTIK_PAGE \k<id> -->/g;
const jsonBlockPattern = /```json\n([\s\S]*?)\n```/;
const markdownBlockPattern = /```markdown\n([\s\S]*?)\n```/;

const records = [];
for (const match of text.matchAll(recordPattern)) {
  const { id, block } = match.groups;
  const jsonMatch = block.match(jsonBlockPattern);
  const markdownMatch = block.match(markdownBlockPattern);
  if (!jsonMatch || !markdownMatch) {
    throw new Error(`Missing data for ${id}`);
  }
  const metadata = JSON.parse(jsonMatch[1]);
  if (metadata.id !== id) {
    throw new Error(`Mismatched page identifier for ${id}`);
  }
  records.push({ metadata, bodyMarkdown: markdownMatch[1] + "\n" });
}

if (records.length !== 42) {
  throw new Error(`Expected 42 records, found ${records.length}`);
}
const ids = new Set(records.map((r) => r.metadata.id));
const paths = new Set(records.map((r) => r.metadata.path));
if (ids.size !== 42) throw new Error("Duplicate id detected");
if (paths.size !== 42) throw new Error("Duplicate path detected");

writeFileSync(destinationPath, JSON.stringify(records, null, 2) + "\n", "utf-8");
console.log(`Extracted ${records.length} records into ${destinationPath}`);
