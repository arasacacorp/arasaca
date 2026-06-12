import type { Metadata } from "next";
import { consultingSubDirections } from "@/data/consultingServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = consultingSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/consulting/${slug}`,
  });
}

export async function generateStaticParams() {
  return consultingSubDirections.map((d) => ({ slug: d.slug }));
}

export default function ConsultingSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={consultingSubDirections}
      fallbackIcon="Target"
      parent={{
        title: "Консалтинг",
        href: "/services/consulting",
        badgeText: "Направление консалтинга",
        otherTitle: "Другие направления консалтинга",
        allLinkText: "Все направления консалтинга",
      }}
    />
  );
}
