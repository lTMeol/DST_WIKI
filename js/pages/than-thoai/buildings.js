/* Thần Thoại Thư Thuyết – tab "Kiến trúc & sinh thái"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
/* Ảnh: đặt trong thư mục images/than-thoai/buildings/ (cùng cấp với file index của wiki) */
const TTB_IMG='images/than-thoai/buildings/';
/* Icon nhỏ cạnh tên trong bảng (f = tên file không có .webp; f=null để chừa chỗ trống cho thẳng hàng) */
const ttbIcon=(f,alt,s=44)=>f
 ?`<img src="${TTB_IMG}${f}.webp" alt="${alt}" title="${alt}" loading="lazy" style="width:${s}px;height:${s}px;object-fit:contain;vertical-align:middle;margin-right:8px">`
 :`<span style="display:inline-block;width:${s}px;height:${s}px;vertical-align:middle;margin-right:8px"></span>`;
/* Ảnh có chú thích, rộng s (px) */
const ttbFig=(f,alt,s=140)=>`<figure style="margin:0;text-align:center;width:${s}px;max-width:100%"><img src="${TTB_IMG}${f}.webp" alt="${alt}" loading="lazy" style="width:100%;height:auto;display:block"><figcaption style="font-size:.85em;opacity:.8;margin-top:2px">${alt}</figcaption></figure>`;
/* Đoạn văn bên trái + ảnh bên phải; màn hình hẹp tự xuống dòng */
const ttbRow=(text,figs)=>`<div style="display:flex;flex-wrap:wrap;gap:8px 18px;align-items:flex-start;margin:8px 0"><div style="flex:1 1 280px;min-width:0">${text}</div><div style="display:flex;gap:12px;align-items:flex-start;flex:0 0 auto">${figs}</div></div>`;
const TTB=[
['tb-overview','Kiến trúc &amp; sinh thái',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Chủ đề Thần Thoại] [Loại dữ liệu: Tổng quan công trình &amp; vật chứa] [Nguồn nội dung: bản gốc Thần Thoại] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Giếng Nước, Kho Thóc, Bàn Gỗ Đỏ, Chiến Kỳ, Hồ Lô, Nhà Ngói Thương Trúc, Cây Rụng Tiền, Tiệm Thanh Trúc]</blockquote>
<p>Các vật chứa cỡ lớn của chủ đề có thể bị đốt cháy, cũng có thể bị đập phá bằng búa.</p>
<div style="display:flex;flex-wrap:wrap;gap:12px 16px;margin:8px 0">${ttbFig('myth_well','Giếng Nước',72)}${ttbFig('myth_granary','Kho Thóc',72)}${ttbFig('myth_food_table','Bàn Gỗ Đỏ',72)}${ttbFig('mk_battle_flag','Chiến Kỳ',72)}${ttbFig('wine_bottle_gourd','Hồ Lô Rượu',72)}${ttbFig('myth_house_bamboo','Nhà Ngói Thương Trúc',72)}${ttbFig('myth_cash_tree_ground','Cây Rụng Tiền',72)}${ttbFig('myth_shop','Tiệm Thanh Trúc',72)}</div>`,[]],

['tb-basic','Công trình cơ bản',`
<table>
<tr><th>Công trình</th><th>Công thức &amp; điều kiện</th><th>Hiệu quả thực tế</th></tr>
<tr><td>${ttbIcon('myth_well','Giếng Nước')}Giếng Nước</td><td>Gạch đá ×3, Cuốc chim ×1, Xẻng ×1; cần Máy Giả Kim</td><td>Mùa đông không đóng băng, không câu cá được; có thể lấy nước vào bình nước và dập tắt các đám cháy âm ỉ trong khoảng 16 ô</td></tr>
<tr><td>${ttbIcon('myth_granary','Kho Thóc')}Kho Thóc</td><td>Ván gỗ ×6, Giấy cói ×12, Dây thừng ×3; cần Máy Khoa Học</td><td>Sức chứa 4×4, tốc độ hỏng của thức ăn và hạt giống chỉ còn 10% bình thường</td></tr>
<tr><td>${ttbIcon('myth_food_table','Bàn Gỗ Đỏ')}Bàn Gỗ Đỏ</td><td>Ván gỗ ×6, Sáp ong ×1; mở khóa sau khi đọc bản vẽ Bàn Gỗ Đỏ bán ở Tiệm Thanh Trúc</td><td>Bày được 8 món ăn, <b>giữ tươi vĩnh viễn</b></td></tr>
<tr><td>${ttbIcon(null,'Miếu Thổ Địa')}Miếu Thổ Địa</td><td>Gạch đá ×3, Ván gỗ ×4, Chuột chũi ×1; cần Máy Giả Kim</td><td>Cả thế giới chỉ xây được một ngôi; dâng đủ ba loại món khác nhau (món mặn, món chay, món ăn vặt) thì dịch vụ của Thổ Địa kéo dài 5 ngày kể từ lần dâng cuối cùng</td></tr>
<tr><td>${ttbIcon('myth_stool','Ghế Gỗ')}Ghế Gỗ</td><td>Ván gỗ ×1; phải đọc bản vẽ của tiệm trước</td><td>1 người chơi ngồi được; khi ngồi hồi một ít lý trí liên tục</td></tr>
</table>`,[]],

['tb-craft','Chế tạo tinh xảo &amp; trang trí',`
<table>
<tr><th>Thành phẩm</th><th>Công thức &amp; điều kiện</th><th>Ghi chú</th></tr>
<tr><td>${ttbIcon(null,'Giấy cói ×2')}Giấy cói ×2</td><td>Tre ×6; cần Máy Khoa Học</td><td>Cho ra giấy cói nguyên bản</td></tr>
<tr><td>${ttbIcon('turf_myth_zhu','Nền cỏ')}Nền cỏ</td><td>Tre ×3; Máy Nén Đất</td><td>Trang trí mặt đất theo chủ đề</td></tr>
<tr><td>${ttbIcon('turf_quagmire_parkfield','Nền vườn đào')}Nền vườn đào</td><td>Bàn Đào ×3; Máy Nén Đất</td><td>Trang trí mặt đất kiểu vườn đào</td></tr>
<tr><td>${ttbIcon('myth_rocktips','Sỏi cuội ×6')}Sỏi cuội ×6</td><td>Đá ×1; phải đọc bản vẽ của tiệm trước</td><td>Vật trang trí mặt đất</td></tr>
<tr><td>${ttbIcon('infantree_carpet','Thảm Nhân Sâm Quả')}Thảm Nhân Sâm Quả</td><td>Cành cây ×4, Lá dương xỉ ×4; cần công nghệ Cây Nhân Sâm Quả trưởng thành</td><td>Chỉ để trang trí, dễ cháy</td></tr>
<tr><td>${ttbIcon('wall_dwelling_item','Tường Ngói Đen Vách Trắng ×12')}Tường Ngói Đen Vách Trắng ×12</td><td>Đá cẩm thạch ×12, Gạch đá ×1, Than củi ×4; phải đọc bản vẽ của tiệm trước</td><td>Tường theo chủ đề</td></tr>
<tr><td>${ttbIcon('fence_bamboo_item','Hàng rào tre ×6')}Hàng rào tre ×6</td><td>Tre ×6, Dây thừng ×1; phải đọc bản vẽ của tiệm trước</td><td>Hàng rào theo chủ đề</td></tr>
<tr><td>${ttbIcon('fence_gate_bamboo_item','Cửa tre')}Cửa tre</td><td>Tre ×3, Dây thừng ×1; phải đọc bản vẽ của tiệm trước</td><td>Đi cùng hàng rào tre</td></tr>
<tr><td>${ttbIcon('myth_house_bamboo','Nhà Ngói Thương Trúc')}Nhà Ngói Thương Trúc</td><td>Gạch đá ×6, Ván gỗ ×6, Thanh trúc ×4; phải đọc bản vẽ của tiệm trước</td><td>Không gian trong nhà độc lập, có thể bước vào</td></tr>
</table>`,
[['tb-barn-note','Gợi ý liên động Kho Thóc',`
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Tính năng giữ tươi vĩnh viễn của "Kho Thóc Thông Minh" mặc định <b>tắt</b>; chứa mọi loại thức ăn mặc định <b>bật</b>; tương thích bảng gỗ thông minh mặc định <b>tắt</b>. Nâng cấp xếp chồng vô hạn cố định hỗ trợ "Máy Tạo Không Gian Đàn Hồi" và "Nẹp Nguyệt Thạch" của Prism, không còn công tắc riêng. Kho Thóc vẫn giữ sức chứa cơ bản 16 ô. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`]]],

['tb-banner','Chiến Kỳ',`
${ttbRow(`<p>Chiến Kỳ là vật phẩm triển khai được, chế tạo bằng công nghệ Thần Thoại, cần <b>Ván gỗ ×2, Tơ nhện ×9, Răng chó ×6</b>. Nó không phải bộ xác định phe hay đội: mọi người chơi còn sống trong bán kính <b>15</b> quanh lá cờ đều nhận được buff chiến đấu, không giới hạn ở người chế tạo hay tùy tùng của họ.</p>`,`${ttbFig('mk_battle_flag','Chiến Kỳ',110)}`)}
<table>
<tr><th>Hạng mục</th><th>Quy tắc hiện tại</th></tr>
<tr><td>Tấn công</td><td>Hệ số sát thương gây ra ×1.15, tức tăng 15%</td></tr>
<tr><td>Di chuyển</td><td>Hệ số tốc độ di chuyển ×1.15, tức tăng 15%</td></tr>
<tr><td>Lý trí</td><td>Chỉ hồi khi <b>chính người cắm cờ</b> đang ở trong phạm vi 15; mỗi 0.5 giây +0.1, khoảng +12 mỗi phút</td></tr>
<tr><td>Thời lượng</td><td>Đầy độ bền là 960 giây, tức 2 ngày trong game; chỉ cần đang cắm trên đất là liên tục hao, có người ở gần hay không không ảnh hưởng thời gian</td></tr>
<tr><td>Cạn độ bền</td><td>Cờ vẫn ở nguyên chỗ nhưng ngừng cho buff, không tự biến mất khi độ bền về 0</td></tr>
<tr><td>Đề chữ &amp; thu hồi</td><td>Lần đặt đầu tiên mở giao diện đề chữ; thu hồi lá cờ đã đặt sẽ trở lại thành vật phẩm, giữ nguyên chữ, skin và tỷ lệ độ bền còn lại</td></tr>
<tr><td>Sửa chữa</td><td>Khi đang cắm trên đất không thể bổ sung độ bền trực tiếp; thu về túi đồ rồi dùng Bộ May hoặc Băng keo vá, một lần là đầy lại độ bền 2 ngày</td></tr>
<tr><td>Nhiều cờ chồng nhau</td><td>Nhiều lá cờ dùng chung một biểu tượng buff, bonus tấn công và tốc độ không cộng dồn thành nhiều tầng</td></tr>
</table>`,[]],

['tb-gourd','Hồ Lô Rượu',`
${ttbRow(`<p>Hồ Lô Rượu là vật dụng uống rượu mang theo người, có thể rót thêm rượu và dùng lặp lại. Chế tạo cần <b>Hồ lô ×1, Rượu Bàn Đào Chay ×5, Sáp ong ×1</b>, mở khóa bằng công nghệ Thần Thoại.</p>`,`${ttbFig('wine_bottle_gourd','Hồ Lô Rượu',90)}`)}
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Uống</td><td>Nhấp chuột phải trong túi đồ để uống, mỗi lần hồi <b>3 máu / 12.5 độ đói / 50 lý trí</b>, tiêu hao <b>20%</b> lượng rượu</td></tr>
<tr><td>Lượng rượu ban đầu</td><td>Vừa chế tạo là đầy, uống được <b>5 lần</b></td></tr>
<tr><td>Rót thêm</td><td>Dùng Rượu Bàn Đào Chay để rót; mỗi phần bổ sung <b>20%</b> lượng rượu. Hết rượu hồ lô không biến mất, vẫn rót thêm được</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Uống rượu thành công bằng Hồ Lô Rượu sẽ hoàn thành Kiếp Vận "Quỳnh Tương Ngọc Dịch". Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/systems')">Nguyên Thìn Kiếp Vận</a>.</blockquote>`,[]],

