/* ============================================================
   Trang Tài liệu PDF (danh sách + khung xem)
   ============================================================ */
const PDFS=[{"f": "General_Guide_VI.pdf", "t": "Hướng dẫn cơ bản", "d": "Giới thiệu mod, HUD chính, Hệ thống Cấp độ, Thành tựu, Perk, Nhiệm vụ theo mùa và chú giải biểu tượng.", "c": "co-ban", "p": 12, "s": "22,3 MB", "i": "pdf_General_Guide_VI"}, {"f": "Attributes_Perk_VI.pdf", "t": "Perk Thuộc tính", "d": "Các perk tăng chỉ số cơ bản: máu, đói, tinh thần, chí mạng, hút máu… kèm mẹo.", "c": "perk", "p": 2, "s": "3,4 MB", "i": "pdf_Attributes_Perk_VI"}, {"f": "Abilities_Perk_VI.pdf", "t": "Perk Khả năng", "d": "Kháng nước/lạnh/nóng, Enchantmemento và toàn bộ trang sức, Super Pet, kỹ năng chủ động.", "c": "perk", "p": 8, "s": "10,8 MB", "i": "pdf_Abilities_Perk_VI"}, {"f": "Expert_Perk_vi.pdf", "t": "Perk Chuyên môn (Nhân vật)", "d": "Perk riêng của từng nhân vật, thông tin chi tiết và mẹo chơi.", "c": "perk", "p": 45, "s": "102,3 MB", "i": "pdf_Expert_Perk_vi"}, {"f": "Produce_Perk_VI.pdf", "t": "Perk Produce & Pet", "d": "Perk chế tạo mới, Pet Not Included và danh sách pet cùng kỹ năng, tiến hóa.", "c": "perk", "p": 10, "s": "22,0 MB", "i": "pdf_Produce_Perk_VI"}, {"f": "Instant_Perk_VI.pdf", "t": "Perk Instant", "d": "Perk hiệu ứng một lần: Khởi đầu mới, Chiêu hồn, Nhà thám hiểm, Ro Bin…", "c": "perk", "p": 2, "s": "2,4 MB", "i": "pdf_Instant_Perk_VI"}, {"f": "Global_Perk_VI.pdf", "t": "Perk Global", "d": "Perk ảnh hưởng toàn máy chủ: Reign of Giants, Infinite Stack, tượng quân cờ…", "c": "perk", "p": 6, "s": "14,2 MB", "i": "pdf_Global_Perk_VI"}, {"f": "Reign_of_Giants_Bosses_VI.pdf", "t": "Reign of Giants: Boss & Vật phẩm", "d": "Boss mới, vật phẩm rơi, vật phẩm chế tạo, vũ khí, mũ, gậy phép và đồ riêng nhân vật.", "c": "rog", "p": 35, "s": "13,6 MB", "i": "pdf_Reign_of_Giants_Bosses_VI"}];
const PDFDIR='pdf/';
const PDFCAT=[['','Tất cả'],['co-ban','Cơ bản'],['perk','Perk'],['rog','Reign of Giants']];
function pdfRender(){
 ht.textContent='/ Achievement & Level';
 const hero=`<div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img data-i="logo" alt="" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Achievement &amp; Level</h1><p>Wiki mod Don't Starve Together · Tài liệu PDF</p></div></div>`;
 app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/achievement-level')">Achievement &amp; Level</a> › PDF</p>${hero}${TABS(11)}
 <p>Toàn bộ các cuốn sách hướng dẫn bản tiếng Việt ở dạng PDF. Bấm <b>Xem</b> để đọc ngay trong trang hoặc <b>Tải xuống</b> để lưu về máy.</p>
 <div class="bar"><input id="pdq" type="search" placeholder="Tìm tài liệu (vd: perk, boss, nhân vật)…" oninput="pdfFilter()"></div>
 <div class="fcs">${PDFCAT.map(([k,l],i)=>`<button class="fc${i?'':' on'}" data-k="${k}" onclick="pdfCat(this)">${l}</button>`).join('')}<span class="mu" id="pdcount"></span></div>
 <div class="pdg">${PDFS.map((x,i)=>`<div class="pdc" data-pd data-c="${x.c}" data-n="${(x.t+' '+x.d).toLowerCase().replace(/"/g,'')}"><button class="th" onclick="pdfOpen(${i})" aria-label="Xem ${x.t}"><img data-i="${x.i}" alt="${x.t}"><span>${x.p} trang</span></button><div class="bd"><b>${x.t}</b><p>${x.d}</p></div><div class="mt"><span>📄 ${x.s}</span><span>·</span><span>${x.p} trang</span></div><div class="ac"><button class="pdb pr" onclick="pdfOpen(${i})">👁 Xem</button><a class="pdb" href="${PDFDIR+x.f}" download>⬇ Tải xuống</a></div></div>`).join('')}</div>`;
 pdfFilter()}
function pdfCat(b){document.querySelectorAll('.fc').forEach(c=>c.classList.remove('on'));b.classList.add('on');pdfFilter()}
function pdfFilter(){const q=((document.getElementById('pdq')||{}).value||'').trim().toLowerCase(),a=document.querySelector('.fc.on'),k=a?a.dataset.k:'';let n=0;
 document.querySelectorAll('[data-pd]').forEach(e=>{const ok=(!q||e.dataset.n.includes(q))&&(!k||e.dataset.c==k);e.style.display=ok?'':'none';if(ok)n++});
 const c=document.getElementById('pdcount');if(c)c.textContent=n+' tài liệu'}
function pdfOpen(i){const x=PDFS[i];let m=document.getElementById('pdm');
 if(!m){m=document.createElement('div');m.id='pdm';document.body.appendChild(m)}
 const u=PDFDIR+x.f;
 m.innerHTML=`<div class="hb"><b>${x.t}</b><a class="pdb" href="${u}" target="_blank" rel="noopener">↗ Tab mới</a><a class="pdb" href="${u}" download>⬇ Tải</a><button class="pdb pr" onclick="pdfClose()">✕ Đóng</button></div><iframe src="${u}#view=FitH" title="${x.t}"></iframe><div class="nt">Không hiện? Hãy đặt file ${x.f} vào thư mục <b>pdf/</b> cạnh index.html, hoặc dùng nút “Tab mới”.</div>`;
 m.classList.add('on');document.body.style.overflow='hidden'}
function pdfClose(){const m=document.getElementById('pdm');if(m){m.classList.remove('on');m.innerHTML=''}document.body.style.overflow=''}
addEventListener('keydown',e=>{if(e.key==='Escape')pdfClose()});
addEventListener('hashchange',pdfClose);
