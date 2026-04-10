import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Analytics & Reporting",
  "Comprehensive reporting for your Reddit performance.",
  "/solutions/reddit-analytics-reporting",
  "in"
);

export default function Page() {
  return <DemoPage title="Analytics & Reporting" description="Detailed data and growth reporting for Reddit campaigns." region="India" />;
}
