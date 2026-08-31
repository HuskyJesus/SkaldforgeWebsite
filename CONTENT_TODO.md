# CONTENT_TODO

Facts, copy, links and claims that need Skaldforge sign-off before the site can
be considered final. Nothing in this list is currently published as a claim —
each item is either omitted, disabled behind a flag, or flagged here because it
was inferred rather than verified.

**Sources referenced below**
- `GDD` — *Mythbound GDD.docx*, Design Document v1.80
- `ASG` — *Mythbound ASG.pptx*, Art Style Guide (slide numbers given)
- `TRAILER` — *Mythbound_FinalTrailerV02.mp4*
- `BRIEF` — the written brief supplied with this build

---

## 1. Game mode and team size — CONFLICT, NEEDS A DECISION

**Currently published:** "4v4 Relic Rush" as the primary mode.

The sources disagree:

| Source | Says |
| --- | --- |
| BRIEF | "competitive 4v4 multiplayer PvP arena brawler", premiere mode "Relic Rush" |
| GDD §Multiplayer Gamemode | **3v3v3** (three teams of three, 15 min, elimination race), **1v1v1** free-for-all, and **Capture the Flag** (three teams, banners at spawns). No mode named "Relic Rush". |
| GDD §Skari abilities | References a **Relic** — "Translates player location to Relic Location", "Teleport disabled while holding Relic" — so relic carrying *is* in the current design. |
| TRAILER | "Four champions rise", "Fight your way into their base and capture the ancient relic", "Choose to defend your base or fight head on" |

The trailer describes a two-sided base-assault relic capture, which is neither
the GDD's 3v3v3 nor its three-team CTF. The GDD's mode section appears to
predate the relic work.

**Action:** confirm the correct public description — team format (4v4? 3v3v3?),
mode name, and win condition. Then update `src/data/game.ts` → `game.primaryMode`
and `relicRush`. The mode copy currently sticks to what the trailer states
out loud and avoids asserting a win condition or match length.

## 2. Arena names — "Himinbjorg" vs "Asgard"

**Currently published:** Midgard, Helheim, **Asgard**.

