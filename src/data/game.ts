/**
 * Mythbound — verified game content.
 * See src/data/site.ts for the sourcing rule.
 */

export const game = {
  name: 'Mythbound',

  /** source: GDD "Genre" + brief. */
  genre: 'Competitive Multiplayer Arena Brawler',

  /** source: ASG slide 11 (Unreal Engine Motion Matching), trailer is UE-rendered. */
  engine: 'Unreal Engine',

  /** source: TRAILER end card, "Coming Fall 2026". */
  releaseWindow: 'Fall 2026',

  status: 'In Development',

  /**
   * source: studio direction (current). Relic Rush leads the three modes.
   * NO PLAYER COUNT is asserted at the top level — the modes differ, and 4v4 /
   * 3v3v3 / 1v1v1 are all explicitly obsolete.
   */
  primaryMode: 'Relic Rush',

  /** source: studio direction (current). Odin presides over the competition. */
  announcer: 'Odin',

  tagline: 'Movement, melee, and god-granted power.',

  heroStatement:
    'A competitive Norse arena brawler where the Bound fight for glory under the sponsorship of the gods.',
} as const;

/** Scannable project snapshot. Verified fields only, no player counts. */
export const snapshot = [
  { label: 'Genre', value: game.genre },
  { label: 'Engine', value: game.engine },
  { label: 'Modes', value: 'Relic Rush · Team Deathmatch · Free For All' },
  { label: 'Perspective', value: 'Third Person' }, // source: GDD "Third Person Camera"
  { label: 'Status', value: game.status },
  { label: 'Target Window', value: game.releaseWindow },
] as const;

/**
 * The three gameplay pillars.
 *
 * source: studio direction (current). Traversal is running, sliding,
 * wall-kicking, mantling and ground slamming. Dash and grapple are NOT
 * advertised — they are older prototype tuning and may not be in the build.
 * Combat copy stays behavioural rather than quoting frame or damage data.
 */
export const pillars = [
  {
    id: 'move',
    index: '01',
    title: 'Move',
    heading: 'Momentum is the weapon',
    body:
      'Running, sliding, wall-kicking and mantling chain into one another, and a ground slam turns height into pressure. Speed is not reset between actions — it is carried, and carrying it well is most of the skill.',
    detail: ['Run', 'Slide', 'Wall-Kick', 'Mantle', 'Ground Slam'],
    image: 'village-street',
  },
  {
    id: 'brawl',
    index: '02',
    title: 'Brawl',
    heading: 'Close range, high commitment',
    body:
      'Melee is the foundation. Exchanges are decided by spacing, timing and whether you read the parry — and arriving with speed makes every strike land harder than it should.',
    detail: ['Melee exchanges', 'Parry timing', 'Momentum scaling', 'Positioning'],
    image: 'base-clash',
  },
  {
    id: 'power',
    index: '03',
    title: 'Wield Power',
    heading: 'The gods are sponsors',
    body:
      'Each Bound signs with a god who trades power for spectacle. Thor, Loki, Njord and Hel each grant a compact pair of abilities — no ultimates, just two tools that reshape how their contestant fights.',
    detail: ['Thor', 'Loki', 'Njord', 'Hel'],
    image: 'gold-burst',
  },
] as const;

/**
 * Relic Rush.
 * source: TRAILER on-screen narration —
 *   "Fight your way into their base and capture the ancient relic."
 *   "Choose to defend your base or fight head on."
 *   "Battle wisely, and you're sure to secure your spot amongst the greats."
 * Team size per brief. Mechanical detail beyond the above is NOT published.
 */
/**
 * Relic Rush.
 * source: studio direction (current) — two teams contest a central Relic and
 * carry it into the enemy goal. Each score costs the opposing team a life.
 * A team that exhausts its lives can no longer respawn; last team standing wins.
 *
 * Older three-team and 4v4 framings are obsolete and must not return here.
 */
export const relicRush = {
  name: 'Relic Rush',
  format: 'Premiere mode',
  heading: 'Three goals. One relic. No clock to hide behind.',
  body:
    'Two teams fight over a central relic while defending three goals of their own. Delivering the relic destroys one. When a team loses every life it can no longer respawn, and the last team standing wins.',
  beats: [
    {
      title: 'Contest the centre',
      body: 'The relic sits between both teams. Reaching it first is rarely the hard part.',
    },
    {
      title: 'Carry it in',
      body: 'Holding the relic makes you the target. Everything on the field turns toward you.',
    },
    {
      title: 'Destroy a goal',
      body: 'The relic destroys a goal on entry. Three stand between you and their collapse.',
    },
    {
      title: 'Last team standing',
      body: 'Once a team runs out of lives, it stops coming back. The match ends when one side is left.',
    },
  ],
} as const;

/**
 * Arenas.
 * source: Final Presentation slide 6 names the three arenas
 * "HIMINBJORG | HELHEIM | MIDGARD" and supplies a dressed capture of each.
 *
 * NOTE: the GDD and ASG call the third arena "Asgard". The final presentation
 * — the newest source — calls it Himinbjorg, which matches the brief. Treated
 * as a rename. See CONTENT_TODO.md #2.
 *
 * `hasFinalArt` gates whether a finished capture is shown; all three now have
 * one, but the flag stays so a future arena can be added honestly.
 */
export const arenas = [
  {
    id: 'midgard',
    name: 'Midgard',
    // Only Midgard's open/expansive character is substantiated as current.
    blurb:
      'The most expansive of the arenas — open ground and long lines that give traversal somewhere to run.',
    hasFinalArt: true,
    image: 'midgard',
  },
  {
    id: 'helheim',
    name: 'Helheim',
    blurb: 'A cold stone realm of the dead, fought over under torchlight.',
    hasFinalArt: true,
    image: 'helheim',
  },
  {
    id: 'asgard',
    name: 'Asgard',
    blurb: 'A snowbound seat of the gods, beneath the branches of the world tree.',
    hasFinalArt: true,
    image: 'asgard',
  },
] as const;

/**
 * Game modes.
 * source: Final Presentation slide 7 — "Relic Rush | Free for All | Team
 * Deathmatch", each with a gameplay capture. This supersedes the GDD's older
 * 3v3v3 / 1v1v1 / Capture the Flag section.
 *
 * Clips are captured from a playtest build and carry a live HUD, which is
 * deliberate: it shows a game that genuinely runs.
 */
export const modes = [
  {
    id: 'relic-rush',
    name: 'Relic Rush',
    kicker: 'Objective · Two teams',
    body:
      'Two teams fight over a central relic while defending three goals of their own. The relic destroys a goal on entry. Lose every life and you stop respawning — last team standing wins.',
    video: 'mode-relic-rush',
    feature: true,
  },
  {
    id: 'team-deathmatch',
    name: 'Team Deathmatch',
    kicker: 'Two teams',
    body:
      'Two teams battle to earn the most eliminations before the match timer reaches zero.',
    video: 'mode-team-deathmatch',
    feature: false,
  },
  {
    id: 'free-for-all',
    name: 'Free For All',
    kicker: '2–8 players',
    body:
      'Players fight without allies in a battle for survival. The most eliminations when time expires wins.',
    video: 'mode-free-for-all',
    feature: false,
  },
] as const;
