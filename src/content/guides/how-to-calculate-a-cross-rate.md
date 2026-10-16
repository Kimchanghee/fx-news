---
title: "How to calculate a cross rate from euro reference rates"
seoTitle: "How to Calculate a Cross Rate From Euro Reference Rates"
description: "Step-by-step method for deriving USD/JPY, GBP/USD or any other pair from two ECB euro reference rates, with worked examples, the rounding rules and common mistakes."
question: "How do you calculate a cross exchange rate from two euro rates?"
answer: "Divide the euro rate of the currency you want to price in by the euro rate of the currency you are pricing. On 15 October 2026 the ECB fixed 177.06 yen and 1.1208 dollars per euro, so one US dollar was worth 177.06 ÷ 1.1208 = 157.976 yen."
shelf: "Currencies"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "ECB fixing of 15 Oct 2026"
sources:
  - name: "European Central Bank — Euro foreign exchange reference rates (15 October 2026 table)"
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
  - name: "ECB Data Portal — Exchange rates (EXR) dataset"
    url: "https://data.ecb.europa.eu/data/datasets/EXR"
faq:
  - q: "Is a cross rate less accurate than a direct rate?"
    a: "Not for reference purposes. Both euro legs are fixed at the same moment, so the cross is consistent with them. It can differ slightly from a market quote for the same pair at that moment because each leg is rounded and markets quote bid and ask prices."
  - q: "Should I round the euro rates before dividing?"
    a: "No. Use the published rates exactly and round only the final cross. Rounding the inputs first can shift the result in the last digits."
  - q: "How do I flip a pair, for example USD/JPY into JPY/USD?"
    a: "Take the reciprocal: 1 ÷ 157.976 = 0.00633 dollars per yen."
related: ["ecb-reference-rates-explained", "how-to-read-a-currency-quote", "which-exchange-rate-to-use-for-past-transactions"]
pages: ["fx/usd-jpy", "fx/gbp-usd", "fx/gbp-jpy", "fx/usd-chf"]
---

## Why crosses are needed

The European Central Bank publishes every reference rate against the euro: units of each currency per one euro. That is convenient if the euro is one side of your conversion and inconvenient otherwise. There is no ECB rate for dollars into yen, pounds into dollars or Swiss francs into Canadian dollars. To get those, you combine two euro rates into a **cross rate**. Every non-euro pair on this site’s [currency board](/fx/) — including [USD/JPY](/fx/usd-jpy/), [GBP/USD](/fx/gbp-usd/) and [GBP/JPY](/fx/gbp-jpy/) — is calculated this way.

## The one formula you need

Write each published rate as “units per euro”. If you want the price of currency A in currency B — how many B one A buys — then:

**A/B = (B per euro) ÷ (A per euro)**

The euro cancels out. If one euro buys 177.06 yen and one euro buys 1.1208 dollars, then 1.1208 dollars buy 177.06 yen, so one dollar buys 177.06 ÷ 1.1208 yen.

## Worked examples from the 15 October 2026 fixing

The ECB table for 15 October 2026 included USD 1.1208, JPY 177.06, GBP 0.84610 and CHF 0.9305 per euro.

| Pair | Calculation | Result |
|---|---|---|
| USD/JPY (yen per dollar) | 177.06 ÷ 1.1208 | 157.976 |
| GBP/USD (dollars per pound) | 1.1208 ÷ 0.84610 | 1.32467 |
| GBP/JPY (yen per pound) | 177.06 ÷ 0.84610 | 209.266 |
| USD/CHF (francs per dollar) | 0.9305 ÷ 1.1208 | 0.83021 |

Two checks catch most mistakes. First, sense: a pound has been worth more than a dollar throughout the ECB record since 2016, so GBP/USD should be above 1. Second, consistency: USD/JPY × GBP/USD should equal GBP/JPY. Here 157.976 × 1.32467 = 209.27, which matches to rounding.

## Which number goes on top?

The most common error is dividing the wrong way round and getting 0.00633 instead of 157.976. A simple rule: the currency you want the answer *in* goes on top. You want yen per dollar, so yen on top. If you want dollars per yen, dollars go on top: 1.1208 ÷ 177.06 = 0.00633.

Market convention decides which way a pair is usually written. Dollar–yen is quoted as USD/JPY (yen per dollar), sterling as GBP/USD (dollars per pound), and the euro is quoted first against almost everything. The [currency quote guide](/guides/how-to-read-a-currency-quote/) explains the convention, and every pair page on this site also shows the inverse.

## Rounding

Published rates are already rounded — to four decimals for the dollar, two for the yen and five for sterling in this table. Each rounding introduces a tiny error, and dividing two rounded numbers combines them. In practice the effect is in the fifth or sixth significant digit, far below anything that matters for reference use. Still, two habits keep it small:

- divide the published figures exactly as printed, and round only the final answer;
- do not chain crosses through a third currency when both currencies are in the ECB table; go straight through the euro.

This site stores the published values unchanged and rounds only for display, with enough digits to reproduce the result.

## Cross rates and market quotes

A trader asking a bank for USD/JPY at 14:10 CET would get two prices, a bid and an ask, not one number. A cross built from two reference rates sits close to the middle of that market, but it is not a traded rate. When dealers construct crosses from bid and ask prices, the spread of the cross is wider than either leg, because the worst side of each leg is combined. Reference rates hide that detail, which is one reason the ECB says they are for information only (see [ECB reference rates explained](/guides/ecb-reference-rates-explained/)).

## Converting amounts

Converting an amount is the same calculation multiplied through. To turn 2,500 Swiss francs into US dollars on 15 October 2026:

2,500 × (1.1208 ÷ 0.9305) = 2,500 × 1.20451 = 3,011.28 dollars.

The [historical converter](/tools/historical-converter/) does exactly this for any of 25 currencies and any date since January 2016, and shows the rate it used.

## Doing it in a spreadsheet

If you download the ECB history into a spreadsheet, with dates in rows and currencies in columns of “per euro” rates, the cross for each date is one division: `=JPY_cell / USD_cell` for USD/JPY. Keep blank cells blank — when the ECB published no rate for a date, there is nothing to divide, and filling the gap would invent a value. The [methodology](/methodology/) page describes how this site handles missing values.

## When a cross is the wrong tool

If a contract, a tax authority or an accounting policy names a specific rate source — a central bank’s own fixing, a Bloomberg or Refinitiv closing rate, an official monthly rate — use that source, even if it differs slightly from an ECB cross. The point of a cross from reference rates is a transparent, reproducible number, not an authoritative one for every purpose. See [which exchange rate to use for past transactions](/guides/which-exchange-rate-to-use-for-past-transactions/).
