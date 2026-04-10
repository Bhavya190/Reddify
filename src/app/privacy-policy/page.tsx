import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Privacy Policy",
  "How we handle your data at Reddify.",
  "/privacy-policy",
  "in"
);

export default function Page() {
  return <DemoPage title="Privacy Policy" description="Your privacy is important to us." region="India" />;
}
