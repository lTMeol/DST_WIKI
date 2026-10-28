/* ============================================================
   Yêm Đốc Tiên – bảng trang & hàm render
   ============================================================ */
const YDPAGES={'':[YDS,'Giới thiệu mod'],'/systems':[YDSYS,'Hệ thống cốt lõi'],'/characters':[YDCH,'Nhân vật tinh quái'],'/artifacts':[YDAF,'Pháp bảo trang bị'],'/optimizations':[YDOP,'Tối ưu thần thoại'],'/compatibility':[YDCP,'Tương thích sửa lỗi']};
function ydRender(h){
 const hh=h.split('@')[0],k=Object.keys(YDPAGES).find(x=>x&&hh.indexOf('#/mod/yem-doc-tien'+x)==0)||'',SX=YDPAGES[k][0],NM=YDPAGES[k][1];
 ht.textContent='/ Yêm Đốc Tiên';
 let nav=`<nav><h4>${NM}</h4>`,art='';
 SX.forEach(([id,t,b,subs])=>{nav+=`<button onclick="sc('${id}')" data-s="${id}">${t}</button>`;art+=`<section id="${id}"><h2>${t}</h2>${YDMEDIA[id]||''}${b||''}`;(subs||[]).forEach(([sid,st,sb])=>{nav+=`<button class="s" onclick="sc('${sid}')" data-s="${sid}">${st}</button>`;art+=`<h3 id="${sid}">${st}</h3>${YDMEDIA[sid]||''}${sb}`});art+='</section>'});
 app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/yem-doc-tien')">Yêm Đốc Tiên</a> › ${NM}</p><div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img data-i="yd_icon" alt="Biểu tượng mod Yêm Đốc Tiên" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Yêm Đốc Tiên</h1><p>Wiki mod Don't Starve Together — mở rộng cho 《Thần Thoại Thư Thuyết》 — ${NM}</p></div></div>${ydTabs(k)}<div class="layout">${nav}</nav><article>${art}</article></div>`;
 document.querySelectorAll('img[data-i]').forEach(e=>e.src=IMG[e.dataset.i]);
 ydFilter();
}
