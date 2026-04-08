import { ApplyPage } from "@/components/apply/apply-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function ApplyRoute() {
  return (
    <>
      <SiteHeader />
      <ApplyPage />
      <SiteFooter />
    </>
  );
}
