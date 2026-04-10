import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Terms of Service",
  "Terms and conditions for using Reddify.",
  "/terms-of-service",
  "in"
);

export default function Page() {
  return <DemoPage title="Terms of Service" description="Please read our terms carefully." region="India" />;
}
