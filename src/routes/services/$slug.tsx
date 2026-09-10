import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPublishedRecordBySlug } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const record = getPublishedRecordBySlug("service", params.slug);
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: ServicePage,
});

function ServicePage() {
  const record = Route.useLoaderData();
  return <ServiceTemplate record={record} />;
}
