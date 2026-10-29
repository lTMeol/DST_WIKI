/* Thần Thoại Nhân Vật – trang "Na Tra"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVNZ=[
['nv-nz','Na Tra',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Hỏa Tiêm Thương, Hỗn Thiên Lăng, Càn Khôn Khuyên, Phong Hỏa Luân]</blockquote>
<p><b>Tổng quan cơ chế</b>: ba pháp bảo khởi đầu là Hỏa Tiêm Thương, Hỗn Thiên Lăng, Càn Khôn Khuyên, cùng khả năng bay bằng Phong Hỏa Luân.</p>
<p style="text-align:center"><img src="images/nhan_vat/nezha/portrait_1.webp" alt="Na Tra" loading="lazy" style="width:320px;max-width:100%;height:auto;display:block;margin:12px auto"></p>`,
[
['nv-nz-stats','Thuộc tính cơ bản &amp; nội tại nhân vật',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Ba chỉ số</td><td><b>150 máu / 150 đói / 150 lý trí</b>; tiêu hao độ đói chuẩn</td></tr>
<tr><td>Vật phẩm khởi đầu</td><td><img src="images/nhan_vat/nezha/nz_lance.webp" alt="Hỏa Tiêm Thương" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:4px"><img src="images/nhan_vat/nezha/nz_damask.webp" alt="Hỗn Thiên Lăng" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:4px"><img src="images/nhan_vat/nezha/nz_ring.webp" alt="Càn Khôn Khuyên" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:4px">Mỗi món một: Hỏa Tiêm Thương, Hỗn Thiên Lăng, Càn Khôn Khuyên</td></tr>
<tr><td>Món yêu thích</td><td>Thịt cá; độ đói nhận được ×1.2. Chỉ ứng với nguyên liệu tên "Thịt cá", không chỉ chung mọi món cá</td></tr>
<tr><td>Hồi máu khi ẩm ướt</td><td>Khi độ ẩm đạt <b>50 / 75 / 95</b> lần lượt hồi <b>15 / 30 / 60 máu mỗi phút</b></td></tr>
<tr><td>Lý trí khi ẩm ướt</td><td>Nhân vật tính ngược các mục lý trí thông thường do ẩm ướt và trang bị ướt</td></tr>
<tr><td>Vầng sáng lý trí tiêu cực</td><td>Ảnh hưởng lý trí từ vầng sáng tiêu cực ×0.5</td></tr>
<tr><td>Phản hồi khi hạ gục</td><td>Hạ mục tiêu không bị hệ thống coi là quái vật, sinh vật thù địch hay tường: <b>-2 lý trí</b>; hạ quái vật có <b>15%</b> xác suất <b>+10 lý trí</b>; hạ mục tiêu sử thi <b>+30 lý trí</b></td></tr>
</table>
<h4>Sát thương đặc hiệu hệ lửa của Hỏa Tiêm Thương</h4>
<p>Khi cầm Hỏa Tiêm Thương <b>đánh thường</b>, nếu mục tiêu là Dragonfly, Hound lửa, Hươu đỏ, Tê giác đỏ, Sâu dung nham hoặc mục tiêu đang cháy, sẽ cộng thêm một lần sát thương bằng đúng sát thương của đòn vũ khí đó. Sát thương cơ bản của chính Hỏa Tiêm Thương là 51, nên trong các điều kiện này đòn đánh thường của nó vượt trội rõ rệt so với các vũ khí khởi đầu khác.</p>
<p>Phần cộng thêm này được tính theo đoạn sát thương phụ của đòn đánh thường.</p>`],

['nv-nz-items','Ba pháp bảo khởi đầu',`
<h4>Hỏa Tiêm Thương</h4>
<p><img src="images/nhan_vat/nezha/nz_lance.webp" alt="Hỏa Tiêm Thương" loading="lazy" style="width:80px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Giới hạn trang bị</td><td>Chỉ Na Tra trang bị được; người chơi khác nhặt lên sẽ tự rơi xuống</td></tr>
<tr><td>Đánh thường</td><td>51 sát thương, không hao độ bền</td></tr>
<tr><td>Kỹ năng chủ động</td><td>Chuột phải lên mặt đất thi triển <b>Tam Đầu Lục Tý</b></td></tr>
<tr><td>Khoảng cách kỹ năng</td><td>Điểm đáp đi được chỉ định, tối đa <b>16 ô</b></td></tr>
<tr><td>Tiêu hao kỹ năng</td><td>Mỗi lần thi triển tốn <b>15 độ đói</b>, hồi chiêu <b>20 giây</b></td></tr>
<tr><td>Sát thương cú nhảy</td><td>Các mục tiêu có thể tấn công trong bán kính 4 quanh điểm đáp chịu <b>3 đoạn</b> sát thương; mỗi đoạn <b>70</b>, khi có Buff Ngưng Vị Đan thì mỗi đoạn <b>100</b></td></tr>
<tr><td>Hiệu ứng khống chế</td><td>Hai đoạn đầu thử làm các mục tiêu có thể bị đánh trúng và không ở trạng thái bất khả ngắt đặc biệt vào trạng thái bị đánh; đoạn thứ ba chỉ gây sát thương</td></tr>
<tr><td>Khoảng bất tử</td><td>Quá trình nhảy lên, bay và ngay trước khi đáp xuống là bất tử; bắt đầu tính sát thương khi chạm đất thì hủy, không phải bất tử toàn bộ kỹ năng</td></tr>
</table>
<h4>Hỗn Thiên Lăng</h4>
<p><img src="images/nhan_vat/nezha/nz_damask.webp" alt="Hỗn Thiên Lăng" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Ô trang bị</td><td>Thân; chỉ Na Tra trang bị được</td></tr>
<tr><td>Di chuyển</td><td>Khi trang bị tốc độ di chuyển ×1.1</td></tr>
<tr><td>Nhiên liệu ban đầu</td><td>100 điểm</td></tr>
<tr><td>Vật liệu nạp</td><td>Loại chuyên biệt "Hoa Sen"; mỗi đóa bổ sung <b>10</b> điểm nhiên liệu</td></tr>
<tr><td>Sát thương chống được</td><td>Sát thương chiến đấu trực tiếp, nổ, đá rơi do động đất, đá rơi do hang sập</td></tr>
<tr><td>Chi phí mỗi lần chống</td><td>Mỗi lần chống hiệu quả tiêu hao <b>10</b> nhiên liệu; việc trừ nhiên liệu có khoảng cách <b>0.55 giây</b></td></tr>
<tr><td>Điều kiện mất tác dụng</td><td>Không trang bị, nhiên liệu về 0, hoặc đồng thời trang bị đồ bảo vệ loại trường lực khác thì việc chống không có hiệu lực</td></tr>
</table>
<p>Hỗn Thiên Lăng khi đủ nhiên liệu sẽ chống các loại sát thương chỉ định, không đổi độ đói, nhiệt độ, lý trí hay di chuyển, tấn công thông thường; hết nhiên liệu thì mất bảo vệ.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Khi mặc Hỗn Thiên Lăng, nếu bị đóng băng hoặc bị thôi miên ngủ gục mà chặn thành công một đòn tấn công chiến đấu thông thường thì có thể giải trạng thái khống chế tương ứng; vũ khí thôi miên, ngủ bằng túi ngủ chủ động hoặc lều, vụ nổ và đá rơi không kích hoạt. Khả năng chống sát thương và mức tiêu hao lượt gốc không đổi. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>
<h5>Hoa Sen, Ngó Sen và Hạt Sen</h5>
<p>Na Tra có thể trong bảng chế tạo Thần Thoại của mình tiêu hao <b>10 điểm máu</b> để làm 1 <b>Hoa Sen</b>, không cần công nghệ. Hoa Sen ở đây không phải thức ăn: mỗi đóa nạp cho Hỗn Thiên Lăng <b>10 điểm nhiên liệu</b>, hoặc có thể tháo ra nhận <b>Hạt sen ×1, Cánh hoa ×1</b>.</p>
<p>Ngó sen và hạt sen từ ao sen là một nhóm khác ăn được, số liệu hiện tại như sau:</p>
<table>
<tr><th>Thức ăn</th><th>Nhân vật thường ăn</th><th>Na Tra ăn</th></tr>
<tr><td>Ngó sen</td><td>8 máu / 25 đói / 0 lý trí</td><td>Cả ba chỉ số đều 0</td></tr>
<tr><td>Ngó sen nướng</td><td>20 máu / 25 đói / 15 lý trí</td><td>Cả ba chỉ số đều 0</td></tr>
<tr><td>Hạt sen</td><td>0 máu / 4.6875 đói / 0 lý trí</td><td>Cả ba chỉ số đều 0</td></tr>
<tr><td>Hạt sen nướng</td><td>1 máu / 4.6875 đói / 0 lý trí</td><td>Cả ba chỉ số đều 0</td></tr>
</table>
<p>Vì vậy "Hoa Sen" phụ trách nạp Hỗn Thiên Lăng và nguyên liệu tháo ra; còn "Ngó sen / Ngó sen nướng / Hạt sen / Hạt sen nướng" mới đi vào tính toán ăn uống. Na Tra ăn bốn sản phẩm ao sen này đều không hồi ba chỉ số.</p>
<h4>Càn Khôn Khuyên</h4>
<p><img src="images/nhan_vat/nezha/nz_ring.webp" alt="Càn Khôn Khuyên" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Sau khi trang bị, tấn công mục tiêu là ném được Càn Khôn Khuyên, rồi theo bảng dưới nối chuỗi trúng đích và quay về.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Giới hạn trang bị</td><td>Chỉ Na Tra trang bị được; người chơi khác nhặt sẽ tự rơi xuống</td></tr>
<tr><td>Sát thương cơ bản khi cầm</td><td>34</td></tr>
<tr><td>Tầm ném</td><td>16 / 18; tốc độ đạn 14</td></tr>
<tr><td>Chuỗi sát thương khi ném</td><td>Mục tiêu trúng đầu tiên <b>50</b>, sau đó lần lượt <b>45 / 40 / 35 / 30 / 25</b>, các lần sau giữ 25</td></tr>
<tr><td>Quy tắc nối chuỗi</td><td>Mỗi khi trúng một mục tiêu, tìm quanh vị trí hiện tại 8 ô các mục tiêu hợp lệ chưa bị trúng; trúng tối đa <b>20</b> mục tiêu</td></tr>
<tr><td>Quy tắc thu hồi</td><td>Không tìm được mục tiêu mới hoặc ném trượt thì quay về chủ; khi Na Tra đang bay sẽ tự bắt lấy. Ô tay trống thì tự trang bị, nếu không thì cất vào túi đồ</td></tr>
</table>
<p>Càn Khôn Khuyên loại trừ người chơi, tường, tùy tùng…; và trong cùng một lần ném sẽ không trúng cùng một mục tiêu hai lần.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Lỗi Càn Khôn Khuyên khi bay rơi xuống nước hoặc rơi vào hư không được tự động sửa; "tự động tuần hoàn" mặc định bật. Càn Khôn Khuyên nay có thể tham gia Hỏa Nguyên Tôi Luyện, mỗi mục tiêu bị trúng đều nhận sát thương vị diện của tôi luyện. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a> và <a onclick="go('#/mod/yem-doc-tien/systems')">Hệ thống Hỏa Nguyên Tôi Luyện</a>.</blockquote>`],

['nv-nz-cloud','Đằng Vân Thuật: Phong Hỏa Luân',`
<p>Sau khi Na Tra tự mình đọc Thiên Thư ở Linh Đài Phương Thốn Sơn, sẽ mở khóa vĩnh viễn lối vào đằng vân tên <b>Phong Hỏa Luân</b>. Khi phát động tiêu hao <b>25 điểm lý trí</b> và vào thẳng trạng thái bay dùng chung, không chế ra vật phẩm riêng để bỏ vào ba lô hay ô trang bị.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Tốc độ bay</td><td>10 (cao hơn tốc độ cơ bản trên đất; khi bay dùng thẳng tốc độ bay chuyên biệt)</td></tr>
<tr><td>Lửa</td><td>Trong lúc bay kèm hiệu ứng lửa Phong Hỏa Luân, và đặt hệ số sát thương lửa bên ngoài thành 0</td></tr>
<tr><td>Giới hạn xây dựng</td><td>Trừ Hắc Bạch Vô Thường, trạng thái bay không thể chọn điểm xây dựng trên đất; cưỡi thú, đóng băng, ngủ… cũng chấm dứt hoặc ngăn việc bay</td></tr>
<tr><td>Hạ cánh</td><td>Dùng thao tác "Hạ cánh" lên bản thân để kết thúc bay</td></tr>
</table>
<p>Bay dùng để chạy bản đồ, vượt chướng ngại dưới đất, thoát áp lực mặt đất và xử lý môi trường lửa; nó không phải bất tử toàn diện.</p>`]
]]
];