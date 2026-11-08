import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const freePath = path.join(distDir, 'free.html');

if (!fs.existsSync(indexPath)) {
  console.error(`[generate-seo-pages] FATAL: ${indexPath} not found. Ensure "vite build" runs first.`);
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf-8');

// Required metadata replacement rules for /free
const replacements = [
  {
    name: 'title',
    pattern: /<title>.*?<\/title>/g,
    replacement: '<title>Before The Year Ends: Life Audit | GoPekDigital</title>',
    expectedValue: 'Before The Year Ends: Life Audit | GoPekDigital',
  },
  {
    name: 'meta-description',
    pattern: /<meta name="description" content=".*?" \/>/g,
    replacement: '<meta name="description" content="A confrontational life audit for the person you still have time to become. Free digital download." />',
    expectedValue: 'A confrontational life audit for the person you still have time to become. Free digital download.',
  },
  {
    name: 'canonical',
    pattern: /<link rel="canonical" href=".*?" \/>/g,
    replacement: '<link rel="canonical" href="https://gopekdigital.com/free" />',
    expectedValue: 'https://gopekdigital.com/free',
  },
  {
    name: 'og:title',
    pattern: /<meta property="og:title" content=".*?" \/>/g,
    replacement: '<meta property="og:title" content="Before The Year Ends: Life Audit | GoPekDigital" />',
    expectedValue: 'Before The Year Ends: Life Audit | GoPekDigital',
  },
  {
    name: 'og:description',
    pattern: /<meta property="og:description" content=".*?" \/>/g,
    replacement: '<meta property="og:description" content="A confrontational life audit for the person you still have time to become. Free digital download." />',
    expectedValue: 'A confrontational life audit for the person you still have time to become. Free digital download.',
  },
  {
    name: 'og:url',
    pattern: /<meta property="og:url" content=".*?" \/>/g,
    replacement: '<meta property="og:url" content="https://gopekdigital.com/free" />',
    expectedValue: 'https://gopekdigital.com/free',
  },
  {
    name: 'og:type',
    pattern: /<meta property="og:type" content=".*?" \/>/g,
    replacement: '<meta property="og:type" content="website" />',
    expectedValue: 'website',
  },
  {
    name: 'twitter:title',
    pattern: /<meta name="twitter:title" content=".*?" \/>/g,
    replacement: '<meta name="twitter:title" content="Before The Year Ends: Life Audit | GoPekDigital" />',
    expectedValue: 'Before The Year Ends: Life Audit | GoPekDigital',
  },
  {
    name: 'twitter:description',
    pattern: /<meta name="twitter:description" content=".*?" \/>/g,
    replacement: '<meta name="twitter:description" content="A confrontational life audit for the person you still have time to become. Free digital download." />',
    expectedValue: 'A confrontational life audit for the person you still have time to become. Free digital download.',
  },
];

let freeHtml = indexHtml;

// Step 1: Pre-replacement verification & replacement
for (const rule of replacements) {
  const matches = indexHtml.match(rule.pattern);
  const count = matches ? matches.length : 0;

  if (count === 0) {
    console.error(`[generate-seo-pages] FATAL: Missing expected source tag for "${rule.name}" in dist/index.html.`);
    process.exit(1);
  }
  if (count > 1) {
    console.error(`[generate-seo-pages] FATAL: Found ${count} duplicate source tags for "${rule.name}" in dist/index.html. Exactly 1 expected.`);
    process.exit(1);
  }

  // Safe single replacement
  freeHtml = freeHtml.replace(rule.pattern, rule.replacement);
}

// Step 2: Post-replacement verification on generated HTML
for (const rule of replacements) {
  // Ensure the new tag was inserted exactly once
  const matches = freeHtml.match(rule.pattern);
  const count = matches ? matches.length : 0;

  if (count !== 1) {
    console.error(`[generate-seo-pages] FATAL: Post-replacement check failed. "${rule.name}" found ${count} times in generated HTML. Exactly 1 expected.`);
    process.exit(1);
  }

  // Ensure it actually contains the new freebie value
  if (!matches[0].includes(rule.expectedValue)) {
    console.error(`[generate-seo-pages] FATAL: "${rule.name}" does not contain expected freebie value: "${rule.expectedValue}".`);
    process.exit(1);
  }
}

// Step 3: Verify the generated HTML does NOT retain homepage-specific canonical or titles
const prohibitedHomepageSnippets = [
  '<link rel="canonical" href="https://gopekdigital.com/" />',
  '<meta property="og:url" content="https://gopekdigital.com/" />',
  'Your Final Year Protocol - Life Execution System',
];

for (const snippet of prohibitedHomepageSnippets) {
  if (freeHtml.includes(snippet)) {
    console.error(`[generate-seo-pages] FATAL: Generated dist/free.html erroneously retained homepage metadata: "${snippet}".`);
    process.exit(1);
  }
}

// Step 4: Write verified output
fs.writeFileSync(freePath, freeHtml, 'utf-8');
console.log(`[generate-seo-pages] PASS: Generated dist/free.html with verified metadata integrity.`);
