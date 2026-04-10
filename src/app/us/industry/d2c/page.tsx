import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for D2C",
  "Grow your direct-to-consumer brand on Reddit (US).",
  "/us/industry/d2c",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit for D2C" description="Community building and sales for D2C brands in the US." region="USA" />;
}
