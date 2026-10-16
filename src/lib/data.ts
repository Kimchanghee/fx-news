// Build-time data access + page-specific computed statistics.
// All figures derive from the committed snapshots in src/data; nothing is interpolated.
import fxRaw from '../data/fx.json';
import cmRaw from '../data/commodities.json';
import { pctChange, annualisedVol, percentileRank, crossRate, lastOnOrBefore } from './calc.mjs';

export type FxData = { asOf: string; source: string; sourceUrl: string; apiUrl: string; note: string; latestDate: string; dates: string[]; series: Record<string, (number | null)[]> };
export type CmData = { asOf: string; source: string; sourceUrl: string; fileUrl: string; license: string; licenseUrl: string; workbookNote: string; months: string[]; latestMonth: string; series: Record<string, { unit: string; values: (number | null)[] }> };
export const fx = fxRaw as unknown as FxData;
export const cm = cmRaw as unknown as CmData;

export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
};
export const fmtMonth = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
};
export const fmtMonthLong = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'UTC' });
};
export const num = (v: number | null | undefined, d = 2) =>
  v === null || v === undefined || !Number.isFinite(v) ? '—' : v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
export const signed = (v: number | null | undefined, d = 1, suffix = '%') =>
  v === null || v === undefined || !Number.isFinite(v) ? '—' : `${v > 0 ? '+' : v < 0 ? '−' : '±'}${Math.abs(v).toFixed(d)}${suffix}`;
export const fxAsOfDate = fx.asOf.slice(0, 10);
export const cmAsOfDate = cm.asOf.slice(0, 10);

// ---------------- FX ----------------
export type Pair = { slug: string; base: string; quote: string; label: string; nick?: string; blurb: string };
const CUR_NAMES: Record<string, string> = {
  EUR: 'euro', USD: 'US dollar', JPY: 'Japanese yen', GBP: 'pound sterling', CHF: 'Swiss franc', AUD: 'Australian dollar', CAD: 'Canadian dollar',
  NZD: 'New Zealand dollar', SEK: 'Swedish krona', NOK: 'Norwegian krone', DKK: 'Danish krone', PLN: 'Polish zloty', CZK: 'Czech koruna',
  HUF: 'Hungarian forint', CNY: 'Chinese yuan renminbi', HKD: 'Hong Kong dollar', SGD: 'Singapore dollar', KRW: 'South Korean won', INR: 'Indian rupee',
  IDR: 'Indonesian rupiah', THB: 'Thai baht', MXN: 'Mexican peso', BRL: 'Brazilian real', ZAR: 'South African rand', TRY: 'Turkish lira',
};
export const curName = (c: string) => CUR_NAMES[c] ?? c;
export const CURRENCY_CODES = ['EUR', ...Object.keys(fx.series)];

