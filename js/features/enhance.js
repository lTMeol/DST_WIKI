/* ============================================================
   Tìm kiếm toàn site (Ctrl+K), lightbox, copy link, cỡ chữ, điều hướng trước/sau
   ============================================================ */
(function(){
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const nz=t=>(t||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[đĐ]/g,'d').toLowerCase();
const E=t=>t.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const st=h=>String(h||'').replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&[a-z#0-9]+;/g,' ').replace(/\s+/g,' ').trim();
let tt;const toast=m=>{let t=$('#ts');if(!t){t=document.createElement('div');t.id='ts';document.body.appendChild(t)}t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),1800)};
const copy=u=>{const ok=()=>toast('Đã sao chép liên kết'),fb=()=>{const a=document.createElement('textarea');a.value=u;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();let r=false;try{r=document.execCommand('copy')}catch(e){}a.remove();r?ok():prompt('Sao chép liên kết:',u)};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(u).then(ok,fb):fb()};
let FS=16;try{FS=+localStorage.getItem('dst_fs')||16}catch(e){}
const fs=d=>{FS=Math.max(14,Math.min(22,FS+d*2));document.body.style.fontSize=FS+'px';try{localStorage.setItem('dst_fs',FS)}catch(e){}};fs(0);
const PG=[['','Hướng dẫn cơ bản',()=>SEC],['/attributes','Perk Thuộc tính',()=>SEC2],['/abilities','Perk Khả năng',()=>SEC3],['/produce','Perk Produce',()=>SEC7],['/instant','Perk Instant',()=>SEC5],['/global','Perk Global',()=>SEC6],['/pets','Pet',()=>SEC8],['/trinkets','Trang sức',()=>SEC4],['/rog','RoG: Boss',()=>SEC9],['/rog-items','RoG: Vật phẩm',()=>SEC10],['/characters','Nhân vật',()=>[]],['#/mod/yem-doc-tien','Yêm Đốc Tiên',()=>YDS],['#/mod/yem-doc-tien/systems','Yêm Đốc Tiên: Hệ thống cốt lõi',()=>YDSYS],['#/mod/yem-doc-tien/characters','Yêm Đốc Tiên: Nhân vật tinh quái',()=>YDCH],['#/mod/yem-doc-tien/artifacts','Yêm Đốc Tiên: Pháp bảo trang bị',()=>YDAF],['#/mod/yem-doc-tien/optimizations','Yêm Đốc Tiên: Tối ưu thần thoại',()=>YDOP],['#/mod/yem-doc-tien/compatibility','Yêm Đốc Tiên: Tương thích sửa lỗi',()=>YDCP]];
let IDX=null,SEL=0;
const add=(r,n,id,t,b)=>{const raw=st(b),ti=st(t);IDX.push({r,n,id,t:ti,tn:nz(ti),raw,x:nz(raw)})};
function build(){IDX=[];PG.forEach(([r,n,f])=>{let S=[];try{S=f()}catch(e){}S.forEach(([id,t,b,subs])=>{add(r,n,id,t,b);(subs||[]).forEach(([a,c,d])=>add(r,n,a,c,d))})});
 try{CH.forEach(r=>add('','Hướng dẫn cơ bản','nv-nv','Thưởng nhiệm vụ: '+st(r[0]),r.join(' ')));LG.forEach(r=>add('','Hướng dẫn cơ bản','bieu-tuong','Biểu tượng: '+r[0],r[1]));
 CHD.forEach(c=>{add('/characters/'+c.id,'Nhân vật','',c.name,c.pv||'');(c.secs||[]).forEach((s,i)=>add('/characters/'+c.id,'Nhân vật · '+c.name,'cx'+i,s.t,''))})}catch(e){}}
const mark=()=>{const l=$$('#gs li a');l.forEach((a,i)=>a.classList.toggle('on',i==SEL));l[SEL]&&l[SEL].scrollIntoView({block:'nearest'})};
function run(q){const w=nz(q).split(/\s+/).filter(Boolean),ul=$('#gs ul');SEL=0;
 if(!w.length){ul.innerHTML=PG.map(([r,n])=>`<li><a data-r="${r}" data-id=""><b>${n}</b><small>Mở trang</small></a></li>`).join('');mark();return}
 const res=[];IDX.forEach(e=>{let s=0;for(const k of w){const a=e.tn.includes(k),b=e.x.includes(k);if(!a&&!b)return;s+=a?3:1}const ph=w.join(' ');if(e.tn.includes(ph))s+=8;else if(e.x.includes(ph))s+=4;res.push([s,e])});
 res.sort((a,b)=>b[0]-a[0]);const top=res.slice(0,40).map(x=>x[1]);
 ul.innerHTML=top.length?top.map(e=>{const k=w[0],i=e.x.indexOf(k);let sn;if(i>=0){const a=Math.max(0,i-45),s=e.raw.slice(a,i+k.length+95),p=i-a;sn=(a?'… ':'')+E(s.slice(0,p))+'<mark>'+E(s.slice(p,p+k.length))+'</mark>'+E(s.slice(p+k.length))}else sn=E(e.raw.slice(0,110));
  return `<li><a data-r="${e.r}" data-id="${e.id}"><b>${E(e.t)}</b><small>${E(e.n)}</small>${sn?'<span>'+sn+'</span>':''}</a></li>`}).join(''):'<li style="padding:14px;color:var(--mu)">Không tìm thấy kết quả.</li>';mark()}
function jump(r,id){const b=r.charAt(0)=='#'?r:'#/mod/achievement-level'+r;if(location.hash.split('@')[0]==b){if(id){const e=document.getElementById(id);if(e&&e.tagName=='DETAILS')e.open=true;sc(id)}else scrollTo(0,0)}else location.hash=b+(id?'@'+id:'')}
const closeS=()=>{const g=$('#gs');g&&g.classList.remove('on')};
function openS(){if(!IDX)build();let g=$('#gs');if(!g){g=document.createElement('div');g.id='gs';
 g.innerHTML='<div class="bx"><input type="text" role="searchbox" aria-label="Tìm kiếm" placeholder="Tìm trong toàn bộ wiki… (không cần gõ dấu)" autocomplete="off"><ul></ul><div class="ft"><span>↑↓ chọn · Enter mở · Esc đóng</span><span style="margin-left:auto">Cỡ chữ: <button data-fs="-1">A−</button> <button data-fs="1">A+</button></span></div></div>';document.body.appendChild(g);
 g.onclick=e=>{const a=e.target.closest('a[data-r]'),f=e.target.closest('[data-fs]');if(f){fs(+f.dataset.fs);return}if(a){closeS();jump(a.dataset.r,a.dataset.id);return}if(e.target===g)closeS()};
 const q=g.querySelector('input');q.oninput=()=>run(q.value);
 q.onkeydown=e=>{const n=$$('#gs li a').length;if(e.key=='ArrowDown'){SEL=Math.min(n-1,SEL+1);mark();e.preventDefault()}else if(e.key=='ArrowUp'){SEL=Math.max(0,SEL-1);mark();e.preventDefault()}else if(e.key=='Enter'){const a=$$('#gs li a')[SEL];a&&a.click()}}}
 g.classList.add('on');const i=g.querySelector('input');i.value='';run('');i.focus()}
const hb=document.createElement('button');hb.id='sbtn';hb.textContent='🔍';hb.title='Tìm kiếm (Ctrl+K)';hb.setAttribute('aria-label','Tìm kiếm');hb.onclick=openS;$('#themebtn').before(hb);
let lb;const closeL=()=>lb&&lb.classList.remove('on');
document.addEventListener('click',e=>{const i=e.target;if(!i||i.tagName!='IMG'||i.closest('summary,button,a,#lb,#gs')||!i.closest('article,.chh')||(i.width<72&&i.height<72))return;
 if(!lb){lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt=""><p></p>';lb.onclick=closeL;document.body.appendChild(lb)}
 const f=i.closest('figure'),c=f&&f.querySelector('figcaption');lb.firstChild.src=i.src;lb.lastChild.textContent=(c?c.textContent:i.alt)||'';lb.classList.add('on')});
addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=='k'){e.preventDefault();openS()}
 else if(e.key=='/'&&!/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||'')&&!$('input[type=search]')){e.preventDefault();openS()}
 else if(e.key=='Escape'){closeL();closeS()}
 else if(e.key=='Enter'&&e.target.matches&&e.target.matches('a[tabindex]'))e.target.click()});
