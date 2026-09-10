import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPublishedRecordBySlug } from "@/content/registry";
import { buildRecordHead } from "@/content/head";
import { ArticleTemplate } from "@/components/site/ArticleTemplate";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const record = getPublishedRecordBySlug("blog", params.slug);
    if (!record) throw notFound();
    return record;
  },
  head: ({ loaderData }) => (loaderData ? buildRecordHead(loaderData) : {}),
  component: ArticlePage,
});

function ArticlePage() {
  const record = Route.useLoaderData();
  return <ArticleTemplate record={record} />;
}
