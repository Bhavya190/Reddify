import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Contact Us",
  "Get in touch with the Reddify US team.",
  "/us/contact-us",
  "us"
);

export default function Page() {
  return <DemoPage title="Contact Us" description="Have questions? Our US team is here to help." region="USA" />;
}
