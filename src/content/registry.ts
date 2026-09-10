import rawRecords from "./records.json";
import type { ContentRecord, ContentType, PublishedRecord } from "./types";

// Per the spec's own section 4 publication table: legacy offers needing
// reconfirmation (S06 wholesale, S07 Brand Registry) and proposed/unconfirmed
// capabilities (S17 account health, S18 FBA operations, S19 Noon) are built
// and kept in the registry, but are not linked or routed publicly until a
// business owner confirms current delivery capacity.
const INACTIVE_IDS = new Set(["S06", "S07", "S17", "S18", "S19"]);

const records: PublishedRecord[] = (rawRecords as ContentRecord[]).map((record) => ({
  ...record,
  status: INACTIVE_IDS.has(record.metadata.id) ? "inactive" : "published",
}));

export function slugFromPath(recordPath: string): string {
  const parts = recordPath.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function getAllRecords(): PublishedRecord[] {
  return records;
}

export function getRecordsByType(type: ContentType): PublishedRecord[] {
  return records.filter((r) => r.metadata.type === type);
}

export function getPublishedRecords(type?: ContentType): PublishedRecord[] {
  return records.filter((r) => r.status === "published" && (!type || r.metadata.type === type));
}

export function getRecordById(id: string): PublishedRecord | undefined {
  return records.find((r) => r.metadata.id === id);
}

export function getRecordBySlug(type: ContentType, slug: string): PublishedRecord | undefined {
  return records.find((r) => r.metadata.type === type && slugFromPath(r.metadata.path) === slug);
}

export function getPublishedRecordBySlug(
  type: ContentType,
  slug: string
): PublishedRecord | undefined {
  const record = getRecordBySlug(type, slug);
  return record && record.status === "published" ? record : undefined;
}

export function getRelatedServices(record: PublishedRecord): PublishedRecord[] {
  const ids = record.metadata.relatedServiceIds ?? [];
  return ids
    .map((id) => getRecordById(id))
    .filter((r): r is PublishedRecord => r != null && r.status === "published");
}

export function getRelatedArticles(record: PublishedRecord): PublishedRecord[] {
  return getPublishedRecords("blog").filter((article) =>
    (article.metadata.relatedServiceIds ?? []).includes(record.metadata.id)
  );
}
