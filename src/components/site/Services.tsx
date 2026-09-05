import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    title: "Logo Design & Brand Architecture",
    copy: "Naming, positioning, and identity systems built to hold value across every market you enter.",
    image: IMAGES.logoDesign,
  },
  {
    title: "Website Design",
    copy: "High-converting storefronts and brand sites engineered around clarity, speed, and trust.",
    image: IMAGES.webDesign,
  },
  {
    title: "Product Packaging",
    copy: "Shelf-ready and marketplace-ready packaging that earns the click and justifies the price.",
    image: IMAGES.packaging,
  },
  {
    title: "Digital Marketing",
    copy: "Full-funnel acquisition across search, social, and retail media with disciplined unit economics.",
    image: IMAGES.marketing,
  },
  {
    title: "UAE Company Setup",
    copy: "Licensing, structuring, and banking support so your global entity is ready to trade from Dubai.",
    image: IMAGES.uaeSetup,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-softgray py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Services
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Brand Building &amp; Growth Services
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/70">
              One accountable partner across the full commercial stack — from the first sketch of
              an identity to sustained profitability in every marketplace you sell in.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-[22px] border border-ink/[0.06] bg-white shadow-[0_20px_50px_-38px_rgba(8,8,8,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-38px_rgba(8,8,8,0.55)]">
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={900}
                    height={620}
                    className="h-52 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite/70">{s.copy}</p>
                  <span className="mt-5 inline-block h-px w-10 bg-brand transition-all duration-500 group-hover:w-20" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
