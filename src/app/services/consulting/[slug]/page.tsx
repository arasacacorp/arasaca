"use client";

import { Target, BarChart3, Cog, Shield, TrendingUp, ClipboardList, FileText } from "lucide-react";
import { consultingSubDirections, getConsultingSubDirectionBySlug } from "@/data/consultingServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function ConsultingSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={consultingSubDirections}
      getSubDirectionBySlug={getConsultingSubDirectionBySlug}
      iconMap={{ Target, BarChart3, Cog, Shield, TrendingUp, ClipboardList, FileText }}
      fallbackIcon={Target}
      parent={{
        title: "Консалтинг",
        href: "/services/consulting",
        badgeText: "Направление консалтинга",
        otherTitle: "Другие направления консалтинга",
        allLinkText: "Все направления консалтинга",
      }}
    />
  );
}
