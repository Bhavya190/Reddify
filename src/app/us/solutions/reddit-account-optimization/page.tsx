import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit Account Optimization",
  "Optimize your Reddit account for better engagement (US).",
  "/us/solutions/reddit-account-optimization",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit Account Optimization" description="Strategic optimization for your Reddit profiles (US market)." region="USA" />;
}
