"use client";

import { FileSearch, Microscope, HardHat, Wrench } from "lucide-react";
import { engineeringSubDirections, getEngineeringSubDirectionBySlug } from "@/data/engineeringServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function EngineeringSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={engineeringSubDirections}
      getSubDirectionBySlug={getEngineeringSubDirectionBySlug}
      iconMap={{ FileSearch, Microscope, HardHat }}
      fallbackIcon={Wrench}
      parent={{
        title: "Инженерный консалтинг",
        href: "/services/engineering",
        badgeText: "Направление инженерного консалтинга",
        otherTitle: "Другие направления инженерного консалтинга",
        allLinkText: "Все направления инженерного консалтинга",
      }}
    />
  );
}
