import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit Posting",
  "Strategic posting strategies for Reddit communities (US).",
  "/us/solutions/reddit-posting",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit Posting Strategies" description="Effective ways to post and engage with US subreddits." region="USA" />;
}