export const PAIRS: Pair[] = [
  { slug: 'eur-usd', base: 'EUR', quote: 'USD', label: 'EUR/USD', nick: 'fiber', blurb: 'The most traded currency pair; quoted directly by the ECB.' },
  { slug: 'usd-jpy', base: 'USD', quote: 'JPY', label: 'USD/JPY', nick: 'gopher', blurb: 'Dollar–yen, derived here as a cross of two euro rates.' },
  { slug: 'gbp-usd', base: 'GBP', quote: 'USD', label: 'GBP/USD', nick: 'cable', blurb: 'Sterling–dollar, nicknamed “cable” after the transatlantic telegraph.' },
  { slug: 'usd-chf', base: 'USD', quote: 'CHF', label: 'USD/CHF', nick: 'swissie', blurb: 'Dollar–franc, often read alongside EUR/CHF.' },
  { slug: 'aud-usd', base: 'AUD', quote: 'USD', label: 'AUD/USD', nick: 'aussie', blurb: 'Australian dollar, often discussed with metals and China demand.' },
  { slug: 'usd-cad', base: 'USD', quote: 'CAD', label: 'USD/CAD', nick: 'loonie', blurb: 'Dollar–loonie, often discussed alongside crude oil.' },
  { slug: 'nzd-usd', base: 'NZD', quote: 'USD', label: 'NZD/USD', nick: 'kiwi', blurb: 'New Zealand dollar against the US dollar.' },
  { slug: 'eur-gbp', base: 'EUR', quote: 'GBP', label: 'EUR/GBP', blurb: 'Euro–sterling, a direct ECB reference rate.' },
  { slug: 'eur-jpy', base: 'EUR', quote: 'JPY', label: 'EUR/JPY', blurb: 'Euro–yen, a direct ECB reference rate.' },
  { slug: 'eur-chf', base: 'EUR', quote: 'CHF', label: 'EUR/CHF', blurb: 'Euro–franc, a direct ECB reference rate.' },
  { slug: 'gbp-jpy', base: 'GBP', quote: 'JPY', label: 'GBP/JPY', nick: 'guppy', blurb: 'Sterling–yen, a cross known for wide swings.' },
  { slug: 'usd-cny', base: 'USD', quote: 'CNY', label: 'USD/CNY', blurb: 'Dollar–onshore yuan, a managed exchange rate.' },
  { slug: 'usd-krw', base: 'USD', quote: 'KRW', label: 'USD/KRW', blurb: 'Dollar–won, a widely watched Asian pair.' },
  { slug: 'usd-inr', base: 'USD', quote: 'INR', label: 'USD/INR', blurb: 'Dollar–rupee, a widely watched Asian pair.' },
  { slug: 'usd-mxn', base: 'USD', quote: 'MXN', label: 'USD/MXN', blurb: 'Dollar–peso, the most traded Latin American pair.' },
  { slug: 'usd-brl', base: 'USD', quote: 'BRL', label: 'USD/BRL', blurb: 'Dollar–real, a commodity-exporter currency pair.' },
  { slug: 'usd-zar', base: 'USD', quote: 'ZAR', label: 'USD/ZAR', blurb: 'Dollar–rand, a liquid emerging-market pair.' },
  { slug: 'usd-try', base: 'USD', quote: 'TRY', label: 'USD/TRY', blurb: 'Dollar–lira, shaped by persistently high Turkish inflation.' },
  { slug: 'eur-pln', base: 'EUR', quote: 'PLN', label: 'EUR/PLN', blurb: 'Euro–zloty, a direct ECB reference rate.' },
  { slug: 'usd-sgd', base: 'USD', quote: 'SGD', label: 'USD/SGD', blurb: 'Dollar–Singapore dollar; MAS manages the SGD against a basket.' },
];
export const MAJORS = ['eur-usd', 'usd-jpy', 'gbp-usd', 'usd-chf', 'aud-usd', 'usd-cad', 'nzd-usd', 'eur-gbp', 'eur-jpy', 'usd-cny'];

/** Units of currency c per 1 EUR at index i (EUR = 1). */
const eurRate = (c: string, i: number): number | null => (c === 'EUR' ? 1 : fx.series[c]?.[i] ?? null);
export const pairSeries = (p: Pair): (number | null)[] => fx.dates.map((_, i) => crossRate(eurRate(p.base, i), eurRate(p.quote, i)));
export const isDirect = (p: Pair) => p.base === 'EUR';

export function minusDate(iso: string, years: number, months = 0) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y - years, m - 1 - months, d)).toISOString().slice(0, 10);
}

export type Move = { date: string; from: number; to: number; pct: number };
export type YearRow = {
  year: string; open: number | null; close: number | null; change: number | null; high: number; highDate: string; low: number; lowDate: string;
  avg: number | null; vol: number | null; n: number; partial: boolean;
};

function extremes<T extends string>(vals: (number | null)[], keys: T[]) {
  let hi = -Infinity, lo = Infinity, hiK = '', loK = '';
  vals.forEach((x, k) => { if (x === null) return; if (x > hi) { hi = x; hiK = keys[k]; } if (x < lo) { lo = x; loK = keys[k]; } });
  return { hi, hiK, lo, loK };
}

