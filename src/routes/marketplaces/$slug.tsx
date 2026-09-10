import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPublishedRecordBySlug } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { MarketTemplate } from "@/components/site/MarketTemplate";

export const Route = createFileRoute("/marketplaces/$slug")({
  loader: ({ params }) => {
    const record = getPublishedRecordBySlug("market", params.slug);
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: MarketPage,
});

function MarketPage() {
  const record = Route.useLoaderData();
  return <MarketTemplate record={record} />;
}
