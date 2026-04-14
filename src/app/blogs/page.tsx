import { constructMetadata } from "@/lib/seo";
import { BlogLanding } from "@/components/pages/BlogLanding";

export const generateMetadata = () => constructMetadata(
  "Reddify Blog",
  "Expert tips and strategies for Reddit marketing and community growth.",
  "/blogs",
  "in"
);

export default function Page() {
  return <BlogLanding region="India" />;
}
