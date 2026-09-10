import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { submitContact, type ContactSubmission } from "@/lib/contact-server-fn";
import { getPublishedRecords } from "@/content/registry";
import { trackEvent } from "@/lib/analytics";

const EMAIL = "mr.ecomtik@gmail.com";
const WHATSAPP = "971561677408";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi Ecomtik — I'd like to book a free consultation about building my brand."
)}`;

const SUCCESS_MESSAGE =
  "Your enquiry has been received. The Ecomtik team will review your message and contact you using the details provided.";
const FAILURE_MESSAGE =
  "Your enquiry could not be submitted. Your details are still here. Please try again or contact us on WhatsApp.";

const EMPTY_FORM = {
  name: "",
  email: "",
  whatsapp: "",
  service: "",
  marketplace: "",
  storeUrl: "",
  message: "",
  honeypot: "",
};

type SubmitState = "idle" | "pending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [startedAt] = useState(() => Date.now());
  const [state, setState] = useState<SubmitState>("idle");
  const services = getPublishedRecords("service");

  const field =
    "w-full rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-brand/70 focus:bg-white/[0.09]";
  const label = "mb-1.5 block text-[12px] font-semibold tracking-wide text-white/55";

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (state === "pending") return;
    setState("pending");

    const payload: ContactSubmission = { ...form, startedAt };
    try {
      const result = await submitContact({ data: payload });
      setState(result.ok ? "success" : "error");
      // Lead event fires only on a durably-accepted enquiry — no name/email/
      // message/phone in the event params, per the no-PII-in-analytics rule.
      if (result.ok) trackEvent("generate_lead");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="contact" className="bg-warm py-24 lg:py-32">
        <div className="mx-auto max-w-[720px] px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Thank you
            </h2>
            <p className="mt-4 text-base leading-relaxed text-graphite/75">{SUCCESS_MESSAGE}</p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-warm py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Talk to a senior strategist
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-graphite/75">
                Tell us what you sell, where you want to sell it and what is holding the business
                back.
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
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand hover:text-brand-amber"
                  >
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
                  Discuss your Amazon or ecommerce project
                </h3>

                {/* Honeypot — hidden from sighted/keyboard users, bots often fill every field. */}
                <input
                  type="text"
                  name="company"
                  value={form.honeypot}
                  onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] h-px w-px opacity-0"
                />

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="contact-name">
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="contact-email">
                      Business email
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="contact-whatsapp">
                      WhatsApp / phone number (optional)
                    </label>
                    <input
                      id="contact-whatsapp"
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="+971 5X XXX XXXX"
                      className={field}
                    />
                  </div>
                  <div>
                    <label className={label} htmlFor="contact-marketplace">
                      Target marketplace
                    </label>
                    <input
                      id="contact-marketplace"
                      value={form.marketplace}
                      onChange={(e) => setForm({ ...form, marketplace: e.target.value })}
                      placeholder="e.g. Amazon UAE, Amazon US"
                      className={field}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="contact-service">
                      Service required
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={field}
                    >
                      <option value="">Not sure yet</option>
                      {services.map((s) => (
                        <option key={s.metadata.id} value={s.metadata.h1}>
                          {s.metadata.h1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className={label} htmlFor="contact-store-url">
                    Product or store link (optional)
                  </label>
                  <input
                    id="contact-store-url"
                    type="url"
                    value={form.storeUrl}
                    onChange={(e) => setForm({ ...form, storeUrl: e.target.value })}
                    placeholder="https://"
                    className={field}
                  />
                </div>

                <div className="mt-4">
                  <label className={label} htmlFor="contact-message">
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Include your current stage, the main problem and any deadline that affects the project. Please do not include passwords or sensitive account documents."
                    className={`${field} resize-none`}
                  />
                </div>

                {state === "error" && (
                  <p role="alert" className="mt-4 text-sm font-medium text-red-400">
                    {FAILURE_MESSAGE}
                  </p>
                )}

                <p className="mt-4 text-xs leading-relaxed text-white/40">
                  We will use the information you provide to respond to your enquiry. Read our{" "}
                  <a href="/privacy" className="underline hover:text-white/70">
                    privacy notice
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  disabled={state === "pending"}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-amber disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {state === "pending" ? "Sending…" : "Send enquiry"}
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
