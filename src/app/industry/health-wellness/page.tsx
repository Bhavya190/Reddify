import { constructMetadata } from "@/lib/seo";
import { IndustryDetails } from "@/components/pages/IndustryDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit for Health & Wellness",
  "Community management for health and wellness brands.",
  "/industry/health-wellness",
  "in"
);

export default function Page() {
  return <IndustryDetails slug="health-wellness" bookingLink="/book-a-appointment" />;
}
