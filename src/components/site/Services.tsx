import {
  Fingerprint,
  Package,
  Globe2,
  TrendingUp,
  Megaphone,
  MonitorSmartphone,
  Building2,
  FileBadge,
  Network,
  ArrowRight,
} from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

type Service = {
  title: string;
  copy: string;
  points: string[];
  icon: typeof Fingerprint;
  image?: string;
};

type Category = {
  label: string;
  services: Service[];
};

const CATEGORIES: Category[] = [
  {
    label: "Brand Creation & Product Development",
    services: [
      {
        title: "Brand Strategy & Identity",
        copy: "Positioning and identity systems built to hold value across every market you enter.",
        points: ["Brand positioning", "Visual identity", "Logo systems", "Market differentiation"],
        icon: Fingerprint,
        image: IMAGES.logoDesign,
      },
      {
        title: "Product Packaging Design",
        copy: "Shelf-ready and marketplace-ready packaging that earns the click and justifies the price.",
        points: ["Premium packaging", "Product presentation", "Retail-ready designs"],
        icon: Package,
        image: IMAGES.packaging,
      },
      {
        title: "Product Sourcing & Private Label",
        copy: "A vetted supplier network from samples to scale — international sourcing without the risk.",
        points: [
          "Product research",
          "Supplier identification",
          "Quality evaluation",
          "Private label development",
          "OEM/ODM sourcing",
          "Global procurement",
        ],
        icon: Globe2,
      },
    ],
  },
  {
    label: "Ecommerce Growth Engine",
    services: [
      {
        title: "Amazon Growth Management",
        copy: "Full-account marketplace management run on margin, not vanity metrics.",
        points: [
          "Amazon strategy",
          "Listing optimization",
          "Conversion improvement",
          "Marketplace scaling",
        ],
        icon: TrendingUp,
        image: IMAGES.amazonPathway,
      },
      {
        title: "Digital Marketing & Performance Growth",
        copy: "Full-funnel acquisition across search, social, and retail media with disciplined economics.",
        points: ["Paid advertising", "SEO", "Content strategy", "Customer acquisition"],
        icon: Megaphone,
        image: IMAGES.marketing,
      },
      {
        title: "High-Converting Website Development",
        copy: "Storefronts engineered around clarity, speed, and trust — built to convert.",
        points: [
          "Ecommerce websites",
          "Landing pages",
          "Conversion optimization",
          "Brand experience",
        ],
        icon: MonitorSmartphone,
        image: IMAGES.webDesign,
      },
    ],
  },
  {
    label: "UAE Business Setup & Global Expansion",
    services: [
      {
        title: "UAE Company Formation",
        copy: "Licensing, structuring, and banking support so your entity is ready to trade from Dubai.",
        points: ["UAE company registration", "Business setup guidance", "Entrepreneur support"],
        icon: Building2,
        image: IMAGES.uaeSetup,
      },
      {
        title: "LLC Formation & Trade License",
        copy: "End-to-end mainland and free zone setup, handled with zero friction.",
        points: [
          "LLC company setup",
          "Mainland company formation",
          "Free zone company setup",
          "Trade license assistance",
          "Business documentation support",
        ],
        icon: FileBadge,
      },
      {
        title: "Global Marketplace Expansion",
        copy: "Entry sequencing, compliance, and fulfilment so momentum never stalls at a border.",
        points: [
          "International marketplaces",
          "Cross-border commerce",
          "Global customer reach",
          "Expansion strategy",
        ],
        icon: Network,
        image: IMAGES.globalNetwork,
      },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-ink/[0.06] bg-white/80 shadow-[0_20px_50px_-38px_rgba(8,8,8,0.55)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-38px_rgba(8,8,8,0.55)]">
      {service.image ? (
        <div className="relative overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            width={900}
            height={620}
            className="h-44 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
          />
          <span className="absolute bottom-4 left-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-ink shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--brand)_80%,transparent)]">
            <Icon className="h-5 w-5" />
          </span>
        </div>
      ) : (
        <div className="relative h-44 overflow-hidden bg-gradient-to-br from-ink via-graphite to-ink">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl transition-all duration-700 group-hover:bg-brand/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-ink shadow-[0_18px_40px_-14px_color-mix(in_oklab,var(--brand)_80%,transparent)] transition-transform duration-500 group-hover:scale-110">
              <Icon className="h-8 w-8" />
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-graphite/70">{service.copy}</p>
        <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-[12.5px] text-graphite/75">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              {p}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-[13px] font-semibold text-brand transition-colors hover:text-brand-amber"
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-softgray py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Services
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Everything You Need To Build, Launch &amp; Scale Globally
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/70">
              One accountable partner across the full commercial stack — from the first sketch of
              an identity to sustained profitability in every marketplace you sell in.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>
              <Reveal>
                <div className="flex items-center gap-5">
                  <span className="font-display text-sm font-semibold text-brand">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {cat.label}
                  </h3>
                  <span className="h-px flex-1 bg-ink/10" />
                </div>
              </Reveal>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s, i) => (
                  <Reveal key={s.title} delay={i * 80}>
                    <ServiceCard service={s} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
