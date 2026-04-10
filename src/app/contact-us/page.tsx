import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Contact Us",
  "Get in touch with the Reddify team.",
  "/contact-us",
  "in"
);

export default function Page() {
  return <DemoPage title="Contact Us" description="Have questions? We're here to help." region="India" />;
}
