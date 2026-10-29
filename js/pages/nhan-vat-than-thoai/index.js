/* Thần Thoại Nhân Vật – bảng trang & hàm render (theo mẫu than-thoai/index.js)
   Thêm trang nhân vật: khai báo mảng NVx trong file riêng (vd nv-sun-wukong.js), thêm <script> vào index.html
   trước file này, rồi thêm 1 dòng vào NVPAGES, ví dụ '/sun-wukong':[NVSW,'Tôn Ngộ Không'] */
const NVICON='images/than-thoai/mod-icon.jpg';
const NVPAGES={'':[NVO,'Tổng quan nhân vật'],'/sun-wukong':[NVSW,'Tôn Ngộ Không'],'/nezha':[NVNZ,'Na Tra'],'/white-bone':[NVWB,'Bạch Cốt Phu Nhân'],'/pigsy':[NVPG,'Trư Bát Giới'],'/yangjian':[NVYJ,'Dương Tiễn']};
function nvTabs(k){return `<div class="tabs">${Object.keys(NVPAGES).map(x=>`<a class="${x===k?'on':''}" onclick="go('#/mod/nhan-vat-than-thoai${x}')">${NVPAGES[x][1]}</a>`).join('')}</div>`}
function nvRender(h){
 const hh=h.split('@')[0],k=Object.keys(NVPAGES).find(x=>x&&hh.indexOf('#/mod/nhan-vat-than-thoai'+x)==0)||'',SX=NVPAGES[k][0],NM=NVPAGES[k][1];
 ht.textContent='/ Thần Thoại Nhân Vật';
 let nav=`<nav><h4>${NM}</h4>`,art='';
 SX.forEach(([id,t,b,subs])=>{nav+=`<button onclick="sc('${id}')" data-s="${id}">${t}</button>`;art+=`<section id="${id}"><h2>${t}</h2>${b||''}`;(subs||[]).forEach(([sid,st,sb])=>{nav+=`<button class="s" onclick="sc('${sid}')" data-s="${sid}">${st}</button>`;art+=`<h3 id="${sid}">${st}</h3>${sb}`});art+='</section>'});
 app.innerHTML=`<p class="crumb"><a onclick="go('')">Trang chủ</a> › <a onclick="go('#/mod/nhan-vat-than-thoai')">Thần Thoại Nhân Vật</a> › ${NM}</p><div class="hero" style="text-align:left;padding:6px 0 16px;display:flex;gap:16px;align-items:center"><img src="${NVICON}" alt="Biểu tượng mod Thần Thoại" style="width:84px;border-radius:12px"><div><h1 style="margin:0">Thần Thoại Nhân Vật</h1><p>Wiki mod Don't Starve Together — Nhân vật Thần Thoại — ${NM}</p></div></div>${nvTabs(k)}<div class="layout">${nav}</nav><article>${art}</article></div>`;
}