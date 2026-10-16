import site from '../site.config';

// Allow every crawler, including AI crawlers (fire-your-seo-agency GEO/LLMO guidance).
export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
