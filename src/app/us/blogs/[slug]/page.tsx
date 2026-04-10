import { constructMetadata } from "@/lib/seo";
import { DemoPage } from "@/components/pages/DemoPage";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return constructMetadata(
    `Blog: ${slug}`,
    `Read more about ${slug} on our US blog.`,
    `/us/blogs/${slug}`,
    "us"
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <DemoPage title={`Blog: ${slug}`} description={`Insights and strategies about ${slug} (US focus).`} region="USA" />;
}
