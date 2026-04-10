import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Community Engagement",
  "Consistent community interaction at scale.",
  "/solutions/reddit-engagement",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-engagement" bookingLink="/book-a-appointment" />;
}