['tb-container','Vật chứa chủ đề &amp; Nhà Ngói Thương Trúc',`
<p>Lò Bát Quái và Hồ Lô Đan Dược phục vụ trực tiếp cho quy trình luyện đan; cách mở khóa, công thức và quy tắc sử dụng được gộp chung ở trang <a onclick="go('#/mod/than-thoai/artifacts')">Luyện đan &amp; pháp bảo</a>, bài này không lặp lại.</p>
<table>
<tr><th>Vật thể</th><th>Công thức / điều kiện</th></tr>
<tr><td>${ttbIcon('myth_house_bamboo','Nhà Ngói Thương Trúc')}Nhà Ngói Thương Trúc</td><td>Gạch đá ×6, Ván gỗ ×6, Thanh trúc ×4; bản vẽ của tiệm</td></tr>
</table>
${ttbRow(`<p>Chọn "Bước vào" ở cửa nhà, chọn "Rời đi" ở lối ra bên trong; trong nhà không bị tăng độ ẩm khi trời mưa, ban đêm tự động có đèn chiếu sáng.</p>
<p>Nếu lối vào của Nhà Ngói Thương Trúc bị phá bỏ, người chơi sẽ bị đẩy ra ngoài cưỡng bức, các thực thể và độ bền bên trong bị dọn sạch; nếu điểm đẩy ra không hợp lệ, nhân vật có thể chết.</p>`,`${ttbFig('myth_house_bamboo','Nhà Ngói Thương Trúc',150)}`)}`,[]],

