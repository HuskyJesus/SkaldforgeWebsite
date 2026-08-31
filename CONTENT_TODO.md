# CONTENT_TODO

Open items needing Skaldforge sign-off. Nothing here is currently published as
a claim : each item is omitted, disabled behind a flag, or flagged because it
was inferred rather than verified.

**Sources, newest first**
- `STUDIO` : studio-supplied current canon (chat direction). **Authoritative.**
- `FINAL` : *Final Presentation - Copy.pptx* (recovered from the OneDrive zip)
- `TRAILER` : *Mythbound_FinalTrailerV02.mp4*
- `ASG` : *Mythbound ASG.pptx* (slide numbers given)
- `GDD` : *Mythbound GDD.docx* v1.80 : **largely superseded, see below**

---

## 0. What is now treated as OBSOLETE

Per STUDIO direction, none of the following may appear on the site, and all
have been removed:

- **4v4** as a universal format · **3v3v3** · **1v1v1** · three-team Relic Rush
- **Hel as announcer** (Hel is Yrsa's sponsor; **Odin** is the announcer)
- The old three-Bound roster
- Older prototype abilities: Thunderous Advance, Thunderfall, Tidal Spear,
  Leviathan's Wake, Hex Recall, Soul Rend
- **Dash** and **grapple** as advertised core traversal
- Any description of Mythbound as a local multiplayer party game
- Ultimates : every Bound has exactly two abilities

The GDD remains the source only for build/height/movement-feel flavour and the
"contract and marked eyes" premise. Its mode, ability and roster sections are
dead.

---

## 1. Asgard vs Himinbjorg : CONFLICT, NEEDS A DECISION ⚠️

**Currently published: Asgard**, per STUDIO ("Midgard, Helheim, and Asgard are
still the current named arena/world set I can substantiate").

However **FINAL slide 6 reads "HIMINBJORG | HELHEIM | MIDGARD"** and supplies
the dressed capture the site now uses for that arena. The original website brief
also said Himinbjorg. So the newest *artifact* says Himinbjorg while the newest
*instruction* says Asgard.

I went with the instruction. This is the single highest-priority item : it is a
proper noun on three pages and in the page metadata.

**Action:** confirm. One-line change: `src/data/game.ts` → `arenas[2].name`, and
rename `src/assets/arenas/asgard.jpg`.

## 2. Skari's surname : likely a typo in the supplied copy

The supplied character copy heads Skari's section **"Skari Gravewind"**, but
also gives Yrsa as **"Yrsa Gravewind"**. Both cannot be Gravewind, and
**Skari Quickstep** is used consistently in GDD, ASG slide 20 and FINAL slide 5.

**Currently published: Skari Quickstep.**

**Action:** confirm. `src/data/bound.ts`.

## 3. Skari's pronouns : changed

The supplied copy uses **she/her** for Skari ("her speed, cunning"). The GDD used
they/them. The site now uses she/her, per the newer source.

**Action:** confirm this is intentional and not an inconsistency.

## 4. Relic Rush : goals and lives

Two statements were supplied a few minutes apart:
1. "carry it into the enemy goal, costing the opposing team a life"
2. "protecting their own **three goals**. The relic destroys a goal upon entry.
   When a team loses every life, it can no longer respawn."

The site publishes (2), the later version: three goals, relic destroys a goal on
entry, lose all lives and you stop respawning, last team standing wins.

**Action:** confirm goals and lives are the same resource, or clarify the
relationship. `src/data/game.ts` → `relicRush`, `modes`.

## 5. Free For All player count

STUDIO gave "2-8 players" in one message and omitted it in the next. The site
publishes **2 to 8**.

**Action:** confirm. `src/data/game.ts` → `modes`.

## 6. Arena descriptions : deliberately thin

Per STUDIO ("do not put detailed claims like 'Helheim is compact ruins' or
'Asgard is the vertical map' into public copy"), all layout, verticality and
chokepoint claims were **removed**. Only Midgard's open/expansive character is
stated. The other two get a single visual line each.

**Action:** supply verified descriptions when the current maps are settled, and
they can be restored. `src/data/game.ts` → `arenas[].blurb`.

## 7. Defensive shield : described generically

Per STUDIO, no numeric shield behaviour is published. The Brawl pillar says
"parry timing" and "spacing" rather than durability or regeneration values.

**Action:** none required. Revisit only if you want the mechanic named publicly.

## 8. Setting : modern-day Norway de-emphasised

Per STUDIO, the alternate-modern-Norway framing was pulled back. The site now
leads with the gods, the sponsorship contract and the arena. The Valkyries are
no longer mentioned. The "contract and marked eyes" premise is retained because
every finished render visibly supports it.

**Action:** confirm the current narrative framing.

## 9. Gameplay clips carry a live HUD and dev names

The three mode clips (FINAL slides 7) are playtest captures. Visible on screen:
an FPS/ping debug readout, and real player names in scoreboards and kill feeds
(DanielDR, CaiusR, Jacob, RichardH, ChrisC, MichaelD, Abner, MichaelK).

This was kept deliberately : for a developer or Epic audience it reads as
evidence the game genuinely runs, and the section is labelled "captured from a
work-in-progress playtest build". But it does put team members' handles on a
public marketing site.

**Action:** confirm that is acceptable, or supply clean captures. Also listed as
ART_ASSET_CHECKLIST P1.

## 10. Team roster : BUILT BUT DISABLED

`src/data/studio.ts` holds the full roster from FINAL slide 3 with
`publishRoster = false`. The Studio page shows disciplines instead.

FINAL supersedes ASG here : it moves Level Design Lead from Kenzey Estes to
Michael Doctor and adds sound design and voice acting.

**Action:** confirm names, spellings and titles, then set `publishRoster = true`.

## 11. Social links and contact : NONE PUBLISHED

`socials` is empty and `contact.email` is `null`, so the footer's "Connect"
column and the Studio contact section do not render. No invented accounts exist.

**Action:** supply real URLs and a monitored public address. `src/data/site.ts`.

## 12. Release window : VERIFY STILL CURRENT

**Published: "Coming Fall 2026"**, from the TRAILER end card. The only date
claim on the site; no platforms are claimed anywhere.

**Action:** confirm the window has not moved. `src/data/game.ts`.

## 13. Engine and technology claims : deliberately conservative

Published: "Built in Unreal Engine"; motion capture with **Unreal Engine Motion
Matching** (ASG slide 11 states this explicitly); asset budgets (ASG 8 to 9); the
DCC toolchain (ASG 6).

**Not claimed:** Nanite, Lumen, Gameplay Ability System, Chaos, World Partition,
engine version, or any networking architecture.

**Action:** supply engine version, engine features actually in use, and the
current networking model if you want them stated.

## 14. Generative-AI tools omitted from the public toolchain : CONFIRM

ASG slide 6 lists **Stable Diffusion**, **Hunyuan Studio** and **Hitem 3D**
alongside Maya, ZBrush and Substance. These are omitted from the published
toolchain : a public pipeline page aimed at an Epic reviewer invites provenance
questions the site cannot answer for you.

Separately, ASG `image65.png` is an AI-generated image with a visible generative
watermark. It is **not used anywhere**.

**Action:** decide whether to disclose. `src/data/tech.ts` → `toolchain`.

## 15. Trailer captions : verify timings

`public/assets/video/mythbound-trailer.en.vtt` was transcribed from the
burned-in subtitles. Wording is verbatim; **cue timings are approximate**.

**Action:** check timings against playback, or supply the original subtitle file.

## 16. FIEA / UCF origin wording

The Studio page states Skaldforge formed out of UCF's Florida Interactive
Entertainment Academy. This comes from the original brief only.

**Action:** approve, or disable via `src/data/studio.ts` → `origin.show = false`.

## 17. Custom domain

`SITE_URL` / `BASE_PATH` come from the environment and the workflow fills them
from `actions/configure-pages`, so no URL is hardcoded. To move to a custom
domain: add `public/CNAME`, set the domain in repository settings, and update
the `Sitemap:` line in `public/robots.txt` by hand.

## 18. Studio legal name

The footer renders "© <year> Skaldforge. All rights reserved." Confirm the
correct legal entity and rights line. `src/components/Footer.astro`.


## Review pass: remaining publication inputs

- Roadmap expansion cards are now disabled. Existing gods and arenas do not verify plans for new roster slots, new arenas, or future technical capacity. Supply approved milestones before re-enabling them.
- Confirm the Fall 2026 target from the trailer before launch. The site keeps it as the supplied target, not a new release commitment.
- Confirm rights to use the supplied PNGTree valknut commercially, including any attribution requirements. The source image is unchanged.
- Contact details, approved team presentation and ViDoc captions remain missing. These are the strongest remaining improvements to the studio and development pages.
