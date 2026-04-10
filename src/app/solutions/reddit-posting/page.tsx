import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit Posting & Seeding",
  "Launch high-impact threads that drive engagement.",
  "/solutions/reddit-posting",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-posting" bookingLink="/book-a-appointment" />;
}
