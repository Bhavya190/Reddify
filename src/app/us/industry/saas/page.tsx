import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for SaaS",
  "Reddit marketing strategies for SaaS businesses (US).",
  "/us/industry/saas",
  "us"
);

export default function Page() {
  return <IndustryDetails slug="saas" bookingLink="/us/book-a-appointment" />;
}
