import type { Metadata } from "next";
import { communicationsSubDirections } from "@/data/communicationsServices";
import { createMetadata } from "@/lib/seo";

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

export default function CommunicationsSubLayout({ children }: { children: React.ReactNode }) {
  return children;
}
