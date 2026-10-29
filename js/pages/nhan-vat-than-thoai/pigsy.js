/* Thần Thoại Nhân Vật – trang "Trư Bát Giới"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVPG=[
['nv-pg','Trư Bát Giới',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Cửu Xỉ Đinh Ba, bậc độ đói, hình thái Cương Liệp, nông vụ, người heo, giường ngủ, Mây Bông]</blockquote>
<p><b>Tổng quan cơ chế</b>: độ đói phân bậc, thu hoạch nông vụ, đỡ đòn bằng Cửu Xỉ Đinh Ba, hình thái Cương Liệp và Mây Bông.</p>
<p style="text-align:center"><img src="images/nhan_vat/pigsy/portrait_7b510b.webp" alt="Trư Bát Giới" loading="lazy" style="width:360px;max-width:100%;height:auto;display:block;margin:12px auto"></p>`,
[
['nv-pg-stats','Thuộc tính cơ bản &amp; bậc độ đói',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Ba chỉ số</td><td><b>250 máu / 300 đói / 100 lý trí</b>; độ đói lúc sinh ra là 200</td></tr>
<tr><td>Tiêu hao độ đói</td><td><b>1.25 lần</b> nhân vật thường</td></tr>
<tr><td>Món yêu thích</td><td>Dưa hấu; độ đói nhận được ×1.2</td></tr>
<tr><td>Thức ăn sống đặc biệt</td><td>Ăn trực tiếp được các vật như Hạt dẻ bạch dương mà game xếp vào loại "đồ sống"; không phải chỉ chung mọi nguyên liệu chưa nấu, cũng không miễn các ảnh hưởng vốn có của thịt sống hay thịt quái</td></tr>
<tr><td>Bậc độ đói cao</td><td>&gt;250: hấp thụ 50% sát thương và thể hình phóng to 1.1 lần; 151—250: hấp thụ 25%</td></tr>
<tr><td>Bậc độ đói thấp</td><td>76—150: không cộng thêm; 51—75: sát thương gây ra ×0.75; ≤50: sát thương ×0.5, tốc độ di chuyển ×0.6, -15 lý trí/phút</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Mặc định bật "Lực Sĩ No Nê". Khi độ đói trên 250 sát thương thành 2.0 lần, thể hình 1.2 lần, khi chặt, đào, đập, xúc còn có 10% xác suất hoàn thành chỉ một nhát (chịu ảnh hưởng của may mắn); trên 150 thì sát thương thành 1.25 lần, thể hình 1.1 lần. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-pg-farm','Nông vụ, thu hoạch thêm &amp; hợp tác với người heo',`
<p>Trư Bát Giới có thể kiểm tra trực tiếp áp lực cây trồng, chăm sóc cây trồng, nhận thêm thu hoạch, và dùng rau để chiêu mộ người heo thường.</p>
<table>
<tr><th>Năng lực</th><th>Quy tắc</th><th>Quy tắc bổ sung</th></tr>
<tr><td>Chẩn đoán cây trồng</td><td>Kiểm tra trực tiếp áp lực của cây trồng và cỏ dại, đọc ra nguồn gây áp lực cụ thể</td><td>—</td></tr>
<tr><td>Chăm sóc cây trồng</td><td>Mỗi lần chăm sóc thành công hồi <b>5 lý trí</b></td><td>Ruộng vừa là nguồn lương thực vừa là khu hồi lý trí an toàn, giảm bớt vấn đề giới hạn lý trí chỉ 100 của ông</td></tr>
<tr><td>Thu hoạch cây trồng thường</td><td>Mỗi lần thu hoạch bình thường có <b>75%</b> xác suất nhận thêm một vật phẩm; trong đó 75% là nông sản, 25% là hạt giống tương ứng</td><td>Quy đổi khoảng 56.25% thêm nông sản, 18.75% thêm hạt giống, 25% không thêm gì</td></tr>
<tr><td>Đập nông sản khổng lồ</td><td>Có <b>75%</b> xác suất rơi thêm một món; trong đó 75% là nông sản, 25% là hạt giống</td><td>—</td></tr>
<tr><td>Quan hệ với nhà heo</td><td>Đến gần nhà heo không kích hoạt hành vi người heo né tránh vì "nhân vật quái vật"</td><td>Có thể hoạt động bình thường ở làng heo và khu nhà heo, nhưng không có nghĩa heo canh gác và heo điên đều thân thiện vô điều kiện</td></tr>
<tr><td>Chiêu mộ người heo bằng rau</td><td>Giao rau người heo ăn được cho người heo thường để chiêu mộ; thời gian trung thành và mức trần mỗi lần khoảng một nửa so với chiêu mộ bằng thịt thông thường</td><td>Khi ruộng dư dả có thể dùng rau đổi sức lao động ngắn hạn</td></tr>
</table>
<p>Khi Trư Bát Giới bị đánh, người heo thường đủ điều kiện ở gần sẽ chia sẻ mục tiêu tấn công; heo canh gác, heo điên và người chơi không nằm trong phạm vi hỗ trợ.</p>`],

['nv-pg-rake','Cửu Xỉ Đinh Ba',`
<p style="text-align:center"><img src="images/nhan_vat/pigsy/pigsy_rake.webp" alt="Cửu Xỉ Đinh Ba" loading="lazy" style="width:180px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Giới hạn trang bị</td><td>Chỉ Trư Bát Giới trang bị được; người chơi khác nhặt lên sẽ tự rơi xuống</td></tr>
<tr><td>Đánh thường</td><td>42.5 sát thương, không hao độ bền</td></tr>
<tr><td>Đỡ đòn</td><td>Chuột phải vào tư thế đỡ, hồi chiêu <b>8 giây</b>; tư thế đỡ thành công kéo dài khoảng <b>3 giây</b></td></tr>
<tr><td>Hướng đỡ</td><td>Chỉ có hiệu lực với đòn tấn công tới từ phía trước trong khoảng 135°</td></tr>
<tr><td>Cái giá của việc đỡ</td><td>Mỗi lần kích hoạt trừ độ đói tương đương <b>20%</b> sát thương của đòn tới</td></tr>
<tr><td>Nông vụ</td><td>Có thể thao tác cày đất, là công cụ nông vụ chuyên biệt của Trư Bát Giới</td></tr>
</table>`],

['nv-pg-form','Hình thái Cương Liệp',`
<p>Hình thái Cương Liệp cần chính Trư Bát Giới đọc Thiên Thư ở Linh Đài Phương Thốn Sơn để mở khóa. Khi bật phải có ít nhất 50 độ đói, và không ở trạng thái không tương thích như bay, cưỡi thú. Vào hình thái sẽ cất ba lô và các tương tác thông thường, chỉ giữ di chuyển, húc và một ít thao tác của hình thái; đó là tư thế chiến đấu độc lập, không phải chồng thêm một Buff lên trang bị gốc.</p>
<p style="text-align:center"><img src="images/nhan_vat/pigsy/pigsy_zhuzhu_form.webp" alt="Hình thái Cương Liệp" loading="lazy" style="width:240px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Tấn công cơ bản</td><td>34, không cần cầm vũ khí</td></tr>
<tr><td>Hấp thụ sát thương</td><td><b>90%</b></td></tr>
<tr><td>Hồi máu</td><td>Mỗi giây <b>0.5 máu</b></td></tr>
<tr><td>Tiêu hao độ đói</td><td>Hệ số tiêu hao ×2</td></tr>
<tr><td>Tốc độ di chuyển</td><td>Trên đất 9; trên biển 7.5; trên biển mỗi 0.5 giây tăng 1 độ ẩm</td></tr>
<tr><td>Khả năng trên nước</td><td>Cấm chết đuối, có thể hoạt động thẳng trên mặt biển</td></tr>
<tr><td>Bóng tối</td><td>Miễn bị Charlie tấn công, và tự có chiếu sáng phạm vi nhỏ</td></tr>
<tr><td>Cưỡng chế kết thúc</td><td>Độ đói xuống dưới 50, hoặc vào trạng thái hành động không được phép</td></tr>
<tr><td>Thù hận</td><td>Khi biến hình sẽ chủ động thu hút thù hận của các mục tiêu chiến đấu xung quanh</td></tr>
</table>
<h4>Húc trong hình thái</h4>
<p>Ở hình thái Cương Liệp chuột phải lên mặt đất hoặc mục tiêu để húc. Húc không dùng được trên biển, sẽ dừng khi va chạm, gặp nguy hiểm ở mép hoặc hết số lần; nó có thể làm việc lên chướng ngại, hiệu suất chặt cây là 8, hiệu suất đào khoáng là 4.</p>`],

['nv-pg-bed','Giường ngủ &amp; Mặc Lan Mạo',`
<table>
<tr><th>Vật chuyên biệt</th><th>Chế tạo &amp; số liệu</th><th>Quy tắc bổ sung</th></tr>
<tr><td><img src="images/nhan_vat/pigsy/pigsy_sleepbed.webp" alt="Đống rơm" loading="lazy" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 0 6px">Đống rơm (giường ngủ của Trư Bát Giới)</td><td>3 cỏ, không cần công nghệ; chế xong lập tức ngủ. Mỗi giây <b>+1.5 máu, +1.5 lý trí, -1.5 độ đói</b></td><td>Khi cưỡi thú hoặc độ đói dưới 50 thì không chế/ngủ được</td></tr>
<tr><td><img src="images/nhan_vat/pigsy/pigsy_hat.webp" alt="Mặc Lan Mạo" loading="lazy" style="width:64px;height:64px;object-fit:contain;display:block;margin:0 0 6px">Mặc Lan Mạo</td><td>3 Lụa + 1 Vàng thỏi; 400 độ bền, hấp thụ 60%, giữ ấm 60, chống nước 20%, vầng sáng lý trí nhỏ</td><td>Trong hình thái Cương Liệp không thể dựa vào nó</td></tr>
</table>`],

['nv-pg-cloud','Bay bằng Mây Bông',`
<p>Sau khi đọc Thiên Thư ở Linh Đài Phương Thốn Sơn, Trư Bát Giới đồng thời mở khóa Mây Bông. Phát động cần <b>25 lý trí</b>, xong là lập tức bay; tốc độ bay là 9, trong lúc đó hệ số tiêu hao độ đói giảm còn <b>0.8</b>.</p>`],

['nv-pg-death','Tử vong, hồi sinh &amp; vào lại màn chơi',`
<p>Trư Bát Giới không thể chế tạo thân xác thế thân. Phiên bản hiện tại cũng không có quy trình "quấy nhiễu nhà heo để hồi sinh" như tài liệu cũ nói; ông hồi sinh như hồn ma bình thường rồi cố định vào lại với <b>125 máu, 75 độ đói, 50 lý trí</b>. Mức 75 độ đói vừa khéo không thỏa bậc sát thương bình thường "&gt;75": lúc này không có hấp thụ thêm, hệ số sát thương chỉ 0.75; tiêu hao tự nhiên thêm một điểm là rơi vào bậc thấp nhất với 50% sát thương, 60% tốc độ di chuyển và mất lý trí liên tục.</p>`]
]]
];