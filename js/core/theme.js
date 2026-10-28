/* ============================================================
   Đổi giao diện sáng/tối + phím tắt "/" để tìm
   ============================================================ */
function themeLabel(){const b=document.getElementById('themebtn');if(!b)return;const c=document.documentElement.dataset.theme||'auto';b.textContent=c=='dark'?'🌙':c=='light'?'☀️':'🌓';b.title='Giao diện: '+({auto:'Tự động',dark:'Tối',light:'Sáng'})[c]}
function themeCycle(){const r=document.documentElement,c=r.dataset.theme||'auto',n=c=='auto'?'dark':c=='dark'?'light':'auto';if(n=='auto')delete r.dataset.theme;else r.dataset.theme=n;try{localStorage.setItem('dst_theme',n)}catch(e){}themeLabel()}
(function(){try{const t=localStorage.getItem('dst_theme');if(t&&t!='auto')document.documentElement.dataset.theme=t}catch(e){}themeLabel()})();
addEventListener('keydown',e=>{if(e.key=='/'&&!/INPUT|TEXTAREA/.test((document.activeElement||{}).tagName||'')){const q=document.querySelector('input[type=search]');if(q){e.preventDefault();q.focus()}}});
