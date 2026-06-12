import type { Metadata } from "next";
import { industries } from "@/data/industries";
import { industryPageContent } from "@/data/industryPages";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  const page = industryPageContent[slug];
  const description = page?.intro?.[0] ?? industry.description;
  return createMetadata({
    title: industry.name,
    description,
    path: `/industries/${slug}`,
  });
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export default function IndustryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
