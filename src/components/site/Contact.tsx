import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const EMAIL = "mr.ecomtik@gmail.com";
const WHATSAPP = "971561677408";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi Ecomtik — I'd like to book a free consultation about building my brand."
)}`;

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Free consultation request — ${form.name || "New inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand/70 focus:bg-white/[0.09]";

  return (
    <section id="contact" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <span className="text-[11px] font-semibold tracking-[0.22em] text-brand uppercase">
                Contact Ecomtik
              </span>
              <h2 className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl lg:leading-tight">
                Start building your brand
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-graphite/75">
                Tell us where you are today — we'll come back with a candid view of the
                opportunity, the sequence, and what it takes to win globally.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-ink/5"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>

              <div className="mt-10 space-y-3 text-sm text-graphite/70">
                <p>
                  <span className="font-semibold text-ink">Headquarters:</span> Al Kaabi Building,
                  Al Karama, Dubai, United Arab Emirates
                </p>
                <p>
                  <span className="font-semibold text-ink">Email:</span>{" "}
                  <a href={`mailto:${EMAIL}`} className="text-brand hover:text-brand-amber">
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-ink">WhatsApp:</span>{" "}
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="text-brand hover:text-brand-amber">
                    +971 56 167 7408
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-[30px] bg-ink p-8 shadow-[0_50px_110px_-60px_rgba(8,8,8,0.7)] sm:p-10"
            >
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-brand/25 blur-[110px]" />
              <div className="relative">
                <h3 className="font-display text-xl font-semibold text-white">
                  Book Free Consultation
                </h3>
                <p className="mt-2 text-sm text-white/55">
                  A senior strategist will respond within one business day.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                    aria-label="Your name"
                  />
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Your email"
                    className={field}
                    aria-label="Your email"
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your product, market and goals…"
                  className={`${field} mt-4 resize-none`}
                  aria-label="Your message"
                />

                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber sm:w-auto"
                >
                  Start Building Your Brand
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
