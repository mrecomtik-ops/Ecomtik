import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { ProductSourcing } from "@/components/site/ProductSourcing";
import { BusinessSetup } from "@/components/site/BusinessSetup";
import { WhyEcomtik } from "@/components/site/WhyEcomtik";
import { Services } from "@/components/site/Services";
import { BrandBuilding } from "@/components/site/BrandBuilding";
import { AmazonGrowth } from "@/components/site/AmazonGrowth";
import { GlobalExpansion } from "@/components/site/GlobalExpansion";
import { DubaiStrategy } from "@/components/site/DubaiStrategy";
import { BrandFactory } from "@/components/site/BrandFactory";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

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
    <div className="min-h-screen scroll-smooth bg-white">
      <SiteHeader />
      <main>
        <Hero />
        <Journey />
        <Services />
        <BrandBuilding />
        <ProductSourcing />
        <BusinessSetup />
        <AmazonGrowth />
        <GlobalExpansion />
        <DubaiStrategy />
        <BrandFactory />
        <WhyEcomtik />
        <CaseStudies />
        <Contact />
        <FinalCTA />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
