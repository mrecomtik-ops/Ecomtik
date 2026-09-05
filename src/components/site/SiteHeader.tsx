import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Amazon Growth", href: "#amazon-growth" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-light shadow-[0_1px_30px_-12px_rgba(8,8,8,0.25)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center" aria-label="Ecomtik home">
          <img src={IMAGES.logo} alt="Ecomtik" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[13px] font-medium tracking-wide text-graphite/80 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand px-6 py-3 text-[13px] font-semibold text-ink shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--brand)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber sm:inline-flex"
          >
            Start Growing
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-light border-t border-border xl:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm font-medium text-graphite last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold text-ink"
            >
              Start Growing
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
