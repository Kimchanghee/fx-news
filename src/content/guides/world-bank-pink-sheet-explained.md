---
title: "What is the World Bank Pink Sheet?"
seoTitle: "What Is the World Bank Pink Sheet? Commodity Prices Explained"
description: "Explore World Bank Pink Sheet commodity data, monthly benchmark definitions, source units and reuse terms, with practical limits for historical comparisons."
question: "What is the World Bank Pink Sheet?"
answer: "The Pink Sheet is the World Bank's commodity-price dataset. This site's saved monthly extract contains nominal US-dollar benchmark prices for 22 series from January 2000 to September 2026, with each series' unit retained. It is a historical reference, not a live quote."
shelf: "Commodities"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "Pink Sheet updated 2 Oct 2026 (prices to Sep 2026)"
sources:
  - name: "World Bank — Commodity Markets (Pink Sheet and historical data)"
    url: "https://www.worldbank.org/en/research/commodity-markets"
  - name: "World Bank — CMO historical data, monthly (Excel workbook)"
    url: "https://thedocs.worldbank.org/en/doc/74e8be41ceb20fa0da750cda2f6b9e4e-0050012026/related/CMO-Historical-Data-Monthly.xlsx"
  - name: "Creative Commons — Attribution 4.0 International (CC BY 4.0)"
    url: "https://creativecommons.org/licenses/by/4.0/"
faq:
  - q: "Is the Pink Sheet price the price I would pay?"
    a: "No. These are monthly benchmark observations, not an offer to buy or sell. A transaction can differ in timing, quality, delivery terms and charges."
  - q: "Can I republish Pink Sheet numbers?"
    a: "World Bank default data terms use CC BY 4.0 with attribution, but additional terms and third-party exceptions can apply. Check the dataset and linked terms before reuse."
related: ["monthly-average-vs-daily-price", "commodity-price-units-explained", "brent-wti-dubai-oil-benchmarks"]
pages: ["commodities/brent-crude-oil", "commodities/gold", "commodities/copper", "commodities/wheat"]
---

## A monthly record, not a ticker

The World Bank's [Commodity Markets page](https://www.worldbank.org/en/research/commodity-markets) publishes the Pink Sheet and links to historical data. This site uses a saved extract of its monthly workbook for the [commodity board](/commodities/). The extract contains **22 series and 321 months**, January 2000 through September 2026. That is this site's coverage, not a claim about the full provider archive.

A September observation describes that month. It cannot tell you the current price, a particular day's closing price or the price a buyer will actually pay.

## What the saved workbook extract contains

The importer selects the workbook's **Monthly Prices** sheet, matches commodity column names and retains the unit header with each series. The saved JSON records the source page, exact workbook URL, retrieval timestamp and workbook note, “Updated on October 02, 2026”. It is normalized data, not the original Excel file.

The extract does not retain the provider's Description sheet. For a long historical comparison, consult the original workbook's definitions before assuming that a grade or collection method stayed unchanged. This guide does not infer historical definition changes from the price array.

## Read the unit before comparing numbers

Gold is recorded in dollars per troy ounce, copper in dollars per metric ton, crude oil in dollars per barrel and the three selected gas series in dollars per million British thermal units. The units are part of the observation, not decoration.

For example, the saved September 2026 figures are **4,319 dollars per troy ounce for gold** and **14,474 dollars per metric ton for copper**. Their numeric sizes alone do not rank how expensive those materials are. The [units guide](/guides/commodity-price-units-explained/) explains the conversions and their limits.

## Monthly figures do not reveal the daily path

The saved Brent average rises from **90.9 dollars per barrel in August 2026 to 116.8 in September**, an increase of **28.5%** after rounding. That is a comparison of monthly observations, not a return measured between the last trades of those months.

Daily prices can follow many paths with the same monthly average. Exact within-month weighting is not reconstructed here because the saved extract does not contain the underlying daily observations or weights. See [monthly averages versus daily prices](/guides/monthly-average-vs-daily-price/) for a worked hypothetical example.

## Nominal prices and currency conversion

The price figures used here are nominal US dollars, not inflation-adjusted purchasing power. Saved gold observations rise from **284 dollars per troy ounce in January 2000 to 4,319 in September 2026**, about **15.2 times** the initial figure. That ratio is not an inflation-adjusted return, and it excludes any transaction or holding costs.

To make a real-price comparison, choose and name a deflator rather than silently treating nominal dollars from different years as equivalent. The [real-prices guide](/guides/nominal-vs-real-commodity-prices/) shows the arithmetic without inventing a historical deflator.

Converting a monthly dollar average using one monthly exchange-rate average is also only an approximation to averaging daily converted prices. The average of a ratio need not equal the ratio of two averages.

## Updating and attribution

The current saved dataset was retrieved on 16 October 2026. A saved retrieval date is not proof that a later scheduled refresh ran. The refresh script re-reads the workbook on a successful invocation; if the source fails, it keeps the previous snapshot rather than inventing observations. See the [methodology](/methodology/).

Quote the series, unit, month and source together: “World Bank Pink Sheet Brent monthly average, September 2026: 116.8 dollars per barrel.” Avoid presenting it as today's oil price. Brent, WTI and Dubai are separate series; the [benchmark comparison](/guides/brent-wti-dubai-oil-benchmarks/) shows how their saved monthly prices differ.

The [World Bank summary terms](https://data.worldbank.org/summary-terms-of-use) state a default CC BY 4.0 licence, subject to additional terms and third-party exceptions. Check those conditions before reuse. Attribute the prices to the World Bank and identify this site separately when citing its calculations.

## Saved numerical source

Historical numbers above refer to the [saved World Bank-derived snapshot](https://github.com/Kimchanghee/fx-news/blob/7b0dbf0/src/data/commodities.json), retrieved 2026-10-16T00:01:08.577Z. The JSON retains the provider request or workbook URL and observation dates. It is the saved normalized dataset, not a claim of a fresh download or the provider’s original response bytes.
