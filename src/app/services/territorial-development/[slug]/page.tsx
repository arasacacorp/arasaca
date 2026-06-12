"use client";

import { Map, Calculator, Settings } from "lucide-react";
import { territorialDevelopmentSubDirections, getTerritorialDevelopmentSubDirectionBySlug } from "@/data/territorialDevelopmentServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function TerritorialDevelopmentSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={territorialDevelopmentSubDirections}
      getSubDirectionBySlug={getTerritorialDevelopmentSubDirectionBySlug}
      iconMap={{ Map, Calculator, Settings }}
      fallbackIcon={Map}
      parent={{
        title: "Развитие территорий",
        href: "/services/territorial-development",
        badgeText: "Направление развития территорий",
        otherTitle: "Другие направления развития территорий",
        allLinkText: "Все направления развития территорий",
      }}
    />
  );
}
