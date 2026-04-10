import { constructMetadata } from "@/lib/seo";
import { AboutCompany } from "@/components/pages/AboutCompany";

export const generateMetadata = () => constructMetadata(
  "About Us",
  "Learn about the team behind Reddify.",
  "/about-us",
  "in"
);

export default function Page() {
  return (
    <div className="container">
      <AboutCompany />
    </div>
  );
}
