import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Analytics & Reporting",
  "Comprehensive reporting for your US Reddit performance.",
  "/us/solutions/reddit-analytics-reporting",
  "us"
);

export default function Page() {
  return <DemoPage title="Analytics & Reporting" description="Detailed data and growth reporting for US campaigns." region="USA" />;
}
