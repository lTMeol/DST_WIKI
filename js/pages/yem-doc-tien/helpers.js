/* ============================================================
   Yêm Đốc Tiên: hàm dựng HTML & bộ lọc dùng chung
   ============================================================ */
/* ===== Mod: Yêm Đốc Tiên ===== */
const YDL={steam:'https://steamcommunity.com/sharedfiles/filedetails/?id=3625940357',site:'https://yanduxian.cn/',qq:'https://qm.qq.com/q/iFeDTMf6Io'};
const YDTB=(head,rows)=>`<div class="tw"><table><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr>${rows.map(r=>`<tr>${r.map((c,i)=>`<td>${i==0?'<b>'+c+'</b>':c}</td>`).join('')}</tr>`).join('')}</table></div>`;
const YDH=(a)=>`<span class="mu">${a}</span>`;
const YDPIC=(f,a)=>`<img class="yd-pic" src="img/yd/${f}.webp" alt="${a}" title="${a}" loading="lazy"><br>`;
const YDV=(f,c)=>`<figure class="fig yd-vid"><video controls muted loop playsinline preload="metadata" src="vid/yd/${f}.mp4"></video><figcaption>${c}</figcaption></figure>`;
function ydChip(b){document.querySelectorAll('.fc[data-g="yd"]').forEach(c=>c.classList.remove('on'));b.classList.add('on');ydFilter()}
function ydFilter(){const q=((document.getElementById('ydq')||{}).value||'').trim().toLowerCase(),a=document.querySelector('.fc.on[data-g="yd"]'),k=a?a.dataset.k:'';let n=0;document.querySelectorAll('tr[data-yd]').forEach(r=>{const ok=(!q||r.dataset.n.includes(q))&&(!k||r.dataset.v.startsWith(k));r.style.display=ok?'':'none';if(ok)n++});const c=document.getElementById('ydcount');if(c)c.textContent=n+' mục'}
/* ===== Yêm Đốc Tiên — trang 2: Hệ thống cốt lõi ===== */
const YDIMG={bamboo:['shared/materials/myth_bamboo.webp','Trúc Thần Thoại'],rope:['shared/materials/rope.webp','Dây thừng'],futon:['xydztz/objects/xydztz_futon.webp','Bồ Đoàn'],shadowheart:['shared/materials/shadowheart.webp','Tim Bóng Tối'],bigpeach:['shared/materials/bigpeach.webp','Đại Bàn Đào'],redgem:['shared/materials/redgem.webp','Hồng Ngọc'],huoyuan:['shared/materials/mk_huoyuan.webp','Hỏa Viên Thạch Tâm'],scales:['shared/materials/dragon_scales.webp','Vảy Rồng'],bearfur:['shared/materials/bearger_fur.webp','Da Gấu'],shroom:['shared/materials/shroom_skin.webp','Da Cóc'],longpi:['shared/materials/mk_longpi.webp','Long Bì Trù Đoạn']};
const YDI=(k,n)=>{const d=YDIMG[k],f=d[0].split('/').pop();return `<img class="yd-ic" src="img/yd/${f}" data-f="https://yanduxian.cn/images/wiki/${d[0]}" alt="${d[1]}" title="${d[1]}" onerror="ydImg(this)">`+(n?`×${n} `:' ')+d[1]};
const YDP=(t,h)=>YDTB(h||['Thuộc tính','Số liệu','Ghi chú'],t.trim().split('\n').map(l=>l.split('|')));
const YDW=t=>`<div class="tip"><b>Cảnh báo cơ chế: </b>${t}</div>`;
function ydQ(i,sel,cid){const q=i.value.trim().toLowerCase();let n=0;document.querySelectorAll(sel).forEach(r=>{const ok=!q||r.dataset.n.includes(q);r.style.display=ok?'':'none';if(ok)n++});const c=document.getElementById(cid);if(c)c.textContent=n+' mục'}
const YU=a=>`<ul>${a.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const YO=a=>`<ol class="n">${a.map(x=>`<li>${x}</li>`).join('')}</ol>`;
const YN=(t,l)=>`<div class="tip"><b>${l||'Lưu ý'}: </b>${t}</div>`;
const YFG=(f,c)=>`<figure class="fig yd-fig"><img src="img/yd/${f}.webp" alt="${c}" title="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`;
const YSL=a=>`<div class="yd-slogan">${a.map(x=>`<p>${x}</p>`).join('')}</div>`;
const YH4=t=>`<h4 class="itn">${t}</h4>`;
const YDM=(f,n,c)=>`<img class="yd-ic" src="img/yd/${f}.webp" data-f="https://yanduxian.cn/images/wiki/shared/materials/${f}.webp" alt="${n}" title="${n}" onerror="ydImg(this)">`+(c?`×${c} `:' ')+n;
const PBR={myth_bamboo:'shared/materials/',rope:'shared/materials/',purplegem:'shared/materials/',horrorfuel:'shared/materials/',orangegem:'shared/materials/',townportaltalisman:'shared/materials/',moonglass:'shared/materials/',greengem:'shared/materials/',madameweb_armor:'shared/materials/',butterfly:'shared/materials/',silk:'shared/materials/',papyrus:'shared/materials/',featherpencil:'shared/materials/',purple_gourd:'myth-theme/catalog/',siving_stone:'myth-theme/catalog/',"myth_yjp-idle-000":'myth-theme/structures/'};
const PBU=f=>'https://yanduxian.cn/images/wiki/'+(PBR[f]||'xydztz/objects/')+f+'.webp';
const YAMX=(f,n,c,k)=>`<span class="pb-t${k?' fin':''}"><span class="pb-i"><img src="img/yd/${f}.webp" data-f="${PBU(f)}" alt="${n}" title="${n}" loading="lazy" onerror="ydImg(this)">${c?`<em>×${c}</em>`:''}</span><small>${n}</small></span>`;
const YAM=(f,n,c)=>YAMX(f,n,c,0);
const YAMF=(f,n,c)=>YAMX(f,n,c,1);
const YBIG=(f,n)=>`<figure class="pb-big"><img src="img/yd/${f}.webp" data-f="${PBU(f)}" alt="${n}" title="${n}" loading="lazy" onerror="ydImg(this)"><figcaption>${n}</figcaption></figure>`;
const YLK=(p,id,t)=>`<a style="cursor:pointer" onclick="go('#/mod/yem-doc-tien${p}');setTimeout(()=>sc('${id}'),300)">${t}</a>`;
const YLS=(id,t)=>`<a style="cursor:pointer" onclick="sc('${id}')">${t}</a>`;
function ydTabs(a){return `<div class="tabs">${Object.keys(YDPAGES).map(k=>`<a class="${a==k?'on':''}" onclick="go('#/mod/yem-doc-tien${k}')">${YDPAGES[k][1]}</a>`).join('')}</div>`}
function ydImg(i){if(!i.dataset.r){i.dataset.r=1;i.src=i.dataset.f}else if(i.dataset.rm){i.parentNode.remove()}else{i.style.display='none'}}
