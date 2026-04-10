import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Book a Appointment",
  "Schedule a consultation for Reddit strategy in the US.",
  "/us/book-a-appointment",
  "us"
);

export default function Page() {
  return <DemoPage title="Book an Appointment" description="Find a time to talk about your Reddit growth (US)." region="USA" />;
}
