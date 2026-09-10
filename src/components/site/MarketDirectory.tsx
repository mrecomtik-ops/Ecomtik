import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getPublishedRecords, slugFromPath } from "@/content/registry";
import { Reveal } from "./Reveal";

export function MarketDirectory() {
  const markets = getPublishedRecords("market");

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {markets.map((market, i) => (
            <Reveal key={market.metadata.id} delay={i * 60}>
              <Link
                to="/marketplaces/$slug"
                params={{ slug: slugFromPath(market.metadata.path) }}
                className="group flex h-full flex-col rounded-[20px] border border-ink/8 bg-softgray p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
              >
                <h3 className="text-lg font-semibold text-ink">{market.metadata.h1}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/70">
                  {market.metadata.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand group-hover:text-brand-amber">
                  Explore market
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
