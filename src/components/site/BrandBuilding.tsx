import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const STEPS = [
  { title: "Research", copy: "Category, demand, and competitor economics mapped before a single design decision." },
  { title: "Brand Strategy", copy: "Positioning, price architecture, and the promise your brand can defend." },
  { title: "Identity", copy: "Logo systems, typography, and art direction that read premium at thumbnail size." },
  { title: "Packaging", copy: "Structure and print-ready artwork tuned for retail shelves and marketplace grids." },
  { title: "Launch", copy: "Listings, content, and media live together so day one performs like month six." },
];

export function BrandBuilding() {
  return (
    <section id="solutions" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-cobalt/8 blur-2xl" />
            <img
              src={IMAGES.brandPathway}
              alt="The brand building pathway illustrated"
              loading="lazy"
              width={1100}
              height={1100}
              className="w-full rounded-[26px] object-cover shadow-[0_40px_80px_-48px_rgba(8,8,8,0.6)]"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              The Brand Building Pathway
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              A repeatable path from idea to a brand worth owning
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/70">
              We treat brand building as an operating discipline, not a creative gamble. Every
              stage produces evidence that the next one is worth funding.
            </p>

            <ol className="mt-9 space-y-6">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="font-display mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 text-[13px] font-semibold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-graphite/70">{s.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
