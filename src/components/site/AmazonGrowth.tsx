import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const METRICS = [
  { label: "Organic rank velocity", value: "+184%", note: "Median across managed catalogues" },
  { label: "Advertising efficiency", value: "-37%", note: "Blended cost per acquisition" },
  { label: "Catalogue health", value: "98.6%", note: "Listings compliant and live" },
  { label: "Repeat purchase rate", value: "31%", note: "Subscription and reorder mix" },
];

const CAPABILITIES = [
  "Marketplace intelligence and demand forecasting",
  "Listing, content, and A+ experience optimisation",
  "Retail media planning with margin-aware bidding",
  "Inventory, pricing, and buy-box performance control",
];

export function AmazonGrowth() {
  return (
    <section id="amazon-growth" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-amber uppercase">
              Growth Engine
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              Marketplace growth run like an enterprise system
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Data, media, and merchandising operate as one loop. Every decision is instrumented,
              reviewed weekly, and tied to contribution margin — not vanity performance.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="glass-dark overflow-hidden rounded-[26px] p-3 shadow-[0_50px_90px_-45px_rgba(0,0,0,0.9)]">
              <img
                src={IMAGES.amazonPathway}
                alt="Marketplace growth pathway visual"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-[18px] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {METRICS.map((m) => (
                  <div
                    key={m.label}
                    className="glass-dark rounded-2xl p-6 transition-colors duration-500 hover:border-brand/40"
                  >
                    <p className="font-display text-3xl font-semibold text-brand-amber">{m.value}</p>
                    <p className="mt-2 text-[13px] font-medium text-white">{m.label}</p>
                    <p className="mt-1 text-[11px] text-white/45">{m.note}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-8 space-y-3.5">
                {CAPABILITIES.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
