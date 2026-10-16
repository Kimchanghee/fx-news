---
title: "How to read a currency pair quote"
seoTitle: "How to Read a Currency Pair Quote: Base, Quote, Pips, Spread"
description: "Read currency pairs using base and quote currencies, bid and ask prices, pips and reciprocal rates, with worked examples and limits of reference quotations."
question: "How do you read a currency pair such as EUR/USD 1.1208?"
answer: "The first currency is the base and the second is the quote: EUR/USD 1.1208 means one euro costs 1.1208 US dollars. If the number rises, the base currency has strengthened. Dealers show two prices, a lower bid and a higher ask; reference rates show one."
shelf: "Currencies"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "ECB fixing of 15 Oct 2026"
sources:
  - name: "ISO — ISO 4217 currency codes"
    url: "https://www.iso.org/iso-4217-currency-codes.html"
  - name: "Bank for International Settlements — Triennial Central Bank Survey of foreign exchange turnover, 2022"
    url: "https://www.bis.org/statistics/rpfx22.htm"
  - name: "European Central Bank — Euro foreign exchange reference rates"
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
faq:
  - q: "If EUR/USD goes up, is the dollar weaker?"
    a: "Yes. A higher EUR/USD means each euro buys more dollars, so the euro has strengthened against the dollar and the dollar has weakened against the euro."
  - q: "What is a pip?"
    a: "A pip is the conventional smallest step in a quote: 0.0001 for most pairs and 0.01 for pairs quoted in yen. A move in EUR/USD from 1.1208 to 1.1218 is 10 pips."
  - q: "Why does my bank show two different rates?"
    a: "The lower one (bid) is what it pays when it buys the base currency from you; the higher one (ask) is what it charges when it sells it to you. The difference is the spread."
related: ["how-to-calculate-a-cross-rate", "ecb-reference-rates-explained", "percent-change-vs-log-returns"]
pages: ["fx/eur-usd", "fx/usd-jpy", "fx/gbp-usd", "fx/aud-usd"]
---

## Base and quote

A currency pair is written as two three-letter codes separated by a slash: EUR/USD, USD/JPY, GBP/USD. The codes come from the international standard ISO 4217 — EUR for the euro, USD for the US dollar, JPY for the yen, GBP for sterling, CHF for the Swiss franc.

The **first** code is the **base currency**: the thing being priced. The **second** is the **quote currency**: what it is priced in. So

> EUR/USD 1.1208 means **1 euro = 1.1208 US dollars**.

That was the European Central Bank’s reference rate for [EUR/USD](/fx/eur-usd/) on 15 October 2026. The same fixing gives USD/JPY 157.976 — one dollar costs about 158 yen — and GBP/USD 1.32467 — one pound costs about 1.32 dollars.

## Up means the first currency strengthened

When the number rises, the base currency buys more of the quote currency. If EUR/USD moves from 1.10 to 1.12, the euro has strengthened and the dollar has weakened. If [USD/JPY](/fx/usd-jpy/) falls from 160 to 150, the dollar buys fewer yen, so the yen has strengthened.

This is why the colour and arrow on this site’s [currency board](/fx/) always refer to the pair as written. A green ▲ on USD/JPY is a stronger dollar and weaker yen; it says nothing about whether that is good or bad.

## Why pairs are written the way they are

Pairs follow market convention, not alphabet. Roughly:

- the euro comes first against everything (EUR/USD, EUR/GBP, EUR/JPY);
- sterling comes first against everything except the euro (GBP/USD, GBP/JPY);
- the Australian and New Zealand dollars come first against the US dollar (AUD/USD, NZD/USD);
- the US dollar comes first against most other currencies (USD/JPY, USD/CHF, USD/CAD, USD/CNY, USD/MXN).

The practical effect is that most pairs have a value above 1, which makes them easier to read. The ECB follows its own logic: every reference rate is units of currency per one euro, so all of its rates are EUR/xxx.

## Direct and indirect quotes

Seen from a particular country, a quote is **direct** when the foreign currency is the base (in the US, EUR/USD 1.1208 tells an American what one euro costs in dollars) and **indirect** when the home currency is the base (USD/EUR 0.8922 tells the same person how many euros a dollar buys). They contain the same information: one is the reciprocal of the other, 1 ÷ 1.1208 = 0.8922. Every pair page on this site shows both directions.

## Pips and decimals

Traders count small moves in **pips**. For most pairs a pip is the fourth decimal place, 0.0001; for pairs quoted in yen it is the second, 0.01, because the numbers are larger. EUR/USD moving from 1.1208 to 1.1218 is a 10-pip rise; USD/JPY moving from 157.97 to 158.47 is 50 pips.

Pips are a dealing convention. For comparing moves across pairs, percentages are clearer: 10 pips is about 0.09% of EUR/USD, while 50 pips of USD/JPY is about 0.32%. That is why the boards on this site show changes in percent.

## Bid, ask and spread

A dealer quotes two prices. The **bid** is what the dealer pays for the base currency; the **ask** (or offer) is what the dealer charges. The ask is always higher, and the gap — the **spread** — is part of the dealer’s compensation. Between banks in a busy pair the spread is tiny; at an airport kiosk it can be several percent.

A reference rate is a single number with no spread. It is useful as a neutral middle point for comparing quotes, but you cannot deal at it. See [ECB reference rates explained](/guides/ecb-reference-rates-explained/).

## Pair nicknames

Market slang gives some pairs nicknames. GBP/USD is “cable”, after the transatlantic telegraph cable once used to transmit the rate. EUR/USD is sometimes called “fiber”, AUD/USD the “aussie”, NZD/USD the “kiwi”, USD/CAD the “loonie” (after the loon on the Canadian one-dollar coin) and USD/CHF the “swissie”. They are harmless jargon; this site uses codes.

## Which pairs matter most

The Bank for International Settlements surveys global currency trading every three years. Its 2022 survey put average turnover at 7.5 trillion US dollars a day in April 2022 and found the dollar on one side of 88% of all trades and the euro, the second most traded currency, on one side of about 31%. That dominance is why many people think about exchange rates against the dollar, even when the ECB publishes everything against the euro.

## Reading a historical quote

Old quotes need a date and a source to be meaningful. “EUR/USD was 0.9565” is ambiguous; “the ECB reference rate for EUR/USD was 0.9565 on 28 September 2022” is a checkable fact, and one of the lowest fixings in this site’s record since 2016. Each [pair page](/fx/eur-usd/) lists the yearly highs and lows with their dates so you can cite them precisely.
