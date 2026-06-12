import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Коммуникации и бренд",
  description:
    "Бренд-консалтинг и стратегические коммуникации от Арасака. Разработка бренд-стратегий, коммуникационных кампаний и управление репутацией.",
  path: "/services/communications",
  keywords: [
    "коммуникации",
    "бренд",
    "репутация",
    "PR",
    "бренд-стратегия",
    "Арасака",
  ],
});

export default function CommunicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
