import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for B2C",
  "Consumer brand marketing and engagement on Reddit (US).",
  "/us/industry/b2c",
  "us"
);

export default function Page() {
  return <IndustryDetails slug="b2c" bookingLink="/us/book-a-appointment" />;
}
