import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for FinTech",
  "Financial services marketing on Reddit.",
  "/industry/fintech",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit for FinTech" description="Building trust and transparency in finance subreddits." region="India" />;
}
