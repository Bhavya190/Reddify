import { constructMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { DecisionEngine } from "@/components/home/DecisionEngine";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeOperate } from "@/components/home/HowWeOperate";
import { PricingTable } from "@/components/pricing/PricingTable";

export const generateMetadata = () => constructMetadata(
  "Home",
  "Optimize your brand presence on Reddit with Reddify US.",
  "/us",
  "us"
);

export default function Home() {
  return (
    <>
      <Hero />
      <DecisionEngine />
      <WhatWeDo />
      <HowWeOperate />
      <PricingTable />
    </>
  );
}
