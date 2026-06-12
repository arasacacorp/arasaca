"use client";

import { Search, TrendingUp, BarChart3 } from "lucide-react";
import { analyticsSubDirections, getAnalyticsSubDirectionBySlug } from "@/data/analyticsServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function AnalyticsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={analyticsSubDirections}
      getSubDirectionBySlug={getAnalyticsSubDirectionBySlug}
      iconMap={{ Search, TrendingUp, BarChart3 }}
      fallbackIcon={Search}
      parent={{
        title: "Аналитика и исследования",
        href: "/services/analytics",
        badgeText: "Направление аналитики",
        otherTitle: "Другие направления аналитики",
        allLinkText: "Все направления аналитики и исследований",
      }}
    />
  );
}
