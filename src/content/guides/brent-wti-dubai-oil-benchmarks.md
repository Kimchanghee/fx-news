---
title: "Brent, WTI and Dubai crude oil compared"
seoTitle: "Brent vs WTI vs Dubai Crude: How the Oil Benchmarks Differ"
description: "Compare Brent, WTI and Dubai crude oil benchmarks, their quality and location differences, and the limits of interpreting monthly World Bank price spreads."
question: "What is the difference between Brent, WTI and Dubai crude oil?"
answer: "Brent, WTI and Dubai are distinct crude-oil benchmark series. In this site's saved World Bank monthly data for September 2026, Brent was 116.8, WTI 96.9 and Dubai 93.3 dollars per barrel. A difference between them is a price spread, not proof of its cause."
shelf: "Commodities"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "Pink Sheet updated 2 Oct 2026 (prices to Sep 2026)"
sources:
  - name: "World Bank — Commodity Markets (Pink Sheet and historical data)"
    url: "https://www.worldbank.org/en/research/commodity-markets"
  - name: "World Bank — CMO historical data, monthly (Excel workbook)"
    url: "https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx"
  - name: "U.S. Energy Information Administration — Crude oil quality characteristics"
    url: "https://www.eia.gov/todayinenergy/detail.php?id=7110"
faq:
  - q: "Which oil price is 'the' oil price?"
    a: "There is no single price in these data: the workbook records Brent, WTI and Dubai separately. Name the benchmark, unit and month when quoting a figure."
  - q: "Is Brent always more expensive than WTI?"
    a: "No. In World Bank monthly averages WTI was above Brent in 109 of the months from January 2000 to September 2026, mostly before 2011. Since 2011 Brent has usually been higher."
  - q: "What does API gravity mean?"
    a: "It is a measure of how light a crude is. Higher API gravity means lower density. EIA explains that light, low-sulfur crude can generally be processed more easily into gasoline and diesel; quality alone does not determine a price spread."
related: ["world-bank-pink-sheet-explained", "monthly-average-vs-daily-price", "commodity-price-units-explained"]
pages: ["commodities/brent-crude-oil", "commodities/wti-crude-oil", "commodities/dubai-crude-oil", "fx/usd-cad"]
---

## Three separately named prices

This site's [commodity board](/commodities/) preserves the World Bank's three separate monthly crude-oil series. All three use **dollars per barrel**, so subtracting their observations for the same month produces a dollar-per-barrel spread.

| Saved series | September 2026 monthly average |
|---|---|
| [Brent](/commodities/brent-crude-oil/) | 116.8 $/bbl |
| [WTI](/commodities/wti-crude-oil/) | 96.9 $/bbl |
| [Dubai](/commodities/dubai-crude-oil/) | 93.3 $/bbl |

These observations are monthly averages, not executable offers, daily closing prices or interchangeable futures contracts. For a particular contract or physical cargo, consult its own specification rather than treating this table as a delivery specification.

## Quality matters, but it is not a causal diagnosis

The [EIA's crude-quality explainer](https://www.eia.gov/todayinenergy/detail.php?id=7110) identifies density and sulfur content as important characteristics. Higher API gravity means lighter, lower-density crude. Low sulfur is called sweet; high sulfur is called sour.

EIA explains that gasoline and diesel can generally be produced more easily and cheaply from light, sweet crude than from heavy, sour crude. That is a general refining relationship, not evidence that quality caused any particular monthly spread in this dataset. This guide does not assign exact API grades or delivery locations from a saved price array that does not contain those definitions.

## What the complete saved record shows

The saved extract has **321 monthly observations from January 2000 through September 2026** for each of these three series. Define the Brent–WTI spread as Brent minus WTI, using observations from the same month.

- WTI exceeds Brent in **109 of those 321 months**. Brent is therefore not always the higher price.
- The largest Brent–WTI spread in that saved interval is **25.3 dollars per barrel in September 2011**.
- In September 2026, the spread is **19.9 dollars per barrel**: 116.8 minus 96.9.

These are calculations over the full saved interval, not claims about observations before January 2000 or after September 2026. The calculation compares the two monthly averages; it cannot reveal the largest intraday spread.

## Brent and Dubai: label the maximum correctly

The largest Brent–Dubai spread in the saved interval is **27.7 dollars per barrel in April 2026**, calculated from 120.4 minus 92.7. September 2026's spread is **23.5 dollars**, from 116.8 minus 93.3. September is not the maximum.

This distinction matters when writing a headline. “The gap is large” and “the gap is a record” are different claims. A record claim needs a defined series, comparison method and time window, as well as a check against every observation in that window.

## Choose the comparison that answers your question

For a change over time, compare the same named series with itself. For a benchmark spread, compare two series in the same month and unit. Do not splice Brent into a WTI chart without labelling the change.

A dollar spread and a percentage premium answer different questions. September's Brent–WTI gap is 19.9 dollars per barrel. Relative to WTI's 96.9, Brent's premium is about **20.5%**. Relative to Brent, the same dollar gap is a different percentage because the denominator changes. The [percent-change calculator](/tools/percent-change/) makes that denominator explicit.

A spread does not isolate freight, refinery economics, supply disruptions or contract terms. To explain a cause, use evidence that specifically analyses that event. Neither a chart nor the general EIA quality explanation proves the cause of the 2026 observations.

## Keep monthly and transaction comparisons separate

A monthly series is useful for historical context. A buyer needs a dated offer and the relevant contract terms; a futures trader needs the exchange contract and delivery month. Neither can substitute the table above for those details.

The [Pink Sheet guide](/guides/world-bank-pink-sheet-explained/) explains this site's saved source and attribution. The [monthly-average guide](/guides/monthly-average-vs-daily-price/) explains why averages conceal the path inside a month, while the [units guide](/guides/commodity-price-units-explained/) covers barrel conversion limits.

## Saved numerical source

Historical numbers above refer to the [saved World Bank-derived snapshot](https://github.com/Kimchanghee/fx-news/blob/7b0dbf0/src/data/commodities.json), retrieved 2026-10-16T00:01:08.577Z. The JSON retains the provider request or workbook URL and observation dates. It is the saved normalized dataset, not a claim of a fresh download or the provider’s original response bytes.
