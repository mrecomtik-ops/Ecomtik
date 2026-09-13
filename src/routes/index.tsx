import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Journey } from "@/components/site/Journey";
import { HomeTeasers } from "@/components/site/HomeTeasers";
import { WhyEcomtik } from "@/components/site/WhyEcomtik";
import { FinalCTA } from "@/components/site/FinalCTA";

const SITE_ORIGIN = "https://ecomtik.com";
const TITLE = "Amazon Growth Agency & Ecommerce Services | Ecomtik";
const DESCRIPTION =
  "Ecomtik is a global Amazon growth and brand-building agency headquartered in Dubai — account management, PPC, listing optimization, product sourcing and marketplace expansion.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:image", content: `${SITE_ORIGIN}/images/hero-amazon-growth.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_ORIGIN}/` }],
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
