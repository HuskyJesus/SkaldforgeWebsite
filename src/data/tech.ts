/** Current public technology story, approved in the studio's PM review. */
export const techIntro = {
  eyebrow: 'Development',
  title: 'Forging Mythbound',
  lede: 'Mythbound uses Unreal Engine 5.7 to connect high-speed movement, ability-driven combat and competitive multiplayer in one playable arena brawler.',
};

export const techFeatures = [
  { id: 'gas', eyebrow: 'Gameplay Ability System', title: 'Power with structure', body: 'Unreal Engine’s Gameplay Ability System gives the team a shared framework for the Bound’s combat abilities, effects and interactions. It lets distinct kits grow without losing the rules that keep competitive play readable.', video: 'mode-relic-rush', poster: 'mode-relic-rush-poster.jpg' },
  { id: 'motion-matching', eyebrow: 'Motion Matching', title: 'Movement that stays connected', body: 'Motion capture and Unreal Engine Motion Matching support transitions across running, sliding, wall-kicking and combat. The goal is fluid motion that keeps pace with the decisions players make in the arena.', video: 'hero-loop-720', poster: 'hero-poster.jpg' },
  { id: 'multiplayer', eyebrow: 'Competitive Multiplayer', title: 'Built around the fight', body: 'Mythbound is developed as a multiplayer game. Movement, melee, abilities and objectives are tested together so every system serves the same fast, readable competition.', video: 'mode-team-deathmatch', poster: 'mode-team-deathmatch-poster.jpg' },
] as const;

export const toolchain = [
  { group: 'Engine', tools: ['Unreal Engine 5.7'] },
  { group: '3D and Animation', tools: ['Maya', 'MotionBuilder', 'Blender', 'ZBrush'] },
  { group: 'Materials and VFX', tools: ['Substance Painter', 'Substance Designer', 'EmberGen'] },
] as const;

export const vidoc = { publish: true, title: 'Inside Mythbound', lede: 'The team shares the work, challenges and decisions behind the current game.', src: 'assets/video/developer-vidoc.mp4', poster: 'assets/video/vidoc-poster.jpg', captions: null as string | null };
