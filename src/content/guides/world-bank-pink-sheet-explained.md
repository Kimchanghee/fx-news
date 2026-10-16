---
title: "What is the World Bank Pink Sheet?"
seoTitle: "What Is the World Bank Pink Sheet? Commodity Prices Explained"
description: "What the World Bank's monthly Pink Sheet of commodity prices contains, how its monthly averages are built, when it is updated, how it is licensed and where it misleads."
question: "What is the World Bank Pink Sheet?"
answer: "The Pink Sheet is the World Bank's monthly table of commodity prices: averages, in nominal US dollars, for energy, metals and farm goods, plus price indices. It is updated in the first days of each month, published under a CC BY 4.0 licence and runs back to 1960 for many series."
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
  - q: "Why is it called the Pink Sheet?"
    a: "The monthly summary was historically printed on pink paper. The name stuck after it moved online, and the World Bank still uses it for the monthly release."
  - q: "Is the Pink Sheet price the price I would pay?"
    a: "No. Each figure is a monthly average of a specific benchmark grade at a specific delivery point. Physical buyers pay contract prices that add freight, quality premiums and margins, and futures prices move every second."
  - q: "Can I republish Pink Sheet numbers?"
    a: "The data are published under CC BY 4.0, which allows reuse with attribution to the World Bank. Check the licence page linked from the World Bank commodity markets page for the current terms."
related: ["monthly-average-vs-daily-price", "commodity-price-units-explained", "brent-wti-dubai-oil-benchmarks"]
pages: ["commodities/brent-crude-oil", "commodities/gold", "commodities/copper", "commodities/wheat"]
---

## A monthly record, not a ticker

Most price data on the web is about the next second. The Pink Sheet is about the last month. Each line is the **average price of one benchmark during one calendar month**, in US dollars, compiled by the World Bank's Prospects Group. It covers roughly 70 commodity series — crude oil grades, natural gas in three regions, coal, precious and base metals, grains, oils, beverages, fertilisers and timber — and a family of price indices.

That makes it a slow source, and deliberately so. A monthly average does not tell you where gold traded this morning. It tells you, consistently and with a long memory, what a month of trading averaged. This site uses the monthly workbook for its [commodity board](/commodities/), which tracks 22 of those series from January 2000.

## What is in the workbook

The World Bank publishes two things each month: a short PDF summary (the Pink Sheet itself) and a set of historical data files. The monthly file, `CMO-Historical-Data-Monthly.xlsx`, has three parts that matter:

- **Monthly Prices** — one column per commodity, one row per month, with the unit in the header (`$/bbl`, `$/mt`, `$/troy oz`, `$/kg`, `$/mmbtu`).
- **Monthly Indices** — composite indices (energy, non-energy, agriculture, metals and others) with 2010 = 100.
- **Description** — the definition of every series: grade, delivery terms, exchange and the date any definition changed.

The Description sheet is the part most people skip and should not. “Gold” in the workbook is a spot average of daily rates from June 2025 and the London afternoon fixing before that. “Natural gas, Europe” is the Dutch TTF hub price from April 2015 and an average import border price before. Iron ore is 62% iron content from December 2008 and 63.5% before. A long chart that crosses one of those dates joins two slightly different things. Each commodity page here prints the definition from the workbook under the chart, for that reason.

## How a monthly average is built

For most series the monthly figure is a simple average of the daily or weekly quotes published by the underlying source during the month — an exchange settlement price, an assessment from a price reporting agency, or an industry indicator such as the International Cocoa Organization's daily price. A handful are built differently. Japan's LNG price is an import unit value, and the World Bank notes that its two most recent months are estimates that are revised later.

Averaging has two consequences that show up in the numbers.

First, it smooths. In April 2020 the front-month WTI futures contract settled below zero for a day, but the Pink Sheet's WTI average for that month is **16.5 dollars a barrel** — a very low month, but not a negative one. Our guide to [monthly averages versus daily prices](/guides/monthly-average-vs-daily-price/) works through that case.

Second, it lags. A shock in the last week of a month only partly reaches that month's average and fully reaches the next one. That is why the September 2026 Brent average of **116.8 dollars**, up 28.5% from August's 90.9, should be read as a description of September as a whole, not a closing price on 30 September.

## When it is updated, and what changes

The World Bank updates the files in the first days of each month with the previous month's averages. The workbook used for the current snapshot on this site is marked “Updated on October 02, 2026” and carries prices to **September 2026**.

Recent months can be revised: the World Bank replaces estimates when actual import data arrive, and occasionally redefines a series. This site re-downloads the full workbook on each refresh rather than appending the newest month, so a revision is picked up automatically. If the download fails, the previous snapshot stays in place with its own retrieval date — see the [methodology](/methodology/).

## Nominal dollars, and why that matters

Every price in the Monthly Prices sheet is **nominal**: dollars of the day, not adjusted for inflation. Gold averaged 284 dollars an ounce in January 2000 and 4,319 in September 2026 — 15.2 times as much in nominal terms. Part of that rise is simply the dollar buying less over 26 years.

The World Bank does publish real (deflated) indices, but not deflated individual prices in the monthly file. If you compare prices decades apart, say so, or deflate them yourself with a price index you name. This site shows nominal figures throughout and labels them that way.

Everything is in US dollars, too. A European buyer of wheat cares about the price in euros; to get it, divide by the month's average EUR/USD rate. Our [currency board](/fx/eur-usd/) has the daily ECB rates that let you do that, and the [percent change calculator](/tools/percent-change/) handles the arithmetic.

## Reading a Pink Sheet number correctly

A good habit is to say four things whenever you quote a figure: the series, the unit, the month and the source. “Copper (LME grade A) averaged 14,474 dollars per metric ton in September 2026, according to the World Bank Pink Sheet” is citable. “Copper is at 14,474” is not, because it sounds like a live price and hides the averaging.

Three common mistakes:

- **Comparing different units.** Arabica coffee is in dollars per kilogram, copper in dollars per metric ton, gas per million British thermal units. The [units guide](/guides/commodity-price-units-explained/) converts each into the units used in trade press.
- **Treating the benchmark as everyone's price.** Brent, WTI and Dubai crude differed by more than 20 dollars a barrel in September 2026 averages. See [Brent, WTI and Dubai compared](/guides/brent-wti-dubai-oil-benchmarks/).
- **Ignoring definition breaks.** Check the Description sheet before quoting a change across a date where the series changed.

## Licence and attribution

The World Bank publishes this dataset under the Creative Commons Attribution 4.0 licence. Reuse, including commercial reuse, is permitted with attribution. On this site every commodity page names the World Bank as the source, links to the workbook and states the month and retrieval date. If you use our derived figures — ranges, volatility, yearly averages — cite the World Bank as the source of the prices and this site for the calculation.
