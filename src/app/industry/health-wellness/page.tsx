import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Reddit for Health & Wellness",
  "Community management for health and wellness brands.",
  "/industry/health-wellness",
  "in"
);

export default function Page() {
  return <DemoPage title="Reddit for Health & Wellness" description="Empathetic engagement in wellness-focused communities." region="India" />;
}
