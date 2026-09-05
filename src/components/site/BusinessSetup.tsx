import { Building2, FileCheck2, Globe2, Landmark, MapPin, ScrollText } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const REGIONS = [
  {
    flag: "🇦🇪",
    region: "United Arab Emirates",
    title: "UAE Company Formation",
    items: [
      { icon: Building2, label: "UAE Company Setup" },
      { icon: Landmark, label: "LLC Formation" },
      { icon: ScrollText, label: "Trade License Assistance" },
      { icon: FileCheck2, label: "Business Registration Support" },
    ],
  },
  {
    flag: "🇺🇸",
    region: "United States",
    title: "US Company Formation",
    items: [
      { icon: Building2, label: "US LLC Formation" },
      { icon: FileCheck2, label: "Business Registration Guidance" },
      { icon: Globe2, label: "International Entrepreneur Support" },
    ],
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    title: "UK Company Formation",
    items: [
      { icon: Landmark, label: "UK LTD Formation" },
      { icon: FileCheck2, label: "Company Registration Support" },
      { icon: Globe2, label: "Global Business Setup Solutions" },
    ],
  },
];

export function BusinessSetup() {
  return (
    <section id="formation" className="bg-softgray py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Global Company Formation
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Build your global business from anywhere
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/75">
              Ecomtik helps founders establish legitimate, bankable entities in the world's most
              strategic jurisdictions — with licensing, documentation and compliance handled end
              to end.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {REGIONS.map((r, i) => (
            <Reveal key={r.region} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-[26px] border border-ink/8 bg-white p-8 shadow-[0_30px_70px_-50px_rgba(8,8,8,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_44px_90px_-50px_rgba(8,8,8,0.45)]">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {r.flag}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-graphite/50 uppercase">
                      {r.region}
                    </p>
                    <h3 className="font-display mt-0.5 text-lg font-semibold text-ink">{r.title}</h3>
                  </div>
                </div>
                <ul className="mt-7 flex flex-1 flex-col gap-3.5 border-t border-ink/8 pt-6">
                  {r.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-graphite/85">{item.label}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-amber"
                >
                  Discuss your setup
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-center gap-6 overflow-hidden rounded-[26px] bg-ink p-8 sm:p-10 lg:flex-row lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">
                  One partner. Three jurisdictions. Global reach.
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                  From Dubai headquarters to US and UK entities, we structure your company for
                  banking, marketplaces and cross-border trade — wherever your customers are.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber"
            >
              Book Free Consultation
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_40px_90px_-60px_rgba(8,8,8,0.6)]">
            <img
              src={IMAGES.uaeSetup}
              alt="Global company formation services across UAE, US and UK"
              loading="lazy"
              className="w-full rounded-[18px] object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