BRIEF lists the arenas as Himinbjorg / Midgard / Helheim. Both GDD §Setting and
ASG slides 17–19 name the third arena **Asgard** ("a breathtaking kingdom in the
sky"). Himinbjorg appears in neither supplied document. Since Himinbjorg is
Heimdall's hall *within* Asgard, this may be a rename, a sub-area, or a fourth
space.

**Action:** confirm. Update `src/data/game.ts` → `arenas`.

## 3. Screenshot → arena attribution — INFERRED

Arena imagery is captured from the trailer and matched to arenas by reading the
GDD's descriptions against what is on screen:

- **Midgard** → the green timber village shot (GDD: village structures, greenery, mountains).
- **Helheim** → the dark high-walled stone causeway (GDD: ruined, brutalist, greys, high walls).
- **Asgard** → shown honestly as a blockout, because no dressed Asgard footage exists.

This mapping is a reasonable inference, **not** a verified fact.

**Action:** confirm each image is the arena it is labelled as. Files are in
`src/assets/gameplay/` and `src/assets/arenas/`; the mapping lives in
`src/data/game.ts` → `arenas[].image`.

## 4. Engine and technology claims — deliberately conservative

**Published:** "Built in Unreal Engine"; motion capture combined with **Unreal
Engine Motion Matching** (ASG slide 11 states this explicitly); asset budgets
(ASG slides 8–9); the DCC toolchain (ASG slide 6).

**Deliberately NOT published**, because no supplied document supports them:
Nanite, Lumen, Gameplay Ability System, Chaos, World Partition, engine version,
or any networking architecture.

Note: GDD §Lobby System says "Peer to peer connection, players join/invite into
a shared lobby." That is a real networking claim but is **not** published —
it is one line in a v1.80 doc, and networking is exactly the kind of detail an
Epic reviewer may probe.

**Action:** supply the engine version and any engine features actually in use,
plus the current networking model, if you want them stated.

## 5. Generative-AI tools omitted from the public toolchain — CONFIRM

ASG slide 6 lists **Stable Diffusion** (concept art, UI, textures, paintovers,
marketing assets), **Hunyuan Studio** and **Hitem 3D** (model generation)
alongside Maya, ZBrush, Substance and the rest.

Those three are **omitted** from the published toolchain on the Development page.
This was a judgement call, not an oversight: a public pipeline page aimed partly
at an Epic MegaGrant reviewer is a high-scrutiny surface, and generative tooling
invites questions about asset provenance that the site cannot answer for you.

Related: ASG `image65.png` (on the Yrsa slide) is an AI-generated environment
image carrying a visible generative watermark. It is **not used anywhere** on the
site.

**Action:** decide whether to disclose the generative tools. If yes, add them to
`src/data/tech.ts` → `toolchain`. If any shipped art was generated, that needs to
be understood before submitting to Epic.

## 6. Team roster — BUILT BUT DISABLED

`src/data/studio.ts` contains the full roster (names + roles) with
`publishRoster = false`. The Studio page renders the section only when that flag
is true; today it shows disciplines instead.

The names are real and already public — they appear in the trailer's own
"Brought to you by" credits. The **role titles** come from ASG slide 2, an
internal document, and may be stale. Publishing ~26 named individuals with
internal titles is the studio's call, not a default.

**Action:** confirm names, spellings and titles, then set `publishRoster = true`.
Note the trailer credits also list people not in the ASG roles table (Leo
Hoerdemann, Rachel Flatley, Ethan Powell, Andrew Bielek, Lea Fournier, and
contracted talent) — decide whether they belong in the public list.

## 7. Social links — NONE PUBLISHED

`src/data/site.ts` → `socials` is an empty array, so the footer's "Connect"
column does not render. No placeholder or invented accounts exist anywhere.

**Action:** supply real URLs (Discord / X / YouTube / Bluesky / itch / Steam).

## 8. Contact address — NONE PUBLISHED

`src/data/site.ts` → `contact.email` is `null`, so the Studio page's contact
section does not render.

**Action:** supply a monitored public address (press / business / general).

## 9. Release window — VERIFY IT IS STILL CURRENT

**Published:** "Coming Fall 2026" / "Target Window: Fall 2026", taken from the
TRAILER end card. This is the only date claim on the site, and no platforms are
claimed anywhere.

Given the trailer is dated August 2026, confirm the window has not moved before
launch. `src/data/game.ts` → `game.releaseWindow`.

## 10. Yrsa Gravewind — incomplete character data

The GDD gives Yrsa a playstyle ("Support") but **no abilities**; ASG slide 29
gives build, height and movement, with colour palette "TBD". Her card renders
with "Abilities in development" instead of inventing a kit.

Note: GDD §Abilities heads her section "HEL BOUND: Yrsa **Quickstep**", which
duplicates Skari's surname. ASG slide 20 says **Yrsa Gravewind**, which is what
the site uses.

**Action:** confirm the surname; supply abilities when defined.
`src/data/bound.ts`.

## 11. Character accent colours — partially inferred

Card accents use the documented palettes: Skari orange/red (ASG 25), Alvar
blues/purples (ASG 27). Eirik (ASG 22) and Yrsa (ASG 29) are both "TBD" and fall
back to forge gold rather than an invented colour.

**Action:** supply palettes for Eirik and Yrsa. `src/data/bound.ts` → `accent`.

## 12. Forward-looking section — 3 of 6 items disabled

`src/data/roadmap.ts` gates each item behind its own `publish` flag. Published
items describe only what is already true (four Bound in development, three
realms with Asgard in blockout, momentum-driven depth).

Disabled pending verified information: **competitive structure**, **platforms**,
**broader worldbuilding**. Each has a placeholder body reading "PENDING".

**Action:** supply roadmap information you are willing to state publicly, or
leave disabled. Never flip one on without rewriting its body.

## 13. Trailer captions — verify timings

`public/assets/video/mythbound-trailer.en.vtt` was transcribed from the burned-in
subtitles. Wording is verbatim; **cue timings were read off the video and are
approximate**.

**Action:** have someone check the caption timing against playback, or supply the
original subtitle file if one exists.

## 14. FIEA / UCF origin wording

The Studio page states Skaldforge formed out of UCF's Florida Interactive
Entertainment Academy. This comes from BRIEF only — no supplied document
mentions FIEA. The wording deliberately frames it as origin, not identity.

**Action:** approve the wording, or disable via `src/data/studio.ts` →
`studio.origin.show = false`.

## 15. Custom domain

The build reads `SITE_URL` / `BASE_PATH` from the environment and the workflow
fills them from `actions/configure-pages`, so no URL is hardcoded. To move to a
custom domain: add `public/CNAME` containing the domain, and set the Pages custom
domain in repository settings. `public/robots.txt` has the sitemap URL written
out and must be updated by hand at that point.

## 16. Studio legal name in the footer

The footer renders "© <year> Skaldforge. All rights reserved." Confirm the
correct legal entity name and whether a different rights line is required.
`src/components/Footer.astro`.
