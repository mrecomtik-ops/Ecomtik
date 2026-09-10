import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

export function LegalPlaceholder({
  title,
  requiredInputs,
}: {
  title: string;
  requiredInputs: string[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro="This page is not yet published. Ecomtik has not provided the business and legal facts needed to publish an accurate version, so no policy text is shown here."
        crumbs={[{ label: title }]}
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10">
          <Reveal>
            <p className="text-sm leading-relaxed text-graphite/75">
              Publishing this page accurately requires the following inputs from Ecomtik's
              business owner:
            </p>
            <ul className="mt-5 space-y-2 text-sm text-graphite/80">
              {requiredInputs.map((input) => (
                <li key={input} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {input}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
