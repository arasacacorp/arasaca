import type { Metadata } from "next";
import { analyticsSubDirections } from "@/data/analyticsServices";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = analyticsSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/analytics/${slug}`,
  });
}

export async function generateStaticParams() {
  return analyticsSubDirections.map((d) => ({ slug: d.slug }));
}

export default function AnalyticsSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
