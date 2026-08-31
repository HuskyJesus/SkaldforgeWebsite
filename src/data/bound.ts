/**
 * The Bound. playable roster.
 *
 * SOURCE OF TRUTH: studio-supplied character copy (current). This supersedes
 * the GDD entirely for names, kits, sponsors and personality. Obsolete ability
 * names that must not reappear: Thunderous Advance, Thunderfall, Tidal Spear,
 * Leviathan's Wake, Hex Recall, Soul Rend.
 *
 * ART: finished textured renders on transparent backgrounds, recovered from the
 * final status presentation (slide 5, "Meet the Bound"). Each was matched to its
 * character against the ASG concept sheets and documented palettes. All four
 * show the solid glowing eyes the ASG describes as the mark of a god's
 * ownership.
 */

export type Bound = {
  id: string;
  name: string;
  sponsor: string;
  /** The god, plus what they granted. */
  sponsorNote: string;
  /** One-line read on who this Bound is in a fight. */
  description: string;
  /** What the kit does, in behavioural terms. */
  kit: string;
  build: string;
  height: string;
  movement: string;
  abilities: { name: string; body: string }[];
  palette: string | null;
  accent: string | null;
  render: string | null;
};

export const bound: Bound[] = [
  {
    id: 'eirik',
    name: 'Eirik Stormbrand',
    sponsor: "Thor's Bound",
    sponsorNote:
      'Thor, god of thunder and strength, chose Eirik to carry his power into battle.',
    description:
      'Eirik enters the arena as a steadfast frontline warrior, breaking enemy formations while protecting those beside him.',
    kit:
      'Eirik controls space with powerful lightning attacks that stun enemies, scatter groups, and punish anyone who stands too close.',
    build: 'Broad and heavily built. the most physically imposing of the four.',
    height: `6'7"`,
    movement: 'Explosive bursts of force. Heavy but controlled, like a hammer swing.',
    abilities: [
      {
        name: 'Storm Javelin',
        body: 'Hurls a bolt of lightning that stuns its first target before chaining to nearby enemies.',
      },
      {
        name: 'Thunderburst',
        body: 'Slams his fists into the ground, releasing lightning that damages and launches nearby enemies away.',
      },
    ],
    palette: 'Violet rune-light, oxblood, leather',
    accent: '#c46be0',
    render: 'eirik',
  },
  {
    id: 'skari',
    name: 'Skari Quickstep',
    sponsor: "Loki's Bound",
    sponsorNote:
      'Loki, god of mischief and deception, chose Skari for her speed, cunning, and willingness to fight unfairly.',
    description:
      'Skari darts through battle with a grin, marking vulnerable enemies before striking where they least expect her.',
    kit:
      'Skari uses piercing attacks and sudden movement to Hex enemies, opening them to stronger melee attacks.',
    build: 'Lean and compact. Wiry and reactive, built for speed over strength.',
    height: `5'4"`,
    movement: 'Sharp acceleration and sudden directional changes. Unpredictable and evasive.',
    abilities: [
      {
        name: 'Veilpiercer Dagger',
        body: 'Throws a fan of daggers through every enemy in its path, damaging them and applying Hex.',
      },
      {
        name: 'Shade Rush',
        body: 'Rushes through the battlefield, shoving enemies and dealing more damage the faster she goes.',
      },
    ],
    palette: 'Orange, red, beige',
    accent: '#e08a4a',
    render: 'skari',
  },
  {
    id: 'alvar',
    name: 'Alvar Tideborn',
    sponsor: "Njord's Bound",
    sponsorNote:
      'Njord, god of the sea and wind, granted Alvar command over the forces that shape every battle.',
    description:
      'Alvar commands the battlefield like a shifting tide, pulling enemies out of position and controlling where they can stand.',
    kit:
      'Alvar uses water and wind to gather enemies together, slow their escape, and disrupt their positioning.',
    build: 'Tall and slender. A flexible frame built for sustained movement.',
    height: `6'0"`,
    movement: 'Fluid transitions and smooth acceleration. Momentum carries naturally once built.',
    abilities: [
      {
        name: 'Tempest Surge',
        body: 'Throws a mass of wind that bursts on impact, launching contestants outward.',
      },
      {
        name: 'Tidal Hook',
        body: 'Creates a swirling current of water that pulls enemies inward, stunning and damaging them in the process.',
      },
    ],
    palette: 'Blues, browns, purples',
    accent: '#4fb3c9',
    render: 'alvar',
  },
  {
    id: 'yrsa',
    name: 'Yrsa Gravewind',
    sponsor: "Hel's Bound",
    sponsorNote:
      'Hel, ruler of the dead, chose Yrsa to spread the power of her realm across the arena.',
    description:
      'Yrsa carries the stillness of the grave into battle, trapping enemies and draining the strength from those around her.',
    kit:
      'Yrsa creates haunted zones and releases trapped souls to weaken enemies, control space, and restore her allies.',
    build: 'Medium build with a strong lower body.',
    height: `5'8"`,
    movement: 'Heavy, purposeful movement. Steady and controlled, with no wasted energy.',
    abilities: [
      {
        name: 'Grave Bind',
        body: 'Opens a grave pool where spectral hands slow enemies and damage them while they remain inside.',
      },
      {
        name: 'Soul Bombs',
        body: 'Releases wandering souls that drain stamina from sought-after enemies, or restore it to nearby allies.',
      },
    ],
    palette: 'Black, bone, grave-green',
    accent: '#7fbf8a',
    render: 'yrsa',
  },
];

/**
 * Framing line for the roster.
 * source: ASG slide 20 (the contract and the marked eyes). still current, and
 * consistent with every finished render.
 */
export const boundPremise =
  'Four contestants. Four divine sponsors. Each Bound brings a distinct fighting style and two god-granted abilities to the arena.';
