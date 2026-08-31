# ART ASSET CHECKLIST

Derived by walking every finished page of the built site and asking what each
slot actually needs to reach its intended quality. Ordered by priority.

**What the site runs on today:** every marketing image is a frame pulled from
`Mythbound_FinalTrailerV02.mp4` (4K, 30s), cropped to remove the burned-in
subtitles. Development imagery comes from *Mythbound ASG.pptx*. That is enough
to look credible, but the trailer is a 30-second cut — it cannot supply a
purpose-framed shot for every slot, and stills lifted from motion carry motion
blur, compression artefacts and incidental HUD.

**Legend**
- **Have?** — what exists in the repo today
- **Baked text** — whether type should be rendered into the art
- Filenames are the target names; drop-in replacements keep the same id so no
  code changes are needed (see `src/lib/images.ts`)

---

# P0 — CRITICAL BEFORE MEGAGRANT / PUBLIC LAUNCH

### P0-1 · Character renders — the four Bound
| | |
| --- | --- |
| **Filename** | `bound-eirik.png`, `bound-skari.png`, `bound-alvar.png`, `bound-yrsa.png` |
| **Page / section** | Home → The Bound; Mythbound → The Bound (`BoundRoster.astro`) |
| **Shows** | Full-body hero render of each Bound in a signature pose, lit to read on near-black. Weapon in frame. Solid-colour eyes visible (the mark of the contract). |
| **Dimensions** | 1600 × 2200 min (portrait) |
| **Aspect** | 8:11 portrait |
| **Safe crop** | Head clear of the top 8%; the card crops to a 3:4 window from the top, so keep the face and shoulders inside the upper 60% |
| **Transparent BG** | **Yes** — PNG with alpha, no baked backdrop |
| **Format** | PNG (source), site converts to AVIF/WebP |
| **Baked text** | No |
| **Mobile variant** | No — one render, responsive srcset handles it |
| **Why it matters** | This is the single largest gap. The roster is currently a typographic dossier with no character imagery at all, because the only character art available is annotated internal concept sheets and a WIP sculpt. A hero brawler whose cast is invisible reads as early. Character renders would transform the roster and give the homepage its missing emotional hook. |
| **Have?** | **No.** Concept art exists (`concept-eirik`, `concept-alvar`) plus a high-poly sculpt (`sculpt-skari`); Yrsa has no art at all. |
| **Current stand-in** | Brand dossier card — valknut watermark, accent rule, verified stats |

### P0-2 · Purpose-shot hero footage (clean plate)
| | |
| --- | --- |
| **Filename** | `hero-loop-1080.mp4`, `hero-loop-720.mp4`, `hero-loop.webm` |
| **Page / section** | Home → cinematic hero (`Hero.astro`) |
| **Shows** | 15–25s of continuous, high-energy gameplay: traversal chained into a fight, relic contested, one clear momentum swing. Camera should read at large scale with the lower third quiet enough to sit type over. |
| **Dimensions** | 1920 × 1080 primary; 1280 × 720 secondary |
| **Aspect** | 16:9 (site crops to ~2:1 with `object-fit: cover`) |
| **Safe crop** | Action inside the central 60% horizontally; nothing critical in the bottom 25% (covered by the scrim and copy) |
| **Transparent BG** | N/A |
| **Format** | H.264 MP4 (+ VP9/AV1 WebM ideal), no audio track |
| **Duration** | 15–25s, seamless loop point |
| **Baked text** | **No** — no subtitles, no HUD, no watermark |
| **Mobile variant** | Yes — 720p version already wired; phones get the poster only by default |
| **Why it matters** | The hero is the first four seconds of the site. Today it is a 20s crop of the trailer with the bottom 15% cut away to hide subtitles, which costs framing and forces a tighter crop than intended. A clean plate shot for this purpose would raise the whole page. |
| **Have?** | Partial — cropped trailer segment (5s–25s), 4.7 MB / 2.1 MB |
| **Current stand-in** | `public/assets/video/hero-loop-1080.mp4` |

### P0-3 · Hero poster frame
| | |
| --- | --- |
| **Filename** | `hero-poster.jpg` |
| **Page / section** | Home → hero; LCP image on first paint |
| **Shows** | The strongest single frame of the hero loop — ideally the loop's first frame so the swap is invisible |
| **Dimensions** | 1920 × 918 |
| **Aspect** | ~2.09:1 |
| **Safe crop** | Bottom 30% must stay readable under the scrim |
| **Format** | JPEG q80, or AVIF |
| **Baked text** | No |
| **Mobile variant** | Yes — 960 × 459 (phones show only the poster) |
| **Why it matters** | This is the Largest Contentful Paint element on the homepage. Every performance number depends on it, and on mobile it is the *only* hero visual. |
| **Have?** | Yes, extracted at t=5s (102 KB) |

