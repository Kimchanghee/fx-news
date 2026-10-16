---
title: "What do commodity price units mean?"
seoTitle: "Commodity Price Units: Barrels, Tons and Troy Ounces"
description: "Understand barrels, metric tons, troy ounces and energy units in commodity quotations, with worked conversions and the limits of comparing different benchmarks."
question: "What do commodity price units mean?"
answer: "Commodity prices pair a currency with a quantity unit. Oil uses volume, industrial metals often use mass, and natural gas commonly uses energy. Convert the denominator before comparing figures, but retain each benchmark grade, delivery convention and observation period."
shelf: "Commodities"
datePublished: "2026-10-16"
updated: "2026-10-16"
data_asof: "2026-10-16; worked arithmetic examples are hypothetical"
sources: [{"name":"World Bank Commodity Markets","url":"https://www.worldbank.org/en/research/commodity-markets"},{"name":"NIST SI Units - Mass","url":"https://www.nist.gov/pml/owm/si-units-mass"},{"name":"NIST Precious Metal Conversion Factors","url":"https://www.nist.gov/document/precious-metals-conversion-information-march2015pdf"},{"name":"EIA British thermal units","url":"https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php"},{"name":"EIA barrel definition","url":"https://www.eia.gov/tools/faqs/faq.php?id=327&t=10"}]
faq: []
related: ["world-bank-pink-sheet-explained","ecb-reference-rates-explained"]
pages: []
---
## Why is the denominator part of the price?
One dollar per kilogram and one dollar per metric ton are very different prices. The denominator says how much material or energy the numerator buys. A price copied without its unit is therefore incomplete. The [commodity board](/commodities/) retains the units supplied in the World Bank workbook. Those labels should accompany numbers copied into spreadsheets, reports and charts rather than being left behind on the source page.

A unit conversion rescales a quantity. It does not transform a wholesale benchmark into a retail offer, erase freight costs or match a different grade. First identify what is being priced, then decide whether conversion creates a useful comparison. Perfect arithmetic on incompatible benchmarks still produces a misleading commercial interpretation. The source definition is part of the data, not optional background reading.

## How do kilograms and metric tons compare?
A metric ton, or tonne, contains 1,000 kilograms. Divide dollars per metric ton by 1,000 to obtain dollars per kilogram. A hypothetical quotation of 8,000 dollars per metric ton is eight dollars per kilogram. Reverse the calculation by multiplying by 1,000. These figures illustrate unit arithmetic, not current copper prices. The total cost of a fixed quantity should remain unchanged after conversion.

The unqualified word ton needs care. Regional ton conventions are not interchangeable with the metric ton. Do not select a conversion factor until the source denominator is identified. The [copper history](/commodities/copper/) uses the workbook's unit without substituting regional terminology. This becomes especially important when combining spreadsheets from publishers in different countries.

## Why is a troy ounce different?
Precious metals commonly use the troy ounce, approximately 31.1035 grams. Do not substitute an ordinary avoirdupois ounce for the troy unit. Dividing a dollar-per-troy-ounce quotation by 31.1035 produces an approximate dollar-per-gram quotation for the same reference material. A hypothetical price of 3,110.35 dollars per troy ounce becomes 100 dollars per gram. Using the ordinary ounce would produce the wrong conversion.

That calculation says nothing about jewellery purity, workmanship, margins or resale spreads. A gram of an alloy is not necessarily a gram of pure gold. A small physical bar may carry different costs from a large wholesale reference quantity. The [gold history](/commodities/gold/) is a benchmark series, not an offer for a particular product. More decimal places do not remove these commercial distinctions.

## Can barrels be converted directly into tons?
The EIA describes a crude-oil barrel as 42 gallons. Barrels measure volume; metric tons measure mass. Converting between them requires density, which varies across crude grades and measurement conditions. A universal barrels-per-ton multiplier is unsuitable for a precise comparison of all oils. If using an approximation, state the density assumption and retain enough information for another reader to reproduce it.

Even after conversion, Brent, WTI and Dubai remain different benchmarks with different qualities and market conventions. Their spread is not automatically an arbitrage profit. Freight, financing, quality adjustments and contract terms can exceed the rounding difference in a unit calculation. The [oil benchmark guide](/guides/brent-wti-dubai-oil-benchmarks/) describes those distinctions without presenting historical price differences as a trading recommendation.

## Why does natural gas use energy units?
Gas quotations often use dollars per million British thermal units, abbreviated MMBtu. This measures energy rather than simply volume. Equal volumes of gas with different compositions need not contain equal energy. Converting a volume quotation to an energy quotation requires an appropriate calorific value and specified measurement conditions. Without them, a neat-looking comparison can be materially inaccurate even if the exchange-rate conversion is correct.

The saved World Bank gas columns use $/mmbtu. This label is not a claim that every European exchange contract uses that quotation convention. Comparing a quotation in another energy unit or currency requires the relevant energy and currency conversions over compatible periods. Document the two operations separately. A monthly gas average translated at one unrelated day's currency rate is an approximation with a specific timing assumption, not an exact reconstruction of all transactions during the month. The distinction should be visible beside the result.

## What is a dependable conversion workflow?
Write the original benchmark, month, currency and unit beside the value. Write the target unit underneath. Use dimensional cancellation: dollars per metric ton multiplied by one metric ton per 1,000 kilograms leaves dollars per kilogram. Check direction intuitively: the cost of a smaller quantity should be smaller. Preserve extra calculation precision, then round the displayed result according to the accuracy of the inputs.

Finally identify what conversion did not accomplish: it did not equalise grade, location, maturity or frequency. The [Pink Sheet guide](/guides/world-bank-pink-sheet-explained/) and [methodology](/methodology/) explain the remaining boundaries. When a needed input is absent, leave the comparison unavailable instead of inventing density, purity or timing. A transparent calculation with explicit limits is more useful than a highly precise number whose essential assumptions cannot be recovered.