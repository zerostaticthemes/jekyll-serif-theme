import { ContactPage } from "@/components/contact/contact-page";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function ContactRoute() {
  return (
    <>
      <SiteHeader />
      <ContactPage />
      <SiteFooter />
    </>
  );
}
