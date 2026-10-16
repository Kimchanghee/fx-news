import { fx } from '../../lib/data';

// Compact history for the browser converter: units per 1 EUR for each currency, aligned to `dates`.
export function GET() {
  const body = {
    asOf: fx.asOf, source: fx.source, sourceUrl: fx.sourceUrl, latestDate: fx.latestDate,
    dates: fx.dates, rates: fx.series,
  };
  return new Response(JSON.stringify(body), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
