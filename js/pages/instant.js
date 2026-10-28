/* ============================================================
   Perk Instant (dữ liệu + bộ đếm + lọc)
   ============================================================ */
const inE=t=>t.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
const INS=[
['ks','Khởi đầu mới','1','Xóa phạt máu rồi hồi đầy mọi chỉ số (độ đói, máu, tinh thần).','hồi đầy máu đói tinh thần phạt máu',''],
['ch','Chiêu hồn','1','Hồi sinh tất cả người chơi đã chết.','hồi sinh revive',  'Chỉ hồi sinh người chơi ở cùng một shard.'],
['nt','Nhà thám hiểm dày dạn','1','Nhận ngay <b>500 XP</b>.','kinh nghiệm xp',''],
['ts','Tặng sao','1','Tặng 1 <b>Sao</b> cho người chơi gần nhất.','star tặng',''],
['cs','Chia sẻ sao','N','Tặng 1 <b>Sao</b> cho tất cả người chơi khác.','star chia sẻ tặng','Chi phí bằng số người chơi khác (N).'],
['cb','Nhà thám hiểm chuẩn bị','1','Nhận 20 gỗ, đá, cành cây và cỏ cắt, đá lửa, 15 sậy, 10 cục vàng, diêm tiêu, cà rốt và thịt nhỏ.','vật liệu khởi đầu gỗ đá cành cỏ sậy vàng',''],
['kd','Khắc dấu thân thuộc','2','Nhận <b>Trứng Đá</b>. Có thể ấp thành <b>Ro Bin</b>, sinh vật giống Chester. <a href="#" onclick="sc(\'in-robin\');return false">Xem chi tiết bên dưới</a>.','ro bin trứng đá chester thú cưng',''],
['dc','Đuổi chó săn','1','Giết ngay lập tức tất cả chó săn ở gần.','hound varg',''],
['mh','Máy hút bụi','1','Nhặt tất cả vật phẩm bị rơi trong thế giới.','nhặt vật phẩm rơi','Có thể gây lag vài giây ở thế giới lớn.'],
['ck','Chiều không gian khác','2','Tạo một khe nứt (rift) gần đó (nếu có thể).','rift khe nứt','']];
const inCard=x=>`<div class="ins" data-in data-c="${x[2]}" id="in-${x[0]}" data-n="${inE((x[1]+' '+x[4]+' '+x[3].replace(/<[^>]+>/g,' ')).toLowerCase())}"><div class="ins-h"><img class="sti" data-i="star" alt=""><b>${x[1]}</b><span class="cost" id="cs-${x[0]}">${x[2]} ★</span></div><p>${x[3]}</p>${x[5]?`<div class="tip bl"><img class="tb" data-i="gb2" alt="">${x[5]}</div>`:''}<div class="qty"><button onclick="inQ('${x[0]}',-1)" aria-label="Giảm">−</button><b id="q-${x[0]}">0</b><button onclick="inQ('${x[0]}',1)" aria-label="Tăng">+</button><span class="mu">lần nhận</span></div></div>`;
const inFig=(k,t)=>`<figure><img data-i="${k}" alt="${t}"><figcaption>${t}</figcaption></figure>`;
const INSUM=INS.reduce((a,x)=>a+(+x[2]||0),0),INN=INS.filter(x=>x[2]=='N').length;
const SEC5=[
['in-gt','Giới thiệu',`<img class="emb" data-i="ins_meteor" alt="Perk Tức thì" style="width:230px"><p>Không như các perk khác, các Perk <b>Tức thì (Instant)</b> chỉ tạo hiệu ứng <b>một lần</b> khi nhận và có thể được nhận <b>nhiều lần</b>.</p><div class="tip"><b>Lưu ý: </b>Sao đã tiêu cho perk Instant không được hoàn lại khi đặt lại perk.</div><p class="mu">${INS.length} perk · nhận mỗi loại một lần hết <b class="st">${INSUM} ★</b>${INN?` + ${INN} perk tính theo số người chơi`:''}.</p>`,[]],
['in-ds','Danh sách Perk Instant',`<div class="bar"><input id="inq" type="search" placeholder="Tìm perk (vd: hồi sinh, XP, chó săn)…" oninput="inFilter()"><button onclick="inReset()">Đặt lại</button></div><div class="fcs"><span class="mu">Giá:</span><button class="fc" data-g="in" data-k="1" onclick="this.classList.toggle('on');inFilter()">1 ★</button><button class="fc" data-g="in" data-k="2" onclick="this.classList.toggle('on');inFilter()">2 ★</button><button class="fc" data-g="in" data-k="N" onclick="this.classList.toggle('on');inFilter()">Theo số người (N)</button><span class="mu" id="incount"></span></div><p class="mu" style="margin:6px 0">Bấm <b>+</b> để tính số lần định nhận; thanh bên dưới cộng dồn tổng Sao cần dùng.</p><div class="ingrid">${INS.map(inCard).join('')}</div><div class="sumbar"><span>Đã chọn: <b id="incnt">0</b> lượt</span><span>Tổng: <b id="insum" class="cost">0 ★</b></span><label class="mu">Số người chơi khác (N): <input id="inN" type="number" min="0" max="99" value="3" oninput="inCalc()" style="width:58px;font:inherit;border:1px solid var(--bd);border-radius:6px;background:var(--sf);color:var(--tx);padding:1px 6px"></label></div>`,[]],
['in-robin','Khắc dấu thân thuộc: Ro Bin',`<p>Perk này tặng một <b>Trứng Đá</b>. Ấp trứng sẽ được <b>Ro Bin</b> — một sinh vật chứa đồ giống Chester, đi cùng <b>Đá Mề Ro Bin</b>.</p>
<div class="ps">${inFig('ins_egg','Trứng Đá')}${inFig('ins_gz1','Đá Mề Ro Bin (Hoạt động)')}${inFig('ins_gz2','Đá Mề Ro Bin (Đã chết)')}</div>
<div class="tw"><table><tr><th>Vật phẩm</th><th>Mô tả</th></tr>
<tr><td><b>Trứng Đá</b></td><td>Có thể ấp thành Ro Bin.</td></tr>
<tr><td><b>Đá Mề Ro Bin (Hoạt động)</b></td><td>Ro Bin đi theo vật phẩm này, giống như Chester đi theo Xương Mắt.</td></tr>
<tr><td><b>Đá Mề Ro Bin (Đã chết)</b></td><td>Khi Ro Bin chết, đôi mắt trên Đá Mề sẽ nhắm lại và Ro Bin không hồi sinh.</td></tr></table></div>
<div class="rob"><img class="rpic" data-i="ins_robin" alt="Ro Bin"><div><div class="rname">Ro Bin</div><div class="rst"><span><img data-i="ins_heart" alt="Máu">600</span><span><img data-i="ins_speed" alt="Tốc độ">5</span><span><img data-i="ins_bag" alt="Số ô">9 Ô</span></div><ul><li>Đi theo <b>Đá Mề Ro Bin</b>, giống như <b>Chester</b> đi theo <b>Xương Mắt</b>.</li><li>Hồi <b>10 Máu mỗi giây</b>.</li><li>Khi Ro Bin chết, đôi mắt trên Đá Mề sẽ nhắm lại và Ro Bin sẽ không hồi sinh. Tuy nhiên, đưa nó cho <b>Brrrd</b> sẽ nhận được <b>Trứng Đá</b> mới.</li></ul></div></div>`,[]],
['in-gia','Phân loại theo giá',`<div class="tw"><table><tr><th class="num">Giá</th><th>Perk</th></tr><tr><td class="num"><span class="st">1 ★</span></td><td>${INS.filter(x=>x[2]=='1').map(x=>'<span class="it">'+x[1]+'</span>').join(' ')}</td></tr><tr><td class="num"><span class="st">2 ★</span></td><td>${INS.filter(x=>x[2]=='2').map(x=>'<span class="it">'+x[1]+'</span>').join(' ')}</td></tr><tr><td class="num"><span class="st">N ★</span></td><td>${INS.filter(x=>x[2]=='N').map(x=>'<span class="it">'+x[1]+'</span>').join(' ')} <span class="mu">(bằng số người chơi khác)</span></td></tr></table></div>`,[]]];


