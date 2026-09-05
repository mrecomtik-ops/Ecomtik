import { Reveal } from "./Reveal";

const STAGES = [
  { label: "Idea", copy: "Category research and opportunity validation." },
  { label: "Product", copy: "Sourcing, sampling and private label development." },
  { label: "Brand", copy: "Identity, packaging and commercial storytelling." },
  { label: "Marketplace", copy: "Launch, listings and channel activation." },
  { label: "Global Growth", copy: "Cross-border expansion and compounding scale." },
];

export function Journey() {
  return (
    <section className="border-b border-ink/5 bg-warm py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
              The Ecomtik Ecosystem
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.75rem]">
              One partner for the entire commerce journey
            </h2>
            <p className="mt-5 text-base leading-relaxed text-graphite/75">
              Ecomtik manages every stage between an idea and an international brand — so growth is
              engineered, not improvised.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STAGES.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(8,8,8,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">{s.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/70">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
