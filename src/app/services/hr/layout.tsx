import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "HR и организационное развитие",
  description:
    "HR-консалтинг от Арасака: управление человеческим капиталом, организационное проектирование, HR-аналитика и цифровизация HR-процессов.",
  path: "/services/hr",
  keywords: [
    "HR",
    "организационное развитие",
    "человеческий капитал",
    "HR-аналитика",
    "Арасака",
    "управление персоналом",
  ],
});

export default function HrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
