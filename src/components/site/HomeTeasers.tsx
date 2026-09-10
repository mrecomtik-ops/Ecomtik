import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

type Teaser = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  to: string;
  cta: string;
};

const TEASERS: Teaser[] = [
  {
    eyebrow: "Brand Building",
    title: "A repeatable path from idea to a brand worth owning",
    copy: "Research, strategy, identity, packaging and launch — each stage produces evidence that the next one is worth funding.",
    image: IMAGES.brandPathway,
    to: "/services/logo-design",
    cta: "Explore the pathway",
  },
  {
    eyebrow: "Product Sourcing",
    title: "From concept to shelf-ready reality",
    copy: "A vetted supplier network across Asia, the Gulf and Europe — OEM/ODM development, quality control and manufacturing coordination without the risk.",
    image: IMAGES.factory,
    to: "/services/amazon-product-sourcing",
    cta: "See how sourcing works",
  },
  {
    eyebrow: "Company Formation",
    title: "Bankable entities in the world's strategic jurisdictions",
    copy: "UAE, US and UK company formation — licensing, structuring, documentation and banking support handled end to end from our Dubai base.",
    image: IMAGES.uaeSetup,
    to: "/services/company-setup",
    cta: "Start your setup",
  },
  {
    eyebrow: "Amazon Growth",
    title: "Marketplace growth run like an enterprise system",
    copy: "Data, media and merchandising operate as one loop — instrumented, reviewed weekly, and tied to contribution margin, not vanity metrics.",
    image: IMAGES.amazonPathway,
    to: "/services/amazon-account-management",
    cta: "Inside the growth engine",
  },
  {
    eyebrow: "Global Expansion",
    title: "One brand. Every market that matters.",
    copy: "Entry sequencing, compliance, tax and fulfilment handled so momentum never stalls at a border.",
    image: IMAGES.globalNetwork,
    to: "/services/global-marketplace-expansion",
    cta: "Explore the network",
  },
];

export function HomeTeasers() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Explore each capability
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Everything between an idea and an international brand
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16 lg:space-y-24">
          {TEASERS.map((t, i) => (
            <Reveal key={t.eyebrow}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-5 -z-10 rounded-[30px] bg-brand/8 blur-2xl" />
                    <img
                      src={t.image}
                      alt={t.title}
                      loading="lazy"
                      width={1200}
                      height={820}
                      className="aspect-[3/2] w-full rounded-[24px] object-cover shadow-[0_40px_80px_-50px_rgba(8,8,8,0.55)]"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
                    {t.eyebrow}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-semibold text-ink sm:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-graphite/70">{t.copy}</p>
                  <Link
                    to={t.to}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-amber"
                  >
                    {t.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
