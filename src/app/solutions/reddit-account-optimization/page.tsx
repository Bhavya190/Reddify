import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Reddit Account Optimization",
  "Optimize your Reddit account for better engagement.",
  "/solutions/reddit-account-optimization",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-account-optimization" bookingLink="/book-a-appointment" />;
}
