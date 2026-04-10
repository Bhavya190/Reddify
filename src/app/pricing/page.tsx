import { constructMetadata } from "@/lib/seo";
import { PricingTable } from "@/components/pricing/PricingTable";

export const generateMetadata = () => constructMetadata(
  "Pricing",
  "View our affordable Reddit marketing plans.",
  "/pricing",
  "in"
);

export default function Page() {
  return <PricingTable />;
}
