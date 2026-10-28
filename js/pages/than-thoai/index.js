/* Thần Thoại Thư Thuyết – bảng trang & hàm render (theo mẫu yem-doc-tien/index.js)
   Thêm tab mới: khai báo mảng TTx trong file riêng rồi thêm 1 dòng vào TTPAGES. */
const TTICON='images/than-thoai/mod-icon.jpg';
const TTPAGES={'':[TTS,'Tổng quan chủ đề'],'/world':[TTW,'Thế giới &amp; địa điểm'],'/npcs':[TTN,'NPC &amp; tương tác'],'/creatures':[TTC,'Thủ lĩnh &amp; quái vật'],'/artifacts':[TTA,'Luyện đan &amp; pháp bảo'],'/agriculture':[TTAG,'Nông nghiệp &amp; ẩm thực']};
function ttTabs(k){return `<div class="tabs">${Object.keys(TTPAGES).map(x=>`<a class="${x===k?'on':''}" onclick="go('#/mod/than-thoai${x}')">${TTPAGES[x][1]}</a>`).join('')}</div>`}
function ttRender(h){
 const hh=h.split('@')[0],k=Object.keys(TTPAGES).find(x=>x&&hh.indexOf('#/mod/than-thoai'+x)==0)||'',SX=TTPAGES[k][0],NM=TTPAGES[k][1];
 ht.textContent='/ Thần Thoại Thư Thuyết';
 let nav=`<nav><h4>${NM}</h4>`,art='';
 SX.forEach(([id,t,b,subs])=>{nav+=`<button onclick="sc('${id}')" data-s="${id}">${t}</button>`;art+=`<section id="${id}"><h2>${t}</h2>${b||''}`;(subs||[]).forEach(([sid,st,sb])=>{nav+=`<button class="s" onclick="sc('${sid}')" data-s="${sid}">${st}</button>`;art+=`<h3 id="${sid}">${st}</h3>${sb}`});art+='</section>'});
 app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/than-thoai')">Thần Thoại Thư Thuyết</a> › ${NM}</p><div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img src="${TTICON}" alt="Biểu tượng mod Thần Thoại Thư Thuyết" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Thần Thoại Thư Thuyết</h1><p>Wiki mod Don't Starve Together — Chủ đề Thần Thoại — ${NM}</p></div></div>${ttTabs(k)}<div class="layout">${nav}</nav><article>${art}</article></div>`;
}