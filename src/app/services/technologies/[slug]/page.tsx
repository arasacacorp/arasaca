"use client";

import { RefreshCw, Shield, Code, Lightbulb, Cog, Cloud } from "lucide-react";
import { technologiesSubDirections } from "@/data/technologiesServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function TechnologiesSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={technologiesSubDirections}
      iconMap={{ RefreshCw, Shield, Code, Lightbulb, Cog, Cloud }}
      fallbackIcon={Code}
      parent={{
        title: "Технологии и цифровизация",
        href: "/services/technologies",
        badgeText: "Направление технологий",
        otherTitle: "Другие направления технологий",
        allLinkText: "Все направления технологий и цифровизации",
      }}
    />
  );
}
