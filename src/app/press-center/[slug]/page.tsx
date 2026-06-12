import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPublications, getPublicationBySlug, typeLabels } from "@/data/publications";
import PublicationDetailClient from "./PublicationDetailClient";

/* ─── Static params for SSG ─── */
export function generateStaticParams() {
  return allPublications.map((p) => ({ slug: p.slug }));
}

/* ─── Dynamic metadata ─── */
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  // Next.js 16: params is a Promise
  return params.then(({ slug }) => {
    const pub = getPublicationBySlug(slug);
    if (!pub) {
      return { title: "Публикация не найдена" };
    }
    const typeLabel = typeLabels[pub.type];
    return {
      title: `${pub.title} — ${typeLabel} | Арасака Консалтинг`,
      description: pub.description,
    };
  });
}

/* ─── Page component (server) ─── */
export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  return <PublicationDetailClient publication={publication} />;
}
