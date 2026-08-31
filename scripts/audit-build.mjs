import fs from 'node:fs';
import path from 'node:path';

// Audit generated pages, not implementation details. Run after astro build.
const root = path.resolve('dist');
const base = (process.env.BASE_PATH ?? '/SkaldforgeWebsite').replace(/\/$/, '');
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const pages = walk(root).filter(f => f.endsWith('.html'));
const errors = [];
const cache = new Map();
const decode = s => s.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
const ids = html => [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
const read = f => { if (!cache.has(f)) cache.set(f, fs.readFileSync(f, 'utf8')); return cache.get(f); };
let references = 0;
for (const file of pages) {
  const html = read(file);
  const label = path.relative(root, file);
  const pageIds = ids(html);
  const fail = message => errors.push(`${label}: ${message}`);
  if ((html.match(/<h1\b/g) ?? []).length !== 1) fail('Expected one h1');
  if (new Set(pageIds).size !== pageIds.length) fail('Duplicate element IDs');
  const visible = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g, '').replace(/<[^>]+>/g, '');
  if (/[\u2013\u2014]/.test(visible)) fail('Long dash in public copy');
  for (const m of html.matchAll(/aria-(?:labelledby|controls)="([^"]+)"/g)) {
    for (const id of m[1].split(/\s+/)) if (!pageIds.includes(id)) fail(`Unresolved ARIA reference: ${id}`);
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt(?:=|\s|>)/.test(m[0])) fail('Image missing alt attribute');
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) fail('Image missing intrinsic dimensions');
  }
  const refs = [...html.matchAll(/\b(?:href|src|poster|data-src|data-src-lg|data-src-sm)="([^"]+)"/g)].map(m => decode(m[1]));
  for (const m of html.matchAll(/\bsrcset="([^"]+)"/g)) refs.push(...decode(m[1]).split(',').map(s => s.trim().split(/\s+/)[0]));
  for (const ref of refs) {
    if (/^(https?:|data:|mailto:|tel:)/.test(ref)) continue;
    references++;
    const [pathname, hash] = ref.split('#');
    let target = file;
    if (pathname) {
      const clean = decodeURIComponent(pathname.split('?')[0]);
      if (clean.startsWith('/') && base && !(clean === base || clean.startsWith(base + '/'))) { fail(`Wrong base path: ${ref}`); continue; }
      target = clean.startsWith('/') ? path.join(root, clean.slice(base.length)) : path.resolve(path.dirname(file), clean);
      if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
      else if (!path.extname(target)) target = path.join(target, 'index.html');
    }
    if (!fs.existsSync(target)) fail(`Missing destination: ${ref}`);
    else if (hash && target.endsWith('.html') && !ids(read(target)).includes(hash)) fail(`Missing anchor: ${ref}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${pages.length} pages, ${references} local references, headings, ARIA, image dimensions, and dash policy.`);
