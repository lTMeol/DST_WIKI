/* Thần Thoại Nhân Vật – trang "Tôn Ngộ Không"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVSW=[
['nv-sw','Tôn Ngộ Không',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Kim Cô Bổng, Thân Ngoại Thân Pháp, Nhất Trụ Kình Thiên, Định Thân Pháp, Hỏa Nhãn Kim Tinh, Phượng Sí Tử Kim Quán, Tỏa Tử Hoàng Kim Giáp, Mũ Hành Giả, Cân Đẩu Vân]</blockquote>
<p><b>Tổng quan cơ chế</b>: combo cận chiến, nhìn đêm bằng Hỏa Nhãn, khống chế bằng Định Thân, Thân Ngoại Thân Pháp và Cân Đẩu Vân.</p>
<p style="text-align:center"><img src="images/nhan_vat/sun-wukong/portrait.webp" alt="Tôn Ngộ Không" loading="lazy" style="width:320px;max-width:100%;height:auto;display:block;margin:12px auto"></p>`,
[
['nv-sw-stats','Thuộc tính cơ bản',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Máu / Đói / Lý trí</td><td>175 / 150 / 125</td></tr>
<tr><td>Tốc độ di chuyển</td><td>Tốc độ chạy thường ×1.1</td></tr>
<tr><td>Hệ số sát thương</td><td>1.0</td></tr>
<tr><td>Tốc độ đói</td><td>Chuẩn 1.0 lần</td></tr>
<tr><td>Vật phẩm khởi đầu</td><td><img src="images/nhan_vat/sun-wukong/mk_jgb.webp" alt="Kim Cô Bổng" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Kim Cô Bổng, Bàn Đào</td></tr>
<tr><td>Trái cây chỉ định</td><td>Lựu sống/chín, Thanh long, Chuối hang động, Sầu riêng, Dưa hấu, Bàn Đào: khi ăn được thêm +6 lý trí</td></tr>
<tr><td>Món yêu thích</td><td>Bàn Đào Đại Hội; độ đói nhận được ×1.2</td></tr>
<tr><td>Thức ăn thịt</td><td>Thịt sống: độ no nhận được ×0.2; món thịt nấu chín ×0.8</td></tr>
</table>`],

['nv-sw-transform','Biến hóa: Ngụy trang Miếu Thổ Địa',`
<p>Khi tay không, Ngộ Không chuột phải vào chính mình chọn "Biến hóa" sẽ đổi ngoại hình thành một ngôi miếu Thổ Địa nhỏ và vào trạng thái ẩn. Đây là khả năng ngụy trang của riêng nhân vật: không xây một ngôi miếu Thổ Địa thật trong thế giới, cũng không sinh ra vật chứa, bàn cúng hay Thổ Địa Công.</p>
<p><img src="images/nhan_vat/sun-wukong/monkey_king_shrine_form.webp" alt="Ngụy trang Miếu Thổ Địa" loading="lazy" style="width:140px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc hiện tại</th></tr>
<tr><td>Điều kiện dùng</td><td>Không đang bay hay cưỡi thú; ô trang bị tay trống và trên con trỏ chuột cũng không cầm vật phẩm</td></tr>
<tr><td>Tiêu hao &amp; hồi chiêu</td><td>Không tốn máu, độ đói hay lý trí; không có thời gian hồi</td></tr>
<tr><td>Quá trình vào</td><td>Hành động biến hóa mất khoảng 0.8 giây; xong có thể giữ nguyên hình dạng miếu tại chỗ</td></tr>
<tr><td>Hiệu quả ẩn</td><td>Trong lúc ẩn, thành phần chiến đấu thông thường không thể chọn Ngộ Không làm mục tiêu tấn công mới</td></tr>
<tr><td>Giới hạn hiệu quả</td><td>Không xóa mối thù mà kẻ địch đã hình thành, cũng không cho bất tử, giảm sát thương hay miễn nhiễm sát thương môi trường</td></tr>
<tr><td>Chủ động hủy</td><td>Hủy khi di chuyển hoặc vào các hành động khác làm đổi trạng thái nhân vật</td></tr>
<tr><td>Thiên Nhãn nhìn thấu</td><td>Sau khi biến hóa quá 1 giây, nếu trong phạm vi 24 có Dương Tiễn đang bật Thiên Nhãn thì lớp ngụy trang bị hủy ngay</td></tr>
</table>
<p>Ngụy trang Miếu Thổ Địa thích hợp để ẩn nấp hoặc dừng chân ngắn khi chưa bị kẻ địch khóa mục tiêu; nếu đã bị truy đuổi mới biến hóa thì không thể dùng nó để cưỡng chế xóa mục tiêu hiện có.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Khi Ngộ Không biến thành miếu Thổ Địa, trang bị đội đầu được xử lý ổn thỏa tự động, tránh mũ bị mất khi chuyển hình thái. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-sw-staff','Kim Cô Bổng',`
<p>Sát thương cơ bản của Kim Cô Bổng là <b>59.5</b>, tầm đánh <b>0.9</b>. Chỉ Ngộ Không cầm được; người chơi khác nhặt lên sẽ lập tức thả xuống. Kim Cô Bổng không hao độ bền.</p>
<p><img src="images/nhan_vat/sun-wukong/mk_jgb.webp" alt="Kim Cô Bổng" loading="lazy" style="width:120px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<h4>Phân thân đòn thứ sáu</h4>
<p>Những cú đánh thường có hiệu lực của Ngộ Không lên cùng một mục tiêu sẽ được cộng dồn trên mục tiêu đó. Khi đòn thứ 6 kích hoạt, phân thân lần lượt xuất hiện từ bốn hướng, mỗi cái gây <b>50 điểm sát thương cơ bản</b>, tổng cộng 200 điểm sát thương cơ bản.</p>
<h4>Vật cầm không chuyên biệt bị rơi</h4>
<p>Khi Ngộ Không đánh thường mà vật cầm trên tay không phải Kim Cô Bổng hay vật chuyên biệt được bảo vệ khác, có <b>50% xác suất làm vật cầm rơi xuống đất</b>; khi cưỡi thú không kích hoạt. Bản thân Kim Cô Bổng không chịu ảnh hưởng này.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Mặc định bật "Từ chối tay bơ"; Ngộ Không dùng binh khí tấn công sẽ không còn tuột tay. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-sw-clone','Thân Ngoại Thân Pháp',`
<p>Cầm Kim Cô Bổng dùng kỹ năng chủ động lên mặt đất để thi triển <b>Thân Ngoại Thân Pháp</b>. Thi triển sẽ hoàn tất một lần dịch chuyển và tạo một phân thân ngắn ngủi; bản thân nó không tính sát thương cố định.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Khoảng cách chỉ định</td><td>Tối đa 15 ô</td></tr>
<tr><td>Hồi chiêu cơ bản</td><td>15 giây</td></tr>
<tr><td>Khi không đội Phượng Sí Tử Kim Quán</td><td>Mỗi lần thi triển tốn 10 độ đói</td></tr>
<tr><td>Khi đội Phượng Sí Tử Kim Quán</td><td>Không tốn độ đói; chuyển sang tiêu hao nhiên liệu của mão, hồi chiêu rút còn khoảng 12.75 giây</td></tr>
<tr><td>Hiệu quả sau đó</td><td>Sau khi dịch chuyển xuất hiện một phân thân ngắn ngủi; trong khoảng 3 giây phân thân thu hút mục tiêu chiến đấu hiện tại của Ngộ Không</td></tr>
</table>`],

['nv-sw-eye','Hỏa Nhãn Kim Tinh',`
<p>Bật/tắt Hỏa Nhãn Kim Tinh bằng nút kỹ năng nhân vật. Khi bật sẽ có nhìn đêm cưỡng chế và bộ lọc thị giác cố định; bấm nút lần nữa để tắt.</p>
<table>
<tr><th>Trạng thái trang bị</th><th>Tiêu hao độ đói</th><th>Tiêu hao lý trí</th></tr>
<tr><td>Không có trang bị đầu chuyên biệt</td><td>-0.6 mỗi giây</td><td>-15 mỗi phút</td></tr>
<tr><td><img src="images/nhan_vat/sun-wukong/xzhat_mk.webp" alt="Mũ Hành Giả" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Mũ Hành Giả</td><td>-0.3 mỗi giây</td><td>-7.5 mỗi phút</td></tr>
<tr><td><img src="images/nhan_vat/sun-wukong/golden_hat_mk.webp" alt="Phượng Sí Tử Kim Quán" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Phượng Sí Tử Kim Quán (còn độ bền)</td><td>Không tiêu hao độ đói</td><td>Không tiêu hao lý trí</td></tr>
</table>
<h4>Giới hạn bão cát</h4>
<p>Khi bão cát mạnh đạt cấp cao nhất, nếu không có tầm nhìn nhờ đồ bảo vệ mắt thì không thể bật Hỏa Nhãn; Hỏa Nhãn đang bật cũng bị tắt ngay. Hỏa Nhãn không thay thế được trang bị bảo vệ mắt khi có bão cát.</p>
<h4>Nhiên liệu Phượng Sí Tử Kim Quán</h4>
<p>Phượng Sí Tử Kim Quán ban đầu có <b>2400 điểm nhiên liệu</b>. Khi Hỏa Nhãn bật, mão tiêu hao 1 điểm nhiên liệu mỗi giây; hết nhiên liệu, Hỏa Nhãn sẽ được tính lại như khi không đội mão. Mão còn một lợi ích phụ: khi nhiên liệu chưa cạn, Ngộ Không hạ gục mục tiêu có thuộc tính "quái vật" sẽ hồi <b>10 điểm lý trí</b>.</p>`],

['nv-sw-unlock','Mở khóa ở Phương Thốn Sơn: Định Thân Pháp &amp; Nhất Trụ Kình Thiên',`
<p>Ngộ Không dùng "Đọc" lên Thiên Thư ở Linh Đài Phương Thốn Sơn sẽ mở khóa <b>Định Thân Pháp</b>, <b>Nhất Trụ Kình Thiên</b> và Cân Đẩu Vân. Bản thân việc đọc hồi 2 điểm lý trí; trạng thái đã học kỹ năng được lưu, không cần học lại mỗi lần.</p>
<h4>Định Thân Pháp</h4>
<p><img src="images/nhan_vat/sun-wukong/mk_dsf.webp" alt="Định Thân Pháp" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Định Thân Pháp không yêu cầu vũ khí, nhưng cần lý trí hiện tại của Ngộ Không cao hơn 15 điểm; thi triển thành công tiêu hao <b>15 điểm lý trí</b>. Nó kiểm tra các mục tiêu có thể chiến đấu đang tấn công Ngộ Không trong bán kính <b>32 ô</b> và thử định thân chúng.</p>
<table>
<tr><th>Loại mục tiêu</th><th>Thời gian định thân</th><th>Quy tắc bổ sung</th></tr>
<tr><td>Kẻ địch thường</td><td>Khoảng 3–6 giây theo tỷ lệ máu hiện tại</td><td>Máu càng thấp, định thân càng ngắn</td></tr>
<tr><td>Mục tiêu sử thi</td><td>2 giây</td><td>Chỉ dùng để ngắt chiêu, kéo giãn khoảng cách hoặc cứu người</td></tr>
<tr><td>Mục tiêu đã chịu cùng hiệu ứng</td><td>Trong 10 giây không bị định lại</td><td>Không thể thi triển liên tục để khóa vô hạn một con quái</td></tr>
</table>
<p>Trong lúc bị định thân, mục tiêu dừng hoạt ảnh và di chuyển; bị tấn công sẽ lập tức giải định thân.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Lỗi sập game khi Định Thân Pháp kích hoạt trạng thái bất thường của Kỵ Sĩ Năm Ngựa đã được tự động sửa; phạm vi, thời lượng và quy tắc giải khi bị đánh của Định Thân không đổi. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/compatibility')">Sửa lỗi tương thích</a>.</blockquote>
<h4>Nhất Trụ Kình Thiên</h4>
<p><img src="images/nhan_vat/sun-wukong/mk_jgb_rec.webp" alt="Nhất Trụ Kình Thiên" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Nhất Trụ Kình Thiên yêu cầu: đã đọc Thiên Thư, có Kim Cô Bổng trong ba lô hoặc trên tay, hiện có ít nhất 25 điểm lý trí, và không ở trong nhà hay hình thái đặc biệt. Thi triển tiêu hao <b>25 điểm lý trí</b>, tự động trang bị rồi tạm thu Kim Cô Bổng, giáng <b>Định Hải Thần Châm</b> xuống vị trí chỉ định. Khi chạm đất lập tức tính một đợt xung kích phạm vi bán kính <b>8</b>:</p>
<table>
<tr><th>Đối tượng tính toán</th><th>Hiệu quả thực tế</th></tr>
<tr><td>Mục tiêu có thể tấn công</td><td>Gây <b>200 điểm sát thương</b> lên mục tiêu thỏa điều kiện thù địch</td></tr>
<tr><td>Mục tiêu có thể khai thác, chặt, đập hoặc phá hủy</td><td>Phá hủy thẳng đối tượng hiện tại, không phải chỉ đẩy tiến độ công việc một lần; trừ các đối tượng loại vợt bắt côn trùng</td></tr>
<tr><td>Người chơi &amp; đơn vị phe ta</td><td>Người chơi, hồn ma người chơi và tùy tùng phe ta… không bị đợt xung kích này chọn trúng</td></tr>
</table>
<p>Xung kích sẽ phá hủy trực tiếp cây, khoáng sản và công trình thỏa điều kiện trong phạm vi; khi điểm rơi gần các công trình căn cứ cần để ý các đối tượng có thể bị tác động xung quanh.</p>`],

['nv-sw-gear','Trang bị chuyên biệt',`
<h4>Mũ Hành Giả</h4>
<p><img src="images/nhan_vat/sun-wukong/xzhat_mk.webp" alt="Mũ Hành Giả" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Mũ Hành Giả cần <b>Lông thỏ ×2, Tơ nhện ×6, Sáp ong ×1</b>, do Ngộ Không chế tạo bằng công nghệ Thần Thoại. Mũ không độc quyền của Ngộ Không, nhân vật nào cũng đội được; Ngộ Không đội sẽ giảm một nửa tiêu hao độ đói và lý trí của Hỏa Nhãn.</p>
<table>
<tr><th>Thuộc tính</th><th>Quy tắc</th></tr>
<tr><td>Lý trí</td><td>Hồi lý trí mức cao</td></tr>
<tr><td>Giữ ấm</td><td>120 điểm giữ ấm mùa đông</td></tr>
<tr><td>Tuổi thọ</td><td>Hao khi đội, khoảng 15 ngày thì biến mất</td></tr>
<tr><td>Cộng thêm cho Hỏa Nhãn</td><td>Khi Ngộ Không bật Hỏa Nhãn, tiêu hao độ đói và lý trí giảm một nửa</td></tr>
</table>
<h4>Phượng Sí Tử Kim Quán</h4>
<p><img src="images/nhan_vat/sun-wukong/golden_hat_mk.webp" alt="Phượng Sí Tử Kim Quán" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Luyện bằng Lò Bát Quái: <b>Ruby ×2, Vương miện Thulecite, Sừng tê giác, Lông vũ Moose/Goose ×6</b>. Chỉ Ngộ Không đội được.</p>
<table>
<tr><th>Lợi ích</th><th>Quy tắc</th></tr>
<tr><td>Hỏa Nhãn</td><td>Khi nhiên liệu chưa cạn, miễn tiêu hao độ đói và lý trí của Hỏa Nhãn</td></tr>
<tr><td>Thân Ngoại Thân Pháp</td><td>Không còn tốn độ đói; hồi chiêu từ 15 giây rút còn khoảng 12.75 giây</td></tr>
<tr><td>Phản hồi khi hạ gục</td><td>Hạ quái +10 lý trí, yêu cầu mão vẫn còn nhiên liệu</td></tr>
<tr><td>Nhiên liệu</td><td>Ban đầu 2400; chỉ tiêu hao 1 điểm mỗi giây khi Hỏa Nhãn đang bật</td></tr>
</table>
<h4>Tỏa Tử Hoàng Kim Giáp</h4>
<p><img src="images/nhan_vat/sun-wukong/golden_armor_mk.webp" alt="Tỏa Tử Hoàng Kim Giáp" loading="lazy" style="width:96px;max-width:100%;height:auto;object-fit:contain;display:block;margin:6px 0"></p>
<p>Luyện bằng Lò Bát Quái: <b>Vảy rồng ×2, Giáp Thulecite, Cụm lông ×15, Sừng tê giác</b>. Chỉ Ngộ Không mặc được.</p>
<table>
<tr><th>Thuộc tính</th><th>Quy tắc</th></tr>
<tr><td>Độ bền / giảm sát thương</td><td>4000 độ bền, khi chưa hỏng giảm 85% sát thương</td></tr>
<tr><td>Sát thương gây ra</td><td>Mặc vào sát thương ×1.15</td></tr>
<tr><td>Phản ứng khi bị đánh</td><td>Khi chưa hỏng có thể miễn khựng thông thường khi bị đánh; đóng băng và ngủ không nằm trong phạm vi bảo vệ</td></tr>
<tr><td>Sau khi hỏng</td><td>Hiệu quả giảm sát thương và miễn khựng cùng mất tác dụng</td></tr>
</table>
<h4>Sửa Phượng Sí Tử Kim Quán &amp; Tỏa Tử Hoàng Kim Giáp</h4>
<p>Khi Phượng Sí Tử Kim Quán và Tỏa Tử Hoàng Kim Giáp cạn độ bền, không cần trả lại toàn bộ nguyên liệu chế lần đầu. Bỏ <b>trang bị gốc đã hỏng, Ruby, Sapphire, Amethyst</b> vào Lò Bát Quái, luyện 120 giây sẽ nhận lại trang bị cùng tên đã phục hồi. Hai món dùng chung cấu trúc sửa này; ba loại đá quý phải bỏ vào cùng lúc, không phải chọn một loại tùy ý.</p>`],

['nv-sw-cloud','Cân Đẩu Vân',`
<p>Sau khi đọc Thiên Thư, Ngộ Không có thể thi triển Cân Đẩu Vân trong bảng chế tạo Thần Thoại, tiêu hao <b>25 điểm lý trí</b>. Tốc độ bay cố định là <b>12</b>, cao hơn tốc độ chạy trên đất của hắn là 6.6; trạng thái bay được lưu theo save.</p>
<table>
<tr><th>Lợi ích khi bay</th><th>Giới hạn &amp; gián đoạn khi bay</th></tr>
<tr><td>Đi qua biển, không bị chết đuối</td><td>Độ đói về 0, chết, biến hình, đóng băng hoặc ngủ sẽ cưỡng chế hạ cánh</td></tr>
<tr><td>Bỏ qua va chạm mặt đất, vượt được đa số chướng ngại dưới đất</td><td>Không thể xây dựng cố định; nhặt đồ, thu hoạch, ngủ, vào nhà, cưỡi thú, di cư và nhảy hang… đều bị hạn chế</td></tr>
<tr><td>Di chuyển không kích hoạt độ dính của nền đất và khác biệt do đường</td><td>Đến gần Kẻ Dệt Bóng Cổ Đại sẽ bị cưỡng chế hạ cánh, chịu 20 sát thương và mất 10 lý trí</td></tr>
</table>`]
]]
];