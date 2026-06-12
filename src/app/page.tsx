import HomeHero from "@/components/sections/HomeHero";
import HomeBusinessDirections from "@/components/sections/HomeBusinessDirections";
import HomeMission from "@/components/sections/HomeMission";
import HomeIndustries from "@/components/sections/HomeIndustries";
import HomeInnovation from "@/components/sections/HomeInnovation";
import HomeSolutions from "@/components/sections/HomeSolutions";
import HomePublications from "@/components/sections/HomePublications";
import HomeQuickLinks from "@/components/sections/HomeQuickLinks";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeBusinessDirections />
      <HomeMission />
      <HomeIndustries />
      <HomeInnovation />
      <HomeSolutions />
      <HomePublications />
      <HomeQuickLinks />
    </main>
  );
}
