import { getCollection } from 'astro:content';
import site from '../site.config';

// Full text of the almanac guides for language-model ingestion (markdown source, frontmatter answer first).
export async function GET() {
  const guides = (await getCollection('guides', (g) => g.data.status === 'published')).sort((a, b) => a.id.localeCompare(b.id));
  const body = `# ${site.name} — full guides\n\n> ${site.description}\n\n` + guides.map((g) => `---\n\n# ${g.data.title}\nURL: ${site.url}/guides/${g.id}/\nUpdated: ${g.data.updated.toISOString().slice(0, 10)} · data as of ${g.data.data_asof}\n\n${g.data.answer}\n\n${g.body ?? ''}\n\nSources:\n${g.data.sources.map((s) => `- ${s.name}: ${s.url}`).join('\n')}\n`).join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
