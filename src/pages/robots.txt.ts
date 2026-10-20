import site from '../site.config';

// Allow every crawler, including AI crawlers (fire-your-seo-agency GEO/LLMO guidance).
export function GET() {
  const agents = ['Googlebot', 'Bingbot', 'Yeti', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended'];
  return new Response(`${agents.map((a) => `User-agent: ${a}\nAllow: /\n`).join('\n')}\nUser-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap-index.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
