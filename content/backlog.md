# Question queue

Updated 2026-10-20. Statuses reflect the live site. Queued items are editorial hypotheses, not measured demand; each needs a dated answer from the ECB or World Bank snapshot before it is written.

| Question | Basis | Type | Status | URL |
|---|---|---|---|---|
| What is the difference between Brent, WTI and Dubai crude oil? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/brent-wti-dubai-oil-benchmarks/ |
| What do commodity price units mean? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/commodity-price-units-explained/ |
| What are the ECB euro reference rates? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/ecb-reference-rates-explained/ |
| How do you calculate a cross exchange rate from two euro rates? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/how-to-calculate-a-cross-rate/ |
| How do you read a currency pair such as EUR/USD 1.1208? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/how-to-read-a-currency-quote/ |
| Why does a monthly average differ from a daily price? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/monthly-average-vs-daily-price/ |
| How do nominal and real commodity prices differ? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/nominal-vs-real-commodity-prices/ |
| How do percentage changes and log returns differ? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/percent-change-vs-log-returns/ |
| Which exchange rate should you use to convert a past foreign-currency transaction? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/which-exchange-rate-to-use-for-past-transactions/ |
| What is the World Bank Pink Sheet? | Sources listed in the guide (ECB / World Bank / standards) | guide | live | https://forexcommoditynews.online/guides/world-bank-pink-sheet-explained/ |
| What is the gold-to-silver price ratio? | World Bank monthly gold and silver series already on /commodities/ | data page | queued | - |
| How far apart are Brent and WTI prices? | World Bank monthly Brent and WTI series; link brent-wti guide | data page | queued | - |
| Which major currencies moved most against the euro this year? | ECB history behind the /fx/ pairs | data page | queued | - |
| What is the USD/KRW reference rate today? | Exists as /fx/usd-krw/ (cross of ECB rates); surface it rather than duplicate | existing page | live | https://forexcommoditynews.online/fx/usd-krw/ |
| Is there a currency volatility guide? | Only after source and calculation review | guide | queued (review needed) | - |

## Rules
- One question = one page. Refresh when the source data changes or impressions drop 30% or more over equal windows; change `updated` only on a real content change.
- Same-question duplicates: 301 to the canonical page; 410 only as a last resort.
- The gate checks each guide for a question, a direct answer, data_asof, sources, an llms.txt entry and visible FAQ text matching FAQPage JSON-LD.

## Earlier notes (2026-10-16)

P0 before release: reconcile all ten guides using seo/SOURCE_REVIEW.md. Inspect exact WB workbook Description sheet and historical arithmetic; historical ECB input dates; direct IAS21/EU VAT/HMRC texts; metrology source for units; relevant mathematical source for log returns. Remove generic irrelevant BLS citations after replacement. Do not interpret this backlog as approved publication.

P0 technical: numeric overflow tests and return-value guards in calc.mjs; confirm browser form behavior for overflow and extreme finite values. Clear stale Astro content cache only if duplicate-ID warning reproduces on a clean build; unique guide files currently ten.

P1: currency volatility guide only after source and calculation review; no new page just to fill a broken related link (that link now points to existing percent-change guide).

P1 operational: deployment-host 404/headers/robots, real field performance and source-refresh monitoring. No deployment/accounts in this task.
