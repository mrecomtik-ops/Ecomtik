import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Journey } from "@/components/site/Journey";
import { HomeTeasers } from "@/components/site/HomeTeasers";
import { WhyEcomtik } from "@/components/site/WhyEcomtik";
import { FinalCTA } from "@/components/site/FinalCTA";

const TITLE = "Ecomtik | Global Ecommerce Growth & Business Expansion";
const DESCRIPTION =
  "Ecomtik is a global ecommerce growth and business expansion company headquartered in Dubai — product sourcing, brand creation, marketplace scaling and UAE company formation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <HomeTeasers />
      <WhyEcomtik />
      <FinalCTA />
    </>
  );
}
