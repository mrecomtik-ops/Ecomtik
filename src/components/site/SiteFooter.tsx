import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Marketplaces", to: "/marketplaces" },
  { label: "Insights", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const SERVICES = [
  { label: "Brand Building & Identity", slug: "logo-design" },
  { label: "Product Sourcing & Private Label", slug: "amazon-product-sourcing" },
  { label: "Amazon Growth Management", slug: "amazon-account-management" },
  { label: "Global Marketplace Expansion", slug: "global-marketplace-expansion" },
  { label: "High-Converting Websites", slug: "website-design" },
  { label: "Digital Marketing", slug: "digital-marketing" },
] as const;

const FORMATION = [
  { label: "UAE Company Formation", slug: "company-setup" },
  { label: "LLC Formation & Trade License", slug: "company-setup" },
  { label: "US LLC Formation", slug: "us-llc-formation" },
  { label: "UK LTD Formation", slug: "uk-company-formation" },
] as const;

const WHATSAPP_URL = `https://wa.me/971561677408?text=${encodeURIComponent(
  "Hi Ecomtik — I'd like to discuss growing my business."
)}`;

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex rounded-2xl bg-white p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
              <img src={IMAGES.logo} alt="Ecomtik" className="h-24 w-auto" loading="lazy" />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A global ecommerce growth and business expansion company headquartered in Dubai —
              helping entrepreneurs and brands build, launch and scale across international
              marketplaces.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="mailto:mr.ecomtik@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-colors hover:border-brand hover:text-brand"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    className="text-sm text-white/65 transition-colors hover:text-brand"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((i) => (
                <li key={i.label}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: i.slug }}
                    className="text-sm text-white/65 transition-colors hover:text-brand"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
              Company Formation
            </h3>
            <ul className="mt-5 space-y-3">
              {FORMATION.map((i) => (
                <li key={i.label}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: i.slug }}
                    className="text-sm text-white/65 transition-colors hover:text-brand"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Al Kaabi Building, Al Karama, Dubai, United Arab Emirates
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href="mailto:mr.ecomtik@gmail.com" className="hover:text-brand">
                  mr.ecomtik@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-brand" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-brand">
                  +971 56 167 7408
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ecomtik. All rights reserved.</p>
          <p>
            <Link to="/privacy" className="hover:text-brand">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:text-brand">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
