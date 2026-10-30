/* Thần Thoại Nhân Vật – trang "Ngọc Thố"
   Định dạng mỗi mục: [id, tiêu đề, nội dung HTML, [ [id con, tiêu đề con, nội dung con], ... ]] */
/* ===== Ảnh minh họa cho trang Ngọc Thố =====
   Chỉ cần sửa YT_IMG cho đúng thư mục chứa các file .webp (giải nén từ yutu.zip). */
const YT_IMG='images/nhan_vat/yutu/';
const YT_SONG={'Điền Trung Nhạc':'song_m_workup','Xuân Quang Khúc':'song_m_insomnia','Dục Hỏa Tấu':'song_m_fireimmune','Hàn Phong Điệu':'song_m_iceimmune','Mộng Phi Sương':'song_m_iceshield','Oán Triền Thân':'song_m_nocure','Xuân Phong Hóa Vũ':'song_m_weakattack','Bá Vương Tá Giáp':'song_m_weakdefense','Lưu Thủy Vô Tình':'song_m_nolove','Dạ Lan Dao':'song_m_sweetdream'};
const YT_POWDER={'Bài Uất':'powder_m_takeiteasy','Dạ Minh':'powder_m_becomestar','Kinh Quyết':'powder_m_charged','Hoạt Huyết':'powder_m_improvehealth','Tê Nhung':'powder_m_lifeelixir','Hàn Mâu':'powder_m_coldeye','Thảo Sâm':'powder_m_hypnoticherb'};
const ytImg=(f,alt,w,h)=>`<img src="${YT_IMG}${f}.webp" alt="${alt}" width="${w}" height="${h||w}" loading="lazy" decoding="async" style="display:block;margin:0 auto;max-width:100%;height:auto;object-fit:contain">`;
/* ảnh lớn đầu mỗi đoạn */
const ytFig=(f,cap,w,h)=>`<figure style="margin:1.1em auto 1.4em;padding:18px 18px 12px;max-width:${w+36}px;text-align:center;border:1px solid rgba(127,127,127,.28);border-radius:16px;background:radial-gradient(circle at 50% 38%,rgba(127,127,127,.18),rgba(127,127,127,.04))">${ytImg(f,cap,w,h)}<figcaption style="margin-top:8px;font-size:.92em;opacity:.8">${cap}</figcaption></figure>`;
/* ô bảng: ảnh + tên (f là 1 file hoặc mảng file) */
const ytCell=(f,text,s)=>{s=s||56;const st='flex:none;width:'+s+'px;height:'+s+'px;object-fit:contain';return Array.isArray(f)?`<span style="display:block"><span style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:4px">${f.map(x=>`<img src="${YT_IMG}${x}.webp" alt="" width="36" height="36" loading="lazy" style="width:36px;height:36px;object-fit:contain">`).join('')}</span>${text}</span>`:`<span style="display:inline-flex;align-items:center;gap:12px"><img src="${YT_IMG}${f}.webp" alt="${text}" width="${s}" height="${s}" loading="lazy" style="${st}"><span style="white-space:nowrap">${text}</span></span>`};
const ytS=(n,s)=>ytCell(YT_SONG[n],n,s);
const ytP=(n,s)=>ytCell(YT_POWDER[n],n,s);
const ytSongs=ns=>`<span style="display:flex;flex-direction:column;gap:6px">${ns.map(n=>ytS(n,44)).join('')}</span>`;
/* lưới ảnh các món */
const ytGallery=(map,s)=>`<div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;margin:1.1em 0 1.4em">${Object.keys(map).map(n=>`<figure style="margin:0;width:${s+24}px;padding:10px 8px 8px;text-align:center;border:1px solid rgba(127,127,127,.28);border-radius:14px;background:radial-gradient(circle at 50% 38%,rgba(127,127,127,.18),rgba(127,127,127,.04))"><img src="${YT_IMG}${map[n]}.webp" alt="${n}" width="${s}" height="${s}" loading="lazy" style="display:block;margin:0 auto;max-width:100%;height:auto"><figcaption style="margin-top:4px;font-size:.88em;opacity:.85">${n}</figcaption></figure>`).join('')}</div>`;
const NVYT=[
['nv-yt','Ngọc Thố',`
${ytFig('portrait','Ngọc Thố',260,376)}
<blockquote><b>Nhãn tra cứu</b>: [Kho dữ liệu: Thần Thoại Nhân Vật] [Loại dữ liệu: Nhân vật chọn được] [Nguồn nội dung: bản gốc Thần Thoại Nhân Vật] [Trạng thái Yêm Đốc Tiên: có bản làm lại độc lập] [Liên quan chính: Ngọc Thố Tiên Tử, ô Nguyệt Thố, Thiềm Cung Kỹ Nghệ, Chày Giã Thuốc, bảy loại bột thuốc, Oánh Nguyệt Tỳ Bà, mười bản nhạc, Giỏ Thuốc Tre, Nguyệt Nga Dẫn Đường, hang thỏ, Độn Thổ, Sương Ngọc Vân]</blockquote>
<p><b>Tổng quan cơ chế</b>: giã thuốc, bột thuốc, các bản nhạc Oánh Nguyệt Tỳ Bà, Độn Thổ, hang thỏ và Sương Ngọc Vân.</p>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: "Ngọc Thố Tiên Tử" của Yêm Đốc Tiên là nhân vật làm lại độc lập, tồn tại song song với Ngọc Thố gốc của Thần Thoại Thư Thuyết ở chương này, không ghi đè hay thay thế nhân vật gốc; kỹ năng, công thức và số liệu của hai bên cần tra riêng. Xem chi tiết tại <a onclick="go('#/mod/yem-doc-tien/characters')">Nhân vật tinh quái</a>.</blockquote>`,
[
['nv-yt-stats','Thuộc tính cơ bản',`
<table>
<tr><th>Hạng mục</th><th>Quy tắc</th></tr>
<tr><td>Máu / Đói / Lý trí</td><td>150 / 150 / 120</td></tr>
<tr><td>Hệ số sát thương</td><td>1.0</td></tr>
<tr><td>Tốc độ đói</td><td>Chuẩn 1.0 lần</td></tr>
<tr><td>Ăn uống</td><td>Chỉ ăn chay</td></tr>
<tr><td>Món yêu thích</td><td>Cà rốt sống; độ đói nhận được ×1.2</td></tr>
<tr><td>Ban đêm &amp; vầng sáng tiêu cực</td><td>Hệ số mất lý trí 0.75</td></tr>
<tr><td>Khai sáng</td><td>Không vào chế độ lý trí khai sáng</td></tr>
<tr><td>Giữ ấm</td><td>Tự mang 60 điểm giữ ấm mùa đông</td></tr>
<tr><td>Thích nghi đảo Trăng</td><td>Tốc độ di chuyển ×1.3 trên nền thiên thạch đảo Trăng</td></tr>
<tr><td>Chế tạo</td><td>Hành động chế tạo và thi công nhanh hơn</td></tr>
<tr><td>Vật phẩm khởi đầu</td><td>Chày Giã Thuốc, Oánh Nguyệt Tỳ Bà</td></tr>
</table>
<h4>Hiệu quả thêm của cà rốt</h4>
<ul>
<li>Cà rốt sống, cà rốt nướng và hạt giống cà rốt khi Ngọc Thố ăn được hồi thêm 5 điểm lý trí.</li>
<li>Cà rốt nướng và hạt giống cà rốt không hưởng cộng thêm độ đói của món yêu thích; lý trí thêm của hạt giống cà rốt cũng không đổi giá trị no vốn rất thấp của nó.</li>
</ul>
<h4>Khéo tay may vá</h4>
<table>
<tr><th>Công cụ</th><th>Khi Ngọc Thố dùng</th><th>Khi nhân vật khác dùng</th></tr>
<tr><td>Bộ kim chỉ</td><td>Mỗi lần sửa gấp 2 lần bình thường; một bộ dùng được 10 lần</td><td>Vẫn tương đương 5 lần sửa thông thường</td></tr>
<tr><td>Băng keo vá</td><td>Lượng sửa mỗi lần gấp 2 lần bình thường</td><td>—</td></tr>
</table>
<p>Độ bền hiển thị của bộ kim chỉ là 10 lần: người không phải Ngọc Thố mỗi lần tốn 2 lần, Ngọc Thố mỗi lần tốn 1 lần và lượng sửa gấp 2 lần bình thường.</p>`],

['nv-yt-rabbit','Thân thiết với tộc thỏ',`
<ul>
<li>Ngọc Thố nhặt trực tiếp được thỏ sống, không cần dùng bẫy khống chế trước.</li>
<li>Ngọc Thố không thể giết thỏ sống; thỏ sống do Ngọc Thố mang cũng không thể nấu trực tiếp.</li>
<li>Khi trong ba lô mang ít nhất 1 con thỏ sống, Ngọc Thố được hồi lý trí mức trung bình, khoảng 3.33 điểm mỗi phút; mang nhiều hơn không cộng dồn.</li>
<li>Khi có thỏ chết trong 20 ô, Ngọc Thố mất 5 điểm lý trí.</li>
<li>Người thỏ không chọn Ngọc Thố làm mục tiêu thù hận thông thường.</li>
</ul>`],

['nv-yt-burrow','Độn Thổ',`
<p>Chuột phải lên chính mình chọn <b>Độn Thổ</b> để chui xuống đất, dùng lại cùng hành động lên chính mình để trồi lên. Không thể xuống đất khi cưỡi thú; kỹ năng không có thời lượng cố định và không có hồi chiêu.</p>
<table>
<tr><th>Lợi ích dưới đất</th><th>Cái giá hoặc giới hạn dưới đất</th></tr>
<tr><td>Khi xuống đất, kẻ địch đang tấn công Ngọc Thố trong 12 ô mất mục tiêu</td><td>Tốc độ tiêu hao độ đói tăng lên 1.4 lần</td></tr>
<tr><td>Kẻ địch thường không chọn trúng Ngọc Thố được</td><td>Liên tục mất lý trí, 10 điểm mỗi phút</td></tr>
<tr><td>Có nhìn đêm và miễn nhiễm Charlie</td><td>Trời mưa mỗi giây tăng 0.5 độ ẩm</td></tr>
<tr><td>Hệ số sát thương lửa giảm về 0</td><td>Ba lô và các vật chứa đang mở đều đóng, không sắp xếp đồ được</td></tr>
<tr><td>Vẫn di chuyển được</td><td>Không bắt thú và hầu hết tương tác thông thường đều không dùng được</td></tr>
</table>
<p>Độn Thổ kết thúc khi độ đói về 0, chết hoặc vào trạng thái hành động không tương thích. Nó gỡ được việc bị khóa mục tiêu, nhưng <b>không phải bất tử toàn cục</b>: sát thương diện rộng, trạng thái môi trường và cơ chế đặc biệt vẫn có thể ảnh hưởng Ngọc Thố. Miễn nhiễm sát thương lửa cũng không có nghĩa là miễn nhiễm quá nóng, ẩm ướt hay các sát thương nguyên tố khác.</p>`],

['nv-yt-craft','Thiềm Cung Kỹ Nghệ',`
<p>Trang chế tạo chuyên biệt có tên <b>Thiềm Cung Kỹ Nghệ</b>.</p>
<table>
<tr><th>Nội dung</th><th>Cách lấy hoặc mở</th></tr>
<tr><td>${ytCell(Object.values(YT_POWDER),'Bảy loại bột thuốc')}</td><td>Đưa vật dạy học tương ứng cho Hằng Nga, mở khóa công thức rồi chế tạo</td></tr>
<tr><td>${ytCell(Object.values(YT_SONG),'Mười bản nhạc')}</td><td>Đưa vật dạy học tương ứng cho Hằng Nga, mở khóa rồi chọn bài trong Thiềm Cung Kỹ Nghệ</td></tr>
<tr><td>${ytCell('yt_rabbithole','Hang thỏ')}</td><td>2 thỏ sống + 1 xẻng, Máy Khoa Học</td></tr>
<tr><td>${ytCell('yt_moonbutterfly','Nguyệt Nga Dẫn Đường')}</td><td>1 cánh hoa, không cần công nghệ</td></tr>
<tr><td>${ytCell('myth_bamboo_basket','Giỏ Thuốc Tre')}</td><td>Tre ×3 + Dây thừng ×2, Máy Khoa Học</td></tr>
<tr><td>${ytCell('guitar_jadehare','Oánh Nguyệt Tỳ Bà')}</td><td>Mảnh Mặt Trăng ×4 + Cọc gỗ trôi ×1 + Tơ nhện ×1, không cần công nghệ</td></tr>
</table>
<p>Bột thuốc và bản nhạc đã học được lưu theo tiến trình nhân vật hiện tại. Hằng Nga sẽ không nhận lại vật dạy học của công thức đã học.</p>`],

['nv-yt-pestle','Chày Giã Thuốc &amp; nút "Giã thuốc" trên thanh kỹ năng',`
${ytFig('medicine_pestle_myth','Chày Giã Thuốc',240)}
<p>Chày Giã Thuốc chỉ Ngọc Thố trang bị được, làm vũ khí gây 51 sát thương cơ bản, tầm đánh hơi ngắn, không có độ bền. Hiện được khởi động bằng <b>nút giã thuốc</b> trên thanh kỹ năng nhân vật.</p>
<h4>Quy trình giã thuốc</h4>
<ol>
<li>Để Chày Giã Thuốc trong túi đồ; bấm nút kỹ năng, Ngọc Thố sẽ thử tự trang bị nó.</li>
<li>Không giã thuốc được khi cưỡi thú. Vào hành động thành công thì tiêu hao ngay 5 độ đói.</li>
<li>Cối thuốc tạm mở ra, gồm 2 ô, không nhận vật phẩm xếp chồng.</li>
<li>Mỗi ô tính giờ độc lập 3 giây; khi kết toán tiêu hao 1 nguyên liệu của ô đó, và tiêu hao thêm 2 độ đói.</li>
<li>Hai ô không phải ô tổng hợp công thức. Bỏ hai loại nguyên liệu vào thì mỗi loại kết toán một lần hiệu quả và một lần chi phí độ đói.</li>
<li>Lấy nguyên liệu chưa hoàn thành ra sẽ hủy giờ của ô đó; khi di chuyển, đổi hành động hoặc kết thúc giã thuốc, nguyên liệu chưa xử lý sẽ rơi xuống đất.</li>
</ol>
<h4>Nguyên liệu giã thuốc dùng được</h4>
<ul>
<li>Bỏ được bảy loại bột thuốc, Tuyến nhện, các vật được đánh dấu riêng là dược liệu và phần lớn thức ăn không phải thịt.</li>
<li>Thịt, cá, món ăn thành phẩm, sinh vật sống và vật trang bị được không dùng làm nguyên liệu giã thuốc thông thường.</li>
<li>Đào, Bàn Đào lớn, đào nướng, hoa sen, băng, sữa ong chúa và hoa Glommer tuy có thuộc tính thức ăn nhưng bị loại trừ rõ ràng.</li>
<li>Việc chế tạo chính thức bảy loại bột thuốc được làm trong Thiềm Cung Kỹ Nghệ, không phải nhét nguyên liệu công thức vào hai ô cối thuốc.</li>
</ul>
<h4>Hiệu quả nguyên liệu cơ bản</h4>
<table>
<tr><th>Nguyên liệu</th><th>Hiệu quả mỗi lần kết toán</th></tr>
<tr><td>Cánh Moon Moth</td><td>+15 máu, +20 lý trí</td></tr>
<tr><td>Thịt xương rồng</td><td>+15 lý trí</td></tr>
<tr><td>Hoa xương rồng</td><td>+20 máu, +15 lý trí, và có hồi lý trí liên tục</td></tr>
<tr><td>Tuyến nhện</td><td>+20 máu; Bạch Cốt Phu Nhân không nhận hồi máu này</td></tr>
<tr><td>Lá dương xỉ / Cánh bướm</td><td>+8 máu; Bạch Cốt Phu Nhân không nhận hồi máu này</td></tr>
<tr><td>Cây mọng nước</td><td>+20 máu; Bạch Cốt Phu Nhân không nhận hồi máu này</td></tr>
<tr><td>Quả huỳnh quang / Cánh hoa / Hoa cây đảo Trăng</td><td>+5 lý trí</td></tr>
<tr><td>Thịt lá</td><td>-15 độ ẩm</td></tr>
<tr><td>Trái cây thường</td><td>Giá trị nguyên liệu cao thì +15 lý trí, nếu không thì +5 lý trí</td></tr>
<tr><td>Rau thường</td><td>Giá trị nguyên liệu cao thì +20 máu, nếu không thì +8 máu</td></tr>
</table>
<blockquote><b>[Gợi ý liên động Yêm Đốc Tiên]</b>: Hiệu quả nguyên liệu cơ bản của Ngọc Thố gốc ở mục này được kết toán cho chính mình trước, rồi tác dụng lên những người chơi còn sống khác trong phạm vi 15 xung quanh; việc giã thuốc cơ bản của Ngọc Thố làm lại của Yêm Đốc Tiên chỉ kết toán cho chính Ngọc Thố. Bột thuốc và thành dược của hai bên còn có đối tượng tác dụng riêng, không xét theo quy tắc cơ bản này.</blockquote>
<p>Chày Giã Thuốc không có công thức. Nếu nó mất vĩnh viễn, hệ thống chế tạo bình thường hiện tại không thể lấy lại; còn Oánh Nguyệt Tỳ Bà thì làm lại được theo công thức.</p>`],

['nv-yt-powder','Bảy loại bột thuốc',`
${ytGallery(YT_POWDER,112)}
<p>Chỉ Ngọc Thố học được các công thức này từ Hằng Nga. Vật dùng để dạy sẽ được trả lại; chỉ khi thật sự chế tạo bột thuốc mới tiêu hao nguyên liệu công thức. Mỗi nhóm thành phẩm xếp chồng tối đa 20, không bị hỏng, và có thể đưa cho người chơi khác dùng trực tiếp.</p>
<table>
<tr><th>Bột thuốc</th><th>Vật dạy học đưa Hằng Nga xem</th><th>Nguyên liệu chế tạo</th><th>Sản lượng</th></tr>
<tr><td>${ytP('Bài Uất')}</td><td>Trà xoa dịu</td><td>Forget-Me-Lots ×6 + Thịt xương rồng ×3</td><td>6</td></tr>
<tr><td>${ytP('Dạ Minh')}</td><td>Quả phát sáng; khi bật tương thích Prism cũng nhận Fruit Napoleon thật</td><td>Quả phát sáng ×3 + Quả huỳnh quang ×6 + Vàng thỏi ×1</td><td>6</td></tr>
<tr><td>${ytP('Kinh Quyết')}</td><td>Sừng Dê Điện</td><td>Sừng Dê Điện ×2 + Lông chim hoàng yến ×1</td><td>3</td></tr>
<tr><td>${ytP('Hoạt Huyết')}</td><td>Sữa ong chúa</td><td>Sữa ong chúa ×2 + Tuyến nhện ×6 + Lá tảo bẹ ×1</td><td>3</td></tr>
<tr><td>${ytP('Tê Nhung')}</td><td>Sừng Guardian</td><td>Sừng Guardian ×1</td><td>3</td></tr>
<tr><td>${ytP('Hàn Mâu')}</td><td>Nhãn cầu Deerclops; nhung Moose/Goose cũng được</td><td>Nhãn cầu Deerclops ×1 + Gạc hươu thường bất kỳ ×1 + Lông bò ×1</td><td>3</td></tr>
<tr><td>${ytP('Thảo Sâm')}</td><td>Mandrake hoặc Mandrake nướng</td><td>Mandrake ×1 + Cánh hoa ×3</td><td>3</td></tr>
</table>
<h4>Quy tắc dùng bột thuốc</h4>
<table>
<tr><th>Bột thuốc</th><th>Dùng riêng từ ba lô</th><th>Bỏ vào cối thuốc để hoàn tất giã thuốc</th></tr>
<tr><td>${ytP('Thảo Sâm')}</td><td>Bản thân hồi 300 máu, và thôi miên các mục tiêu ngủ được trong 25 ô khoảng 10～11 giây</td><td>Bản thân, người chơi và tùy tùng phe ta trong phạm vi mỗi bên hồi 300 máu, đồng thời phát cùng một xung thôi miên</td></tr>
<tr><td>${ytP('Tê Nhung')}</td><td>Hồi sinh hồn ma nhìn thấy đầu tiên trong 25 ô và làm đầy ba chỉ số; không có hồn ma thì làm đầy ba chỉ số của người dùng</td><td>Hồi sinh toàn bộ hồn ma nhìn thấy trong 25 ô và làm đầy ba chỉ số; không có hồn ma thì làm đầy ba chỉ số của Ngọc Thố</td></tr>
<tr><td>${ytP('Kinh Quyết')}</td><td>Đòn đánh của bản thân kèm điện giật, kéo dài 150 giây</td><td>Người chơi và tùy tùng phe ta trong 25 ô nhận cùng hiệu quả, kéo dài 150 giây</td></tr>
<tr><td>${ytP('Hoạt Huyết')}</td><td>Lập tức +60 máu, sau đó trong 120 giây mỗi 2 giây +2 máu, hồi thêm tối đa 120</td><td>Người chơi và tùy tùng phe ta trong 25 ô nhận cùng hiệu quả</td></tr>
<tr><td>${ytP('Dạ Minh')}</td><td>Bản thân có hiệu ứng phát sáng cao cấp 960 giây</td><td>Người chơi và tùy tùng phe ta trong 25 ô nhận cùng hiệu quả</td></tr>
<tr><td>${ytP('Bài Uất')}</td><td>Lập tức +30 lý trí, sau đó trong 30 giây mỗi 2 giây +2 lý trí, hồi thêm tối đa 30</td><td>Mọi người chơi nhìn thấy trong 25 ô nhận cùng hiệu quả, không tác dụng lên tùy tùng</td></tr>
<tr><td>${ytP('Hàn Mâu')}</td><td>Đòn đánh của bản thân kèm đóng băng, kéo dài 150 giây</td><td>Người chơi và tùy tùng phe ta trong 25 ô nhận cùng hiệu quả, kéo dài 150 giây</td></tr>
</table>
<p>Quy tắc bổ sung: hồn ma có thể quấy nhiễu bột Tê Nhung để tự hồi sinh và làm đầy ba chỉ số; khi bật PVP, xung thôi miên của bột Thảo Sâm cũng có thể ảnh hưởng người chơi khác. Bột thuốc thành phẩm đã dùng là tiêu hao 1 phần.</p>`],

['nv-yt-pipa','Oánh Nguyệt Tỳ Bà',`
${ytFig('guitar_jadehare','Oánh Nguyệt Tỳ Bà',260)}
<p>Oánh Nguyệt Tỳ Bà chỉ Ngọc Thố nhặt và dùng được, không bỏ vào gói buộc được, không có độ bền. Ngọc Thố sinh ra đã có 1 cây; mất thì làm lại được bằng <b>Mảnh Mặt Trăng ×4, Cọc gỗ trôi ×1, Tơ nhện ×1</b> không cần công nghệ.</p>
<h4>Học bản nhạc</h4>
<p>Đưa vật dạy học trong bảng dưới cho Hằng Nga để mở khóa vĩnh viễn bản nhạc tương ứng. Khác với bột thuốc, vật dạy học bản nhạc sẽ bị Hằng Nga thu đi; không có bài nào tự học sẵn.</p>
<table>
<tr><th>Bản nhạc</th><th>Vật dạy học</th><th>Loại</th><th>Tài nguyên khi tiếp tục diễn tấu</th></tr>
<tr><td>${ytS('Điền Trung Nhạc')}</td><td>Vương miện Ong chúa</td><td>Tăng cường phe ta</td><td>Độ đói</td></tr>
<tr><td>${ytS('Xuân Quang Khúc')}</td><td>Nhạc cụ độc tấu</td><td>Tăng cường phe ta</td><td>Độ đói</td></tr>
<tr><td>${ytS('Dục Hỏa Tấu')}</td><td>Vảy rồng</td><td>Tăng cường phe ta</td><td>Lý trí</td></tr>
<tr><td>${ytS('Hàn Phong Điệu')}</td><td>Đá sưởi đang ở trạng thái nóng bỏng</td><td>Tăng cường phe ta</td><td>Lý trí</td></tr>
<tr><td>${ytS('Mộng Phi Sương')}</td><td>Cá tráp băng</td><td>Tăng cường phe ta</td><td>Lý trí</td></tr>
<tr><td>${ytS('Oán Triền Thân')}</td><td>Trứng nhện</td><td>Suy yếu kẻ địch</td><td>Độ đói</td></tr>
<tr><td>${ytS('Xuân Phong Hóa Vũ')}</td><td>Quạt lông</td><td>Suy yếu kẻ địch</td><td>Lý trí</td></tr>
<tr><td>${ytS('Bá Vương Tá Giáp')}</td><td>Da gấu dày</td><td>Suy yếu kẻ địch</td><td>Lý trí</td></tr>
<tr><td>${ytS('Lưu Thủy Vô Tình')}</td><td>Mũ sừng bò</td><td>Đàn bò &amp; nông vụ</td><td>Độ đói</td></tr>
<tr><td>${ytS('Dạ Lan Dao')}</td><td>Sáo Pan</td><td>Khống chế kẻ địch</td><td>Lý trí</td></tr>
</table>
<h4>Quy tắc diễn tấu</h4>
<ol>
<li>Xác nhận Oánh Nguyệt Tỳ Bà ở trong túi Ngọc Thố và xuống thú cưỡi trước.</li>
<li>Bấm bản nhạc đã học trong Thiềm Cung Kỹ Nghệ để chọn bài; bước này ghi bài vào cây tỳ bà hiện tại và bắt đầu diễn tấu ngay.</li>
<li>Sau đó có thể chuột phải cây tỳ bà, hoặc bấm nút tỳ bà trên thanh kỹ năng nhân vật, để gảy lại bài trước mà cây tỳ bà này đã ghi.</li>
<li>Sau khi bắt đầu diễn tấu 2 giây thì kết toán vòng hiệu quả đầu tiên, sau đó cứ 4 giây kết toán một lần, đến khi thiếu tài nguyên hoặc hành động bị gián đoạn.</li>
<li>Mỗi vòng bài tăng cường phe ta tạo 1 nốt nhạc quanh Ngọc Thố, biến mất sau khoảng 9～12 giây; người chơi phải chủ động chạm vào nốt nhạc mới nhận được tăng cường.</li>
</ol>
<p>"Bài trước" mà tỳ bà ghi không được lưu theo save vật phẩm; sau khi máy chủ tải lại hoặc vật phẩm sinh lại phải chọn bài lần nữa. Một Ngọc Thố khác dù cầm cây tỳ bà đã chọn bài, cũng phải tự mình đã học bài đó mới gảy lại được.</p>
<h4>Tiêu hao tài nguyên</h4>
<table>
<tr><th>Nhóm bản nhạc</th><th>Bắt đầu diễn tấu</th><th>Tiêu hao liên tục mỗi 4 giây</th><th>Chi phí thêm khi chọn lại bài từ Thiềm Cung Kỹ Nghệ</th></tr>
<tr><td>${ytSongs(['Điền Trung Nhạc', 'Xuân Quang Khúc'])}</td><td>5 độ đói</td><td>4 độ đói</td><td>Chỉ kiểm tra 5 độ đói, không trừ thêm</td></tr>
<tr><td>${ytSongs(['Oán Triền Thân', 'Lưu Thủy Vô Tình'])}</td><td>5 độ đói</td><td>3 độ đói</td><td>Chỉ kiểm tra 5 độ đói, không trừ thêm</td></tr>
<tr><td>${ytSongs(['Dục Hỏa Tấu', 'Hàn Phong Điệu', 'Mộng Phi Sương'])}</td><td>5 lý trí</td><td>4 lý trí</td><td>Trừ thêm 5 lý trí</td></tr>
<tr><td>${ytSongs(['Xuân Phong Hóa Vũ', 'Bá Vương Tá Giáp', 'Dạ Lan Dao'])}</td><td>5 lý trí</td><td>3 lý trí</td><td>Trừ thêm 5 lý trí</td></tr>
</table>
<p>Khi chọn lại bài lý trí từ Thiềm Cung Kỹ Nghệ, tổng tiêu hao trước và sau khi mở tấu là 10 lý trí; khi dùng tỳ bà hoặc nút kỹ năng để gảy lại bài trước thì tiêu hao khi mở tấu là 5 lý trí. Khi cưỡi thú hoặc không mang tỳ bà thì không mở tấu được.</p>
<h4>Năm bản tăng cường phe ta</h4>
<table>
<tr><th>Bản nhạc</th><th>Hiệu quả sau khi chạm nốt nhạc</th><th>Thời lượng</th></tr>
<tr><td>${ytS('Điền Trung Nhạc')}</td><td>Hiệu suất chặt cây, đào khoáng và đập ×2</td><td>90 giây</td></tr>
<tr><td>${ytS('Xuân Quang Khúc')}</td><td>Xóa trạng thái buồn ngủ hiện tại, và có kháng thôi miên rất cao</td><td>480 giây</td></tr>
<tr><td>${ytS('Dục Hỏa Tấu')}</td><td>Hệ số sát thương lửa nhận phải giảm về 0</td><td>90 giây</td></tr>
<tr><td>${ytS('Hàn Phong Điệu')}</td><td>Ngăn giá trị đóng băng tiếp tục tích lũy</td><td>90 giây</td></tr>
<tr><td>${ytS('Mộng Phi Sương')}</td><td>Mỗi lần bị đánh thêm 1.5 điểm đóng băng cho kẻ tấn công</td><td>90 giây</td></tr>
</table>
<p>Nốt nhạc phe ta chỉ cho một người chơi chạm rồi biến mất. Chính Ngọc Thố cũng phải chủ động chạm nốt nhạc, không tự có tăng cường chỉ vì là người diễn tấu.</p>
<h4>Năm bản suy yếu kẻ địch hoặc tác động khu vực</h4>
<table>
<tr><th>Bản nhạc</th><th>Phạm vi tác dụng và kết quả mỗi vòng</th><th>Quy tắc sau khi rời diễn tấu</th></tr>
<tr><td>${ytS('Oán Triền Thân')}</td><td>Kẻ địch đủ điều kiện trong 25 ô không nhận được hồi máu dương</td><td>Mỗi vòng làm mới thành 30 giây</td></tr>
<tr><td>${ytS('Xuân Phong Hóa Vũ')}</td><td>Sát thương gây ra của kẻ địch đủ điều kiện trong 25 ô giảm còn 0.75 lần</td><td>Mỗi vòng làm mới thành 30 giây</td></tr>
<tr><td>${ytS('Bá Vương Tá Giáp')}</td><td>Trừ 25 điểm phần trăm khỏi tỷ lệ giảm sát thương của kẻ địch; phần chưa đủ 25% chuyển thành chịu thêm sát thương</td><td>Mỗi vòng làm mới thành 30 giây</td></tr>
<tr><td>${ytS('Lưu Thủy Vô Tình')}</td><td>Đàn Beefalo đang động dục trong 25 ô lập tức thoát trạng thái động dục; đồng thời chăm sóc cây trồng trong 8 ô</td><td>Chỉ kết toán theo từng vòng diễn tấu, không có hiệu ứng suy yếu 30 giây chung</td></tr>
<tr><td>${ytS('Dạ Lan Dao')}</td><td>Mỗi vòng kẻ địch đủ điều kiện trong 25 ô tăng 5 điểm buồn ngủ và thử ngủ 5 giây</td><td>Diễn tấu liên tục có thể cộng dồn lặp lại, không phải suy yếu cố định 30 giây</td></tr>
</table>
<p>Các bản nhạc kẻ địch không tác dụng lên người chơi, kể cả khi máy chủ bật PVP. Chúng chủ yếu chọn sinh vật đang thù địch, có thân phận thù địch hoặc đang tấn công người chơi; tùy tùng phe ta đứng trong phạm vi không bị đánh nhầm. Mỗi vòng kết toán hợp lệ của cả mười bản nhạc còn tiện thể chăm sóc cây trồng trong 8 ô quanh Ngọc Thố.</p>`],

['nv-yt-burrowhole','Thu hoạch hang thỏ &amp; hang thỏ nhân tạo',`
${ytFig('yt_rabbithole','Hang thỏ',256)}
<p>Ngọc Thố có thể dùng hành động thu hoạch chuyên biệt lên hang thỏ. Ngoài mùa xuân, mỗi hang thỏ <b>mỗi ngày thế giới chỉ thu hoạch được một lần</b>; số lần của cùng một hang thỏ do cả thế giới dùng chung, không phải mỗi Ngọc Thố một lần. Hang thỏ mùa xuân không thu hoạch được, sau khi qua ngày mới không phải mùa xuân thì hồi phục.</p>
<table>
<tr><th>Vật thu được</th><th>Trọng số</th><th>Xác suất mỗi lần</th></tr>
<tr><td>Cỏ</td><td>6</td><td>40%</td></tr>
<tr><td>Hạt giống cà rốt</td><td>4</td><td>26.67%</td></tr>
<tr><td>Cà rốt</td><td>2</td><td>13.33%</td></tr>
<tr><td>Đá</td><td>2</td><td>13.33%</td></tr>
<tr><td>Lông thỏ</td><td>1</td><td>6.67%</td></tr>
</table>
<p>Ngọc Thố còn làm được hang thỏ nhân tạo trong Thiềm Cung Kỹ Nghệ: <b>Thỏ sống ×2 + Xẻng ×1, Máy Khoa Học</b>. Các hang thỏ phải cách nhau ít nhất 3 ô; xẻng làm nguyên liệu công thức sẽ bị tiêu hao.</p>`],

['nv-yt-moth','Nguyệt Nga Dẫn Đường',`
${ytFig('yt_moonbutterfly','Nguyệt Nga Dẫn Đường',260)}
<p>Tiêu hao 1 cánh hoa trong Thiềm Cung Kỹ Nghệ là dùng được, không cần trạm công nghệ.</p>
<ol>
<li>Sau khi sinh ra, Nguyệt Nga ẩn đi một lúc ngắn, khoảng 0.4 giây sau thì xuất hiện.</li>
<li>Khi thế giới có Quảng Hàn Cung hợp lệ, nó ưu tiên bay về phía Quảng Hàn Cung.</li>
<li>Khi không có Quảng Hàn Cung, nó chọn ngẫu nhiên một hướng từ các khu vực mặt trăng dùng được.</li>
<li>Nguyệt Nga chỉ tồn tại tổng cộng khoảng 8 giây, sau đó mờ dần rồi biến mất.</li>
</ol>
<p>Nguyệt Nga chỉ cho gợi ý hướng, không dịch chuyển nhân vật, cũng không đảm bảo đến mục tiêu trong 8 giây; khi thế giới không có Quảng Hàn Cung lẫn khu vực mặt trăng hợp lệ thì không cho hướng hiệu lực. Nguyệt Nga dẫn đường không bắt được và không rơi vật phẩm.</p>`],

['nv-yt-basket','Giỏ Thuốc Tre',`
${ytFig('myth_bamboo_basket','Giỏ Thuốc Tre',256)}
<p>Công thức là <b>Tre thần thoại ×3 + Dây thừng ×2, Máy Khoa Học</b>. Đây là trang bị lưng chuyên biệt của Ngọc Thố, sức chứa 12 ô và tốc độ giữ tươi cấp tủ lạnh, tốc độ hỏng thức ăn bằng 0.5 lần bình thường.</p>
<ul>
<li>Chủ yếu nhận thực vật giã thuốc được, bảy loại bột thuốc và nguyên liệu cốt lõi của chúng, ví dụ Tuyến nhện, Vàng thỏi, Sừng Dê Điện, Lông chim hoàng yến, Sừng Guardian, Nhãn cầu Deerclops, gạc hươu thường, lông bò và Mandrake.</li>
<li>Thịt, cá, món ăn thành phẩm, sinh vật sống và vật trang bị được không bỏ vào được theo quy tắc nguyên liệu thông thường.</li>
<li>Các loại đào, hoa sen, băng, sữa ong chúa và hoa Glommer cũng bị loại trừ; sữa ong chúa tuy là nguyên liệu bột Hoạt Huyết nhưng cũng không bỏ vào Giỏ Thuốc Tre được.</li>
<li>Giỏ Thuốc Tre đốt cháy được. Khi bị đốt sẽ tạm khóa vật chứa; cháy hết thì đồ bên trong rơi ra và để lại tro.</li>
</ul>`],

['nv-yt-cloud','Sương Ngọc Vân',`
<p>Đọc Thiên Thư ở <b>Linh Đài Phương Thốn Sơn</b> sẽ mở khóa lối vào đằng vân chuyên biệt của Ngọc Thố.</p>
<table>
<tr><th>Hạng mục</th><th>Quy tắc của Ngọc Thố</th></tr>
<tr><td>Chi phí cất cánh</td><td>Mỗi lần 25 lý trí</td></tr>
<tr><td>Tốc độ trên mây</td><td>10, khoảng 1.67 lần tốc độ cơ bản của người chơi thường</td></tr>
<tr><td>Hồi phục trên mây</td><td>Cứ 3 giây hồi 1 máu</td></tr>
<tr><td>Năng lực địa hình</td><td>Vượt được mặt biển, không bị tính chết đuối khi rơi xuống nước</td></tr>
<tr><td>Lưu save</td><td>Trạng thái bay được khôi phục theo save</td></tr>
</table>
<p>Khi bay không thu hoạch, nhặt, ngủ, vào nhà, cưỡi thú, nhảy vào lối vào hoặc xây dựng bình thường được. Khi cưỡi thú và trong nhà không cất cánh được; đóng băng, hôn mê, độ đói về 0, chết hoặc biến hình đặc biệt sẽ kết thúc việc bay. Khi đến gần Kẻ Dệt Bóng Cổ Đại khoảng 15 ô còn bị cưỡng chế bắn rơi, chịu 20 sát thương bóng tối và mất 10 lý trí.</p>`]
]]
];