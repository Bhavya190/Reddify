import { constructMetadata } from "@/lib/seo";
import { IndustryInsightsLanding } from "@/components/pages/IndustryInsightsLanding";

export const generateMetadata = () => constructMetadata(
  "Industry Insights | Reddify",
  "Expert strategies and trends in Reddit marketing for the Indian market.",
  "/industry-insights",
  "in"
);

export default function Page() {
  return <IndustryInsightsLanding region="India" />;
}
