import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Клиенты",
  description:
    "Нам доверяют клиенты из списка ТОП 100 крупнейших компаний России. Росатом, Сибур, Новатэк, ПИК и другие — промышленный, финансовый и государственный секторы.",
  path: "/customers",
  keywords: ["клиенты", "партнёры", "Росатом", "Сибур", "Новатэк", "Арасака", "консалтинг"],
});

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
