"use client";

import { Rocket, Lightbulb, Zap } from "lucide-react";
import { startupsSubDirections, getStartupsSubDirectionBySlug } from "@/data/startupsServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function StartupsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={startupsSubDirections}
      getSubDirectionBySlug={getStartupsSubDirectionBySlug}
      iconMap={{ Rocket, Lightbulb, Zap }}
      fallbackIcon={Rocket}
      parent={{
        title: "Стартапы и инновации",
        href: "/services/startups",
        badgeText: "Направление стартапов",
        otherTitle: "Другие направления стартапов",
        allLinkText: "Все направления стартапов и инноваций",
      }}
    />
  );
}
