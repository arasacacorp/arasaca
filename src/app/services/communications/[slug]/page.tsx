"use client";

import { Palette, Megaphone, Newspaper, Heart } from "lucide-react";
import { communicationsSubDirections } from "@/data/communicationsServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function CommunicationsSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={communicationsSubDirections}
      iconMap={{ Palette, Megaphone, Newspaper, Heart }}
      fallbackIcon={Megaphone}
      parent={{
        title: "Коммуникации и бренд",
        href: "/services/communications",
        badgeText: "Направление коммуникаций",
        otherTitle: "Другие направления коммуникаций",
        allLinkText: "Все направления коммуникаций и бренда",
      }}
    />
  );
}
