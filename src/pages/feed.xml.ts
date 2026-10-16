import { getCollection } from 'astro:content';
import site from '../site.config';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export async function GET() {
  const guides = (await getCollection('guides', (g) => g.data.status === 'published')).sort((a, b) => +b.data.updated - +a.data.updated);
  const items = guides.map((g) => `<item><title>${esc(g.data.title)}</title><link>${site.url}/guides/${g.id}/</link><guid>${site.url}/guides/${g.id}/</guid><pubDate>${g.data.updated.toUTCString()}</pubDate><description>${esc(g.data.description)}</description></item>`).join('');
  const last = guides[0]?.data.updated.toUTCString() ?? new Date(0).toUTCString();
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${esc(site.name)} — Almanac guides</title><link>${site.url}/guides/</link><atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/><description>${esc(site.description)}</description><language>en</language><lastBuildDate>${last}</lastBuildDate>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
