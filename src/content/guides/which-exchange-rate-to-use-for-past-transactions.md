---
title: "Which exchange rate should you use for past transactions?"
seoTitle: "Which Exchange Rate to Use for Past Transactions and Records"
description: "Choose a historical exchange rate according to the reporting rule, distinguish transaction and average rates, and understand the limits of ECB reference data."
question: "Which exchange rate should you use to convert a past foreign-currency transaction?"
answer: "Use the rate required by the applicable reporting rule. For example, IRS guidance addresses the prevailing rate for dollar-functional-currency taxpayers, while UK VAT guidance permits specified market or HMRC period rates. An ECB reference rate is not automatically acceptable for every reporting purpose."
shelf: "Currencies"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "ECB fixing of 15 Oct 2026"
sources:
  - name: "IRS — Foreign currency and currency exchange rates"
    url: "https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates"
  - name: "GOV.UK — Transactions in foreign currencies and VAT"
    url: "https://www.gov.uk/guidance/foreign-currency-transactions-vat-and-tour-operators"
  - name: "European Central Bank — Euro foreign exchange reference rates"
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
faq:
  - q: "Is the ECB reference rate accepted for tax purposes?"
    a: "It depends on the authority and the tax. An ECB source does not establish legal acceptance. Check the applicable rule or ask a qualified tax adviser."
  - q: "What if the transaction happened on a weekend?"
    a: "There is no ECB fixing on weekends or TARGET holidays. This site uses the most recent earlier fixing; that tool convention does not determine the legally required date."
  - q: "Should I use the rate my bank actually charged?"
    a: "For your own budgeting, the amount actually debited is what you paid. For reporting, the rule may require a published rate instead, with any difference treated as a cost or gain."
related: ["ecb-reference-rates-explained", "how-to-calculate-a-cross-rate", "percent-change-vs-log-returns"]
pages: ["fx/eur-usd", "fx/gbp-usd"]
---

## The short version

There is no single “correct” historical exchange rate. There is the rate a particular rule asks for. Before you pick a number, find out who will read it — a tax authority, an auditor, a court, a client — and what they require. This guide summarises the main patterns and the sources behind them. It is general information, not tax or accounting advice.

## Three kinds of rate

**Spot rate on the date.** The rate prevailing on the day of the transaction. Whether it applies depends on the reporting rule.

**Average rate for a period.** A monthly, quarterly or yearly average. Rules sometimes allow it for convenience when there are many transactions and rates have not moved much.

**Official published rate.** A rate published by a public body for a specific purpose: a central bank fixing, a customs rate, a tax authority’s yearly average. When a rule names one of these, use it even if a market source says something slightly different.

The ECB euro reference rates are a published daily rate. They are free, archived back decades, consistent across about thirty currencies, and easy to cite as “ECB reference rate, [date]”. Check that the applicable rule accepts the source, date and convention before using them.

## What some rule-makers say

**United States (IRS).** The IRS explains that amounts on a US tax return must be expressed in US dollars and that taxpayers whose functional currency is the dollar should use the exchange rate prevailing when they receive, pay or accrue the item; where there is more than one rate, the one that most properly reflects income. Its page points to government and commercial sources of rates and links to yearly average rates published by the IRS.

**United Kingdom (HMRC, VAT).** HMRC guidance permits the UK market selling rate at the time of supply or its published period rate, usually for a calendar month with possible adjustments. A different method needs HMRC approval for VAT accounting; forward rates are not permitted. This is VAT guidance, not a universal rule for every UK tax or customs calculation.

Rules change and have exceptions, so treat the above as a map of where to look and read the current source.

## Applying a daily reference rate correctly

1. **Pin the date.** Use the date the rule cares about — the invoice date, payment date or tax point — not the date you happen to do the paperwork.
2. **Handle non-publication days.** No ECB rate exists on weekends or on TARGET closing days (New Year’s Day, Good Friday, Easter Monday, 1 May, 25 and 26 December). This site selects the most recent earlier fixing; the [historical converter](/tools/historical-converter/) does this and states which date it used.
3. **Go through the euro for other pairs.** The ECB quotes everything against the euro. For dollars into pounds, divide one euro rate by the other, as explained in [how to calculate a cross rate](/guides/how-to-calculate-a-cross-rate/).
4. **Record the source.** Write down “ECB reference rate of 24 December 2025: 1.1787 USD per EUR”, not just the converted figure. Anyone can then check it.
5. **Be consistent.** Switching sources from month to month to get a more favourable number is exactly what rule-makers object to.

## A worked example

Suppose an invoice for 1,000 US dollars was issued on 25 December 2025 and you report in euros. There was no ECB fixing that day. The previous fixing, 24 December 2025, was 1.1787 dollars per euro, so 1,000 ÷ 1.1787 = 848.39 euros. If you were converting the same 1,000 dollars at the 15 October 2026 fixing (1.1208), you would get 892.22 euros. The difference of 43.83 euros is the effect of the exchange rate moving between those dates, illustrating why both the required date and source must be recorded.

## What the bank charged is a different number

Your bank or card provider converted at its own rate, usually with a margin over a mid-market or reference rate, and perhaps a fee. The amount debited from your account is what the transaction cost you. A reporting rule may still require a published rate, in which case the gap between the two is a cost or a gain to be treated under that rule. The reference rate is useful as a yardstick: it shows how far your provider’s rate was from a neutral benchmark on that day.

## Rates for a period

If a rule allows an average, check how the average is defined: a simple mean of daily fixings, a mean of month-end rates, or a published figure. They differ. Each [pair page](/fx/eur-usd/) on this site shows a simple average of the daily ECB fixings for each calendar year, together with the year’s high and low, so you can see how much an average hides in a volatile year.

## When to ask a professional

If amounts are large, if you are converting for a court, a regulator or a cross-border tax return, or if the rule is unclear, ask a qualified adviser which rate to use. The data on this site helps you find and document a rate; it does not decide which rate is legally right for you.

## Saved numerical source

Historical numbers above refer to the [saved ECB-derived snapshot](https://github.com/Kimchanghee/fx-news/blob/7b0dbf0/src/data/fx.json), retrieved 2026-10-16T00:01:08.026Z. The JSON retains the provider request or workbook URL and observation dates. It is the saved normalized dataset, not a claim of a fresh download or the provider’s original response bytes.
