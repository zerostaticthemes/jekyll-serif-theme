import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StaffPage } from "@/components/staff/staff-page";

export default function StaffRoute() {
  return (
    <>
      <SiteHeader />
      <StaffPage />
      <SiteFooter />
    </>
  );
}
