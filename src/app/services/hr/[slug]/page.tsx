"use client";

import { Users as UsersIcon, Network, BarChart2 } from "lucide-react";
import { hrSubDirections, getHRSubDirectionBySlug } from "@/data/hrServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function HrSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={hrSubDirections}
      getSubDirectionBySlug={getHRSubDirectionBySlug}
      iconMap={{ Users: UsersIcon, Network, BarChart2 }}
      fallbackIcon={UsersIcon}
      parent={{
        title: "HR-консалтинг",
        href: "/services/hr",
        badgeText: "Направление HR-консалтинга",
        otherTitle: "Другие направления HR-консалтинга",
        allLinkText: "Все направления HR-консалтинга",
      }}
    />
  );
}
