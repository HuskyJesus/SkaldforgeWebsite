# Skaldforge — official website

The public site for **Skaldforge** and its game **Mythbound**, a competitive
Norse arena brawler built in Unreal Engine.

Built with [Astro](https://astro.build) — static output, TypeScript, modern CSS,
and a deliberately small amount of client-side JavaScript.

---

## Quick start

```bash
npm install
npm run dev
```

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the built output |
| `npm run check` | Astro + TypeScript diagnostics |

Node 20.3+ is required; CI builds on Node 22.

---

## Project shape

```
src/
  data/          Content. Text and facts live here, not in components.
  components/    Reusable UI.
  layouts/       Base.astro — head, SEO, nav, footer, reveal observer.
  pages/         index · mythbound · technology · studio · 404
  styles/        tokens.css (design system) + global.css
  lib/           url.ts (base-path helpers), images.ts (asset registry)
  assets/        Images — optimised at build time by astro:assets
public/
  assets/video/  Trailer, hero loop, posters, captions
  assets/brand/  Original supplied brand art (unmodified)
  assets/social/ Generated Open Graph card
scripts/
  gen-brand-assets.mjs   Icons + social card (run after brand art changes)
```

### Editing content

Copy and facts are separated from component logic. To change what the site
says, edit `src/data/`:

| File | Holds |
| --- | --- |
| `site.ts` | Titles, nav, social links, contact |
| `game.ts` | Genre, engine, mode, pillars, Relic Rush, arenas |
| `bound.ts` | The four Bound and their abilities |
| `tech.ts` | Development page sections and toolchain |
| `studio.ts` | Studio copy, philosophy, team roster (behind a flag) |
| `roadmap.ts` | Forward-looking items, each with its own `publish` flag |

Every factual claim in these files carries a comment naming its source (GDD, ASG
slide number, or the trailer). **Anything without a source must not be
published** — see [CONTENT_TODO.md](./CONTENT_TODO.md).

### Images

Content refers to images by short id (`'midgard-aerial'`), resolved through
`src/lib/images.ts`. Drop a replacement into the matching folder under
`src/assets/` using the same filename and it swaps in with no code change.
An unknown id logs a warning during build rather than silently rendering nothing.

---

## Design system

All design decisions live in `src/styles/tokens.css` — colour, type scale,
spacing, breakpoints, motion timings, radii, shadows, content widths. Components
consume tokens; they do not hardcode values.

The palette was sampled from the Mythbound logotype and the in-engine UI
prototype: near-black → deep navy → steel → silver → forge gold → ivory.
Type pairs **Cinzel** (display, chiselled classical serif matching the logotype)
with **Inter** (body). Both are self-hosted via `@fontsource` — no external
requests.

---

## Accessibility

Targets WCAG 2.2 AA.

- Semantic landmarks, one `<h1>` per page, ordered heading levels
- Skip link; visible gold focus rings on every interactive element
- Mobile menu: `aria-expanded`, focus trap, Escape to close, focus restored
- Body text verified at ≥ 4.5:1 against its actual composited background
- `prefers-reduced-motion` collapses all animation via token overrides
- Hero video is `aria-hidden`, muted, and has a visible pause control
- Trailer uses native controls with a WebVTT caption track
- No information conveyed by colour or animation alone

## Performance

- Static HTML; JS limited to the nav, the reveal observer, and the two players
- `astro:assets` emits responsive AVIF/WebP with correct `sizes`
- Hero poster is the LCP element, eager with `fetchpriority="high"`
- The hero loop is fetched only on wide viewports, only when motion is allowed,
  and never on `save-data` or 2G. Phones get the poster alone.
- The 12 MB trailer has `preload="none"` and no `src` until the viewer clicks
- All media boxes have fixed aspect ratios, so there is no layout shift

---

## Deployment

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

No URL is hardcoded. The build reads `SITE_URL` and `BASE_PATH` from the
environment, and the workflow supplies them from `actions/configure-pages`, so
the same source works from a project sub-path or a domain root.

**Moving to a custom domain**
1. Add `public/CNAME` containing the domain.
2. Set the custom domain in repository *Settings → Pages*.
3. Update the `Sitemap:` line in `public/robots.txt`.

Nothing else needs to change.

---

## Content integrity

This site is written to withstand scrutiny. It states only what the supplied
project documents support:

- No invented lore, features, platforms, dates, metrics, awards or quotes
- No engine feature is named unless a supplied document says the project uses it
  (Gameplay Ability System and Motion Matching are stated; unsupported engine features are not)
- No third-party or AI-generated imagery
- No placeholder social accounts
- Sections without verified content are disabled by flag, not filled with filler

Open items are tracked in [CONTENT_TODO.md](./CONTENT_TODO.md); art gaps and
their specifications are in [ART_ASSET_CHECKLIST.md](./ART_ASSET_CHECKLIST.md).
