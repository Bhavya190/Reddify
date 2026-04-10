import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for B2C",
  "Consumer brand marketing and engagement on Reddit.",
  "/industry/b2c",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit for B2C" description="Broad consumer reach and lifestyle marketing." region="India" />;
}
