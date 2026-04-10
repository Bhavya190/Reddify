import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Community Engagement",
  "Consistent community interaction at scale in the US.",
  "/us/solutions/reddit-engagement",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-engagement" bookingLink="/us/book-a-appointment" />;
}
