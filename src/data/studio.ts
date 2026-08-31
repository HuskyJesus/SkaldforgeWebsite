/**
 * Skaldforge studio content.
 */

export const studio = {
  name: 'Skaldforge',
  statement: 'We forge worlds worth fighting for.',
  lede:
    'Skaldforge is a multidisciplinary game studio. We are currently building Mythbound, a competitive Norse arena brawler in Unreal Engine.',

  /**
   * source: user brief. The team's roots are at UCF's Florida Interactive
   * Entertainment Academy. Stated as origin, not as the studio's identity.
   */
  origin: {
    show: true,
    title: 'Where we come from',
    body:
      'Skaldforge formed out of the Florida Interactive Entertainment Academy at the University of Central Florida — a graduate program built around shipping real games with real teams. Mythbound is the first thing we have made together.',
  },

  philosophy: [
    {
      title: 'Feel first',
      body:
        'Movement and combat are prototyped in grey boxes before anything is dressed. If it does not feel right with no art on it, art will not save it.',
    },
    {
      title: 'Build it playable',
      body:
        'Mythbound has been a game people can pick up and play from early on. Every discipline tests against a real build rather than a document.',
    },
    {
      title: 'One voice',
      body:
        'Art, design, animation and engineering share a single reference for what Mythbound is. The interface, the arenas and the characters are meant to read as one world.',
    },
  ],

  /** Disciplines are non-personal and safe to publish. source: ASG slide 2. */
  disciplines: [
    'Game Design',
    'Technical Design',
    'Level Design',
    'Programming',
    'Character Art',
    'Environment Art',
    'Technical Art',
    'Animation',
    'Production',
  ],
};

/**
 * TEAM ROSTER — DISABLED PENDING APPROVAL.
 *
 * The names below are real and appear in the Mythbound trailer's own credits;
 * role attribution comes from ASG slide 2 (an internal document). Publishing
 * ~26 named individuals with internal role titles is the studio's call, not a
 * default. Flip `publishRoster` to true once the list and titles are confirmed.
 * See CONTENT_TODO.md #5.
 */
export const publishRoster = false;

export type TeamMember = { name: string; role: string };

export const leadership: TeamMember[] = [
  { name: 'Daniel Diaz-Rivera', role: 'Project Lead' },
  { name: 'Christopher Caban', role: 'Development Director' },
  { name: 'Claire Durenberger', role: 'Art Lead' },
  { name: 'Soumya Thakur', role: 'Programming Lead' },
  { name: 'Caius Ruscella', role: 'Design Lead' },
  { name: 'Kenzey Estes', role: 'Level Design Lead' },
  { name: 'Abner Wilhelm', role: 'Technical Design Lead' },
];

export const team: TeamMember[] = [
  { name: 'Mia Parent', role: '3D Artist' },
  { name: 'Richard Huang', role: 'Technical Artist' },
  { name: 'Casina Gan', role: 'Technical Artist' },
  { name: 'Melanie Aguirre', role: 'Animation' },
  { name: 'Michael Doctor', role: 'Level Designer' },
  { name: 'Jacob Jarrett', role: 'Level Designer' },
  { name: 'Siddharth Parulekar', role: 'Technical Designer' },
  { name: 'Michael Kocis', role: 'Technical Designer' },
  { name: 'Donald Arango', role: 'Programmer' },
  { name: 'Keith Lerner', role: 'Programmer' },
];
