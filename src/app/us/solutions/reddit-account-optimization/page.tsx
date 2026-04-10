import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Account Optimization",
  "Optimize your Reddit account for better engagement in the US.",
  "/us/solutions/reddit-account-optimization",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-account-optimization" bookingLink="/us/book-a-appointment" />;
}
