import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Sentiment Analysis",
  "Deep-dive into community sentiment and brand health in the US.",
  "/us/solutions/reddit-sentiment-analysis",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-sentiment-analysis" bookingLink="/us/book-a-appointment" />;
}
