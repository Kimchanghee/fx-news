import type { Locale } from './i18n';
export type Category = { slug: string; name: Partial<Record<Locale, string>>; };
export type RSSSource = { url: string; category: string; weight?: number; };
export const channel = {
  id: 'FX',
  name: '외환원자재나우',
  tagline: '달러·엔·금·원유·곡물 시장 매일 추적',
  description: '환율, 금, 원유, 천연가스, 농산물 등 외환·원자재 시장을 초등생도 이해할 수 있게 풀어드립니다.',
  domain: 'fxcommodity.live',
  accent: 'green',
  keywords: ['외환', '환율', '달러', '금', '원유', '원자재'],
  geo: { country: 'KR', region: 'Asia', primaryCity: 'Seoul' },
  rssSources: [
    { url: 'https://news.google.com/rss/search?q=%ED%99%98%EC%9C%A8&hl=ko&gl=KR&ceid=KR:ko', category: 'market' },
    { url: 'https://news.google.com/rss/search?q=%EA%B8%88%EA%B0%80+%EC%9B%90%EC%9C%A0&hl=ko&gl=KR&ceid=KR:ko', category: 'commodities' },
    { url: 'https://news.google.com/rss/search?q=USD+JPY+EUR&hl=en&gl=US&ceid=US:en', category: 'market' },
    { url: 'https://news.google.com/rss/search?q=oil+gold+commodities&hl=en&gl=US&ceid=US:en', category: 'commodities' },
    { url: 'https://news.google.com/rss/search?q=wheat+corn+grain&hl=en&gl=US&ceid=US:en', category: 'analysis' }
  ] as RSSSource[],
  categories: [
    { slug: 'breaking',    name: { ko: '속보', en: 'Breaking', ja: '速報', zh: '快讯', es: 'Última hora', pt: 'Última hora', de: 'Eilmeldung', fr: 'Dernières', ar: 'عاجل', hi: 'ब्रेकिंग', id: 'Terbaru' } },
    { slug: 'market',      name: { ko: '환율', en: 'FX', ja: '為替', zh: '汇率', es: 'Divisas', pt: 'Câmbio', de: 'Devisen', fr: 'Forex', ar: 'العملات', hi: 'मुद्रा', id: 'Valuta' } },
    { slug: 'commodities', name: { ko: '원자재', en: 'Commodities', ja: '商品', zh: '商品', es: 'Materias primas', pt: 'Commodities', de: 'Rohstoffe', fr: 'Matières premières', ar: 'السلع', hi: 'कमोडिटी', id: 'Komoditas' } },
    { slug: 'analysis',    name: { ko: '분석', en: 'Analysis', ja: '分析', zh: '分析', es: 'Análisis', pt: 'Análise', de: 'Analyse', fr: 'Analyse', ar: 'تحليل', hi: 'विश्लेषण', id: 'Analisis' } }
  ] as Category[]
};
export type ChannelConfig = typeof channel;
