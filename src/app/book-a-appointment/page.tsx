import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";

export const generateMetadata = () => constructMetadata(
  "Book a Appointment",
  "Schedule a consultation for Reddit strategy.",
  "/book-a-appointment",
  "in"
);

export default function Page() {
  return <DemoPage title="Book an Appointment" description="Find a time to talk about your Reddit growth." region="India" />;
}
