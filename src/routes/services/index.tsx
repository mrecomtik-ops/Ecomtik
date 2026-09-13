import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { ServiceDirectory } from "@/components/site/ServiceDirectory";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/services/")({
  loader: () => {
    const record = getRecordById("services");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: ServicesPage,
});

function ServicesPage() {
  const record = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="Services" crumbs={[{ label: "Services" }]}>
      <ServiceDirectory />
      <FinalCTA />
    </CoreTemplate>
  );
}
