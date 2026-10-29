/* Thần Thoại Thư Thuyết – tab "Đằng vân & kỹ năng"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */

/* Thư mục chứa ảnh mây (đổi đường dẫn này nếu đặt ảnh ở nơi khác) */
const TTF_IMG = 'images/than-thoai/flight/';
/* Tạo thẻ ảnh: tên file (không đuôi), chiều rộng, chú thích alt */
const ttfImg=(n,w,alt)=>`<img src="${TTF_IMG}myth_cloud_${n}.webp" alt="${alt||''}" loading="lazy" style="width:${w}px;max-width:100%;height:auto;display:inline-block;vertical-align:middle;filter:drop-shadow(0 4px 10px rgba(0,0,0,.18))">`;
/* Ô ảnh lớn trong bảng */
const ttfBig=(n,alt)=>`<div style="text-align:center">${ttfImg(n,200,alt)}</div>`;
/* Ô ảnh nhỏ trong bảng mở khóa */
const ttfSm=(n,alt)=>`<div style="text-align:center">${ttfImg(n,110,alt)}</div>`;
/* Chưa có ảnh */
const ttfNone='<div style="text-align:center;opacity:.5;font-size:.9em">(chưa có ảnh mây)</div>';
/* Một thẻ trong thư viện ảnh */
const ttfCard=(n,cap)=>`<figure style="margin:0;text-align:center;flex:1 1 200px;max-width:260px">${ttfImg(n,240,cap)}<figcaption style="margin-top:6px;font-size:.9em;opacity:.85">${cap}</figcaption></figure>`;

