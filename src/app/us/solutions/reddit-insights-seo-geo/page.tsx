import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Insights & SEO/GEO",
  "Dominate US search results through Reddit SEO.",
  "/us/solutions/reddit-insights-seo-geo",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-insights-seo-geo" bookingLink="/us/book-a-appointment" />;
}
