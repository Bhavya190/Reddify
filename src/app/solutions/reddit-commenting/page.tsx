import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit Commenting",
  "Steer the narrative through nuanced commentary.",
  "/solutions/reddit-commenting",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-commenting" bookingLink="/book-a-appointment" />;
}
