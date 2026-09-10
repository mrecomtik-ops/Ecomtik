import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { PublishedRecord } from "@/content/types";
import { getRelatedArticles, slugFromPath } from "@/content/registry";
import { PageHero } from "./PageHero";
import { MarkdownBody } from "./MarkdownBody";
import { FinalCTA } from "./FinalCTA";
import { Reveal } from "./Reveal";

export function ServiceTemplate({ record }: { record: PublishedRecord }) {
  const { h1, description, family } = record.metadata;
  const relatedArticles = getRelatedArticles(record);

  return (
    <>
      <PageHero
        eyebrow={family ?? "Service"}
        title={h1}
        intro={description}
        crumbs={[{ label: "Services", to: "/services" }, { label: h1 }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal>
            <MarkdownBody markdown={record.bodyMarkdown} />
          </Reveal>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="bg-softgray py-16 lg:py-20">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10">
            <h2 className="font-display text-xl font-semibold text-ink">Related guides</h2>
            <ul className="mt-6 space-y-3">
              {relatedArticles.map((article) => (
                <li key={article.metadata.id}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: slugFromPath(article.metadata.path) }}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-amber"
                  >
                    {article.metadata.h1}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <FinalCTA secondaryLabel="Explore all services" secondaryTo="/services" />
    </>
  );
}
