import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Pricing",
  "View our affordable Reddit marketing plans.",
  "/pricing",
  "in"
);

export default function Page() {
  return <DemoPage title="Pricing Plans" description="Flexible pricing for brands of all sizes." region="India" />;
}
