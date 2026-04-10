import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "About Us",
  "Learn about the team behind Reddify.",
  "/about-us",
  "in"
);

export default function Page() {
  return <DemoPage title="About Us" description="We are experts in Reddit community engagement." region="India" />;
}
