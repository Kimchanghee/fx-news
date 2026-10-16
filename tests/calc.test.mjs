import test from 'node:test';import assert from 'node:assert/strict';import * as c from '../src/lib/calc.mjs';
test('cross rates and conversions',()=>{assert.equal(c.crossRate(2,4),2);assert.equal(c.convert(-10,2,4),-20);assert.equal(c.crossRate(0,4),null)});
test('changes retain losses and reject zero base',()=>{assert.equal(c.pctChange(100,50),-50);assert.equal(c.pctChange(50,100),100);assert.equal(c.pctChange(0,2),null);assert.equal(c.pctChange(NaN,2),null)});
test('log returns and compounding',()=>{assert.ok(Math.abs(c.logReturn(100,120)+c.logReturn(120,100))<1e-10);assert.equal(c.logReturn(-1,2),null);assert.ok(Math.abs(c.cagr(100,121,2)-10)<1e-10)});
test('missing sample and date lookup',()=>{assert.equal(c.stdev([1]),null);assert.equal(c.lastOnOrBefore(['2026-01-02','2026-01-05'],'2026-01-04'),0);assert.equal(c.lastOnOrBefore(['2026-01-02'],'2025-01-01'),-1);assert.equal(c.percentileRank([],3),null)});
test('arithmetic example integrity',()=>{assert.equal((19*100+60)/20,98);assert.equal(8000/1000,8);assert.equal(80/100*150,120);assert.ok(Math.abs(c.crossRate(1.1208,177.06)-157.9764453961456)<1e-10)});
