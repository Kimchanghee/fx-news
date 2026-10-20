import site from '../site.config';
import { routes } from '../lib/routes';
import { fx, cm, MAJORS, COMMODITIES, pairBySlug, pairStats, commodityStats, fmtDate, fmtMonthLong, num, cmDecimals } from '../lib/data';
import { quoteDecimals } from '../lib/calc.mjs';

export async function GET() {
  const r = await routes();
  const fxLines = MAJORS.map((s) => { const st = pairStats(pairBySlug(s)); return `- [${st.pair.label}](${site.url}/fx/${s}/): ${num(st.latest, quoteDecimals(st.latest))} on ${fmtDate(st.latestDate)} (12-month change ${st.y1.change?.toFixed(1)}%)`; });
  const cmLines = COMMODITIES.map((c) => { const st = commodityStats(c); return `- [${c.name}](${site.url}/commodities/${c.slug}/): ${num(st.latest, cmDecimals(st.latest))} ${st.unit}, ${fmtMonthLong(st.latestMonth)} average`; });
  const groups = [...new Set(r.map((x) => x.group))];
  const body = `# ${site.name}

> ${site.description}

${site.name} (forexcommoditynews.online). Last updated: ${fx.asOf.slice(0, 10)} (data snapshot retrieved).

Data snapshot: ECB euro reference rates to ${fmtDate(fx.latestDate)} (retrieved ${fmtDate(fx.asOf)}); World Bank Pink Sheet monthly prices to ${fmtMonthLong(cm.latestMonth)} (${cm.workbookNote}; retrieved ${fmtDate(cm.asOf)}). Figures are official reference data, not live quotes, forecasts or advice. Sources: [ECB euro reference rates](${fx.sourceUrl}); [World Bank Pink Sheet](${cm.sourceUrl}) (CC BY 4.0).

## Latest reference rates (ECB)
${fxLines.join('\n')}

## Latest monthly commodity prices (World Bank, nominal US$)
${cmLines.join('\n')}

${groups.map((g) => `## ${g}\n${r.filter((x) => x.group === g).map((x) => `- [${x.title || x.path}](${site.url}${x.path})`).join('\n')}`).join('\n\n')}

## Method
Cross rates = (quote per EUR) / (base per EUR). Volatility = sample standard deviation of log changes x sqrt(observations per year). No interpolation; missing values stay missing. Details: [Methodology](${site.url}/methodology/)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
