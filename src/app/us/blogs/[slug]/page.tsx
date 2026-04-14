import { constructMetadata } from "@/lib/seo";
import { BlogDetail } from "@/components/pages/BlogDetail";
import { blogsData } from "@/lib/blogs_data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find(b => b.slug === slug);
  if (!post) return constructMetadata("Post Not Found", "", "", "us");

  return constructMetadata(
    post.title,
    post.description,
    `/blogs/${slug}`,
    "us"
  );
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogsData.find(b => b.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}

export function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}
