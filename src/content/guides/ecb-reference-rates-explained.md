---
title: "ECB euro reference rates explained"
seoTitle: "ECB Euro Reference Rates Explained: How They Are Set and Used"
description: "Learn how ECB euro reference exchange rates are set and published, which currencies they cover, and why these daily observations are not bank dealing rates."
question: "What are the ECB euro reference rates?"
answer: "The ECB euro reference rates are daily exchange rates for about 30 currencies against the euro, fixed at a concertation between central banks around 14:10 CET and published around 16:00 CET on TARGET business days. The ECB publishes them for information only and discourages their use for transactions."
shelf: "Currencies"
datePublished: 2026-10-16
updated: 2026-10-16
data_asof: "ECB fixing of 15 Oct 2026"
sources:
  - name: "European Central Bank — Euro foreign exchange reference rates"
    url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
  - name: "European Central Bank — Working hours and TARGET closing days"
    url: "https://www.ecb.europa.eu/ecb/contacts/working-hours/html/index.en.html"
  - name: "ECB Data Portal — Exchange rates (EXR) dataset"
    url: "https://data.ecb.europa.eu/data/datasets/EXR"
faq:
  - q: "What time are ECB reference rates published?"
    a: "The rates are based on a concertation that normally takes place around 14:10 CET and are usually published around 16:00 CET on every working day except TARGET closing days."
  - q: "Can I use the ECB reference rate to exchange money?"
    a: "No bank is obliged to deal at the reference rate, and the ECB states that using the rates for transaction purposes is strongly discouraged. Your provider applies its own rate and fees."
  - q: "Why is there no ECB rate for the Russian rouble?"
    a: "The ECB suspended the EUR/RUB reference rate because it could not set a rate representative of market conditions. The last one was published on 1 March 2022."
related: ["how-to-calculate-a-cross-rate", "which-exchange-rate-to-use-for-past-transactions", "how-to-read-a-currency-quote"]
pages: ["fx/eur-usd", "fx/eur-gbp", "fx/eur-jpy", "fx/eur-chf"]
---

## What the reference rates are

Every working day the European Central Bank (ECB) publishes a short table: how many units of each of about thirty currencies one euro was worth. On 15 October 2026 the table began with 1.1208 US dollars, 177.06 Japanese yen and 0.84610 pounds sterling per euro, and ran through to 18.5569 South African rand. These are the **euro foreign exchange reference rates**, and they are the backbone of this site’s [currency board](/fx/).

The rates are not traded prices. They are a snapshot agreed between central banks. According to the ECB, they are “based on the daily concertation procedure between central banks across Europe, which normally takes place around 14:10 CET”, and they are “usually updated at around 16:00 CET every working day, except on TARGET closing days”.

## How a fixing is produced

The concertation is a brief exchange between the ECB and other central banks in and around Europe, each reporting market rates they observe at the agreed moment. The result is one number per currency, quoted as units of that currency per one euro. The euro is always the base: the ECB does not publish a dollar–yen or sterling–dollar rate. Those pairs have to be derived as cross rates, which is what this site does for pairs such as [USD/JPY](/fx/usd-jpy/) and [GBP/USD](/fx/gbp-usd/). The arithmetic is explained in [how to calculate a cross rate](/guides/how-to-calculate-a-cross-rate/).

Because every currency in the table is captured at the same moment, the set is internally consistent. That is valuable when you need to convert between several currencies on the same date and want the results to agree with each other.

## When there is no rate

There is a reference rate only on days the ECB publishes one. Weekends have no fixing, and neither do **TARGET closing days** — the days the euro area’s large-value payment system is shut. These are New Year’s Day, Good Friday, Easter Monday, 1 May, Christmas Day and 26 December. In the data used on this site, Christmas Day 2025 has no fixing; the last rate before it is from 24 December 2025, when one euro was worth 1.1787 US dollars.

When you ask the [historical converter](/tools/historical-converter/) for a date with no fixing, it uses the most recent earlier fixing and tells you which date it used. That is the usual convention, but check whether a particular authority wants the previous or the following business day.

The table can also lose a currency. On its reference-rate page the ECB explains that it suspended the euro reference rate for the Russian rouble because it was “not in a position to set a reference rate that is representative of prevailing market conditions”; the last EUR/RUB rate was published on 1 March 2022. Currencies are also removed when a country adopts the euro.

## What they are for, and what they are not for

The ECB is explicit: “The reference rates are published for information purposes only. Using the rates for transaction purposes is strongly discouraged.” They are widely used as a neutral, published benchmark — for statistics, for converting historical figures, in some contracts, and by some public authorities as an accepted conversion rate (see [which exchange rate to use for past transactions](/guides/which-exchange-rate-to-use-for-past-transactions/)). They are not the rate at which you can buy or sell currency.

Three differences matter in practice:

1. **Timing.** A reference rate captures one moment in the early afternoon in Frankfurt. Currency markets trade around the clock on weekdays, so a rate quoted at 9:00 in Tokyo or 17:00 in New York can be quite different.
2. **No spread.** A dealer quotes two prices, a lower one at which it buys and a higher one at which it sells. The reference rate is a single mid-level figure with no spread built in.
3. **No fees.** Retail providers add margins and fees. A reference rate shows none of that, so it is a fair yardstick for judging a quote but never a promise.

## Reading the numbers

Each figure is “units of foreign currency per one euro”. A higher number means the euro buys more of that currency, so the euro is stronger against it. When EUR/USD rises from 1.10 to 1.12, the euro has gained against the dollar. For pairs where the euro is the second currency the logic flips; the [currency quote guide](/guides/how-to-read-a-currency-quote/) covers base and quote currencies in detail.

The ECB rounds rates to a fixed number of digits per currency — four decimals for the dollar, two for the yen, five for sterling in the table above. This site keeps the published values unchanged for direct euro pairs and shows crosses with enough digits to reproduce them.

## How this site uses them

The [methodology](/methodology/) page lists the exact request: the ECB Data Portal’s EXR dataset, daily frequency, series type SP00, variation A, for 24 currencies since 1 January 2016. A scheduled refresh downloads the full history again each time, so if the ECB were to correct a value the correction would flow through. If the download fails, the previous snapshot stays in place and every page keeps showing its real retrieval date rather than pretending to be current.

From these figures each pair page computes its 52-week range, yearly highs and lows, annualised volatility and largest daily moves. None of those statistics are published by the ECB; they are calculated here, and the formulas are on the methodology page so you can reproduce them.

## A note on precision

Reference rates are rounded and captured once a day, so tiny differences between this site and another source are normal: a market data vendor may show a 16:00 London rate, a bank may show its own mid-rate, and a newspaper may print the previous evening’s close. When you cite a figure, cite the source and the date — “ECB reference rate, 15 October 2026” — and the number becomes checkable by anyone.
