import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import astroConsent from 'astro-consent';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.wecollab8.co.za',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'WeCollab8 Guides',
      description: 'Practical guides for AI readiness and dependable data foundations.',
      disable404Route: true,
      components: {
        Footer: './src/components/ConsentStarlightFooter.astro',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Overview', link: '/docs/' },
            { label: 'AI readiness', link: '/docs/ai-readiness/' },
            { label: 'Data foundations', link: '/docs/data-foundations/' },
          ],
        },
      ],
    }),
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        return pathname !== '/search/' && pathname !== '/cookie-preferences/' && pathname !== '/404/' && pathname !== '/404';
      },
    }),
    astroConsent({
      siteName: 'WeCollab8',
      headline: 'Your privacy choices',
      description: 'Essential storage saves your preferences. Optional analytics may measure aggregate visits and referral sources, and marketing preferences are available for optional tools. No analytics or marketing trackers are currently installed.',
      acceptLabel: 'Save choices',
      rejectLabel: 'Reject optional',
      manageLabel: 'Review choices',
      cookiePolicyUrl: '/privacy/#cookie-storage',
      privacyPolicyUrl: '/privacy/',
      presentation: 'overlay',
      displayUntilIdle: true,
      displayIdleDelayMs: 500,
      consent: {
        days: 30,
        storageKey: 'wecollab8-consent',
      },
      categories: {
        essential: true,
        analytics: false,
        marketing: false,
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});