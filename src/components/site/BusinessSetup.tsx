import { Building2, FileCheck2, Globe2, Landmark, ScrollText } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: Building2, title: "UAE company formation", copy: "Mainland and free zone structures matched to your trading model." },
  { icon: Landmark, title: "LLC setup", copy: "Shareholding, licensing and corporate structuring handled end to end." },
  { icon: ScrollText, title: "Trade license support", copy: "Activity selection, approvals and renewals without the guesswork." },
  { icon: FileCheck2, title: "Business registration guidance", copy: "Documentation, banking readiness and compliance sequencing." },
  { icon: Globe2, title: "Dubai headquarters advantage", copy: "A tax-efficient base connecting Europe, Asia and the Americas." },
];

export function BusinessSetup() {
  return (
    <section id="solutions" className="bg-softgray py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              Global Business Solutions
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
              Launch your company where the world trades
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/75">
              Ecomtik gives founders a legitimate, bankable international entity — and the strategic
              base to operate across borders from day one.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[26px] bg-white p-3 shadow-[0_40px_90px_-60px_rgba(8,8,8,0.6)]">
              <img
                src={IMAGES.uaeSetup}
                alt="International business setup in the UAE"
                loading="lazy"
                className="w-full rounded-[18px] object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {ITEMS.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="flex gap-4 rounded-2xl border border-ink/8 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite/70">{c.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
