// Fetches official public data into src/data/*.json with { asOf, source, sourceUrl }.
// On any failure the previous snapshot is kept unchanged (never invented or interpolated).
//   1. ECB euro foreign exchange reference rates (daily, ECB Data Portal SDMX API, EXR dataset)
//   2. World Bank Commodity Price Data ("Pink Sheet"), monthly prices, CC BY 4.0
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync, strFromU8 } from 'fflate';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'src', 'data');
await mkdir(dataDir, { recursive: true });
const UA = 'forexcommoditynews.online data refresh (contact@forexcommoditynews.online)';
const START = '2016-01-01';

export const CURRENCIES = ['USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'HUF', 'CNY', 'HKD', 'SGD', 'KRW', 'INR', 'IDR', 'THB', 'MXN', 'BRL', 'ZAR', 'TRY'];

async function get(url, as = 'text') {
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: as === 'buf' ? '*/*' : 'text/csv, text/html, */*' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return as === 'buf' ? new Uint8Array(await res.arrayBuffer()) : res.text();
}

async function keepOrWrite(name, build) {
  const target = path.join(dataDir, name);
  try {
    const data = await build();
    await writeFile(target, JSON.stringify(data));
    console.log(`refresh: wrote ${name}`);
    return true;
  } catch (err) {
    let prev = null;
    try { prev = JSON.parse(await readFile(target, 'utf8')); } catch {}
    console.error(`refresh: ${name} failed (${err.message}); keeping snapshot asOf ${prev?.asOf ?? 'none'}`);
    return false;
  }
}

// ---------- ECB reference rates ----------
async function ecb() {
  const key = `D.${CURRENCIES.join('+')}.EUR.SP00.A`;
  const url = `https://data-api.ecb.europa.eu/service/data/EXR/${key}?startPeriod=${START}&format=csvdata&detail=dataonly`;
  const csv = await get(url);
  const lines = csv.trim().split(/\r?\n/);
  const head = lines[0].split(',');
  const iCur = head.indexOf('CURRENCY'), iT = head.indexOf('TIME_PERIOD'), iV = head.indexOf('OBS_VALUE');
  const byDate = new Map();
  for (const l of lines.slice(1)) {
    const c = l.split(',');
    const v = Number(c[iV]);
    if (!c[iT] || !Number.isFinite(v) || v <= 0) continue;
    if (!byDate.has(c[iT])) byDate.set(c[iT], {});
    byDate.get(c[iT])[c[iCur]] = v;
  }
  const dates = [...byDate.keys()].sort();
  if (dates.length < 1000) throw new Error(`too few ECB dates (${dates.length})`);
  const series = {};
  for (const cur of CURRENCIES) series[cur] = dates.map((d) => byDate.get(d)[cur] ?? null);
  const missing = CURRENCIES.filter((c) => series[c].every((v) => v === null));
  if (missing.length) throw new Error(`ECB returned no data for ${missing.join(',')}`);
  return {
    asOf: new Date().toISOString(),
    source: 'European Central Bank, euro foreign exchange reference rates',
    sourceUrl: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html',
    apiUrl: url,
    note: 'Units of currency per 1 euro, set around 14:10 CET on TARGET business days; for information purposes only (ECB).',
    latestDate: dates[dates.length - 1],
    dates,
    series,
  };
}

// ---------- World Bank Pink Sheet (monthly) ----------
const PINK_PAGE = 'https://www.worldbank.org/en/research/commodity-markets';
// Columns we keep, matched against the header row of the "Monthly Prices" sheet.
export const COMMODITY_COLUMNS = [
  'Crude oil, Brent', 'Crude oil, WTI', 'Crude oil, Dubai', 'Natural gas, US', 'Natural gas, Europe', 'Liquefied natural gas, Japan',
  'Coal, Australian', 'Gold', 'Silver', 'Platinum', 'Copper', 'Aluminum', 'Nickel', 'Zinc', 'Iron ore, cfr spot',
  'Wheat, US HRW', 'Maize', 'Soybeans', 'Rice, Thai 5%', 'Coffee, Arabica', 'Cocoa', 'Sugar, world',
];

function colToIdx(ref) { let n = 0; for (const ch of ref.replace(/\d+/g, '')) n = n * 26 + (ch.charCodeAt(0) - 64); return n - 1; }
const unxml = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");

function parseSheet(xml, shared) {
  const rows = [];
  for (const rm of xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
    const row = [];
    for (const cm of rm[1].matchAll(/<c r="([A-Z]+\d+)"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const idx = colToIdx(cm[1]);
      const attrs = cm[2] || '';
      const inner = cm[3] || '';
      const v = (inner.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
      let val = null;
      if (/t="s"/.test(attrs) && v != null) val = shared[Number(v)];
      else if (/t="inlineStr"/.test(attrs)) val = unxml((inner.match(/<t[^>]*>([\s\S]*?)<\/t>/) || [])[1] || '');
      else if (/t="str"/.test(attrs)) val = v != null ? unxml(v) : null;
      else if (v != null) val = Number(v);
      row[idx] = val;
    }
    rows.push(row);
  }
  return rows;
}

async function pinkSheet() {
  const html = await get(PINK_PAGE);
  const m = html.match(/https?:\/\/[^"' ]*CMO-Historical-Data-Monthly\.xlsx/);
  if (!m) throw new Error('Pink Sheet monthly XLSX link not found on World Bank page');
  const xlsxUrl = m[0];
  const files = unzipSync(await get(xlsxUrl, 'buf'));
  const wb = strFromU8(files['xl/workbook.xml']);
  const rels = strFromU8(files['xl/_rels/workbook.xml.rels']);
  const sheet = [...wb.matchAll(/<sheet [^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)].find((s) => s[1] === 'Monthly Prices');
  if (!sheet) throw new Error('Monthly Prices sheet not found');
  const target = rels.match(new RegExp(`Id="${sheet[2]}"[^>]*Target="([^"]+)"`))?.[1] ?? rels.match(new RegExp(`Target="([^"]+)"[^>]*Id="${sheet[2]}"`))?.[1];
  const sheetPath = 'xl/' + target.replace(/^\/?xl\//, '');
  const shared = files['xl/sharedStrings.xml']
    ? [...strFromU8(files['xl/sharedStrings.xml']).matchAll(/<si>([\s\S]*?)<\/si>/g)].map((s) => unxml([...s[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join('')))
    : [];
  const rows = parseSheet(strFromU8(files[sheetPath]), shared);
  const hi = rows.findIndex((r) => r && r.some((c) => typeof c === 'string' && c.trim() === 'Crude oil, Brent'));
  if (hi < 0) throw new Error('header row not found');
  const header = rows[hi].map((c) => (typeof c === 'string' ? c.trim() : c));
  const units = rows[hi + 1] || [];
  const out = {};
  const months = [];
  const dataRows = rows.slice(hi + 2).filter((r) => r && typeof r[0] === 'string' && /^\d{4}M\d{2}$/.test(r[0].trim()));
  for (const r of dataRows) months.push(`${r[0].slice(0, 4)}-${r[0].slice(5, 7)}`);
  const startIdx = months.findIndex((d) => d >= '2000-01');
  for (const name of COMMODITY_COLUMNS) {
    const ci = header.findIndex((h) => typeof h === 'string' && h.replace(/\s*\*+$/, '').trim() === name);
    if (ci < 0) throw new Error(`column not found: ${name}`);
    const unit = String(units[ci] ?? '').replace(/[()]/g, '').trim();
    const values = dataRows.slice(startIdx).map((r) => (typeof r[ci] === 'number' && Number.isFinite(r[ci]) ? Number(r[ci].toFixed(4)) : null));
    out[name] = { unit, values };
  }
  const updated = (rows.slice(0, hi).flat().find((c) => typeof c === 'string' && /Updated on/i.test(c)) || '').trim();
  return {
    asOf: new Date().toISOString(),
    source: 'World Bank Commodity Price Data (The Pink Sheet), monthly prices',
    sourceUrl: PINK_PAGE,
    fileUrl: xlsxUrl,
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    workbookNote: updated,
    months: months.slice(startIdx),
    latestMonth: months[months.length - 1],
    series: out,
  };
}

const ok = [await keepOrWrite('fx.json', ecb), await keepOrWrite('commodities.json', pinkSheet)];
if (!ok.some(Boolean)) { console.error('refresh: every source failed'); process.exitCode = 1; }
