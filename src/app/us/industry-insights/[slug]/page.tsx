import { constructMetadata } from "@/lib/seo";
import { IndustryInsightsDetail } from "@/components/pages/IndustryInsightsDetail";
import { insightsData } from "@/lib/insights_data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: PageProps) => {
  const { slug } = await params;
  const insight = insightsData.find(i => i.slug === slug);
  if (!insight) return constructMetadata("Not Found", "", "", "us");
  
  return constructMetadata(
    insight.title,
    insight.description,
    `/industry-insights/${insight.slug}`,
    "us"
  );
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightsData.find(i => i.slug === slug);
  
  if (!insight) {
    notFound();
  }

  return <IndustryInsightsDetail insight={insight} />;
}

export function generateStaticParams() {
  return insightsData.map((insight) => ({
    slug: insight.slug,
  }));
}
