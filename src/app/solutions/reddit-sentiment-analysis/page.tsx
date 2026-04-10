import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit Sentiment Analysis",
  "Understand what Reddit says about your brand.",
  "/solutions/reddit-sentiment-analysis",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit Sentiment Analysis" description="AI-driven sentiment tracking for your brand." region="India" />;
}
