import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Analytics & Reporting",
  "Comprehensive reporting for your Reddit performance.",
  "/solutions/reddit-analytics-reporting",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-analytics-reporting" bookingLink="/book-a-appointment" />;
}
