import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment is environment driven so the site can move from GitHub Pages to a
// custom Skaldforge domain without touching a single link in the source.
//   GitHub Pages (project site) -> SITE_URL=https://huskyjesus.github.io  BASE_PATH=/SkaldforgeWebsite
//   Custom domain               -> SITE_URL=https://skaldforge.com        BASE_PATH=/
const SITE_URL = process.env.SITE_URL ?? 'https://huskyjesus.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/SkaldforgeWebsite';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Generated variants are served from the build output; no remote images are used.
    responsiveStyles: true,
  },
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
});
