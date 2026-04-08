import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomeFounderQuoteSection } from "@/components/home/home-founder-quote-section";
import { HomeStorySection } from "@/components/home/home-story-section";
import { HomeLookBackSection } from "@/components/home/home-look-back-section";
import { HomeReviewSection } from "@/components/home/home-review-section";
import { HomeExploreSection } from "@/components/home/home-explore-section";

export function HomePage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <HomeHeroSection />
      <HomeStorySection />
      <HomeFounderQuoteSection />
      <HomeLookBackSection />
      <HomeReviewSection />
      <HomeExploreSection />
    </main>
  );
}