export function pairStats(p: Pair) {
  const s = pairSeries(p);
  const D = fx.dates;
  const L = D.length - 1;
  const latest = s[L]!;
  const prev = s[L - 1];
  const y1i = Math.max(0, lastOnOrBefore(D, minusDate(D[L], 1)));
  const y5i = Math.max(0, lastOnOrBefore(D, minusDate(D[L], 5)));
  const m1i = Math.max(0, lastOnOrBefore(D, minusDate(D[L], 0, 1)));
  const win = s.slice(y1i + 1, L + 1);
  const e1 = extremes(win, D.slice(y1i + 1, L + 1));
  const pos = e1.hi > e1.lo ? ((latest - e1.lo) / (e1.hi - e1.lo)) * 100 : null;
  const vol1y = annualisedVol(s.slice(y1i, L + 1), win.length);
  const moves: Move[] = [];
  for (let i = 1; i <= L; i++) { const a = s[i - 1], b = s[i]; if (a && b) moves.push({ date: D[i], from: a, to: b, pct: pctChange(a, b)! }); }
  const bigAll = [...moves].sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct)).slice(0, 5);
  const bigYear = moves.filter((m) => m.date > D[y1i]).sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct)).slice(0, 3);
  const years: YearRow[] = [];
  for (const y of [...new Set(D.map((d) => d.slice(0, 4)))]) {
    const idx = D.map((d, i) => (d.startsWith(y) ? i : -1)).filter((i) => i >= 0);
    const vals = idx.map((i) => s[i]).filter((v): v is number => v !== null);
    const e = extremes(idx.map((i) => s[i]), idx.map((i) => D[i]));
    const prevClose = idx[0] > 0 ? s[idx[0] - 1] : null;
    const close = s[idx[idx.length - 1]];
    years.push({
      year: y, open: s[idx[0]], close, change: pctChange(prevClose, close), high: e.hi, highDate: e.hiK, low: e.lo, lowDate: e.loK,
      avg: vals.reduce((a, b) => a + b, 0) / vals.length,
      vol: annualisedVol((idx[0] > 0 ? [s[idx[0] - 1]] : []).concat(idx.map((i) => s[i])), vals.length),
      n: vals.length, partial: y === D[L].slice(0, 4),
    });
  }
  const fullYears = years.filter((y) => !y.partial);
  const vols = fullYears.map((y) => y.vol).filter((x): x is number => x !== null);
  const avgVol = vols.length ? vols.reduce((a, b) => a + b, 0) / vols.length : null;
  const calmest = fullYears.reduce((a, b) => ((b.vol ?? 1e9) < (a.vol ?? 1e9) ? b : a), fullYears[0]);
  const wildest = fullYears.reduce((a, b) => ((b.vol ?? -1) > (a.vol ?? -1) ? b : a), fullYears[0]);
  const ea = extremes(s, D);
  return {
    pair: p, series: s, latest, latestDate: D[L], prev, prevDate: D[L - 1], dayChange: pctChange(prev, latest),
    m1: { date: D[m1i], value: s[m1i], change: pctChange(s[m1i], latest) },
    y1: { date: D[y1i], value: s[y1i], change: pctChange(s[y1i], latest) },
    y5: { date: D[y5i], value: s[y5i], change: pctChange(s[y5i], latest) },
    start: { date: D[0], value: s[0], change: pctChange(s[0], latest) },
    range: { hi: e1.hi, hiD: e1.hiK, lo: e1.lo, loD: e1.loK, pos, n: win.length },
    all: { hi: ea.hi, hiD: ea.hiK, lo: ea.lo, loD: ea.loK, pct: percentileRank(s, latest) },
    vol1y, avgVol, calmest, wildest, bigAll, bigYear, years,
  };
}
export type PairStats = ReturnType<typeof pairStats>;

