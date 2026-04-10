import { constructMetadata } from "@/lib/seo";
import { SolutionDetails } from "@/components/pages/SolutionDetails";

export const generateMetadata = () => constructMetadata(
  "Content & Thread Engineering",
  "Bespoke thread creation designed for US Reddit communities.",
  "/us/solutions/reddit-content-thread-engineering",
  "us"
);

export default function Page() {
  return <SolutionDetails slug="reddit-content-thread-engineering" bookingLink="/us/book-a-appointment" />;
}
