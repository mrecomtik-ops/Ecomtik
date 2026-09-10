import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getPublishedRecords, slugFromPath } from "@/content/registry";
import { Reveal } from "./Reveal";

export function ServiceDirectory() {
  const services = getPublishedRecords("service");
  const families = Array.from(
    new Set(services.map((s) => s.metadata.family ?? "Other services"))
  );

  return (
    <section className="bg-softgray py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="space-y-16">
          {families.map((family) => (
            <div key={family}>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">{family}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => (s.metadata.family ?? "Other services") === family)
                  .map((service, i) => (
                    <Reveal key={service.metadata.id} delay={i * 60}>
                      <Link
                        to="/services/$slug"
                        params={{ slug: slugFromPath(service.metadata.path) }}
                        className="group flex h-full flex-col rounded-[20px] border border-ink/8 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(8,8,8,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
                      >
                        <h3 className="text-base font-semibold text-ink">{service.metadata.h1}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/70">
                          {service.metadata.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-brand group-hover:text-brand-amber">
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
