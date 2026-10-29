/* Thần Thoại Thư Thuyết – Tab 6: Nông nghiệp & ẩm thực
   Nạp SAU intro.js (TTTG, TTFG, TTYD) và yem-doc-tien/helpers.js (YDTB, YU, YN, YH4). */
const TTGX=(loai,lq)=>TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: '+loai,'Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: '+lq]);
const TTGL=(t)=>YN(t,'Lưu ý liên động Yêm Đốc Tiên');
const TTGY=(p,t)=>`<a style="cursor:pointer" onclick="go('#/mod/yem-doc-tien/${p}')">${t}</a>`;
const TTIP='images/than-thoai/agriculture/';
const TTIMG=(f,n,s)=>`<img src="${TTIP}${f}.webp" alt="${n}" width="${s}" height="${s}" loading="lazy" style="object-fit:contain;flex:none">`;
const TTI=(f,n,s)=>`<span style="display:inline-flex;align-items:center;gap:8px">${TTIMG(f,n,s||44)}<span>${n}</span></span>`;
const TTGR=(items,s,t)=>(t?`<div style="margin:14px 0 4px;font-size:13px;font-weight:600;opacity:.8">${t}</div>`:'')+`<div style="display:flex;flex-wrap:wrap;gap:10px;margin:8px 0 16px">`+items.map(([f,n])=>`<figure style="margin:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;padding:10px 8px;min-width:${s+28}px;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:rgba(255,255,255,.03)">${TTIMG(f,n,s)}<figcaption style="font-size:12px;opacity:.85;text-align:center">${n}</figcaption></figure>`).join('')+`</div>`;
const TTAG=[
['tg-overview','Tổng quan nông nghiệp &amp; ẩm thực',
TTGX('Tổng quan tài nguyên và nông nghiệp','Bàn Đào, tre, hoa sen, Hồ Lô, Ba Tiêu, Nhân Sâm Quả, ẩm thực chủ đề')+
`<p>Bàn Đào, hoa sen, tre và Hồ Lô cùng tham gia công thức ẩm thực, tương tác NPC, luyện chế và xây dựng.</p>`+
TTGR([['peach','Bàn Đào'],['gourd','Hồ Lô'],['myth_lotus_flower','Hoa Sen'],['myth_bamboo','Tre'],['myth_banana_leaf','Lá Ba Tiêu'],['myth_infant_fruit','Nhân Sâm Quả']],72)],

['tg-resources','Tài nguyên chủ đề',
TTGX('Tài nguyên chủ đề','Bàn Đào, Hồ Lô, hoa sen, rừng tre, cây Ba Tiêu')+``,
[
['tg-peach','Bàn Đào',
TTGR([['bigpeach','Đại Bàn Đào'],['peach','Bàn Đào']],96)+`<p>Bàn Đào thường có thể ăn trực tiếp hoặc dùng cho món ăn hệ đào; Đại Bàn Đào có thể trồng hoặc giao cho NPC. Sau khi trồng, Đại Bàn Đào lần lượt qua hai giai đoạn mầm cây đào và cây đào con, mỗi giai đoạn khoảng <b>6–10 ngày game</b>, rồi thành cây đào trưởng thành.</p>
<p>Khi có tăng ích “Thọ”, lần hái cây Bàn Đào kế tiếp chắc chắn rơi thêm 1 Đại Bàn Đào, sau đó tiêu hao “Thọ”.</p>
<p>Cây đào trưởng thành bị chặt sẽ chuyển thành gỗ và đào rơi một lần, và có thể tăng điểm nghịch ngợm.</p>`+
YDTB(['Vật phẩm hệ đào','Công dụng & hiệu quả'],[
[TTI('peach','Bàn Đào thường'),'6 máu / 10,5 đói / 5 tinh thần; cũng dùng cho Rượu Chay Bàn Đào, Đại Hội Bàn Đào và hảo cảm của Hằng Nga'],
[TTI('peach_cooked','Bàn Đào Nướng'),'3 máu / 10,5 đói / 0 tinh thần; Bàn Đào thường hay Đại Bàn Đào nướng đều ra món này'],
[TTI('bigpeach','Đại Bàn Đào'),'Ăn trực tiếp được, 1024 máu / 2048 đói / 4096 tinh thần; cũng có thể trồng cây, giao một lần cho Hằng Nga được +50 hảo cảm, và tham gia xét thưởng bánh trung thu ngẫu nhiên của bà'],
[TTI('peach_wine','Rượu Chay Bàn Đào'),'Bàn Đào ×3 thêm Đá; 3 máu / 12,5 đói / 60 tinh thần, và hạ nhiệt trong thời gian ngắn'],
[TTI('peach_banquet','Đại Hội Bàn Đào'),'Bàn Đào ×2, Cánh Bướm, Quả Mọng; 50 máu / 37,5 đói / 10 tinh thần']])],
['tg-gourd','Hồ Lô',
TTGR([['gourd_seeds','Hạt giống Hồ Lô'],['gourd','Hồ Lô'],['gourd_cooked','Hồ Lô Nướng'],['gourd_oversized','Hồ Lô Khổng Lồ']],80,'Vật phẩm Hồ Lô')+`<p>Hồ Lô ưa mùa thu; từ hạt giống đến thu hoạch thường khoảng <b>4–7 ngày game</b>, cần độ ẩm trung bình, chủ yếu tiêu hao dưỡng chất loại thứ ba. Trọng số của Hồ Lô trong kho hạt giống thường là 0,5; tính theo kho cây trồng bản gốc hiện tại cộng thêm Hồ Lô, tổng trọng số 17,5, xác suất hạt giống thường mọc thành Hồ Lô là <b>1/35, khoảng 2,86%</b>. Nếu mod khác thêm cây trồng vào kho hạt giống thường hoặc chỉnh trọng số thì xác suất thực tế sẽ đổi theo.</p>
<p>Vật thu hoạch của cây trồng trong ruộng là Hồ Lô. Hồ Lô sống cho 3 máu / 37,5 đói, sản phẩm nướng tên “Hồ Lô Nướng”, ăn nhận 8 máu / 37,5 đói; Hồ Lô sống để được lâu hơn. Hồ Lô còn dùng cho ẩm thực, luyện đan và các vật chứa hoặc công cụ dạng hồ lô.</p>
<p>Hạt giống Hồ Lô có thể được bày bán ngẫu nhiên ở Tiệm Hạt Giống Hòa Chủng, giá cơ bản <b>20 đồng tiền</b>. Hồ Lô cũng có thể trồng thành Hồ Lô Khổng Lồ theo quy tắc cây trồng; khi Hồ Lô Khổng Lồ xuất hiện trong đơn thu mua, giá thu mua cơ bản là <b>10 đồng</b>.</p>`+
YDTB(['Món ăn','Điều kiện nghiêm ngặt','Số liệu & hiệu quả'],[
[TTI('gourd_soup','Canh Hồ Lô'),'Độ Hồ Lô ít nhất 2, không được có thịt','20 máu / 37,5 đói / 15 tinh thần'],
[TTI('gourd_omelet','Bánh Trứng Hồ Lô'),'Độ Hồ Lô ít nhất 2, độ trứng ít nhất 2, không được có thịt','40 máu / 75 đói / 10 tinh thần']])],
['tg-lotus','Sen',
`<div style="display:flex;justify-content:center;margin:8px 0 12px">`+TTIMG('myth_plant_lotus-mature-000','Cây hoa sen trưởng thành',200)+`</div><p>Cây hoa sen không phải thực vật dùng một lần. 3 giai đoạn đầu mỗi giai đoạn khoảng 2 ngày, 2 giai đoạn sau mỗi giai đoạn khoảng 3,5 ngày, có chút dao động ngẫu nhiên; mùa hè lớn nhanh hơn. Giai đoạn nở hoa có thể cắt <b>1–2 đóa hoa sen</b> và <b>0–1 lá sen</b>; khi kết trái chín có thể lấy <b>1–2 củ ngó sen</b> và <b>2–3 hạt sen</b>. Bất kể thu loại nào, cây đều quay về giai đoạn đầu để lớn lại.</p>`+
YDTB(['Vật cơ bản hệ sen','Số liệu & công dụng'],[
[TTI('myth_lotus_flower','Hoa Sen'),'Dùng để giao dịch, nấu ăn và luyện chế; nhấp chuột phải tách ra được Hạt Sen ×1, Cánh Hoa ×1'],
[TTI('myth_lotusleaf','Lá Sen'),'Cầm trên tay làm ô, chống mưa, cách nhiệt mùa hè và hồi chút tinh thần liên tục; hỏng thì biến mất'],
[TTI('lotus_root','Ngó Sen'),'8 máu / 25 đói / 0 tinh thần; có thể nướng'],
[TTI('lotus_root_cooked','Ngó Sen Nướng'),'20 máu / 25 đói / 15 tinh thần'],
[TTI('lotus_seeds','Hạt Sen'),'0 máu / 5 đói / 0 tinh thần; dùng lên ao chưa mọc cây sen có thể trồng hoa sen, cũng có thể nướng'],
[TTI('lotus_seeds_cooked','Hạt Sen Nướng'),'1 máu / 5 đói / 0 tinh thần'],
[TTI('myth_lotusleaf_hat','Mũ Lá Sen'),'Lá Sen ×1, Dây Thừng ×1, không cần khoa học; chống nước 70%, cách nhiệt, sau 10 ngày hỏng và biến mất']])+
YDTB(['Món ăn hệ sen','Điều kiện nghiêm ngặt','Số liệu & hiệu quả'],[
[TTI('myth_food_lzg','Chè Hạt Sen Đường Phèn'),'Đá, Mật Ong, Hạt Sen ×2','8 máu / 12,5 đói / 15 tinh thần'],
[TTI('myth_food_zyoh','Hộp Ngó Sen Chiết Nguyệt'),'Độ rau ít nhất 2, Cành Cây, Ngó Sen, Hoa Cây Mặt Trăng, không được có thịt','20 máu / 25 đói / 15 tinh thần, xếp chồng 3'],
[TTI('myth_food_pgt','Canh Sườn Ngó Sen'),'Độ thịt ít nhất 2, Ngó Sen; không được có Cành Cây, độ quái dưới 1,1','40 máu / 75 đói / 5 tinh thần'],
[TTI('myth_food_hbj','Gà Gói Lá Sen'),'Lá Sen, Đùi Gà ×2, Quả Mọng','40 máu / 75 đói / 33 tinh thần'],
[TTI('myth_food_fhy','Tiệc Phủ Hải'),'Tôm Hùm, Quả Đá, Hoa Sen và <b>đúng 1 độ thịt</b>','40 máu / 75 đói / 33 tinh thần, và cho trạng thái tránh nước 300 giây']])],
['tg-bamboo','Rừng tre',
TTGR([['myth_bamboo','Tre'],['myth_greenbamboo','Thương Trúc'],['myth_bamboo_shoots','Măng Tre'],['myth_bamboo_shoots_cooked','Măng Nướng']],80,'Vật sản rừng tre')+`<p>Rừng tre khi có mưa dễ thúc đẩy sinh trưởng theo cụm và xuất hiện măng tre; tre trưởng thành cho vật liệu tre, giai đoạn chín nhất còn sinh ra Thương Trúc. Măng tre ăn sống là 8 máu / 12,5 đói, măng nướng là 20 máu / 12,5 đói / 5 tinh thần; măng nướng hỏng nhanh hơn.</p>`],
['tg-banana','Cây Ba Tiêu',
`<div style="display:flex;justify-content:center;margin:8px 0 4px">`+TTIMG('myth_banana_tree','Cây Ba Tiêu',180)+`</div>`+TTGR([['myth_banana_leaf','Lá Ba Tiêu'],['myth_bundle','Gói Lá Chuối'],['myth_bundlewrap','Bọc Lá Chuối']],72)+`<p>Cây Ba Tiêu có thể chế tạo ở tab Nông nghiệp, cần <b>Chuối Hang Động ×1, Gỗ Sống ×1, Thùng Phân ×1</b> và khoa học Động Cơ Giả Kim. Thành phẩm chỉ đặt được trên mặt đất trồng trọt được, vừa xây xong chưa có quả; ngoài mùa đông, sau khoảng <b>4 ngày game</b> mới mọc ra quả chuối tiếp theo, mùa đông tạm dừng việc kết quả lại.</p>`+
YDTB(['Thao tác','Sản phẩm & trạng thái sau đó'],[
['Hái bình thường cây Ba Tiêu chín','Chuối ×1, Lá Ba Tiêu ×1, và 50% xác suất được thêm Lá Ba Tiêu ×1; sau khi hái vào thời gian tái sinh khoảng 4 ngày'],
['Chặt cây có quả','Gỗ ×1, Cành Cây ×2, Chuối ×1, Lá Ba Tiêu ×2, để lại gốc cây'],
['Chặt cây trống','Gỗ ×1, Cành Cây ×2, để lại gốc cây; không bù chuối hay lá của lượt này'],
['Đào gốc cây','Gỗ ×1'],
['Chặt sau khi cây cháy','Than Củi ×1, không còn giữ sản phẩm hái và chặt bình thường']])+
`<p>Lá Ba Tiêu vừa là nguyên liệu của Viên Tôm Hùm Lá Chuối, vừa dùng 2 lá chế tạo dưới Động Cơ Giả Kim một phần <b>Gói Lá Chuối</b>. Nó dùng giao diện đóng gói thông thường, có thể bọc tối đa 4 ô vật phẩm; sau khi bọc xong thành phẩm hiển thị là <b>Bọc Lá Chuối</b>, tháo gói trả lại 1 Lá Ba Tiêu. Bản thân Lá Ba Tiêu còn dùng làm nhiên liệu cỡ vừa và phao câu cá biển.</p>`+
TTGL('Quản lý rừng tre mặc định dùng chế độ hiệu năng cân bằng để giảm áp lực server do tre chất đống về hậu kỳ; cả ba loại tre thần thoại đều có thể niêm phong bằng xịt bảo quản sáp và cố định hình thái sinh trưởng. Lỗi Kẻ Gặt Bóng Tối thu hoạch cây Ba Tiêu không rơi Lá Ba Tiêu cũng được tự động sửa. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+' và '+TTGY('compatibility','Sửa lỗi tương thích')+'.')+
YDTB(['Món ăn','Điều kiện nghiêm ngặt','Số liệu & hiệu quả'],[
[TTI('myth_food_zscr','Măng Xào Thịt'),'Măng tre sống/chín, độ thịt ít nhất 1,5, độ rau ít nhất 1,5, độ quái không quá 1','30 máu / 75 đói / 15 tinh thần'],
[TTI('myth_food_ztf','Cơm Ống Tre'),'Hạt Sen, Tre, độ rau ít nhất 2, không được có thịt','20 máu / 75 đói / 5 tinh thần'],
[TTI('myth_food_lxq','Viên Tôm Hùm Lá Chuối'),'Tôm Hùm, chất ngọt, Lá Ba Tiêu và <b>đúng 1 độ thịt</b>','60 máu / 37,5 đói / 33 tinh thần'],
[TTI('myth_food_nx','Sinh Tố Chuối'),'Đá, chế phẩm sữa, Chuối Hang Động; không được có thịt, rau, vật không ăn được hay trứng','20 máu / 12,5 đói / 60 tinh thần, hạ nhiệt kéo dài']])]
]],

['tg-ginseng','Cây Nhân Sâm Quả',
TTGX('Thực vật quan trọng và công trình căn cứ','Tiệm Bói Toán, manh mối kho báu, giếng nước, Dương Chi Ngọc Tịnh Bình, tinh hoa nhật nguyệt, Kim Kích Tử')+
`<div style="font-size:13px;font-weight:600;opacity:.8;margin:14px 0 4px">Đối tượng sinh trưởng Nhân Sâm Quả</div>`+TTGR([['myth_plant_infantree','Cây Nhân Sâm Quả'],['myth_plant_infantree_trunk','Gốc Cây Bị Đổ']],180)+`<p>Cây Nhân Sâm Quả không phải loại cây trồng thông thường cứ tìm được rễ, tưới vài lần là tự lớn. Nó cùng lúc tiêu hao một cái giếng, trọn một bình cam lộ của Ngọc Tịnh Bình, hai loại tinh hoa nhật nguyệt, ít nhất chín lần tiến độ ngày hợp lệ và khoảng bốn mươi chín ngày kết quả; thiếu bất kỳ bước nào cây cũng dừng ở giai đoạn hiện tại.</p>`+
TTGL('Chu kỳ ra quả sau khi trưởng thành mặc định điều chỉnh thành 5 ngày, có thể chọn 49 ngày nguyên bản, 15 ngày hoặc 2 ngày; đồng thời có thông tin Insight, bảo vệ sinh đất canh tác quanh cây, độ trong suốt tán cây tại máy, và dọn thảm bằng nĩa. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.'),
[
['tg-gs-stage','Các giai đoạn sinh trưởng',
YDTB(['Giai đoạn','Thao tác phải hoàn thành','Giới hạn & kết quả'],[
[TTI('myth_plant_infantree_trunk','1. Lấy rễ khô',48),'Mua manh mối kho báu ở Tiệm Bói Toán, hoàn thành điều kiện kho báu; kho báu hiện ra có cơ hội rơi “Gốc Cây Bị Đổ”','Rễ khô là vật nặng không bỏ được vào vật chứa, làm giảm tốc độ mang vác, và có thể bị lửa đốt mất'],
['2. Trồng rễ vào giếng','Trang bị rễ khô, thực hiện trồng lên <b>giếng nước</b>','Rễ được ném vào giếng, cả cái giếng biến thành cây non; giếng này không còn chức năng lấy nước và dập âm ỉ cháy'],
[TTI('myth_plant_infantree','3. Cam lộ hồi sinh',48),'Dương Chi Ngọc Tịnh Bình phải đạt <b>100 lượng nước</b>, dùng một lần lên cây non; tiêu hao toàn bộ 100 lượng nước','Từ 20 đến 99 lượng nước đều không thúc đẩy được giai đoạn này, không thể dùng năm lần phóng 20 nước thông thường để đổ đầy dần'],
[TTI('myth_fireessense','4. Nhật nguyệt nuôi cây',48),'Cho tiên thụ hồi sinh lần lượt thêm Tinh Hoa Mặt Trời, Tinh Hoa Mặt Trăng, và liên tục hoàn thành ít nhất <b>9 lần tiến độ ngày hợp lệ</b>','Hai loại tinh hoa phải khác nhau; chỉ bỏ tinh hoa mà không chăm sóc, hay chỉ chăm sóc mà ô đất không đạt đều không thành cây'],
[TTI('myth_infant_fruit','5. Thành cây ra quả',48),'Sau khi trưởng thành cứ mỗi <b>49 ngày game</b> sinh một quả Nhân Sâm Quả trên cây, quả chưa hái có thể tích dần, tối đa 20 quả','Hái thường khiến quả rơi xuống đất và biến mất sau khoảng 0,3 giây']])],
['tg-gs-cond','Điều kiện sinh trưởng hợp lệ',
`<p>Mỗi ngày khi chuyển ngày, tiên thụ hồi sinh sẽ kết toán ngày trước đó có đồng thời thỏa “đã nhận nuôi dưỡng từ ô đất” và “người chơi hôm đó đã chăm sóc một lần” hay không. Thỏa thì bộ đếm trưởng thành cộng 1, rồi xóa trạng thái trong ngày, kiểm tra lại môi trường ngày tiếp theo. Nói cách khác, hiệu ứng chăm sóc sáng lên không có nghĩa ô đất chắc chắn đạt; nó chỉ hoàn thành một trong hai điều kiện. Mỗi ngày thực hiện một lần “Trò chuyện” với tiên thụ hồi sinh là hoàn thành chăm sóc của ngày đó.</p>
<p>Quy tắc kiểm tra tâm cây và <b>3×3, tổng 9 điểm ô đất</b> xung quanh cách nhau khoảng 4 ô. Mỗi điểm đều phải thỏa:</p>
<ol><li>Là ô đất canh tác;</li><li>Trên ô không có thực vật khác có thể sinh trưởng/thu hoạch, cũng không có công trình hay vật chiếm chỗ có thể hoạt động;</li><li>Ba loại dưỡng chất đều ít nhất là 1, kiểm tra đạt thì mỗi ô tiêu hao 1 điểm mỗi loại trong ba loại dưỡng chất;</li><li>Đất đã ẩm, kiểm tra đạt thì mỗi ô tiêu hao 2 điểm độ ẩm;</li><li>Không ở trong hang động, cũng không nằm trong vùng che của tán cây lớn hay nhỏ khác.</li></ol>
<p>Một lần kiểm tra thành công tương đương tiêu hao tổng cộng từ chín ô đất <b>9 điểm công thức tăng trưởng, 9 điểm phân ủ, 9 điểm phân chuồng và 18 điểm độ ẩm</b>.</p>`],
['tg-gs-essence','Tinh Hoa Mặt Trời & Tinh Hoa Mặt Trăng',
TTGR([['myth_fireessense','Tinh Hoa Mặt Trời'],['myth_coldessense','Tinh Hoa Mặt Trăng']],88)+`<p>Tinh Hoa Mặt Trời đến từ Sao Lùn, Tinh Hoa Mặt Trăng đến từ Cực Quang. Nhân vật cần <b>trang bị Hồ Lô Đỏ Tử Kim</b>, thực hiện hút lên nguồn sáng tương ứng; nguồn sáng bị thu đi, tinh hoa vào thẳng bên trong hồ lô. Sau đó dùng hai loại tinh hoa lần lượt lên tiên thụ hồi sinh, bỏ trùng cùng một loại là vô hiệu. Khi giao thì lấy tinh hoa ra khỏi hồ lô, treo lên con trỏ chuột để dùng thẳng lên tiên thụ.</p>
<p>Tinh hoa nhật nguyệt khi rơi xuống đất sẽ tản đi ngay; bỏ vào ba lô thường hay vật chứa không đủ tư cách chứa tinh hoa cũng biến mất, và gây thay đổi nhiệt độ xung quanh. Hồ Lô Đỏ Tử Kim và Bát Quái Lô có thể chứa tinh hoa an toàn.</p>`],
['tg-gs-canopy','Tán cây trưởng thành',
`<div style="display:flex;justify-content:center;margin:8px 0 4px">`+TTIMG('myth_plant_infantree','Cây Nhân Sâm Quả trưởng thành',160)+`</div><p>Phạm vi tán của cây Nhân Sâm Quả trưởng thành khoảng <b>28 ô</b>, đồng thời đảm nhận ba vai trò: công trình khí hậu căn cứ, công trình chống sét và trạm khoa học chuyên dụng:</p>`+
YDTB(['Chức năng','Quy tắc'],[
['Tán che','Nhân vật dưới cây nhận 60% hiệu chỉnh chống nước và hiệu chỉnh tinh thần dương, dùng logic che nắng, che mưa của tán cây lớn'],
['Chống sét & hoàn trả','Chắn sét trong 28 ô; mỗi lần hứng một cú sét sẽ văng ra xung quanh 10—14 Cành Cây, Cỏ hoặc Lá Dương Xỉ'],
['Hệ sinh thái đom đóm','Khi chuyển ngày, nếu đom đóm trong tán dưới 10 con, có 70% xác suất sinh thêm 1 con'],
['Khoa học Nhân Sâm Quả','Đến gần cây là có khoa học cây Nhân Sâm Quả; công thức hiện dùng trực tiếp khoa học này là Thảm Nhân Sâm Quả: Cành Cây ×4, Lá Dương Xỉ ×4']])],
['tg-gs-harvest','Thu hoạch, bảo quản & ăn',
TTGR([['myth_infant_fruit','Nhân Sâm Quả']],96)+`<p>Nhân Sâm Quả trên cây chỉ vào thẳng túi đồ khi người hái <b>trang bị Kim Kích Tử</b>. Tay không hoặc dùng công cụ thường để hái thì quả rơi xuống đất trước; khoảng 0,3 giây sau sẽ biến mất.</p>
<p>Độ tươi của Nhân Sâm Quả là <b>1 ngày game</b>; bị ướt sẽ hỏng rất nhanh, cháy thì thành than củi, rơi xuống đất liền sẽ biến mất ngay.</p>
<p>Khi ăn sẽ bổ sung máu, độ đói và tinh thần đầy tới giới hạn, kèm trạng thái “Trường Sinh Bất Tử”:</p>
<ul>
<li>Khi tỉ lệ máu nhân vật giữ ở mức <b>từ 1/3 trở lên</b>, cứ 20 giây hồi 5 máu;</li>
<li>Một khi máu rơi xuống dưới 1/3, nhân vật chết hoặc thành ma, trạng thái kết thúc ngay; đây không phải tự cứu khi máu thấp;</li>
<li>Wanda ngừng già đi tự nhiên trong lúc trạng thái kéo dài, hết trạng thái thì tốc độ già trở lại bình thường;</li>
<li>Ăn thêm một quả chỉ đặt lại chu kỳ của cùng trạng thái đó, không chồng nhiều lớp hồi phục.</li>
</ul>`],
['tg-gs-fail','Thất bại & khôi phục',
YDTB(['Sự cố','Kết quả','Cách khôi phục'],[
['Cây non bị đập hỏng','Rơi 3 Gỗ, 2 Gạch Đá, quá trình dừng lại','Phải lấy lại rễ khô và lại tiêu hao một cái giếng'],
['Tiên thụ hồi sinh cháy hỏng','Lùi về một cái <b>giếng cạn</b>','Sau khi mưa, khoảng 5 giây giếng sẽ trữ nước lại, nhưng rễ khô, bình cam lộ đầy, tinh hoa đã bỏ và tiến độ nuôi dưỡng đều không tự hoàn trả'],
['Tinh hoa rơi đất hoặc bỏ nhầm vật chứa','Tinh hoa tản đi và gây nóng lên / lạnh đi cục bộ','Chuẩn bị lại Sao Lùn hoặc Cực Quang, rồi dùng Hồ Lô Đỏ Tử Kim đang trang bị để hút'],
['Dùng công cụ thường để hái','Quả rơi xuống đất, khoảng 0,3 giây sau biến mất','Đợt quả sau phải chờ 49 ngày; hái bằng Kim Kích Tử thì quả vào thẳng túi đồ.'],
['Tháo dỡ hoặc đốt cây trưởng thành','Cây trưởng thành không thể bị đập, đào, cũng không thể đốt cháy','Cây Nhân Sâm Quả trưởng thành không thể dời đi bằng cách đập, đào hay đốt theo cách thông thường.']])]
]],

['tg-cuisine','Ẩm thực chủ đề',
TTGX('Hệ thống ẩm thực','Nồi nấu, công thức nghiêm ngặt, đồ ăn tiệm nhỏ, trạng thái không khí Tết, nhiệt độ, bảo quản')+
`<p>Thức ăn chủ đề chia thành công thức nồi nấu và hàng bán ở Tiệm Thanh Trúc; hàng ở tiệm nhỏ không có công thức nồi nấu.</p>`,
[
['tg-cu-daily','Món chay thường ngày & món nồi không khí Tết',
YDTB(['Món ăn','Điều kiện nghiêm ngặt','Lợi ích & hiệu quả'],[
[TTI('honey_pie','Bánh Chay Mật Ong'),'Độ rau ít nhất 1,5, chất ngọt ít nhất 2; không được có thịt hay Sữa Ong Chúa','20 máu / 37,5 đói / 5 tinh thần'],
[TTI('vegetarian_food','Tố Trai'),'Độ rau ít nhất 3,5; cấm thịt, trái cây, độ quái, chất ngọt, Sữa Ong Chúa, Hành Tây, Tỏi, Ớt, Sữa Dê, Bơ, Mandrake','75 đói'],
[TTI('myth_food_sj','Sủi Cảo'),'Có thịt, Ngô, Tỏi, và độ rau ít nhất 2,5','40 máu / 37,5 đói / 5 tinh thần; trong 60 giây mỗi 2 giây hồi 1 tinh thần, và tăng độ Tết'],
[TTI('myth_food_bz','Bánh Bao Thịt Lớn'),'Ngô, độ thịt ít nhất 1,5; không có Tỏi, không có vật không ăn được, độ quái dưới 2','20 máu / 112,5 đói / 5 tinh thần; nhận trạng thái no lâu 60 giây, tiêu hao đói thông thường giảm một nửa, và tăng độ Tết'],
[TTI('myth_food_xjdmg','Gà Hầm Nấm'),'Đùi Gà đúng 2, nấm bất kỳ, Đá','20 máu / 75 đói / 5 tinh thần, và tăng nhiệt'],
[TTI('myth_food_hsy','Cá Kho Cay Tê'),'Tỏi, Ớt, độ cá ít nhất 1; không được có vật không ăn được','20 máu / 62,5 đói / 5 tinh thần, và tăng nhiệt'],
[TTI('myth_food_bbf','Cơm Bát Bảo'),'Độ rau ít nhất 2, độ trái cây ít nhất 1, và có Hạt Sồi Nướng hoặc Hạt Sen; không được có Hành Tây, Tỏi, Ớt','3 máu / 112,5 đói / 5 tinh thần, tăng nhiệt kéo dài'],
[TTI('myth_food_lwhz','Hấp Lạp Vị Hợp Chưng'),'Thịt Khô Lớn, Thịt Quái Khô, Mật Ong, Bí Ngô','40 máu / 112,5 đói / 15 tinh thần, thời gian bảo quản cực dài'],
[TTI('myth_food_cj','Chả Giò Chiết Nguyệt'),'Bí Ngô, Hoa Cây Mặt Trăng, Cành Cây, độ rau ít nhất 2, không được có thịt','3 máu / 37,5 đói / 15 tinh thần, xếp chồng 3'],
[TTI('myth_food_hlbz','Nước Ép Cà Rốt'),'Cà Rốt đúng 2, độ đá ít nhất 2, không được có thịt','3 máu / 12,5 đói / 33 tinh thần, và hạ nhiệt'],
[TTI('myth_food_tsj','Rượu Đồ Tô'),'Độ rau ít nhất 1, độ trái cây ít nhất 1, Tầm Ma Lửa, Đá, không được có thịt','-3 máu / -10 đói / 15 tinh thần, và tăng nhiệt; giữ ấm +120, ảnh hưởng hào quang tinh thần tiêu cực giảm một nửa, kéo dài 1 ngày (480 giây)'],
[TTI('myth_food_zpd','Thạch Da Heo'),'Chất Nhầy Cừu Thép, Nhầy Ốc Sên, Nhầy Glommer, Da Heo mỗi thứ 1','0 máu / 0 đói / -100 tinh thần; sau lần ăn đầu, trong 120 giây máu không xuống dưới 1. Khi hiệu ứng còn mà ăn lại sẽ chết ngay, khi hiệu ứng kết thúc nếu còn sống thì máu cố định là 1; không xếp chồng được'],
[TTI('myth_food_tr','Kẹo Nặn'),'Mật Ong đúng 2, Cành Cây đúng 2','Không phải món ăn được. Khi trang bị cứ mỗi 2 giây tiêu hao 2 điểm độ bền và hồi 1 tinh thần, tổng cộng 100 điểm độ bền; trang bị liên tục khi đầy độ bền khoảng 100 giây là cạn, tổng cộng hồi khoảng 50 tinh thần. Làm vũ khí chỉ có 1 sát thương, đánh trúng là biến mất ngay. Tiệm Trà Điểm cũng bán với giá cơ bản 4 đồng tiền']])],
['tg-cu-zongzi','Bánh Ú Ngọt & Bánh Ú Mặn',
YDTB(['Bánh ú','Nguyên liệu chế tạo','Số liệu thức ăn sau khi tháo gói'],[
[TTI('myth_zongzi1','Bánh Ú Ngọt'),'Tố Trai ×1, Lá Ba Tiêu ×1, Dây Thừng ×1; khoa học Thần Thoại','10 máu / 75 đói / 0 tinh thần'],
[TTI('myth_zongzi2','Bánh Ú Mặn'),'Thịt Viên ×1, Lá Ba Tiêu ×1, Dây Thừng ×1; khoa học Thần Thoại','3 máu / 62,5 đói / 5 tinh thần']])+
`<p>Chế tạo ra là bánh ú dạng gói, cầm tay được và tháo gói được. Nhắm vào mặt biển ném sẽ tạo hiệu ứng dụ cá và tiêu hao bánh ú; Bánh Ú Mặn còn lần lượt xét <b>40%</b> sinh Tôm Hùm và <b>10%</b> sinh Cá Voi Một Sừng, hai mục này độc lập với nhau. Thức ăn đã tháo gói nếu rơi thẳng xuống biển cũng sẽ chuyển thành hiệu ứng dụ cá rồi biến mất.</p>`],
['tg-cu-shop','Đồ ăn Tiệm Thanh Trúc',
YDTB(['Hàng hóa','Lợi ích cơ bản','Công dụng đặc biệt'],[
[TTI('myth_food_thl','Kẹo Hồ Lô'),'-3 máu / 12,5 đói / 33 tinh thần','Warly ăn sẽ xóa trí nhớ thức ăn.'],
[TTI('myth_food_nrlm','Mì Kéo Bò'),'20 máu / 75 đói / 2 tinh thần','Trong 480 giây Bò Rừng không chủ động khóa mục tiêu người ăn; khi người ăn bị đánh có thể gọi tối đa 5 con Bò Rừng trong 30 ô tấn công kẻ đến gây sự; khi chăn bò, lợi ích độ thuần hóa và độ phục tùng được kết toán thêm một lần nữa'],
[TTI('myth_food_djyt','Sữa Đậu Nành Quẩy'),'5 máu / 25 đói / 10 tinh thần','Nhận trạng thái dinh dưỡng 240 giây: lợi ích máu dương của các lần ăn sau ×1,5'],
[TTI('myth_food_cdf','Đậu Phụ Thối'),'5 máu / 18,5 đói / 5 tinh thần','Trong 160 giây thoát khỏi việc bị chủ động tìm mục tiêu thông thường, không xóa thù hận đã hình thành'],
[TTI('myth_food_lrhs','Bánh Nướng Thịt Lừa'),'20 máu / 75 đói / 5 tinh thần','Nhận trạng thái giữ ấm 240 giây: giữ ấm +120'],
[TTI('myth_food_lhyx','Vịt Huyết Hoa Sen'),'-3 máu / 70 đói / 10 tinh thần','Ăn xong tăng nhiệt; biểu tượng “tránh lạnh” không cho khả năng chống lạnh thực tế.'],
[TTI('myth_food_gqmx','Bún Qua Cầu'),'20 máu / 62,5 đói / 5 tinh thần','Trong 240 giây, nếu thức ăn ăn sau cho tinh thần dương thì lợi ích tinh thần tăng lên 1,5 lần; thức ăn tinh thần bằng 0 hay âm không được lợi'],
[TTI('myth_food_xcmt','Màn Thầu Dưa Muối'),'5 máu / 75 đói / 5 tinh thần','Nhận trạng thái khai vị 240 giây: lợi ích đói dương của các lần ăn sau ×1,5']])]
]]
];