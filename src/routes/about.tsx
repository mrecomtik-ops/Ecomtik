import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { WhyEcomtik } from "@/components/site/WhyEcomtik";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/about")({
  loader: () => {
    const record = getRecordById("about");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: AboutPage,
});

function AboutPage() {
  const record = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="About Ecomtik" crumbs={[{ label: "About" }]}>
      <WhyEcomtik />
      <FinalCTA />
    </CoreTemplate>
  );
}
