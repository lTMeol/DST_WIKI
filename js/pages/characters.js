/* ============================================================
   Trang nhân vật: dựng nội dung, điều hướng, lọc, sắp xếp
   ============================================================ */
function fixNames(items){
 const out=[],tx=r=>r[0]=='p'&&r[2]?r[2].map(p=>p.map(x=>x[1]).join('')).join('').trim():'';
 const isN=t=>{t=t.trim();if(!t||t.length>36||t.indexOf('\n')>=0||/^[-•]/.test(t)||/[.:!?,;)"]$/.test(t))return false;const c=t[0];return c!==c.toLowerCase()||/\d/.test(c)};
 for(let i=0;i<items.length;i++){
  const r=items[i];
  if(r[0]=='p'&&r[2]&&r[2].length){
   const nx=items[i+1];
   if(nx&&(nx[0]=='f'||(nx[0]=='p'&&/^(Ô |Công [Tt]rình)/.test(tx(nx))))){
    const ps=r[2].map(p=>p.slice()),last=ps[ps.length-1],names=[];
    while(last.length>1&&last[last.length-1][0]=='body'&&isN(last[last.length-1][1]))names.unshift(last.pop()[1].trim());
    if(names.length){out.push([r[0],r[1],ps]);names.forEach(n=>out.push(['n',n]));continue}
   }
  }
  out.push(r)}
 return out}
function chItems(items){items=fixNames(items);
 const dm=k=>DIM[k]||[0,0],sm=r=>r[0]=='f'&&Math.max(...dm(r[1]))<=80,fr=k=>{const d=dm(k);return d[0]==51&&d[1]==51};
 const ptxt=r=>r[2].map(p=>p.map(x=>x[1]).join('')).join('').trim();
 const lbl=r=>r[0]=='p'&&r[1]&&fr(r[1])&&ptxt(r).length<=14;
 const bulb=k=>{const d=dm(k);return d[0]>0&&d[0]<=30&&d[1]<=30};
 const im=k=>`<img data-i="${k}" alt="">`;
 const nodes=[];let i=0;
 while(i<items.length){const r=items[i];if(r[0]=='n'){nodes.push({t:'name',n:r[1]});i++;continue}
  if(sm(r)||(lbl(r)&&i+1<items.length&&sm(items[i+1]))){
   const run=[];while(i<items.length&&(sm(items[i])||lbl(items[i]))){run.push(items[i]);i++}
   const frames=run.filter(x=>x[0]=='p'||fr(x[1])),its=run.filter(x=>x[0]=='f'&&!fr(x[1]));
   if(frames.length){nodes.push({t:'slots',frames,its});continue}
   const prev=nodes[nodes.length-1];
   if(prev&&prev.t=='row'&&!prev.tip&&(prev.ic.length||run.length<=2))run.forEach(x=>prev.ic.push(x[1]));
   else nodes.push({t:'irow',ks:run.map(x=>x[1])});
   continue}
  if(r[0]=='f'){nodes.push({t:'fig',k:r[1],w:r[2]});i++;continue}
  nodes.push({t:'row',ic:r[1]?[r[1]]:[],ps:r[2],tip:!!(r[1]&&bulb(r[1]))});i++}
 const q=r=>r[0]=='lab'&&r[1][0]=='\n'&&r[1].trim().length<=45&&!/[.:]$/.test(r[1].trim());
 const split=ps=>{const E=[];let cp=[];ps.forEach(p=>{let cc=[];p.forEach((r,j)=>{if(j>0&&q(r)){if(cc.length)cp.push(cc);E.push(cp);cp=[];cc=[[r[0],r[1].replace(/^\n/,'')]]}else cc.push(r)});cp.push(cc)});E.push(cp);return E};
 const card=(ic,ps)=>{const body=ps.map(p=>`<p>${runsH(p)}</p>`).join('');
  return (ic.length||(ps[0][0]&&ps[0][0][0]=='lab'))?`<div class="rw">${ic.length?`<span class="ic">${ic.map(im).join('')}</span>`:''}<div>${body}</div></div>`:body};
 return nodes.map(n=>{if(n.t=='name')return `<h4 class="itn">${esc(n.n)}</h4>`;
  if(n.t=='fig')return `<figure class="fig ${n.w<150?'sm':''}"><img data-i="${n.k}" alt=""></figure>`;
  if(n.t=='irow')return `<div class="irow">${n.ks.map(im).join('')}</div>`;
  if(n.t=='slots')return `<div class="slots">${n.frames.map((f,j)=>{const it=n.its[j];return (f[0]=='p'?`<span class="lb">${esc(ptxt(f))}</span>`:'')+`<span class="slot"><img class="fr" data-i="${f[1]}" alt="">${it?`<img class="it" data-i="${it[1]}" alt="">`:''}</span>`}).join('')}${n.its.slice(n.frames.length).map(x=>`<span class="slot">${im(x[1])}</span>`).join('')}</div>`;
  if(n.tip)return `<div class="tip bl"><img class="tb" data-i="${n.ic[0]}" alt="">${n.ps.map(p=>runsH(p)).join('<br>')}</div>`;
  const E=split(n.ps),m=E.length,c=n.ic.length,base=Math.floor(c/m),ex=c%m;let pos=0;
  return E.map((e,k)=>{const cnt=m==1?c:(c>=m?base+(k<ex?1:0):(k<c?1:0));const ic=n.ic.slice(pos,pos+cnt);pos+=cnt;return card(ic,e)}).join('')}).join('')}
const esc=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const STL=[['c','Chiến đấu'],['s','Sinh tồn'],['t','Chơi nhóm'],['o','Chơi một mình'],['d','Độ khó']];
function runsH(runs){let h='';runs.forEach(([k,t])=>{t.split('\n').forEach((s,i)=>{if(i>0)h+='<br>';if(!s)return;s=esc(s);h+=k=='lab'?`<b>${s}</b> `:s+' '})});return h.replace(/(<br>)+$/,'')}
function charsRender(h){
 ht.textContent='/ Achievement & Level';const id=(h.split('/')[4]||'').split('@')[0],c=CHD.find(x=>x.id==id);
 const hero=`<div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img data-i="logo" alt="" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Achievement &amp; Level</h1><p>Wiki mod Don't Starve Together — Nhân vật</p></div></div>`;
 const chips=`<div class="chips">${CHD.map(x=>`<a class="${c&&c.id==x.id?'on':''}" onclick="go('#/mod/achievement-level/characters/${x.id}')"><img data-i="${x.port}" alt="">${x.name}</a>`).join('')}</div>`;
 if(!c){app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/achievement-level')">Achievement &amp; Level</a> › Nhân vật</p>${hero}${TABS(10)}<p>Chọn một nhân vật để xem các Perk riêng (Chuyên môn) và mẹo chơi.</p><div class="bar"><input id="chq" type="search" placeholder="Tìm nhân vật… (Enter để mở)" oninput="chFilter()" onkeydown="if(event.key=='Enter')chOpen()"></div><div class="fcs"><span class="mu">Giai đoạn mạnh:</span><button class="fc" data-g="pv" data-k="Đầu" onclick="this.classList.toggle('on');chFilter()">Đầu game</button><button class="fc" data-g="pv" data-k="Giữa" onclick="this.classList.toggle('on');chFilter()">Giữa game</button><button class="fc" data-g="pv" data-k="Hậu" onclick="this.classList.toggle('on');chFilter()">Hậu game</button><select id="chs" onchange="chSort()" aria-label="Sắp xếp"><option value="">Sắp xếp: Mặc định</option><option value="n">Tên A→Z</option><option value="c">Chiến đấu mạnh nhất</option><option value="s">Sinh tồn tốt nhất</option><option value="t">Chơi nhóm tốt nhất</option><option value="o">Chơi một mình tốt nhất</option><option value="d">Dễ chơi trước</option></select><span class="mu" id="chcount"></span></div><div class="cg">${CHD.map(x=>`<button class="card" data-o="${CHD.indexOf(x)}" data-c="${x.st.c||0}" data-s="${x.st.s||0}" data-t="${x.st.t||0}" data-d="${x.st.d||0}" data-oo="${x.st.o||0}" data-nm="${x.name.toLowerCase()}" data-pv="${x.pv||''}" onclick="go('#/mod/achievement-level/characters/${x.id}')"><img data-i="${x.port}" alt="${x.name}"><div><b>${x.name}</b><small>${x.pv||''}</small><small class="cst" title="Chiến đấu · Sinh tồn · Độ khó">⚔ ${x.st.c||0} · ♥ ${x.st.s||0} · ☠ ${x.st.d||0}</small></div></button>`).join('')}</div>`;return}
 let nav=`<nav><h4>${c.name}</h4>`,art='';
 c.secs.forEach((s,i)=>{nav+=`<button onclick="sc('cx${i}')">${s.t}</button>`;
  art+=`<section id="cx${i}"><h2>${esc(s.t)}${s.cost?`<span class="cb">${s.cost}</span>`:''}</h2>`+chItems(s.items)+'</section>'});
 const st=STL.filter(([k])=>c.st[k]).map(([k,l])=>`<div><span>${l}</span><i>${'★'.repeat(c.st[k])+'☆'.repeat(Math.max(0,5-c.st[k]))}</i></div>`).join('')+(c.pv?`<div><span>Đường sức mạnh</span><i style="letter-spacing:0">${c.pv}</i></div>`:'')+(()=>{const t=c.secs.reduce((a,s)=>a+(+s.cost||0),0);return t?`<div><span>Tổng Sao mọi Perk</span><i style="letter-spacing:0">${t} ★</i></div>`:''})();
 app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/achievement-level')">Achievement &amp; Level</a> › <a onclick="go('#/mod/achievement-level/characters')">Nhân vật</a> › ${c.name}</p>${hero}${TABS(10)}${chips}${CN(c)}<div class="chh"><img data-i="${c.port}" alt="${c.name}"><div><h1>${c.name}</h1><div class="sg">${st}</div></div></div><div class="layout">${nav}</nav><article>${art}</article></div>${CN(c)}`;
}
function CN(c){const i=CHD.indexOf(c),n=CHD.length,p=CHD[(i+n-1)%n],q=CHD[(i+1)%n],L='#/mod/achievement-level/characters';return `<div class="chnav"><a onclick="go('${L}/${p.id}')">‹ ${p.name}</a><a class="ls" onclick="go('${L}')">☰ Danh sách (${i+1}/${n})</a><a onclick="go('${L}/${q.id}')">${q.name} ›</a></div>`}
function chSort(){const g=document.querySelector('.cg'),e=document.getElementById('chs');if(!g||!e)return;const k=e.value,a=[...g.children],o=x=>+x.dataset.o,v=x=>+x.dataset[k=='o'?'oo':k];
 a.sort((x,y)=>k=='n'?x.dataset.nm.localeCompare(y.dataset.nm,'vi'):k=='d'?v(x)-v(y)||o(x)-o(y):k?v(y)-v(x)||o(x)-o(y):o(x)-o(y));a.forEach(x=>g.appendChild(x))}
function chOpen(){const a=[...document.querySelectorAll('.cg .card')].filter(x=>x.style.display!=='none');if(a.length)a[0].click()}
addEventListener('keydown',e=>{const m=location.hash.match(/#\/mod\/achievement-level\/characters\/([^@\/]+)/);if(!m||/INPUT|SELECT|TEXTAREA/.test((e.target.tagName||'')))return;const i=CHD.findIndex(x=>x.id==m[1]);if(i<0)return;if(e.key==='ArrowLeft')go('#/mod/achievement-level/characters/'+CHD[(i+CHD.length-1)%CHD.length].id);if(e.key==='ArrowRight')go('#/mod/achievement-level/characters/'+CHD[(i+1)%CHD.length].id)});
function chFilter(){if(!document.getElementById('chq'))return;const q=document.getElementById('chq').value.trim().toLowerCase(),act=[...document.querySelectorAll('.fc.on[data-g="pv"]')].map(c=>c.dataset.k);let n=0;
 document.querySelectorAll('.cg [data-nm]').forEach(e=>{let ok=!q||e.dataset.nm.includes(q);if(act.length)ok=ok&&act.some(k=>e.dataset.pv.includes(k));e.style.display=ok?'':'none';if(ok)n++});
 const c=document.getElementById('chcount');if(c)c.textContent=n+' nhân vật'}
