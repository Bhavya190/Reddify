import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for FinTech",
  "Financial services marketing on Reddit (US).",
  "/us/industry/fintech",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit for FinTech" description="Building trust and transparency in US finance subreddits." region="USA" />;
}
