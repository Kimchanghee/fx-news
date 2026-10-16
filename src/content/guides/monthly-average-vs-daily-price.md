---
title: "Why does a monthly average differ from a daily price?"
seoTitle: "Monthly Average vs Daily Price: Read Commodity Data"
description: "Compare monthly commodity averages with daily observations, understand smoothing and timing effects, and avoid confusing benchmark history with live prices."
question: "Why does a monthly average differ from a daily price?"
answer: "A monthly average summarizes observations across a calendar month, while a daily price describes an observation on one day. Compare like frequencies and benchmarks. A monthly chart cannot reconstruct intramonth extremes or provide an executable current quotation."
shelf: "Commodities"
datePublished: "2026-10-16"
updated: "2026-10-16"
data_asof: "2026-10-16; worked arithmetic examples are hypothetical"
sources: [{"name":"World Bank Commodity Markets","url":"https://www.worldbank.org/en/research/commodity-markets"}]
faq: []
related: ["world-bank-pink-sheet-explained","ecb-reference-rates-explained"]
pages: []
---
## What does the average measure?
A monthly average replaces many observations with one number. In a hypothetical sequence of 80, 100 and 120 dollars, the arithmetic average is 100 dollars. This is an example of arithmetic, not market data. The average need not equal the final observation, the lowest observation, or the price paid by any particular buyer. It describes a collection of observations under the source's aggregation method.

The World Bank Pink Sheet supplies monthly commodity observations with specific benchmark definitions. Read the workbook descriptions before assuming every column is an identically weighted average of exchange closes. The [commodity board](/commodities/) retains the source units and monthly frequency rather than relabelling the figures as live prices.

## Why can a shock disappear inside an average?
Imagine twenty equally weighted observations: nineteen at 100 and one at 60. Their average is 98, only two percent below a hypothetical month whose observations were all 100. The individual low is forty percent below 100. Both statements are correct, but only the daily record exposes the extreme. There is no mathematical way to recover the missing path from the monthly mean alone.

Timing matters too. A change near month-end affects fewer observations in that month's average than the same change near its beginning. If the new level persists, the next monthly average may move sharply without a further shock. A change between monthly averages is consequently not a change between two month-end closes. A chart label should make that distinction clear instead of letting readers infer it.

## Which frequency answers your question?
Monthly observations offer a manageable long-run comparison of benchmark prices. They are not executable offers and exclude the contract-specific conditions a physical buyer faces. Event studies generally require daily or higher-frequency records to place a shock in time. A procurement review may use monthly observations for context but still needs actual invoices to describe what the business paid.

Keep the benchmark, frequency, currency and unit aligned. Comparing a monthly Brent average with one WTI futures settlement changes both instrument and time aggregation. The [oil benchmark guide](/guides/brent-wti-dubai-oil-benchmarks/) explains why two oil series can differ even for the same month. A price gap across mismatched observations is not automatically an error, a profitable trade or evidence that one source is unreliable.

## Does smoothing mean lower risk?
Averaging removes some short-lived variation from the displayed series, but it does not remove risk from the underlying market. The standard deviation of changes in monthly averages describes that monthly series. Multiplying it by an annualisation factor does not restore the daily information discarded by aggregation. Two monthly charts can look similar while concealing very different intramonth paths.

The site therefore distinguishes daily ECB reference observations from monthly commodity observations. A range of daily currency references and a range of monthly commodity averages describe different sampling processes. Neither claims to include every transaction during the period. A historical statistic also cannot guarantee a future range, identify a safe entry point, or establish that future volatility will resemble the past.

## How should missing days be treated?
Repeating Friday's quote over a weekend gives that observation additional weight if the resulting rows enter an average. Interpolating between known values invents observations the source never published. Either technique may belong in a documented model, but its output must not masquerade as original source data. A missing observation is different from a zero quotation and should remain distinguishable.

The [historical converter](/tools/historical-converter/) identifies an available reference date on or before the requested date. This is a selection rule, not evidence that the provider published a new observation on the requested day. For commodities the almanac uses the workbook's supplied monthly values. It does not fabricate a daily price path from monthly data merely to make a chart appear more detailed.

## How do you cite an average responsibly?
Name the series, unit, month and source. If quoting a change, also identify the comparison month and say that the comparison is between monthly averages. Call a chart extreme the highest monthly observation in the displayed window, not the highest transaction price ever reached. That narrower wording is more reproducible and avoids making a claim the dataset cannot support.

Record the retrieval date because historical observations can be revised. If a later download differs, inspect revisions and definition changes before assuming a calculation fault. The [methodology](/methodology/) separates retrieval time from the observation period. Keep both with exported values, along with any transformation formula. These details let another reader reproduce the comparison without guessing how an apparently simple headline number was constructed.