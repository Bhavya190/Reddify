import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Brand Presence",
  "Build an authentic voice for your brand on Reddit in the US.",
  "/us/solutions/reddit-brand-presence",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-brand-presence" bookingLink="/us/book-a-appointment" />;
}
