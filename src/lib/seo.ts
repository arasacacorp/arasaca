/**
 * Централизованные SEO-утилиты для сайта Арасака.
 * Единый источник базового URL, шаблоны метаданных и JSON-LD.
 */

export const SITE = {
  name: "Арасака",
  url: "https://arasaca.ru",
  locale: "ru_RU",
  type: "website" as const,
  email: "info@arasaca.ru",
} as const;

/** Генерация полного Metadata для статической страницы */
export function createMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  ogImage?: string;
  noIndex?: boolean;
}): import("next").Metadata {
  const fullTitle = `${opts.title} | ${SITE.name}`;
  const url = `${SITE.url}${opts.path}`;

  return {
    title: fullTitle,
    description: opts.description,
    keywords: opts.keywords,
    authors: [{ name: SITE.name, url: SITE.url }],
    icons: { icon: "/favicon.ico" },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: SITE.name,
      type: opts.type ?? "website",
      locale: SITE.locale,
      ...(opts.ogImage && { images: [{ url: opts.ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      ...(opts.ogImage && { images: [opts.ogImage] }),
    },
    alternates: { canonical: url },
    ...(opts.noIndex && { robots: { index: false, follow: true } }),
  };
}

/** JSON-LD: Организация (Organization) */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo-arasaca.svg`,
    description:
      "Управленческий консалтинг, цифровая трансформация и инвестиционное консультирование для компаний, нацеленных на устойчивый рост.",
    email: SITE.email,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE.email,
      availableLanguage: ["Russian"],
    },
  };
}

/** JSON-LD: WebSite с поисковым действием */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} — Консалтинговая компания`,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** JSON-LD: BreadcrumbList */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

/** JSON-LD: Service */
export function serviceJsonLd(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    url: `${SITE.url}${opts.url}`,
  };
}

/** JSON-LD: Article */
export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: `${SITE.url}${opts.url}`,
    author: {
      "@type": "Organization",
      name: opts.author ?? SITE.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo-arasaka.svg` },
    },
    ...(opts.datePublished && { datePublished: opts.datePublished }),
  };
}
