import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Strategic Upvotes",
  "Drive visibility through organic US upvoting networks.",
  "/us/solutions/reddit-upvotes",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-upvotes" bookingLink="/us/book-a-appointment" />;
}
