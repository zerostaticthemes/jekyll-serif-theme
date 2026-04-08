import { AboutBenefitsSection } from "@/components/about/about-benefits-section";
import { AboutIntroSection } from "@/components/about/about-intro-section";
import { AboutProgramInfoSection } from "@/components/about/about-program-info-section";
import { HomeLookBackSection } from "../home/home-look-back-section";

export function AboutPage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <AboutIntroSection />
      <AboutBenefitsSection />
      <AboutProgramInfoSection />
      <HomeLookBackSection />
    </main>
  );
}
