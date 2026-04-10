import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Case Studies",
  "Success stories of Reddit marketing campaigns in the US.",
  "/us/case-studies",
  "us"
);

export default function Page() {
  return <DemoPage title="Case Studies Overview" description="See how we've helped US brands grow on Reddit." region="USA" />;
}
