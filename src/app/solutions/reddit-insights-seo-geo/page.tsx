import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Insights for SEO & GEO Strategy",
  "Actionable Reddit insights for global strategy.",
  "/solutions/reddit-insights-seo-geo",
  "in"
);

export default function Page() {
  return <DemoPage title="Insights for SEO & GEO Strategy" description="Leverage Reddit data for your SEO and geographic targeting." region="India" />;
}
