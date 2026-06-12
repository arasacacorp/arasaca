import type { Metadata } from "next";
import { Manrope, Russo_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE, organizationJsonLd, webSiteJsonLd } from "@/lib/seo";

// Manrope font for entire site
const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

// Russo One for logo (Arasaka-style futuristic font)
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-russo",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — Консалтинговая компания`,
  description:
    "Арасака — консалтинговая компания. Управленческий консалтинг, цифровая трансформация, инвестиционное консультирование, инжиниринг и развитие территорий для компаний, нацеленных на устойчивый рост.",
  keywords: [
    "консалтинг", "управленческий консалтинг", "цифровая трансформация",
    "инвестиции", "бизнес-консалтинг", "Арасака", "стратегия",
    "финансовое моделирование", "инжиниринг", "мастер-планирование",
    "развитие территорий", "HR консалтинг", "аналитика", "ТЭО",
    "бизнес-план", "операционная эффективность", "инновации",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} — Консалтинговая компания`,
    description:
      "Структурируем сложное, реализуем важное. Управленческий консалтинг, цифровая трансформация и инвестиционное консультирование для устойчивого роста вашего бизнеса.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Консалтинговая компания`,
    description:
      "Структурируем сложное, реализуем важное. Консалтинг для устойчивого роста.",
  },
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={`${manrope.variable} ${russoOne.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd()) }}
        />
      </head>
      <body
        className="antialiased bg-background text-foreground"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
