import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const TRUST = ["Brand Strategy", "Global Expansion", "Marketplace Growth"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-warm">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 pt-32 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-10 lg:pt-44 lg:pb-28">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-graphite uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Dubai · Global Ecommerce Growth
          </span>

          <h1 className="mt-7 text-[2.75rem] leading-[1.03] font-semibold text-ink sm:text-6xl lg:text-[4.25rem]">
            Build Brands.
            <br />
            Scale Globally.
            <br />
            <span className="bg-gradient-to-r from-brand to-brand-amber bg-clip-text text-transparent">
              Grow Intelligently.
            </span>
          </h1>

          <p className="mt-7 text-base leading-relaxed text-graphite/75 sm:text-lg">
            Ecomtik is a Dubai-based ecommerce growth and brand-building partner. We create
            brands from first principles, launch products with precision, and scale them
            profitably across international marketplaces.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink shadow-[0_18px_45px_-18px_color-mix(in_oklab,var(--brand)_90%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber"
            >
              Start Growing
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink/40 hover:bg-white"
            >
              View Case Studies
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-ink/10 pt-7">
            {TRUST.map((t) => (
              <div key={t} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                <span className="text-[13px] font-medium tracking-wide text-graphite">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-3xl" />
          <div className="glass-dark animate-in fade-in slide-in-from-bottom-6 overflow-hidden rounded-[28px] p-3 shadow-[0_50px_100px_-40px_rgba(8,8,8,0.65)] duration-1000 lg:rotate-[0.6deg] lg:transition-transform lg:duration-700 lg:hover:rotate-0">
            <img
              src={IMAGES.commandCenter}
              alt="Global commerce intelligence dashboard visual"
              width={1200}
              height={900}
              className="w-full rounded-[20px] object-cover"
            />
          </div>

          <div className="glass-dark absolute -bottom-8 -left-4 hidden rounded-2xl px-6 py-5 text-white shadow-[0_30px_60px_-30px_rgba(8,8,8,0.8)] sm:block">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/55 uppercase">
              Marketplaces served
            </p>
            <p className="font-display mt-1 text-3xl font-semibold">21+</p>
          </div>
          <div className="glass-dark absolute -top-6 right-2 hidden rounded-2xl px-6 py-5 text-white shadow-[0_30px_60px_-30px_rgba(8,8,8,0.8)] lg:block">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-white/55 uppercase">
              Avg. revenue lift
            </p>
            <p className="font-display mt-1 text-3xl font-semibold text-brand-amber">3.4x</p>
          </div>
        </div>
      </div>
    </section>
  );
}
