import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Growth Campaigns",
  "Performance-driven growth engineered for the US market.",
  "/us/solutions/reddit-growth-campaigns",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-growth-campaigns" bookingLink="/us/book-a-appointment" />;
}
