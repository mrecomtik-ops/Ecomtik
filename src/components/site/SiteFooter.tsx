import { Linkedin, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { IMAGES } from "@/lib/site-assets";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Company Formation", href: "#formation" },
  { label: "Amazon Growth", href: "#amazon-growth" },
  { label: "Case Studies", href: "#case-studies" },
];

const SERVICES = [
  { label: "Brand Building & Identity", href: "#services" },
  { label: "Product Sourcing & Private Label", href: "#sourcing" },
  { label: "Packaging Design", href: "#services" },
  { label: "Digital Marketing", href: "#services" },
  { label: "Website Development", href: "#services" },
  { label: "Marketplace Expansion", href: "#amazon-growth" },
];

const FORMATION = [
  { label: "UAE Company Formation", href: "#formation" },
  { label: "LLC Formation & Trade License", href: "#formation" },
  { label: "US LLC Formation", href: "#formation" },
  { label: "UK LTD Formation", href: "#formation" },
];

const WHATSAPP_URL = `https://wa.me/971561677408?text=${encodeURIComponent(
  "Hi Ecomtik — I'd like to discuss growing my business."
)}`;

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <img src={IMAGES.logo} alt="Ecomtik" className="h-20 w-auto" loading="lazy" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A global ecommerce growth and business expansion company headquartered in Dubai —
              helping entrepreneurs and brands build, launch and scale across international
              marketplaces.
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
                  <a href={i.href} className="text-sm text-white/65 transition-colors hover:text-brand">
                    {i.label}
                  </a>
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
                  <a href={i.href} className="text-sm text-white/65 transition-colors hover:text-brand">
                    {i.label}
                  </a>
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
                  <a href={i.href} className="text-sm text-white/65 transition-colors hover:text-brand">
                    {i.label}
                  </a>
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
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
