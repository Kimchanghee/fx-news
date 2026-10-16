// Build-time inline SVG line charts in the "chalk on slate" style. No client JS, fixed viewBox (no layout shift).
export type ChartOpts = {
  labels: string[]; // ISO dates or YYYY-MM
  values: (number | null)[];
  width?: number;
  height?: number;
  decimals?: number;
  title: string; // accessible title
  desc: string; // accessible description
  yearTicks?: number; // label every n-th year
  markers?: { label: string; value: number; kind: 'hi' | 'lo' }[];
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function niceStep(range: number, target: number) {
  const raw = range / target;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * pow;
}

/** Downsample to at most `max` points keeping the last point (for long daily series). */
export function downsample(labels: string[], values: (number | null)[], max: number) {
  if (labels.length <= max) return { labels, values };
  const step = Math.ceil(labels.length / max);
  const L: string[] = [], V: (number | null)[] = [];
  for (let i = 0; i < labels.length; i += step) { L.push(labels[i]); V.push(values[i]); }
  if (L[L.length - 1] !== labels[labels.length - 1]) { L.push(labels[labels.length - 1]); V.push(values[values.length - 1]); }
  return { labels: L, values: V };
}

let uid = 0;
export function lineChart(o: ChartOpts): string {
  const W = o.width ?? 880, H = o.height ?? 300;
  const pl = 64, pr = 18, pt = 16, pb = 30;
  const vals = o.values.filter((v): v is number => v !== null && Number.isFinite(v));
  if (vals.length < 2) return `<p class="unavail">Chart unavailable: fewer than two published observations in this window.</p>`;
  let min = Math.min(...vals), max = Math.max(...vals);
  if (min === max) { min -= 1; max += 1; }
  const step = niceStep(max - min, 5);
  const y0 = Math.floor(min / step) * step, y1 = Math.ceil(max / step) * step;
  const n = o.values.length;
  const x = (i: number) => pl + (i / (n - 1)) * (W - pl - pr);
  const y = (v: number) => pt + (1 - (v - y0) / (y1 - y0)) * (H - pt - pb);
  const d = o.decimals ?? 2;
  let path = '', pen = false;
  o.values.forEach((v, i) => {
    if (v === null || !Number.isFinite(v)) { pen = false; return; }
    path += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`;
    pen = true;
  });
  const grid: string[] = [];
  for (let g = y0; g <= y1 + step / 2; g += step) {
    const gy = y(g).toFixed(1);
    const lab = g.toLocaleString('en-US', { minimumFractionDigits: step < 1 ? Math.min(d, Math.max(0, -Math.floor(Math.log10(step)))) : 0, maximumFractionDigits: step < 1 ? Math.min(d, Math.max(0, -Math.floor(Math.log10(step)))) : 0 });
    grid.push(`<line x1="${pl}" x2="${W - pr}" y1="${gy}" y2="${gy}" class="g"/><text x="${pl - 8}" y="${gy}" dy="4" text-anchor="end" class="t">${lab}</text>`);
  }
  // x ticks: first label of each year (thinned)
  const xt: string[] = [];
  let lastYear = '';
  const yearsSeen: number[] = [];
  o.labels.forEach((l, i) => { const yr = l.slice(0, 4); if (yr !== lastYear) { yearsSeen.push(i); lastYear = yr; } });
  const every = o.yearTicks ?? Math.max(1, Math.ceil(yearsSeen.length / 9));
  yearsSeen.forEach((i, k) => {
    if (k % every !== 0 || i === 0 && yearsSeen.length > 1 && o.labels[0].slice(5, 7) > '03') return;
    xt.push(`<line x1="${x(i).toFixed(1)}" x2="${x(i).toFixed(1)}" y1="${H - pb}" y2="${H - pb + 5}" class="a"/><text x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" class="t">${o.labels[i].slice(0, 4)}</text>`);
  });
  // single-year window: month ticks instead
  if (yearsSeen.length <= 2) {
    xt.length = 0;
    let lastM = '';
    o.labels.forEach((l, i) => {
      const m = l.slice(0, 7);
      if (m !== lastM) {
        lastM = m;
        const mm = Number(l.slice(5, 7));
        if (mm % 2 === 1 && i > 0) xt.push(`<line x1="${x(i).toFixed(1)}" x2="${x(i).toFixed(1)}" y1="${H - pb}" y2="${H - pb + 5}" class="a"/><text x="${x(i).toFixed(1)}" y="${H - 8}" text-anchor="middle" class="t">${new Date(Date.UTC(+l.slice(0, 4), mm - 1, 1)).toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' })}</text>`);
      }
    });
  }
  let li = n - 1; while (li > 0 && (o.values[li] === null)) li--;
  const lv = o.values[li]!;
  const id = `c${++uid}`;
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${id}t ${id}d">
<title id="${id}t">${esc(o.title)}</title><desc id="${id}d">${esc(o.desc)}</desc>
${grid.join('')}
<line x1="${pl}" x2="${W - pr}" y1="${H - pb}" y2="${H - pb}" class="a"/>
${xt.join('')}
<path d="${path}" class="ln" vector-effect="non-scaling-stroke"/>
<circle cx="${x(li).toFixed(1)}" cy="${y(lv).toFixed(1)}" r="4.5" class="pt"/>
</svg>`;
}
