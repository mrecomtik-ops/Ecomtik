import { Boxes, Factory, PackageSearch, ShieldCheck, Tags, Truck } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const CAPABILITIES = [
  { icon: PackageSearch, title: "Product research", copy: "Demand, margin and competitive modelling before a single sample ships." },
  { icon: Boxes, title: "Supplier sourcing", copy: "Vetted manufacturer networks across Asia, the Gulf and Europe." },
  { icon: Factory, title: "OEM / ODM", copy: "Custom tooling, specification and product engineering support." },
  { icon: ShieldCheck, title: "Quality evaluation", copy: "Inspection protocols, compliance checks and defect control." },
  { icon: Tags, title: "Private label development", copy: "Own-brand products built for durable marketplace economics." },
  { icon: Truck, title: "Manufacturing coordination", copy: "Production timelines, logistics and delivery orchestration." },
];

export function ProductSourcing() {
  return (
    <section id="sourcing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[26px] bg-softgray p-3 shadow-[0_40px_90px_-60px_rgba(8,8,8,0.6)]">
            <img
              src={IMAGES.factory}
              alt="Product development and sourcing process"
              loading="lazy"
              className="w-full rounded-[18px] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Product Sourcing & Development
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl">
              A complete product development partner
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/75">
              We take products from concept to shelf-ready reality — controlling cost, quality and
              speed at every step of the supply chain.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="group">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-3 text-base font-semibold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite/70">{c.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
