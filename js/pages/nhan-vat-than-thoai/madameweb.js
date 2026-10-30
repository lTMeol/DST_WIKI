/* Thần Thoại Nhân Vật – trang "Bàn Ti Nương Nương"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVBT=(()=>{
/* ===== Ảnh minh họa: đường dẫn gốc + hàm dựng ảnh (sửa IMG nếu wiki đặt thư mục khác) ===== */
const IMG='images/nhan_vat/madameweb/';
const fig=(f,cap,w)=>`<figure style="margin:14px auto;padding:12px;max-width:${w||380}px;text-align:center;border:1px solid rgba(128,128,128,.28);border-radius:14px;background:radial-gradient(circle at 50% 40%,rgba(214,51,132,.10),rgba(128,128,128,.05) 70%)"><img src="${IMG}${f}" alt="${cap}" loading="lazy" style="display:block;margin:0 auto;max-width:100%;height:auto;filter:drop-shadow(0 4px 8px rgba(0,0,0,.35))"><figcaption style="margin-top:8px;font-size:.9em;opacity:.8">${cap}</figcaption></figure>`;
const gal=(a,w)=>`<div style="display:flex;flex-wrap:wrap;gap:14px;justify-content:center;align-items:stretch;margin:14px 0">${a.map(x=>fig(x[0],x[1],w||300).replace('margin:14px auto;','margin:0;flex:1 1 220px;')).join('')}</div>`;
const ico=(f,n)=>`<img src="${IMG}${f}" alt="${n}" loading="lazy" style="width:56px;height:56px;object-fit:contain;vertical-align:middle;margin-right:10px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.35))">`;
return [
['nv-bt','Bàn Ti Nương Nương',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: trị số tơ nhện, Bản Tướng Nhện Hoàng, tổ nhện, Bàn Ti Điếu, Bạc Ti Phi Vẫn]</blockquote>
<img src="${IMG}portrait.webp" alt="Bàn Ti Nương Nương" loading="lazy" style="display:block;width:340px;max-width:90%;height:auto;margin:16px auto;border-radius:16px;box-shadow:0 6px 18px rgba(0,0,0,.4)">
<p><b>Tổng quan cơ chế</b>: trị số tơ nhện, Bản Tướng Nhện Hoàng, bẫy mạng nhện, kho nhện dự trữ và Bàn Ti Điếu.</p>`,
[
['nv-bt-stats','Thuộc tính cơ bản',`
<table>
<tr><th>Hạng mục</th><th>Số liệu / quy tắc</th></tr>
<tr><td>Ba chỉ số ban đầu</td><td>120 / 150 / 120</td></tr>
<tr><td>Hệ số sát thương dạng người</td><td>0.75 lần</td></tr>
<tr><td>Tốc độ đói</td><td>Chuẩn 1 lần</td></tr>
<tr><td>Thịt</td><td>Dạ dày khỏe, ăn được thịt sống và thịt quái</td></tr>
<tr><td>Món yêu thích</td><td>Trứng chim sống, trứng chim chín; độ đói nhận được đều ×1.2</td></tr>
<tr><td>Lý trí ban đêm</td><td>Không chịu mức mất lý trí ban đêm thông thường</td></tr>
<tr><td>Lửa</td><td>Bản thân cháy và lửa cháy gần đó làm mất thêm lý trí; chịu sát thương lửa còn mất trị số tơ nhện</td></tr>
<tr><td>Độc</td><td>Miễn nhiễm hệ thống trúng độc của mod này và mây bào tử độc</td></tr>
<tr><td>Quan hệ với nhện</td><td>Sinh ra đã chung sống hòa bình với nhện</td></tr>
</table>`],

['nv-bt-silk','Trị số tơ nhện',`
<p>Trị số tơ nhện có trần <b>100</b>, ban đầu <b>0</b>, và lưu theo save nhân vật; công thức chuyên biệt, giảm sát thương của Nhện Hoàng, Bạc Ti Phi Vẫn, kết tơ đất, bay và nhảy treo đều tiêu hao trị số tơ nhện.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Trần trị số tơ nhện mặc định vẫn là 100 nguyên bản, có thể tăng lên 200 trong phần thiết lập; khi không bật tùy chọn này, mọi quy tắc tiêu hao và hồi phục ở mục này vẫn kết toán theo trần 100. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>
<h4>Nhận, mất &amp; hồi phục tự nhiên</h4>
<table>
<tr><th>Cách</th><th>Thay đổi trị số tơ nhện</th></tr>
<tr><td>Ăn thức ăn cho lý trí dương</td><td>Mỗi lần +2</td></tr>
<tr><td>Tự tay giết nhện hoặc đơn vị bay</td><td>Mỗi đơn vị +1; mục tiêu xếp chồng tính theo số chồng</td></tr>
<tr><td>Dùng Tuyến nhện lên chính mình</td><td>Thêm +5</td></tr>
<tr><td>Sắp xếp chuyên biệt tổ nhện cấp hai, cấp ba</td><td>+10</td></tr>
<tr><td>Chịu sát thương lửa</td><td>-1</td></tr>
<tr><td>Hồi tự nhiên dạng người ban ngày</td><td>1 / 48 điểm mỗi giây</td></tr>
<tr><td>Ban đêm, khi ngủ hoặc mặc Bàn Ti Phi Kiên</td><td>2 / 48 điểm mỗi giây</td></tr>
<tr><td>Bản Tướng Nhện Hoàng</td><td>2 / 48 + 0.3 điểm mỗi giây</td></tr>
</table>
<h4>Bàn Ti Phi Kiên</h4>
<p>Bàn Ti Phi Kiên là trang bị thân, <b>không có thuộc tính hấp thụ giáp</b>.</p>
<table>
<tr><th>Thuộc tính</th><th>Hiệu quả thực tế</th></tr>
<tr><td>Chống nước</td><td>Chống nước 100%</td></tr>
<tr><td>Giữ ấm</td><td>120 điểm giữ ấm</td></tr>
<tr><td>Vật chứa</td><td>2 ô, chỉ nhận vật chuyên biệt về nhện hoặc tơ</td></tr>
<tr><td>Trị số tơ nhện</td><td>Mọi thay đổi âm của trị số tơ nhện giảm một nửa, gồm chế tạo chuyên biệt, kỹ năng, bay, nhảy và tiêu hao giảm sát thương của Nhện Hoàng</td></tr>
<tr><td>Quan hệ với nhện</td><td>Mặc vào ngụy trang thành phe nhện, liên tục tự thu nạp nhện lân cận chưa đi theo, tối đa 10 con</td></tr>
<tr><td>Nhiên liệu</td><td>Tiêu hao nhiên liệu khi mặc; bổ sung được bằng tơ nhện thường, hết nhiên liệu thì biến mất</td></tr>
</table>
<p>Bàn Ti Phi Kiên làm giảm một nửa mọi thay đổi âm của trị số tơ nhện như bay, nhảy treo, kỹ năng, chế tạo và giảm sát thương của Nhện Hoàng; mức tiêu hao cơ bản 10 điểm thực tế chỉ trừ 5 điểm.</p>`],

['nv-bt-queen','Bản Tướng Nhện Hoàng',`
${fig('madameweb_spider_form.webp','Bản Tướng Nhện Hoàng',460)}
<p>Bản Tướng Nhện Hoàng cần Bàn Ti Nương Nương tự mình đọc Thiên Thư ở Linh Đài Phương Thốn Sơn để mở khóa. Sau khi vào, ba lô đóng, chức năng bắt thú đóng, thao tác bị giới hạn ở di chuyển và tấn công; nó <b>không chủ động cởi trang bị</b> của bạn, chỉ tạm thời không dùng vật phẩm và chế tạo theo logic dạng người được.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc Bản Tướng Nhện Hoàng</th></tr>
<tr><td>Tấn công cơ bản</td><td>100 sát thương, tầm đánh 6, chu kỳ đánh 1.2 giây</td></tr>
<tr><td>Tấn công diện rộng</td><td>Bán kính 4; không tấn công người chơi khi không PvP, tùy tùng của mình và nhện thường</td></tr>
<tr><td>Trúng độc</td><td>Đòn đánh thường trúng mục tiêu trúng độc được sẽ gây độc 20 giây, làm mới thời lượng và tăng tầng độc</td></tr>
<tr><td>Giảm sát thương thường trực</td><td>Hấp thụ 50%</td></tr>
<tr><td>Giảm sát thương nhờ tơ</td><td>Khi trị số tơ nhện lớn hơn 1, ép thêm sát thương lần này xuống còn 20%, đồng thời tiêu hao trị số tơ nhện theo sát thương</td></tr>
<tr><td>Di chuyển</td><td>Tốc độ đi/chạy thường 4; khi đứng trên nền mạng nhện hoặc nền mạng nhện lan ra thì tốc độ mặt đất ×2.25, khoảng 9 tốc độ chạy</td></tr>
<tr><td>Tầm nhìn</td><td>Nhìn đêm</td></tr>
<tr><td>Độ đói</td><td>Tiêu hao độ đói gấp 2; độ đói về 0 sẽ cưỡng chế quay về dạng người</td></tr>
<tr><td>Lý trí</td><td>Mỗi phút mất thêm 18 lý trí; giết kẻ địch đủ điều kiện hồi 5, giết mục tiêu sử thi hồi 10</td></tr>
<tr><td>Tùy tùng nhện</td><td>Tự tuyển nhện thường gần đó chưa đi theo, tối đa 10 con</td></tr>
</table>
<h4>Kết toán giảm sát thương</h4>
<p>Bản Tướng Nhện Hoàng có hai lớp phòng vệ và chúng nhân với nhau. Bỏ qua trang bị khác, giảm sát thương ngoài và sát thương đặc biệt, một lần sát thương gốc <b>100 điểm</b> sẽ:</p>
<ol>
<li>Tiêu hao <b>8 điểm trị số tơ nhện</b>;</li>
<li>Trước hết bị cơ chế tơ nhện ép xuống 20 điểm;</li>
<li>Rồi bị hấp thụ 50% của chính hình thái ép xuống còn <b>10 điểm sát thương máu</b>.</li>
</ol>
<p>Khi trị số tơ nhện giảm xuống 1 hoặc thấp hơn, lớp giảm sát thương nhờ tơ mất tác dụng, chỉ còn hấp thụ 50% của hình thái.</p>
<h4>Kết toán trúng độc</h4>
<p>Bản thể Nhện Hoàng, Bàn Ti Độc Châm, Nhện Độc Bàn Ti và Ong Độc Bàn Ti dùng chung một hệ độc. Lần trúng đầu là 1 tầng, trong thời gian duy trì trúng tiếp sẽ tăng từng tầng, tối đa <b>5 tầng</b>, mỗi lần đều làm mới thời gian còn lại thành <b>20 giây</b>; quá 10 giây không cộng thêm độc thì cứ 10 giây giảm 1 tầng.</p>
<table>
<tr><th>Mục tiêu</th><th>Kết toán sát thương độc</th></tr>
<tr><td>Sinh vật thường</td><td>Cứ 2 giây chịu sát thương <code>2×số tầng hiện tại</code>, tức mỗi nhịp 2—10 điểm</td></tr>
<tr><td>Sinh vật sử thi</td><td>Mỗi nhịp sát thương bằng 1% máu tối đa, mỗi nhịp không quá 500; khoảng cách là <code>12-2×số tầng</code> giây, tức 10 / 8 / 6 / 4 / 2 giây</td></tr>
</table>
<p>WX-78 không bị trúng độc; thực vật, công trình, tường, bóng bay, quân cờ máy, sinh vật bóng tối và các đối tượng loại trừ khác cũng không vào kết toán độc. Giải Độc Tán chỉ giải loại độc này đang có trên người dùng.</p>`],

['nv-bt-web','Mạng nhện, bẫy &amp; kho nhện dự trữ',`
<h4>Võng tơ nhện &amp; hành lang tơ đất</h4>
${fig('madameweb_net.webp','Võng Tơ Nhện',340)}
<p>Bàn Ti có thể làm Túi Ổ Nhện thành <b>Võng Tơ Nhện</b> rồi đặt. Nó tạo ra nền mạng nhện lan ra, đào bỏ được, đốt cháy được, vừa cho Nhện Hoàng tốc độ mặt đất 2.25 lần, vừa làm mạng lưới điểm đáp cho nhảy treo.</p>
<p>Ngoài ra Bàn Ti có động tác kết tơ đất: trên mặt đất tiêu hao <b>5 trị số tơ nhện</b> để tạm sinh một mảng tơ đất, mỗi mảng kéo dài <b>120 giây</b>; khi gần đó đã có tơ đất thì thời gian còn lại của nhau đều được làm mới thành 120 giây.</p>
<h4>Bẫy mạng nhện</h4>
${gal([['madameweb_pitfall.webp','Bẫy mạng nhện'],['madameweb_pitfall_cocoon.webp','Kén Khốn Đốn']],340)}
<p>Công thức Bẫy mạng nhện là <b>3 Tơ nhện + 1 Tuyến nhện</b>. Sau khi đặt, cứ <b>0.75 giây</b> kiểm tra mục tiêu trong bán kính <b>3</b>:</p>
<ul>
<li>Mục tiêu bẫy bắt được sẽ được cho vào bẫy;</li>
<li>Mục tiêu chiến đấu không phải trùm khác đủ điều kiện sẽ bị nhốt vào thực thể tên "Kén Khốn Đốn";</li>
<li>Người chơi, trùm, mục tiêu bay, hồn ma và tùy tùng người chơi của mình không kích hoạt.</li>
</ul>
<p>Kén Khốn Đốn có <b>200 máu</b>. Mục tiêu bị nhốt tấn công kén từ bên trong theo khoảng cách đánh gốc và sát thương cơ bản của nó; sát thương người chơi gây từ bên ngoài còn được cộng dồn vào trừ vào lượng máu còn lại của mục tiêu khi được thả. Kén vỡ thì mục tiêu xuất hiện lại và vào trạng thái trúng độc; nếu kén lúc đó đang cháy, mục tiêu được thả còn bị đốt. Vì vậy bẫy chỉ phụ trách cô lập tạm và gây sát thương sau đó, không phải vô điều kiện tiêu diệt mục tiêu.</p>
<h4>Kén Ong Độc &amp; Ong Độc Bàn Ti</h4>
${gal([['madameweb_poisonbeemine.webp','Kén Ong Độc'],['madameweb_bee.webp','Ong Độc Bàn Ti']],340)}
<p>Kén Ong Độc sau khi đặt thành mìn dùng một lần. Nhân vật, động vật hoặc quái vào bán kính <b>3</b> là kích hoạt; côn trùng và hồn ma người chơi không kích hoạt. Khoảng <b>0.3 giây (9 khung hình)</b> sau khi kích hoạt, mìn thả ra <b>4 Ong Độc Bàn Ti</b> rồi biến mất. Ong ưu tiên tấn công người kích hoạt; nếu mục tiêu ban đầu đã vô hiệu thì tìm lại mục tiêu đủ điều kiện trong phạm vi <b>25</b> quanh mìn.</p>
<table>
<tr><th>Thuộc tính Ong Độc Bàn Ti</th><th>Số liệu hoặc quy tắc</th></tr>
<tr><td>Máu</td><td>100</td></tr>
<tr><td>Một đòn đánh</td><td>10</td></tr>
<tr><td>Khoảng cách đòn đánh</td><td>2 giây</td></tr>
<tr><td>Hiệu quả thêm</td><td>Mỗi lần trúng sẽ gây hoặc cộng dồn độc Bàn Ti theo "kết toán trúng độc"</td></tr>
<tr><td>Bảo vệ phe</td><td>Không lấy Bàn Ti Nương Nương và các ấu thể chuyên biệt khác của Bàn Ti làm mục tiêu tấn công</td></tr>
</table>
<p>Ong Độc Bàn Ti không phải tùy tùng chỉ huy được, cũng không cất vào Tổ Nhện Bàn Ti được; hành vi cơ bản và vòng đời sau khi sinh ra theo ong mật thường. Nó khác công dụng với Nhện Độc Bàn Ti: Kén Ong Độc lo thả một lần, còn Tổ Nhện Bàn Ti lo dự trữ lâu dài và thả nhện chiến chuyên biệt.</p>
<h4>Tổ nhện &amp; nhện chiến chuyên biệt</h4>
${gal([['madameweb_spiderhome.webp','Tổ Nhện Bàn Ti'],['madameweb_spider_warrior.webp','Nhện chiến chuyên biệt']],340)}
<p>"Trứng Nhện Bàn Ti" sau khi đặt thành tổ nhện chuyên biệt. Mỗi ban ngày tổ tự bổ sung 1 nhện chiến vào kho, tối đa lưu <b>6</b> con; nhện chiến bị thương trong kho mỗi giây hồi <b>2 máu</b>, đến khi hồi về giới hạn máu của nhện chiến thường.</p>
<table>
<tr><th>Thao tác lên tổ nhện</th><th>Kết quả</th></tr>
<tr><td>Giao cho tổ một nhện chiến chuyên biệt</td><td>Vào kho; giữ nguyên máu chưa đầy và chậm rãi được chữa trong tổ</td></tr>
<tr><td>Giao cho tổ một phần thịt</td><td>Nếu có nhện trong kho thì thả 1 nhện chiến chuyên biệt và cho nó đi theo bạn</td></tr>
<tr><td>Tổ nhện bị phá</td><td>Thả toàn bộ nhện chiến trong tổ, nhưng không tự thành tùy tùng của bạn</td></tr>
<tr><td>Bị đánh trực tiếp</td><td>Bản thân tổ nhện có 200 máu, đốt cháy được</td></tr>
</table>
<p>Nhện chiến chuyên biệt tấn công kèm độc, và không thù địch với Bàn Ti; khi Bàn Ti bị đánh hoặc tấn công mục tiêu, sẽ kéo các nhện chiến chuyên biệt do mình dẫn đầu ở gần vào cùng mục tiêu. Chúng là tuyến chiến đấu di động, không đồng nhất với nhện thường được tạm thu nạp trong Bản Tướng Nhện Hoàng.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Thủy cục đổi sang gọi nhện độc bằng "Hoán Chu" trên thanh kỹ năng, "giăng lưới" nguyên bản không còn gọi. Nhện độc tan biến sau 60 giây, khi chủ chết hoặc rời đi, khi thủy cục mất hiệu lực hoặc bị nhấc lên, trang bị trên người rơi ra, không cất vào Tổ Nhện Bàn Ti được; thủy cục thành cục rồi không bị tiếng gầm của trùm làm hoảng sợ. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/systems')">Tứ Tượng Tam Hợp Cục</a>.</blockquote>`],

['nv-bt-items','Vật phẩm &amp; công thức chuyên biệt',`
<p>Mọi công thức dưới đây đều làm trong trang chuyên biệt của Bàn Ti, không cần trạm công nghệ thêm.</p>
<table>
<tr><th>Vật phẩm</th><th>Công thức</th><th>Hiệu quả &amp; giới hạn</th></tr>
<tr><td>Tơ nhện thường</td><td>3 trị số tơ nhện</td><td>Đổi trị số tơ nhện thành nguyên liệu thực thể; không phân giải ngược được</td></tr>
<tr><td>Túi Ổ Nhện</td><td>12 Tơ nhện + 6 Tuyến nhện</td><td>Làm tiếp Võng Tơ Nhện hoặc làm nguyên liệu tổ nhện chuyên biệt, là cơ sở mở rộng khu vực</td></tr>
<tr><td>${ico('madameweb_net.webp','Võng Tơ Nhện')}Võng Tơ Nhện</td><td>1 Túi Ổ Nhện</td><td>Đặt thành nền mạng nhện cháy được, cho Nhện Hoàng vùng tốc độ cao</td></tr>
<tr><td>${ico('madameweb_pitfall.webp','Bẫy mạng nhện')}Bẫy mạng nhện</td><td>3 Tơ nhện + 1 Tuyến nhện</td><td>Đặt trước để khống chế quái nhỏ; đào đi thì thu hồi được</td></tr>
<tr><td>${ico('madameweb_stinger.webp','Bàn Ti Phong Châm')}Bàn Ti Phong Châm</td><td>1 Tơ nhện + 3 Ngòi ong</td><td>Kim tầm xa dùng một lần, 26.67 sát thương, tầm đánh 8 / tầm bắn 10</td></tr>
<tr><td>${ico('madameweb_poisonstinger.webp','Bàn Ti Độc Châm')}Bàn Ti Độc Châm</td><td>3 Bàn Ti Phong Châm + 1 Cánh hoa</td><td>Cũng là kim tầm xa dùng một lần, và gây độc sau khi trúng</td></tr>
<tr><td>${ico('madameweb_poisonbeemine.webp','Kén Ong Độc')}Kén Ong Độc</td><td>3 Tơ nhện + 4 Ong mật + 1 Cánh hoa</td><td>Đặt thành mìn ong độc dùng một lần bán kính 3; kích hoạt xong thả 4 Ong Độc Bàn Ti tấn công mục tiêu kích hoạt, thân mìn biến mất</td></tr>
<tr><td>${ico('madameweb_spiderhome.webp','Trứng Nhện Bàn Ti')}Trứng Nhện Bàn Ti</td><td>1 Túi Ổ Nhện + 2 Tuyến nhện + 6 Cánh hoa</td><td>Đặt thành tổ nhện Bàn Ti 200 máu; ban ngày bổ sung kho nhện chiến chuyên biệt, tối đa 6 con, quy tắc cất lấy cụ thể xem "Tổ nhện &amp; nhện chiến chuyên biệt"</td></tr>
<tr><td>${ico('madameweb_armor.webp','Bàn Ti Phi Kiên')}Bàn Ti Phi Kiên</td><td>Mũ nhện + 12 Tơ nhện + 1 Da xúc tu</td><td>Giảm một nửa tài nguyên, chống nước, giữ ấm, vật chứa chuyên biệt hai ô và tự thu nhện; không phải giáp</td></tr>
<tr><td>${ico('madameweb_silkcocoon.webp','Túi Kén Tơ')}Túi Kén Tơ</td><td>6 Tơ nhện + 2 Cánh hoa</td><td>Vật chứa đóng gói 4 ô; không chứa vật không thể thay thế, vật chứa khác, gói buộc hay vật cấm đóng gói</td></tr>
<tr><td>${ico('madameweb_detoxify.webp','Giải Độc Tán')}Giải Độc Tán</td><td>1 Tuyến nhện</td><td>Giải độc khi người dùng đang trúng độc; không phải kỹ năng giải độc diện rộng</td></tr>
</table>
<h4>Túi Kén Tơ &amp; Kén Treo Bàn Ti</h4>
${fig('madameweb_silkcocoon.webp','Túi Kén Tơ',320)}
<p>Túi Kén Tơ sau khi gói hiển thị là "Túi Dệt Bàn Ti", mở ra được như gói thông thường. Túi dệt còn đặt được thành Kén Treo Bàn Ti ở <b>hang động, trong nhà hoặc vùng có bóng tán cây</b>; các khoảng đất trống ngoài mặt đất khác không treo được. Kén treo không mở trực tiếp được, thực hiện thu lại sẽ trả về Túi Dệt Bàn Ti chứa nguyên nội dung.</p>
<p>Nếu nội dung gói có đom đóm, kén treo sẽ phát sáng ban đêm: theo số đom đóm 1 / 2 / 3 / 4 / 5 trở lên, bán kính chiếu sáng lần lượt khoảng <b>1.5 / 2 / 2.5 / 3 / 5</b>. Trạng thái treo đốt cháy được; cháy hết thì bản thân kén treo biến mất ngay, vì vậy đừng treo đồ quan trọng lâu dài gần nguồn lửa.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Công thức chuyên biệt của Bàn Ti tự khôi phục về đúng phân loại chế tạo nhân vật; thanh nhân vật sẽ không còn lẫn công thức chăm sóc nhện chuyên biệt của Webber, công thức của chính Bàn Ti vẫn hiển thị bình thường. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-bt-zip','Dây Trượt Bàn Ti, Dây Trượt Biển &amp; Bộ Ti Lý',`
${gal([['hua_internet_node_item.webp','Dây Trượt Bàn Ti'],['hua_internet_node_sea_item.webp','Dây Trượt Biển'],['hua_fake_spider_shoe.webp','Bộ Ti Lý']],260)}
<p>Bàn Ti Nương Nương có thể dựng mạng lưới dây trượt gồm nút đất liền, nút mặt biển và dây nối tơ nhện. Đó là tuyến trượt liên tục, không phải máy dịch chuyển mở bản đồ chọn điểm đến.</p>
<table>
<tr><th>Vật thể</th><th>Công thức</th><th>Tác dụng hiện tại</th></tr>
<tr><td>${ico('hua_internet_node_item.webp','Dây Trượt Bàn Ti')}Dây Trượt Bàn Ti</td><td>Vàng thỏi ×1, Ngòi ong ×1, Tơ nhện ×4</td><td>Đặt thành "Điểm Mốc Bàn Ti" trên đất liền</td></tr>
<tr><td>${ico('hua_internet_node_sea_item.webp','Dây Trượt Biển')}Dây Trượt Biển</td><td>Dây Trượt Bàn Ti ×1, Sea Strider ×1</td><td>Đặt thành "Điểm Mốc Biển" trên mặt biển; tạo nút mặt biển có thể va chạm với thuyền</td></tr>
<tr><td>${ico('hua_fake_spider_shoe.webp','Bộ Ti Lý')}Bộ Ti Lý</td><td>Cánh hoa ×6, Tơ nhện ×12</td><td>Để trong túi đồ chính là cho nhân vật không phải nhện dùng được dây trượt, và di chuyển trên nền mạng nhện theo hệ số tốc độ mặt đất nhanh của nhện</td></tr>
</table>
<p>Chỉ Bàn Ti Nương Nương làm được thao tác "Nối dây": lần lượt chọn hai nút khác nhau, khoảng cách đường thẳng giữa hai điểm không quá <b>40</b>. Số tơ nhện cần để nối là <code>làm tròn xuống(2 + khoảng cách×0.5)</code>, nên trong phạm vi hợp lệ thường tốn 2—22 sợi; cùng một cặp nút không nối lặp được.</p>
<p>Bàn Ti Nương Nương và Webber dùng thẳng mạng lưới được; nhân vật khác cần để Bộ Ti Lý trong túi đồ chính. Người dùng đứng ở vị trí cách dây nối không quá <b>1</b>, thực hiện "Trượt" lên nút sẽ tiến theo dây với tốc độ <b>20</b>; khi qua ngã rẽ, loại bỏ dây vừa đi qua và tự chọn dây ngắn nhất trong các dây còn lại. Di chuyển, tấn công hoặc bấm chuột trái đều ngắt được việc trượt.</p>
<p>Bộ Ti Lý hiện có 300 điểm nhiên liệu sử dụng: nhân vật không phải nhện mang nó di chuyển liên tục trên nền mạng nhện thì khoảng mỗi giây tiêu hao 1 điểm, hết thì vật phẩm biến mất; bản thân việc đi dây trượt không trừ thêm nhiên liệu này. Dây nối tơ nhện cắt bỏ được và trả lại khoảng một nửa tơ dùng để dựng; đào nút sẽ cùng lúc gỡ mọi đoạn dây nối với nó.</p>`],

['nv-bt-hang','Bàn Ti Điếu &amp; Bàn Ti Truỵ',`
<h4>Bàn Ti Điếu</h4>
${fig('madameweb_feisheng.webp','Bàn Ti Điếu',360)}
<p>Chế tạo "Bàn Ti Điếu" trong trang chế tạo chuyên biệt của Bàn Ti là cất cánh được, tiêu hao <b>10 trị số tơ nhện</b>. Trên mặt đất, điểm cất cánh phải nằm trong <b>vùng bóng của tán cây lớn</b>; ở hang động thì cất cánh thẳng được. Cưỡi thú không cất cánh được.</p>
<p>Khi bay, nhân vật tàng hình, không bị chọn, không va chạm, không chết đuối và ở trạng thái bất tử, vượt được mặt biển; đồng thời có nhìn đêm, đa số động tác thông thường bị đóng, chỉ chọn hạ cánh được. Cái giá và điều kiện kết thúc cũng rõ ràng:</p>
<table>
<tr><th>Điều kiện</th><th>Kết quả</th></tr>
<tr><td>Trong lúc treo</td><td>Tiêu hao độ đói thành 4 lần</td></tr>
<tr><td>Độ đói về 0</td><td>Tự hạ cánh</td></tr>
<tr><td>Ra khỏi bóng tán cây</td><td>Tự hạ cánh</td></tr>
<tr><td>Đóng băng</td><td>Khi bay không tích lạnh</td></tr>
<tr><td>Buồn ngủ hoặc động đất</td><td>Bị buộc rơi xuống; rơi xuống chịu 20 sát thương máu</td></tr>
</table>
<h4>Bàn Ti Truỵ</h4>
<p>Ở trạng thái Bản Tướng Nhện Hoàng, dùng kỹ năng chuột phải lên nền mạng nhện lan ra sẵn có để hạ xuống ở xa nhất khoảng <b>36</b> ô, tiêu hao <b>10 trị số tơ nhện</b>. Khi chạm đất gây <b>100 sát thương</b> trong bán kính <b>6</b> và kèm trúng độc, không làm bị thương người chơi, nhện thường, nhện chiến của mình và tùy tùng phe ta.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Năng lực hỏa cục đổi sang "Viêm Bạo" chủ động phát động trên thanh kỹ năng, cơ bản 50, thành cục 200 sát thương vị diện; khi thành cục, trong 7 giây sau khi Viêm Bạo thành công mỗi đòn đánh thường gây thêm 50 sát thương vị diện. Bàn Ti Truỵ giữ nguyên hiệu quả nguyên bản. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/systems')">Tứ Tượng Tam Hợp Cục</a>.</blockquote>`],

['nv-bt-kiss','Bạc Ti Phi Vẫn',`
<p>Bạc Ti Phi Vẫn cần <b>tay không</b> chuột phải, khoảng cách dùng <b>10</b>, mỗi lần dùng xong có khoảng nghỉ <b>10 giây</b>.</p>
<table>
<tr><th>Mục tiêu</th><th>Tiêu hao</th><th>Hiệu quả</th></tr>
<tr><td>Mục tiêu vợt bắt côn trùng bắt được</td><td>1 trị số tơ nhện</td><td>Hoàn tất ngay một lần bắt bằng vợt</td></tr>
<tr><td>Sinh vật nhỏ</td><td>1 trị số tơ nhện</td><td>Định thân 5 giây</td></tr>
<tr><td>Sinh vật thường</td><td>1.5 trị số tơ nhện</td><td>Định thân 5 giây</td></tr>
<tr><td>Sinh vật lớn hoặc sử thi</td><td>2 trị số tơ nhện</td><td>Định thân 5 giây</td></tr>
</table>
<p>Khi không PvP không dùng lên người chơi khác được.</p>`]
]]
];
})();