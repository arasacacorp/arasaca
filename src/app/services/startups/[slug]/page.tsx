"use client";

import { Rocket, Lightbulb, Zap } from "lucide-react";
import { startupsSubDirections } from "@/data/startupsServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function StartupsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={startupsSubDirections}
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
