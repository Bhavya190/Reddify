import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Case Studies",
  "Success stories of Reddit marketing campaigns.",
  "/case-studies",
  "in"
);

export default function Page() {
  return <DemoPage title="Case Studies Overview" description="See how we've helped brands grow on Reddit." region="India" />;
}
