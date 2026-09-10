import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { MarketDirectory } from "@/components/site/MarketDirectory";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/marketplaces/")({
  loader: () => {
    const record = getRecordById("marketplaces");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: MarketplacesIndexPage,
});

function MarketplacesIndexPage() {
  const record = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="Marketplaces" crumbs={[{ label: "Marketplaces" }]}>
      <MarketDirectory />
      <FinalCTA secondaryLabel="Explore services" secondaryTo="/services" />
    </CoreTemplate>
  );
}
