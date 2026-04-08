import { SponsorDonationSection } from "@/components/sponsor/sponsor-donation-section";
import { SponsorDonorsSection } from "@/components/sponsor/sponsor-donors-section";
import { SponsorIntroSection } from "@/components/sponsor/sponsor-intro-section";

export function SponsorPage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <SponsorIntroSection />
      <SponsorDonationSection />
      <SponsorDonorsSection />
    </main>
  );
}
