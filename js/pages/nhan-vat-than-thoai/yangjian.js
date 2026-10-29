/* Thần Thoại Nhân Vật – trang "Dương Tiễn"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVYJ=[
['nv-yj','Dương Tiễn',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Thiên Nhãn, Tam Tiêm Lưỡng Nhận Đao, Hao Thiên Khuyển, Hao Thiên Khuyển Nguyệt Thạch, Triển Sí Hóa Ưng, Ngạo Thiên Ưng, Lôi Vân, Tam Sơn Phi Phượng Quán, Tỏa Tử Thanh Nguyên Giáp]</blockquote>
<p><b>Tổng quan cơ chế</b>: Thiên Nhãn, Tam Tiêm Lưỡng Nhận Đao, Hao Thiên Khuyển, Triển Sí Hóa Ưng và Lôi Vân.</p>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/portrait_483556.webp" alt="Dương Tiễn" loading="lazy" style="width:360px;max-width:100%;height:auto;display:block;margin:12px auto"></p>`,
[
['nv-yj-stats','Thuộc tính cơ bản',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Máu / Đói / Lý trí</td><td>150 / 150 / 200</td></tr>
<tr><td>Hệ số sát thương / Tốc độ đói</td><td>1.0 / chuẩn 1.0 lần</td></tr>
<tr><td>Vật phẩm khởi đầu</td><td><img src="images/nhan_vat/yangjian/yj_spear.webp" alt="Tam Tiêm Lưỡng Nhận Đao" loading="lazy" style="width:56px;height:56px;object-fit:contain;vertical-align:middle;margin-right:6px"><img src="images/nhan_vat/yangjian/skyhound.webp" alt="Hao Thiên Khuyển" loading="lazy" style="width:56px;height:56px;object-fit:contain;vertical-align:middle;margin-right:6px">Tam Tiêm Lưỡng Nhận Đao, Hao Thiên Khuyển</td></tr>
<tr><td>Ngưỡng dưới lý trí</td><td>Khi chưa mở Thiên Nhãn, lý trí do biến đổi mà xuống dưới 32 sẽ về lại 32</td></tr>
<tr><td>Dụ phát điên</td><td>Không bị ảnh hưởng của hiệu ứng dụ phát điên</td></tr>
<tr><td>Món yêu thích</td><td>Sủi cảo; độ đói nhận được ×1.2</td></tr>
<tr><td>Cái giá khi thiếu chó</td><td>Khi Hao Thiên Khuyển không ở bên, mất thêm 10 lý trí/phút</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Dương Tiễn mặc định mở khóa bảng chế tạo phép thuật; "Thiên Nhãn Chiếu Phá Hư Vọng" là tăng cường tùy chọn, mặc định tắt, bật rồi mới có thể nhìn rõ và tấn công một số sinh vật bóng tối ngay trong trạng thái Thiên Nhãn. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-yj-eye','Thiên Nhãn',`
<h4>Hiệu quả Thiên Nhãn</h4>
<table>
<tr><th>Trạng thái</th><th>Quy tắc</th></tr>
<tr><td>Chưa mở</td><td>Lý trí xuống dưới 32 sẽ bị nâng về 32, và không vào phát điên thông thường</td></tr>
<tr><td>Mở Thiên Nhãn</td><td>Có nhìn đêm và hiệu ứng hình ảnh chuyên biệt; ghi lại phần trăm lý trí hiện tại, rồi <b>khóa lý trí ở 16% mức tối đa</b></td></tr>
<tr><td>Đóng Thiên Nhãn</td><td>Gỡ khóa, và khôi phục phần trăm lý trí đã lưu trước khi mở</td></tr>
<tr><td>Cái giá khi không có mão</td><td>Mỗi giây tiêu hao thêm 0.8 độ đói, độ đói cao hơn 1 thì mới tiếp tục trừ</td></tr>
<tr><td>Bão cát mạnh</td><td>Khi không có tầm nhìn nhờ đồ bảo vệ mắt, Thiên Nhãn bị cưỡng chế đóng</td></tr>
<tr><td>Giới hạn sử dụng</td><td>Khi cưỡi thú không mở hay đóng được</td></tr>
</table>
<h4>Tam Sơn Phi Phượng Quán</h4>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/yangjian_hair.webp" alt="Tam Sơn Phi Phượng Quán" loading="lazy" style="width:180px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<p>Tam Sơn Phi Phượng Quán là trang bị đầu chuyên biệt của Dương Tiễn, có thể đổi tiêu hao độ đói của Thiên Nhãn và chiến kỹ Tam Tiêm Lưỡng Nhận Đao thành tiêu hao nhiên liệu của chính nó.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Nhiên liệu ban đầu</td><td>2400 đơn vị</td></tr>
<tr><td>Duy trì Thiên Nhãn</td><td>Khi mở mắt mỗi giây tiêu hao 1 đơn vị nhiên liệu, nhân vật không còn mất thêm 0.8 độ đói/giây</td></tr>
<tr><td>Lợi ích khi hạ gục</td><td>Khi mão còn nhiên liệu, hạ gục mục tiêu được hệ thống nhận là quái vật thì hồi 5 lý trí</td></tr>
<tr><td>Chiến kỹ Tam Tiêm Lưỡng Nhận Đao</td><td>Tiêu hao chiến kỹ đổi thành 10 nhiên liệu, thay vì 10 độ đói</td></tr>
<tr><td>Ảnh hưởng đến nạp</td><td>Đội mão sẽ đổi tốc độ nạp của Tam Tiêm Lưỡng Nhận Đao</td></tr>
</table>`],

['nv-yj-blade','Tam Tiêm Lưỡng Nhận Đao',`
<p>Tam Tiêm Lưỡng Nhận Đao chỉ Dương Tiễn dùng được, sát thương cơ bản <b>51</b>, không có tiêu hao độ bền thông thường, và tham gia liên động sấm sét và dễ tổn thương.</p>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/yj_spear.webp" alt="Tam Tiêm Lưỡng Nhận Đao" loading="lazy" style="width:180px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<h4>Đòn thứ sáu của đánh thường</h4>
<ul>
<li>Ở môi trường <b>không phải hang động</b>, khi đánh liên tiếp cùng một mục tiêu, đòn trúng thứ 6 sẽ giáng thiên lôi.</li>
<li>Thiên lôi gây thêm <b>30 sát thương</b>, và thử làm mục tiêu vào trạng thái khựng khi bị đánh; đổi mục tiêu tấn công hoặc cởi vũ khí đều làm đặt lại bộ đếm liên tiếp này.</li>
</ul>
<h4>Chiến kỹ chủ động "Khu Lôi Sách Điện"</h4>
<p>Khi cầm Tam Tiêm Lưỡng Nhận Đao, chuột phải chọn điểm trên mặt đất để phát động.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Khoảng cách chỉ định</td><td>Tối đa 20 ô</td></tr>
<tr><td>Hồi chiêu</td><td>15 giây</td></tr>
<tr><td>Đợt đầu sau dịch chuyển</td><td>Mục tiêu thù địch trong 6 ô quanh điểm đáp chịu trước 10–15 sát thương</td></tr>
<tr><td>Các đòn sét sau đó</td><td>Lần lượt gây điện giật, sét đánh và sát thương vũ khí lên các mục tiêu đủ điều kiện</td></tr>
<tr><td>Tiêu hao tài nguyên</td><td>Mặc định trừ 10 độ đói; đội Tam Sơn Phi Phượng Quán thì trừ 10 nhiên liệu</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Mặc định chỉ sửa lỗi "Khu Lôi Sách Điện" mất tác dụng; "Lôi Động Cửu Thiên" mặc định tắt, bật rồi thì chiến kỹ kèm sét truy đuổi tối đa 8 kẻ địch gần nhất trong 8 ô tường quanh điểm đáp, và để lại vết sét kéo dài 10 giây, hệ số sát thương nhận ×1.1; dẫn lôi và thiên phạt cũng được điều chỉnh. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>
<h4>Trạng thái nhiễm điện &amp; dễ tổn thương</h4>
<p>Tam Tiêm Lưỡng Nhận Đao có thể vào trạng thái nhiễm điện nhờ <b>né sát thương sét</b> hoặc dùng <b>bột thuốc dẫn điện</b>, kéo dài <b>4 phút</b>. Khi nhiễm điện vũ khí có thuộc tính điện; mục tiêu bị chiến kỹ đánh trúng sẽ nhận trạng thái điện giật kéo dài <b>10 giây</b>:</p>
<ul>
<li>Sát thương nhận tăng lên <b>1.1 lần</b>;</li>
<li>Mỗi 5 giây thử kích hoạt một lần khựng khi bị đánh;</li>
</ul>`],

['nv-yj-dog','Hao Thiên Khuyển',`
<h4>Hành vi cơ bản</h4>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/skyhound.webp" alt="Hao Thiên Khuyển" loading="lazy" style="width:200px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<p>Hao Thiên Khuyển là đơn vị đi theo độc lập của Dương Tiễn, tốc độ di chuyển <b>7.5</b>, tốc độ chạy <b>15</b>. Nó có một ô túi đồ, đi theo chủ, và đáp lại các lệnh chuyên biệt.</p>
<table>
<tr><th>Thao tác</th><th>Điều kiện</th><th>Kết quả</th></tr>
<tr><td>Chuột phải vào chính Dương Tiễn</td><td>Tay không, không cưỡi thú, Hao Thiên Khuyển còn tồn tại</td><td>Gọi Hao Thiên Khuyển; xa hơn khoảng 30 ô sẽ quay thẳng về cạnh chủ</td></tr>
<tr><td>Chuột phải vào Hao Thiên Khuyển</td><td>Tay không, không cưỡi thú, trong khoảng 20 ô</td><td>Cho nó đứng yên chờ lệnh; gọi lần nữa để bỏ chờ lệnh</td></tr>
<tr><td>Dùng vật phẩm lên Hao Thiên Khuyển</td><td>Túi đồ của Hao Thiên Khuyển chưa đầy</td><td>Đặt vật phẩm đó làm mục tiêu tìm kiếm, và giao vật cho chó mang</td></tr>
<tr><td>Vuốt ve Hao Thiên Khuyển Nguyệt Thạch</td><td>Chỉ dùng được ở hình thái Warg</td><td>Dừng việc tìm kiếm hoặc ăn hiện tại; nếu đang mang thỏ thì ưu tiên giao cho chủ, nếu không thì thả vật mang xuống đất, và trong 5 giây không ăn</td></tr>
</table>
<h4>Ảnh hưởng lý trí khi Hao Thiên Khuyển vắng mặt</h4>
<p>Lượng lý trí hao thêm của Dương Tiễn tùy vào việc Hao Thiên Khuyển có còn ở trạng thái đi theo dùng được hay không; khi Hao Thiên Khuyển vắng mặt mỗi phút mất thêm <b>10 điểm lý trí</b>.</p>
<h4>Hao Thiên Khuyển Nguyệt Thạch</h4>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/skyhound_warg.webp" alt="Hao Thiên Khuyển Nguyệt Thạch" loading="lazy" style="width:220px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<p>Khi trăng tròn, đưa <b>Đá Mặt Trăng</b> cho Hao Thiên Khuyển thường có thể kích hoạt chuyển hóa thành Hao Thiên Khuyển Nguyệt Thạch. Chuyển hóa tiêu hao 1 viên Đá Mặt Trăng; đưa khi không phải trăng tròn thì không hoàn tất chuyển hóa.</p>
<table>
<tr><th>Thay đổi</th><th>Quy tắc</th></tr>
<tr><td>Chiến đấu hóa</td><td>Vào trạng thái Warg, sát thương tấn công 34, khoảng cách đòn đánh 3 giây</td></tr>
<tr><td>Thuần phục Hound</td><td>Mỗi giây thử khiến Hound thường trong 10 ô đi theo mình</td></tr>
<tr><td>Làm choáng Hound</td><td>Khi chuyển hóa sẽ làm choáng Hound thường trong 15 ô</td></tr>
<tr><td>Kết quả khi chết</td><td>Warg chết sẽ sinh ra một Hao Thiên Khuyển thường mới</td></tr>
<tr><td>Chết ở hình thái thường</td><td>Mục tiêu không phải người chơi trong 5 ô xung quanh bị gắn thêm 10 điểm lạnh</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Lỗi sập game có thể xảy ra khi Hao Thiên Khuyển Nguyệt Thạch tấn công Warg non đã được tự động sửa, việc chuyển hình thái và số liệu chiến đấu ở mục này không vì thế mà đổi. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/compatibility')">Sửa lỗi tương thích</a>.</blockquote>`],

['nv-yj-move','Di chuyển &amp; bay',`
<h4>Triển Sí Hóa Ưng</h4>
<p>Dương Tiễn tự đọc Thiên Thư ở Linh Đài Phương Thốn Sơn sẽ mở khóa Triển Sí Hóa Ưng. Sau khi nhân vật bay lên sẽ vào trạng thái chọn điểm trên bản đồ, tối đa khoảng <b>35 giây</b> thì tự hạ cánh.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Mục tiêu</td><td>Có thể bay đến đồng đội và các điểm đánh dấu đặc biệt; bản đồ cũng hiển thị một số công trình và vật thể có thể định vị</td></tr>
<tr><td>Tiêu hao</td><td>Dùng thành công trừ <b>75 độ đói</b>; không đủ 75 độ đói thì không hoàn tất việc chọn điểm đáp từ xa</td></tr>
<tr><td>Giới hạn khu vực</td><td>Hang động, trong nhà Thần Thoại và một số bên trong công trình không dùng được</td></tr>
<tr><td>Quá trình bay</td><td>Khoảng 4.2 giây để bay lên và mở bản đồ; chọn xong mục tiêu thì dịch chuyển lên trên mục tiêu rồi rơi xuống, không chọn trong 35 giây sẽ tự rơi</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Nút mục tiêu bản đồ, vị trí nút và tọa độ thực tế của Triển Sí Hóa Ưng được tự động sửa, Máy Kết Tinh Mắt Băng cũng có thể làm điểm đáp. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>
<h4>Ngạo Thiên Ưng</h4>
<p style="text-align:center"><img src="images/nhan_vat/yangjian/yangjian_buzzard.webp" alt="Ngạo Thiên Ưng" loading="lazy" style="width:200px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<p>Ngạo Thiên Ưng là chim ưng tạm thời được chủ động triệu hồi, không phải thú cưng chiến đấu vĩnh viễn. Bấm nút "Gọi ưng" trên thanh kỹ năng để triệu hồi. Khi trên sân đã có một con thì không gọi thêm được; nó cách Dương Tiễn quá khoảng 8 ô sẽ bay đi.</p>
<ol>
<li>Sau khi triệu hồi, Dương Tiễn mở được <b>vật chứa một ô</b> của nó; người chơi khác không dùng được bình thường.</li>
<li>Bỏ vào một vật phẩm không phải vật không thể thay thế rồi đóng vật chứa, ưng sẽ cho danh sách vị trí đồng đội để chọn.</li>
<li>Chọn xong đồng đội, ưng đi giao hàng; không có đồng đội nào để chọn thì thả vật phẩm xuống và bay đi.</li>
</ol>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Giao diện giao hàng của Ngạo Thiên Ưng cũng dùng phép quy đổi tọa độ bản đồ đã sửa, nút mục tiêu đồng đội sẽ căn lại theo kích thước màn hình hiện tại, tránh vị trí hiển thị lệch với tọa độ giao thực tế. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>
<h4>Lôi Vân</h4>
<p>Sau khi đọc Thiên Thư ở Linh Đài Phương Thốn Sơn, Dương Tiễn có thể tiêu hao <b>25 lý trí</b> để chế tạo và kích hoạt Lôi Vân. Tốc độ di chuyển của Lôi Vân là <b>10</b>, vượt biển được, bỏ qua va chạm mặt đất và tắt nguy cơ chết đuối, nhưng khi bay vẫn hạn chế rất nhiều hành động tương tác.</p>
<ul>
<li>Khi đang bay mà bị đòn cận chiến đánh trúng hoặc bị đỡ, kẻ tấn công chịu <b>10 sát thương điện</b>; có xác suất <b>20%</b> gắn thêm dễ tổn thương do điện giật.</li>
<li>Một số kỹ năng của trùm, đòn tấn công môi trường đặc biệt và cơ chế mod có thể cưỡng chế kết thúc việc bay Lôi Vân.</li>
</ul>`],

['nv-yj-armor','Tỏa Tử Thanh Nguyên Giáp',`
<p style="text-align:center"><img src="images/nhan_vat/yangjian/yangjian_armor.webp" alt="Tỏa Tử Thanh Nguyên Giáp" loading="lazy" style="width:200px;max-width:100%;height:auto;display:block;margin:12px auto"></p>
<p>Tỏa Tử Thanh Nguyên Giáp là trang bị thân chuyên biệt của Dương Tiễn: có <b>4000 độ bền và giảm 85% sát thương</b>, khi mặc tuyệt đối chống nước; khi nhiệt độ cao hơn 0 thì tốc độ di chuyển 1.1 lần, từ 0 trở xuống tăng lên 1.25 lần. Nó còn giảm một nửa cả sự tích tụ lạnh và thời gian tan băng đóng; khi trang bị hỏng, các lợi ích giáp và môi trường nói trên cũng mất tác dụng.</p>`],

['nv-yj-forge','Chế tạo và sửa giáp đầu chuyên biệt',`
<p>Năng lực của Tam Sơn Phi Phượng Quán đã nói ở mục "Thiên Nhãn"; mục này chỉ tập trung giữ công thức chế lần đầu và sửa chữa của hai món giáp đầu để khỏi liệt kê lặp lại hiệu quả kỹ năng.</p>
<table>
<tr><th>Trang bị</th><th>Luyện lần đầu</th><th>Phục hồi sau khi hỏng</th></tr>
<tr><td>Tam Sơn Phi Phượng Quán</td><td>Vương miện Thulecite, Nhãn cầu Hươu Khổng Lồ, Sapphire ×2, Lông vũ Moose/Goose ×6; Lò Bát Quái 240 giây</td><td>Mão gốc, Ruby, Sapphire, Amethyst; 120 giây</td></tr>
<tr><td>Tỏa Tử Thanh Nguyên Giáp</td><td>Cụm lông ×15, Giáp Thulecite, Lông Malbatross ×10, Ngà hải mã; Lò Bát Quái 240 giây</td><td>Giáp gốc, Ruby, Sapphire, Amethyst; 120 giây</td></tr>
</table>
<p>Hai món chỉ phát huy bình thường khi do Dương Tiễn dùng. Sau khi hỏng, thứ được dùng là <b>trang bị gốc cộng đá quý ba màu đỏ, lam, tím</b>; ba loại đá quý phải bỏ vào cùng lúc, không phải chọn một loại tùy ý.</p>`]
]]
];