### P0-4 · Social preview card
| | |
| --- | --- |
| **Filename** | `og-default.jpg` |
| **Page / section** | All pages — Open Graph / Twitter card |
| **Shows** | Purpose-composed key art: Mythbound lockup over a strong arena or cast shot, "A Skaldforge Game" |
| **Dimensions** | **1200 × 630 exactly** |
| **Aspect** | 1.91:1 |
| **Safe crop** | Keep the lockup inside the central 1000 × 500 — some platforms crop to square |
| **Format** | JPEG q85 (< 300 KB) |
| **Baked text** | **Yes** — logo and studio line baked in |
| **Mobile variant** | No |
| **Why it matters** | Every Discord, Slack and X link preview of this site. An Epic reviewer may see this before they see the site. |
| **Have?** | Generated stand-in — `scripts/gen-brand-assets.mjs` composites a gameplay plate with the official lockup. Serviceable, but a designed card would be better. |

### P0-5 · Relic Rush action shot
| | |
| --- | --- |
| **Filename** | `relic-rush-hero.jpg` |
| **Page / section** | Home → Relic Rush band; Mythbound → mode section |
| **Shows** | The mode's core fantasy in one frame: a carrier moving with the relic, pursued, mid-arena. Both team colours visible. |
| **Dimensions** | 2560 × 1100 min |
| **Aspect** | 21:9 (used as a full-bleed band and a wide figure) |
| **Safe crop** | Left 45% is overlaid by copy on desktop — keep the subject right-of-centre |
| **Format** | JPEG q85 / AVIF |
| **Baked text** | No |
| **Mobile variant** | Yes — a 4:3 recrop with the subject centred |
| **Why it matters** | Relic Rush is the premiere mode and gets its own full-bleed section. The current frame shows the relic on its pedestal but nobody contesting it, so the section illustrates the *object* rather than the *fight*. |
| **Have?** | Partial — `relic-altar` (pedestal, no action) |

### P0-6 · Asgard arena capture
| | |
| --- | --- |
| **Filename** | `arena-asgard.jpg` |
| **Page / section** | Home + Mythbound → Arenas (`ArenaShowcase.astro`) |
| **Shows** | Dressed and lit Asgard — sky kingdom, floating platforms, Yggdrasil branches, rainbow links |
| **Dimensions** | 1600 × 1200 min |
| **Aspect** | 4:3 |
| **Safe crop** | Bottom 35% sits under a scrim |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Mobile variant** | No |
| **Why it matters** | One of three arena cards currently ships desaturated with an "In development" badge and a greybox image. That is honest and reads fine, but a dressed Asgard would complete the set and remove the only visibly unfinished card on the site. |
| **Have?** | Blockout only — `arena-blockout-vertical` |
| **Current stand-in** | Desaturated blockout + explicit dev badge |

---

# P1 — HIGH VALUE

### P1-1 · Gameplay pillar shots (×3)
| | |
| --- | --- |
| **Filename** | `pillar-move.jpg`, `pillar-brawl.jpg`, `pillar-power.jpg` |
| **Page / section** | Home + Mythbound → gameplay pillars (`FeatureSplit.astro`) |
| **Shows** | One per pillar, each unambiguously illustrating its idea — **Move**: a wall-kick or grapple mid-chain with motion trail. **Brawl**: the third hit of a combo connecting, knockback visible. **Power**: a named ability at peak VFX with its caster readable. |
| **Dimensions** | 2400 × 1500 |
| **Aspect** | 16:10 |
| **Safe crop** | Subject in the central 70% |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Mobile variant** | No |
| **Why it matters** | These three blocks carry the "how it plays" argument. Current frames are the closest available from the trailer and are approximate — the Move shot in particular doesn't clearly show traversal. |
| **Have?** | Approximations — `village-street`, `base-clash`, `gold-burst` |

### P1-2 · Character portraits (bust crops)
| | |
| --- | --- |
| **Filename** | `portrait-eirik.png` … ×4 |
| **Page / section** | Future character detail pages; roster hover states |
| **Dimensions** | 800 × 800 |
| **Aspect** | 1:1 |
| **Transparent BG** | Yes |
| **Format** | PNG |
| **Baked text** | No |
| **Why it matters** | Lets the roster expand into per-character pages without a new art request. Derivable from P0-1. |
| **Have?** | No |

