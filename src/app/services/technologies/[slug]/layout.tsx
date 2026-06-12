import type { Metadata } from "next";
import { technologiesSubDirections } from "@/data/technologiesServices";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = technologiesSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/technologies/${slug}`,
  });
}

export async function generateStaticParams() {
  return technologiesSubDirections.map((d) => ({ slug: d.slug }));
}

export default function TechnologiesSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
