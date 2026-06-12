import type { Metadata } from "next";
import { engineeringSubDirections } from "@/data/engineeringServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = engineeringSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/engineering/${slug}`,
  });
}

export async function generateStaticParams() {
  return engineeringSubDirections.map((d) => ({ slug: d.slug }));
}

export default function EngineeringSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={engineeringSubDirections}
      fallbackIcon="Wrench"
      parent={{
        title: "Инженерный консалтинг",
        href: "/services/engineering",
        badgeText: "Направление инженерного консалтинга",
        otherTitle: "Другие направления инженерного консалтинга",
        allLinkText: "Все направления инженерного консалтинга",
      }}
    />
  );
}
