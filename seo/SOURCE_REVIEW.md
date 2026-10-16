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

## Targeted closure after 7b0dbf0 (2026-10-16)
Earlier review entries are preserved as history. Original snapshot metadata, refresh parser, initial snapshot commit 6e24fa5 and PROGRESS provenance were inspected. No numeric snapshot was refreshed or relabelled hypothetical. Historical guide examples now link to the immutable saved provider-derived JSON at 7b0dbf0, which preserves provider API/workbook URL and retrieval timestamp; these are normalized data, not raw CSV/XLSX bytes.

New original evidence:
- HMRC https://www.gov.uk/guidance/foreign-currency-transactions-vat-and-tour-operators directly inspected: VAT allows market selling rate at supply or HMRC period rate (usually monthly, possible adjustments); alternate method needs approval; no forwards. Corrected mandatory-HMRC-only claim.
- IAS21 landing directly inspected, but lacks paragraphs 21–22; omitted optional paragraph claims. EUR-Lex Article91 fetch empty; omitted EU claim/FAQ, not represented as verified.
- OANDA https://www.oanda.com/us-en/skills-and-insights/education/introduction-trading/basics/what-is-a-pip/ directly inspected: ordinary fourth-decimal pip, second-decimal JPY and 1/10 fractional pip. Corrected smallest-increment language. CME attempt 403.
- EIA https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php directly inspected: Btu energy content and composition-dependent conversion factors. Saved WB gas columns all $/mmbtu. Removed unreviewed European exchange EUR/MWh claim; no contract-specification claim inferred from workbook units.
- ECB https://www.ecb.europa.eu/ecb/contacts/working-hours/html/index.en.html directly inspected starred TARGET holidays for 2026–2028. 2025 Christmas example checked separately against saved array.
- Fed original https://fredblog.stlouisfed.org/2024/09/adjusting-dollar-figures-for-inflation-with-fred/ complete explanatory passage returned by search: (a/b)*100 after rebasing CPI; reference-period change does not change growth. Direct-fetch attempts reset; not represented as direct-fetch success. BLS failure is not a blocker to this independently supported method.
- Gregory Gundersen https://gregorygundersen.com/blog/2022/02/06/log-returns/ direct full body: equations 1,6,12,17–19 support simple/log returns, telescoping, exponential inverse, small-change approximation. Only those identities reused, not stock examples or distribution claims.
- Prior properly inspected ECB/BIS/IRS/WB/NIST/EIA evidence remains reusable in its stated scope.

Per-guide factual dispositions (not technical/deployment approval):
SOURCE-READY /guides/ecb-reference-rates-explained/: prior procedure + new holiday original; 2026-10-15 and 2025-12-24 saved values reconciled. Removed unproven scheduled-refresh execution claim.
SOURCE-READY /guides/how-to-calculate-a-cross-rate/: all dated USD/JPY/GBP/CHF inputs and arithmetic reconciled. Removed unsupported all-history-pound assertion, precision guarantee and universal cross-spread comparison.
SOURCE-READY /guides/how-to-read-a-currency-quote/: saved dated values, prior ISO/BIS and direct OANDA. Removed optional nickname/hierarchy/spread generalisations.
SOURCE-READY /guides/which-exchange-rate-to-use-for-past-transactions/: prior IRS, corrected HMRC VAT, saved invoice example. IAS21/EU optional interpretations removed, not approved.
SOURCE-READY /guides/commodity-price-units-explained/: earlier NIST/EIA constants + new Btu original and saved gas unit labels; hypothetical arithmetic preserved; no universal gas-volume factor or exchange contract claim.
SOURCE-READY /guides/monthly-average-vs-daily-price/: hypothetical arithmetic and missing-date selection supported; exact workbook weighting is explicitly not asserted. No invented weighting input needs verification.
SOURCE-READY /guides/nominal-vs-real-commodity-prices/: inspected Fed method passage and hypothetical deflator arithmetic; no unavailable historical deflator invented.
SOURCE-READY /guides/percent-change-vs-log-returns/: direct method source and algebra tests; volatility remains explicitly this site's descriptive scaling convention, not a forecast.
HOLD /guides/world-bank-pink-sheet-explained/: numerical examples bind to saved data; pink-paper origin omitted, licence exceptions fixed. Actual remaining gaps: Description-sheet evidence for gold June2025/gas April2015/iron-ore breaks, LNG import-unit-value/estimate claims, exact sheet/history assertions and separate negative daily WTI futures claim. Saved price JSON does not contain those Description rows.
HOLD /guides/brent-wti-dubai-oil-benchmarks/: latest values reconciled; exact API grades/location/use and quality interpretation still require benchmark originals, multi-year counts/extrema require full saved-array assertion report. Optional unsupported litre conversion removed. General EIA oil text is not full benchmark evidence.

Global technical HOLD is unchanged: numeric overflow hardening, complete browser form-edge tests, final rendered QA and HTTP404 verification remain as listed in PROGRESS. Eight factually ready routes are NOT eight deployable routes while shared blockers persist. Both held guides remain in build/discovery; no selective deployment exclusion added. No deployment/accounts. Math and gate unchanged.

## Final two-guide closure (2026-10-16)
The eight SOURCE-READY guides above are preserved unchanged. The two remaining guides are now SOURCE-READY within their narrowed scope:
- Pink Sheet: removed optional full-workbook sheet/history, series-break, LNG estimate/import-value, daily negative futures and exact weighting assertions. Retained figures bind to the unchanged normalized workbook extract and importer, not a claimed raw-XLSX re-download. All retained numeric claims are asserted in tests/launch.test.mjs.
- Brent/WTI/Dubai: removed unsupported exact grades, delivery-market prescriptions and causal claims. Directly inspected https://www.eia.gov/todayinenergy/detail.php?id=7110 for density, sulfur, API direction and general refining relationship. Retained 321-month counts/maxima and dated numbers reconciled over the full saved arrays, with a SHA256 receipt in source-reconciliation.json. Corrected September-versus-April maximum ambiguity: April 2026 is the Brent/Dubai maximum.
- Existing source JSON and the eight earlier closed guide files remain byte-unchanged. No unsupported filler or lower factual gate; narrower claims replace missing evidence. Technical launch approval depends on fresh final check/build/gate/test and browser receipts, recorded separately in PROGRESS.
