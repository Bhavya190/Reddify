import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for B2C",
  "Consumer brand marketing and engagement on Reddit (US).",
  "/us/industry/b2c",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddit for B2C" description="Broad consumer reach and lifestyle marketing in the US." region="USA" />;
}
