/**
 * Image registry.
 *
 * Content data files refer to imagery by short id ('midgard-aerial') rather
 * than by import, so copy and assets can be swapped without touching the
 * components that render them. Everything here is optimised by astro:assets at
 * build time into responsive AVIF/WebP variants.
 */
import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/{gameplay,arenas,characters,development,brand}/*.{jpg,jpeg,png}',
  { eager: true },
);

const registry = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const id = path.split('/').pop()!.replace(/\.(jpe?g|png)$/i, '');
  registry.set(id, mod.default);
}

/**
 * Look up an image by id. Returns undefined so callers can hide gracefully.
 *
 * A `null` id means "there is deliberately no art here" and stays silent. A
 * non-empty id that misses the registry is a mistake — usually a renamed or
 * deleted asset — so it is reported in the build log rather than quietly
 * dropping a whole section from the page.
 */
const warned = new Set<string>();

export function img(id: string | null | undefined): ImageMetadata | undefined {
  if (!id) return undefined;
  const found = registry.get(id);
  if (!found && !warned.has(id)) {
    warned.add(id);
    console.warn(
      `[images] unknown asset id "${id}" — nothing will render. Known ids: ${imageIds.join(', ')}`,
    );
  }
  return found;
}

export const imageIds = [...registry.keys()].sort();
