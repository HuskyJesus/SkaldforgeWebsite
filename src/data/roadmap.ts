/**
 * "The Arena Is Only Beginning". forward-looking section.
 *
 * DELIBERATELY CONSERVATIVE. Nothing here may read as a promise. Each item
 * carries its own `publish` flag so the team can enable, disable or rewrite a
 * single line without touching component logic.
 *
 * Items are published only when they are already true of the project and are
 * phrased as direction, not commitment. Items describing content that does not
 * yet exist (new Bound, new arenas, competitive features, platforms, dates)
 * stay `publish: false` until the studio supplies verified roadmap information.
 * See CONTENT_TODO.md #2.
 */

export type RoadmapItem = {
  id: string;
  publish: boolean;
  title: string;
  body: string;
};

export const roadmapIntro = {
  eyebrow: 'What comes next',
  title: 'The arena is only beginning',
  lede:
    'Mythbound is in development toward a Fall 2026 window. Further milestones will be shared when they are confirmed.',
};

export const roadmap: RoadmapItem[] = [
  {
    id: 'roster',
    publish: false,
    // Safe: four Bound are designed; Yrsa's kit is not yet specified in the GDD.
    title: 'A roster with room to grow',
    body:
      'Four Bound are in development, each signed to a different god. The sponsor structure is deliberately open-ended. every new god is a new way to move and fight.',
  },
  {
    id: 'arenas',
    publish: false,
    // Safe: all three arenas are built, lit and shown on the site.
    title: 'Three realms, and room for more',
    body:
      'Midgard, Helheim and Himinbjorg are built and playable. The arena set was designed to take additions rather than to be finished at three.',
  },
  {
    id: 'depth',
    publish: false,
    // Safe: describes existing systems, not future features.
    title: 'Depth in the movement',
    body:
      'Momentum scaling ties traversal directly to combat output. The higher the ceiling on chaining movement, the further the skill curve runs. and that ceiling is still being raised.',
  },
  {
    id: 'competitive',
    publish: false,
    title: 'Competitive structure',
    body: 'PENDING. needs verified information before publication.',
  },
  {
    id: 'platforms',
    publish: false,
    title: 'Platforms',
    body: 'PENDING. no platform commitments may be published.',
  },
  {
    id: 'worldbuilding',
    publish: false,
    title: 'Broader worldbuilding',
    body: 'PENDING. needs verified information before publication.',
  },
];

export const publishedRoadmap = roadmap.filter((r) => r.publish);
