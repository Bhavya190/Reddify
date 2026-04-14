import { constructMetadata } from "@/lib/seo";
import { IndustryInsightsLanding } from "@/components/pages/IndustryInsightsLanding";

export const generateMetadata = () => constructMetadata(
  "Industry Insights | Reddify",
  "Expert strategies and trends in Reddit marketing for the US market.",
  "/industry-insights",
  "us"
);

export default function Page() {
  return <IndustryInsightsLanding region="USA" />;
}
