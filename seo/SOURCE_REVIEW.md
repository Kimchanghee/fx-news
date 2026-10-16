# Bounded source review, 2026-10-16

This is not a ten-guide editorial signoff. Primary pages were fetched and their returned bodies inspected in this pass. Existing numerical snapshots were preserved, not refreshed or independently re-downloaded.

## Sources actually inspected
- ECB reference-rate page: confirms around 14:10 CET concertation, around 16:00 CET publication, TARGET exceptions, euro base, informational-only use and last RUB publication on 1 March 2022. Current returned page is 16 October; it does not independently prove the guides' 15 October values. https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html
- World Bank commodity markets: inspected October 2026 monthly workbook link and linked terms. https://www.worldbank.org/en/research/commodity-markets
- World Bank summary terms: CC BY 4.0 default, attribution, additional terms and third-party exceptions. Blanket reuse statements must retain those qualifications. https://data.worldbank.org/summary-terms-of-use
- EIA oil-price explainer: supply/demand, disruption, spot/futures definitions. Does NOT substantiate all Brent/WTI/Dubai quality/location details. Corrected the false attribution in that guide. https://www.eia.gov/energyexplained/oil-and-petroleum-products/prices-and-outlook.php
- IRS foreign-currency page: functional-currency rule and prevailing receipt/payment/accrual rate, payment-date exception. https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates
- ISO 4217 returned opening: alphabetic/numeric currency codes confirmed; full standard not reviewed. https://www.iso.org/iso-4217-currency-codes.html
- BIS 2022 FX survey: dated 7.5 trillion/day, dollar 88%, and methodology actually read. Historical 2022 findings, not current market shares. https://www.bis.org/statistics/rpfx22.htm
- BLS CPI questions and answers returned HTTP 403. NOT verified. https://www.bls.gov/cpi/questions-and-answers.htm

## Per-guide disposition
- ecb-reference-rates-explained: procedure supported; historical numbers and calendar details remain to reconcile against the exact archive.
- how-to-calculate-a-cross-rate: arithmetic tested locally; euro quote convention supported; historical input dates not independently verified this pass.
- how-to-read-a-currency-quote: ISO opening and BIS historical findings checked; pip/dealer conventions need a direct authoritative source.
- which-exchange-rate-to-use-for-past-transactions: IRS subset checked; IAS 21, EU VAT and HMRC claims still require original-text review.
- world-bank-pink-sheet-explained: current workbook discovery and conditional default licence checked; workbook metadata/history/print-origin claim not signed off.
- brent-wti-dubai-oil-benchmarks: EIA attribution corrected; exact grades, all historical spread statistics and causal statements remain pending workbook/source reconciliation.
- commodity-price-units-explained: arithmetic spot checks pass; BLS is irrelevant to unit constants. Replace with authoritative metrology citations and inspect them.
- monthly-average-vs-daily-price: averaging example tested; workbook-specific weighting definitions remain pending. Remove irrelevant BLS citation in editorial follow-up.
- nominal-vs-real-commodity-prices: deflator arithmetic tested; BLS request blocked, so source review incomplete.
- percent-change-vs-log-returns: algebra covered by local tests; current generic WB/BLS citations do not substantiate the mathematical method. Add a relevant method source.

Release status: HOLD for editorial/source completion. Link availability and test passes are not factual approval.

## Follow-up primary-source inspection (2026-10-16)
- Direct NIST SI Units - Mass body: 1000 kg = one metric ton. https://www.nist.gov/pml/owm/si-units-mass
- Downloaded and extracted entire one-page NIST precious-metal PDF: 1 troy ounce = 31.1034768 g; divide price per troy ounce by that factor for price per gram. https://www.nist.gov/document/precious-metals-conversion-information-march2015pdf
- Direct EIA FAQ body: one crude barrel is 42 gallons. https://www.eia.gov/tools/faqs/faq.php?id=327&t=10
- Unit guide now cites those originals; omitted unreviewed short-ton/ordinary-ounce/litre constants. Monthly guide irrelevant BLS citation and unreviewed import-unit-value aside removed.
- Gas energy-unit and benchmark conventions still need direct review. BLS retry remains HTTP 403. Failed NIST appendix URL returned not-found, not verification.
- ALL TEN guide routes remain HOLD for the remaining per-guide gaps above. No full release clearance.
