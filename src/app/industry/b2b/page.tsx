import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for B2B",
  "Thought leadership and lead generation for B2B on Reddit.",
  "/industry/b2b",
  "in"
);

export default function Page() {
  return <IndustryDetails slug="b2b" bookingLink="/book-a-appointment" />;
}
