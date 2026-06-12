import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Платформа мастер-планирования",
  description:
    "Цифровая платформа мастер-планирования для управления инвестиционными программами развития территорий. Совместный продукт Арасака и Агентства стратегического развития «ЦЕНТР». GovTech и PropTech.",
  path: "/solutions/master-planning",
  keywords: ["мастер-планирование", "платформа", "территории", "инвестиции", "Арасака", "ЦЕНТР", "GovTech"],
});

export default function SolutionMasterPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
