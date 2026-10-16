---
title: "How do nominal and real commodity prices differ?"
seoTitle: "Nominal vs Real Commodity Prices: Inflation Explained"
description: "Distinguish nominal commodity prices from inflation-adjusted values, choose a suitable deflator, and reproduce base-period calculations with clear examples."
question: "How do nominal and real commodity prices differ?"
answer: "Nominal prices use the dollars of each observation period. Real prices adjust those amounts with a chosen price index and base period. The adjustment changes the question from how many dollars were quoted to how prices compare against that particular measure of inflation."
shelf: "Commodities"
datePublished: "2026-10-16"
updated: "2026-10-16"
data_asof: "2026-10-16; worked arithmetic examples are hypothetical"
sources: [{"name":"World Bank Commodity Markets","url":"https://www.worldbank.org/en/research/commodity-markets"},{"name":"BLS CPI questions and answers","url":"https://www.bls.gov/cpi/questions-and-answers.htm"}]
faq: []
related: ["world-bank-pink-sheet-explained","ecb-reference-rates-explained"]
pages: []
---
## What is a nominal quotation?
A nominal price uses currency units current at the observation date. A historical dollar-per-barrel quotation and today's quotation are both dollar prices, but a dollar need not buy the same basket of other goods in both periods. The World Bank observations on this site are nominal US-dollar series. Its charts do not silently adjust those observations for inflation or label them as constant-dollar prices.

Nominal data are useful for reproducing source quotations and describing historical money amounts. The difficulty comes when a reader interprets a nominal record as a purchasing-power record. A higher nominal price does not establish that a commodity has become equally more expensive relative to everything else. The [commodity board](/commodities/) therefore keeps its nominal-price boundary visible.

## How is an inflation-adjusted price calculated?
Choose a deflator and base period. Divide the nominal commodity price by the index for its observation period, then multiply by the index for the base period. If a hypothetical commodity costs 80 dollars when the index is 100 and the chosen base index is 150, the adjusted price is 120 base-period dollars. These values illustrate arithmetic rather than a published market observation.

Suppose the same hypothetical commodity later costs 120 dollars when the index is 150. The nominal increase is fifty percent, but both prices are 120 in the selected base-period dollars. Relative to that index there is no real increase. Another deflator represents another basket and may give a different result. Identify the index every time the word real describes a transformed series.

## Which deflator fits the question?
A consumer-price index describes consumer purchases, while producer or manufacturing indices address different transactions. No deflator is automatically the uniquely correct choice for every commodity question. Household purchasing power and industrial input costs can legitimately require different denominators. Explain the selection instead of presenting inflation adjustment as a neutral transformation without assumptions.

The US Bureau of Labor Statistics publishes guidance on selecting and using Consumer Price Index series. Check geography, population coverage, seasonal adjustment and frequency. Combining monthly commodity prices with an annual index requires a documented alignment rule. The resulting comparison may be useful, but it should not imply monthly inflation precision that the input does not possess.

## Does changing the base period alter growth?
Re-expressing an otherwise identical real-price series in another base period multiplies all its observations by a constant. This changes levels, not percentage changes between two observations. If a rebasing operation appears to alter historical growth, check whether the deflator was revised, another index was substituted, or a worksheet formula changed. The label alone does not explain such a discrepancy.

Base periods remain essential for communication. Dollars per metric ton is incomplete for an adjusted series unless readers know which period's dollars are meant. Two charts may show different levels but identical movements. The [percent change calculator](/tools/percent-change/) performs ratio arithmetic; it cannot infer an undocumented deflator or identify an incorrect base-period label.

## What about buyers outside the United States?
A dollar commodity benchmark is not the same as the cost faced by a euro, yen or other local-currency buyer. Translation and inflation adjustment are separate operations. Define a local-currency series using compatible exchange observations, then choose a relevant local deflator if purchasing power is the question. A weakening local currency can increase local import costs even when the dollar benchmark is unchanged.

Frequency matters. Multiplying a monthly commodity average by a monthly exchange-rate average generally does not equal the average of matched daily translated prices. The difference depends on how the series move together. A monthly approximation can be useful if labelled, but should not be called an exact reconstruction of invoices. The [ECB reference guide](/guides/ecb-reference-rates-explained/) explains why reference rates also differ from transaction rates.

## Is a real-price record an investment signal?
An inflation-adjusted high describes a defined historical series under a selected deflator. It does not establish fair value, forecast returns or include investment holding costs. Storage, financing, spreads, insurance and futures-contract rolls can separate a benchmark from an investor's outcome. An inflation-adjusted spot-price chart should not be renamed a total-return investment chart merely because its axis is expressed in real terms.

Preserve original observations when calculating an adjusted series and add a separate derived column. Record source URLs, retrieval dates, alignment rules, formula and base period. The [methodology](/methodology/) provides provenance for the underlying snapshots. A reproducible transformation can illuminate a long history; an unexplained adjustment can instead make a persuasive chart less trustworthy. Where a necessary input is unavailable, state the limitation rather than inventing a deflator.