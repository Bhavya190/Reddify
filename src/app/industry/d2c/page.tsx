import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for D2C",
  "Grow your direct-to-consumer brand on Reddit.",
  "/industry/d2c",
  "in"
);

export default function Page() {
  return <IndustryDetails slug="d2c" bookingLink="/book-a-appointment" />;
}
