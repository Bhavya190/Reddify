import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Insights for SEO & GEO Strategy",
  "Actionable Reddit insights for US and global strategy.",
  "/us/solutions/reddit-insights-seo-geo",
  "us"
);

export default function Page() {
  return <DemoPage title="Insights for SEO & GEO Strategy" description="Leverage US Reddit data for your SEO and geographic targeting." region="USA" />;
}
