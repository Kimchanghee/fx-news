// Generates 1200x630 Open Graph PNGs in the chalkboard style at build time via sharp.
// Values on pair/commodity cards come from the committed snapshot (src/data), with their dates.
import sharp from 'sharp';
import { readdir, readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'og');
await mkdir(out, { recursive: true });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fx = JSON.parse(await readFile(path.join(root, 'src/data/fx.json'), 'utf8'));
const cm = JSON.parse(await readFile(path.join(root, 'src/data/commodities.json'), 'utf8'));
const dataTs = await readFile(path.join(root, 'src/lib/data.ts'), 'utf8');
const pairs = [...dataTs.matchAll(/slug: '([^']+)', base: '(\w+)', quote: '(\w+)', label: '([^']+)'/g)].map((m) => ({ slug: m[1], base: m[2], quote: m[3], label: m[4] }));
const comms = [...dataTs.matchAll(/slug: '([^']+)', col: '([^']+)', name: '([^']+)'/g)].map((m) => ({ slug: m[1], col: m[2], name: m[3] }));
if (pairs.length < 20 || comms.length < 20) throw new Error(`og: parsed ${pairs.length} pairs / ${comms.length} commodities`);

const day = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
const mon = (ym) => new Date(ym + '-01T00:00:00Z').toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
const dec = (v) => (v >= 1000 ? 2 : v >= 100 ? 3 : v >= 10 ? 4 : 5);
const L = fx.dates.length - 1;

function wrap(text, max) {
  const words = text.split(/\s+/); const lines = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max) { lines.push(cur.trim()); cur = w; } else cur += ' ' + w; }
  if (cur.trim()) lines.push(cur.trim());
  return lines.slice(0, 3);
}
const F = "Bahnschrift, 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";
function card({ kicker, title, figure, foot }) {
  const lines = wrap(title, figure ? 26 : 24);
  const size = figure ? 64 : 76;
  const tl = lines.map((l, i) => `<text x="80" y="${figure ? 215 + i * 74 : 250 + i * 88}" font-family="${F}" font-size="${size}" font-weight="700" fill="#ecebe3">${esc(l)}</text>`).join('');
  const fig = figure ? `<text x="80" y="${215 + lines.length * 74 + 92}" font-family="${F}" font-size="104" font-weight="700" fill="#f2d36b">${esc(figure)}</text>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#6b4a2b"/>
  <rect x="24" y="24" width="1152" height="562" fill="#1c2321"/>
  <g stroke="#3f4a46" stroke-width="1" stroke-dasharray="3 9">${[150, 520].map((y) => `<line x1="80" x2="1120" y1="${y}" y2="${y}"/>`).join('')}</g>
  <text x="80" y="112" font-family="${F}" font-size="30" font-weight="700" letter-spacing="6" fill="#f2d36b">${esc(kicker.toUpperCase())}</text>
  ${tl}${fig}
  <text x="80" y="566" font-family="${F}" font-size="32" font-weight="700" letter-spacing="3" fill="#ecebe3">FX &amp; COMMODITY ALMANAC</text>
  <text x="1120" y="566" text-anchor="end" font-family="${F}" font-size="26" fill="#c4c6bc">${esc(foot)}</text>
</svg>`;
}

const fxDate = day(fx.latestDate);
const cards = [
  { file: 'home', kicker: 'The board', title: 'ECB reference rates and World Bank commodity prices', foot: `ECB to ${fxDate} · WB to ${mon(cm.latestMonth)}` },
  { file: 'fx', kicker: 'Currency board', title: '20 exchange rates from ECB euro reference data', foot: `Fixing of ${fxDate}` },
  { file: 'commodities', kicker: 'Commodity board', title: '22 commodity prices from the World Bank Pink Sheet', foot: `${mon(cm.latestMonth)} averages` },
  { file: 'tools', kicker: 'Tools', title: 'Historical converter and percent change calculator', foot: 'forexcommoditynews.online' },
  { file: 'tool-converter', kicker: 'Tool', title: 'What was it worth on a past date? ECB rates since 2016', foot: '25 currencies' },
  { file: 'tool-percent', kicker: 'Tool', title: 'Percent change, log return and annual growth rate', foot: 'forexcommoditynews.online' },
  { file: 'guides', kicker: 'The almanac', title: 'How to read exchange-rate and commodity-price records', foot: 'Sourced, dated guides' },
  { file: 'method', kicker: 'Method & sources', title: 'How every figure on the board is sourced and computed', foot: 'ECB · World Bank (CC BY 4.0)' },
];
for (const p of pairs) {
  const b = p.base === 'EUR' ? 1 : fx.series[p.base][L];
  const v = fx.series[p.quote][L] / b;
  cards.push({ file: `fx-${p.slug}`, kicker: 'Currency pair · ECB reference', title: `${p.label} rate history and ranges`, figure: v.toFixed(dec(v)), foot: `Fixing of ${fxDate}` });
}
for (const c of comms) {
  const s = cm.series[c.col];
  const v = s.values[s.values.length - 1];
  cards.push({ file: `cm-${c.slug}`, kicker: 'Commodity · World Bank monthly', title: `${c.name} price history`, figure: `${v.toLocaleString('en-US', { maximumFractionDigits: v >= 1000 ? 0 : 2 })} ${s.unit}`, foot: `${mon(cm.latestMonth)} average` });
}
const gdir = path.join(root, 'src', 'content', 'guides');
for (const f of (await readdir(gdir)).filter((x) => x.endsWith('.md'))) {
  const t = await readFile(path.join(gdir, f), 'utf8');
  const title = (t.match(/^title:\s*"?(.+?)"?\s*$/m) || [])[1];
  const shelf = (t.match(/^shelf:\s*"?(.+?)"?\s*$/m) || [])[1] || 'Guide';
  if (title) cards.push({ file: `guide-${f.replace(/\.md$/, '')}`, kicker: `Almanac · ${shelf}`, title, foot: 'forexcommoditynews.online/guides' });
}
for (const c of cards) await sharp(Buffer.from(card(c))).png({ compressionLevel: 9, palette: true }).toFile(path.join(out, `${c.file}.png`));
await sharp(Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64"><rect width="64" height="64" fill="#1c2321"/><rect y="56" width="64" height="8" fill="#6b4a2b"/><path d="M12 40 L24 28 L34 34 L52 16" fill="none" stroke="#ecebe3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="52" cy="16" r="5" fill="#f2d36b"/></svg>`)).png().toFile(path.join(root, 'public', 'logo.png'));
console.log(`og: wrote ${cards.length} cards`);
