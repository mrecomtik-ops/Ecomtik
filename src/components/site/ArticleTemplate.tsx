import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { PublishedRecord } from "@/content/types";
import { getRecordById, slugFromPath } from "@/content/registry";
import { PageHero } from "./PageHero";
import { MarkdownBody } from "./MarkdownBody";
import { Reveal } from "./Reveal";
import { JsonLd } from "./JsonLd";

export function ArticleTemplate({ record }: { record: PublishedRecord }) {
  const { h1, description, category, author, publishedAt, canonicalOnPublication } =
    record.metadata;
  const relatedServiceId = record.metadata.relatedServiceIds?.[0];
  const relatedService = relatedServiceId ? getRecordById(relatedServiceId) : undefined;

  return (
    <>
      {/* Article schema requires real author/publication-date facts — the
          spec's supplied records leave these null pending an assigned
          reviewer, so no schema is emitted until they're set. */}
      {author && publishedAt && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: h1,
            description,
            mainEntityOfPage: canonicalOnPublication,
            author: { "@type": "Person", name: author },
            publisher: { "@id": "https://ecomtik.com/#organization" },
            datePublished: publishedAt,
            ...(record.metadata.reviewedAt ? { dateModified: record.metadata.reviewedAt } : {}),
          }}
        />
      )}
      <PageHero
        eyebrow={category ?? "Guide"}
        title={h1}
        intro={description}
        crumbs={[{ label: "Blog", to: "/blog" }, { label: h1 }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10">
          <Reveal>
            <MarkdownBody markdown={record.bodyMarkdown} />
          </Reveal>

          {relatedService && relatedService.status === "published" && (
            <div className="mt-14 rounded-[24px] border border-ink/8 bg-softgray p-8">
              <p className="text-sm font-semibold text-ink">Need a structured review?</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite/75">
                {relatedService.metadata.h1}
              </p>
              <Link
                to="/services/$slug"
                params={{ slug: slugFromPath(relatedService.metadata.path) }}
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
              >
                Explore {relatedService.metadata.family ?? "this service"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
