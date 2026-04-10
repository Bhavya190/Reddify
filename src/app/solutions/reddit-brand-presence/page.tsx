import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Brand Presence",
  "Build an authentic voice for your brand on Reddit.",
  "/solutions/reddit-brand-presence",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-brand-presence" bookingLink="/book-a-appointment" />;
}
