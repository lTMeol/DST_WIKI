/* ============================================================
   Yêm Đốc Tiên – Tương thích sửa lỗi
   ============================================================ */
/* ===== Yêm Đốc Tiên — trang 6: Tương thích sửa lỗi ===== */
const CPH=['Vấn đề','Nội dung sửa'];
const YDCP=[
['cp-sl','Tương thích và sửa lỗi (兼容修复)',`<p>Trang này ghi lại các bản sửa lỗi crash, lỗi chức năng, giao diện và tương thích mod của Yêm Đốc Tiên.</p>`,[
['cp-crash','Sửa lỗi crash sinh vật',YDTB(CPH,[
['Thanh Ngưu (thú cưỡi)','Sửa lỗi crash khi cưỡi và lỗi không cưỡi được'],
['Chuông Thanh Ngưu','Sửa lỗi crash làm sập máy chủ khi bị Hoa Ăn Thịt hoặc khỉ nhặt; nếu không phải người chơi nhặt thì bắt buộc rơi ra, và nếu thú cưỡi đang có người khác cưỡi thì khi bị nhặt cũng bắt buộc rơi'],
['Giao diện chuông','Sửa lỗi crash khi chuông Thanh Ngưu kiểm tra giao diện chuông bò cũ của bản gốc'],
['Hao Thiên Khuyển Mặt Trăng','Sửa lỗi crash khi tấn công sói non (Warg trẻ)'],
['Mắt Ma Song Sinh','Sửa deadlock logic mất mục tiêu hoặc không chọn được mục tiêu của người chơi sau khi thoát chiến đấu'],
['Định Thân Thuật','Sửa lỗi crash do trạng thái bất thường khi Định Thân Thuật của Tôn Ngộ Không kích hoạt Kỵ Sĩ Năm Ngựa'],
['Niên Thú thần thoại','Sửa lỗi crash do cập nhật chiến đấu còn sót lại khi Niên Thú bị giết']])],
['cp-vp','Sửa chức năng vật phẩm',YDTB(CPH,[
['Đổi skin chổi','Sửa lỗi máy chủ crash do bản cập nhật của Klei, khôi phục chức năng đổi skin vật phẩm riêng của nhân vật thần thoại'],
['Cẩm Lan Ca Sa','Sửa lỗi chức năng chống quái bóng mất tác dụng: khi mặc, quái bóng vẫn xuất hiện và vây quấy rối nhưng không chủ động tấn công; sau khi tấn công quái bóng thì mất hiệu quả này trong 12 giây'],
['Bạch Cốt Phu Nhân','Sửa lỗi giết “Cây Lục Bình Sáng” không rơi chiến lợi phẩm'],
['Cây Chuối','Sửa lỗi Shadow Reaper (Máy Gặt Bóng Tối) thu hoạch Cây Chuối thần thoại không nhận được Lá Chuối'],
['Sinh Tử Bộ','Sửa lỗi bản ghi sinh vật bị xóa sớm'],
['Giao dịch Chuông Thanh Ngưu','Tránh Thanh Ngưu cũ bị kẹt lại và sinh trùng lặp']])],
['cp-ui','Sửa lỗi UI và hiển thị',YDTB(CPH,[
['Tạm dừng khi mở Thiên Thư','Sửa lỗi khi mở Thiên Thư Thần Thoại không dùng được phím tạm dừng của máy chủ'],
['Thanh chế tạo','Sửa phân loại thanh chế tạo vật phẩm riêng nhân vật như Ngọc Thố, Bàn Ti Nương Nương'],
['Bách Bảo Nang','Thêm hiển thị thời gian kích hoạt còn lại của Bách Bảo Nang'],
['Hắc Bạch Song Sinh','Khi hình thái nền chưa hồi sinh, biểu tượng biến thân hiển thị xám tối'],
['Hồ Lô Đan Dược','Vật chứa Hồ Lô Đan Dược thần thoại hỗ trợ kéo thả và đặt lại vị trí']])],
['cp-save','Sửa lỗi lưu trữ và tải',YDTB(CPH,[
['Tải save cũ','Gia cố logic tải, sửa lỗi máy chủ crash khi đọc save do thiếu một số tham số']])],
['cp-xd','Sửa các xung đột khác',YDTB(CPH,[
['Thùng Gấu Chó Cực','Sửa lỗi crash khi mở thùng mà đồng thời thả Nhất Trụ Kình Thiên'],
['Tố Trai (món chay)','Điều chỉnh độ ưu tiên món chay, tránh xung đột với mod khác'],
['Nhà Trúc Xanh','Sửa lỗi bên trong nhà bị mưa đá mặt trăng xâm nhập'],
['Gậy golf','Sửa lỗi crash do tụ lực golf khi đồng thời bật 《Thần Thoại Nhân Vật》 và tắt bù trễ']])]
]],
['cp-kn','Tương thích kỹ năng và mod',`<p>Sửa các vấn đề về tương tác kỹ năng, hiển thị và thông tin khi dùng cùng mod thần thoại.</p>`,[
['cp-kn-gc','Kỹ năng gốc chính thức',`<p>Tương thích tương tác kỹ năng liên quan của các nhân vật chính thức như Maxwell, Willow, Winona, Wendy.</p>`],
['cp-kn-mod','Mod mở rộng lớn và mod nhân vật',YU(['《Đăng Tiên》','《Quỷ Bí Chi Chủ》','《Vĩnh Hằng Tân Giới》','《Cổ Thụ Phồn Hoa》','《Lệ Chỉ Chỉ Vật Ngữ》','《Long Hồn》','《Giá! Rồng Ruồi》','《Nguyệt Duệ Manh Nha》','《Phong Vân Bí Cảnh》','《Marucil (Mã Lộ Tây Nhĩ)》','《Tiểu Khung》','《Bạch》','《Galop (Gia Lạc Phổ)》','《Mèo Cani》','《Rhine (Lai Nhân)》'])],
['cp-kn-hi','Tương thích mod hiển thị và thông tin',YU([
'<b>Prism (Lăng Kính):</b> sửa lỗi mất texture khi bỏ vật phẩm thần thoại vào tủ trưng bày gỗ trắng; có thể đặt lại giỏ tre Ngọc Thố cùng ngoại hình Hạnh Hoa, Nguyệt Quế, Điềm Âm để dùng cho huyễn hóa của Prism.',
'<b>Insight:</b> sửa lỗi mất texture Thiên Thư và hiển thị trống khi dùng cùng; hỗ trợ hiển thị thông tin Cây Nhân Sâm Quả, đồng thời hiển thị thời gian còn lại của tiên vận Thiên Địa Bảo Giám và Giới Tử Thông Đồ.'])]
]],
['cp-faq','Câu hỏi thường gặp và xử lý sự cố (常见问题与排错)',`<p>Bấm vào từng câu hỏi để xem trả lời.</p><div class="bar"><button onclick="document.querySelectorAll('#cp-faq details.tr').forEach(d=>d.open=true)">Mở tất cả</button><button onclick="document.querySelectorAll('#cp-faq details.tr').forEach(d=>d.open=false)">Thu gọn</button></div>`+[
['Q1: Sao ở nhà chặt cây, đánh quái mà lý trí và độ đói đột nhiên tụt mạnh?','Kiểm tra sao đồ của bạn! Chắc chắn bạn đã kích hoạt Tý Thử (rơi gấp đôi trừ lý trí) hoặc Hợi Trư (chiến lợi phẩm nhiều lần trừ độ đói). Thiên đạo không cho ăn không.'],
['Q2: Mình bấm nhầm, bấm [Tán Khứ Tu Vi] sao không có phản ứng?','Đó là thuốc hối hận nghịch thiên cải mệnh! Hồi chiêu dài tới 40 phút thời gian thực, lại cần 1 tờ Cấp Cấp Như Luật Lệnh, hãy suy nghĩ kỹ!'],
['Q3: Sao đêm Cực Âm/Cực Dương, con số sát thương của mình đột nhiên bùng nổ?','Chúc mừng bạn kích hoạt “Cực Hạn Cộng Hưởng”! Gom đủ 6 âm hoặc 6 dương, lại vào đêm trăng non/trăng tròn thì tham số chỉ định của năng lực nhận hệ số cộng hưởng 2,5 lần, không phải vùng nhân độc lập dùng chung!'],
['Q4: Mình là Bàn Ti Nương Nương, sao đột nhiên hết tơ nhện (hết mana)?','Mỗi lần Kim Cục chống hất tung và các khống chế cứng đã hỗ trợ khác sẽ tiêu 5 điểm tơ nhện; đóng băng và buồn ngủ thì miễn nhiễm trực tiếp; trong cửa sổ phản áp 8 giây sau khi thành cục thì không bị trừ tơ. Khi mang theo Định Phong Châu, hất tung và đẩy lùi do Kiên Nhược Bàn Thạch chống, không trừ tơ nhện nữa.'],
['Q5: Mình có 12 điểm Thốn Tâm, có thắp sáng được cả bốn “Tam Hợp Cục” không?','Có thể phủ cơ bản cả bốn cục, nhưng mỗi cục đều phải để ba chi tương ứng mỗi chi sáng một ô, vòng trong và vòng ngoài trộn lẫn được; cùng một chi sáng cả trong lẫn ngoài chỉ tính phủ chi đó. Thành cục yêu cầu sáu ô trong ngoài của cả ba chi trong nhóm đều sáng, nên giới hạn 12 điểm chỉ hoàn thành tối đa hai thành cục.'],
['Q6: Sao sau khi đăng ký và bật mod thì vào game không được/crash luôn?','Nguyên nhân phổ biến nhất là chưa đăng ký mod gốc 《Thần Thoại Thư Thuyết》! Mod này bắt buộc phụ thuộc vào mod gốc mới chạy được.'],
['Q7: Đang chơi bỗng báo lỗi/hỏng save, phải làm sao?','Đừng hoảng! Các chức năng có công tắc thì có thể tắt đi để loại trừ trước; vấn đề không giải quyết được thì có thể kèm nhật ký crash vào nhóm để phản hồi.'],
['Q8: Nhân vật thần thoại gây crash kỹ năng?','Các chức năng liên quan nhân vật thần thoại cần đồng thời thích ứng với cập nhật chính thức, cơ chế nhân vật vốn có và các mod nhân vật khác. Nếu vẫn crash kỹ năng, hãy ghi lại nhân vật, vật phẩm hoặc động tác đang dùng, các mod bật cùng lúc, rồi kèm nhật ký crash vào nhóm phản hồi.'],
['Q9: Một số chức năng mới thêm mình thấy quá mạnh thì sao?','Tùy khẩu vị! Mod gần như đã đặt công tắc cài đặt độc lập cho mọi chức năng mới thêm, thấy không hợp thì tắt đi là được.'],
['Q10: Xác suất nhận [Thốn Tâm Tinh Phách] là bao nhiêu?','Khi ngưng kết Thốn Tâm, xác suất nhận [Thốn Tâm Tinh Phách] tăng dần từ khoảng 5,4% lên 58%. Nếu đến điểm Thốn Tâm thứ 7 vẫn chưa từng nhận được tinh phách thì kích hoạt bảo đảm lần đầu, nhận 1 viên.'],
['Q11: Tôi luyện Cốt Nhận khác vũ khí khác thế nào?','Trong Hỏa Nguyên Tôi Luyện, mỗi lần tôi luyện Cốt Nhận chỉ tăng 6 sát thương vị diện (vũ khí khác là 10), nhưng giới hạn độ bền được nâng lên (tối đa 400), và khi đủ bậc, độ bền về 0 không vỡ mà vào “trạng thái cạn kiệt”: sát thương cơ bản và kỹ năng bị tắt, giữ sát thương vị diện và hút máu, sửa độ bền là khôi phục.'],
['Q12: Ngọc Thố của 《Yêm Đốc Tiên》 có đè lên Ngọc Thố gốc của 《Thần Thoại Thư Thuyết》 không?','Không. Ngọc Thố Tiên Tử là nhân vật làm lại độc lập, tồn tại song song với Ngọc Thố gốc của 《Thần Thoại Thư Thuyết》; thân phận nhân vật, vật phẩm khởi đầu, bản nhạc, dược hiệu và tiến độ nhân vật không đè lên nhau.'],
['Q13: Sao Ngọc Thố khởi đầu chỉ có 《Điền Trung Nhạc》 và không triệu hồi được Thủ vệ Nguyệt Cung?','Chín khúc còn lại cần trình vật phẩm chỉ định cho Hằng Nga để thỉnh giáo. Học xong khúc đầu tiên ngoài khúc ban đầu thì mở 1 thủ vệ; khi tổng số khúc nắm đạt 9 thì giới hạn thủ vệ nâng thẳng lên 3.'],
['Q14: Sao mình dùng Thôn Thiên sau khi Hắc Phong Đại Vương chết mà không xuất hiện Hùng Bi chân thân?','Sai thứ tự rồi. Phải thi triển xong Thôn Thiên để trường hoạt động phủ vị trí chết của Hắc Phong Đại Vương, rồi mới thật sự giết hắn trong trường. Thả bổ sung sau khi chết, tụ lực chưa xong, hay chỉ để gió độn bay vào phạm vi sau đều không kích hoạt được Hùng Bi chân thân.'],
['Q15: Sao sau khi thách đấu Hùng Bi chân thân thất bại, lần sau máu lại thấp hơn?','Máu động của Hùng Bi chân thân đọc số lần thực sự đánh bại Hắc Phong Đại Vương gốc trong vòng này. Bộ đếm đã tăng ngay khi Hắc Phong gốc chết, dù lần đó không chặn được gió độn cũng không hoàn tác; thất bại hồi phong cũng không xóa về 0. Bạn phải giết lại Hắc Phong gốc một lần nữa mới kích hoạt lại được, nên máu sẽ giảm dần theo 24000, 21000, 18000, 15000, 12000. Chỉ sau khi thật sự giết Hùng Bi chân thân thì bộ đếm mới về 0.'],
['Q16: Sao Tích Hỏa Tráo không dập tắt hết mọi ngọn lửa trong phạm vi?','Khi Tích Hỏa Tráo mở ra sẽ xóa lửa trên người chơi và tùy tùng được bảo vệ; còn lửa sẵn có trên công trình, tài nguyên thì vào “Thúc Diễm”: tạm ngừng cháy rụi, ngừng lan truyền, và vẫn tiếp tục gây bỏng cho mục tiêu gần. Chủ động chọn “Thu lại” thì sự cháy và âm ỉ đủ điều kiện trong tráo sẽ tắt; chỉ khi mục tiêu rời tráo, hoặc tráo bị mất hiệu lực thụ động do hết độ bền, chết, rơi khỏi tay... thì lửa gốc mới tiếp tục cháy từ thời gian còn lại. Sau khi mở còn có thể qua “Dẫn Diễm” dẫn lửa sẵn có sang kẻ địch dễ cháy.'],
['Q17: Mình xuống giếng ở miệng giếng, sao dưới đáy không có Hoàng Phong Đại Thánh?','Hoàng Phong Đại Thánh chỉ bị trói dưới đáy giếng khi bão cát mùa hè đang thổi. Không có bão cát vẫn xuống giếng được nhưng dưới giếng trống không; trong thời gian hồi chiêu phục tô cũng không xuất hiện. Ngoài ra, miệng giếng phải được “treo dây” trong bão cát mùa hè trước, treo xong thì mùa nào cũng xuống giếng được.'],
['Q18: Mình đốt cạn một giếng thần thoại mà không thành lối vào giếng cạn?','Chỉ giếng thần thoại sát hồ ốc đảo (cách tâm hồ trong khoảng 19 ô tường, tức khoảng 5 ô đất) mới được, và cả thế giới chỉ có một lối vào. Cách hồ quá xa, giếng trong hang động dưới đất, hoặc thế giới đã có sẵn lối vào thì chỉ là một giếng thần thoại khô thông thường.'],
['Q19: Tam Muội Trấn Ách Kỳ đã cắm rồi sao không có hiệu quả gì?','Tam Muội Trấn Ách Kỳ phải lắp Tị Trần Đan, Tị Hàn Đan, Tị Thử Đan hoặc Định Phong Châu làm lõi pháp, và lõi pháp còn năng lượng mới có hiệu lực. Hai lá cờ cách nhau trong vòng 30 ô tường (7,5 ô đất) thì chỉ một lá làm cờ chính hiệu lực, lá còn lại ở trạng thái chờ; một số khu vực đặc biệt cũng không chịu hiệu quả cờ. Bạn có thể kiểm tra chiến kỳ: sẽ nhắc “thiếu lõi pháp” hoặc “lõi lực cạn”.'],
['Q20: Mang Định Phong Châu mà sao vẫn bị đánh ra động tác bị thương?','Định Phong Châu mang đúng cách và còn năng lượng thì “Kiên Nhược Bàn Thạch” chống hất tung, đẩy lùi, nhưng vẫn giữ động tác bị đánh thông thường; các hiệu ứng không dịch chuyển như bị nuốt, bị dính không thuộc phạm vi chống, cũng không giảm sát thương. Ngoài ra, nếu để Định Phong Châu trong hồ lô, rương hay vật chứa lồng nhiều tầng thì không có hiệu lực.']
].map(q=>DT(q[0],'',`<p>${q[1]}</p>`)).join('')+`<p>Cảm ơn sự ủng hộ và động viên của từng người chơi đã đăng ký. Chúc các bạn chơi vui vẻ với Yêm Đốc Tiên, võ vận hanh thông, tận hưởng hành trình thần thoại!</p><p class="mu">— Hàm Ngư &amp; Đại Trư Đề Tử kính thư</p>`,[]]
];
