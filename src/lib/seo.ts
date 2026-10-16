import site from '../site.config';

/** Return the first candidate whose length is within [min, max]; fail the build otherwise (never ship an off-spec tag). */
export function fit(cands: string[], min: number, max: number, what = 'text'): string {
  for (const c of cands) if (c.length >= min && c.length <= max) return c;
  throw new Error(`No ${what} candidate within ${min}-${max} chars: ${cands.map((c) => `[${c.length}] ${c}`).join(' | ')}`);
}
/** Candidates = every core followed by every ordered subset of pads (pads keep their order). */
export function grow(cores: string[], pads: string[]): string[] {
  const out: string[] = [];
  for (const c of cores) for (let m = 0; m < 1 << pads.length; m++) out.push(c + pads.filter((_, i) => m & (1 << i)).join(''));
  return out;
}
/** Candidates = every core joined with every suffix. */
export const cross = (cores: string[], suffixes: string[]) => cores.flatMap((c) => suffixes.map((s) => c + s));
export const fitTitle = (c: string[]) => fit(c, 50, 60, 'title');
export const fitDesc = (c: string[]) => fit(c, 150, 160, 'description');

export const abs = (p: string) => site.url + p;

export const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#org`,
  name: site.name,
  url: site.url + '/',
  logo: `${site.url}/logo.png`,
  email: site.contactEmail,
  description: site.description,
};
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.name,
  url: site.url + '/',
  publisher: { '@id': `${site.url}/#org` },
  inLanguage: 'en',
};
export function crumbsLd(crumbs: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.href) })),
  };
}
