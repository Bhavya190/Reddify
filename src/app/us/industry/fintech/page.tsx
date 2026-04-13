import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for FinTech",
  "Financial services marketing on Reddit (US).",
  "/us/industry/fintech",
  "us"
);

export default function Page() {
  return <IndustryDetails slug="fintech" bookingLink="/us/book-a-appointment" />;
}
