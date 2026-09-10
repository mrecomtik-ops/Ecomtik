import type { PublishedRecord } from "@/content/types";
import { PageHero } from "./PageHero";
import { MarkdownBody } from "./MarkdownBody";
import { FinalCTA } from "./FinalCTA";
import { Reveal } from "./Reveal";

export function MarketTemplate({ record }: { record: PublishedRecord }) {
  const { h1, description } = record.metadata;

  return (
    <>
      <PageHero
        eyebrow="Marketplace"
        title={h1}
        intro={description}
        crumbs={[{ label: "Marketplaces", to: "/marketplaces" }, { label: h1 }]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal>
            <MarkdownBody markdown={record.bodyMarkdown} />
          </Reveal>
        </div>
      </section>

      <FinalCTA secondaryLabel="Explore all marketplaces" secondaryTo="/marketplaces" />
    </>
  );
}
