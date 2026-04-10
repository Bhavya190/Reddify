import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit Posting & Seeding",
  "Launch high-impact threads that drive engagement in the US.",
  "/us/solutions/reddit-posting",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-posting" bookingLink="/us/book-a-appointment" />;
}
