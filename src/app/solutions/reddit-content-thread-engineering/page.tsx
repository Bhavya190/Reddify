import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Content & Thread Engineering",
  "Bespoke thread creation designed for Reddit communities.",
  "/solutions/reddit-content-thread-engineering",
  "in"
);

export default function Page() {
  return <SolutionDetails slug="reddit-content-thread-engineering" bookingLink="/book-a-appointment" />;
}
