import type { PublishedRecord } from "./types";

const SITE_ORIGIN = "https://ecomtik.com";
// Real, already-deployed brand image — reused as the default share image
// until page-specific approved images are supplied.
const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/hero-amazon-growth.jpg`;

export function buildRecordHead(record: PublishedRecord) {
  const { title, description, canonicalOnPublication, type } = record.metadata;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type === "blog" ? "article" : "website" },
      { property: "og:url", content: canonicalOnPublication },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalOnPublication }],
  };
}
