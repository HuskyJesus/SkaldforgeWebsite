import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployment is environment driven so the site can move between hosts without
// touching a single link in the source.
//   Custom domain (live)        -> SITE_URL=https://skaldforge.studio             BASE_PATH=/
//   GitHub Pages (project site) -> SITE_URL=https://skaldforgestudio-git.github.io BASE_PATH=/SkaldforgeWebsite
// The deploy workflow pins both values to the custom domain rather than reading
// them from actions/configure-pages, which reports an http:// origin until the
// Pages certificate is issued and would bake http:// into canonical URLs,
// og:url and the sitemap.
const SITE_URL = process.env.SITE_URL ?? 'https://skaldforge.studio';
const BASE_PATH = process.env.BASE_PATH ?? '/';

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