### P1-3 · Ability / VFX captures
| | |
| --- | --- |
| **Filename** | `ability-storm-javelin.mp4`, `ability-hex-recall.mp4`, `ability-tidal-spear.mp4`, `ability-tempest-surge.mp4` (+ `.jpg` posters) |
| **Page / section** | Mythbound → Bound roster (per-ability media); Development → VFX |
| **Shows** | Each named ability in isolation, clean camera, 2–4s, ideally in a neutral arena |
| **Dimensions** | 1280 × 720 |
| **Aspect** | 16:9 |
| **Format** | MP4 (silent, loopable) + JPEG poster |
| **Duration** | 2–4s each |
| **Baked text** | No |
| **Mobile variant** | Poster only |
| **Why it matters** | The roster names six real abilities with real descriptions and shows none of them. Short loops would turn a text list into the most convincing gameplay content on the site. |
| **Have?** | No |

### P1-4 · Arena beauty shots — Midgard & Helheim
| | |
| --- | --- |
| **Filename** | `arena-midgard.jpg`, `arena-helheim.jpg` |
| **Page / section** | Arenas showcase |
| **Shows** | Deliberately composed establishing shot of each arena, best light, no HUD, no characters mid-animation |
| **Dimensions** | 1600 × 1200 |
| **Aspect** | 4:3 |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Why it matters** | Current cards use trailer frames that were composed for motion, not for a static card. Purpose-shot stills would look markedly more expensive. |
| **Have?** | Trailer frames — `midgard-aerial`, `bridge-walls` |

### P1-5 · Blockout → final comparison pairs
| | |
| --- | --- |
| **Filename** | `compare-<area>-dev.jpg` / `compare-<area>-final.jpg` |
| **Page / section** | Development → all `CompareBlock` sections |
| **Shows** | **Matched camera** — the same viewpoint in blockout and in the finished lit arena |
| **Dimensions** | 2000 × 1250 each |
| **Aspect** | 16:10 |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Why it matters** | This is the most persuasive format on the Development page for an Epic reviewer, and it only fully lands when both halves share a camera. Today the pairs are thematically matched but shot from different viewpoints, which weakens the effect. |
| **Have?** | Unmatched pairs — real, but different cameras |

### P1-6 · Unreal Editor screenshots
| | |
| --- | --- |
| **Filename** | `editor-blueprint.jpg`, `editor-niagara.jpg`, `editor-anim.jpg`, `editor-level.jpg` |
| **Page / section** | Development → Engine / VFX / Animation |
| **Shows** | Real editor views — a Blueprint or state machine, a Niagara graph beside its effect, the Motion Matching database, a level with its blockout layer visible |
| **Dimensions** | 2400 × 1500 |
| **Aspect** | 16:10 |
| **Format** | PNG or high-q JPEG (UI text must stay legible) |
| **Baked text** | Incidental UI only |
| **Mobile variant** | No — these need a large viewport to read |
| **Why it matters** | Directly answers "is there real technical work here?" Nothing on the site currently shows the engine itself. Note: crop out anything internal (names, hour estimates, unreleased content). |
| **Have?** | No |

### P1-7 · Motion capture / animation imagery
| | |
| --- | --- |
| **Filename** | `mocap-session.jpg`, `anim-retarget.jpg` |
| **Page / section** | Development → Animation |
| **Shows** | A capture session on the stage, and cleaned/retargeted animation in MotionBuilder or Unreal |
| **Dimensions** | 2000 × 1250 |
| **Aspect** | 16:10 |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Why it matters** | The site states motion capture + Unreal Motion Matching (the strongest verified technical claim it makes) and illustrates it with a greybox test. Evidence of actual capture would substantiate it. Requires talent release for anyone identifiable. |
| **Have?** | No |

### P1-8 · Media gallery expansion
| | |
| --- | --- |
| **Filename** | `gallery-01.jpg` … `gallery-09.jpg` |
| **Page / section** | Mythbound → From the arena |
| **Dimensions** | 1920 × 1080 |
| **Aspect** | 16:9 |
| **Format** | JPEG q85 |
| **Baked text** | No |
| **Why it matters** | The gallery holds six frames, all from the same 30-second trailer, so variety is limited and a few are visually close to one another. Nine varied, purpose-captured shots would make the game look bigger. |
| **Have?** | Six trailer frames |

---

# P2 — FUTURE POLISH

