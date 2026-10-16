import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {crossRate,logReturn,pctChange} from '../src/lib/calc.mjs';
const fx=JSON.parse(readFileSync(new URL('../src/data/fx.json',import.meta.url)));
const at=(d,c)=>fx.series[c][fx.dates.indexOf(d)];
test('guide examples bind to dated saved ECB snapshot',()=>{
for(const [c,v] of Object.entries({USD:1.1208,JPY:177.06,GBP:.8461,CHF:.9305,ZAR:18.5569}))assert.equal(at('2026-10-15',c),v);
assert.equal(at('2025-12-24','USD'),1.1787);assert.equal(fx.dates.includes('2025-12-25'),false);assert.equal(at('2022-09-28','USD'),.9565);
assert.equal((1000/at('2025-12-24','USD')).toFixed(2),'848.39');assert.equal((2500*crossRate(.9305,1.1208)).toFixed(2),'3011.28');
});
test('hypothetical deflation and log identities',()=>{
assert.equal(80/100*150,120);assert.equal(120/150*150,120);
assert.ok(Math.abs(logReturn(100,110)+logReturn(110,121)-logReturn(100,121))<1e-10);
assert.ok(Math.abs((Math.exp(logReturn(100,121)/100)-1)*100-pctChange(100,121))<1e-10);
});
