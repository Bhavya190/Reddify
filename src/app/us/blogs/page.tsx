import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Our Blog",
  "Insights and guides on Reddit marketing for the US market.",
  "/us/blogs",
  "us"
);

export default function Page() {
  return <DemoPage title="Reddify Blog (US)" description="Expert tips and strategies for US Reddit communities." region="USA" />;
}
