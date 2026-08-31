/**
 * Generates derived brand assets (icons + social card) from the supplied
 * source art. Run with: node scripts/gen-brand-assets.mjs
 *
 * Nothing here invents artwork — the social card composites a real gameplay
 * frame with the official Mythbound logotype. See ART_ASSET_CHECKLIST.md P0
 * for the bespoke 1200x630 card this stands in for.
 */
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const src = join(root, 'src', 'assets');

mkdirSync(join(pub, 'assets', 'social'), { recursive: true });

const favicon = readFileSync(join(pub, 'favicon.svg'));

// ---------------------------------------------------------------- app icons
for (const size of [180, 192, 512]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await sharp(favicon, { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(pub, name));
}

// A 32px PNG covers browsers that ignore the SVG icon.
await sharp(favicon, { density: 384 })
  .resize(32, 32)
  .png({ compressionLevel: 9 })
  .toFile(join(pub, 'favicon-32.png'));

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
