/* ============================================================
   Khởi tạo: tham chiếu #app, cuộn mục, chuyển trang, nút lên đầu, hook sau khi render
   ============================================================ */
function post(h){if(h.startsWith('#/mod/achievement-level/instant'))inInit();if(h.startsWith('#/mod/achievement-level/produce')){try{const k=JSON.parse(localStorage.getItem('dst_pr_sel')||'[]');document.querySelectorAll('.pt2 input[type=checkbox]').forEach(c=>c.checked=k.includes(c.dataset.k))}catch(e){}prCalc()}}
(function(){const b=document.createElement('button');b.id='top';b.textContent='▲';b.title='Lên đầu trang';b.setAttribute('aria-label','Lên đầu trang');b.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.appendChild(b);addEventListener('scroll',()=>{b.style.display=scrollY>600?'block':'none'},{passive:true})})();
const app=document.getElementById('app'),ht=document.getElementById('ht');
function sc(id){const e=document.getElementById(id);e&&e.scrollIntoView({behavior:'smooth'});document.querySelector('nav').classList.remove('open')}
function go(h){location.hash=h}
