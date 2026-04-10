import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Home",
  "Optimize your brand presence on Reddit with Reddify US.",
  "/us",
  "us"
);

export default function Home() {
  return (
    <DemoPage 
      title="Welcome to Reddify USA" 
      description="The ultimate Reddit marketing and strategy platform localized for the US market."
      region="USA"
    />
  );
}
