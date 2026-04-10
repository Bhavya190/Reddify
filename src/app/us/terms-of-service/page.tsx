import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Terms of Service",
  "Terms and conditions for using Reddify in the US.",
  "/us/terms-of-service",
  "us"
);

export default function Page() {
  return <DemoPage title="Terms of Service" description="Please read our terms carefully (US version)." region="USA" />;
}
