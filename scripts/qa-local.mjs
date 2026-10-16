import { spawn } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
const host='http://127.0.0.1:4389';
const server=spawn(process.execPath,['node_modules/astro/astro.js','preview','--host','127.0.0.1','--port','4389'],{stdio:'inherit'});
try {
 let ready=false;for(let i=0;i<120;i++){try{const r=await fetch(host);if(r.ok){ready=true;break}}catch{}await new Promise(r=>setTimeout(r,500));}if(!ready)throw Error('preview failed');
 const routes='/,/fx/,/commodities/,/tools/percent-change/,/tools/historical-converter/,/guides/commodity-price-units-explained/,/guides/brent-wti-dubai-oil-benchmarks/,/methodology/';
 await new Promise((resolve,reject)=>{const child=spawn(process.execPath,['scripts/qa-shots.mjs',host,routes],{stdio:'inherit'});child.on('exit',c=>c===0?resolve():reject(Error('QA exit '+c)));child.on('error',reject)});
 const checks=[];for(const p of ['/robots.txt','/sitemap-index.xml','/feed.xml','/llms.txt','/missing-qa-route/']){const r=await fetch(host+p);checks.push({path:p,status:r.status});}
 await mkdir('seo/evidence',{recursive:true});await writeFile('seo/evidence/http-qa.json',JSON.stringify({observedAt:new Date().toISOString(),checks},null,2));
}finally{server.kill();}
