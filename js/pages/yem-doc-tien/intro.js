/* ============================================================
   Yêm Đốc Tiên – Giới thiệu mod (YDFEAT, YDADJ, YDMEDIA, YDS)
   ============================================================ */
const YDFEAT=[
['Nhân vật tinh quái','Có đầy đủ lối chơi và trận đánh trùm của <b>Ngọc Thố Tiên Tử</b>, <b>Hắc Phong Đại Vương – chân thân Hùng Bi</b> và <b>Hoàng Phong Đại Thánh</b>.'],
['Hệ thống Nguyên Thìn Kiếp Vận','Cơ chế cốt lõi: thức tỉnh <b>Thần thông Thập Nhị Nguyên Thìn</b>.'],
['Tứ Tượng Tam Hợp Cục','Cường hóa sâu cho hình thái <b>Nhện Hoàng</b> (giai đoạn đầu chỉ mở cho Bàn Ti Nương Nương).'],
['Vật phẩm &amp; pháp bảo','Vật phẩm riêng: Bồ Đoàn, Thốn Tâm Tinh Phách, Hỷ Chu Thiên La Y, Thôn Thiên Tử Kim Hồ Lô, Thiên Địa Bảo Giám, Tu Di Ngọc Tịnh Bình, Tích Hỏa Tráo, Định Phong Châu, Tam Muội Trấn Ách Kỳ…'],
['Hệ thống Hỏa Nguyên Tôi Luyện','Nâng cấp vũ khí và giáp theo “vị diện”.'],
['Tăng cường nhân vật thần thoại','Tăng cường riêng cho toàn bộ nhân vật thần thoại.'],
['Tối ưu trải nghiệm &amp; tiện ích','Kho thóc thông minh, Bách Bảo Nang — túi trăm báu, luyện đan bằng Bát Quái Lô…'],
['Làm mới Thị trấn Gấu Trúc','Nâng cấp Tiệm Thanh Trúc; thêm Trấn Phiếu, Thượng Tiên, Bàn Trướng, Lập Khế, giá động và Giáp Mộc Thiêm.'],
['Cải tổ Tụ Bảo Bồn','Làm lại trải nghiệm quay thưởng: kho thưởng theo giai đoạn, mức bảo đảm theo tầng, Định Nguyện Khí Vận và gói Thốn Tâm Cơ Duyên.'],
['Tương thích &amp; sửa lỗi crash','Sửa lỗi và điều chỉnh riêng cho nhân vật thần thoại, kỹ năng vật phẩm thông dụng và thao tác khi chơi mạng.']
];
const YDADJ=[
['V2.7.3','Hắc Bạch Vô Thường · Âm Dương Phân Ty','Thêm lối chơi phân thân (bật trong cài đặt): ở thanh kỹ năng, chuột trái để “lưu thân”, chuyển Hắc/Bạch là đi lại giữa hai thân, có thể đóng ở mặt đất và hang động; chuột phải thu thân bất cứ lúc nào; một thân chết thì hồn về thân kia.','Âm Dương Phân Ty, lưu thân, thu thân'],
['V2.7.0','Tương thích mod','Vật phẩm kỹ năng của Galop, mèo Cani và Rhine được tích hợp tương thích với kỹ năng thần thoại; vật chứa Hồ Lô Đan Dược thần thoại hỗ trợ kéo thả và đặt lại vị trí.','Vòng chọn kỹ năng, kéo thả vật chứa'],
['V2.7.0','Sửa lỗi thần thoại','Sửa crash do cập nhật chiến đấu còn sót sau khi Niên Thú bị giết, lỗi lưu Sinh Tử Bộ, lỗi Lão Quân cho Thanh Ngưu nhiều lần và các lỗi chi tiết khác.','Niên Thú, Sinh Tử Bộ, Chuông Thanh Ngưu'],
['V2.6.0','Nâng cấp năng lực Thập Nhị Nguyên Thìn','Cả mười hai thần thông đều được cập nhật, có lối chơi mới về thu thập tài nguyên, phòng hộ, liên kích bùng nổ và chiến kỹ chủ động; giao diện thêm tám gợi ý tiến độ kỹ năng.','Thập Nhị Nguyên Thìn, nâng cấp năng lực, gợi ý tiến độ'],
['V2.6.0','Tứ Tượng Tam Hợp Cục','Cục cơ bản đổi thành ba chi mỗi chi sáng một ô, cho phép trộn Nguyên Thìn vòng ngoài với Trùng Lâu vòng trong; sáng đủ sáu ô thì vào trạng thái thành cục.','Phủ ba chi, trộn trong–ngoài, thành cục'],
['V2.5.21','Tu Di Ngọc Tịnh Bình','Mưa thường giờ chỉ bổ sung 100 điểm nước đầu: rơi xuống đất sẽ tích nước chậm, khi nước dưới 20 điểm có thể “thu mưa” mang theo đến 100 điểm; điểm hóa phải giữ 100 điểm nước, và có thêm cảnh báo thiếu nước.','Nước phân tầng, thu mưa, cảnh báo điểm hóa'],
['V2.5.17','Công dụng mới của pháp bảo','Thôn Thiên Tử Kim Hồ Lô có thể dùng bánh xe Oánh Nguyệt để “nuốt trăng”; “Nhuận Vật Vô Thanh” của Tu Di Ngọc Tịnh Bình giờ tẩy được chướng độc trong phạm vi.','Thôn Nguyệt, bánh xe Oánh Nguyệt, tẩy chướng độc'],
['V2.5.17','Hoàn thiện Ngọc Thố','Thủ vệ Nguyệt Cung có thể thu về bằng “quy nguyệt”; khúc 《Điền Trung Nhạc》 đầy dây có thêm hái nhanh; âm lượng tỳ bà và âm phản hồi khi chơi có thể chỉnh riêng trên máy.','Thủ vệ Nguyệt Cung, Điền Trung Nhạc, âm lượng tỳ bà'],
['V2.5.17','Rừng trúc và Thị trấn Gấu Trúc','Trúc có thể dùng xịt chống mục để niêm sáp; đơn thu mua Trấn Phiếu đổi thành lô cố định, thêm nhãn số phiếu và khế ước.','Niêm sáp rừng trúc, lô cố định, nhãn Trấn Phiếu'],
['V2.5.12','Sửa Dương Tiễn và Na Tra','Sửa lỗi nút mục tiêu của Triển Sí Phi Ưng hiển thị không khớp tọa độ thật trên bản đồ; sửa lỗi Càn Khôn Quyển khi bay rơi xuống nước hoặc rơi vào hư không.','Dương Tiễn, mục tiêu bản đồ, Càn Khôn Quyển'],
['V2.5.12','Hoàn thiện Vô Thường','Bỉ Ngạn Hoàn Dương thêm giới hạn hồn phách dùng mỗi lần; Chiêu Hồn Phiên giờ có thể tiêu 5 thiện hồn để phát động Hỏa Nguyên U Minh.','Bỉ Ngạn Hoàn Dương, Chiêu Hồn Phiên, Hỏa Nguyên U Minh'],
['V2.5.12','Tối ưu Thanh Trúc Châu','Cải thiện thêm thuật toán tối ưu rừng trúc ở Thanh Trúc Châu.','Thanh Trúc Châu, rừng trúc, tối ưu hiệu năng'],
['V2.5.9','Hùng Bi chân thân','Phần thưởng khi giết thêm 8 lông gấu; da gấu và lông gấu đều là phần thưởng thường, chịu ảnh hưởng của nhân đôi vật rơi.','Thưởng BOSS, lông gấu'],
['V2.5.8','Ngọc Thố Tiên Tử','Công tắc nhân vật mặc định bật; khi 《Dạ Lan Dao》 đầy dây, các con vật nhỏ ngủ được như chim, thỏ cũng sẽ ngủ.','Công tắc nhân vật, Dạ Lan Dao'],
['V2.5.8','Tu Di Ngọc Tịnh Bình','Khi nước trên 100 điểm không còn hiện “Thu Nhiếp Thiên Tượng” mà đổi thành “Nhuận Vật Vô Thanh”, tránh trừ nhầm tinh thần hoặc chiếm lượt thiên tượng của giai đoạn.','Chống thao tác nhầm, thu nhiếp thiên tượng'],
['V2.5.0','Nguyên Thìn Kiếp Vận','Hoàn thiện dữ liệu Nguyên Thìn, thời gian hồi kỹ năng và độ ổn định khi lưu sau khi đổi nhân vật.','Nguyên Thìn, hồi chiêu, lưu khi đổi nhân vật'],
['V2.5.0','Biểu tượng bản đồ','Hoàn thiện hiển thị biểu tượng như Thiên Địa Bảo Giám, bổ sung hiển thị động trên bản đồ cho trạng thái “thần du” và bảo giám chờ lấy lại.','Biểu tượng bản đồ, định vị pháp bảo'],
['V2.5.0','Tu Di Ngọc Tịnh Bình','Giới hạn nước tăng lên 200, chỉ có thể nạp qua “Thu Nhiếp / Thu Tận Thiên Tượng” từ tuyết rơi, mưa axit trong hang và mưa đá trăng; bổ sung quy tắc thúc sinh Cây Nhân Sâm Quả và điểm hóa đơn thể.','Thu nhiếp thiên tượng, lượng nước, điểm hóa'],
['V2.5.0','Cải tổ Tụ Bảo Bồn','Kết thúc giai đoạn thử nghiệm và chính thức chuyển vào mod chính, thống nhất kho thưởng theo giai đoạn, mức bảo đảm theo tầng, bảo vệ vật phẩm giá trị thấp, Thiên Địa Bảo Giám định nguyện và gói Thốn Tâm Cơ Duyên.','Chính thức chuyển, kho thưởng, bảo đảm, định nguyện'],
['V2.5.0','Thị trấn Gấu Trúc và Trấn Phiếu','Tầng kinh doanh của thị trấn chính thức chuyển vào mod chính và nối với tài khoản Trấn Phiếu sẵn có, thống nhất Thượng Tiên, Bàn Trướng, Lập Khế, giá động và Giáp Mộc Thiêm.','Chính thức chuyển, Trấn Phiếu, Lập Khế, kinh doanh'],
['V2.5.0','Xác suất rễ Cây Nhân Sâm Quả','Gỡ cấu hình cũ “Cây Nhân Sâm Quả: xác suất tìm báu” và các mức tùy chỉnh 10%/30%/50%; trạng thái thường dùng quy tắc gốc thần thoại, việc tăng chủ động do Giáp Mộc Thiêm của Tiệm Bát Quái cung cấp.','Gỡ cấu hình cũ, rễ cây, Giáp Mộc Thiêm'],
['V2.5.0','Hệ thống nhập hàng cũ của Tiệm Thanh Trúc','Gỡ bảng hàng riêng và logic bổ sung hàng tần suất cao của “Làm mới Tiệm Thanh Trúc” cũ; danh sách hàng mở rộng và đổi hàng chủ động nay do hệ thống Trấn Phiếu của Thị trấn Gấu Trúc cung cấp thống nhất.','Gỡ hệ cũ, Trấn Phiếu, Thượng Tiên']
];
const YDADJT=`<div class="bar"><input id="ydq" type="search" placeholder="Tìm trong các điều chỉnh (vd: Ngọc Thố, Bình, Trấn Phiếu)…" oninput="ydFilter()"><span class="mu" id="ydcount"></span></div>
<div class="fcs"><span class="mu">Phiên bản:</span>${[['','Tất cả'],['V2.7','V2.7.x'],['V2.6','V2.6.0'],['V2.5','V2.5.x']].map((x,i)=>`<button class="fc${i?'':' on'}" data-g="yd" data-k="${x[0]}" onclick="ydChip(this)">${x[1]}</button>`).join('')}</div>
<div class="tw"><table><tr><th>Phiên bản</th><th>Mục</th><th>Nội dung điều chỉnh</th><th>Từ khóa</th></tr>${YDADJ.map(r=>`<tr data-yd data-v="${r[0]}" data-n="${EA((r.join(' ')).toLowerCase())}"><td><b>${r[0]}</b></td><td><b>${r[1]}</b></td><td>${r[2]}</td><td class="mu">${r[3]}</td></tr>`).join('')}</table></div>`;
const YDMEDIA={
'ys-sd':YDV('yuanchen-chart','Sao đồ Nguyên Thìn Kiếp Vận'),
'ys-35':YDV('yuanchen-completed-trial','Hoàn thành thử thách Kiếp Vận'),
'ys-tn':YDV('yuanchen-rat','Tý Thử · Ngũ Quỷ Bàn Vận'),
'ys-sn':YDV('yuanchen-ox','Sửu Ngưu · Trì Độn Thống Giác'),
'ys-dh':YDV('yuanchen-tiger','Dần Hổ · Mãnh Hổ Xé Toạc'),
'ys-mt':YDV('yuanchen-rabbit','Mão Thố · Giảo Thố Thoát Thân'),
'ys-tl':YDV('yuanchen-dragon','Thìn Long · Long Lân Thừa Tai'),
'ys-ts':YDV('yuanchen-snake','Tỵ Xà · Xà Đồng Song Sinh'),
'ys-nm':YDV('yuanchen-horse','Ngọ Mã · Tuyệt Ảnh Đột Tập'),
'ys-md':YDV('yuanchen-goat','Mùi Dương · Miên Tinh Hộ Thể'),
'ys-tm':YDV('yuanchen-monkey','Thân Hầu · Tá Giả Tu Chân'),
'ys-dk':YDV('yuanchen-rooster-insight','Dậu Kê · Kim Kê Phá Hiểu'),
'ys-tc':YDV('yuanchen-dog','Tuất Cẩu · Tử Sĩ Cuồng Phệ'),
'ys-hz':YDV('yuanchen-pig','Hợi Trư · Tham Lam Chi Phệ'),
'ys-sc-m':YDV('pansi-wood','Mộc Cục · Triền Sinh Liệp Thủ'),
'ys-sc-k':YDV('pansi-metal','Kim Cục · Bất Hoại Kim Cương'),
'ys-sc-h':YDV('pansi-fire','Hỏa Cục · Viêm Trụy Hạch Bạo'),
'ys-sc-t':YDV('pansi-water','Thủy Cục · Chu Sào Mẫu Hoàng'),
'ys-hn-tt':YDV('fire-tempering','Thao tác tôi luyện bằng Hỏa Nguyên')
};
const YDS=[
['yd-gt','Giới thiệu mod',`<figure class="fig yd-hero"><img class="yd-ban" src="img/yd/hero-default.jpg" data-f="https://yanduxian.cn/images/hero-default.jpg" data-rm="1" alt="Ảnh bìa Yêm Đốc Tiên — cảnh tuyết" onerror="ydImg(this)"><figcaption>Ảnh bìa mod</figcaption></figure>
<div class="yd-slogan"><p>Ba mươi lăm kiếp vận đan xen, mười hai Nguyên Thìn hạ phàm, linh đài phương thốn hiển chân tâm.</p><p>Ngọc Thố gảy đàn, Hắc Phong cuốn ngược — hai chương nhân vật và tinh quái chính thức ra mắt.</p></div>
<p><b>Yêm Đốc Tiên</b>  là mod mở rộng, tối ưu và sửa lỗi <b>không chính thức</b>, yêu cầu có mod gốc <b>《Thần Thoại Thư Thuyết》</b> . Mod giữ nguyên trải nghiệm chính của thế giới thần thoại, đồng thời đã bắt đầu làm lại các chương nhân vật và quái vật. Mod cũng tiếp tục hoàn thiện hệ thống Nguyên Thìn Kiếp Vận, pháp bảo, cơ chế nhân vật và trải nghiệm chơi mạng.</p>
<div class="yd-links"><a href="${YDL.steam}" target="_blank" rel="noopener">🛠 Steam Workshop</a><a href="${YDL.qq}" target="_blank" rel="noopener">💬 Nhóm QQ 1046023996</a></div>`],
['yd-ct','Tính năng cốt lõi',`<div class="yd-feat">${YDFEAT.map(f=>`<div><b>${f[0]}</b><p>${f[1]}</p></div>`).join('')}</div>
<div class="tip"><b>Lưu ý cập nhật: </b>Cải tổ Tụ Bảo Bồn và Làm mới Thị trấn Gấu Trúc nay do mod chính Yêm Đốc Tiên cung cấp trực tiếp. Cấu hình của các mod độc lập với nhau, nên công tắc cũ trong “Hồ Thiên Bách Hí” sẽ <b>không</b> được chuyển sang — hãy bật/tắt lại hai mục này trong phần cài đặt của mod chính. Cấu hình cũ “Làm mới Tiệm Thanh Trúc” và “Cây Nhân Sâm Quả: xác suất tìm báu” đã bị gỡ bỏ, mod không còn đọc các thiết lập cũ đó.</div>`],
['yd-v270','Điểm chính V2.7.0',YDTB(['Mục','Thay đổi','Người chơi cần lưu ý'],[
[YDPIC('xydztz_huangfeng','Hoàng Phong Đại Thánh')+'Hoàng Phong Đại Thánh','Thêm trận đánh với yêu vương giếng cạn: đốt cạn giếng thần thoại bên hồ ốc đảo, vào mùa hè khi có bão cát thì buộc dây xuống giếng, xé bùa để thả Hoàng Phong Đại Thánh ra; có Châu Trận, Ảnh Trận và thử thách phá cảnh.','Chỉ xuất hiện trong bão cát mùa hè; chu kỳ hồi sinh mặc định 20 ngày, có thể đổi trong cài đặt mod.'],
[YDPIC('xydztz_artifact_dfz','Định Phong Châu')+'Định Phong Châu','Mỗi lần đánh bại Hoàng Phong Đại Thánh chắc chắn nhận 1 viên; mang theo người nhận hiệu ứng “Kiên Nhược Bàn Thạch”, chống bị hất tung.','Chỉ tiêu hao năng lượng theo thời gian mang theo, nạp bằng đá quý cam; tạm dừng khi cất trong hồ lô.'],
[YDPIC('xydztz_sanmeizheneqi_sangugangcha','Tam Muội Trấn Ách Kỳ')+'Tam Muội Trấn Ách Kỳ','Gõ lá cờ chiến trong giếng có xác suất nhận được; dùng ba loại đan Tị Trần, Tị Hàn, Tị Thử hoặc Định Phong Châu làm lõi, cắm xuống đất che chở người chơi trong phạm vi 15 ô tường (khoảng 4 ô đất).','Chỉ lá cờ chính đang có hiệu lực mới tiêu hao lõi pháp, tốc độ tiêu hao gấp 2 lần.'],
['Nâng cấp pháp bảo','Thôn Thiên Tử Kim Hồ Lô khi bỏ Định Phong Châu vào sẽ mở lực hút thứ hai, có thể thu hoạch cây trồng, thực vật hoang dã và ném trả vật nặng; “Dẫn Diễm” của Tích Hỏa Tráo có thể đốt cạn giếng và châm lửa kẻ địch.','Lực hút thứ hai của hồ lô không tiêu hao năng lượng Định Phong Châu.'],
['Cập nhật nhân vật','Ngọc Thố sau khi thông cả mười khúc có thể “chuyển khúc” khi tấu dài và vào trạng thái “nhập định”; kỹ năng Hỏa Cục, Thủy Cục của Bàn Ti đổi thành hai kỹ năng chủ động “Viêm Bạo” và “Hoán Chu”.','Dây Bàn Ti và giăng lưới trở lại hiệu ứng gốc của bản thần thoại.']])],
['yd-v260','Điểm chính V2.6.0',YDTB(['Mục','Thay đổi','Người chơi cần lưu ý'],[
['Tài nguyên và thu hoạch','Tý Thử nhận thu hoạch nhiều lần khi hái lượm; Thân Hầu có cơ hội hoàn lại nguyên liệu khi chế tạo đồ hoặc xây dựng; Hợi Trư tự tay giết địch sẽ tích Tham Dục và tăng hệ số chiến lợi phẩm.','Ba năng lực lần lượt tiêu hao tinh thần (lý trí), chịu hình phạt “thâu thiên” hoặc tiêu hao độ đói, nên đừng chỉ nhìn phần thưởng thêm.'],
['Chiến đấu và sinh tồn','Sửu Ngưu, Thìn Long, Mùi Dương cho các dạng phòng hộ khác nhau, Mão Thố lo việc thoát thân khi nguy kịch; Dần Hổ, Tỵ Xà, Ngọ Mã, Dậu Kê cho liên kích, dễ thương, xung phong và nhìn thấu; Tuất Cẩu dùng để hút kẻ địch và giảm sát thương.','Mỗi năng lực có cách kích hoạt và cái giá riêng, số liệu cụ thể xem mục “Thần thông Thập Nhị Nguyên Thìn”.'],
['Điều chỉnh Tứ Tượng Tam Hợp Cục','Cục cơ bản đổi thành mỗi trong ba chi tương ứng phải sáng ít nhất một ô; Nguyên Thìn vòng ngoài và Trùng Lâu vòng trong có thể trộn lẫn; sáng đủ sáu ô trong và ngoài thì thành cục.','Một địa chi sáng cả ô trong lẫn ô ngoài chỉ tính cho chi đó, không thay được chi khác.']])+`<div class="tip"><b>Gợi ý giao diện: </b>Dần Hổ, Mão Thố, Tỵ Xà, Ngọ Mã, Mùi Dương, Thân Hầu, Tuất Cẩu và Hợi Trư sẽ hiện tiến độ hoặc thời gian hồi chiêu của kỹ năng. Bạn có thể ẩn trong <b>Màn hình tạm dừng → Tùy chọn → Yêm Đốc Tiên → Trạng thái Nguyên Thìn</b>. Tắt hiển thị không làm tắt kỹ năng.</div>`],
['yd-v250','Tóm tắt nội dung chính V2.5.0',YDTB(['Mục','Nội dung mới','Từ khóa'],[
[YDPIC('xydztz_yutu_winter','Ngọc Thố Tiên Tử')+'Ngọc Thố Tiên Tử','Nhân vật làm lại do Yêm Đốc Tiên tạo, tồn tại song song với Ngọc Thố gốc của Thần Thoại Thư Thuyết; có mười khúc đàn, bảy vị giã thuốc, Thủ vệ Nguyệt Cung, hệ sinh thái tộc Thố và hệ thống đằng vân độn thổ.','Nhân vật, tỳ bà, giã thuốc, thủ vệ'],
[YDPIC('xydztz_blackbear_trueform','Hùng Bi chân thân')+'Hùng Bi chân thân','Trận đánh trùm kích hoạt sau khi dùng Thôn Thiên Tử Kim Hồ Lô cắt đứt độn pháp của Hắc Phong; có Thạch Chướng, Hắc Toàn Phong, Đảo Quyển Xung Sơn và Vạn Tự Hắc Phong Hống.','Quái vật, BOSS, đánh theo giai đoạn'],
[YDPIC('xydztz_artifact_bhz','Tích Hỏa Tráo')+'Tích Hỏa Tráo','Pháp bảo thưởng riêng của Hùng Bi chân thân, mở lĩnh vực chống lửa, thu lửa giữ củi, và có thể dẫn lửa đánh địch.','Pháp bảo, tích hỏa, thúc diễm, dẫn diễm']])],
['yd-dc','Điều chỉnh gần đây',YDADJT],
['yd-tq','Yêu cầu tiên quyết',`<ul><li><b>Bắt buộc đăng ký và bật mod gốc 《Thần Thoại Thư Thuyết》</b> .</li><li>Nhóm QQ phản hồi, trao đổi: <a href="${YDL.qq}" target="_blank" rel="noopener">1046023996</a></li><li>Phiên bản: <b>2.7.4</b></li></ul>
<p>Cảm ơn sự ủng hộ và động viên của từng người chơi đã đăng ký. Chúc các bạn chơi vui vẻ với Yêm Đốc Tiên, võ vận hanh thông, tận hưởng hành trình thần thoại!</p><p class="mu">— Hàm Ngư &amp; Đại Trư Đề Tử kính thư</p>
<div class="tip"><b>Ghi chú dịch: </b>Một số tên pháp bảo và kỹ năng là tên riêng trong game nên được dịch theo âm Hán Việt. Bản tiếng Việt chính thức của game (nếu có) có thể gọi khác.</div>`]
];
