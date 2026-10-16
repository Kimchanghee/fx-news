import site from '../site.config';
import { routes } from '../lib/routes';

export async function GET() {
  const urls = (await routes()).map((r) => `<url><loc>${site.url}${r.path}</loc><lastmod>${r.lastmod}</lastmod></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
