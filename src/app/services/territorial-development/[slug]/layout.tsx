import type { Metadata } from "next";
import { territorialDevelopmentSubDirections } from "@/data/territorialDevelopmentServices";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = territorialDevelopmentSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/territorial-development/${slug}`,
  });
}

export async function generateStaticParams() {
  return territorialDevelopmentSubDirections.map((d) => ({ slug: d.slug }));
}

export default function TerritorialDevelopmentSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
