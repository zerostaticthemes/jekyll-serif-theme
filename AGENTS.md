# AI Coding Agent Instructions

## Stack and Commands

- Static Astro site with Tailwind CSS.
- `npm ci` installs the locked dependencies.
- `npm run dev` starts the local site at `http://localhost:4321`.
- `npm run build` writes the static site to `dist/`.
- `npm test` verifies the exported routes, custom domain and contact link.

## Project Structure

- `src/pages/` contains the public routes.
- `src/layouts/` contains shared page structure and metadata.
- `src/components/` contains shared navigation and service components.
- `src/data/services.ts` defines the service overview and current concise page content.
- `src/styles/global.css` imports Tailwind and defines site design tokens.
- `public/` contains files copied directly into the static output, including `CNAME`.
- `.github/workflows/deploy.yml` checks pull requests and deploys verified output to GitHub Pages.

## Conventions

- Keep routes static and preserve existing public paths where practical.
- Contact uses `mailto:admin@wecollab8.co.za`; form handling will be added separately later.
- Put new public assets in `public/` and reference them from the site root.
- Add a route assertion to `tests/static-output.test.mjs` when introducing a page that must exist in production.
- GitHub Pages publishes the root custom domain `www.wecollab8.co.za` from `public/CNAME`.