// ---------------- Commodities ----------------
export type Pit = 'Energy' | 'Precious metals' | 'Base metals & ore' | 'Grains & softs';
export type Commodity = { slug: string; col: string; name: string; short: string; pit: Pit; spec: string; unitWords: string };
export const COMMODITIES: Commodity[] = [
  { slug: 'brent-crude-oil', col: 'Crude oil, Brent', name: 'Brent crude oil', short: 'Brent', pit: 'Energy', spec: 'Crude oil, UK Brent 38° API.', unitWords: 'US dollars per barrel' },
  { slug: 'wti-crude-oil', col: 'Crude oil, WTI', name: 'WTI crude oil', short: 'WTI', pit: 'Energy', spec: 'Crude oil, US West Texas Intermediate (WTI) 40° API.', unitWords: 'US dollars per barrel' },
  { slug: 'dubai-crude-oil', col: 'Crude oil, Dubai', name: 'Dubai crude oil', short: 'Dubai', pit: 'Energy', spec: 'Crude oil, Dubai Fateh 32° API (1985 onward).', unitWords: 'US dollars per barrel' },
  { slug: 'us-natural-gas', col: 'Natural gas, US', name: 'US natural gas (Henry Hub)', short: 'Gas, US', pit: 'Energy', spec: 'Natural gas (U.S.), spot price at Henry Hub, Louisiana.', unitWords: 'US dollars per million British thermal units' },
  { slug: 'europe-natural-gas', col: 'Natural gas, Europe', name: 'European natural gas (TTF)', short: 'Gas, Europe', pit: 'Energy', spec: 'Natural gas (Europe): Netherlands Title Transfer Facility (TTF) from April 2015; before that an average import border price with a spot component.', unitWords: 'US dollars per million British thermal units' },
  { slug: 'japan-lng', col: 'Liquefied natural gas, Japan', name: 'Japan LNG import price', short: 'LNG, Japan', pit: 'Energy', spec: 'Liquefied natural gas (Japan), import price, c.i.f.; the two most recent months are World Bank estimates.', unitWords: 'US dollars per million British thermal units' },
  { slug: 'australian-coal', col: 'Coal, Australian', name: 'Australian thermal coal', short: 'Coal, AU', pit: 'Energy', spec: 'Coal (Australia), port thermal, f.o.b. Newcastle, 6,000 kcal/kg; a futures price from February 2022 and a spot price before that.', unitWords: 'US dollars per metric ton' },
  { slug: 'gold', col: 'Gold', name: 'Gold', short: 'Gold', pit: 'Precious metals', spec: 'Gold, spot average of daily rates from June 2025; previously 99.5% fine, London afternoon fixing, average of daily rates.', unitWords: 'US dollars per troy ounce' },
  { slug: 'silver', col: 'Silver', name: 'Silver', short: 'Silver', pit: 'Precious metals', spec: 'Silver (UK), 99.9% refined, London afternoon fixing.', unitWords: 'US dollars per troy ounce' },
  { slug: 'platinum', col: 'Platinum', name: 'Platinum', short: 'Platinum', pit: 'Precious metals', spec: 'Platinum, 99.95% minimum purity, spot average of daily rates from June 2025; previously London afternoon fixing.', unitWords: 'US dollars per troy ounce' },
  { slug: 'copper', col: 'Copper', name: 'Copper', short: 'Copper', pit: 'Base metals & ore', spec: 'Copper (LME), grade A, minimum 99.9935% purity, cathodes and wire bar shapes, settlement price.', unitWords: 'US dollars per metric ton' },
  { slug: 'aluminum', col: 'Aluminum', name: 'Aluminium', short: 'Aluminium', pit: 'Base metals & ore', spec: 'Aluminum (LME), unalloyed primary ingots, high grade, minimum 99.7% purity, settlement price since 2005.', unitWords: 'US dollars per metric ton' },
  { slug: 'nickel', col: 'Nickel', name: 'Nickel', short: 'Nickel', pit: 'Base metals & ore', spec: 'Nickel (LME), cathodes, minimum 99.8% purity, settlement price since 2005.', unitWords: 'US dollars per metric ton' },
  { slug: 'zinc', col: 'Zinc', name: 'Zinc', short: 'Zinc', pit: 'Base metals & ore', spec: 'Zinc (LME), high grade, minimum 99.95% purity, settlement price.', unitWords: 'US dollars per metric ton' },
  { slug: 'iron-ore', col: 'Iron ore, cfr spot', name: 'Iron ore', short: 'Iron ore', pit: 'Base metals & ore', spec: 'Iron ore (any origin) fines, spot price, c.f.r. China, 62% Fe from December 2008; previously 63.5% Fe.', unitWords: 'US dollars per dry metric ton unit' },
  { slug: 'wheat', col: 'Wheat, US HRW', name: 'Wheat (US hard red winter)', short: 'Wheat', pit: 'Grains & softs', spec: 'Wheat (U.S.), no. 2 hard red winter, Gulf export price.', unitWords: 'US dollars per metric ton' },
  { slug: 'maize', col: 'Maize', name: 'Maize (corn)', short: 'Maize', pit: 'Grains & softs', spec: 'Maize (U.S.), no. 2 yellow, f.o.b. US Gulf ports.', unitWords: 'US dollars per metric ton' },
  { slug: 'soybeans', col: 'Soybeans', name: 'Soybeans', short: 'Soybeans', pit: 'Grains & softs', spec: 'Soybeans: from January 2025, U.S. soybeans f.o.b. U.S. Gulf; earlier periods used c.i.f. Rotterdam definitions.', unitWords: 'US dollars per metric ton' },
  { slug: 'rice', col: 'Rice, Thai 5%', name: 'Rice (Thai 5% broken)', short: 'Rice', pit: 'Grains & softs', spec: 'Rice (Thailand), 5% broken, white rice, milled, export price, f.o.b. Bangkok.', unitWords: 'US dollars per metric ton' },
  { slug: 'arabica-coffee', col: 'Coffee, Arabica', name: 'Arabica coffee', short: 'Coffee', pit: 'Grains & softs', spec: 'Coffee, Arabica (ICO indicator price, other mild Arabicas), average of New York and Bremen/Hamburg markets, ex-dock.', unitWords: 'US dollars per kilogram' },
  { slug: 'cocoa', col: 'Cocoa', name: 'Cocoa', short: 'Cocoa', pit: 'Grains & softs', spec: 'Cocoa (ICCO daily price), average of the first three positions on the New York and London terminal markets.', unitWords: 'US dollars per kilogram' },
  { slug: 'sugar', col: 'Sugar, world', name: 'Sugar (world)', short: 'Sugar', pit: 'Grains & softs', spec: 'Sugar (world), International Sugar Agreement daily price, raw, f.o.b. and stowed at greater Caribbean ports.', unitWords: 'US dollars per kilogram' },
];
export const PITS: Pit[] = ['Energy', 'Precious metals', 'Base metals & ore', 'Grains & softs'];

