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
 * source: Final Presentation slide 3 ("Personnel"), which supersedes ASG slide 2.
 * Notably it moves Level Design Lead from Kenzey Estes to Michael Doctor and
 * adds voice acting and sound design.
 *
 * These names are already public in the studio's own presentation and trailer
 * credits, but publishing ~25 named individuals is the studio's call, not a
 * default. Flip `publishRoster` to true once confirmed. See CONTENT_TODO.md.
 */
export const publishRoster = false;

export type TeamMember = { name: string; role: string };

export const leadership: TeamMember[] = [
  { name: 'Daniel Diaz-Rivera', role: 'Project Lead' },
  { name: 'Christopher Caban', role: 'Development Director' },
  { name: 'Soumya Thakur', role: 'Programming Lead' },
  { name: 'Caius Ruscella', role: 'Design Lead' },
  { name: 'Claire Durenberger', role: 'Art Lead' },
  { name: 'Abner Wilhelm', role: 'Tech Design Lead' },
  { name: 'Michael Doctor', role: 'Level Design Lead' },
];

export const team: TeamMember[] = [
  { name: 'Siddharth Parulekar', role: 'Tech Design' },
  { name: 'Michael Kocis', role: 'Tech Design' },
  { name: 'Keith Lerner', role: 'Programming' },
  { name: 'Donald Arango', role: 'Programming' },
  { name: 'Kenzey Estes', role: 'Level Design' },
  { name: 'Jacob Jarrett', role: 'Level Design' },
  { name: 'Richard Huang', role: 'Technical Artist' },
  { name: 'Casina Gan', role: 'Technical Artist' },
  { name: 'Melanie Aguirre', role: 'Animation' },
  { name: 'Joshua Almeida', role: 'Animation' },
  { name: 'Mia Parent', role: '3D Artist' },
  { name: 'Anna-Lauren Kahn', role: '3D Artist' },
  { name: 'Rachel Flatley', role: '3D Artist' },
  { name: 'Rachel Tiv', role: '3D Artist' },
  { name: 'Ash Koltz', role: '3D Artist' },
  { name: 'Ethan Powell', role: '3D Artist' },
  { name: 'Jack Warden', role: '3D Artist' },
  { name: 'Leo Hoerdemann', role: 'Sound Design' },
  { name: 'Andrew Bielek', role: 'Voice Acting' },
  { name: 'Lea Fournier', role: 'Voice Acting' },
];
