---
title: "Which exchange rate should you use for past transactions?"
seoTitle: "Which Exchange Rate to Use for Past Transactions and Records"
description: "Spot, average or official rates for converting past foreign-currency amounts in records, accounts and tax returns, what the rules say, and where the ECB rates fit in."
question: "Which exchange rate should you use to convert a past foreign-currency transaction?"
answer: "Use the rate your rule-maker names. Tax authorities and accounting standards generally want the rate on the transaction date, sometimes allow a period average, and some publish their own rates. Where any reliable published rate is acceptable, an ECB reference rate is a transparent, citable choice."
shelf: "Currencies"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "ECB fixing of 15 Oct 2026"
sources:
  - name: "IRS — Foreign currency and currency exchange rates"
    url: "https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates"
  - name: "IFRS Foundation — IAS 21 The Effects of Changes in Foreign Exchange Rates"
    url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/"
  - name: "EUR-Lex — Council Directive 2006/112/EC on the common system of VAT (Article 91)"
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112"
  - name: "GOV.UK — HMRC exchange rates for customs and VAT"
    url: "https://www.gov.uk/government/collections/exchange-rates-for-customs-and-vat"
  - name: "European Central Bank — Euro foreign exchange reference rates"
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
faq:
  - q: "Is the ECB reference rate accepted for tax purposes?"
    a: "It depends on the authority and the tax. The EU VAT Directive lets businesses use the latest ECB rate for VAT conversions, while other authorities name their own rates. Check the rule that applies to you or ask a tax adviser."
  - q: "What if the transaction happened on a weekend?"
    a: "There is no ECB fixing on weekends or TARGET holidays. The common convention is the most recent earlier fixing, but some rules specify a different day, so check."
  - q: "Should I use the rate my bank actually charged?"
    a: "For your own budgeting, the amount actually debited is what you paid. For reporting, the rule may require a published rate instead, with any difference treated as a cost or gain."
related: ["ecb-reference-rates-explained", "how-to-calculate-a-cross-rate", "percent-change-vs-log-returns"]
pages: ["fx/eur-usd", "fx/gbp-usd"]
---

## The short version

There is no single “correct” historical exchange rate. There is the rate a particular rule asks for. Before you pick a number, find out who will read it — a tax authority, an auditor, a court, a client — and what they require. This guide summarises the main patterns and the sources behind them. It is general information, not tax or accounting advice.

## Three kinds of rate

**Spot rate on the date.** The rate prevailing on the day of the transaction. It is the default in most accounting and many tax rules because it reflects the value at the time.

**Average rate for a period.** A monthly, quarterly or yearly average. Rules sometimes allow it for convenience when there are many transactions and rates have not moved much.

**Official published rate.** A rate published by a public body for a specific purpose: a central bank fixing, a customs rate, a tax authority’s yearly average. When a rule names one of these, use it even if a market source says something slightly different.

The ECB euro reference rates are a published daily rate. They are free, archived back decades, consistent across about thirty currencies, and easy to cite as “ECB reference rate, [date]”. That makes them a good default when a rule only asks for a reliable source.

## What some rule-makers say

**United States (IRS).** The IRS explains that amounts on a US tax return must be expressed in US dollars and that taxpayers whose functional currency is the dollar should use the exchange rate prevailing when they receive, pay or accrue the item; where there is more than one rate, the one that most properly reflects income. Its page points to government and commercial sources of rates and links to yearly average rates published by the IRS.

**International accounting (IAS 21).** Under IFRS, a foreign-currency transaction is recorded on initial recognition at the spot rate on the transaction date. The standard notes that, for practical reasons, a rate approximating the actual rate — such as an average for a week or a month — is often used, unless rates fluctuate significantly.

**EU VAT.** Article 91 of the VAT Directive (2006/112/EC) deals with amounts in a currency other than that of the member state. The conversion uses the latest selling rate on the most representative exchange market, or a rate set by reference to that market; and member states must accept the use of the latest rate published by the ECB, with conversions between two non-euro currencies made through the euro.

**United Kingdom (HMRC).** HMRC publishes monthly exchange rates for customs and VAT purposes. For those uses, the HMRC rate is the reference, not an ECB or market rate.

Rules change and have exceptions, so treat the above as a map of where to look and read the current source.

## Applying a daily reference rate correctly

1. **Pin the date.** Use the date the rule cares about — the invoice date, payment date or tax point — not the date you happen to do the paperwork.
2. **Handle non-publication days.** No ECB rate exists on weekends or on TARGET closing days (New Year’s Day, Good Friday, Easter Monday, 1 May, 25 and 26 December). The usual convention is the most recent earlier fixing; the [historical converter](/tools/historical-converter/) does this and states which date it used.
3. **Go through the euro for other pairs.** The ECB quotes everything against the euro. For dollars into pounds, divide one euro rate by the other, as explained in [how to calculate a cross rate](/guides/how-to-calculate-a-cross-rate/).
4. **Record the source.** Write down “ECB reference rate of 24 December 2025: 1.1787 USD per EUR”, not just the converted figure. Anyone can then check it.
5. **Be consistent.** Switching sources from month to month to get a more favourable number is exactly what rule-makers object to.

## A worked example

Suppose an invoice for 1,000 US dollars was issued on 25 December 2025 and you report in euros. There was no ECB fixing that day. The previous fixing, 24 December 2025, was 1.1787 dollars per euro, so 1,000 ÷ 1.1787 = 848.39 euros. If you were converting the same 1,000 dollars at the 15 October 2026 fixing (1.1208), you would get 892.22 euros. The difference of 43.83 euros is the effect of the exchange rate moving between those dates, which is why the date matters more than the source in most disputes.

## What the bank charged is a different number

Your bank or card provider converted at its own rate, usually with a margin over a mid-market or reference rate, and perhaps a fee. The amount debited from your account is what the transaction cost you. A reporting rule may still require a published rate, in which case the gap between the two is a cost or a gain to be treated under that rule. The reference rate is useful as a yardstick: it shows how far your provider’s rate was from a neutral benchmark on that day.

## Rates for a period

If a rule allows an average, check how the average is defined: a simple mean of daily fixings, a mean of month-end rates, or a published figure. They differ. Each [pair page](/fx/eur-usd/) on this site shows a simple average of the daily ECB fixings for each calendar year, together with the year’s high and low, so you can see how much an average hides in a volatile year.

## When to ask a professional

If amounts are large, if you are converting for a court, a regulator or a cross-border tax return, or if the rule is unclear, ask a qualified adviser which rate to use. The data on this site helps you find and document a rate; it does not decide which rate is legally right for you.
