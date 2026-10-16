import site from '../site.config';
import { routes } from '../lib/routes';
import { fx, cm, MAJORS, COMMODITIES, pairBySlug, pairStats, commodityStats, fmtDate, fmtMonthLong, num, cmDecimals } from '../lib/data';
import { quoteDecimals } from '../lib/calc.mjs';

export async function GET() {
  const r = await routes();
  const fxLines = MAJORS.map((s) => { const st = pairStats(pairBySlug(s)); return `- ${st.pair.label}: ${num(st.latest, quoteDecimals(st.latest))} on ${fmtDate(st.latestDate)} (12-month change ${st.y1.change?.toFixed(1)}%) — ${site.url}/fx/${s}/`; });
  const cmLines = COMMODITIES.map((c) => { const st = commodityStats(c); return `- ${c.name}: ${num(st.latest, cmDecimals(st.latest))} ${st.unit}, ${fmtMonthLong(st.latestMonth)} average — ${site.url}/commodities/${c.slug}/`; });
  const groups = [...new Set(r.map((x) => x.group))];
  const body = `# ${site.name}

> ${site.description}

Data snapshot: ECB euro reference rates to ${fmtDate(fx.latestDate)} (retrieved ${fmtDate(fx.asOf)}); World Bank Pink Sheet monthly prices to ${fmtMonthLong(cm.latestMonth)} (${cm.workbookNote}; retrieved ${fmtDate(cm.asOf)}). Figures are official reference data, not live quotes, forecasts or advice. Sources: ${fx.sourceUrl} ; ${cm.sourceUrl} (CC BY 4.0).

## Latest reference rates (ECB)
${fxLines.join('\n')}

## Latest monthly commodity prices (World Bank, nominal US$)
${cmLines.join('\n')}

${groups.map((g) => `## ${g}\n${r.filter((x) => x.group === g).map((x) => `- ${site.url}${x.path}${x.title ? ` — ${x.title}` : ''}`).join('\n')}`).join('\n\n')}

## Method
Cross rates = (quote per EUR) / (base per EUR). Volatility = sample standard deviation of log changes x sqrt(observations per year). No interpolation; missing values stay missing. Details: ${site.url}/methodology/
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
