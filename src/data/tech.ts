/**
 * Development / technology content.
 *
 * CREDIBILITY RULE: no engine feature is named unless a supplied document says
 * the project uses it. Motion Matching is stated because ASG slide 11 says so
 * explicitly. Nanite, Lumen, GAS, Chaos, networking architecture and engine
 * version are NOT claimed anywhere. see CONTENT_TODO.md #3.
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
    'Mythbound is built in Unreal Engine. Explore the movement prototypes, character art and environment work behind the playable game.',
};

export const techSections: TechSection[] = [
  {
    id: 'unreal',
    eyebrow: 'Engine',
    title: 'Built in Unreal Engine',
    body:
      'Unreal is the foundation for Mythbound’s combat, traversal and arenas. Early blockouts let the team test movement against level geometry before adding the final art.',
    compare: {
      dev: {
        image: 'arena-blockout-greybox',
        caption: 'Greybox arena: movement and sightline testing',
      },
      final: {
        image: 'bridge-walls',
        caption: 'Arena gameplay from the trailer',
      },
    },
  },
  {
    id: 'movement',
    eyebrow: 'Traversal',
    title: 'Movement built to be chained',
    body:
      'Run, slide, kick off walls, mantle and ground slam. Players chain these actions across an arena, while greybox spaces let the team test the transitions and tune momentum.',
    points: [
      'Momentum is preserved and redirected, not overwritten',
            'Slide converts speed rather than resetting it',
      'Carried speed feeds directly into melee damage and knockback',
    ],
    compare: {
      dev: {
        image: 'movement-greybox-test',
        caption: 'Traversal prototype: untextured test space',
      },
      final: {
        image: 'village-street',
        caption: 'Traversal in an arena gameplay capture',
      },
    },
  },
  {
    id: 'animation',
    eyebrow: 'Animation',
    title: 'Motion capture and Motion Matching',
    body:
      'The animation pipeline combines motion capture with Unreal Engine’s Motion Matching. It supports the transitions that connect traversal and combat, from a slide or wall-kick into the next action.',
    // source: ASG slide 11, verbatim in substance.
    points: [
      'Motion capture cleaned and retargeted in MotionBuilder',
      'Unreal Engine Motion Matching for blendable traversal',
      'Animation authored in Maya, with contracted support in Blender',
    ],
  },
  {
    id: 'environments',
    eyebrow: 'Environments',
    title: 'From blockout to arena',
    body:
      'Blockouts establish the playable spaces. Environment art then gives those spaces their identity through architecture, terrain, lighting and set dressing.',
    compare: {
      dev: {
        image: 'midgard-set-dressing',
        caption: 'Midgard: set dressing in engine, unlit',
      },
      final: {
        image: 'midgard-aerial',
        caption: 'Midgard: lit and playable',
      },
    },
  },
  {
    id: 'techart',
    eyebrow: 'Technical Art',
    title: 'Terrain, foliage and readability',
    body:
      'A brawler that moves this fast has to stay readable. Technical art work focuses on terrain and foliage that hold up at speed, with team-color rim lighting helping contestants stand out in a crowded fight.',
    image: 'terrain-foliage-test-b',
    imageCaption: 'Terrain and foliage test. Unreal Engine',
  },
  {
    id: 'characters',
    eyebrow: 'Characters',
    title: 'From concept to character',
    body:
      'Each Bound moves from in-house concept art to a high-poly sculpt, then down to a game-ready model inside a fixed budget. The art guide sets character budgets of 25,000 to 40,000 triangles with 2K textures.',
    // source: ASG slides 7 to 9.
    compare: {
      dev: {
        image: 'concept-eirik',
        caption: 'Eirik Stormbrand: character concept',
      },
      final: {
        image: 'eirik',
        caption: 'Eirik Stormbrand: character render',
      },
    },
  },
  {
    id: 'ui',
    eyebrow: 'Interface',
    title: 'An interface with the same voice',
    body:
      'The UI carries the same forged-metal language as the rest of the game: engraved gold on deep navy, clean legible type, with clear labels that keep the action easy to follow.',
    image: 'ui-prototype',
    imageCaption: 'In-game UI prototype',
  },
];

/**
 * Developer ViDoc. recovered from the final presentation (slide 8).
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
 * intentionally omitted from the public site. see CONTENT_TODO.md #4.
 */
export const toolchain = [
  { group: '3D', tools: ['Maya', 'Blender', 'ZBrush', 'Marvelous Designer'] },
  { group: 'Texturing', tools: ['Substance Painter', 'Substance Designer'] },
  { group: 'Animation', tools: ['Maya', 'MotionBuilder', 'Blender'] },
  { group: 'Technical Art', tools: ['EmberGen', 'LiquiGen', 'GeoGen', 'IlluGen'] },
  { group: '2D', tools: ['Photoshop'] },
  { group: 'Engine', tools: ['Unreal Engine'] },
];
