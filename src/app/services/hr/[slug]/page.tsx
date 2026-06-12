import type { Metadata } from "next";
import { hrSubDirections } from "@/data/hrServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = hrSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/hr/${slug}`,
  });
}

export async function generateStaticParams() {
  return hrSubDirections.map((d) => ({ slug: d.slug }));
}

export default function HrSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={hrSubDirections}
      fallbackIcon="Users"
      parent={{
        title: "HR-консалтинг",
        href: "/services/hr",
        badgeText: "Направление HR-консалтинга",
        otherTitle: "Другие направления HR-консалтинга",
        allLinkText: "Все направления HR-консалтинга",
      }}
    />
  );
}
