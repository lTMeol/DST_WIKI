/* Thần Thoại Nhân Vật – trang "Bạch Cốt Phu Nhân"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
const NVWB=[
['nv-wb','Bạch Cốt Phu Nhân',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: hình thái Mỹ Nhân, thú cưng xương, Cốt Nhận, Cốt Kính, Âm Phong]</blockquote>
<p><b>Tổng quan cơ chế</b>: hình thái Mỹ Nhân/Yêu Thân, xử lý thi thể, y phục Cốt Kính, thú cưng xương và vũ khí hệ xương.</p>
<p style="text-align:center"><img src="images/nhan_vat/white-bone/portrait_731d4c.webp" alt="Bạch Cốt Phu Nhân" loading="lazy" style="width:320px;max-width:100%;height:auto;display:block;margin:12px auto"></p>`,
[
['nv-wb-stats','Thuộc tính cơ bản, ăn uống &amp; ranh giới sinh tồn',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Ba chỉ số</td><td><b>150 máu / 150 đói / 250 lý trí</b></td></tr>
<tr><td>Món yêu thích</td><td>Tim Mách Lẻo; độ đói nhận được ×1.2, thực tế nhận 60 độ đói</td></tr>
<tr><td>Lý trí ban đêm</td><td>Ban đêm không hao lý trí</td></tr>
<tr><td>Vật phẩm hồi máu thường</td><td>Các vật phẩm hồi máu trực tiếp thông thường vô hiệu với bà; <b>Túi máu muỗi</b> hồi gấp đôi</td></tr>
<tr><td>Thịt sống</td><td>Thịt sống độ đói nhận được ×1.2; máu và lý trí nhận được ít nhất được nâng lên bằng một nửa độ đói của món đó</td></tr>
<tr><td>Món thịt nấu chín</td><td>Hiệu quả hồi máu của món thịt và thịt khô bị đổi thành 0</td></tr>
<tr><td>Rau quả, hạt giống và đa số đồ không phải thịt</td><td>Hiệu quả dương về máu và lý trí bị ép xuống không quá 0; độ đói từ rau quả/hạt giống chỉ giữ 20%</td></tr>
<tr><td>Sức ăn của thú cưng xương</td><td>Mỗi 1 thú cưng xương, khi ăn bị trừ thêm 5 độ đói nhận được</td></tr>
</table>
<h4>Thức ăn đặc biệt &amp; chữa trị bằng mảnh xương</h4>
<table>
<tr><th>Vật phẩm</th><th>Kết toán thực tế của Bạch Cốt Phu Nhân</th></tr>
<tr><td>Nhiên liệu ác mộng</td><td>Ăn trực tiếp được, 0 máu / 25 đói / 0 lý trí</td></tr>
<tr><td>Tim Mách Lẻo</td><td>Ăn trực tiếp được, 50 máu / 60 đói / 0 lý trí; độ đói đã gồm cộng thêm của món yêu thích</td></tr>
<tr><td>Tâm Thất Bóng Tối</td><td>Ăn trực tiếp được, 0 máu / 50 đói / 0 lý trí; sau đó trong 240 giây sát thương gấp 2, và mỗi giây hồi khoảng 0.33 lý trí</td></tr>
<tr><td>Mảnh xương</td><td>Dùng lên chính mình tiêu hao 1 mảnh hồi 20 máu; cùng loại mảnh xương này cũng dùng để sửa vũ khí hệ xương</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/myth_rhino_redheart.webp" alt="Tim Tị Thử" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Tim Tị Thử</td><td>50 máu / 50 đói / 50 lý trí; kéo dài 4800 giây, miễn sát thương lửa thông thường và ngăn nhiệt độ cơ thể vào vùng quá nóng</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/myth_rhino_blueheart.webp" alt="Tim Tị Hàn" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Tim Tị Hàn</td><td>50 máu / 50 đói / 50 lý trí; kéo dài 4800 giây, ngừng bị ẩm thêm, khô nhanh hơn, và giới hạn nhiệt độ cơ thể tối thiểu ở 10</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/myth_rhino_yellowheart.webp" alt="Tim Tị Trần" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Tim Tị Trần</td><td>50 máu / 50 đói / 50 lý trí; kéo dài 4800 giây, có hiệu quả bảo vệ mắt khỏi bão cát</td></tr>
</table>
<p>Thời lượng của ba quả tim tê giác đều là <b>10 ngày trong game</b>; chúng vẫn là nguyên liệu luyện đan và vũ khí tê giác, ăn sẽ tiêu hao thẳng nguyên liệu hiếm này.</p>`],

['nv-wb-forms','Mỹ Nhân &amp; Yêu Thân',`
<table>
<tr><th>Trạng thái</th><th>Hiệu quả</th></tr>
<tr><td>Hình thái Mỹ Nhân</td><td>Không bị coi là quái vật, không tạo vầng sáng lý trí; trang bị thường dùng bình thường</td></tr>
<tr><td>Yêu Thân</td><td>Tốc độ di chuyển ×<b>1.083</b>; hệ thống coi bà là quái vật; gây vầng sáng <b>-10 lý trí/phút</b> cho người xung quanh</td></tr>
<tr><td>Kích hoạt chuyển Yêu Thân</td><td>Ở hình thái Mỹ Nhân, tấn công trúng mục tiêu, hoặc độ đói tụt xuống <b>50</b> trở xuống</td></tr>
<tr><td>Khi bị đánh ở hình thái Mỹ Nhân</td><td>Khiến các sinh vật trung lập hợp lệ xung quanh hỗ trợ tấn công kẻ đánh lén</td></tr>
<tr><td>Hồn ma</td><td>Tốc độ hồn ma ×<b>1.3</b>, gây vầng sáng <b>-20 lý trí/phút</b> cho người xung quanh</td></tr>
</table>
<h4>Giới hạn trang bị của Yêu Thân</h4>
<p>Ở Yêu Thân, ô trang bị thường dùng được chỉ còn <b>tay</b>; trang bị đầu, thân, lưng thông thường không nằm trong danh sách miễn trừ của Bạch Cốt đều bị hạn chế. Khi chuyển từ Mỹ Nhân sang Yêu Thân, các vật đang trang bị ở ô không phải tay sẽ rơi thẳng xuống đất.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Mặc định bật tương thích ô trang bị mở rộng, giúp Bạch Cốt Phu Nhân thích ứng đúng với các mod ô trang bị 5 ô, 6 ô…; sự tương thích này không đồng nghĩa với việc bỏ giới hạn trang bị Yêu Thân nói ở mục này. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-wb-corpse','Xử lý thi thể',`
<p>Sau khi Bạch Cốt Phu Nhân tự tay hạ gục mục tiêu thỏa điều kiện, thi thể được tạm giữ lại cho bà xử lý. Mục tiêu phải có ít nhất 50 máu tối đa và không thuộc các loại bị loại trừ như tường, người chơi, quái bóng tối, quân cờ, thực vật…; thi thể mặc định giữ <b>10 giây</b>, khi mặc Bất Yếm Y kéo dài thành <b>60 giây</b>. Cách thi thể quá 16 ô, hết thời gian của thi thể, hoặc người hạ gục mất hiệu lực đều làm cửa sổ này kết thúc.</p>
<table>
<tr><th>Thao tác</th><th>Kết quả</th><th>Chi phí &amp; hệ quả</th></tr>
<tr><td>Chuột trái "Giải phẫu"</td><td>Vật rơi thông thường tính như cũ; sinh vật cỡ lớn cố định thêm 1 mảnh xương, ngoài ra còn xác suất thêm mảnh xương; Bạch Cốt Phu Nhân <b>+5 lý trí</b></td><td>Chọn khi thiếu mảnh xương và muốn giữ vật rơi gốc; Bất Yếm Y tăng xác suất thêm mảnh xương</td></tr>
<tr><td>Chuột phải "Hóa thi"</td><td>Mọi phần vật rơi vốn có của thi thể đó đều bị thay bằng Nhiên liệu ác mộng</td><td>Bạch Cốt Phu Nhân <b>-5 lý trí</b>; dùng khi cần Nhiên liệu ác mộng và không quan tâm chiến lợi phẩm gốc</td></tr>
<tr><td>Không xử lý</td><td>Thi thể biến mất sau thời hạn và kết toán theo quy trình mặc định</td><td>—</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Lỗi Bạch Cốt Phu Nhân giết Brightshade không rơi chiến lợi phẩm được tự động sửa; việc lọc đối tượng của xử lý thi thể và quy tắc "Giải phẫu / Hóa thi" vẫn kết toán theo mục này. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/compatibility')">Sửa lỗi tương thích</a>.</blockquote>`],

['nv-wb-mirror','Cốt Kính &amp; sáu bộ Cốt Y',`
<p>Cốt Kính là thiết bị để Bạch Cốt Phu Nhân lưu trữ và đổi y phục chuyên biệt, không phải ô trang bị thường. Phải dùng ở <b>Yêu Thân</b>; đưa Cốt Y cho Cốt Kính thì mới được đưa vào danh sách chọn. Chuột phải dùng Cốt Kính để mở giao diện, chọn y phục rồi xác nhận là đổi; đủ nguyên liệu thì bấm "Nâng cấp" trong giao diện để nâng cấp Cốt Kính.</p>
<table>
<tr><th>Cấp Cốt Kính</th><th>Số y phục lưu được</th><th>Nguyên liệu nâng cấp</th><th>Hiệu quả thêm</th></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_mirror_1.webp" alt="Cốt Kính cấp 1" loading="lazy" style="width:40px;height:40px;object-fit:contain;vertical-align:middle;margin-right:6px">Cấp 1</td><td>2 bộ</td><td>Cốt Kính ban đầu đã là cấp 1</td><td>—</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_mirror_2.webp" alt="Cốt Kính cấp 2" loading="lazy" style="width:40px;height:40px;object-fit:contain;vertical-align:middle;margin-right:6px">Cấp 2</td><td>4 bộ</td><td>3 Ruby + 6 mảnh xương</td><td>—</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_mirror_3.webp" alt="Cốt Kính cấp 3" loading="lazy" style="width:40px;height:40px;object-fit:contain;vertical-align:middle;margin-right:6px">Cấp 3</td><td>6 bộ</td><td>4 Amethyst + 8 mảnh xương</td><td>Tự mở khóa lựa chọn Vụ Ẩn Thường</td></tr>
</table>
<table>
<tr><th>Cốt Y</th><th>Hiệu quả</th></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorlight.webp" alt="Doanh Phong Trù" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Doanh Phong Trù</td><td>Tốc độ di chuyển Yêu Thân ×<b>1.2</b>; cách nhiệt mùa hè 120</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorbone.webp" alt="Kiên Cốt Phi" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Kiên Cốt Phi</td><td>Hấp thụ sát thương <b>75%</b>; cách nhiệt mùa hè 120</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorblood.webp" alt="Huyết Sắc Nghê" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Huyết Sắc Nghê</td><td>Hút máu của Cốt Nhận tăng lên <b>20%</b>, Cốt Tiên có <b>5%</b> hút máu; cách nhiệt mùa hè 120</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorstorage.webp" alt="Uẩn Huyền Bào" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Uẩn Huyền Bào</td><td>Tạo ba lô chuyên biệt <b>8 ô</b>, tự thu các vật rơi vãi gần đó cùng loại với vật đã có trong túi; khi cởi y phục thì đồ cất rơi xuống đất; giữ ấm mùa đông 120</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorgreed.webp" alt="Bất Yếm Y" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Bất Yếm Y</td><td>Giữ ấm mùa đông 120; thi thể giữ 60 giây và tăng cơ hội thêm mảnh xương khi giải phẫu</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_armorfog.webp" alt="Vụ Ẩn Thường" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Vụ Ẩn Thường</td><td>Giữ ấm mùa đông 120; mở hệ thống sương xương</td></tr>
</table>
<h4>Cốt Kính, Cốt Y và công thức vật tiêu hao</h4>
<p>Chế tạo chuyên biệt của Bạch Cốt Phu Nhân không cần Lò Bát Quái; đủ nguyên liệu thì chính bà làm trong bảng chế tạo chuyên biệt. Cấp Cốt Kính chỉ quyết định số y phục được thu nhận, không thay thế việc chế tạo chính y phục.</p>
<table>
<tr><th>Sản phẩm</th><th>Nguyên liệu</th><th>Hiệu quả</th></tr>
<tr><td>Bạch Cốt Yêu Kính</td><td>Mảnh xương ×6, Tơ nhện ×6, Sapphire ×2</td><td>Lối chế lại khi mất kính ban đầu; kính mới vẫn bắt đầu từ cấp 1</td></tr>
<tr><td>Doanh Phong Trù</td><td>Mảnh xương ×4, Tơ nhện ×12</td><td>Y phục cơ động</td></tr>
<tr><td>Kiên Cốt Phi</td><td>Mảnh xương ×8, Nhiên liệu ác mộng ×4</td><td>Y phục phòng vệ chính diện</td></tr>
<tr><td>Huyết Sắc Nghê</td><td>Mảnh xương ×4, Túi máu muỗi ×4</td><td>Tăng hút máu cho Cốt Nhận và cho Cốt Tiên có hút máu</td></tr>
<tr><td>Uẩn Huyền Bào</td><td>Mảnh xương ×4, Da heo ×2</td><td>Y phục chứa đồ</td></tr>
<tr><td>Bất Yếm Y</td><td>Mảnh xương ×4, Da Slurper ×2</td><td>Kéo dài cửa sổ xử lý thi thể và tăng thu hoạch mảnh xương</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/wb_heart.webp" alt="Tim Âm Sâm" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Tim Âm Sâm</td><td>Mảnh xương ×2, Tuyến nhện ×2, 20 máu</td><td>0 máu / 25 đói / -30 lý trí; trừ Wormwood, người chơi ăn sẽ chết ngay. Bạch Cốt Phu Nhân và Hắc Bạch Vô Thường chết vì vậy sẽ để lại bộ xương có thể dùng tiếp</td></tr>
<tr><td>Vật phẩm bộ xương</td><td>Mảnh xương ×4</td><td>Vật mang cơ bản để chuyển thành thú cưng xương; cũng có thể dùng bộ xương có sẵn trong thế giới</td></tr>
</table>
<p>Vụ Ẩn Thường không phải bộ y phục thứ sáu được chế bằng cách bỏ nguyên liệu riêng: sau khi Bạch Cốt Yêu Kính lên cấp 3, nó tự vào danh sách y phục có thể chọn.</p>`],

['nv-wb-weapons','Vũ khí, thú cưng xương &amp; sương xương',`
<h4>Ba vũ khí hệ xương</h4>
<table>
<tr><th>Vũ khí</th><th>Số liệu &amp; cơ chế</th></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_blade.webp" alt="Cốt Nhận" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Cốt Nhận</td><td>68 sát thương, 100 lần dùng; khi gây sát thương lên mục tiêu có thể hút máu, mặc định hồi <b>2.5%</b> sát thương lần đó. Khi mặc Vụ Ẩn Thường và đứng trong sương xương, cầm Cốt Nhận chuột phải lên mặt đất có thể dịch chuyển, hồi chiêu 15 giây, mỗi lần tốn 10 độ đói và 5 lần độ bền</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_whip.webp" alt="Cốt Tiên" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Cốt Tiên</td><td>41 sát thương, 100 lần dùng, tầm đánh dài hơn Cốt Nhận. Khi trúng có xác suất kích hoạt choáng diện rộng, và có thể rút trước 1 vật rơi thêm từ kho chiến lợi phẩm của mục tiêu</td></tr>
<tr><td><img src="images/nhan_vat/white-bone/bone_wand.webp" alt="Cốt Trượng" loading="lazy" style="width:32px;height:32px;object-fit:contain;vertical-align:middle;margin-right:6px">Cốt Trượng</td><td>10 sát thương cơ bản, 25 lần dùng; khi cầm chuột phải lên mặt đất hoặc mục tiêu để thi pháp, hồi chiêu 10 giây, tìm mục tiêu hợp lệ trong tối đa 32 ô và triệu hồi gai xương quanh nó; mục tiêu thường 6 chiếc, mục tiêu cỡ lớn 12 chiếc</td></tr>
</table>
<h5>Hút máu của Cốt Nhận</h5>
<p>Tỷ lệ hút máu mặc định của Cốt Nhận là <b>2.5%</b>; khi mặc Huyết Sắc Nghê tăng lên <b>20%</b>, mặc Vụ Ẩn Thường và bản thân đang trong sương xương là <b>10%</b>, mặc Kiên Cốt Phi là 0. Người chơi, tường, hồn ma, sinh vật bóng tối, công trình và đơn vị phe ta… không cho hút máu bằng Cốt Nhận.</p>
<h5>Choáng và vật rơi thêm của Cốt Tiên</h5>
<table>
<tr><th>Loại mục tiêu</th><th>Xác suất choáng diện rộng</th><th>Xác suất rút vật rơi thêm</th></tr>
<tr><td>Trùm</td><td>5%</td><td>5%</td></tr>
<tr><td>Quái vật thường</td><td>20%</td><td>Thường 10%; mặc Bất Yếm Y là 15%</td></tr>
<tr><td>Sinh vật thường khác</td><td>25%</td><td>Thường 10%; mặc Bất Yếm Y là 15%</td></tr>
</table>
<p>Khi choáng diện rộng kích hoạt, các mục tiêu chiến đấu không phải trùm đủ điều kiện trong 14 ô sẽ mất mục tiêu tấn công hiện tại và thử vào trạng thái bị đánh. Vật rơi thêm được rút ngẫu nhiên 1 món từ chiến lợi phẩm có thể sinh ra của mục tiêu lần đó, không giết mục tiêu, cũng không thay thế vật rơi bình thường khi nó chết; mục tiêu loại hóa thạch không kích hoạt. Bản thân Cốt Tiên không có hút máu cơ bản; khi mặc Huyết Sắc Nghê hoặc mặc Vụ Ẩn Thường trong sương xương, tỷ lệ hút máu đều là <b>5%</b>.</p>
<h5>Cái giá khi thi pháp Cốt Trượng</h5>
<p>Mỗi mục tiêu bị Cốt Trượng nhốt thành công, Bạch Cốt Phu Nhân hồi <b>2 máu</b>, đồng thời mất <b>2 độ đói và 2 lý trí</b>; chỉ cần lần này nhốt thành công ít nhất 1 mục tiêu là tiêu hao 1 lần độ bền và vào hồi chiêu.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Mỗi bậc tôi luyện của Cốt Nhận tăng 6 sát thương vị diện; giới hạn độ bền ở bậc 0 / 1 / 2 / 3 trở lên lần lượt là 100 / 200 / 300 / 400. Khi đầy bậc mà cạn độ bền thì không biến mất, nhưng sát thương cơ bản và kỹ năng chủ động ngừng dùng, vẫn giữ sát thương vị diện và hút máu; có thể vá bằng mảnh xương, hoặc tiêu hao 1 phần Tim đá Hỏa Viên để sửa đầy, độ bền đã đầy thì không tiêu hao. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/systems')">Hệ thống Hỏa Nguyên Tôi Luyện</a>.</blockquote>
<p>Chế tạo và bảo dưỡng tại chỗ của ba vũ khí như sau:</p>
<table>
<tr><th>Vũ khí</th><th>Nguyên liệu chế tạo</th><th>Lượng sửa mỗi mảnh xương</th></tr>
<tr><td>Cốt Nhận</td><td>Mảnh xương ×4, Gỗ sống ×1, Nhiên liệu ác mộng ×1</td><td>100 lần dùng, tức sửa đầy từ độ bền rỗng</td></tr>
<tr><td>Cốt Tiên</td><td>Mảnh xương ×4, Gỗ sống ×1, Nhiên liệu ác mộng ×2</td><td>50 lần dùng</td></tr>
<tr><td>Cốt Trượng</td><td>Mảnh xương ×4, Gỗ sống ×2, Amethyst ×2</td><td>10 lần dùng</td></tr>
</table>
<p>Sửa chữa là dùng mảnh xương thẳng lên vũ khí còn tồn tại, không qua Lò Bát Quái.</p>
<h4>Bạch Cốt Lâu La (thú cưng xương)</h4>
<p><img src="images/nhan_vat/white-bone/bone_pet.webp" alt="Bạch Cốt Lâu La" loading="lazy" style="width:110px;max-width:100%;height:auto;display:block;margin:6px 0"></p>
<ul>
<li>Giao 1 Nhiên liệu ác mộng cho <b>bộ xương</b> có thể biến bộ xương thành thú cưng xương; tối đa <b>5</b> con.</li>
<li>Mỗi thú cưng xương có 75 máu, 30 tấn công, khoảng cách đòn đánh 0.5 giây, thời gian sống tối đa <b>960 giây (16 phút)</b>; chết thường rơi 2 mảnh xương.</li>
<li>Thú cưng xương bảo vệ chủ, cũng nhận được các công cụ như rìu, cuốc chim, xẻng để hỗ trợ làm việc; lần đầu giao công cụ cầm tay sẽ làm tuổi thọ còn lại giảm một nửa.</li>
<li>Khi nhân vật chết, toàn bộ thú cưng xương bị xóa. Chúng là sức chiến đấu và công cụ ngắn hạn, không phải tài sản tích lũy vĩnh viễn qua cái chết.</li>
<li>Mỗi Bạch Cốt Lâu La làm Bạch Cốt Phu Nhân mỗi lần ăn nhận ít hơn 5 độ đói; đủ 5 con thì mỗi lần ăn tổng cộng nhận ít hơn 25 độ đói.</li>
</ul>
<h4>Vụ Ẩn Thường &amp; bay Âm Phong</h4>
<p>Bạch Cốt Phu Nhân đọc Thiên Thư ở Linh Đài Phương Thốn Sơn sẽ mở khóa thuật bay Âm Phong. Phát động tiêu hao <b>25 lý trí</b> và cất cánh ngay; tốc độ bay là <b>11</b>, khi bay ẩn thân với độ trong suốt thấp, sau khi hạ cánh vẫn giữ trạng thái ẩn <b>5 giây</b>. Nếu bà tấn công mục tiêu chưa hình thành thù hận, hệ số sát thương đòn đầu là <b>1.25</b>.</p>
<p>Vụ Ẩn Thường khi mặc có thể bật sương xương, kéo dài <b>120 giây</b>. Khi không bay, không cưỡi thú, chuột phải lên chính mình là thi triển được. Cầm Cốt Nhận trong sương xương có thể dùng dịch chuyển chuyên biệt; Vụ Ẩn Thường mở rộng bán kính hiệu lực của sương xương lên 40.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Trong lúc hóa sương có thể chuột phải lên chính mình để "thu sương", chỉ thu sương của mình, thời gian hồi còn lại ban đầu không đổi; khi cưỡi thú hoặc đằng vân thì không dùng được. Mọi nhân vật đều có thể chỉnh độ trong suốt lớp sương trên máy mình trong tùy chọn Yêm Đốc Tiên, không đổi hiệu quả kỹ năng, cũng không ảnh hưởng hình ảnh của người chơi khác. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`],

['nv-wb-death','Cứu mạng khi cận kề cái chết, tử vong &amp; hồi sinh',`
<table>
<tr><th>Tình huống</th><th>Quy tắc thực tế</th></tr>
<tr><td>Bị tấn công chiến đấu trực tiếp đến mức tử vong</td><td>Nếu "chuyển dời cận tử" chưa trong hồi chiêu, sẽ giữ lại <b>5 máu</b>, kích hoạt hiệu ứng và định vị lại; sau đó vào hồi chiêu <b>240 giây</b></td></tr>
<tr><td>Đói, sát thương môi trường liên tục… không thuộc loại tấn công này</td><td>Không đảm bảo kích hoạt chuyển dời cận tử</td></tr>
<tr><td>Tử vong</td><td>Chuyển sang trạng thái Yêu Thân và xóa toàn bộ thú cưng xương</td></tr>
<tr><td>Hồn ma hồi sinh</td><td>Hồn ma Bạch Cốt Phu Nhân có thể quấy nhiễu bộ xương thường hoặc bộ xương người chơi để hồi sinh</td></tr>
</table>`]
]]
];