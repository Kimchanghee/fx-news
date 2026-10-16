import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import * as c from '../src/lib/calc.mjs';
const bytes=readFileSync('src/data/commodities.json'), d=JSON.parse(bytes);
const values=n=>d.series[n].values;
const B=values('Crude oil, Brent'),W=values('Crude oil, WTI'),D=values('Crude oil, Dubai');
const bw=B.map((v,i)=>v-W[i]),bd=B.map((v,i)=>v-D[i]);
const round=v=>Number(v.toFixed(1));
test('complete saved oil arrays and retained guide claims reconcile',()=>{
assert.equal(d.months.length,321);assert.equal(d.months[0],'2000-01');assert.equal(d.months.at(-1),'2026-09');
for(const a of [B,W,D]){assert.equal(a.length,321);assert.ok(a.every(Number.isFinite));}
assert.equal(bw.filter(v=>v<0).length,109);
assert.equal(round(Math.max(...bw)),25.3);assert.equal(d.months[bw.indexOf(Math.max(...bw))],'2011-09');
assert.equal(round(Math.max(...bd)),27.7);assert.equal(d.months[bd.indexOf(Math.max(...bd))],'2026-04');
assert.deepEqual([B.at(-1),W.at(-1),D.at(-1)],[116.8,96.9,93.3]);
assert.equal(round(bw.at(-1)),19.9);assert.equal(round(bd.at(-1)),23.5);assert.equal(round(bw.at(-1)/W.at(-1)*100),20.5);
assert.equal(B[d.months.indexOf('2026-04')],120.4);assert.equal(D[d.months.indexOf('2026-04')],92.7);
assert.equal(B.at(-2),90.9);assert.equal(round(c.pctChange(B.at(-2),B.at(-1))),28.5);
assert.equal(values('Gold')[0],284);assert.equal(values('Gold').at(-1),4319);assert.equal(round(4319/284),15.2);assert.equal(values('Copper').at(-1),14474);
assert.equal(Object.keys(d.series).length,22);
writeFileSync('seo/evidence/source-reconciliation.json',JSON.stringify({snapshotSHA256:createHash('sha256').update(bytes).digest('hex'),source:d.fileUrl,retrieved:d.asOf,months:321,wtiAboveBrent:109,maxBrentWTI:{month:'2011-09',spread:25.3},maxBrentDubai:{month:'2026-04',spread:27.7},scope:'All retained numeric claims in the two formerly held guides; normalized saved source, not raw workbook re-download'},null,2));
});
test('numeric overflow cannot escape shared helpers',()=>{
assert.equal(c.pctChange(1e-308,1e308),null);assert.equal(c.cagr(1,1e308,.01),null);assert.equal(c.convert(1e308,1,2),null);assert.equal(c.crossRate(1e-308,1e308),null);assert.equal(c.crossRate(1e308,1e-308),null);assert.equal(c.applyPct(1e308,100),null);assert.equal(c.stdev([1e308,-1e308]),null);assert.equal(c.annualisedVol([1,2],-1),null);assert.ok(Number.isFinite(c.logReturn(1e-308,1e308)));
});
