import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const NAV = [
  { label: "Home", to: "/", exact: true },
  { label: "Services", to: "/services" },
  { label: "Marketplaces", to: "/marketplaces" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-warm/95 shadow-[0_1px_30px_-12px_rgba(8,8,8,0.12)] backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Ecomtik home">
          <img src={IMAGES.logo} alt="Ecomtik" className="h-14 w-auto lg:h-16" />
        </Link>

        <nav className="hidden items-center gap-x-5 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...("exact" in item && item.exact ? { activeOptions: { exact: true } } : {})}
              activeProps={{ className: "text-ink after:w-full" }}
              className="relative text-[13px] font-bold tracking-wide text-graphite/80 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-6 py-3 text-[13px] font-semibold text-ink shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--brand)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber sm:inline-flex"
          >
            Start Growing
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-warm xl:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...("exact" in item && item.exact ? { activeOptions: { exact: true } } : {})}
                activeProps={{ className: "text-brand" }}
                className="border-b border-border/60 py-3.5 text-sm font-bold text-graphite last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-ink"
            >
              Start Growing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
