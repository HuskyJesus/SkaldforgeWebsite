/**
 * Derives the dark-ground site wordmark from the studio's vector logo master.
 *
 * The master (skaldforge-logo.svg) is drawn for a light ground: a solid black
 * raven with the "SKALD FORGE" lettering and wing detail knocked out in white.
 * The site chrome is near-black, so the raven disappears into it and only the
 * lettering survives. This swaps the two fills so the raven reads in bone and
 * the lettering is knocked out in ink, the same two-tone mark inverted, which is
 * the treatment the studio's own dark-ground raster uses.
 *
 * The output stays vector on purpose. The supplied raster (skaldforge-emblem.png)
 * is a 184px rendition whose lettering is thin outline strokes rather than solid
 * fills; at the nav's ~2rem cap those strokes blur out and the mark reads as a
 * white blob. An SVG keeps the letterforms crisp at any size and DPR.
 *
 * The master's viewBox carries roughly 20% empty margin. Sized by height in the
 * nav that margin is dead space, so the viewBox is tightened to the artwork's
 * real bounds and the mark fills the box it is given.
 *
 * This runs on every build (see the "prebuild" script) rather than being a
 * one-off: the master is studio-supplied art that gets replaced from time to
 * time, and a hand-generated derivative silently ships the previous logo when
 * that happens.
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const brand = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'brand');

/** Bone and ink, matching --c-bone and --c-ink in src/styles/tokens.css. */
const INK = '#05070c';
const BONE = '#f6f3e8';

const master = readFileSync(join(brand, 'skaldforge-logo.svg'), 'utf8');

// Guard the assumptions above rather than silently emitting a mark in the wrong
// tones, or with the wrong crop, if a future master is exported differently.
for (const fill of ['#000000', '#ffffff']) {
  if (!master.includes(`fill="${fill}"`)) {
    throw new Error(
      `skaldforge-logo.svg no longer contains fill="${fill}". The dark-ground ` +
        'wordmark is derived by swapping its black and white fills; re-check the ' +
        'master export before shipping.',
    );
  }
}

const viewBox = master.match(/viewBox="([\d.\s-]+)"/);
if (!viewBox) throw new Error('skaldforge-logo.svg has no viewBox to tighten.');
const [vx, vy, vw, vh] = viewBox[1].trim().split(/\s+/).map(Number);

const inverted = master
  .replace(/fill="#000000"/g, `fill="${BONE}"`)
  .replace(/fill="#ffffff"/g, `fill="${INK}"`);

// Measure the artwork's real bounds by rendering once and trimming. Deriving the
// crop rather than hardcoding it means a re-exported master stays correct.
const probe = await sharp(Buffer.from(inverted), { density: 200 }).png().toBuffer();
const { width: pw, height: ph } = await sharp(probe).metadata();
const { info } = await sharp(probe).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });

const sx = vw / pw;
const sy = vh / ph;
const box = {
  x: vx + -info.trimOffsetLeft * sx,
  y: vy + -info.trimOffsetTop * sy,
  w: info.width * sx,
  h: info.height * sy,
};
const round = (n) => Number(n.toFixed(2));

const wordmark = inverted.replace(
  /<svg\b[^>]*>/,
  (tag) =>
    tag
      .replace(/\swidth="[^"]*"/, ` width="${round(box.w)}"`)
      .replace(/\sheight="[^"]*"/, ` height="${round(box.h)}"`)
      .replace(
        /\sviewBox="[^"]*"/,
        ` viewBox="${round(box.x)} ${round(box.y)} ${round(box.w)} ${round(box.h)}"`,
      ),
);

writeFileSync(join(brand, 'skaldforge-wordmark.svg'), wordmark);
console.log(
  `wordmark: bone raven, ink lettering, cropped to ${round(box.w)}x${round(box.h)} ` +
    `(was ${vw}x${vh}, ${(100 - (100 * box.h) / vh).toFixed(0)}% margin removed)`,
);
