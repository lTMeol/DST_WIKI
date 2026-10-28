/* Thần Thoại Thư Thuyết – Tab 3: NPC & tương tác
   Nạp SAU intro.js (TTTG, TTFG, TTYD) và yem-doc-tien/helpers.js (YDTB, YU, YN, YH4). */
const TTTX=(loai,lq)=>TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: '+loai,'Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: '+lq]);
const TTICO=document.head.appendChild(Object.assign(document.createElement('style'),{textContent:'.tt-ico{width:40px;height:40px;object-fit:contain;vertical-align:middle;margin-right:6px}td .tt-ico+.tt-ico{margin-left:-2px}.tt-pic{text-align:center;margin:8px 0}.tt-pic img{width:120px;max-width:100%;height:auto}.tt-gallery{display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin:12px 0}.tt-gallery figure{margin:0;text-align:center;width:110px}.tt-gallery img{width:100px;height:100px;object-fit:contain}.tt-gallery figcaption{font-size:.85em}'}));
const TTLD=(t)=>YN(t,'Lưu ý liên động Yêm Đốc Tiên');
const TTN=[
['tn-overview','Tổng quan NPC & tương tác',
TTTX('Tổng quan NPC','Thái Thượng Lão Quân, Hằng Nga, Thổ Địa Công, giao dịch, hảo cảm, phần thưởng dùng chung')+
`<p>Trang này ghi lại quy tắc của ba NPC chính — <b>Thái Thượng Lão Quân</b>, <b>Hằng Nga</b> và <b>Thổ Địa Công</b> (Miếu Thổ Địa) — cùng các quy tắc tương tác dùng chung.</p>`],

['tn-laojun','Thái Thượng Lão Quân',
TTTX('NPC quan trọng','Cấp Cấp Như Luật Lệnh, giới hạn ba người giao dịch, Thông Thiên Sắc Lệnh, quà đáp cố định, đan dược ngẫu nhiên, sửa chữa trang bị, Chuông Trâu Đâu Suất, sét đánh trừng phạt')+
TTFG('laozi','Thái Thượng Lão Quân')+
`<p><b>Cấp Cấp Như Luật Lệnh</b> dùng để triệu hồi Thái Thượng Lão Quân; mỗi lần chế tạo được 3 cái. Mỗi lần Lão Quân lưu lại 480 giây, sau khi rời đi thế giới phải chờ thêm 1440 giây mới triệu hồi lại được. Mỗi lượt giao dịch còn có hai giới hạn cứng: mỗi người chơi chỉ được giao dịch một lần, và tối đa chỉ ba người chơi khác nhau hoàn tất giao dịch; ngay sau giao dịch thành công thứ ba, Lão Quân lập tức rời đi.</p>`+
TTLD('Lão Quân mặc định cho mỗi người giao dịch 2 lần, tổng cộng 4 lần thì rời đi; cũng có thể chọn nguyên bản, 5 lần mỗi người hoặc không giới hạn. Nếu chưa dùng hết số lần, Lão Quân vẫn rời đi theo thời hạn gốc. Đổi Chuông Trâu lấy Thanh Ngưu cũng tính 1 lần; bộ đếm được lưu theo lần ghé thăm này, khởi động lại không bị xóa, lần triệu hồi sau sẽ đếm lại. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.'),
[
['tn-lj-trade','Điều kiện giao dịch & cách tính',
`<p>Bạch Cốt Phu Nhân, WX-78, Wortox, Wormwood, Wurt và Bàn Ti Nương Nương mặc định không thể giao dịch với Lão Quân; mang theo <b>Thông Thiên Sắc Lệnh</b> trong người thì được gỡ hạn chế. Sắc Lệnh chỉ là vật chứng minh tư cách, không bị tiêu hao khi giao dịch. Các nhân vật khác không cần Sắc Lệnh.</p>
<p>Mỗi lần giao vật phẩm thành công chỉ tính là <b>1 giao dịch</b>, không liên quan đến việc Lão Quân trả lại bao nhiêu món. Quà đáp thông thường xuất hiện ở vị trí ngẫu nhiên gần Lão Quân, lệch tối đa 4 ô theo mỗi trục so với ông, và không bỏ thẳng vào túi đồ của người giao; chỉ riêng dịch vụ đặc biệt của Chuông Trâu Đâu Suất mới trả chuông mới thẳng vào tay người chơi.</p>`],
['tn-lj-fixed','Quà đáp cố định',
YDTB(['Giao cho Thái Thượng Lão Quân','Nhận được','Ghi chú'],[
['Bùa Sinh Mệnh','Tráng Cốt Đan ×3','Quà cố định, không rút từ kho đan dược ngẫu nhiên'],
['Bùa Băng','Đằng Vân Đan ×3','Quà cố định'],
['Bùa Ác Mộng','Thị Huyết Đan ×3','Quà cố định'],
['Trái Tim Mách Lẻo','Hoàn Hồn Đan ×1','Quà cố định']])],
['tn-lj-boss','Vật liệu thủ lĩnh & đan dược ngẫu nhiên',
`<p>“Đan dược ngẫu nhiên” mỗi lần đều được rút <b>độc lập, xác suất bằng nhau</b> trong bốn loại: <b>Đằng Vân Đan, Thị Huyết Đan, Ngưng Vị Đan, Tráng Cốt Đan</b>. Khi trả nhiều viên một lần, mỗi viên được rút riêng nên có thể trùng loại.</p>`+
YDTB(['Vật phẩm giao','Số đan dược ngẫu nhiên'],[
['<img class="tt-ico" src="images/npcs/loot-deerclops-eyeball.png" alt="Mắt Hươu Khổng Lồ" loading="lazy"> Mắt Hươu Khổng Lồ','1'],['<img class="tt-ico" src="images/npcs/loot-bearger-fur.png" alt="Da Gấu" loading="lazy"> Da Gấu','1'],['Mỏ Thiên Ông Tà','1'],['<img class="tt-ico" src="images/npcs/loot-shadow-heart.png" alt="Tim Bóng Tối" loading="lazy"> Tim Bóng Tối','2'],['<img class="tt-ico" src="images/npcs/loot-dragon-scale.png" alt="Vảy Rồng" loading="lazy"> Vảy Rồng','3'],['<img class="tt-ico" src="images/npcs/loot-mushroom-skin.png" alt="Da Cóc" loading="lazy"> Da Cóc','3'],['<img class="tt-ico" src="images/npcs/loot-bee-queen-crown.png" alt="Vương Miện Ong Chúa" loading="lazy"> Vương Miện Ong Chúa','3']])],
['tn-lj-repair','Sửa chữa & làm mới trang bị chỉ định',
`<p>Lão Quân không có chức năng “sửa mọi vật phẩm”. Các vật phẩm trong bảng dưới sau khi giao sẽ bị <b>thu nguyên cả món và tạo ra một món mới đầy trạng thái</b>, tương đương thu hồi đổi mới; không phải bù độ bền theo tỉ lệ còn thiếu.</p>`+
YDTB(['Vật phẩm sửa được','Kết quả sau khi giao'],[
['Vương Miện Thulecite, Giáp Thulecite, Gậy Thulecite','Mỗi món đổi lại trang bị đầy độ bền'],
['Phượng Sí Tử Kim Quan, Tỏa Tử Hoàng Kim Giáp','Mỗi món đổi lại trang bị đầy độ bền'],
['Tam Sơn Phi Phượng Quan, Tỏa Tử Thanh Nguyên Giáp','Mỗi món đổi lại trang bị đầy độ bền'],
['Tử Khuê Chiến Khôi, Tử Khuê Chiến Giáp','Mỗi món đổi lại trang bị đầy độ bền']])+
`<p>Nếu trang bị có skin, món đổi mới sẽ giữ nguyên skin đó. Việc xét sửa chữa <b>không kiểm tra độ bền hiện tại có hao hụt hay không</b>: vật phẩm đầy độ bền cũng được nhận, đổi mới và vẫn tốn một lượt giao dịch. Vũ khí, giáp, quần áo và công cụ ngoài bảng dù có độ bền cũng không được Lão Quân nhận.</p>`],
['tn-lj-bell','Chuông Trâu Đâu Suất & Thanh Ngưu',
`<p>Giao <b>Chuông Trâu Đâu Suất</b> cho Lão Quân sẽ kích hoạt tương tác: Lão Quân triệu hồi <b>Bản Giác Thanh Ngưu</b> (Thanh Ngưu sừng tấm) và trả lại cho người chơi một chiếc chuông mới đã có Thanh Ngưu; thao tác này cũng được tính vào số lần giao dịch của lượt đó.</p>`],
['tn-lj-refuse','Từ chối nhận & hậu quả khi tấn công',
YU([
'Người chơi đã hoàn tất giao dịch trong lượt này mà giao tiếp sẽ bị từ chối; theo luật nguyên bản, khi cả lượt đã có ba giao dịch thành công thì cũng từ chối.',
'Nhân vật bị hạn chế mà không có Thông Thiên Sắc Lệnh thì mọi vật phẩm giao đều không được nhận.',
'Tấn công Lão Quân sẽ không làm ông bị thương. Nếu người chơi tấn công, sét sẽ đánh xuống ngay vị trí người đó, gây <b>30 sát thương</b> và làm rơi vật đang cầm; nếu là tùy tùng tấn công thì bị giết ngay, còn các kẻ tấn công khác thường bị loại bỏ.'])]
]],

['tn-change','Hằng Nga',
TTTX('NPC quan trọng','Quảng Hàn Cung, hảo cảm, khoa học Nguyệt Cung, bản thiết kế, bình phong, lư hương, cung đăng, Oánh Nguyệt Luân Bàn, bánh trung thu, dược phấn và khúc phổ Ngọc Thố')+
TTFG('chang_e','Hằng Nga')+
`<p>Hằng Nga nhận các loại đá quý và Đại Bàn Đào. Hảo cảm: đá quý thường mỗi viên <b>+1</b>, đá quý cầu vồng <b>+20</b>, Đại Bàn Đào <b>+50</b>; khi Trư Bát Giới giao, các giá trị trên giảm một nửa (làm tròn xuống), còn Ngọc Thố thì cộng thêm +1 vào giá trị cơ sở. Hảo cảm thuộc về từng người chơi, nhưng <b>phần thưởng lần đầu đạt Oánh Nguyệt Luân Bàn của cùng một Hằng Nga chỉ có một lần</b>: ai đạt 150 trước sẽ nhận Luân Bàn cùng 3 bánh da băng và 3 bánh ngũ nhân; sau đó người chơi khác dù đủ 150 cũng không nhận thêm Luân Bàn thứ hai từ Hằng Nga.</p>`+
YDTB(['Người giao và vật phẩm','Hảo cảm thực nhận'],[
['Đá quý thường (không phải Trư Bát Giới)','+1'],
['Đá quý cầu vồng (không phải Trư Bát Giới)','+20'],
['Đại Bàn Đào (không phải Trư Bát Giới)','+50'],
['Trư Bát Giới giao một trong các vật trên','Giá trị cơ sở ÷ 2, làm tròn xuống'],
['Ngọc Thố giao một trong các vật trên','Giá trị cơ sở +1']])+
`<p>Khi hảo cảm đạt 20 / 50 / 100 / 150, quyền chế tạo Nguyệt Cung dùng được gần Hằng Nga lần lượt tăng lên bậc 2 / 4 / 6 / 7; các bậc sau giữ lại nội dung đã mở ở bậc trước.</p>`,
[
['tn-ce-tech','Công nghệ hảo cảm & bản thiết kế',
`<p>Công nghệ hảo cảm phải dùng trạm chế tạo Nguyệt Cung của Hằng Nga ngay bên cạnh bà. Tám công trình hoặc đồ bài trí không tự học khi đạt mốc: người chơi phải dùng <b>1 tờ Giấy Cói</b> chế tạo bản thiết kế tương ứng rồi đọc nó, mới học vĩnh viễn công thức thường của thành phẩm. Tám bản thiết kế độc lập với nhau; cùng một bậc có nhiều tờ thì cũng phải chế tạo và đọc riêng từng tờ. Oánh Nguyệt Như Ý và Oánh Nguyệt Bách Bảo Nang là vật chế tạo trực tiếp ở trạm của Hằng Nga, không có bản thiết kế.</p>`+
YDTB(['Hảo cảm','Nội dung mới mở','Cách mở khóa'],[
['20','Bình Phong, Chậu Cảnh Nguyệt Chi, Lư Hương','Chế tạo và đọc ba bản thiết kế tương ứng'],
['50','Giá Đèn Lồng, Tiên Hạc·Trái, Tiên Hạc·Phải','Chế tạo và đọc ba bản thiết kế; hai con Tiên Hạc có hướng ngược nhau nên công thức cũng học riêng'],
['100','Đèn Lồng, Cung Đăng; Oánh Nguyệt Như Ý','Đèn Lồng và Cung Đăng học qua bản thiết kế; Oánh Nguyệt Như Ý chế tạo thẳng ở trạm Hằng Nga'],
['150','Oánh Nguyệt Bách Bảo Nang','Chế tạo thẳng ở trạm Hằng Nga; lần đầu Hằng Nga đạt hảo cảm tối đa, phần thưởng Oánh Nguyệt Luân Bàn và bánh trung thu được tính riêng']])+
YH4('Danh sách thành phẩm từ bản thiết kế')+
YDTB(['Mốc','Thành phẩm và công thức thường','Công dụng & đặc tính thực tế'],[
['20','<img class="tt-ico" src="images/npcs/chang-e-screen.png" alt="Bình Phong" loading="lazy"> <b>Bình Phong</b>: Ván Gỗ ×3, Tơ Nhện ×3, Giấy Cói ×3; một lần chế tạo ra 3 cái','Đặt từng đoạn như tường, chặn lối đi và tự nối với bình phong bên cạnh; đập bỏ rơi 1 Tre'],
['20','<img class="tt-ico" src="images/npcs/chang-e-bonsai.png" alt="Chậu Cảnh Nguyệt Chi" loading="lazy"> <b>Chậu Cảnh Nguyệt Chi</b>: Cành Cây ×3, Bướm Đêm Mặt Trăng ×1, Thủy Tinh Mặt Trăng ×4','Công trình trang trí Nguyệt Cung, có thể đập bỏ; bản thân không có chức năng gì thêm'],
['20','<img class="tt-ico" src="images/npcs/chang-e-incense-burner.png" alt="Lư Hương" loading="lazy"> <b>Lư Hương</b>: Cánh Hoa ×6, Đá Mặt Trăng ×2, Than Củi ×1','Công trình trang trí luôn có khói, đồng thời là nguồn nhiệt 20 độ, không cần thêm nhiên liệu'],
['50','<img class="tt-ico" src="images/npcs/chang-e-lantern-stand.png" alt="Giá Đèn Lồng" loading="lazy"> <b>Giá Đèn Lồng</b>: Ván Gỗ ×2, Than Củi ×1','Treo tối đa 2 đèn lồng, lấy lại từng đèn; khi tháo giá, các đèn đang treo sẽ được trả lại cùng lúc'],
['50','<img class="tt-ico" src="images/npcs/chang-e-crane-left.png" alt="Tiên Hạc·Trái" loading="lazy"><img class="tt-ico" src="images/npcs/chang-e-crane-right.png" alt="Tiên Hạc·Phải" loading="lazy"> <b>Tiên Hạc·Trái / Tiên Hạc·Phải</b>: mỗi món cần Đá Mặt Trăng ×4, Lông Thiên Ông Tà ×1','Hai bản thiết kế độc lập, hai công thức độc lập; đều là đồ bài trí trang trí, khác nhau ở hướng đặt đối xứng gương'],
['100','<img class="tt-ico" src="images/npcs/chang-e-lantern.png" alt="Đèn Lồng" loading="lazy"> <b>Đèn Lồng</b>: Sáp Ong ×1, Cành Cây ×3, Giấy Cói ×2','Cầm trên tay hoặc thả dưới đất thì chiếu sáng, bỏ vào túi đồ thì tắt; ban ngày và hoàng hôn bán kính sáng 1,5, ban đêm là 3, chiếu sáng không tốn độ bền hay nhiên liệu'],
['100','<img class="tt-ico" src="images/npcs/chang-e-palace-lamp.png" alt="Cung Đăng" loading="lazy"> <b>Cung Đăng</b>: Đèn Lồng ×1, Ván Gỗ ×1','Công trình cố định, luôn sáng bán kính 3, không cần nhiên liệu; đập bỏ không trả lại vật liệu']])+
YN('Công thức thực tế hiện tại của Chậu Cảnh Nguyệt Chi là Cành Cây ×3, Thủy Tinh Mặt Trăng ×4.','Ghi chú đối chiếu công thức')],
['tn-ce-cake','Phần thưởng bánh trung thu',
`<p>Ngoài vật dạy cho Ngọc Thố, giao Đại Bàn Đào sẽ thưởng thêm 2 bánh trung thu ngẫu nhiên, giao đá quý cầu vồng thưởng 1 bánh ngẫu nhiên; các loại đá quý khác được nhận chỉ có 10% xác suất cho 1 bánh ngẫu nhiên. Ngọc Thố ngoài các mức trên còn có thêm 10% xác suất nhận một bánh ngẫu nhiên nữa. Bánh thuộc một trong ba loại: da băng, nhân sen, ngũ nhân.</p>
<p>Cả ba loại bánh khi ăn đều cho <b>15 máu / 15 đói / 15 tinh thần</b>, kèm hiệu ứng độc lập kéo dài <b>480 giây (1 ngày game)</b>:</p>`+
YDTB(['Bánh trung thu','Hiệu ứng kéo dài'],[
['<img class="tt-ico" src="images/npcs/mooncake-ice.png" alt="Bánh da băng" loading="lazy"> Bánh da băng','Tinh thần không còn thay đổi qua cơ chế tăng/giảm tinh thần thông thường (trừ khi chuyển Thiên Nhãn của Dương Tiễn)'],
['<img class="tt-ico" src="images/npcs/mooncake-five-kernel.png" alt="Bánh ngũ nhân" loading="lazy"> Bánh ngũ nhân','Độ đói không còn thay đổi qua cơ chế tăng/giảm độ đói thông thường'],
['<img class="tt-ico" src="images/npcs/mooncake-lotus.png" alt="Bánh nhân sen" loading="lazy"> Bánh nhân sen','Hiệu ứng âm của bản thân món ăn (máu, đói hoặc tinh thần) được tính là 0; không miễn trừ các thay đổi tiêu cực từ nguồn khác']])+
`<p>Ăn lại cùng một loại bánh sẽ làm mới thời gian hiệu ứng thành 480 giây, không chồng thành nhiều lớp cùng tên; ba hiệu ứng độc lập với nhau.</p>`+
TTLD('Ba loại bánh mặc định dùng giới hạn xếp chồng của vật phẩm nhỏ (mốc chính thức 40), không còn tùy chọn riêng; nếu mod khác đã đặt giới hạn cao hơn thì giữ giá trị cao hơn. Cách nhận và xác suất thưởng của Hằng Nga không đổi. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')+
YH4('Hộp bánh trung thu')+
TTFG('mooncake_box','Hộp bánh trung thu')+
`<p>Hộp bánh trung thu chế tạo dưới khoa học Thần Thoại bằng <b>Ván Gỗ ×2, Hoa Cây Mặt Trăng ×1</b>, là vật chứa di động <b>9 ô</b>, chỉ chứa được bánh da băng, nhân sen và ngũ nhân. Khi mang theo người, nhấp chuột phải để mở thì hộp sẽ tự đặt xuống đất trước.</p>`],
['tn-ce-items','Vật phẩm Nguyệt Cung',
`<p>Mốc hảo cảm, quyền chế tạo và phần thưởng lần đầu đạt hảo cảm tối đa đều do Hằng Nga tính toán.</p>`+
YH4('Oánh Nguyệt Luân Bàn')+`<div class="tt-pic"><img src="images/npcs/chang-e-moon-disc.png" alt="Oánh Nguyệt Luân Bàn" loading="lazy"></div>`+
`<p>Khi hảo cảm của bất kỳ người chơi nào chạm bậc cao nhất, nếu chưa từng tính thưởng Luân Bàn thì sẽ cho một lần <b>Oánh Nguyệt Luân Bàn, Bánh da băng ×3, Bánh ngũ nhân ×3</b>. Đây không phải phần thưởng cá nhân mà mỗi người chơi đều nhận lặp lại được.</p>
<p>Oánh Nguyệt Luân Bàn đặt xuống đất sẽ cung cấp đầy đủ khoa học tế đàn Nguyệt Đảo, và hiện biểu tượng trên bản đồ trong màn sương. Ánh sáng thay đổi theo pha mặt trăng: trăng non và trăng khuyết hầu như không chiếu sáng, bán nguyệt khoảng 0,7, trăng khuyết lồi khoảng 1,5, trăng tròn khoảng 5 ô.</p>`+
YH4('Oánh Nguyệt Như Ý')+`<div class="tt-pic"><img src="images/npcs/chang-e-ruyi.png" alt="Oánh Nguyệt Như Ý" loading="lazy"></div>`+
`<p>Oánh Nguyệt Như Ý chế tạo thẳng ở khoa học Nguyệt Cung bậc ba mở tại <b>100 hảo cảm</b> của Hằng Nga, nguyên liệu <b>Đá Quý Cầu Vồng, Thủy Tinh Mặt Trăng ×3</b>. Khi trang bị hồi khoảng 3,3 tinh thần mỗi phút và hái cây đào nhanh; nhưng sát thương tấn công chỉ 5, và một khi dùng nó đánh trúng mục tiêu thì pháp bảo sẽ hỏng và biến mất. Oánh Nguyệt Như Ý cũng là nguyên liệu công thức của Kim Kích Tử.</p>`+
YH4('Oánh Nguyệt Bách Bảo Nang')+`<div class="tt-pic"><img src="images/npcs/chang-e-treasure-bag.png" alt="Oánh Nguyệt Bách Bảo Nang" loading="lazy"></div>`+
`<p>Bách Bảo Nang chế tạo thẳng ở khoa học Nguyệt Cung bậc bốn mở tại <b>150 hảo cảm</b>, nguyên liệu <b>Tơ Nhện ×7, Hoa Cây Mặt Trăng ×16, Đá Quý Cầu Vồng</b>. Túi rỗng mới chế tạo không thể mở ngay: phải thả xuống đất vào lúc trăng tròn khoảng 6 giây để nạp năng lượng. Sau khi dùng, nó mở ra thành <b>kho chứa vô hình 9 ô</b> đi theo người cầm, thời gian cơ bản <b>480 giây tức 1 ngày game</b>.</p>`+
YU([
'Mỗi khi trời tối, nếu trong túi có Thủy Tinh Mặt Trăng thì tiêu hao 1 cái và cộng thêm 480 giây vào thời gian còn lại.',
'Khi hết thời gian, toàn bộ đồ bên trong rơi ra, thân Bách Bảo Nang trở về túi đồ người cầm và vẫn dùng lại được.',
'Hệ số bảo quản nguyên bản là <b>50%</b>, tức đồ trong túi hư với tốc độ bằng một nửa bình thường; không có khả năng làm lạnh.'])+
TTLD('Việc điều chỉnh độ phân giải cao cho nút và vật chứa của Bách Bảo Nang kéo thả được luôn có hiệu lực, không còn công tắc riêng; vị trí sau khi chỉnh được lưu trên máy. Thời gian còn lại sẽ được hiển thị, mặc định 30 ngày, có thể chọn nguyên bản 1 ngày, 15 ngày hoặc vĩnh viễn; hệ số bảo quản mặc định 5% (hiệu ứng thùng Gấu Lửng Cực Địa), có thể chọn 25% hoặc nguyên bản 50%. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')],
['tn-ce-powder','Học dược phấn',
`<p>Chỉ <b>Ngọc Thố</b> mới dùng được nguyên liệu trong bảng dưới để học với Hằng Nga. Sau lần thành công đầu tiên, nguyên liệu được <b>trả lại nguyên vẹn</b> và chỉ cộng 1 điểm hảo cảm; nếu đã học rồi thì Hằng Nga từ chối nhận, nên không nuốt nguyên liệu lặp lại. Hiệu ứng từng loại dược phấn và quy tắc giã thuốc xem ở mục Ngọc Thố · Bảy loại dược phấn (sẽ bổ sung).</p>`+
YDTB(['Giao cho Hằng Nga','Mở khóa'],[
['<img class="tt-ico" src="images/npcs/herb-mandrake.png" alt="Mandrake hoặc Mandrake chín" loading="lazy"> Mandrake hoặc Mandrake chín','Thảo Sâm Dược Phấn'],
['<img class="tt-ico" src="images/npcs/item-guardian-horn.png" alt="Sừng Hộ Vệ" loading="lazy"> Sừng Hộ Vệ','Tê Nhung Dược Phấn'],
['<img class="tt-ico" src="images/npcs/item-volt-goat-horn.png" alt="Sừng Dê Điện" loading="lazy"> Sừng Dê Điện','Kinh Quyết Dược Phấn'],
['<img class="tt-ico" src="images/npcs/item-royal-jelly.png" alt="Sữa Ong Chúa" loading="lazy"> Sữa Ong Chúa','Hoạt Huyết Dược Phấn'],
['<img class="tt-ico" src="images/npcs/loot-deerclops-eyeball.png" alt="Mắt Hươu Khổng Lồ" loading="lazy"> Mắt Hươu Khổng Lồ hoặc Chìa Khóa Klaus','Hàn Mâu Dược Phấn'],
['<img class="tt-ico" src="images/npcs/item-glow-berry.png" alt="Quả Phát Sáng" loading="lazy"> Quả Phát Sáng hoặc Bánh Napoleon','Dạ Minh Dược Phấn'],
['Trà Xoa Dịu','Bài Uất Dược Phấn']])],
['tn-ce-music','Học khúc phổ',
`<p>Các vật dạy học trong bảng dưới sau khi học thành công sẽ bị tiêu hao và cộng <b>3 điểm hảo cảm</b>; lần đầu thành công có 20% xác suất nhận thêm một bánh trung thu ngẫu nhiên. Khúc <i>Hàn Phong Điệu</i> chấp nhận Đá Ấm hoặc Đá Lạnh ở trạng thái nóng bỏng, Đá Ấm nhiệt độ bình thường sẽ bị từ chối. Cách diễn tấu, tiêu hao tài nguyên và hiệu quả của khúc phổ xem ở mục Ngọc Thố · Oánh Nguyệt Tỳ Bà (sẽ bổ sung).</p>`+
YDTB(['Giao cho Hằng Nga','Khúc phổ mở khóa'],[
['Mũ Ong Chúa','Điền Trung Nhạc'],
['<img class="tt-ico" src="images/npcs/item-one-man-band.png" alt="Nhạc cụ độc tấu" loading="lazy"> Nhạc cụ độc tấu','Xuân Quang Khúc'],
['<img class="tt-ico" src="images/npcs/loot-dragon-scale.png" alt="Vảy Rồng" loading="lazy"> Vảy Rồng','Dục Hỏa Tấu'],
['<img class="tt-ico" src="images/npcs/item-hot-stone.png" alt="Đá Ấm nóng bỏng" loading="lazy"> Đá Ấm hoặc Đá Lạnh nóng bỏng','Hàn Phong Điệu'],
['<img class="tt-ico" src="images/npcs/item-ice-bream.png" alt="Cá Tráp Băng" loading="lazy"> Cá Tráp Băng','Mộng Phi Sương'],
['Tổ Nhện','Oán Triền Thân'],
['<img class="tt-ico" src="images/npcs/item-feather.png" alt="Quạt Lông Vũ" loading="lazy"> Quạt Lông Vũ','Xuân Phong Hóa Vũ'],
['Lông Gấu Lửng','Bá Vương Tá Giáp'],
['<img class="tt-ico" src="images/npcs/item-beefalo-hat.png" alt="Mũ Sừng Trâu" loading="lazy"> Mũ Sừng Trâu','Lưu Thủy Vô Tình'],
['<img class="tt-ico" src="images/npcs/item-pan-flute.png" alt="Sáo Pan" loading="lazy"> Sáo Pan','Dạ Lan Dao']])]
]],

['tn-earth','Miếu Thổ Địa & Thổ Địa Công',
TTTX('NPC quan trọng và hệ thống công trình','Miếu Thổ Địa, ba loại món chín, khế ước năm ngày, chăm sóc nông vụ, đồng tiền chủ đề')+
`<div class="tt-pic"><img src="images/npcs/earth-temple.png" alt="Miếu Thổ Địa" loading="lazy"></div><p><b>Miếu Thổ Địa: cùng một thế giới chỉ có một cái tại một thời điểm.</b> Chế tạo cần 3 Gạch Đá, 4 Ván Gỗ, 1 con Chuột Chũi, ở khoa học cấp 2.</p>
<div class="tt-pic"><img src="images/npcs/earth-god.png" alt="Thổ Địa Công" loading="lazy"></div><p>Muốn mời Thổ Địa Công, phải lần lượt dâng ba phần <b>món ăn nấu chín</b> và ba phần không được trùng loại: một món mặn (thịt), một món chay, một món ăn vặt. Đồ sống, đồ không được tính là món nấu, hoặc phần thứ hai cùng loại đều bị từ chối. Sau khi đặt phần thứ ba, nếu không phải ban đêm, Thổ Địa Công sẽ xuất hiện; hiệu lực của việc dâng cúng tính 5 ngày game kể từ lần giao cuối cùng, hết hạn thì cả ba lễ vật bị xóa sạch, phải dâng lại.</p>
<p>Giao dịch bằng đồng tiền sẽ nhận quà đáp là một trong năm món đồ chơi chủ đề, ngẫu nhiên: <b>Cầu Đá, Hổ Vải, Lật Đật Thổ Địa, Trống Lắc, Nút Thắt Trung Hoa</b>. Mỗi món đồ chơi đổi được 2 Đồng Tiền Thần Thoại từ Vua Heo; khi tính lì xì mùa xuân, đồ chơi bên cạnh người chơi còn được tính vào độ Tết. Thổ Địa Công cũng chủ động đối phó ruồi giấm gần đó.</p>
<div class="tt-gallery"><figure><img src="images/npcs/toy-shuttlecock.png" alt="Cầu Đá" loading="lazy"><figcaption>Cầu Đá</figcaption></figure><figure><img src="images/npcs/toy-cloth-tiger.png" alt="Hổ Vải" loading="lazy"><figcaption>Hổ Vải</figcaption></figure><figure><img src="images/npcs/toy-tumbler.png" alt="Lật Đật Thổ Địa" loading="lazy"><figcaption>Lật Đật Thổ Địa</figcaption></figure><figure><img src="images/npcs/toy-rattle-drum.png" alt="Trống Lắc" loading="lazy"><figcaption>Trống Lắc</figcaption></figure><figure><img src="images/npcs/toy-chinese-knot.png" alt="Nút Thắt Trung Hoa" loading="lazy"><figcaption>Nút Thắt Trung Hoa</figcaption></figure></div>`+
TTLD('Có thể nhấp chuột phải hỏi Thổ Địa Công vị trí cụ thể của Linh Đài Phương Thốn Sơn; nếu trong phạm vi ruộng do Thổ Địa Công chăm sóc xuất hiện Cà Sáng, ông cũng chủ động dọn dẹp và để lại chiến lợi phẩm. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')]
];