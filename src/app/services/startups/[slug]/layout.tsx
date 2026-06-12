import type { Metadata } from "next";
import { startupsSubDirections } from "@/data/startupsServices";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = startupsSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/startups/${slug}`,
  });
}

export async function generateStaticParams() {
  return startupsSubDirections.map((d) => ({ slug: d.slug }));
}

export default function StartupsSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
