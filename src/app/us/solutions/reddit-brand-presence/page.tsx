import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Brand Presence Management",
  "Maintain a consistent brand voice on Reddit (US).",
  "/us/solutions/reddit-brand-presence",
  "us"
);

export default function Page() {
  return <DemoPage title="Brand Presence Management" description="Professional stewardship of your brand's Reddit identity in the US." region="USA" />;
}
