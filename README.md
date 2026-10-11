# WeCollab8 Website

The WeCollab8 Technology Holdings website is built with Astro and Tailwind CSS and exported as a static site.

## Local development

Install the locked dependencies and start the development server:

```sh
npm ci
npm run dev
```

Build and verify the static site:

```sh
npm run build
npm test
```

The generated site is written to `dist/`.

## Deployment

GitHub Actions runs the build and smoke tests on pull requests to `master`, then deploys the verified static output when changes are pushed to `master`. In the repository settings, set Pages to use **GitHub Actions**. The `public/CNAME` file configures the site for `www.wecollab8.co.za`.

Dependabot opens weekly update pull requests for npm packages and GitHub Actions.
