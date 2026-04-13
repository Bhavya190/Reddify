import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for SaaS",
  "Reddit marketing strategies for SaaS businesses.",
  "/industry/saas",
  "in"
);

export default function Page() {
  return <IndustryDetails slug="saas" bookingLink="/book-a-appointment" />;
}
