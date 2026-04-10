import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Growth Campaigns",
  "Performance-driven growth engineered for Reddit.",
  "/solutions/reddit-growth-campaigns",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-growth-campaigns" bookingLink="/book-a-appointment" />;
}
