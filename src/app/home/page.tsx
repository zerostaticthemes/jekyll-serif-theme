import { HomePage } from '@/components/home/home-page';
import { SiteFooter } from '@/components/site/site-footer';
import { SiteHeader } from '@/components/site/site-header';

export default function HomeRoute() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}
