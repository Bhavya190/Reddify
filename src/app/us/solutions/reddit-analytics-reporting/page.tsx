import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Analytics & Reporting",
  "Comprehensive reporting for your Reddit performance in the US.",
  "/us/solutions/reddit-analytics-reporting",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-analytics-reporting" bookingLink="/us/book-a-appointment" />;
}
