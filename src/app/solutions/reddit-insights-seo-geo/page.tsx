import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Insights & SEO/GEO",
  "Dominate search results through Reddit SEO.",
  "/solutions/reddit-insights-seo-geo",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-insights-seo-geo" bookingLink="/book-a-appointment" />;
}
