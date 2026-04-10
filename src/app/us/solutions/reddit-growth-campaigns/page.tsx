import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Growth Campaigns",
  "Scalable growth campaigns on Reddit (US).",
  "/us/solutions/reddit-growth-campaigns",
  "us"
);

export default function Page() {
  return <DemoPage title="Growth Campaigns" description="Accelerated growth through targeted US Reddit campaigns." region="USA" />;
}
