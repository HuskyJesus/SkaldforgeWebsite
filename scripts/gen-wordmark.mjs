/**
 * Derives the nav/footer wordmark from the studio emblem.
 *
 * The supplied emblem sits in a 184x184 canvas but its artwork only fills the
 * middle 67 rows. Sized by height in the nav, the untrimmed file would draw the
 * raven at about a third of its intended size inside an empty box, so the
 * transparent padding is trimmed off here.
 *
 * This runs on every build (see the "prebuild" script) rather than being a
 * one-off: the emblem is studio-supplied art that gets replaced from time to
 * time, and a hand-generated derivative silently ships the previous logo when
 * that happens.
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const brand = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'brand');

const { data, info } = await sharp(join(brand, 'skaldforge-emblem.png'))
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });

writeFileSync(join(brand, 'skaldforge-wordmark.png'), data);
console.log(`wordmark: ${info.width}x${info.height} (trimmed from the emblem canvas)`);
