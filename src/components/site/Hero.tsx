import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const TRUST = ["Amazon Growth", "Brand Building", "Global Marketplace Expansion"];

export function Hero() {
  return (
    <section id="home" className="relative mt-20 min-h-[calc(100svh-5rem)] w-full overflow-hidden bg-ink">
      <img
        src={IMAGES.commandCenter}
        alt="Global commerce command centre"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink/95" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_50%,color-mix(in_oklab,var(--ink)_75%,transparent),transparent_70%)]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-[1280px] flex-col justify-center px-6 py-20 lg:px-10">
        <div className="animate-in fade-in slide-in-from-bottom-6 max-w-3xl duration-1000">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-white/85 uppercase backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Global Commerce Growth · Headquartered in Dubai
          </span>

          <h1 className="font-display mt-8 text-[2.6rem] leading-[1.04] font-semibold text-white sm:text-6xl lg:text-[4.5rem]">
            Build Globally.
            <br />
            Scale Intelligently.
            <br />
            <span className="bg-gradient-to-r from-brand to-brand-amber bg-clip-text text-transparent">
              Grow Without Limits.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            From product sourcing and brand creation to ecommerce growth and global expansion,
            Ecomtik helps businesses transform ideas into international brands.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink shadow-[0_18px_45px_-18px_color-mix(in_oklab,var(--brand)_90%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber"
            >
              Start Your Growth Journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Explore Our Solutions
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-7">
            {TRUST.map((t) => (
              <div key={t} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                <span className="text-[13px] font-medium tracking-wide text-white/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
