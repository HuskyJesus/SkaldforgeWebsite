/**
 * The Bound — playable roster.
 *
 * source: GDD "Abilities" + "Narrative > Bound"; ASG slides 20–31.
 * Ability names, effects and playstyles are taken verbatim in substance from
 * the GDD. Numeric tuning values are deliberately NOT published — they are
 * balance data, not marketing.
 *
 * NOTE ON ART: no finished character renders exist yet. The only original
 * character art available is annotated internal concept sheets and a work-in-
 * progress sculpt — legitimate material, but not marketing art. Rather than
 * dress the roster in mismatched reference scans, the roster uses a brand
 * treatment and that development art is shown on the Development page, where
 * "concept through to sculpt" is the actual point being made.
 * Character renders are ART_ASSET_CHECKLIST.md P0-1.
 */

export type Bound = {
  id: string;
  name: string;
  sponsor: string;
  /** Short epithet used as the display kicker. */
  epithet: string;
  playstyle: string;
  build: string;
  height: string;
  movement: string;
  abilities: { name: string; body: string }[];
  /** Palette from ASG "extended details" slides; null where the ASG says TBD. */
  palette: string | null;
  /**
   * Accent hue for the card, taken from the character's documented palette.
   * Null (Eirik, Yrsa) falls back to forge gold rather than inventing a colour.
   */
  accent: string | null;
};

export const bound: Bound[] = [
  {
    id: 'eirik',
    name: 'Eirik Stormbrand',
    sponsor: "Thor's Bound",
    epithet: 'The Anchor',
    playstyle: 'All-rounder',
    build: 'Broad and heavily built — the most physically imposing of the four.',
    height: `6'7"`,
    movement: 'Explosive bursts of force. Heavy but controlled, like a hammer swing.',
    abilities: [
      {
        name: 'Storm Javelin',
        body: 'Hurls a bolt of condensed lightning that detonates on impact and arcs onward to nearby enemies.',
      },
      {
        name: 'Thunderous Advance',
        body: 'Surges forward in a committed charge, driving through anyone in the path and shrugging off damage on the way.',
      },
    ],
    palette: null, // ASG slide 22: "TBD"
    accent: null,
  },
  {
    id: 'skari',
    name: 'Skari Quickstep',
    sponsor: "Loki's Bound",
    epithet: 'The Angle',
    playstyle: 'Trickster',
    build: 'Lean and compact. Wiry and reactive, built for speed over strength.',
    height: `5'4"`,
    movement: 'Sharp acceleration and sudden directional changes. Unpredictable and evasive.',
    abilities: [
      {
        name: 'Veilpiercer Dagger',
        body: 'Flicks a razor-thin blade that pierces every enemy in a line and leaves them hexed and easier to finish.',
      },
      {
        name: 'Hex Recall',
        body: 'Inscribes a hidden rune, then tears back through space to it later — arriving in a burst of hexing energy.',
      },
    ],
    palette: 'Orange, red, beige', // ASG slide 25
    accent: '#d9743f',
  },
  {
    id: 'alvar',
    name: 'Alvar Tideborn',
    sponsor: "Njord's Bound",
    epithet: 'The Current',
    playstyle: 'Agile and evasive',
    build: 'Tall and slender. A flexible frame built for sustained movement.',
    height: `6'0"`,
    movement: 'Fluid transitions and smooth acceleration. Momentum carries naturally once built.',
    abilities: [
      {
        name: 'Tidal Spear',
        body: 'Launches the spearhead free of the shaft; it collapses outward on impact into a heavy, slowing surge.',
      },
      {
        name: 'Tempest Surge',
        body: 'Throws a ball of wind that drags enemies inward before releasing the stored force.',
      },
    ],
    palette: 'Blues, browns, purples', // ASG slide 27
    accent: '#5b8fd4',
  },
  {
    id: 'yrsa',
    name: 'Yrsa Gravewind',
    sponsor: "Hel's Bound",
    epithet: 'The Debt',
    playstyle: 'Support',
    build: 'Medium build with a strong lower body.',
    height: `5'8"`,
    movement: 'Heavy, purposeful movement. Steady and controlled, with no wasted energy.',
    // GDD lists Yrsa's playstyle only; abilities are not yet specified.
    abilities: [],
    palette: null, // ASG slide 29: "TBD"
    accent: null,
  },
];

/** source: ASG slide 20. Used as the section's framing line. */
export const boundPremise =
  'The Bound are under contract with the old gods. Upon signing, their souls become property — and their eyes turn a solid colour, a mark of their god’s ownership.';