addEventListener('beforeprint',()=>$$('details.tr').forEach(d=>{d.dataset.po=d.open?1:0;d.open=true}));
addEventListener('afterprint',()=>$$('details.tr').forEach(d=>{d.open=d.dataset.po=='1'}));
function enhance(){
 const on=$('.tabs a.on'),hh=location.hash.split('@')[0],cid=hh.split('/')[4],c=cid&&CHD.find(x=>x.id==cid);
 document.title=(c?c.name+' – ':'')+(on?on.textContent+' – ':'')+'DST Mod Wiki';
 const bg=$('#burger');if(bg)bg.style.display=$('nav')?'':'none';
 if(on){const p=on.parentNode;p.scrollLeft=on.getBoundingClientRect().left-p.getBoundingClientRect().left-30}
 $$('a[onclick]:not([href])').forEach(a=>{a.tabIndex=0;a.setAttribute('role','link')});
 $$('article section[id]>h2,article h3[id]').forEach(h=>{if(h.querySelector('.cp'))return;const id=h.id||h.parentNode.id,b=document.createElement('a');b.className='cp';b.textContent='🔗';b.title='Sao chép liên kết tới mục này';b.tabIndex=0;b.onclick=e=>{e.preventDefault();copy(location.href.split('@')[0]+'@'+id)};h.appendChild(b)});
 const ts=$$('.tabs a'),i=ts.findIndex(a=>a.classList.contains('on')),ar=$('article');
 if(ar&&i>-1){const m=(a,l,t)=>a?`<a class="${l}" tabindex="0" onclick="${a.getAttribute('onclick')}"><small>${t}</small><b>${E(a.textContent)}</b></a>`:'';ar.insertAdjacentHTML('beforeend',`<div class="pn2">${m(ts[i-1],'pv','← Trước')}${m(ts[i+1],'nx','Sau →')}</div>`)}
 if(window._so)_so.disconnect();
 const nv=$$('nav button').filter(b=>{const m=/sc\('([^']+)'\)/.exec(b.getAttribute('onclick')||'');if(m)b.dataset.s=m[1];return m});
 if(nv.length&&'IntersectionObserver' in window){window._so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)nv.forEach(b=>b.classList.toggle('on',b.dataset.s==e.target.id))}),{rootMargin:'-70px 0px -70% 0px'});nv.forEach(b=>{const t=document.getElementById(b.dataset.s);t&&_so.observe(t)})}
 const sec=location.hash.split('@')[1];if(sec)setTimeout(()=>{const e=document.getElementById(sec);if(e){if(e.tagName=='DETAILS')e.open=true;e.scrollIntoView()}},60)}
const _r=render;render=function(){_r();enhance()};
})();
