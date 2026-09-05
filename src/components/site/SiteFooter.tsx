import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Amazon Growth", href: "#amazon-growth" },
  { label: "Case Studies", href: "#case-studies" },
];

const SERVICES = [
  { label: "Brand Architecture", href: "#services" },
  { label: "Website Design", href: "#services" },
  { label: "Product Packaging", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "UAE Company Setup", href: "#services" },
];

const COMPANY = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#solutions" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img src={IMAGES.logo} alt="Ecomtik" className="h-14 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A Dubai-based ecommerce growth and brand-building agency helping businesses create
              brands, launch products, and scale across international marketplaces.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@ecomtik.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {[
            { title: "Navigation", items: NAV },
            { title: "Services", items: SERVICES },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <a href={i.href} className="text-sm text-white/65 transition-colors hover:text-brand">
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Company &amp; Contact
            </h3>
            <ul className="mt-5 space-y-3">
              {COMPANY.map((i) => (
                <li key={i.label}>
                  <a href={i.href} className="text-sm text-white/65 transition-colors hover:text-brand">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Business Bay, Dubai, United Arab Emirates
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href="mailto:hello@ecomtik.com" className="hover:text-brand">
                  hello@ecomtik.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                +971 4 000 0000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ecomtik. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
