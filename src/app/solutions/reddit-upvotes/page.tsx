import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Strategic Upvotes",
  "Drive visibility through organic upvoting networks.",
  "/solutions/reddit-upvotes",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-upvotes" bookingLink="/book-a-appointment" />;
}
