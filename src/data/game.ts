/**
 * Mythbound. verified game content.
 * See src/data/site.ts for the sourcing rule.
 */

export const game = {
  name: 'Mythbound',

  /** source: GDD "Genre" + brief. */
  genre: 'Competitive Multiplayer Arena Brawler',

  /** Version confirmed in the PM review on August 31, 2026. */
  engine: 'Unreal Engine 5.7',

  /** Public date remains unannounced. Internal Early Access planning is not a promise. */
  releaseWindow: 'TBA',

  status: 'In Post-Production',

  /**
   * source: studio direction (current). Relic Rush leads the three modes.
   * NO PLAYER COUNT is asserted at the top level. the modes differ, and 4v4 /
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
 * wall-kicking and mantling. Dash, grapple and ground slam are NOT
 * advertised. they are older prototype tuning and may not be in the build.
 * Combat copy stays behavioural rather than quoting frame or damage data.
 */
export const pillars = [
  {
    id: 'move',
    index: '01',
    title: 'Move',
    heading: 'Momentum is the weapon',
    body:
      'Running, sliding, wall-kicking and mantling chain into one another. Carry your momentum from one move to the next and turn speed into an advantage.',
    detail: ['Run', 'Slide', 'Wall-Kick', 'Mantle'],
    image: 'village-street',
  },
  {
    id: 'brawl',
    index: '02',
    title: 'Brawl',
    heading: 'Close range, high commitment',
    body:
      'Close the distance, read the parry and commit to your strike. Spacing, timing and momentum shape every melee exchange.',
    detail: ['Melee exchanges', 'Parry timing', 'Momentum scaling', 'Positioning'],
    image: 'base-clash',
  },
  {
    id: 'power',
    index: '03',
    title: 'Wield Power',
    heading: 'The gods are sponsors',
    body:
      'Thor, Loki, Njord and Hel each grant their Bound two distinct abilities. Lightning, speed, wind and the power of the dead give every contestant a different approach.',
    detail: ['Thor', 'Loki', 'Njord', 'Hel'],
    image: 'gold-burst',
  },
] as const;

/**
 * Relic Rush.
 * source: TRAILER on-screen narration ,
 *   "Fight your way into their base and capture the ancient relic."
 *   "Choose to defend your base or fight head on."
 *   "Battle wisely, and you're sure to secure your spot amongst the greats."
 * Team size per brief. Mechanical detail beyond the above is NOT published.
 */
/**
 * Relic Rush.
 * source: studio direction (current). two teams contest a central Relic and
 * carry it into the enemy goal. Each score costs the opposing team a life.
 * A team that exhausts its lives can no longer respawn; last team standing wins.
 *
 * Older three-team and 4v4 framings are obsolete and must not return here.
 */
export const relicRush = {
  name: 'Relic Rush',
  format: 'Featured mode',
  heading: 'Take the relic. Break their defenses.',
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
 * Arena names and lore confirmed by the studio on August 31, 2026.
 *
 * `hasFinalArt` gates whether a finished capture is shown; all three now have
 * one, but the flag stays so a future arena can be added honestly.
 */
export const arenas = [
  {
    id: 'midgard',
    name: 'Midgard',
    blurb:
      'Midgard sits at the heart of the World Tree and is home to the Bound. Its hardy people raise generations of strong warriors shaped for the arena.',
    hasFinalArt: true,
    image: 'midgard',
  },
  {
    id: 'helheim',
    name: 'Helheim',
    blurb: 'Deep beneath the roots of the World Tree, Helheim shelters forgotten souls denied entry to Valhalla. Its city of the dead is now an arena where the Bound fight to prove their worth.',
    hasFinalArt: true,
    image: 'helheim',
  },
  {
    id: 'himinbjorg',
    name: 'Himinbjorg',
    blurb: 'High atop mountains that scrape the sky, the Bound fight in and around the palace of Himinbjorg. Home to Heimdallr, it guards the gateway between Midgard and Asgard.',
    hasFinalArt: true,
    image: 'himinbjorg',
  },
] as const;

/**
 * Game modes.
 * source: Final Presentation slide 7. "Relic Rush | Free for All | Team
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
      'Two teams fight over a central relic while defending three goals of their own. The relic destroys a goal on entry. Lose every life and you stop respawning. The last team standing wins.',
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
    kicker: '2 to 8 players',
    body:
      'Players fight without allies in a battle for survival. The most eliminations when time expires wins.',
    video: 'mode-free-for-all',
    feature: false,
  },
] as const;
