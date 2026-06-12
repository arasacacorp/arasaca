import type { Metadata } from "next";
import { getCases } from "@/data/cases";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCases().find((c) => c.slug === slug);
  if (!c) return {};
  return createMetadata({
    title: c.title,
    description: c.excerpt,
    path: `/cases/${slug}`,
    type: "article",
  });
}

export async function generateStaticParams() {
  return getCases().map((c) => ({ slug: c.slug }));
}

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
