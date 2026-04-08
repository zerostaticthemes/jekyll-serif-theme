import { AboutPage } from "@/components/about/about-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function AboutRoute() {
  return (
    <>
      <SiteHeader />
      <AboutPage />
      <SiteFooter />
    </>
  );
}
