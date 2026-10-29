/* Thần Thoại Nhân Vật – tab "Tổng quan nhân vật"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVO=[
['nv-overview','Tổng quan nhân vật',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Bách khoa nhân vật] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Liên quan chính: thuộc tính nhân vật, cơ chế chuyên biệt, trang bị chuyên biệt, sách kỹ năng, bay]</blockquote>
<p>Tập này ghi lại thuộc tính nhân vật, cơ chế, trang bị, công thức, điều kiện kích hoạt, tiêu hao tài nguyên và giới hạn trong phiên bản hiện tại của mod Thần Thoại Nhân Vật.</p>
<blockquote><b>Ghi chú tư liệu</b>: Tập này là bản tổng hợp phi chính thức, không đại diện cho tác giả hay đội ngũ duy trì mod Thần Thoại Nhân Vật. Nội dung do trang gốc tự kiểm chứng, sắp xếp và trình bày.</blockquote>
<table>
<tr><th>Hạng mục</th><th>Mốc cơ sở</th></tr>
<tr><td>Workshop ID</td><td>1699194522</td></tr>
<tr><td>Phiên bản tổng hợp</td><td>Thần Thoại Nhân Vật 10.1</td></tr>
<tr><td>Phụ thuộc chủ đề</td><td>Thần Thoại Thư Thuyết 9.10.27.4</td></tr>
<tr><td>Quy tắc tổng hợp</td><td>Phần chính văn ghi thuộc tính, cơ chế, trang bị và giới hạn nguyên bản của Thần Thoại Nhân Vật</td></tr>
<tr><td>Liên động Yêm Đốc Tiên</td><td>Chỉ ghi những thay đổi sau khi bật trong các ô "Gợi ý liên động Yêm Đốc Tiên"; cơ chế đầy đủ được ghi ở tập riêng</td></tr>
</table>
<table>
<tr><th>Nhân vật</th><th>Máu / Đói / Lý trí</th><th>Cơ chế cốt lõi</th></tr>
<tr><td>Tôn Ngộ Không</td><td>175 / 150 / 125</td><td>Kim Cô Bổng, Hỏa Nhãn Kim Tinh, Định Thân Pháp, Nhất Trụ Kình Thiên, Cân Đẩu Vân</td></tr>
<tr><td>Na Tra</td><td>150 / 150 / 150</td><td>Hỏa Tiêm Thương, Hỗn Thiên Lăng, Càn Khôn Khuyên, hồi phục khi ẩm ướt, đằng vân Phong Hỏa Luân</td></tr>
<tr><td>Bạch Cốt Phu Nhân</td><td>150 / 150 / 250</td><td>Thân Mỹ Nhân/Yêu, xử lý thi thể, Cốt Kính, Cốt Y, thú cưng xương</td></tr>
<tr><td>Trư Bát Giới</td><td>250 / 300 / 100</td><td>Độ đói phân bậc, nông vụ, Cửu Xỉ Đinh Ba, hình thái Cương Liệp, Mây Bông</td></tr>
<tr><td>Dương Tiễn</td><td>150 / 150 / 200</td><td>Thiên Nhãn, Tam Tiêm Lưỡng Nhận Đao, Hao Thiên Khuyển, Triển Sí Hóa Ưng, Lôi Vân</td></tr>
<tr><td>Ngọc Thố</td><td>150 / 150 / 120</td><td>Giã thuốc, bột thuốc, Oánh Nguyệt Tỳ Bà, hang thỏ, độn thổ, Sương Ngọc Vân</td></tr>
<tr><td>Hắc Bạch Vô Thường</td><td>Bạch 75 / 120 / 120; Hắc 120 / 150 / 100</td><td>Hai hình thái, hồn thiện ác, Tượng Diêm La, pháp khí Vô Thường</td></tr>
<tr><td>Bàn Ti Nương Nương</td><td>120 / 150 / 120</td><td>Trị số tơ nhện, Bản Tướng Nhện Hoàng, mạng nhện, tùy tùng nhện, Bàn Ti Điếu</td></tr>
</table>`,
[['nv-common','Quy tắc chung',`
<ul>
<li>Vật phẩm chuyên biệt của nhân vật bị giới hạn trang bị hoặc sử dụng theo thân phận nhân vật, không thể dùng như trang bị chung để luân phiên.</li>
<li>Thiên Thư ở Phương Thốn Sơn giúp mở khóa vĩnh viễn kỹ năng; kỹ năng vẫn bị giới hạn bởi tài nguyên, trạng thái, địa hình và thời gian hồi.</li>
<li>Bay sẽ thay đổi các hành động dùng được. Cưỡi thú, đóng băng, hôn mê, cạn độ đói, tử vong và khu vực trong nhà đều có thể ngăn chặn hoặc làm gián đoạn việc bay.</li>
<li>Hiệu ứng diện rộng được lọc riêng theo người chơi, tùy tùng phe mình, mục tiêu có thể tấn công, trùm và trạng thái miễn nhiễm, không phải tác dụng bừa bãi lên toàn màn hình.</li>
<li>Món ăn yêu thích của mỗi nhân vật được ghi riêng trong thuộc tính cơ bản; dòng "độ đói nhận được ×1.2" chỉ tăng lượng đói hồi phục của món đó, không đồng thời khuếch đại hiệu quả máu hay lý trí.</li>
</ul>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Khi bật đồng thời phiên bản hiện tại của Yêm Đốc Tiên, mọi nhân vật Thần Thoại mặc định sẽ không bị Lời Nguyền Khỉ biến thành Vượn Hoang, nhưng trang sức bị nguyền vẫn bám vào như thường; phím kỹ năng chuyên biệt Thần Thoại được nối vào thiết lập phím chính thức và có thêm chức năng đặt lại giao diện Thần Thoại. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`]]]
];