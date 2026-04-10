import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Our Blog",
  "Insights and guides on Reddit marketing.",
  "/blogs",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddify Blog" description="Expert tips and strategies for Reddit communities." region="India" />;
}
