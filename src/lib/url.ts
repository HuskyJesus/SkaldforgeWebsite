/**
 * Base-path aware URL helpers.
 *
 * GitHub Pages project sites are served from a sub-path (/SkaldforgeWebsite).
 * A custom domain is served from the root. Nothing in the source may hardcode
 * either, so every internal href and public asset path goes through here.
 */

// Astro reports BASE_URL with or without a trailing slash depending on config
// and on dev vs. build, so normalise it once to exactly one trailing slash.
const BASE = `${import.meta.env.BASE_URL.replace(/\/+$/, '')}/`;

/** Internal page link: url('/mythbound') -> '/SkaldforgeWebsite/mythbound' */
export function url(path: string): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${BASE}${clean}` : BASE;
}

/** Asset under /public: asset('assets/video/x.mp4') */
export function asset(path: string): string {
  return url(path);
}

/** True when `href` is the current page, for aria-current. */
export function isCurrent(href: string, pathname: string): boolean {
  const a = url(href).replace(/\/+$/, '') || '/';
  const b = pathname.replace(/\/+$/, '') || '/';
  return a === b;
}
