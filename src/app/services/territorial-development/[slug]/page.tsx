"use client";

import { Map, Calculator, Settings } from "lucide-react";
import { territorialDevelopmentSubDirections } from "@/data/territorialDevelopmentServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function TerritorialDevelopmentSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={territorialDevelopmentSubDirections}
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
