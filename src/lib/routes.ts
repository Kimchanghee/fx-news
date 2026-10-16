// Single list of indexable URLs with honest lastmod dates (data date or content update date).
import { getCollection } from 'astro:content';
import { fx, cm, PAIRS, COMMODITIES } from './data';

const STATIC_UPDATED = '2026-10-16';
/** Date the World Bank workbook was updated ("Updated on October 02, 2026"), else retrieval date. */
export const cmUpdated = (() => {
  const m = cm.workbookNote.match(/Updated on (\w+ \d{1,2}, \d{4})/);
  const d = m ? new Date(m[1] + ' UTC') : null;
  return d && !isNaN(+d) ? d.toISOString().slice(0, 10) : cm.asOf.slice(0, 10);
})();
const max = (...d: string[]) => d.sort().at(-1)!;

export type Route = { path: string; lastmod: string; title?: string; group: string };
export async function routes(): Promise<Route[]> {
  const guides = (await getCollection('guides', (g) => g.data.status === 'published')).sort((a, b) => a.id.localeCompare(b.id));
  const latestGuide = guides.map((g) => g.data.updated.toISOString().slice(0, 10)).sort().at(-1) ?? STATIC_UPDATED;
  return [
    { path: '/', lastmod: max(fx.latestDate, cmUpdated), group: 'Board' },
    { path: '/fx/', lastmod: fx.latestDate, group: 'Currencies' },
    ...PAIRS.map((p) => ({ path: `/fx/${p.slug}/`, lastmod: fx.latestDate, title: `${p.label} reference rate history`, group: 'Currencies' })),
    { path: '/commodities/', lastmod: cmUpdated, group: 'Commodities' },
    ...COMMODITIES.map((c) => ({ path: `/commodities/${c.slug}/`, lastmod: cmUpdated, title: `${c.name} monthly price history`, group: 'Commodities' })),
    { path: '/tools/', lastmod: STATIC_UPDATED, group: 'Tools' },
    { path: '/tools/historical-converter/', lastmod: fx.latestDate, title: 'Historical currency converter (ECB rates)', group: 'Tools' },
    { path: '/tools/percent-change/', lastmod: max(STATIC_UPDATED, cmUpdated), title: 'Percent change calculator', group: 'Tools' },
    { path: '/guides/', lastmod: latestGuide, group: 'Guides' },
    ...guides.map((g) => ({ path: `/guides/${g.id}/`, lastmod: g.data.updated.toISOString().slice(0, 10), title: g.data.title, group: 'Guides' })),
    { path: '/about/', lastmod: STATIC_UPDATED, title: 'About', group: 'House' },
    { path: '/methodology/', lastmod: max(STATIC_UPDATED, fx.latestDate), title: 'Methodology and data sources', group: 'House' },
    { path: '/contact/', lastmod: STATIC_UPDATED, title: 'Contact', group: 'House' },
    { path: '/privacy/', lastmod: STATIC_UPDATED, title: 'Privacy policy', group: 'House' },
    { path: '/terms/', lastmod: STATIC_UPDATED, title: 'Terms of use', group: 'House' },
    { path: '/disclaimer/', lastmod: STATIC_UPDATED, title: 'Disclaimer', group: 'House' },
  ];
}
