import type { MetadataRoute } from "next";
import { getCases } from "@/data/cases";
import { industries } from "@/data/industries";
import { consultingSubDirections } from "@/data/consultingServices";
import { analyticsSubDirections } from "@/data/analyticsServices";
import { technologiesSubDirections } from "@/data/technologiesServices";
import { engineeringSubDirections } from "@/data/engineeringServices";
import { hrSubDirections } from "@/data/hrServices";
import { learningSubDirections } from "@/data/learningServices";
import { communicationsSubDirections } from "@/data/communicationsServices";
import { startupsSubDirections } from "@/data/startupsServices";
import { territorialDevelopmentSubDirections } from "@/data/territorialDevelopmentServices";

const BASE_URL = "https://arasaca.ru";

/** All static pages of the site */
const staticPages: { path: string; priority: number; changefreq: string }[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/industries", priority: 0.9, changefreq: "weekly" },
  { path: "/cases", priority: 0.8, changefreq: "weekly" },
  { path: "/solutions", priority: 0.8, changefreq: "monthly" },
  { path: "/solutions/master-planning", priority: 0.7, changefreq: "monthly" },
  { path: "/customers", priority: 0.7, changefreq: "monthly" },
  { path: "/career", priority: 0.7, changefreq: "weekly" },
  { path: "/career/vacancies", priority: 0.7, changefreq: "weekly" },
  { path: "/press-center", priority: 0.7, changefreq: "weekly" },
  { path: "/press-center/news", priority: 0.6, changefreq: "weekly" },
  { path: "/press-center/articles", priority: 0.6, changefreq: "weekly" },
  { path: "/press-center/insights", priority: 0.6, changefreq: "weekly" },
  { path: "/contacts", priority: 0.7, changefreq: "monthly" },
  { path: "/feedback", priority: 0.6, changefreq: "monthly" },
  { path: "/pro-bono", priority: 0.6, changefreq: "monthly" },
  { path: "/lab", priority: 0.5, changefreq: "monthly" },
  { path: "/map", priority: 0.4, changefreq: "monthly" },
  // Service category pages
  { path: "/services/consulting", priority: 0.8, changefreq: "monthly" },
  { path: "/services/analytics", priority: 0.8, changefreq: "monthly" },
  { path: "/services/technologies", priority: 0.8, changefreq: "monthly" },
  { path: "/services/engineering", priority: 0.8, changefreq: "monthly" },
  { path: "/services/hr", priority: 0.8, changefreq: "monthly" },
  { path: "/services/learning", priority: 0.8, changefreq: "monthly" },
  { path: "/services/communications", priority: 0.8, changefreq: "monthly" },
  { path: "/services/startups", priority: 0.8, changefreq: "monthly" },
  { path: "/services/territorial-development", priority: 0.8, changefreq: "monthly" },
  { path: "/services/urban", priority: 0.7, changefreq: "monthly" },
  { path: "/services/urban/master-planning", priority: 0.7, changefreq: "monthly" },
  { path: "/services/urban/infrastructure", priority: 0.7, changefreq: "monthly" },
  { path: "/services/urban/territory-economics", priority: 0.7, changefreq: "monthly" },
  { path: "/services/market-research", priority: 0.7, changefreq: "monthly" },
  { path: "/services/data-analytics", priority: 0.7, changefreq: "monthly" },
  { path: "/services/economic-research", priority: 0.7, changefreq: "monthly" },
  { path: "/services/research", priority: 0.7, changefreq: "monthly" },
];

/** Service sub-directions mapped from real data files */
const serviceDataMap: { basePath: string; slugs: { slug: string }[] }[] = [
  { basePath: "/services/consulting", slugs: consultingSubDirections },
  { basePath: "/services/analytics", slugs: analyticsSubDirections },
  { basePath: "/services/technologies", slugs: technologiesSubDirections },
  { basePath: "/services/engineering", slugs: engineeringSubDirections },
  { basePath: "/services/hr", slugs: hrSubDirections },
  { basePath: "/services/learning", slugs: learningSubDirections },
  { basePath: "/services/communications", slugs: communicationsSubDirections },
  { basePath: "/services/startups", slugs: startupsSubDirections },
  { basePath: "/services/territorial-development", slugs: territorialDevelopmentSubDirections },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // 1. Static pages
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: page.priority,
    });
  }

  // 2. Service sub-pages — generated from real data (no fabricated slugs)
  for (const { basePath, slugs } of serviceDataMap) {
    for (const item of slugs) {
      entries.push({
        url: `${BASE_URL}${basePath}/${item.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // 3. Case study pages (dynamic [slug] from data)
  const cases = getCases();
  for (const c of cases) {
    entries.push({
      url: `${BASE_URL}/cases/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 4. Industry pages (dynamic [slug] from data)
  for (const ind of industries) {
    entries.push({
      url: `${BASE_URL}/industries/${ind.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
