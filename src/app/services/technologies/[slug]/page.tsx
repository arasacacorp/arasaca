import type { Metadata } from "next";
import { technologiesSubDirections } from "@/data/technologiesServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

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

export default function TechnologiesSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={technologiesSubDirections}
      fallbackIcon="Code"
      parent={{
        title: "Технологии и цифровизация",
        href: "/services/technologies",
        badgeText: "Направление технологий",
        otherTitle: "Другие направления технологий",
        allLinkText: "Все направления технологий и цифровизации",
      }}
    />
  );
}
