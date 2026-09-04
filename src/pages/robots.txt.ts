import type { APIRoute } from 'astro';
import { url } from '../lib/url';

/**
 * robots.txt is generated rather than shipped from /public because it has to
 * name an absolute sitemap URL. A static file would hardcode one deployment
 * target, which is exactly what src/lib/url.ts exists to prevent. `site` is the
 * origin astro.config.mjs resolved for this build; `url()` adds the base path,
 * which is a sub-path on GitHub Pages and "/" on a custom domain.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(url('sitemap-index.xml'), site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