export type MonthMove = { month: string; from: number; to: number; pct: number };
export type CmYear = { year: string; avg: number | null; change: number | null; hi: number; hiM: string; lo: number; loM: string; n: number; partial: boolean };

export function commodityStats(c: Commodity) {
  const ser = cm.series[c.col];
  const v = ser.values;
  const M = cm.months;
  const L = v.length - 1;
  const latest = v[L]!;
  const at = (k: number) => (L - k >= 0 ? v[L - k] : null);
  const r12 = extremes(v.slice(L - 11, L + 1), M.slice(L - 11, L + 1));
  const r60 = extremes(v.slice(L - 59, L + 1), M.slice(L - 59, L + 1));
  const rAll = extremes(v, M);
  const moves: MonthMove[] = [];
  for (let i = 1; i <= L; i++) { const a = v[i - 1], b = v[i]; if (a && b) moves.push({ month: M[i], from: a, to: b, pct: pctChange(a, b)! }); }
  const big = [...moves].sort((a, b) => Math.abs(b.pct) - Math.abs(a.pct)).slice(0, 5);
  const years: CmYear[] = [];
  for (const y of [...new Set(M.map((m) => m.slice(0, 4)))]) {
    const idx = M.map((m, i) => (m.startsWith(y) ? i : -1)).filter((i) => i >= 0);
    const vals = idx.map((i) => v[i]).filter((x): x is number => x !== null);
    const e = extremes(idx.map((i) => v[i]), idx.map((i) => M[i]));
    const avg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
    years.push({ year: y, avg, change: years.length ? pctChange(years[years.length - 1].avg, avg) : null, hi: e.hi, hiM: e.hiK, lo: e.lo, loM: e.loK, n: vals.length, partial: vals.length < 12 });
  }
  return {
    c, unit: ser.unit, values: v, months: M, latest, latestMonth: M[L],
    m1: { month: M[L - 1], value: at(1), change: pctChange(at(1), latest) },
    y1: { month: M[L - 12], value: at(12), change: pctChange(at(12), latest) },
    y5: { month: M[L - 60], value: at(60), change: pctChange(at(60), latest) },
    r12: { hi: r12.hi, hiM: r12.hiK, lo: r12.lo, loM: r12.loK },
    r60: { hi: r60.hi, hiM: r60.hiK, lo: r60.lo, loM: r60.loK },
    rAll: { hi: rAll.hi, hiM: rAll.hiK, lo: rAll.lo, loM: rAll.loK },
    pct: percentileRank(v, latest), big, years,
    vol5: annualisedVol(v.slice(L - 60, L + 1), 12), volAll: annualisedVol(v, 12),
  };
}
export type CommodityStats = ReturnType<typeof commodityStats>;

export const pairBySlug = (s: string) => PAIRS.find((p) => p.slug === s)!;
export const commodityBySlug = (s: string) => COMMODITIES.find((c) => c.slug === s)!;
/** Decimal places for a commodity price of magnitude v. */
export const cmDecimals = (v: number) => (v >= 1000 ? 0 : v >= 100 ? 1 : 2);
