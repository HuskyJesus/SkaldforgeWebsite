/**
 * Development / technology content.
 *
 * CREDIBILITY RULE: no engine feature is named unless a supplied document says
 * the project uses it. Motion Matching is stated because ASG slide 11 says so
 * explicitly. Nanite, Lumen, GAS, Chaos, networking architecture and engine
 * version are NOT claimed anywhere — see CONTENT_TODO.md #3.
 */

export type TechSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  /** Optional paired comparison: development view vs. the shipped result. */
  compare?: {
    dev: { image: string; caption: string };
    final: { image: string; caption: string };
  };
  /** Single supporting image when no pairing exists. */
  image?: string;
  imageCaption?: string;
  points?: string[];
};

export const techIntro = {
  eyebrow: 'Development',
  title: 'Forging Mythbound',
  lede:
    'Mythbound is built in Unreal Engine. Every arena, ability and animation in the game has moved through the same route: blockout, iteration, and a playable build the team can put controllers on.',
};

export const techSections: TechSection[] = [
  {
    id: 'unreal',
    eyebrow: 'Engine',
    title: 'Built in Unreal Engine',
    body:
      'Unreal is the foundation for Mythbound’s combat, traversal and arenas. The team works in-engine from the first blockout onward, so movement and level geometry are tuned against each other rather than handed over at the end.',
    compare: {
      dev: {
        image: 'arena-blockout-greybox',
        caption: 'Greybox arena — movement and sightline testing',
      },
      final: {
        image: 'bridge-walls',
        caption: 'The same discipline, dressed and lit',
      },
    },
  },
  {
    id: 'movement',
    eyebrow: 'Traversal',
    title: 'Movement built to be chained',
    body:
      'The traversal set — running, sliding, wall-kicking, mantling and the ground slam — is designed so each action resolves back into run speed rather than stopping it. Prototypes are validated in greybox first, where nothing but the movement can be responsible for how it feels.',
    points: [
      'Momentum is preserved and redirected, not overwritten',
      'Wall-kicks apply diminishing force to prevent infinite climbing',
      'Slide converts speed rather than resetting it',
      'Carried speed feeds directly into melee damage and knockback',
    ],
    compare: {
      dev: {
        image: 'movement-greybox-test',
        caption: 'Traversal prototype — untextured test space',
      },
      final: {
        image: 'village-street',
        caption: 'The same movement in a finished arena',
      },
    },
  },
  {
    id: 'animation',
    eyebrow: 'Animation',
    title: 'Motion capture and Motion Matching',
    body:
      'Mythbound uses motion capture combined with Unreal Engine’s Motion Matching to hold a large library of blendable, movement-friendly animation. That matters for a game where a player can enter the same attack out of a slide, a wall-kick, a mantle or a fall.',
    // source: ASG slide 11, verbatim in substance.
    points: [
      'Motion capture cleaned and retargeted in MotionBuilder',
      'Unreal Engine Motion Matching for blendable traversal',
      'Animation authored in Maya, with contracted support in Blender',
    ],
    image: 'movement-greybox-test',
    imageCaption: 'Animation validation pass in a test arena',
  },
  {
    id: 'environments',
    eyebrow: 'Environments',
    title: 'From blockout to arena',
    body:
      'Arenas begin as pure gameplay geometry and stay playable through every stage of dressing. Midgard’s village, ruins and terrain were built against a movement set that was already in the player’s hands.',
    compare: {
      dev: {
        image: 'midgard-set-dressing',
        caption: 'Midgard — set dressing in engine, unlit',
      },
      final: {
        image: 'midgard-aerial',
        caption: 'Midgard — lit and playable',
      },
    },
  },
  {
    id: 'techart',
    eyebrow: 'Technical Art',
    title: 'Terrain, foliage and readability',
    body:
      'A brawler that moves this fast has to stay readable. Technical art work focuses on terrain and foliage that hold up at speed, and on team-colour rim lighting that keeps four contestants legible in a crowded fight.',
    image: 'terrain-foliage-test-b',
    imageCaption: 'Terrain and foliage test — Unreal Engine',
  },
  {
    id: 'characters',
    eyebrow: 'Characters',
    title: 'Concept through to sculpt',
    body:
      'Each Bound moves from in-house concept art to a high-poly sculpt, then down to a game-ready model inside a fixed budget. Characters are authored at 25,000–40,000 triangles with 2K textures; environment and prop assets sit at 1K.',
    // source: ASG slides 7–9.
    compare: {
      dev: {
        image: 'concept-alvar',
        caption: 'Alvar Tideborn — character concept',
      },
      final: {
        image: 'sculpt-skari',
        caption: 'Skari Quickstep — high-poly sculpt',
      },
    },
  },
  {
    id: 'ui',
    eyebrow: 'Interface',
    title: 'An interface with the same voice',
    body:
      'The UI carries the same forged-metal language as the rest of the game: engraved gold on deep navy, clean legible type, and a subtle touch of fantasy rather than a full fantasy costume.',
    image: 'ui-prototype',
    imageCaption: 'In-game UI prototype',
  },
];

/**
 * Developer ViDoc — recovered from the final presentation (slide 8).
 *
 * DISABLED PENDING CAPTIONS. The asset is committed and ready
 * (public/assets/video/developer-vidoc.mp4, 2:21), but it has no caption track.
 * Shipping 2+ minutes of uncaptioned narrated video would fail WCAG 1.2.2, and
 * the site otherwise meets AA. Supply a .vtt (or the script) and flip `publish`.
 * See ART_ASSET_CHECKLIST.md P2-6 and CONTENT_TODO.md.
 */
export const vidoc = {
  publish: false,
  title: 'A look at our journey',
  lede: 'A short developer walkthrough of how Mythbound came together.',
  src: 'assets/video/developer-vidoc.mp4',
  poster: 'assets/video/vidoc-poster.jpg',
  captions: null as string | null,
};

/**
 * Production toolchain.
 * source: ASG slide 6. Generative-model tools listed in that slide are
 * intentionally omitted from the public site — see CONTENT_TODO.md #4.
 */
export const toolchain = [
  { group: '3D', tools: ['Maya', 'Blender', 'ZBrush', 'Marvelous Designer'] },
  { group: 'Texturing', tools: ['Substance Painter', 'Substance Designer'] },
  { group: 'Animation', tools: ['Maya', 'MotionBuilder', 'Blender'] },
  { group: 'Technical Art', tools: ['EmberGen', 'LiquiGen', 'GeoGen', 'IlluGen'] },
  { group: '2D', tools: ['Photoshop'] },
  { group: 'Engine', tools: ['Unreal Engine'] },
];
