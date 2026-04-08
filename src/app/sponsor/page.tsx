import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SponsorPage } from "@/components/sponsor/sponsor-page";

export default function SponsorRoute() {
  return (
    <>
      <SiteHeader />
      <SponsorPage />
      <SiteFooter />
    </>
  );
}
