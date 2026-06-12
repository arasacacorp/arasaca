import type { Metadata } from "next";
import { communicationsSubDirections } from "@/data/communicationsServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = communicationsSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/communications/${slug}`,
  });
}

export async function generateStaticParams() {
  return communicationsSubDirections.map((d) => ({ slug: d.slug }));
}

export default function CommunicationsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={communicationsSubDirections}
      fallbackIcon="Megaphone"
      parent={{
        title: "Коммуникации и бренд",
        href: "/services/communications",
        badgeText: "Направление коммуникаций",
        otherTitle: "Другие направления коммуникаций",
        allLinkText: "Все направления коммуникаций и бренда",
      }}
    />
  );
}
