import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit Account Optimization",
  "Optimize your Reddit account for better engagement.",
  "/solutions/reddit-account-optimization",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit Account Optimization" description="Strategic optimization for your Reddit profiles." region="India" />;
}
