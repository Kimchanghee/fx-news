import site from '../site.config';
import { routes } from '../lib/routes';

export async function GET() {
  const last = (await routes()).map((r) => r.lastmod).sort().at(-1);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${site.url}/sitemap-0.xml</loc><lastmod>${last}</lastmod></sitemap></sitemapindex>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
