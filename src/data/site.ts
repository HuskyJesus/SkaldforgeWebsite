/**
 * Global site configuration.
 *
 * SOURCING RULE FOR THIS WHOLE DIRECTORY
 * --------------------------------------
 * Every factual claim carries a `source` note naming where it came from:
 *   GDD   = "Mythbound GDD.docx", Design Document v1.80
 *   ASG   = "Mythbound ASG.pptx", Art Style Guide (slide number given)
 *   TRAILER = Mythbound_FinalTrailerV02.mp4 (timestamp/on-screen text)
 * Anything without a source must not be published. See CONTENT_TODO.md.
 */

export const site = {
  studio: 'Skaldforge',
  game: 'Mythbound',
  title: 'Skaldforge. Makers of Mythbound',
  description:
    'Skaldforge is a game studio building Mythbound, a competitive Norse arena brawler where movement, melee, and godly power collide. Built in Unreal Engine 5.7.',
  // Absolute URL is supplied at build time via astro.config.mjs `site`.
  ogImage: 'assets/social/og-default.jpg',
  locale: 'en_US',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Mythbound', href: '/mythbound' },
  { label: 'Development', href: '/technology' },
  { label: 'Studio', href: '/studio' },
] as const;

/**
 * Only links that genuinely exist may appear here.
 * No placeholder or invented social accounts. See CONTENT_TODO.md #6.
 */
export const socials: { label: string; href: string }[] = [];

export const contact = {
  // Enable once a monitored public address exists. See CONTENT_TODO.md #7.
  email: null as string | null,
};
