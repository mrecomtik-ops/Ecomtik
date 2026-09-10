import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/pricing")({
  loader: () => {
    const record = getRecordById("engagement");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: PricingPage,
});

function PricingPage() {
  const record = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="Engagement" crumbs={[{ label: "Pricing" }]}>
      <FinalCTA />
    </CoreTemplate>
  );
}
