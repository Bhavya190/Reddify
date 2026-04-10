import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit Commenting",
  "Steer the narrative through nuanced commentary in the US.",
  "/us/solutions/reddit-commenting",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-commenting" bookingLink="/us/book-a-appointment" />;
}
