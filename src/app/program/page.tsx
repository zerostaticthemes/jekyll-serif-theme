import { ProgramPage } from "@/components/program/program-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function ProgramRoute() {
  return (
    <>
      <SiteHeader />
      <ProgramPage />
      <SiteFooter />
    </>
  );
}
