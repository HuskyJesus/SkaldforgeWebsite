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

  /** source: brief (primary mode). Reconcile with GDD modes — CONTENT_TODO #1. */
  primaryMode: '4v4 Relic Rush',

  /**
   * Short positioning line. Derived from the GDD High Concept:
   * "a competitive multiplayer Norse arena brawler where players use gifts from
   *  the gods with movement and combat because they want to prove their place
   *  in Valhalla."
   */
  tagline: 'Movement, melee, and godly power collide.',

  heroStatement:
    'A competitive Norse arena brawler where contestants bound to the gods fight for a place in Valhalla.',
} as const;

/** Scannable project snapshot. Verified fields only. */
export const snapshot = [
  { label: 'Genre', value: game.genre },
  { label: 'Engine', value: game.engine },
  { label: 'Primary Mode', value: game.primaryMode },
  { label: 'Perspective', value: 'Third Person' }, // source: GDD "Third Person Camera"
  { label: 'Status', value: game.status },
  { label: 'Target Window', value: game.releaseWindow },
] as const;

/**
 * The three gameplay pillars.
 * source: GDD "Key Features" — Movement Fluidity, Melee Combat, Godly Abilities.
 */
export const pillars = [
  {
    id: 'move',
    index: '01',
    title: 'Move',
    heading: 'Momentum is the weapon',
    body:
      'Dash, slide, wall-kick, mantle and grapple chain into one another. Speed is never reset — it is converted, redirected and carried. Every route through the arena is an argument about how well you can keep it.',
    // source: GDD "Advanced Movement" subsections.
    detail: ['Dash', 'Slide', 'Wall-Kick', 'Mantle', 'Grapple'],
    image: 'village-street',
  },
  {
    id: 'brawl',
    index: '02',
    title: 'Brawl',
    heading: 'Close range, high commitment',
    body:
      'A three-hit melee chain that can be broken into a charged strike at any point. Hold longer for more damage and accept the vulnerability. Arrive fast and the impact scales with the speed you brought.',
    // source: GDD "Base Combo", "Charged Attacks", "Movement Interaction".
    detail: ['Three-hit chain', 'Charged strikes', 'Momentum scaling', 'Directional shield'],
    image: 'base-clash',
  },
  {
    id: 'power',
    index: '03',
    title: 'Wield Power',
    heading: 'The gods are sponsors',
    body:
      'Each Bound signs with a god who trades power for spectacle. Thor, Loki, Njord and Hel each grant a distinct pair of abilities that reshape how their contestant moves through a fight.',
    // source: GDD "Abilities — General" (sponsors), ASG slide 20 (roster).
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
export const relicRush = {
  name: 'Relic Rush',
  format: game.primaryMode,
  heading: 'Take the relic. Hold the line.',
  body:
    'Two teams, one ancient relic, and a base at either end of the arena. Break in, take it, and get it home — or hold your ground and make them pay for every metre. Possession changes hands in seconds, and the arena punishes anyone who stops moving.',
  beats: [
    {
      title: 'Break in',
      body: 'Cross open ground under fire and force an entry into a defended base.',
    },
    {
      title: 'Take the relic',
      body: 'Lifting it makes you the target. Everything on the field turns toward you.',
    },
    {
      title: 'Get it home',
      body: 'Carry it back through the arena while four opponents try to end the run.',
    },
    {
      title: 'Or hold',
      body: 'Defend your own relic instead and turn their push into your opening.',
    },
  ],
} as const;

/**
 * Arenas.
 * source: GDD "Setting" + ASG slides 12–19.
 * `hasFinalArt` gates whether a finished capture is shown. Asgard is honestly
 * presented as in-development rather than dressed with unrelated imagery.
 */
export const arenas = [
  {
    id: 'midgard',
    name: 'Midgard',
    realm: 'The Glory',
    blurb:
      'The primary arena. Open ground, long sightlines and a lake that splits the map into shifting frontlines. Mountainsides and Yggdrasil branches give the parkour somewhere to go.',
    // source: GDD "Midgard/Norway", ASG slide 12.
    traits: ['Open and expansive', 'Long pursuit routes', 'Elevation and wall-kick lines'],
    hasFinalArt: true,
    image: 'midgard-aerial',
  },
  {
    id: 'helheim',
    name: 'Helheim',
    realm: 'The Reckoning',
    blurb:
      'A fractured settlement around a temple of the dead. Collapsed homes and broken stone cut the sightlines short and force the fighting into corridors and chokepoints.',
    // source: GDD "Helheim", ASG slides 15–16.
    traits: ['Compact and dense', 'Chained wall-kicks', 'Contested central platform'],
    hasFinalArt: true,
    image: 'bridge-walls',
  },
  {
    id: 'asgard',
    name: 'Asgard',
    realm: 'The Spectacle',
    blurb:
      'A kingdom in the sky built around a royal castle, linked by floating platforms and Yggdrasil branches. Layered interior halls stack fights above and below one another.',
    // source: GDD "Asgard", ASG slides 17–19.
    traits: ['Vertical and layered', 'Grapple-heavy traversal', 'Interior and courtyard lanes'],
    hasFinalArt: false,
    image: 'arena-blockout-vertical',
    devNote: 'In development — shown in blockout',
  },
] as const;
