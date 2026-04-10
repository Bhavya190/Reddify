import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return constructMetadata(
    `Case Study: ${slug}`,
    `In-depth look at our success with ${slug} in the US market.`,
    `/us/case-studies/${slug}`,
    "us"
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <DemoPage title={`Case Study: ${slug}`} description={`Detailed analysis of the ${slug} US campaign results.`} region="USA" />;
}