let INQ={};
function inInit(){try{INQ=JSON.parse(localStorage.getItem('dst_in_q')||'{}')||{};const n=localStorage.getItem('dst_in_n'),e=document.getElementById('inN');if(n!==null&&e)e.value=n}catch(e){INQ={}}inCalc();inFilter()}
function inQ(k,d){INQ[k]=Math.max(0,Math.min(99,(INQ[k]||0)+d));inCalc()}
function inCalc(){const N=Math.max(0,+((document.getElementById('inN')||{}).value)||0);let s=0,n=0;
 document.querySelectorAll('[data-in]').forEach(e=>{const k=e.id.slice(3),q=INQ[k]||0,c=e.dataset.c=='N'?N:+e.dataset.c,b=document.getElementById('q-'+k);if(b)b.textContent=q;e.classList.toggle('sel',q>0);s+=q*c;n+=q;if(e.dataset.c=='N'){const cs=document.getElementById('cs-'+k);if(cs)cs.textContent=N+' ★'}});
 const a=document.getElementById('insum'),b=document.getElementById('incnt');if(a)a.textContent=s+' ★';if(b)b.textContent=n;
 try{localStorage.setItem('dst_in_q',JSON.stringify(INQ));localStorage.setItem('dst_in_n',String(N))}catch(e){}}
function inFilter(){const q=((document.getElementById('inq')||{}).value||'').trim().toLowerCase(),act=[...document.querySelectorAll('.fc.on[data-g="in"]')].map(c=>c.dataset.k);let n=0;
 document.querySelectorAll('[data-in]').forEach(e=>{const ok=(!q||e.dataset.n.includes(q))&&(!act.length||act.includes(e.dataset.c));e.style.display=ok?'':'none';if(ok)n++});
 const c=document.getElementById('incount');if(c)c.textContent=n+' perk'}
function inReset(){INQ={};const q=document.getElementById('inq');if(q)q.value='';document.querySelectorAll('.fc.on[data-g="in"]').forEach(c=>c.classList.remove('on'));inCalc();inFilter()}
