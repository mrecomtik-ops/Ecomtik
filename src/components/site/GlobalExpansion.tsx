import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const POINTS = [
  {
    title: "International expansion",
    copy: "Entry sequencing by demand, duty exposure, and logistics reality — not guesswork.",
  },
  {
    title: "Global customers",
    copy: "Localised content, pricing, and service standards for every region you trade in.",
  },
  {
    title: "Marketplace connections",
    copy: "Unified catalogue operations across the platforms that matter in each territory.",
  },
  {
    title: "Cross-border growth",
    copy: "Compliance, tax, and fulfilment handled so momentum never stalls at a border.",
  },
];

export function GlobalExpansion() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-cobalt uppercase">
              Global Marketplace Network
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              One brand. Every market that matters.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-to-br from-brand/12 via-transparent to-cobalt/12 blur-2xl" />
              <img
                src={IMAGES.globalNetwork}
                alt="Global marketplace network visual"
                loading="lazy"
                width={1300}
                height={900}
                className="w-full rounded-[26px] object-cover shadow-[0_40px_80px_-50px_rgba(8,8,8,0.55)]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="divide-y divide-ink/8 border-t border-ink/8">
              {POINTS.map((p) => (
                <div key={p.title} className="group flex gap-5 py-6">
                  <span className="mt-2 h-px w-8 shrink-0 bg-brand transition-all duration-500 group-hover:w-14" />
                  <div>
                    <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-graphite/70">{p.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
