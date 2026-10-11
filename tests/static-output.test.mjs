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
