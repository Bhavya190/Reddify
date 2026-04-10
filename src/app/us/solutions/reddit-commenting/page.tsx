import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Buy Reddit Commenting",
  "Engaging comment campaigns for brand awareness (US).",
  "/us/solutions/reddit-commenting",
  "us"
);

export default function Page() {
  return <DemoPage title="Buy Reddit Commenting" description="Drive discussions and brand mentions through commenting (US)." region="USA" />;
}
