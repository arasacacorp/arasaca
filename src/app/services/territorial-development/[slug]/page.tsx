import type { Metadata } from "next";
import { territorialDevelopmentSubDirections } from "@/data/territorialDevelopmentServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

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

export default function TerritorialDevelopmentSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={territorialDevelopmentSubDirections}
      fallbackIcon="Map"
      parent={{
        title: "Развитие территорий",
        href: "/services/territorial-development",
        badgeText: "Направление развития территорий",
        otherTitle: "Другие направления развития территорий",
        allLinkText: "Все направления развития территорий",
      }}
    />
  );
}
