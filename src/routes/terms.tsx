import { createFileRoute } from "@tanstack/react-router";

import { LegalPlaceholder } from "@/components/site/LegalPlaceholder";

const TITLE = "Terms | Ecomtik";
const DESCRIPTION = "Ecomtik's terms are pending confirmed legal and business details.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPlaceholder
      title="Terms"
      requiredInputs={[
        "The real legal entity name and jurisdiction the website/service terms are issued under",
        "Actual service engagement terms: scope, payment, cancellation and liability positions",
        "Third-party charges and pass-through costs (e.g. formation, advertising spend) and how they're billed",
        "Intellectual property and ownership terms for delivered creative/brand assets",
        "Dispute resolution process and governing law",
        "A real contact route for legal questions",
      ]}
    />
  );
}
