import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-graphite py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-ink">
            <img
              src={IMAGES.trajectory}
              alt="Upward growth trajectory visual"
              loading="lazy"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-brand/35 blur-[120px]" />

            <div className="relative max-w-2xl px-8 py-16 sm:px-14 lg:px-16 lg:py-24">
              <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-amber uppercase">
                Command your upward trajectory
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Let's build the brand your category hasn't seen yet.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Share where you are today and we'll come back with a candid view of the
                opportunity, the sequence, and what it takes to win.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@ecomtik.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber"
                >
                  Start Growing
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
