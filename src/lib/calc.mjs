// Pure calculation helpers shared by build-time pages, browser tools and node:test.
// Every function returns null instead of inventing a value when inputs are missing or invalid.

const ok = (v) => typeof v === 'number' && Number.isFinite(v);

/** Percentage change from a to b, in percent. */
export function pctChange(a, b) {
  if (!ok(a) || !ok(b) || a === 0) return null;
  return ((b - a) / Math.abs(a)) * 100;
}

/** Natural-log return from a to b, in percent (both must be > 0). */
export function logReturn(a, b) {
  if (!ok(a) || !ok(b) || a <= 0 || b <= 0) return null;
  return Math.log(b / a) * 100;
}

/** Compound annual growth rate in percent over `years` (> 0). */
export function cagr(a, b, years) {
  if (!ok(a) || !ok(b) || !ok(years) || a <= 0 || b <= 0 || years <= 0) return null;
  return (Math.pow(b / a, 1 / years) - 1) * 100;
}

/** Value after applying a percent change. */
export function applyPct(a, pct) {
  if (!ok(a) || !ok(pct)) return null;
  return a * (1 + pct / 100);
}

/** Cross rate from two euro reference rates: units of `quote` per 1 `base`.
 *  eurBase = units of base per 1 EUR, eurQuote = units of quote per 1 EUR. EUR itself = 1. */
export function crossRate(eurBase, eurQuote) {
  if (!ok(eurBase) || !ok(eurQuote) || eurBase <= 0 || eurQuote <= 0) return null;
  return eurQuote / eurBase;
}

/** Convert an amount between currencies using euro reference rates (per 1 EUR). */
export function convert(amount, eurFrom, eurTo) {
  const r = crossRate(eurFrom, eurTo);
  if (!ok(amount) || r === null) return null;
  return amount * r;
}

/** Sample standard deviation. */
export function stdev(xs) {
  const v = xs.filter(ok);
  if (v.length < 2) return null;
  const m = v.reduce((s, x) => s + x, 0) / v.length;
  return Math.sqrt(v.reduce((s, x) => s + (x - m) ** 2, 0) / (v.length - 1));
}

/** Annualised volatility (percent) from a price series: stdev of log returns * sqrt(periodsPerYear). */
export function annualisedVol(prices, periodsPerYear) {
  const r = [];
  for (let i = 1; i < prices.length; i++) {
    const a = prices[i - 1], b = prices[i];
    if (ok(a) && ok(b) && a > 0 && b > 0) r.push(Math.log(b / a));
  }
  const s = stdev(r);
  return s === null ? null : s * Math.sqrt(periodsPerYear) * 100;
}

/** Percentile rank (0-100) of x within xs: share of observations <= x. */
export function percentileRank(xs, x) {
  const v = xs.filter(ok);
  if (!v.length || !ok(x)) return null;
  return (v.filter((y) => y <= x).length / v.length) * 100;
}

/** Index of the last date <= target in an ascending ISO date array, or -1. */
export function lastOnOrBefore(dates, target) {
  let lo = 0, hi = dates.length - 1, ans = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (dates[mid] <= target) { ans = mid; lo = mid + 1; } else hi = mid - 1;
  }
  return ans;
}

/** Round to n significant-ish decimals suitable for a quote of magnitude v. */
export function quoteDecimals(v) {
  if (!ok(v)) return 2;
  const a = Math.abs(v);
  if (a >= 1000) return 2;
  if (a >= 100) return 3;
  if (a >= 10) return 4;
  return 5;
}
