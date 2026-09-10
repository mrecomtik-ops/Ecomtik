import { createFileRoute, notFound } from "@tanstack/react-router";

import { getRecordById } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { CoreTemplate } from "@/components/site/CoreTemplate";
import { ArticleDirectory } from "@/components/site/ArticleDirectory";

export const Route = createFileRoute("/blog/")({
  loader: () => {
    const record = getRecordById("blog");
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const record = Route.useLoaderData();
  return (
    <CoreTemplate record={record} eyebrow="Insights" crumbs={[{ label: "Blog" }]}>
      <ArticleDirectory />
    </CoreTemplate>
  );
}
