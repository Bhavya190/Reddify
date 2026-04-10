import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Growth Campaigns",
  "Scalable growth campaigns on Reddit.",
  "/solutions/reddit-growth-campaigns",
  "in"
);

export default function Page() {
  return <DemoPage title="Growth Campaigns" description="Accelerated growth through targeted Reddit campaigns." region="India" />;
}
