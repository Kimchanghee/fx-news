# PROGRESS — forexcommoditynews.online (v2-cloudflare-static)

Resume from here after any host restart. Update after every milestone.

## Milestones
- [x] M0 Branch v2-cloudflare-static created; old AI news app removed (commit "Remove old AI news app for v2 static rebuild"); pushed.
- [ ] M1 Astro 5 scaffold + site.config + refresh script + real data snapshot committed
- [ ] M2 Core pages (home, data pages, legal, about, methodology) build clean
- [ ] M3 Guides (>=10), feed, sitemap, llms.txt, OG images
- [ ] M4 gate.mjs passes, astro check clean, tests pass
- [ ] M5 QA: curl crawler checks, Playwright screenshots 1440/390, scorecard after
- [ ] M6 Final report

## Notes

## Resume checkpoint 2026-10-16
- Preserved prior dirty Brent/WTI/Dubai and Pink Sheet manuscripts; committed with four new guides in 9588d2d. Total: 10 guide files. Fixed two obsolete Pink Sheet links.
- New guide bodies: 760–788 words plus direct answers; source/editorial review still needed. Four new descriptions currently duplicate and must be made unique.
- QA incomplete: OG generation produced 60 cards. Direct Astro build generated types and client bundles but route generation was interrupted by tool timeouts/server restarts; no full build pass claimed.
- Known metadata blockers: several existing descriptions exceed 160 characters; Pink Sheet SEO title exceeds 60. Check every guide before next build. One ECB title repair was saved after the milestone.
- Missing deliverables: gate.mjs, tests, refresh-build.ps1, DESIGN_REFERENCES.md, content/backlog.md, SEO scorecard and measurement plan. Need full astro check, crawler HTTP/404 checks, tool edge cases, and 1440/390 screenshots with overflow/focus review.
- Existing snapshot: ECB latest 2026-10-15; World Bank through 2026-09, workbook updated 2026-10-02; retrieved 2026-10-16 UTC. No deployment or account work performed.
- Final safety reconciliation: restored ECB manuscript from pre-interruption commit after detecting an interrupted zero-byte write; ads default off and privacy no longer claims an installed CMP. Metadata and QA gaps above remain.

## Bounded final pass 2026-10-16
- Unique compliant descriptions for all ten guides; repaired missing related guide; strict metadata bypass removed; unsupported EIA attribution corrected.
- Direct Astro build completed 66 pages. Direct Astro check: 0 errors/warnings/hints. ASTRO_TELEMETRY_DISABLED=1. Static gate: 66 pages, zero errors. Five calculation tests pass. Evidence logs retained under seo/evidence.
- SOURCE_REVIEW.md gives actual primary-source checks and per-guide gaps. Ten-guide editorial signoff remains BLOCKED. BLS returned 403. ECB last-good and commodity snapshots unchanged.
- Added gate/tests, refresh-build wrapper (not executed), SEO scorecard/measurement plan, design rationale and backlog.
- Installed msedge QA attempted; host restarts/timeouts prevented confirmed completion. Do not accept stale screenshots/report as fresh visual approval. Mobile/desktop visual review and browser form edge tests remain BLOCKED.
- No deployment/accounts. Ads remain disabled, no installed CMP claimed. Numeric overflow hardening remains pending.

## Final bounded handoff 2026-10-16
- Stale index.lock quarantined only after no git processes and successful exclusive open. No live lock deleted.
- Same-process local Astro preview and installed msedge completed 16 layout checks: 8 routes at 1440/390 CSS widths, all HTTP 200, zero document overflow, sampled CLS 0, focused link solid 3px outline. Report retained in seo/evidence/edge-layout-report.json; screenshots under ignored qa/shots. Homepage desktop/mobile inspected visually. This is not exhaustive route or form-edge approval.
- QA covered the prior built content; final source-citation omissions were made afterward. Final rebuild attempt was interrupted by host restart. Earlier direct build/check/gate/test results remain dated evidence, not a claim of validating all final source edits.
- Direct NIST PDF/mass and EIA source checks narrowed unit claims. All ten guides remain release HOLD for SOURCE_REVIEW gaps. Numeric overflow hardening, complete browser form tests, final rebuilt render QA and final HTTP 404 check remain open.
- ECB last-good/data snapshots unchanged. No deploy/accounts. Ads remain disabled; corrected misleading footer advertising claim.

## Targeted factual closure after 7b0dbf0
- SOURCE_REVIEW history preserved and per-route updated: 8 source-ready guide routes; Pink Sheet and Brent/WTI/Dubai retain specific content holds (not blanket re-audit).
- Historical figures linked to immutable saved normalized provider snapshots; exact ECB examples reconciled. No data refresh or historical-to-hypothetical relabelling.
- HMRC VAT corrected; unsupported optional IAS21/EU, nicknames, pip-minimum, precision/spread and print-origin claims removed/narrowed. Direct OANDA/EIA/ECB and inspected Fed/method originals recorded.
- Fresh direct Astro build: 66 pages; static gate zero errors; 7 calculation/source-example tests pass. Math library and gate unchanged. Source-followup evidence logs retained.
- These are factual corrections, not production readiness: shared numeric overflow/form-edge/rendered/HTTP404 blockers persist; 2 held guides remain in build/discovery. No deploy/accounts. Previous logs remain historical evidence.
