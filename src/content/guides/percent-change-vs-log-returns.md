---
title: "How do percentage changes and log returns differ?"
seoTitle: "Percent Change vs Log Returns: Formulas and Examples"
description: "Compare percentage changes and log returns using worked examples, compounding and loss recovery, with clear limits for zero, negative and missing observations."
question: "How do percentage changes and log returns differ?"
answer: "A simple percentage change compares the difference with the starting value. A log return takes the natural logarithm of the ending-to-starting ratio. Simple changes communicate relative gains and losses; log returns add across consecutive periods when both prices are strictly positive."
shelf: "Method"
datePublished: "2026-10-16"
updated: "2026-10-16"
data_asof: "2026-10-16; worked arithmetic examples are hypothetical"
sources: [{"name":"Gregory Gundersen — Returns and Log Returns, equations 1, 6, 12, 17–19","url":"https://gregorygundersen.com/blog/2022/02/06/log-returns/"}]
faq: []
related: ["world-bank-pink-sheet-explained","ecb-reference-rates-explained"]
pages: []
---
## What does an ordinary percentage change mean?
Subtract the old value from the new value, divide by the old value and multiply by 100. A hypothetical rise from 100 to 120 is twenty percent. Reversing the journey changes the denominator: moving from 120 back to 100 is approximately minus 16.67 percent. These are arithmetic examples rather than market observations. Neither result contradicts the other because each answers a different starting-point question.

The [percent change calculator](/tools/percent-change/) shows both the forward change and the reverse move required to return to the starting value. Name the observation dates with every quoted change. A percentage without a window can conceal a selectively chosen comparison point. The [currency board](/fx/) supplies dated reference observations rather than undated claims that a currency is simply up or down.

## What changes when you take logarithms?
The log return is the natural logarithm of the ratio of two positive prices, multiplied by 100 for display. For 100 to 120 it is approximately 18.23 percent. The reverse move is approximately minus 18.23 percent because the logarithm of a reciprocal changes sign. This symmetry is useful in statistical calculations but does not make the ordinary gain 18.23 percent: that gain remains twenty percent.

Small simple changes and log returns are numerically similar. Larger moves reveal the distinction. Do not substitute one into the other's label, or change conventions merely because one makes a loss appear less severe. A reader should be able to reproduce the formula from the accompanying explanation rather than infer which convention a chart designer selected.

## Why do log returns add through time?
Suppose a hypothetical price moves from 100 to 110, then to 121. Each ordinary gain is ten percent, but the cumulative gain is twenty-one percent. Multiplication gives the answer: 1.1 times 1.1 equals 1.21. Adding the ordinary percentages omits the gain on the first period's increase. This compounding issue also appears in interest calculations and cannot be removed by relabelling a total.

Logarithms convert multiplication into addition. The log of 1.1 plus the log of 1.1 equals the log of 1.21. Adjacent log returns therefore sum to the endpoint log return if the observations are positive and coherent. Convert back with the exponential function before reporting the cumulative ordinary percentage change. This identity is a mathematical convenience, not an additional investment return.

## Why does a fifty percent loss need a hundred percent recovery?
Starting at 100, a fifty percent loss leaves 50. Returning to 100 requires an increase of 50 on a base of 50: one hundred percent. For a fractional loss L below one, the required recovery is L divided by one minus L. As the loss approaches complete loss, the required recovery grows increasingly large. At zero there is no positive starting base for the usual percentage-return calculation.

This describes scale, not likelihood. It does not forecast recovery or recommend buying after a decline. The [commodity histories](/commodities/) record reference observations rather than executable investment returns. They do not include every fee, financing charge, storage cost or contract-roll effect that may separate a benchmark from a particular investment's outcome.

## What happens with zero or negative values?
A percentage change from zero is undefined because it divides by zero. Real-valued log returns require both prices to be strictly positive. A series crossing zero needs another explanation, often an absolute difference accompanied by the instrument definition. Replacing zero with an arbitrary tiny value invents an input and makes the apparent return depend on that invention.

For a negative starting input, this site's simple-change tool uses the absolute starting magnitude as denominator and labels that convention. It is not the standard positive-price investment return. Logarithmic and compound-growth results remain unavailable when their positive-value assumptions fail. An explicit unavailable state is preferable to a precise-looking number obtained outside the formula's mathematical domain.

## How does volatility differ from annual growth?
Historical volatility here uses the sample standard deviation of log changes, scaled by the square root of an assumed number of periods per year. This is a descriptive convention, not a forecast or a guaranteed risk bound. Observation frequency and window matter. Daily ECB references and monthly commodity averages are not interchangeable measurements of intraday trading risk.

Compound annual growth uses only endpoints: ending divided by starting, raised to one divided by years, minus one. It does not reveal drawdowns or path consistency. Read the [methodology](/methodology/) before comparing measures. Report the formula, dates, frequency and source, while preserving the difference between a measured past change and an uncertain future outcome. No transformation of a historical series makes a future return certain.