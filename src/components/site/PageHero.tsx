import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-16 lg:pt-48 lg:pb-24">
      <div className="absolute -top-24 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-brand/12 blur-[130px]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[12px] font-medium text-white/45"
        >
          <Link to="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-white/25" />
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/70">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-7 max-w-3xl">
          <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-amber uppercase">
            {eyebrow}
          </span>
          <h1 className="font-display mt-4 text-4xl font-semibold text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
