import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const CASES = [
  {
    sector: "Home & Lifestyle",
    title: "A packaging rebuild that doubled conversion",
    metric: "2.1x conversion",
    image: IMAGES.packaging,
    span: "lg:col-span-3",
    height: "h-[380px] lg:h-[460px]",
  },
  {
    sector: "Beauty",
    title: "Identity system built for eleven markets",
    metric: "11 markets",
    image: IMAGES.logoDesign,
    span: "lg:col-span-2",
    height: "h-[380px] lg:h-[460px]",
  },
  {
    sector: "Consumer Electronics",
    title: "Retail media restructured around margin",
    metric: "-37% CPA",
    image: IMAGES.marketing,
    span: "lg:col-span-2",
    height: "h-[340px] lg:h-[420px]",
  },
  {
    sector: "Wellness",
    title: "Direct storefront rebuilt for scale",
    metric: "+184% revenue",
    image: IMAGES.webDesign,
    span: "lg:col-span-3",
    height: "h-[340px] lg:h-[420px]",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
                Case Studies
              </span>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-graphite/60">
              A sample of brands we have built, relaunched, and scaled across international
              marketplaces. Full results shared under NDA.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {CASES.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className={c.span}>
              <article className="group relative h-full overflow-hidden rounded-[26px] bg-ink">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className={`w-full ${c.height} object-cover opacity-85 transition-all duration-[1100ms] group-hover:scale-[1.04] group-hover:opacity-70`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-amber uppercase">
                    {c.sector}
                  </span>
                  <h3 className="font-display mt-3 max-w-md text-xl font-semibold text-white sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-white/70">{c.metric}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
