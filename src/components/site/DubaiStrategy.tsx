import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "2016", label: "Operating from Dubai" },
  { value: "180+", label: "Brands launched and scaled" },
  { value: "14", label: "Countries actively served" },
];

export function DubaiStrategy() {
  return (
    <section id="about" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.05fr] lg:px-10">
        <Reveal>
          <div>
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              About Ecomtik
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Dubai strategy, global execution
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/75">
              Dubai sits at the intersection of East and West commerce, and we built Ecomtik to
              use that advantage. Our strategists, brand architects, and marketplace operators work
              as a single trust — advising founders and boards with the rigour of a consulting firm
              and the accountability of an operating partner.
            </p>
            <p className="mt-4 text-base leading-relaxed text-graphite/70">
              We take positions on category, pricing, and expansion sequence, then stay to run them.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-ink">{s.value}</p>
                  <p className="mt-1.5 text-[12px] leading-snug text-graphite/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-brand/12 blur-3xl" />
            <img
              src={IMAGES.dubai}
              alt="Dubai strategy team visual"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-[26px] object-cover shadow-[0_45px_90px_-50px_rgba(8,8,8,0.6)]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
