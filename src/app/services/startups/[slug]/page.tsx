import type { Metadata } from "next";
import { startupsSubDirections } from "@/data/startupsServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

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

export default function StartupsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={startupsSubDirections}
      fallbackIcon="Rocket"
      parent={{
        title: "Стартапы и инновации",
        href: "/services/startups",
        badgeText: "Направление стартапов",
        otherTitle: "Другие направления стартапов",
        allLinkText: "Все направления стартапов и инноваций",
      }}
    />
  );
}
