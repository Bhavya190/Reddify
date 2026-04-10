import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Buy Reddit Upvotes",
  "Ethical upvote campaigns to boost visibility.",
  "/solutions/reddit-upvotes",
  "in"
);

export default function Page() {
  return <DemoPage title="Buy Reddit Upvotes" description="Get the visibility your content deserves with strategic upvotes." region="India" />;
}
