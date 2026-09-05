import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const STEPS = [
  { title: "Research", copy: "Category economics, demand signals, and white space." },
  { title: "Strategy", copy: "Positioning, portfolio, and margin architecture." },
  { title: "Creation", copy: "Identity, packaging, content, and storefront build." },
  { title: "Launch", copy: "Coordinated marketplace and channel go-live." },
  { title: "Scale", copy: "Media, expansion, and profitability compounding." },
];

export function BrandFactory() {
  return (
    <section className="bg-softgray py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              The Brand Factory Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Five stages, one accountable system
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_30px_70px_-50px_rgba(8,8,8,0.5)]">
            <img
              src={IMAGES.factory}
              alt="The brand factory process visual"
              loading="lazy"
              width={1600}
              height={800}
              className="w-full rounded-[18px] object-cover"
            />
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-[18px] right-0 left-0 hidden h-px bg-gradient-to-r from-brand via-brand-amber to-brand/20 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="relative">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-[12px] font-bold text-ink shadow-[0_10px_25px_-12px_color-mix(in_oklab,var(--brand)_90%,transparent)]">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite/70">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
