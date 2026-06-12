"use client";

import { GraduationCap, Settings, BookOpen, Award } from "lucide-react";
import { learningSubDirections, getLearningSubDirectionBySlug } from "@/data/learningServices";
import ServiceSlugPageTemplate from "@/components/templates/ServiceSlugPageTemplate";

export default function LearningSubDirectionPage() {
  return (
    <ServiceSlugPageTemplate
      subDirections={learningSubDirections}
      getSubDirectionBySlug={getLearningSubDirectionBySlug}
      iconMap={{ GraduationCap, Settings, BookOpen, Award }}
      fallbackIcon={GraduationCap}
      parent={{
        title: "Обучение и развитие",
        href: "/services/learning",
        badgeText: "Направление обучения",
        otherTitle: "Другие направления обучения",
        allLinkText: "Все направления обучения и развития",
      }}
    />
  );
}
