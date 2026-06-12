import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Обучение и развитие",
  description:
    "Корпоративное обучение от Арасака: программы развития, бережливое производство, управление знаниями и корпоративная академия.",
  path: "/services/learning",
  keywords: [
    "обучение",
    "корпоративное обучение",
    "развитие персонала",
    "бережливое производство",
    "Арасака",
  ],
});

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
