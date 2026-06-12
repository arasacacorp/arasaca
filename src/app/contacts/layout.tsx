import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Контакты",
  description:
    "Свяжитесь с Арасака: офис в Москве, телефон, email. Консалтинг, цифровая трансформация и инвестиционное консультирование для бизнеса.",
  path: "/contacts",
  keywords: ["контакты", "связаться", "Арасака", "консалтинг", "Москва", "офис"],
});

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
