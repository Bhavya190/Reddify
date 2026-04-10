import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Sentiment Analysis",
  "Deep-dive into community sentiment and brand health.",
  "/solutions/reddit-sentiment-analysis",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-sentiment-analysis" bookingLink="/book-a-appointment" />;
}
