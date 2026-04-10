import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Content & Thread Engineering",
  "Engineered content and threads for Reddit success.",
  "/solutions/reddit-content-thread-engineering",
  "in"
);

export default function Page() {
  return <DemoPage title="Content & Thread Engineering" description="Crafting high-engagement content for specific subreddits." region="India" />;
}
