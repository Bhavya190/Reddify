import { constructMetadata } from "@/lib/seo";
import { AboutCompany } from "@/components/pages/AboutCompany";

export const generateMetadata = () => constructMetadata(
  "About Us",
  "Learn about the team behind Reddify in the US.",
  "/us/about-us",
  "us"
);

export default function Home() {
  return (
    <div className="container">
      <AboutCompany />
    </div>
  );
}
