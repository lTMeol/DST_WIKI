/* ============================================================
   Router: render() chọn trang theo location.hash
   ============================================================ */
function render(){
 const h=location.hash;scrollTo(0,0);
 if(h.startsWith('#/mod/yem-doc-tien')){ydRender(h);return}
 if(h.startsWith('#/mod/than-thoai')){ttRender(h);return}
 if(h.startsWith('#/mod/achievement-level/pdf')){pdfRender();document.querySelectorAll('img[data-i]').forEach(e=>e.src=IMG[e.dataset.i]);return}
 if(h.startsWith('#/mod/achievement-level/characters')){charsRender(h);chFilter();chSort();document.querySelectorAll('img[data-i]').forEach(e=>e.src=IMG[e.dataset.i]);const ca=document.querySelector('.chips a.on');if(ca){const b=ca.parentNode;b.scrollLeft=ca.offsetLeft-b.clientWidth/2+ca.clientWidth/2}return}
 const PGS={'#/mod/achievement-level/attributes':[SEC2,'Perk Thuộc tính',1],'#/mod/achievement-level/abilities':[SEC3,'Perk Khả năng',2],'#/mod/achievement-level/produce':[SEC7,'Perk Produce',3],'#/mod/achievement-level/instant':[SEC5,'Perk Instant',4],'#/mod/achievement-level/global':[SEC6,'Perk Global',5],'#/mod/achievement-level/pets':[SEC8,'Pet',6],'#/mod/achievement-level/trinkets':[SEC4,'Trang sức',7],'#/mod/achievement-level/rog-items':[SEC10,'Reign of Giants: Vật phẩm',9],'#/mod/achievement-level/rog':[SEC9,'Reign of Giants',8]};
 const pg=Object.keys(PGS).find(k=>h.startsWith(k));
 if(pg){const [SX,NM,TI]=PGS[pg];ht.textContent='/ Achievement & Level';
  let nav=`<nav><h4>${NM}</h4>`,art='';
  SX.forEach(([id,t,b,subs])=>{nav+=`<button onclick="sc('${id}')" data-s="${id}">${t}</button>`;art+=`<section id="${id}"><h2>${t}</h2>${b}`;
   subs.forEach(([sid,st,sb])=>{nav+=`<button class="s" onclick="sc('${sid}')" data-s="${sid}">${st}</button>`;art+=`<h3 id="${sid}">${st}</h3>${sb}`});art+='</section>'});
  app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/achievement-level')">Achievement &amp; Level</a> › ${NM}</p><div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img data-i="logo" alt="" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Achievement &amp; Level</h1><p>Wiki mod Don't Starve Together — ${NM}</p></div></div>${TABS(TI)}<div class="layout">${nav}</nav><article>${art}</article></div>`;
 }else if(h.startsWith('#/mod/achievement-level')){ht.textContent='/ Achievement & Level';
  let nav='<nav><h4>Hướng dẫn cơ bản</h4>',art='';
  SEC.forEach(([id,t,b,subs])=>{nav+=`<button onclick="sc('${id}')" data-s="${id}">${t}</button>`;art+=`<section id="${id}"><h2>${t}</h2>${b}`;
   subs.forEach(([sid,st,sb])=>{nav+=`<button class="s" onclick="sc('${sid}')" data-s="${sid}">${st}</button>`;art+=`<h3 id="${sid}">${st}</h3>${sb}`});art+='</section>'});
  app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › Achievement &amp; Level › Hướng dẫn cơ bản</p><div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img data-i="logo" alt="" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Achievement &amp; Level</h1><p>Wiki mod Don't Starve Together — Hướng dẫn cơ bản</p></div></div>${TABS(0)}<div class="layout">${nav}</nav><article>${art}</article></div>`;
  document.getElementById('ct').insertAdjacentHTML('beforeend',CH.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join(''));
  document.getElementById('lg').innerHTML=LG.map((r,i)=>`<div><img data-i="ic${String(i+1).padStart(2,'0')}" alt=""><p><b>${r[0]}</b><br>${r[1]}</p></div>`).join('');
 }else{ht.textContent='';app.innerHTML=`<div class="hero"><h1>Don't Starve Together — Mod Wiki</h1><p>Tra cứu hướng dẫn và thông tin các mod DST</p></div><div class="grid"><button class="card" onclick="go('#/mod/achievement-level')"><img data-i="logo" alt="Achievement &amp; Level"><div><b>Achievement &amp; Level</b><small>Hệ thống Thành tựu, Cấp độ, Perk (gồm Instant &amp; Global) và Nhiệm vụ theo mùa</small></div></button><button class="card" onclick="go('#/mod/yem-doc-tien')"><img data-i="yd_icon" alt="Yêm Đốc Tiên"><div><b>Yêm Đốc Tiên</b><small>Mod mở rộng cho 《Thần Thoại Thư Thuyết》: Nguyên Thìn Kiếp Vận, Tứ Tượng Tam Hợp Cục, Hỏa Nguyên Tôi Luyện, nhân vật và pháp bảo…</small></div></button><button class="card" onclick="go('#/mod/than-thoai')"><img src="images/than-thoai/mod-icon.jpg" alt="Thần Thoại Thư Thuyết"><div><b>Thần Thoại Thư Thuyết</b><small>Mod chủ đề thần thoại Tây Du: Đào Viên, Quảng Hàn Cung, Thanh Trúc Châu, NPC, Boss, luyện đan, pháp bảo, nông nghiệp, đằng vân…</small></div></button></div>`}
 document.querySelectorAll('img[data-i]').forEach(e=>e.src=IMG[e.dataset.i]);
 post(h);
}