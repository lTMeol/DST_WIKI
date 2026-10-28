/* ============================================================
   Hàm dựng HTML dùng chung (hình, mẹo, accordion DT/DT2, tabs)
   ============================================================ */
const F=(k,c,s)=>`<figure class="fig ${s||''}"><img data-i="${k}" alt="${c}"><figcaption>${c}</figcaption></figure>`;
const T=t=>`<div class="tip"><b>Mẹo: </b>${t}</div>`;
const TABS=a=>`<div class="tabs">${[['Hướng dẫn cơ bản',''],['Perk Thuộc tính','/attributes'],['Perk Khả năng','/abilities'],['Perk Produce','/produce'],['Perk Instant','/instant'],['Perk Global','/global'],['Pet','/pets'],['Trang sức','/trinkets'],['RoG: Boss','/rog'],['RoG: Vật phẩm','/rog-items'],['Nhân vật','/characters'],['PDF','/pdf']].map((t,k)=>`<a class="${a==k?'on':''}" onclick="go('#/mod/achievement-level${t[1]}')">${t[0]}</a>`).join('')}</div>`;
const TIP=t=>`<div class="tip"><b>Mẹo: </b>${t}</div>`;
const DT=(n,tag,body,tip,ic)=>`<details class="tr" data-n="${n.toLowerCase()}"><summary>${ic?`<img class="pi${/^(tr|pt|rg)/.test(ic)?' lg':''}" data-i="${ic}" alt="">`:''}${n}${tag?` <span class="tg">${tag}</span>`:''}</summary><div>${body}${tip?TIP(tip):''}</div></details>`;
const BTP=t=>`<div class="tip bl"><img class="tb" data-i="gb2" alt="">${t}</div>`;
const EA=t=>t.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const CHP=t=>t.replace(/"([^"]+)"/g,'<span class="it">$1</span>');
const PLAIN=h=>h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const DT2=(o)=>`<details class="tr big${o.cls?' '+o.cls:''}"${o.id?` id="${o.id}"`:''} ${o.attr||'data-pr'} data-n="${EA((o.n+' '+o.n.replace(/ /g,'')+' '+(o.code||'')+' '+PLAIN(o.body||'')).toLowerCase())}"${o.open?' open':''}${o.t?` data-t="${o.t}"`:''}><summary>${o.ic||''}<span class="nm">${o.n}</span>${o.code?`<span class="cd">${o.code}</span>`:''}${o.tag||''}</summary><div>${o.body||''}</div></details>`;
