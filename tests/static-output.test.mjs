import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const outputDirectory = join(process.cwd(), 'dist');
const requiredPages = [
  'index.html',
  'services/index.html',
  'services/cloud-management/index.html',
  'services/integration/index.html',
  'services/ca-services/index.html',
  'services/security/index.html',
  'services/ai-consulting/index.html',
  'services/data-engineering/index.html',
  'docs/index.html',
  'docs/ai-readiness/index.html',
  'docs/data-foundations/index.html',
  'search/index.html',
  'blog/index.html',
  'blog/great-expectations-data-quality/index.html',
  'news/index.html',
  'cookie-preferences/index.html',
  'privacy/index.html',
  'about/index.html',
  'team/index.html',
  'team/roger-dsouza/index.html',
  'contact/index.html',
  '404.html',
];

test('Astro exports every approved page as static HTML', () => {
  for (const page of requiredPages) {
    const html = readFileSync(join(outputDirectory, page), 'utf8');
    assert.match(html, /<!doctype html>/i, `${page} should contain a complete HTML document`);
  }
});

test('Astro export preserves the GitHub Pages custom domain', () => {
  assert.equal(readFileSync(join(outputDirectory, 'CNAME'), 'utf8').trim(), 'www.wecollab8.co.za');
});

test('contact page links to the agreed email address', () => {
  const html = readFileSync(join(outputDirectory, 'contact/index.html'), 'utf8');
  assert.match(html, /mailto:admin@wecollab8\.co\.za/);
});

test('new service pages contain their approved service details and contact links', () => {
  const serviceExpectations = [
    {
      path: 'services/ai-consulting/index.html',
      title: 'AI consulting and implementation',
      summary: 'Identify valuable AI opportunities',
      capability: 'AI readiness and use-case discovery',
    },
    {
      path: 'services/data-engineering/index.html',
      title: 'Data engineering and platforms',
      summary: 'Build dependable data foundations',
      capability: 'Data platform architecture',
    },
  ];

  for (const service of serviceExpectations) {
    const html = readFileSync(join(outputDirectory, service.path), 'utf8');
    assert.ok(html.includes(service.title), `${service.path} should include its title`);
    assert.ok(html.includes(service.summary), `${service.path} should include its summary`);
    assert.ok(html.includes(service.capability), `${service.path} should include its capabilities`);
    assert.match(html, /mailto:admin@wecollab8\.co\.za/);
    assert.match(html, /rel="canonical"/);
  }
});

test('new services are discoverable from the homepage and services overview', () => {
  for (const page of ['index.html', 'services/index.html']) {
    const html = readFileSync(join(outputDirectory, page), 'utf8');
    assert.match(html, /href="\/services\/ai-consulting\/"/, `${page} should link to AI Consulting`);
    assert.match(html, /href="\/services\/data-engineering\/"/, `${page} should link to Data Engineering`);
  }
});

test('search page exposes an accessible search form and Pagefind assets are built', () => {
  const html = readFileSync(join(outputDirectory, 'search/index.html'), 'utf8');
  assert.match(html, /<label[^>]+for="search-query"/);
  assert.match(html, /<input[^>]+id="search-query"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /<button[^>]+type="submit"/);
  assert.match(html, /data-pagefind-ignore/);
  assert.ok(readFileSync(join(outputDirectory, 'pagefind/pagefind.js'), 'utf8').length > 0);
  const index = JSON.parse(readFileSync(join(outputDirectory, 'pagefind/pagefind-entry.json'), 'utf8'));
  assert.ok(index.languages.en.page_count >= 10, 'Pagefind should index marketing pages as well as docs');
});

test('sitemap contains canonical service and docs URLs but excludes search, preferences and 404', () => {
  const sitemapIndex = readFileSync(join(outputDirectory, 'sitemap-index.xml'), 'utf8');
  const sitemapUrls = [...sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert.ok(sitemapUrls.length > 0, 'sitemap index should reference at least one sitemap');

  const sitemapFiles = sitemapUrls.map((url) => {
    const location = new URL(url);
    assert.equal(location.origin, 'https://www.wecollab8.co.za');
    return readFileSync(join(outputDirectory, location.pathname.slice(1)), 'utf8');
  });
  const sitemap = sitemapFiles.join('\n');

  for (const route of [
    '/services/ai-consulting/',
    '/services/data-engineering/',
    '/docs/',
    '/docs/ai-readiness/',
    '/docs/data-foundations/',
    '/blog/',
    '/blog/great-expectations-data-quality/',
    '/news/',
  ]) {
    assert.ok(sitemap.includes(`https://www.wecollab8.co.za${route}`), `sitemap should include ${route}`);
  }
  assert.ok(!sitemap.includes('https://www.wecollab8.co.za/search/'));
  assert.ok(!sitemap.includes('https://www.wecollab8.co.za/cookie-preferences/'));
  assert.ok(!sitemap.includes('https://www.wecollab8.co.za/404/'));
});

test('robots.txt points crawlers to the sitemap index', () => {
  const robots = readFileSync(join(outputDirectory, 'robots.txt'), 'utf8');
  assert.match(robots, /Sitemap: https:\/\/www\.wecollab8\.co\.za\/sitemap-index\.xml/);
});

test('blog archive links to a Great Expectations article rendered from Markdown', () => {
  const archive = readFileSync(join(outputDirectory, 'blog/index.html'), 'utf8');
  const article = readFileSync(join(outputDirectory, 'blog/great-expectations-data-quality/index.html'), 'utf8');

  assert.match(archive, /href="\/blog\/great-expectations-data-quality\/"/);
  assert.match(article, /Make Data Quality Actionable with Great Expectations/);
  assert.match(article, /Expectation Suite/);
  assert.match(article, /Checkpoint/);
  assert.match(article, /rel="canonical"/);
});

test('news archive is published with an honest empty state and both sections are in navigation', () => {
  const news = readFileSync(join(outputDirectory, 'news/index.html'), 'utf8');
  const homepage = readFileSync(join(outputDirectory, 'index.html'), 'utf8');

  assert.match(news, /No news has been published yet/);
  assert.match(homepage, /href="\/blog\/"/);
  assert.match(homepage, /href="\/news\/"/);
});

test('site footer offers a persistent cookie-preference entry point', () => {
  const homepage = readFileSync(join(outputDirectory, 'index.html'), 'utf8');
  const docs = readFileSync(join(outputDirectory, 'docs/index.html'), 'utf8');
  assert.match(homepage, /Manage cookie preferences/);
  assert.match(homepage, /href="\/cookie-preferences\/"/);
  assert.match(docs, /Manage cookie preferences/);
});

test('cookie preference page explains and exposes analytics and marketing choices', () => {
  const preferences = readFileSync(join(outputDirectory, 'cookie-preferences/index.html'), 'utf8');
  assert.match(preferences, /Analytics/);
  assert.match(preferences, /Marketing/);
  assert.match(preferences, /type="checkbox"[^>]+name="analytics"/);
  assert.match(preferences, /type="checkbox"[^>]+name="marketing"/);
  assert.match(preferences, /aria-live="polite"/);
  assert.match(preferences, /data-pagefind-ignore/);
});
