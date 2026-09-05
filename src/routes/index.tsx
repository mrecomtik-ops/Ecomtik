import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { BrandBuilding } from "@/components/site/BrandBuilding";
import { AmazonGrowth } from "@/components/site/AmazonGrowth";
import { GlobalExpansion } from "@/components/site/GlobalExpansion";
import { DubaiStrategy } from "@/components/site/DubaiStrategy";
import { BrandFactory } from "@/components/site/BrandFactory";
import { CaseStudies } from "@/components/site/CaseStudies";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Ecomtik | Dubai Ecommerce Growth & Brand Building Agency";
const DESCRIPTION =
  "Ecomtik is a Dubai-based ecommerce growth agency building brands, launching products and scaling businesses across international marketplaces.";

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
    <div className="min-h-screen scroll-smooth bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <BrandBuilding />
        <AmazonGrowth />
        <GlobalExpansion />
        <DubaiStrategy />
        <BrandFactory />
        <CaseStudies />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
