import type { PublishedRecord } from "./types";

export function buildRecordHead(record: PublishedRecord) {
  const { title, description, canonicalOnPublication, type } = record.metadata;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type === "blog" ? "article" : "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalOnPublication }],
  };
}
