import { createFileRoute } from "@tanstack/react-router";

import { LegalPlaceholder } from "@/components/site/LegalPlaceholder";

const TITLE = "Privacy Notice | Ecomtik";
const DESCRIPTION = "Ecomtik's privacy notice is pending confirmed legal and business details.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPlaceholder
      title="Privacy notice"
      requiredInputs={[
        "The real legal entity name, registration and registered address that operates ecomtik.com",
        "What personal data is collected (enquiry form, analytics, cookies) and why",
        "Which third parties or processors receive data (e.g. email/notification provider, analytics)",
        "Data retention periods and the process for a user to request deletion or correction",
        "A real contact route for privacy questions (email or postal address)",
        "Applicable law and any regulator/supervisory authority details",
      ]}
    />
  );
}
