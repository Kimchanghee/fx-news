// Central, config-driven site settings. Public IDs only; never put secrets here.
const env = (import.meta as any).env ?? {};

export const site = {
  domain: 'forexcommoditynews.online',
  url: 'https://forexcommoditynews.online',
  name: 'FX & Commodity Almanac',
  shortName: 'Almanac',
  description:
    'FX & Commodity Almanac is an independent reference that records official ECB euro reference exchange rates and World Bank monthly commodity prices, with history, ranges and volatility computed from the published figures.',
  ga4Id: (env.PUBLIC_GA4_ID as string) || '',
  gscVerification: (env.PUBLIC_GSC_VERIFICATION as string) || '',
  naverVerification: (env.PUBLIC_NAVER_VERIFICATION as string) || '',
  adsEnabled: env.PUBLIC_ADS_ENABLED === 'true',
  adsenseClient: 'ca-pub-4490818204529253',
  contactEmail: 'contact@forexcommoditynews.online',
  indexNowKey: 'b3f19e6a2c7d4805a1e9c4d27f60b8e3',
  locale: 'en-US',
  // Affiliate URLs stay empty until the owner signs up; CTAs render only when set.
  affiliates: {} as Record<string, string>,
  // EEA + UK + CH regions for Consent Mode v2 "denied" defaults.
  consentRegions: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IS','IE','IT','LV','LI','LT','LU','MT','NL','NO','PL','PT','RO','SK','SI','ES','SE','GB','CH'],
} as const;

export default site;
