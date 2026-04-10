import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "About Us",
  "Learn about the team behind Reddify in the US.",
  "/us/about-us",
  "us"
);

export default function Page() {
  return <DemoPage title="About Us" description="We are experts in Reddit community engagement (US team)." region="USA" />;
}
