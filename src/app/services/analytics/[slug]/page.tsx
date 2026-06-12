import type { Metadata } from "next";
import { analyticsSubDirections } from "@/data/analyticsServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

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

export default function AnalyticsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={analyticsSubDirections}
      fallbackIcon="Search"
      parent={{
        title: "Аналитика и исследования",
        href: "/services/analytics",
        badgeText: "Направление аналитики",
        otherTitle: "Другие направления аналитики",
        allLinkText: "Все направления аналитики и исследований",
      }}
    />
  );
}
