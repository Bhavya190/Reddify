import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for SaaS",
  "Reddit marketing strategies for SaaS businesses (US).",
  "/us/industry/saas",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit for SaaS" description="Growth hacking and user acquisition for software companies in the US." region="USA" />;
}
