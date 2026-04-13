import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for FinTech",
  "Financial services marketing on Reddit.",
  "/industry/fintech",
  "in"
);

export default function Page() {
  return <IndustryDetails slug="fintech" bookingLink="/book-a-appointment" />;
}
