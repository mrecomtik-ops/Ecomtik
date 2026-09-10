import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  loader: () => {
    const record = getRecordById("contact");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: ContactPage,
});

function ContactPage() {
  const record = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Contact Ecomtik"
        title={record.metadata.h1}
        intro={record.metadata.description}
        crumbs={[{ label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
