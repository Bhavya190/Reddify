import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for B2B",
  "Thought leadership and lead generation for B2B on Reddit.",
  "/industry/b2b",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit for B2B" description="Strategic networking and lead gen in professional subreddits." region="India" />;
}
