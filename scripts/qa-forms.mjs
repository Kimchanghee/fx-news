import {createRequire} from 'node:module';
import {writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire('D:/웹 수익 자동화/rebuild-202610/_qa-tools/package.json');
const {chromium}=require('playwright');
const browser=await chromium.launch({channel:'msedge'});
const report=[];
try{
for(const width of [390,1440]){
const page=await browser.newPage({viewport:{width,height:900}});
await page.goto('http://127.0.0.1:4389/tools/percent-change/');
for(const t of [
{a:'100',b:'50',y:'',ok:true,match:'50.00%'},{a:'-100',b:'-50',y:'',ok:true,match:'50.00%'},{a:'0',b:'2',y:'',ok:false},{a:'',b:'2',y:'',ok:false},{a:'NaN',b:'2',y:'',ok:false},{a:'1e309',b:'2',y:'',ok:false},{a:'1e-308',b:'1e308',y:'',ok:false},{a:'1',b:'1e308',y:'.01',ok:false},{a:'100',b:'0',y:'5',ok:true,match:'100.00%'},{a:'100',b:'200',y:'201',ok:false},{a:'100',b:'200',y:'0',ok:false},{a:'100',b:'121',y:'2',ok:true,match:'10.00%'},{a:'1',b:'2',y:'.0001',ok:true,match:'outside the supported'}]){
for(const k of ['a','b','y']) await page.locator('#'+k).fill(t[k]);
await page.locator('button[type=submit]').click();
const err=await page.locator('#err').innerText(),out=await page.locator('#out').innerText();
assert.equal(!err,t.ok,JSON.stringify(t));if(t.match)assert.ok(out.includes(t.match),out);assert.ok(!/NaN|Infinity|∞/.test(out));if(!t.ok){assert.equal(out,'');assert.equal(await page.locator('[aria-invalid=true]').count(),1);}
assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));report.push({width,tool:'percent',...t,pass:true});
}
await page.goto('http://127.0.0.1:4389/tools/historical-converter/');
for(const t of [{amount:'',date:'2026-10-15',ok:false},{amount:'-1',date:'2026-10-15',ok:false},{amount:'1000000000001',date:'2026-10-15',ok:false},{amount:'Infinity',date:'2026-10-15',ok:false},{amount:'100',date:'2015-01-01',ok:false},{amount:'100',date:'2026-10-16',ok:false},{amount:'0',date:'2026-10-15',ok:true},{amount:'1000000000000',date:'2026-10-15',ok:true},{amount:'1000',date:'2025-12-25',ok:true,match:'24 Dec 2025'}]){
await page.locator('#amt').fill(t.amount);await page.locator('#date').fill(t.date);await page.locator('button[type=submit]').click();if(t.ok)await page.waitForFunction(()=>document.querySelector('#out').textContent.includes('Rate:'));
const err=await page.locator('#err').innerText(),out=await page.locator('#out').innerText();assert.equal(!err,t.ok);if(t.match)assert.ok(out.includes(t.match));assert.ok(!/NaN|Infinity|∞/.test(out));if(!t.ok)assert.equal(out,'');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));report.push({width,tool:'converter',...t,pass:true});
}
await page.close();
}
await writeFile('seo/evidence/forms-launch.json',JSON.stringify(report,null,2));console.log(report.length+' form boundary cases passed');
}finally{await browser.close();}
