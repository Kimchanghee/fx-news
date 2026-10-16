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