### P2-1 · Skaldforge brand variants
| | |
| --- | --- |
| **Filename** | `skaldforge-wordmark-light.svg`, `-dark.svg`, `-stacked.svg`, `-mark-only.svg` |
| **Page / section** | Nav, footer, favicon, press kit |
| **Format** | SVG, optimised, `currentColor` |
| **Transparent BG** | Yes |
| **Why it matters** | The supplied SVG is a single two-tone artwork (34 KB, ~18 paths) recoloured at build time — ink becomes `currentColor`, knockouts become transparent. It works, but purpose-drawn light/dark and mark-only variants would be cleaner and smaller, and a mark-only raven would make a better favicon than the current geometric valknut. |
| **Have?** | One combined SVG — `public/assets/brand/skaldforge-logo.svg` |

### P2-2 · Mythbound logo variants
| | |
| --- | --- |
| **Filename** | `mythbound-logo.svg`, `mythbound-logo-mono.svg`, `mythbound-lockup-stacked.png` |
| **Dimensions** | Vector; PNG fallback 2400 px wide |
| **Transparent BG** | Yes |
| **Why it matters** | The current logo is a 2.7 MB PNG (optimised to ~190 KB at largest render). A vector version would be sharper at hero scale and far smaller. |
| **Have?** | PNG only — `src/assets/brand/mythbound-logo.png` |

### P2-3 · Per-page social cards
| | |
| --- | --- |
| **Filename** | `og-mythbound.jpg`, `og-development.jpg`, `og-studio.jpg` |
| **Dimensions** | 1200 × 630 |
| **Baked text** | Yes — page name |
| **Why it matters** | All four pages currently share one card. Per-page cards make shared links more informative. Wire via the `ogImage` prop already on `Base.astro`. |
| **Have?** | No |

### P2-4 · Studio / team photography
| | |
| --- | --- |
| **Filename** | `studio-team.jpg`, `studio-space-01.jpg` |
| **Dimensions** | 2400 × 1350 |
| **Aspect** | 16:9 |
| **Why it matters** | The Studio page is entirely typographic. One real photograph of the team would do more for credibility than any amount of copy — it proves people, not just a project. Needs consent from everyone pictured. See CONTENT_TODO #6. |
| **Have?** | No |

### P2-5 · Environment panoramas
| | |
| --- | --- |
| **Filename** | `pano-midgard.jpg`, `pano-helheim.jpg`, `pano-asgard.jpg` |
| **Dimensions** | 3840 × 1080 |
| **Aspect** | 32:9 |
| **Why it matters** | Would enable full-bleed parallax section breaks between arenas. Not required by the current design. |
| **Have?** | No |

### P2-6 · Developer commentary / ViDoc
| | |
| --- | --- |
| **Filename** | `vidoc-01.mp4` + `.vtt` captions + poster |
| **Page / section** | Development page |
| **Duration** | 2–5 min |
| **Baked text** | No — captions as a separate WebVTT track |
| **Why it matters** | A developer talking about the movement system is exactly the kind of material a MegaGrant reviewer engages with. Would slot in beside the existing `TrailerPlayer`. |
| **Have?** | No |

### P2-7 · Press kit
| | |
| --- | --- |
| **Filename** | `press-kit.zip` |
| **Contents** | Logos (both brands, all variants), 8–10 approved screenshots at 1920×1080, fact sheet, trailer download link |
| **Why it matters** | Standard for a game with a public site; currently no press page exists (deliberately — see the brief's instruction not to build empty sections). |
| **Have?** | No |

### P2-8 · Maskable app icon
| | |
| --- | --- |
| **Filename** | `icon-maskable-512.png` |
| **Dimensions** | 512 × 512 |
| **Safe crop** | Artwork inside the central 80% circle |
| **Why it matters** | Current icons are generated from the favicon SVG and are not maskable-safe for Android home screens. Low impact. |
| **Have?** | Generated non-maskable icons at 180/192/512 |

---

## Notes on what is deliberately absent

- **No AI-generated art is used anywhere on the site.** ASG `image65.png`
  carries a visible generative watermark and was excluded. See CONTENT_TODO #5.
- **No third-party imagery is used.** ASG slides 4, 35, 36, 38 and 39 are
  inspiration and UI "proxy" boards containing other studios' games (Hades,
  Destiny 2, Cult of the Lamb, Windblown, Dying Light). None of it ships.
- **No fabricated screenshots.** Every image is a real capture from the trailer
  or the ASG.
- **Internal documents excluded.** ASG `image17.png` (character art pipeline with
  individual names and hour estimates) is real Skaldforge work but is an internal
  planning document, not public-facing material.
