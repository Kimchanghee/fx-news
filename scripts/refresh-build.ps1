$ErrorActionPreference = 'Stop'
$env:ASTRO_TELEMETRY_DISABLED = '1'
Set-Location $PSScriptRoot/..
node scripts/refresh.mjs
if ($LASTEXITCODE -ne 0) { throw 'Source refresh failed; retained last-good snapshots. Review before building.' }
node scripts/og.mjs
if ($LASTEXITCODE -ne 0) { throw 'OG generation failed' }
node node_modules/astro/astro.js build
if ($LASTEXITCODE -ne 0) { throw 'Build failed' }
node scripts/gate.mjs
if ($LASTEXITCODE -ne 0) { throw 'Static gate failed' }
node node_modules/astro/astro.js check
if ($LASTEXITCODE -ne 0) { throw 'Astro check failed' }
node --test tests/calc.test.mjs
if ($LASTEXITCODE -ne 0) { throw 'Tests failed' }
