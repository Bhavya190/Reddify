import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Brand Presence Management",
  "Maintain a consistent brand voice on Reddit.",
  "/solutions/reddit-brand-presence",
  "in"
);

export default function Page() {
  return <DemoPage title="Brand Presence Management" description="Professional stewardship of your brand's Reddit identity." region="India" />;
}