const TTF=[
['tf-overview','Đằng vân &amp; kỹ năng',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Chủ đề Thần Thoại] [Loại dữ liệu: Hệ thống di chuyển cốt lõi] [Nguồn nội dung: bản gốc Thần Thoại] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Vô Tự Thiên Thư, sách bay, Đằng Vân Đan, Đằng Vân Thuật, mây riêng của nhân vật, cưỡng chế hạ cánh]</blockquote>
<p>Bay cần <b>mở khóa kỹ năng</b>: học ở Phương Thốn Sơn chỉ là đưa kỹ năng tương ứng vào bảng chế tạo, còn có cất cánh được hay không vẫn tùy vào nhân vật, trạng thái Đằng Vân Đan, địa điểm và hành động hiện tại. Quá trình cất cánh và hạ cánh đều có một khoảng bất tử ngắn, và không thể mang mọi thao tác trên mặt đất lên không trung.</p>
<div style="display:flex;flex-wrap:wrap;gap:18px 14px;justify-content:center;margin:18px 0">
${ttfCard('common','Bạch Vân · thông dụng')}
${ttfCard('wukong','Cân Đẩu Vân · Tôn Ngộ Không')}
${ttfCard('yangjian','Lôi Vân · Dương Tiễn')}
${ttfCard('yutu','Sương Ngọc Vân · Ngọc Thố')}
${ttfCard('pigsy','Mây Bông · Trư Bát Giới')}
${ttfCard('white_bone','Âm Phong · Bạch Cốt Phu Nhân')}
${ttfCard('yama_black','U Minh · Hắc Vô Thường')}
${ttfCard('yama_white','U Minh · Bạch Vô Thường')}
</div>`,[]],

['tf-unlock','Mở khóa kỹ năng',`
<table>
<tr><th>Vật phẩm/Địa điểm</th><th>Cách lấy hoặc sử dụng</th><th>Tác dụng</th></tr>
<tr><td>Thiên Thư</td><td>Chế tạo Vô Tự Thiên Thư bằng Giấy cói ×2</td><td>Nó dễ cháy, sau khi cháy sẽ biến thành "Thiên Thư" đọc được; Thiên Thư đồng thời là cuốn đồ giám Thần Thoại có thể đọc, dùng làm trạm công nghệ Thần Thoại</td></tr>
<tr><td>Thiên Thư để lại</td><td>Chuột phải vào cuốn Thiên Thư trong nhà ở Phương Thốn Sơn, chọn "Đọc"</td><td>Mở khóa kỹ năng bay tương ứng cho nhân vật hiện tại và hồi 2 điểm lý trí. Nhân vật thường nhận Đằng Vân Thuật; nhân vật Thần Thoại nhận thêm kỹ năng bay/kỹ năng nhân vật chuyên biệt của mình</td></tr>
<tr><td>Đằng Vân Đan &amp; Đằng Vân Thuật</td><td>Nhân vật thường trước hết nhờ Đằng Vân Đan có tư cách bay, rồi phát động Đằng Vân Thuật từ bảng chế tạo</td><td>Khi Đằng Vân Đan còn hiệu lực, phát động Đằng Vân Thuật tiêu hao 25 điểm lý trí; khi không có trạng thái này, kỹ năng sẽ yêu cầu tiêu hao một viên Đằng Vân Đan. Thời lượng bay và quan hệ xung đột với các đan trạng thái xem ở năm loại đan trạng thái</td></tr>
</table>
<table>
<tr><th style="width:130px">Hình mây</th><th>Người đọc</th><th>Nội dung mở khóa vĩnh viễn</th></tr>
<tr><td>${ttfSm('common','Bạch Vân')}</td><td>Nhân vật thường và các nhân vật khác</td><td>Bạch Vân Đằng Vân Thuật</td></tr>
<tr><td>${ttfSm('wukong','Cân Đẩu Vân')}</td><td>Tôn Ngộ Không</td><td>Cân Đẩu Vân, Định Thân Pháp, Nhất Trụ Kình Thiên</td></tr>
<tr><td>${ttfNone}</td><td>Na Tra</td><td>Phong Hỏa Luân</td></tr>
<tr><td>${ttfSm('white_bone','Âm Phong')}</td><td>Bạch Cốt Phu Nhân</td><td>Âm Phong</td></tr>
<tr><td>${ttfSm('pigsy','Mây Bông')}</td><td>Trư Bát Giới</td><td>Mây Bông, hình thái Cương Liệp</td></tr>
<tr><td>${ttfSm('yangjian','Lôi Vân')}</td><td>Dương Tiễn</td><td>Lôi Vân, Triển Sí Hóa Ưng</td></tr>
<tr><td>${ttfSm('yutu','Sương Ngọc Vân')}</td><td>Ngọc Thố</td><td>Sương Ngọc Vân</td></tr>
<tr><td>${ttfSm('yama_black','U Minh Thân')}${ttfSm('yama_white','Bỉ Ngạn Hoàn Dương')}</td><td>Hắc Bạch Vô Thường</td><td>U Minh Thân, Bỉ Ngạn Hoàn Dương</td></tr>
<tr><td>${ttfSm('common','Bạch Vân')}</td><td>Bàn Ti Nương Nương</td><td>Bạch Vân, hình thái Nhện Hoàng</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Phím kỹ năng Thần Thoại được nối vào thiết lập phím tùy chỉnh của Yêm Đốc Tiên; lỗi hiển thị trống của đồ giám Thiên Thư Thần Thoại trong các môi trường như Insight và lỗi phím tạm dừng sẽ được tự động sửa, đồng thời có thêm phím đặt lại giao diện Thần Thoại. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a> và <a onclick="go('#/mod/yem-doc-tien/compatibility')">Sửa lỗi tương thích</a>.</blockquote>`,[]],

['tf-general','Đằng vân thông dụng',`
<div style="text-align:center;margin:10px 0 16px">${ttfImg('common',320,'Bạch Vân – đằng vân thông dụng')}<div style="font-size:.9em;opacity:.85;margin-top:4px">Bạch Vân · đằng vân thông dụng</div></div>
<p>Đằng vân thông thường có tốc độ 9, khi bay bỏ qua va chạm địa hình, vượt biển được và không bị chết đuối; tăng tốc trên đường và tăng tốc trên mạng nhện dưới đất sẽ không còn hiệu lực. Dùng "Hạ cánh" lên chính mình để chủ động kết thúc, không cần học lại kỹ năng.</p>
<table>
<tr><th>Tình huống</th><th>Quy tắc thực tế</th></tr>
<tr><td>Trong nhà hoặc phòng đặc biệt</td><td>Không cất cánh được</td></tr>
<tr><td>Cưỡi thú</td><td>Hành động cất cánh bị hủy ngay</td></tr>
<tr><td>Khi bay: nhặt đồ, thu hoạch, ngủ, vào nhà, di cư, nhảy hang/nhảy bệ</td><td>Mặc định không thực hiện được</td></tr>
<tr><td>Đặt công trình khi bay</td><td>Mặc định không đặt được; Hắc Bạch Vô Thường là ngoại lệ</td></tr>
<tr><td>Đóng băng, hôn mê</td><td>Cưỡng chế hạ cánh</td></tr>
<tr><td>Độ đói về 0, chết, nhân vật biến hình</td><td>Cưỡng chế kết thúc</td></tr>
<tr><td>Trong 15 ô quanh Thợ Dệt Bóng Tối</td><td>Bị bắn rơi khi bay, chịu 20 sát thương và mất 10 lý trí</td></tr>
</table>
<p>Đằng vân thông dụng vẫn hạn chế các thao tác mặt đất như nhặt đồ, thu hoạch và xây dựng.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Hiện tượng khựng đằng vân do bù độ trễ và trượt ngã trên mặt băng sẽ được tự động sửa; có thể đặt cùng một phím để vừa gọi mây vừa hạ mây. Khi đang cưỡi thú không thể gọi mây, hệ thống sẽ không cưỡng chế xuống bò, cũng không trừ nguyên liệu đằng vân trước. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`,[]],

['tf-character','Bay chuyên biệt của nhân vật',`
<p>Sách bay sẽ bổ sung thêm năng lực chuyên biệt cho nhân vật Thần Thoại. Bảng dưới giữ lại <b>hình thái, tốc độ và một điểm khác biệt cốt lõi</b> phù hợp nhất để so sánh ngang; chi phí cất cánh, lợi ích đầy đủ, giới hạn hành động và điều kiện gián đoạn vẫn lấy theo trang của từng nhân vật làm chuẩn.</p>
<table>
<tr><th style="width:220px">Hình mây</th><th>Nhân vật &amp; hình thái bay</th><th>Tốc độ</th><th>Điểm so sánh ngang</th></tr>
<tr><td>${ttfBig('wukong','Cân Đẩu Vân')}</td><td>Tôn Ngộ Không · Cân Đẩu Vân</td><td><b>12</b></td><td>Tốc độ cao nhất trong tám nhân vật; độ đói về 0 sẽ kết thúc chuyến bay</td></tr>
<tr><td>${ttfNone}</td><td>Na Tra · Phong Hỏa Luân</td><td><b>10</b></td><td>Trong lúc bay có hiệu ứng nguồn nhiệt, và miễn nhiễm sát thương từ lửa bên ngoài</td></tr>
<tr><td>${ttfBig('white_bone','Âm Phong')}</td><td>Bạch Cốt Phu Nhân · Âm Phong</td><td><b>11</b></td><td>Ẩn thân khi bay, sau khi hạ cánh vẫn giữ ẩn thân và lợi ích đòn đánh đầu trong thời gian ngắn</td></tr>
<tr><td>${ttfBig('pigsy','Mây Bông')}</td><td>Trư Bát Giới · Mây Bông</td><td><b>9</b></td><td>Trong lúc bay, mức tiêu hao đói giảm còn 0.8 lần bình thường</td></tr>
<tr><td>${ttfBig('yangjian','Lôi Vân')}</td><td>Dương Tiễn · Lôi Vân</td><td><b>10</b></td><td>Khi bị tấn công cận chiến có thể phản đòn sát thương điện, và có xác suất gây trạng thái điện giật</td></tr>
<tr><td>${ttfBig('yutu','Sương Ngọc Vân')}</td><td>Ngọc Thố · Sương Ngọc Vân</td><td><b>10</b></td><td>Cứ mỗi 3 giây hồi 1 điểm máu</td></tr>
<tr><td><div style="text-align:center">${ttfImg('yama_black',170,'U Minh – Hắc Vô Thường')}${ttfImg('yama_white',170,'U Minh – Bạch Vô Thường')}</div></td><td>Hắc Bạch Vô Thường · Bay U Minh</td><td><b>10</b></td><td>Ban đêm có ẩn thân U Minh, và giữ lại một phần quyền tương tác trên không</td></tr>
<tr><td>${ttfBig('common','Bạch Vân')}</td><td>Bàn Ti Nương Nương · Bạch Vân</td><td><b>9</b> (đằng vân thông dụng)</td><td>Đằng vân cơ bản thông dụng</td></tr>
</table>`,[]]
];