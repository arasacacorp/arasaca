import type { Metadata } from "next";
import { learningSubDirections } from "@/data/learningServices";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = learningSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/learning/${slug}`,
  });
}

export async function generateStaticParams() {
  return learningSubDirections.map((d) => ({ slug: d.slug }));
}

export default function LearningSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
