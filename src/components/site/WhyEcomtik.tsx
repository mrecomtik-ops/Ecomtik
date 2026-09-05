import { Compass, Globe, Layers, MapPin, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  { icon: Globe, title: "Global expertise", copy: "Operators who have built and scaled brands across multiple continents and channels." },
  { icon: Compass, title: "Strategic thinking", copy: "Consulting-grade analysis behind every product, price and market decision." },
  { icon: Layers, title: "Complete ecosystem", copy: "Sourcing, branding, growth, marketing and corporate setup under one roof." },
  { icon: MapPin, title: "Dubai headquarters", copy: "A world-class commercial base linking East and West markets." },
  { icon: Rocket, title: "International execution", copy: "Teams and partners who deliver on the ground, not just on the deck." },
];

export function WhyEcomtik() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Why Ecomtik
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Built for companies with international ambition
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 60} className="h-full">
              <div className="group h-full rounded-2xl border border-ink/8 bg-warm p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_30px_70px_-50px_rgba(8,8,8,0.6)]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                  <r.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/70">{r.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
