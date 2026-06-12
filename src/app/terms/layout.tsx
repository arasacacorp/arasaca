import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Условия использования",
  description:
    "Условия использования сайта и сервисов ООО «Арасака»: правила доступа, интеллектуальная собственность, ограничения ответственности.",
  path: "/terms",
  keywords: ["условия использования", "пользовательское соглашение", "правила сайта", "Арасака"],
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
