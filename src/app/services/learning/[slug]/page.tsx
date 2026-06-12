import type { Metadata } from "next";
import { learningSubDirections } from "@/data/learningServices";
import { createMetadata } from "@/lib/seo";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = learningSubDirections.find((d) => d.slug === slug);
  if (!d) return {};
  return createMetadata({
    title: d.title,
    description: d.description,
    path: `/services/learning/${slug}`,
  });
}

export async function generateStaticParams() {
  return learningSubDirections.map((d) => ({ slug: d.slug }));
}

export default function LearningSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={learningSubDirections}
      fallbackIcon="GraduationCap"
      parent={{
        title: "Обучение и развитие",
        href: "/services/learning",
        badgeText: "Направление обучения",
        otherTitle: "Другие направления обучения",
        allLinkText: "Все направления обучения и развития",
      }}
    />
  );
}
