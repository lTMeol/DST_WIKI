/* ============================================================
   Nút "Xem PDF" cạnh từng mục, mở đúng trang
   ============================================================ */
(function(){
const D=typeof PDFDIR!=='undefined'?PDFDIR:'pdf/',B='#/mod/achievement-level';
const R=[['/attributes','Attributes_Perk_VI.pdf'],['/abilities','Abilities_Perk_VI.pdf'],['/trinkets','Abilities_Perk_VI.pdf'],['/produce','Produce_Perk_VI.pdf'],['/pets','Produce_Perk_VI.pdf'],['/instant','Instant_Perk_VI.pdf'],['/global','Global_Perk_VI.pdf'],['/rog','Reign_of_Giants_Bosses_VI.pdf'],['/characters','Expert_Perk_vi.pdf']];
const NP={'Attributes_Perk_VI.pdf':2,'Abilities_Perk_VI.pdf':8,'Produce_Perk_VI.pdf':10,'Instant_Perk_VI.pdf':2,'Global_Perk_VI.pdf':6,'Reign_of_Giants_Bosses_VI.pdf':35,'Expert_Perk_vi.pdf':45,'General_Guide_VI.pdf':12};
const nz=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/gi,'d').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const FLAT={};const flat=f=>FLAT[f]||(FLAT[f]=PDFIDX[f].map(t=>t.replace(/ /g,'')));
let SV={};try{SV=JSON.parse(localStorage.getItem('dst_pdfpg')||'{}')}catch(e){}
const cands=n=>{const o=[n];const a=n.replace(/\([^)]*\)/g,' ').trim();if(a!==n)o.push(a);(n.match(/\(([^)]+)\)/g)||[]).forEach(x=>o.push(x.slice(1,-1)));n.split(/\s*[&\/]\s*|\s+(?:và|or)\s+/i).forEach(x=>{if(x&&x!==n)o.push(x)});return o.map(nz).filter(x=>x.length>=3)};
function find(f,n,lo,hi){const P=PDFIDX[f];if(!P)return 0;const F=flat(f);lo=lo||1;hi=hi||P.length;
 for(const c of cands(n)){if(f.startsWith('Reign')){if(ROGPG[c])return ROGPG[c];continue}
  for(let i=lo-1;i<hi;i++)if((' '+P[i]+' ').includes(' '+c+' '))return i+1;
  const s=c.replace(/ /g,'');if(s.length>=6)for(let i=lo-1;i<hi;i++)if(F[i].includes(s))return i+1}return 0}
function cur(){const h=location.hash;if(h.startsWith(B+'/pdf'))return null;if(h===B||h===B+'/')return'General_Guide_VI.pdf';const r=R.find(x=>h.startsWith(B+x[0]));return r?r[1]:null}
function show(f,n,p,exact){const P=NP[f];
 let m=document.getElementById('pdm');if(!m){m=document.createElement('div');m.id='pdm';document.body.appendChild(m)}
 const u=D+f,k=f+'|'+n.toLowerCase();if(SV[k]){p=SV[k];exact=1}
 const draw=q=>{p=Math.max(1,Math.min(P,q));
  m.innerHTML=`<div class="hb"><b>${n}</b><span class="pg">trang ${p}/${P}${exact?'':' (gần đúng)'}</span><button class="pdb" data-d="-1">‹</button><button class="pdb" data-d="1">›</button><button class="pdb" data-s="1" title="Ghi nhớ trang này cho mục này">📌 Lưu</button><a class="pdb" href="${u}#page=${p}" target="_blank" rel="noopener">↗</a><button class="pdb pr" data-x="1">✕</button></div><iframe src="${u}#page=${p}&view=FitH&search=${encodeURIComponent(n)}" title="${n}"></iframe><div class="nt">Không hiện? Đặt file ${f} vào thư mục <b>pdf/</b> cạnh index.html. Sai trang? Bấm ‹ › rồi 📌 Lưu.</div>`};
 m.onclick=e=>{const t=e.target.closest('button');if(!t)return;if(t.dataset.x)pdfClose();else if(t.dataset.d)draw(p+ +t.dataset.d);else if(t.dataset.s){SV[k]=p;exact=1;try{localStorage.setItem('dst_pdfpg',JSON.stringify(SV))}catch(e){}draw(p)}};
 draw(p);m.classList.add('on');document.body.style.overflow='hidden'}
function mk(n,f,p,cls){const b=document.createElement('button');b.className='pdfb '+(cls||'');b.type='button';b.textContent='📄 Xem PDF';b.title='Mở “'+n+'” trong '+f+' (trang '+p+')';
 b.onclick=e=>{e.preventDefault();e.stopPropagation();show(f,n,p,1)};return b}
function run(){const f=cur(),app=document.getElementById('app');if(!f||!app||!PDFIDX[f]&&!f.startsWith('Reign'))return;
 const ch=f.startsWith('Expert'),gen=f.startsWith('General');let lo=1,hi=0,cp=0;
 if(ch){const m=location.hash.match(/characters\/([^@\/]+)/);if(m){const id=m[1],nm=Object.keys(CHPG).find(k=>k.replace(/ /g,'')==id.replace(/-/g,''))||id;cp=CHPG[nm]||0;if(cp){lo=cp;const nx=Object.values(CHPG).filter(x=>x>cp).sort((a,b)=>a-b)[0];hi=nx?Math.max(cp,nx-1):NP[f]}}}
 const sel=ch?'.chh h1:not(.pdx),.chsub:not(.pdx)':gen?'article section h2:not(.pdx),article h3:not(.pdx)':'article section h2:not(.pdx),details.tr:not(.pdx),.tw tr:not(.pdx),.ins:not(.pdx)';
 app.querySelectorAll(sel).forEach(e=>{e.classList.add('pdx');let n,k;
  if(e.matches('details.tr')){const s=e.querySelector('summary').cloneNode(true);s.querySelectorAll('.tg,img,.cost,.cd').forEach(x=>x.remove());n=s.textContent;k='d'}
  else if(e.matches('tr')){const b=e.querySelector('td:first-child b');if(!b)return;n=b.textContent;k='r'}
  else if(e.matches('.ins')){const b=e.querySelector('.ins-h b');if(!b)return;n=b.textContent;k='i'}
  else{n=e.textContent.replace(/[#🔗📄]/g,'');k=e.matches('.chh h1')?'c':'h'}
  n=n.replace(/\s+/g,' ').trim();if(!n)return;
  let p=find(f,n,lo,hi);if(!p&&k=='c')p=cp;if(!p&&ch&&cp)p=cp;if(!p)return;
  const b=mk(n,f,p,k=='d'?'top':'');
  if(k=='d')e.querySelector(':scope>div').prepend(b);else if(k=='r')e.querySelector('td:last-child').appendChild(b);else if(k=='i')e.querySelector('.ins-h').appendChild(b);else e.appendChild(b)})}
let q;new MutationObserver(()=>{cancelAnimationFrame(q);q=requestAnimationFrame(run)}).observe(document.getElementById('app'),{childList:true,subtree:true});
run();
})();
