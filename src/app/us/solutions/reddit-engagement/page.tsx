import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit Engagement",
  "High-quality engagement strategies for Reddit US.",
  "/us/solutions/reddit-engagement",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit Engagement" description="Authentic engagement services to build brand trust (US market)." region="USA" />;
}
