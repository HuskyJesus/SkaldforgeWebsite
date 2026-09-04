/**
 * Generates derived brand assets (icons + wordmark + social card) from the
 * supplied source art. Run with: node scripts/gen-brand-assets.mjs
 *
 * Nothing here invents artwork. Every output is a resize, trim or composite of
 * a studio-supplied master:
 *   public/assets/brand/skaldforge-emblem.png raven wordmark    -> favicons + mark
 *   src/assets/brand/mythbound-logo.png     Mythbound logotype  -> social card
 * See ART_ASSET_CHECKLIST.md P0 for the bespoke 1200x630 card the last one
 * stands in for.
 *
 * src/assets/brand/valknut-badge.png is the gold valknut that used to be the
 * site icon. It is kept because it is studio art, but the favicon is the
 * Skaldforge logo itself, so nothing here reads it.
 */
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const src = join(root, 'src', 'assets');

mkdirSync(join(pub, 'assets', 'social'), { recursive: true });

// ---------------------------------------------------------------- app icons
// Built from the Skaldforge logo, NOT a placeholder drawing. An earlier
// revision of this script rebuilt the icons from a stand-in favicon.svg and
// silently overwrote the real artwork, so the source here is the same emblem
// the site header uses and no output is ever also an input.
//
// The logo is a wide wordmark (roughly 2.75:1) and a favicon is square, so it
// is centred on the studio's navy-and-gold badge rather than stretched. The
// badge is the treatment the previous app icons already used.
const S = 512;
const badge = Buffer.from(
  `<svg width="${S}" height="${S}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <radialGradient id="g" cx="50%" cy="42%" r="78%">
         <stop offset="0%" stop-color="#16283f"/>
         <stop offset="100%" stop-color="#080d16"/>
       </radialGradient>
     </defs>
     <rect width="${S}" height="${S}" fill="url(#g)"/>
     <rect x="${S * 0.012}" y="${S * 0.012}" width="${S * 0.976}" height="${S * 0.976}"
           fill="none" stroke="#c9a227" stroke-width="${S * 0.024}"/>
   </svg>`,
);

const emblem = await sharp(join(pub, 'assets', 'brand', 'skaldforge-emblem.png'))
  .trim({ threshold: 1 })
  .toBuffer();
const emblemMeta = await sharp(emblem).metadata();

const markW = Math.round(S * 0.88);
const markH = Math.round((markW * emblemMeta.height) / emblemMeta.width);
const mark = await sharp(emblem).resize(markW, markH).toBuffer();

const iconMaster = await sharp(badge)
  .composite([
    { input: mark, top: Math.round(S / 2 - markH / 2), left: Math.round(S / 2 - markW / 2) },
  ])
  .png({ compressionLevel: 9 })
  .toBuffer();

const png = (size) =>
  sharp(iconMaster).resize(size, size, { fit: 'cover' }).png({ compressionLevel: 9 });

for (const [size, name] of [
  [16, 'favicon-16.png'],
  [32, 'favicon-32.png'],
  [48, 'favicon-48.png'],
  [180, 'apple-touch-icon.png'],
  [192, 'icon-192.png'],
]) {
  await png(size).toFile(join(pub, name));
}

// The composed badge is already 512x512, so write it straight out.
writeFileSync(join(pub, 'icon-512.png'), iconMaster);

// A real favicon.ico for user agents and link previews that request the bare
// /favicon.ico path instead of reading the <link rel="icon"> tags.
const icoSizes = [16, 32, 48];
const icoParts = await Promise.all(icoSizes.map((s) => png(s).toBuffer()));
const header = Buffer.alloc(6 + 16 * icoParts.length);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(icoParts.length, 4);
let offset = header.length;
icoParts.forEach((buf, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(icoSizes[i] === 256 ? 0 : icoSizes[i], e);
  header.writeUInt8(icoSizes[i] === 256 ? 0 : icoSizes[i], e + 1);
  header.writeUInt8(0, e + 2); // palette size
  header.writeUInt8(0, e + 3); // reserved
  header.writeUInt16LE(1, e + 4); // colour planes
  header.writeUInt16LE(32, e + 6); // bits per pixel
  header.writeUInt32LE(buf.length, e + 8);
  header.writeUInt32LE(offset, e + 12);
  offset += buf.length;
});
writeFileSync(join(pub, 'favicon.ico'), Buffer.concat([header, ...icoParts]));

// ----------------------------------------------------------------- wordmark
// The supplied emblem is a black silhouette centred in a square canvas with a
// lot of transparent padding. The site tints it with currentColor through a CSS
// mask, so the padding has to go: otherwise the mark renders at roughly a third
// of its allotted height inside an empty box.
const wordmark = await sharp(join(pub, 'assets', 'brand', 'skaldforge-emblem.png'))
  .trim({ threshold: 1 })
  .png({ compressionLevel: 9 })
  .toBuffer({ resolveWithObject: true });
writeFileSync(join(pub, 'assets', 'brand', 'skaldforge-wordmark.png'), wordmark.data);
console.log(`wordmark trimmed to ${wordmark.info.width}x${wordmark.info.height}`);

// -------------------------------------------------------------- social card
// 1200x630: darkened gameplay plate + centred Mythbound lockup.
const W = 1200;
const H = 630;

const plate = await sharp(join(src, 'gameplay', 'relic-altar.jpg'))
  .resize(W, H, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.52, saturation: 0.9 })
  .blur(1.5)
  .toBuffer();

const logo = await sharp(join(src, 'brand', 'mythbound-logo.png'))
  .resize({ width: 760, fit: 'inside' })
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

// Bottom scrim keeps the studio line legible over any frame.
const scrim = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
     <defs>
       <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
         <stop offset="0%" stop-color="#05070c" stop-opacity="0.55"/>
         <stop offset="45%" stop-color="#05070c" stop-opacity="0.25"/>
         <stop offset="100%" stop-color="#05070c" stop-opacity="0.92"/>
       </linearGradient>
     </defs>
     <rect width="${W}" height="${H}" fill="url(#g)"/>
     <text x="${W / 2}" y="${H - 62}" text-anchor="middle"
           font-family="Georgia, 'Times New Roman', serif" font-size="26"
           letter-spacing="7" fill="#d8b055">A SKALDFORGE GAME</text>
     <rect x="${W / 2 - 130}" y="${H - 44}" width="260" height="1" fill="#b08528" opacity="0.5"/>
   </svg>`,
);

await sharp(plate)
  .composite([
    { input: scrim, top: 0, left: 0 },
    {
      input: logo,
      top: Math.round(H / 2 - (logoMeta.height ?? 0) / 2 - 26),
      left: Math.round(W / 2 - (logoMeta.width ?? 0) / 2),
    },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(join(pub, 'assets', 'social', 'og-default.jpg'));

console.log('brand assets generated');