['tb-moneytree','Cây Rụng Tiền',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Chủ đề Thần Thoại] [Loại dữ liệu: Thực vật quan trọng &amp; công trình kinh tế] [Nguồn nội dung: bản gốc Thần Thoại] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: Tụ Bảo Kim Thiềm, Cây Rụng Tiền non, Đồng Tiền Thần Thoại, Kim Khối May Mắn, đá quý]</blockquote>
${ttbRow(`<p>Cây Rụng Tiền non có được khi đánh lui Tụ Bảo Kim Thiềm lần đầu. Trồng cần cây non, <b>Đồng Tiền Thần Thoại ×66, Kim Khối May Mắn ×66</b>. Cây rơi của cải khoảng mỗi <b>390–510 giây</b> một lần: Đồng Tiền Thần Thoại, Kim Khối May Mắn, và một loại đá quý bất kỳ trong sáu màu với xác suất lần lượt <b>70% / 20% / 10%</b>. Nếu ra đá quý thì chọn đều ngẫu nhiên một trong sáu loại tím, lam, đỏ, cam, vàng, lục, nên xác suất ra một màu chỉ định trong mỗi lần là <b>1/60, khoảng 1.67%</b>. Cây còn tạo vầng sáng cho khu vực lân cận, hồi +25 lý trí mỗi phút.</p>
<p>Khi Cây Rụng Tiền bị đập bằng búa sẽ trả lại cây non, Đồng Tiền Thần Thoại ×33 và Kim Khối May Mắn ×33.</p>`,`${ttbFig('myth_cash_tree','Cây Rụng Tiền non',100)}${ttbFig('myth_cash_tree_ground','Cây Rụng Tiền',130)}`)}`,[]],

['tb-shop','Tiệm Thanh Trúc',`
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Chủ đề Thần Thoại] [Loại dữ liệu: Cửa hàng &amp; hệ thống kinh tế] [Nguồn nội dung: bản gốc Thần Thoại] [Trạng thái Yêm Đốc Tiên: nền tảng gốc] [Liên quan chính: tám loại tiệm, đồng tiền chủ đề, mua bán, nhập hàng, sửa chữa, tìm kho báu, bói vận mệnh, giảm giá Niên Thú]</blockquote>
${ttbRow(`<p>Tiệm Thanh Trúc do cư dân gấu trúc ở Thanh Trúc Châu kinh doanh; người chơi không thể dùng nguyên liệu để tự xây một "cửa hàng tùy chọn". Các tiệm lần lượt hình thành ngẫu nhiên từ những loại chưa xuất hiện, thị trấn hoàn chỉnh cuối cùng sẽ có mỗi loại một tiệm: <b>Tiệm Trân Bảo (vật phẩm hiếm), Tiệm Chợ Rau (nguyên liệu), Tiệm Hoa Điểu (động vật), Tiệm Hòa Chủng (thực vật), Tiệm Trà Hào (thức ăn), Tiệm Chú Tượng (vũ khí), Tiệm Bói Toán (xem bói), Tiệm Tài Ngõa (xây dựng)</b>. Tiệm thường giữ tối đa 8 loại hàng bán và 8 loại nhu cầu thu mua cùng lúc; hàng tồn kho sinh ngẫu nhiên theo trọng số, được nhập bổ sung và chịu ảnh hưởng của mùa, vì vậy "hôm nay không bán" không có nghĩa là "tiệm này không bao giờ có".</p>`,`${ttbFig('myth_shop','Tiệm Thanh Trúc',170)}`)}
<p>Tiệm đóng cửa ban đêm, cũng đóng cửa khi Niên Thú còn sống hoặc đang nhập hàng; mỗi tiệm mỗi lần chỉ tiếp một người chơi. Trong <b>5 ngày</b> sau khi đánh lui Niên Thú, giá được tính giảm 20% (còn 80%); nếu quyết toán thành công vào mùa xuân hoặc mùa đông còn kích hoạt trạng thái mở cửa ban đêm tối đa 80 ngày, nhưng sự kiện tê giác hoặc đổi mùa có thể kết thúc sớm, không được coi "giảm 20% trong 5 ngày" và "mở cửa ban đêm" là cùng một bộ đếm thời gian.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: "Làm mới Thị Trấn Gấu Trúc" mặc định <b>bật</b>; trên nền tám loại tiệm và nhịp nhập hàng tự nhiên của bản gốc, nó thêm vé thị trấn, đổi hàng chủ động, lập khế ước, giá động và dời thị trấn; có thể tắt trong phần thiết lập để quay về cách kinh doanh gốc. Danh sách hàng đầy đủ và quy tắc khế ước xem tại <a onclick="go('#/mod/yem-doc-tien/optimizations')">Tối ưu thần thoại</a>.</blockquote>`,
[
['tb-shop-rebuild','Xây lại thị trấn &amp; hình thành tiệm',`
${ttbRow(`<p>Rừng gấu trúc sinh ra cùng thế giới <b>8 công trường tiệm nhỏ</b>; trong save cũ, "Tiệm đã đóng cửa" khi tải lên sẽ chuyển thành "Tiệm chưa hoàn thành". Mỗi công trường phải góp từng đợt các nguyên liệu dưới đây, đủ hết mới thành một tiệm trống chưa được chỉ định loại:</p>`,`${ttbFig('myth_store_construction','Công trường tiệm',150)}`)}
<table>
<tr><th>Nguyên liệu</th><th>Cần cho mỗi tiệm</th></tr>
<tr><td>Tre</td><td>6</td></tr>
<tr><td>Ván gỗ</td><td>2</td></tr>
<tr><td>Giấy cói</td><td>6</td></tr>
<tr><td>Dây thừng</td><td>4</td></tr>
</table>
${ttbRow(`<p>Tượng Anh Hùng Bí Ẩn là mỏ neo sinh ra của quy trình hình thành tiệm. Khi màn đêm buông xuống, chỉ cần trong phạm vi khoảng <b>32 ô</b> quanh bức tượng còn tiệm trống và hiện không có dân gấu trúc nào đang chờ vào ở, hệ thống sẽ chọn ngẫu nhiên một "loại tiệm chưa mở" và sinh ra dân làng tương ứng. Dân làng sẽ tìm tiệm trống gần đó vào ban ngày kế tiếp, vào rồi mới biến tiệm thành cửa hàng tương ứng; nếu mãi không có tiệm trống để vào ở, dân làng sẽ biến mất vào lần đêm kế tiếp, sau đó vẫn có thể sinh lại.</p>`,`${ttbFig('myth_statue_pandaman','Tượng Anh Hùng Bí Ẩn',110)}`)}
<p>Do đó nguyên liệu chỉ quyết định công trường có hoàn thành được hay không, <b>không thể chỉ định loại cửa hàng</b>; nhưng các loại không bị chiếm trùng, khi cả 8 công trường đều hoàn thành và vào ở thuận lợi, cuối cùng sẽ đủ tám loại tiệm mỗi loại một. Nếu công trường đã xong mà mãi không mở tiệm, hãy ưu tiên kiểm tra khoảng cách tới Tượng Anh Hùng Bí Ẩn và xem gần đó đã có dân gấu trúc đang chờ vào ở hay chưa.</p>`],

['tb-shop-coin','Đồng tiền, luân chuyển &amp; giảm giá',`
<table>
<tr><th>Quy tắc</th><th>Cơ chế hiện tại</th></tr>
<tr><td>${ttbIcon('myth_coin','Đồng Tiền Thần Thoại',32)}Tiền tệ</td><td>Đồng Tiền Thần Thoại tính 1 đồng, xâu tiền tính <b>40 đồng</b>; khi quyết toán sẽ kiểm tra túi đồ mang theo, ô trang bị và các vật chứa bên trong</td></tr>
<tr><td>Luân chuyển hàng</td><td>Ô hàng đã bán hết, không hợp lệ, hoặc tích lũy khoảng 4 ngày kể từ lần lên kệ đầu tiên/giao dịch gần nhất sẽ bị dọn; khi nhập hàng hằng ngày sẽ thêm hàng mới theo trọng số</td></tr>
<tr><td>Giảm giá</td><td>Nhiều loại giảm giá chỉ lấy loại mạnh nhất; đơn giá nhân với mức giảm rồi <b>làm tròn lên</b></td></tr>
<tr><td>Bán hàng ở trạng thái "Lộc"</td><td>Khi bán thành công có 40% xác suất làm khoản thu đó tăng thêm 20%, làm tròn lên</td></tr>
<tr><td>Niên Thú tự rời đi</td><td>Tiệm ngừng nhập hàng 5 ngày; mặt hàng có số lượng hiện tại lớn hơn 1 mỗi loại có 70% xác suất bị cắt còn khoảng một nửa</td></tr>
<tr><td>Hàng giới hạn mùa đông</td><td>Tiệm hiếm cố định chiếm một ô hàng, lên kệ ngẫu nhiên một trong pháo thăng thiên và pháo tre, đơn giá 2</td></tr>
</table>
<h4>Giá hàng hóa &amp; dịch vụ</h4>
<p>Bảng dưới là giá cơ bản trong quy tắc hiện tại, số tiền thực trả vẫn phải qua giảm giá rồi làm tròn lên; "thu mua" chỉ có hiệu lực khi danh sách thu mua của ngày đó xuất hiện và vẫn còn số lượng cần.</p>
<table>
<tr><th>Hàng hóa/Dịch vụ</th><th>Người chơi mua vào</th><th>Người chơi bán ra hoặc sửa chữa</th></tr>
<tr><td>Đá quý đỏ / lam</td><td>10</td><td>5</td></tr>
<tr><td>Đá quý cam / vàng / lục / tím</td><td>40</td><td>20</td></tr>
<tr><td>Đá quý cầu vồng</td><td>320</td><td>160</td></tr>
<tr><td>Da gấu / Vảy rồng / Nhãn cầu Hươu Khổng Lồ</td><td>120</td><td>40 / 40 / 80</td></tr>
<tr><td>Tim tê giác đỏ, vàng, lam</td><td>Không bán</td><td>Mỗi quả 600</td></tr>
<tr><td>Sừng tê giác</td><td>Không bán</td><td>300</td></tr>
<tr><td>Tử Khuê Thạch</td><td>9</td><td>4</td></tr>
<tr><td>${ttbIcon('myth_iron_broadsword','Đại đao sắt đúc',32)}${ttbIcon('myth_iron_helmet','Mũ sắt đúc',32)}${ttbIcon('myth_iron_battlegear','Chiến giáp sắt đúc',32)}Đại đao sắt đúc / Mũ sắt đúc / Chiến giáp sắt đúc</td><td>80 mỗi món</td><td>Sửa đầy mỗi món 5</td></tr>
<tr><td>Kim Khối May Mắn</td><td>10</td><td>Không thu mua</td></tr>
<tr><td>Bản vẽ Nhà Ngói Thương Trúc</td><td>100</td><td>Không thu mua</td></tr>
<tr><td>Bản vẽ Tường Ngói Đen Vách Trắng</td><td>50</td><td>Không thu mua</td></tr>
<tr><td>Bản vẽ Hàng rào tre / Cửa tre</td><td>40</td><td>Không thu mua</td></tr>
<tr><td>Bản vẽ Ghế Gỗ / Bàn Gỗ Đỏ / Sỏi cuội</td><td>20</td><td>Không thu mua</td></tr>
</table>
<h4>Trang bị sắt đúc</h4>
<p>Cả ba món trang bị sắt đúc đều do Tiệm Chú Tượng bán; giá mua và sửa xem bảng trên.</p>
<table>
<tr><th>Trang bị</th><th>Công dụng &amp; thuộc tính</th></tr>
<tr><td>${ttbIcon('myth_iron_broadsword','Đại đao sắt đúc')}Đại đao sắt đúc</td><td>Vũ khí cận chiến cầm tay, <b>51 sát thương, 400 lần sử dụng</b>; hết độ bền thì biến mất</td></tr>
<tr><td>${ttbIcon('myth_iron_helmet','Mũ sắt đúc')}Mũ sắt đúc</td><td>Giáp đầu, <b>840 độ bền, giảm 80% sát thương, chống mưa 20%</b></td></tr>
<tr><td>${ttbIcon('myth_iron_battlegear','Chiến giáp sắt đúc')}Chiến giáp sắt đúc</td><td>Giáp thân, <b>1260 độ bền, giảm 80% sát thương, chống mưa 20%</b></td></tr>
</table>
<p>Hai món giáp khi bị tấn công từ các nguồn chỉ định như Dê Điện, Tam Tiêm Lưỡng Nhận Đao… sẽ mất thêm độ bền giáp.</p>`],

['tb-shop-service','Các dịch vụ',`
<table>
<tr><th>Dịch vụ</th><th>Chi phí &amp; kết quả</th></tr>
<tr><td>Gói hạt giống theo mùa</td><td>Mỗi gói 1 đồng, mở ra 3 hạt giống hợp mùa hiện tại</td></tr>
<tr><td>Sửa trang bị</td><td>Thu phí 1 / 5 / 10 / 25 đồng tùy loại vật phẩm, bổ sung đầy ngay độ bền, giáp, nhiên liệu hoặc độ tươi</td></tr>
<tr><td>Bói tìm kho báu</td><td>Cơ bản 40 đồng, tạo một manh mối gần một địa danh ngẫu nhiên</td></tr>
<tr><td>Bói vận mệnh</td><td>1 đồng</td></tr>
</table>
<h4>Sửa trang bị</h4>
<p>Tiệm Chú Tượng chỉ sửa được các vật phẩm trong danh sách và hiện chưa đầy; phí vẫn chịu giảm giá của cửa hàng như giảm giá Niên Thú. Dịch vụ sẽ bổ sung đầy độ bền vật phẩm, không sửa được trang bị ngoài danh sách trắng.</p>
<table>
<tr><th>Phí cơ bản</th><th>Vật phẩm sửa được</th></tr>
<tr><td>1</td><td>Bình nước, Bình nước mỏ chim</td></tr>
<tr><td>5</td><td>Đại đao sắt đúc, Mũ sắt đúc, Chiến giáp sắt đúc; Giáo chiến, Giáo, Roi đuôi mèo, Boomerang, Bẫy nanh chó, Kiếm Màn Đêm; Mũ chiến, Mũ Cookie Cutter, Mũ bóng bầu dục; Giáp cỏ, Giáp gỗ, Giáp đá cẩm thạch, Giáp bóng tối; Máy xới đất, La bàn, Đá sưởi, Rìu/Cuốc chim/Xẻng/Cuốc thường và bằng vàng, Búa, Chĩa, Dụng cụ lấy yên, ba loại yên, Bàn chải, Nhạc cụ độc tấu, hai loại kính sa mạc, hai loại mái chèo</td></tr>
<tr><td>10</td><td>Búa Sao Mai, Chong chóng thời tiết, Đinh ba, Gậy lửa, Gậy băng, Dao thủy tinh, Giáp vảy rồng, Rìu thủy tinh ánh trăng</td></tr>
<tr><td>25</td><td>Gậy Thulecite, Vương miện Thulecite, Giáp Thulecite, Rìu Thulecite</td></tr>
</table>
<h4>Bói vận mệnh</h4>
<p>Cho ngẫu nhiên một câu thẻ, có cơ hội gợi ý thời điểm Chó Săn, Bearger hoặc Hươu Khổng Lồ tấn công, số ngày còn lại trước khi đổi mùa, pha trăng, xu hướng mưa, cùng mức điểm nghịch ngợm hoặc "độ Tết" của bản thân. Chỉ cung cấp thông tin, không thể chỉ định nội dung tra cứu, cũng không thay đổi vận may.</p>
<h4>Bói tìm kho báu</h4>
${ttbRow(`<p>Tiệm bói sẽ chọn ngẫu nhiên một loại địa danh hợp lệ, tìm chỗ đất trống ở ngoài mục tiêu khoảng <b>5—25 ô</b> và đưa người mua một "Tờ manh mối". Manh mối gồm ba phần: ám ngữ địa điểm, thời gian và thời tiết; máy chủ sẽ không hiển thị trực tiếp kho báu. Nếu địa danh được chọn không tồn tại trong thế giới hiện tại, hoặc gần đó liên tục không tìm được đất trống dùng được, lần bói này không tạo manh mối và cũng không trừ đồng tiền.</p>`,`${ttbFig('treasure_paper_myth','Tờ manh mối',90)}`)}
<table>
<tr><th>Ám ngữ địa điểm</th><th>Địa danh tương ứng</th></tr>
<tr><td>Nguyên thủy ban đầu</td><td>Cổng Rực Rỡ</td></tr>
<tr><td>Nơi vua man di ngự</td><td>Vua Heo</td></tr>
<tr><td>Lửa dữ nung chảy</td><td>Hồ dung nham</td></tr>
<tr><td>Gió cát phủ kín</td><td>Hồ ốc đảo</td></tr>
<tr><td>Đón nhận nguyệt hoa</td><td>Nguyệt Đài</td></tr>
<tr><td>Tinh linh nghịch ngợm</td><td>Tổ đá</td></tr>
<tr><td>Đàn ong canh giữ</td><td>Tổ sữa ong chúa</td></tr>
<tr><td>Bóng trăng lảng vảng</td><td>Khe nứt thiên thể đảo Trăng</td></tr>
<tr><td>Nơi Thái Âm cung ngự</td><td>Quảng Hàn Cung</td></tr>
<tr><td>Ẩn sĩ lui ở</td><td>Nhà Ẩn Sĩ Cua Ký Cư</td></tr>
<tr><td>Hoa đào rực rỡ</td><td>Phương Thốn Sơn</td></tr>
<tr><td>Bóng trúc lay động</td><td>Trúc Châu thần thoại</td></tr>
<tr><td>Săn nanh bắt thú</td><td>Trại Hải Mã</td></tr>
</table>
${ttbRow(`<p>Thời gian có thể là ban ngày, hoàng hôn, ban đêm, trăng tròn hoặc trăng non; thời tiết chỉ chia trời quang và mưa/tuyết. Kho báu ẩn chỉ hiện hình thành "đống đất rất bình thường" khi đồng thời thỏa thời gian và thời tiết trong manh mối, sau đó cần dùng xẻng đào <b>3—10 lần</b>. Manh mối trăng tròn hoặc trăng non sẽ tăng xác suất phần thưởng cao cấp:</p>`,`${ttbFig('treasure_show_myth','Đống đất kho báu',130)}`)}
<table>
<tr><th>Bậc thưởng</th><th>Thời gian thường</th><th>Trăng tròn/Trăng non</th><th>Phần thưởng</th></tr>
<tr><td>Cơ bản</td><td>50%</td><td>40%</td><td>Chọn một trong Xâu tiền hoặc ${ttbIcon('wine_bottle_gourd_wine','Hồ lô rượu đào',28)}Hồ lô rượu đào; ngoài ra chọn một trong Kim Khối May Mắn ×1—3 hoặc Vàng thỏi ×5—10</td></tr>
<tr><td>Bậc hai</td><td>30%</td><td>30%</td><td>Chọn một trong Xâu tiền ×2 hoặc Kim Khối May Mắn ×10; ngoài ra chọn một trong Vàng thỏi ×10—20 hoặc mỗi loại đá quý sáu màu 0—1 viên</td></tr>
<tr><td>Bậc ba</td><td>15%</td><td>20%</td><td>Ba lô Krampus; chọn một trong Đá quý cầu vồng hoặc mỗi loại đá quý sáu màu 1—3 viên; kèm thêm một Nông sản khổng lồ ngẫu nhiên ×1</td></tr>
<tr><td>Bậc bốn</td><td>5%</td><td>10%</td><td>Gốc cây bị đẩy đổ ×1</td></tr>
</table>
<p>Khi manh mối mới được tạo hoặc kho báu đã đào hết, các tờ manh mối hiện có sẽ mất hiệu lực và đổi thành giấy cói; tờ manh mối không phải bản sao bản đồ kho báu có thể tích trữ lâu dài.</p>`]
]]
];