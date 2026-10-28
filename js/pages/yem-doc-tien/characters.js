/* ============================================================
   Yêm Đốc Tiên – Nhân vật tinh quái
   ============================================================ */
/* ===== Yêm Đốc Tiên — trang 3: Nhân vật tinh quái ===== */
const YDCH=[
['tq-tq','Tổng quan',`<p>Mục này ghi lại đầy đủ lối chơi của nhân vật và trùm tinh quái trong mod, hiện gồm: <b>Ngọc Thố Tiên Tử</b>, <b>Hắc Phong Đại Vương · Hùng Bi chân thân</b> và <b>Hoàng Phong Đại Thánh</b>.</p>
<div class="yd-gal">
<a onclick="sc('tq-nt')">${YFG('xydztz_yutu_winter','Ngọc Thố Tiên Tử')}</a>
<a onclick="sc('tq-hb')">${YFG('xydztz_blackbear_trueform','Hùng Bi chân thân')}</a>
<a onclick="sc('tq-hp')">${YFG('xydztz_huangfeng','Hoàng Phong Đại Thánh')}</a>
</div>
<p class="mu">Nguồn: trang 《Nhân vật tinh quái》 (人物精怪) của Yêm Đốc Tiên — <a href="https://yanduxian.cn/characters/" target="_blank" rel="noopener">yanduxian.cn/characters</a>.</p>`],

['tq-nt','Ngọc Thố Tiên Tử (玉兔仙子)',`${YFG('xydztz_yutu_winter','Ngọc Thố Tiên Tử')}
${YSL(['Nhẹ gảy chậm vê, mười khúc tùy tâm.','Chày ngọc sinh hương, bảy vị cứu người.','Tiên thố linh lung, thỏ khôn ba hang.','Thủ vệ Nguyệt Cung, nghe dây mà đi.'])}`,[

['tq-nt-tp','Thân phận nhân vật',YU([
`Ngọc Thố là nhân vật <b>làm lại</b> của Yêm Đốc Tiên, không phải bản vá đè lên Ngọc Thố gốc của 《Thần Thoại Thư Thuyết》.`,
`Ngọc Thố mới tồn tại song song với Ngọc Thố gốc, hai nhân vật có thân phận, vật phẩm, tiến độ và hệ kỹ năng độc lập.`,
`Định vị cốt lõi của Ngọc Thố mới là <b>Quảng Hàn Ty Nhạc</b> (nhạc sĩ cung Quảng Hàn): dùng <b>Doanh Nguyệt Tỳ Bà</b> liên tục tạo BUFF cho đội, dùng <b>Chày Ngọc Giã Thuốc</b> chuẩn bị dược hiệu cho nhiều người, và có thể dùng <b>Thủ vệ Nguyệt Cung</b> để hiện thực hóa lợi ích.`,
`<b>Mở nhân vật:</b> cài đặt mod của máy chủ mặc định mở Ngọc Thố. Khi tắt, Ngọc Thố không xuất hiện trong danh sách chọn và đổi nhân vật.`
])+YN('Đừng tắt giữa chừng trong thế giới đã có nhân vật Ngọc Thố.')],

['tq-nt-tt-cb','Thuộc tính cơ bản',YDTB(['Thuộc tính','Số liệu / hiệu quả'],[
['Máu','150'],['Đói','150'],['Lý trí','120'],['Hệ số sát thương','1,0'],['Ăn uống','Ăn chay'],
['Ban đêm và hào quang tiêu cực','Hệ số mất lý trí 0,75'],
['Giữ ấm','60 điểm giữ ấm mùa đông'],
['Thích nghi Nguyệt Đảo','Di chuyển nhẹ nhàng hơn trên đất thiên thạch Nguyệt Đảo'],
['Nguyệt Linh bảo hộ','Vẫn vào được trạng thái khải minh, nhưng Nguyệt Linh thường không chủ động tấn công Ngọc Thố'],
['Khéo tay','Chế tạo nhanh hơn, bù bằng độ đói; không gồm cường hóa may vá của bản cũ']])+
YU([
`<b>Ưa cà rốt:</b> cà rốt sống là món yêu thích, lợi ích đói tăng lên khoảng 15; cà rốt sống và chín hồi thêm 5 lý trí, hạt cà rốt không được hưởng.`,
`<b>Vật phẩm khởi đầu:</b> 1 Doanh Nguyệt Tỳ Bà và 1 Chày Ngọc Giã Thuốc, cả hai chỉ Ngọc Thố nhặt được; khỉ, Krampus và khỉ hải tặc không trộm được, rơi xuống nước cũng không rớt.`
])],

['tq-nt-tkn','Thanh kỹ năng',`<p>Ngọc Thố có thanh kỹ năng riêng, gom các lối vào: giã thuốc, chế độ diễn tấu, thủ vệ Nguyệt Cung, độn thổ, đằng vân và Giảo Thố Tam Quật.</p>`+YU([
`Thanh kỹ năng tự hiện nút theo bản nhạc, tư cách thủ vệ, trạng thái mở khóa đằng vân và số lần Tam Quật.`,
`Có thể chọn hiện hoặc ẩn trong <b>“Màn hình tạm dừng → Cài đặt → Yêm Đốc Tiên”</b>, và đổi ba cỡ chuẩn, lớn, nhỏ.`,
`Thanh kỹ năng kéo được, vị trí lưu riêng trên máy, nhưng không có chức năng đổi hướng sắp xếp.`,
`Nút tỳ bà khi chưa diễn tấu dùng để chuyển <b>diễn tấu thường / trường tấu</b>, không phải phím tắt bài nhạc; trạng thái trường tấu hiện “∞”. Khi trong trường tấu sau khi thông đủ mười khúc mà đủ điều kiện, nút này đổi thành lối vào “chuyển khúc”.`
])],

['tq-nt-tb','Doanh Nguyệt Tỳ Bà: Mười khúc tùy tâm',`<p>Tỳ bà <b>không cần trang bị</b>, nhấp chuột phải trong ô đồ hoặc ba lô để mở bánh xe bài nhạc kiểu chính thức, chọn bài rồi vào diễn tấu theo nhịp; đang cưỡi thú thì không mở được.</p>`+YDTB(['Mục','Quy tắc'],[
['Tiêu hao mở khúc','5 điểm đói'],
['Tiêu hao mỗi tiết','Sau mỗi tiết kết toán tiêu 1 điểm đói, ba bậc hoàn hảo, thường, thất bại tiêu hao như nhau'],
['Thiếu đói','Rơi vào đói hoặc không trả nổi tiêu hao tiết thì tự thu khúc'],
['Thao tác','Nhập phím mũi tên theo gợi ý (mặc định WASD), khi dấu trăng vào vùng phán định thì bấm phím hành động (mặc định cách)'],
['Độ khó bản nhạc','Bốn bậc lần lượt 3 phím, 4 phím, 5 phím và 5 phím khó'],
['Hoàn hảo','Đúng hết hướng và trúng cửa sổ hoàn hảo'],
['Thường','Sai 1 hướng, hoặc phím hành động chỉ trúng cửa sổ thường'],
['Thất bại','Không bấm phím hành động, bấm ra ngoài cửa sổ, hoặc sai quá 1 hướng'],
['Biến đổi nhạc thế','Hoàn hảo +2; thường không đổi; thất bại -2'],
['Thần Hợp','Nhạc thế đạt 4 thì vào; xuống dưới 4, dừng tấu hoặc đổi bài là gỡ ngay, tạm dừng khi mở bánh xe chuyển khúc'],
['Mãn Huyền','Nhạc thế đạt 6 và tiết đó hoàn hảo thì kích hoạt'],
['Phạm vi tác dụng','Khúc bạn, khúc địch và Lưu Thủy Vô Tình đều 25 ô tường (khoảng 6 ô đất); mỗi tiết hợp lệ chăm sóc cây trồng trong 8 ô tường']])+
YH4('Diễn tấu thường và trường tấu')+YU([
`Diễn tấu thường giới hạn nhạc thế 6, kích hoạt Mãn Huyền xong thì tự thu khúc.`,
`Giới hạn nhạc thế của bài đầu khi trường tấu là 8; lần đầu Mãn Huyền ở mức 6 rồi tiếp tục diễn tấu; chuyển khúc thành công thì giới hạn của lần trường tấu liên tục này nâng lên 10, thu khúc thì về lại.`,
`Trường tấu từ 6 lên 8 chỉ vào đỉnh, không thưởng lại; sau Mãn Huyền lần đầu, khi nhạc thế trước kết toán đã đạt 8 trở lên mà đánh hoàn hảo thì mới kết toán Mãn Huyền lần nữa.`,
`Trường tấu sai khiến nhạc thế xuống dưới 8 thì phải leo lại trên 8 rồi đánh hoàn hảo mới phát lại Mãn Huyền.`,
`Sau khi bắt đầu diễn tấu thì khóa chế độ, không đổi tạm giữa chừng được.`])+
YH4('Chuyển khúc (thông đủ mười khúc)')+YU([
`Khi đã học đủ mười khúc và đang trường tấu, hoàn thành một tiết hoàn hảo hoặc thường mà nhạc thế sau kết toán không dưới 8, nút tỳ bà trên thanh kỹ năng hiện “Chuyển khúc”, nhấp để mở bánh xe bài nhạc (bài hiện tại bị xám).`,
`Mở bánh xe xong, âm thanh bài gốc và động tác diễn tấu vẫn giữ; tiết đang dở bị hủy, không thưởng không phạt, nốt nhạc chưa nhặt trên đất biến mất.`,
`Nhạc thế từ 8 đến 10 lúc mở bánh xe cứ mỗi giây giảm 1 điểm, xuống 4 thì bánh xe tự đóng, tiếp tục từ tiết đầy đủ mới của bài gốc với nhạc thế 4.`,
`Nhấp lại nút (hiện “Hủy chuyển khúc”) hoặc nhấn Esc để quay về bài gốc sớm và giữ nhạc thế còn lại; mở và hủy không tiêu đói, cũng không khiến hiệu quả đã phát của bài gốc bị nhận lại lần nữa.`,
`Chọn bài khác thì chuyển ngay, tiêu 5 điểm đói và kế thừa nhạc thế còn lại; cơ bản, Thần Hợp và Mãn Huyền của bài mới kết toán lại. Thiếu đói thì quay về bài gốc.`,
`Trong lúc chọn bài, các lợi ích kéo dài như Thần Hợp tạm dừng, thủ vệ không nhận trận chiến hoặc lao động bài mới; hiệu ứng cơ bản, Mãn Huyền và hiệu ứng có thời hạn của thủ vệ đã nhận vẫn đếm giờ bình thường.`,
`Mỗi lần mở bánh xe đều tiêu tư cách, phải hoàn thành lại tiết đạt điều kiện mới chuyển khúc được; nhấp xuống đất, chết hoặc mất tỳ bà vẫn thu khúc bình thường.`])+
YH4('Nhập định')+YU([
`Sau khi chuyển khúc thành công, lần trường tấu này khi tiết hoàn hảo hoặc thường kết toán nhạc thế đến 10 thì vào “nhập định”, thanh kỹ năng hiện “Chuyển khúc · Nhập định”; cùng một tiết chỉ nhắc cấp cao nhất trong nhập định, Mãn Huyền, Thần Hợp.`,
`Khi nhập định, bị đánh thường vẫn mất máu và hao giáp nhưng <b>không có cứng đờ khi trúng đòn</b>, không ngắt diễn tấu hay đặt lại tiết; không giảm sát thương, không giới hạn số lần và thời gian.`,
`Chết và các khống chế mạnh như choáng, điện giật chưa cách điện, gai đất, đẩy, bị dính vẫn ngắt; điện giật đã cách điện được xử lý như bị đánh thường.`,
`Sai làm nhạc thế xuống 8 thì thoát ngay, về lại 10 là khôi phục, không cần chuyển khúc lần nữa; mở bánh xe chuyển khúc thì tạm dừng nhập định.`,
`Bản thân nhập định không kháng hất tung, không miễn đóng băng và thôi miên; khi đồng thời có Kiên Nhược Bàn Thạch, hất tung và đẩy lùi bị kháng và không ngắt diễn tấu; đã có miễn nhiễm thôi miên của Thần Hợp hoặc Mãn Huyền 《Xuân Quang Khúc》 thì ngáp không ngắt diễn tấu khi nhập định.`,
`Khi chưa nhập định, bị tấn công vẫn ngắt diễn tấu.`])+
YH4('Cài đặt âm thanh trên máy')+YU([
`Mọi người chơi đều có thể trong <b>“Màn hình tạm dừng → Tùy chọn → Yêm Đốc Tiên”</b> đặt âm lượng tỳ bà Ngọc Thố nghe trên máy mình thành bình thường, 75%, 50% hoặc 25%; không ảnh hưởng âm lượng người khác nghe.`,
`Ngọc Thố còn có thể bật hoặc tắt riêng âm phản hồi khi diễn tấu cho hoàn hảo, tốt và sai; không ảnh hưởng nhạc tỳ bà, âm bật tắt bánh xe và người chơi khác.`])+
YH4('Cách nhận hiệu quả cơ bản')+YU([
`Khúc tăng ích cho bạn: nếu mở khúc 4 giây vẫn chưa có hoàn hảo thì quanh Ngọc Thố sinh ra 6 nốt nhạc nhặt được.`,
`Lần hoàn hảo đầu tiên của lượt diễn tấu sẽ tự phát hiệu quả cơ bản cho bạn bè trong phạm vi hiệu lực và xóa các nốt chưa nhận.`,
`Khúc giảm ích cho địch và khúc hỗ trợ vùng không rơi nốt xuống đất, hiệu quả tác dụng thẳng lên mục tiêu thực.`,
`Hiệu quả cơ bản hoặc Mãn Huyền đã nhận không bị thu hồi khi Ngọc Thố dừng tấu; Thần Hợp là tăng cường động khi đang diễn tấu, dừng tấu là mất ngay.`])],

['tq-nt-10','Mười bài nhạc',`<p>Ngọc Thố ban đầu biết <b>《Điền Trung Nhạc》</b>. Chín khúc còn lại, học theo thứ tự tùy ý bằng cách <b>trình vật phẩm chỉ định cho Hằng Nga</b> để thỉnh giáo; vật phẩm chỉ để trình, được trả lại đầy đủ ngay, không bị tiêu hao. Mỗi khi học xong một khúc, Hằng Nga giảng giải khúc đó và Ngọc Thố đáp lại; lần thỉnh giáo đầu tiên và khi nắm chín khúc, Hằng Nga nhắc đến việc nâng giới hạn thủ vệ Nguyệt Cung; khi học khúc thứ mười, Hằng Nga chỉ điểm cách nối mười khúc, mở chuyển khúc.</p>`+YU([
`Rời đi giữa chừng khi đối thoại, chết hoặc bị ngắt chỉ dừng đối thoại, bản nhạc và vật phẩm trả lại không bị ảnh hưởng; save cũ đã thông đủ mười khúc có luôn tư cách chuyển khúc.`])+
`<div class="bar"><input type="search" placeholder="Tìm bài nhạc hoặc vật phẩm (vd: Vảy Rồng, Mãn Huyền, đóng băng)…" oninput="ydQ(this,'tr[data-tqs]','tqsc')"><span class="mu" id="tqsc"></span></div>`+
`<div class="tw"><table><tr><th>Bài</th><th>Vật phẩm thỉnh giáo</th><th>Hiệu quả cơ bản</th><th>Hiệu quả Thần Hợp</th><th>Hiệu quả Mãn Huyền</th><th>Thời hạn tối đa</th></tr>${[
['Điền Trung Nhạc','Biết sẵn','Hiệu suất chặt, đào, đập của bạn ×2','Chồng thêm một tầng hiệu suất ×2, thực tế khoảng ×4','Hiệu suất ×10, và hái thực vật nhanh','90 giây'],
['Xuân Quang Khúc',YDM('onemanband','Nhạc Cụ Độc Tấu',1),'Không trực tiếp ngã vì thôi miên, nhưng vẫn buồn ngủ','Miễn thôi miên và xóa trạng thái buồn ngủ hiện tại','Nâng lâu dài thành miễn thôi miên','480 giây'],
['Dục Hỏa Tấu',YDM('dragon_scales','Vảy Rồng',1),'Sát thương lửa giảm còn 25%','Sát thương lửa giảm còn 0','Sát thương lửa về 0, và lấy Ngọc Thố làm tâm dập tắt mọi mục tiêu đang cháy hoặc âm ỉ trong 25 ô tường (khoảng 6 ô đất)','90 giây'],
['Hàn Phong Điệu',YDM('heatrock_hot','Đá Nóng Bỏng',1),'Chặn trị số đóng băng hiện tại để không chồng đến mức đóng băng','Miễn đóng băng, xóa trạng thái đóng băng và lạnh','Nâng lâu dài thành miễn đóng băng; người đã quá lạnh khôi phục về thân nhiệt khởi đầu chính thức','90 giây'],
['Mộng Phi Sương',YDM('oceanfish_medium_8_inv','Cá Tráp Băng',1),'Khi bị đánh, gây 0,67 độ đóng băng cho kẻ tấn công','Độ đóng băng phản đòn tăng lên 1,5','Độ đóng băng phản đòn tăng lên 2,0','90 giây'],
['Oán Triền Thân',YDM('hivehat','Vương Miện Ong Chúa',1),'Hồi phục chính từ kẻ địch ×0,50','Hồi phục ×0,25; trong 4 giây cứ 2 giây gây oán thực không chí mạng bằng 0,5% máu tối đa, mỗi lần 6~40','Cấm hồi trong 30 giây; cứ 2 giây gây oán thực không chí mạng bằng 1% máu tối đa, mỗi lần 12~80','Debuff 30 giây'],
['Xuân Phong Hóa Vũ',YDM('featherfan','Quạt Lông Ngỗng',1),'Sát thương kẻ địch gây ra ×0,90','Sát thương kẻ địch ×0,75','Trong 10 giây sát thương kẻ địch ×0,60','Debuff 30 giây'],
['Bá Vương Tá Giáp',YDM('dreadstone','Đá Tuyệt Vọng',1),'Kẻ địch chịu sát thương ×1,25','Kẻ địch chịu sát thương ×1,35','Cửa sổ phá phòng 10 giây: đòn người chơi tính theo sát thương chuẩn ×1,35','Debuff 30 giây'],
['Lưu Thủy Vô Tình',YDM('beefalohat','Nón Sừng Bò',1),'Trong 25 ô tường ngăn bò vào kỳ động dục','Mỗi tiết hợp lệ không phải Mãn Huyền tăng 0,33 lần lượng thuần hóa tương đương chải lông','Một lần tăng 3 lần lượng thuần hóa tương đương chải lông','Vùng diễn tấu'],
['Dạ Lan Dao',YDM('panflute','Sáo Pan',1),'Buồn ngủ 5, ngủ 5 giây','Buồn ngủ 7, ngủ 10 giây','Buồn ngủ 10, ngủ 20 giây; động vật nhỏ ngủ được như chim, thỏ, cùng Dê Sét, Bò Phi Lâu, Heo Người, Người Thỏ cũng ngủ','Debuff 30 giây']
].map(r=>`<tr data-tqs data-n="${EA(PLAIN(r.join(' ')).toLowerCase())}">${r.map((c,i)=>`<td>${i==0?'<b>'+c+'</b>':c}</td>`).join('')}</tr>`).join('')}</table></div>`+
YN(`Lần Mãn Huyền đầu tiên dùng thời gian còn lại của BUFF cơ bản; trường tấu Mãn Huyền lần nữa sẽ làm mới hiệu quả Mãn Huyền còn hiệu lực về đủ thời gian.`,'Nhắc Mãn Huyền')+
YN(`《Hàn Phong Điệu》 yêu cầu trình Đá Nhiệt đang thật sự ở trạng thái nóng bỏng. Bài đã học sẽ không bị tiêu hao hoặc mở khóa lại.`,'Nhắc bản nhạc')+
YU([
`Khúc địch chỉ tác dụng lên sinh vật thù địch có thể giao chiến bình thường; kẻ địch không di chuyển được như Xúc Tu, Cỏ Mắt vẫn trở thành mục tiêu bình thường.`,
`Khi mục tiêu của 《Bá Vương Tá Giáp》 vào trạng thái bất tử rõ ràng, cửa sổ phá phòng và chữ “Phá” kết thúc ngay.`])],

['tq-nt-chay','Chày Ngọc Giã Thuốc: Bảy vị cứu người',`<p>Khi chày ngọc cất trong ô đồ hoặc ba lô (không trang bị), Ngọc Thố có thể qua thanh kỹ năng mở giao diện giã thuốc hai ô; cưỡi thú hoặc đang diễn tấu không giã được; cầm chày nhấp chuột phải thì mở bánh xe thi dược.</p>`+YU([
`Dược hiệu lưu trong kho chày, không tạo bột thuốc rơi được hay xếp chồng được.`,
`Mỗi loại thành dược có giới hạn kho 999.`,
`Giã vật phẩm cơ bản chỉ tác dụng lên bản thân Ngọc Thố.`,
`Phạm vi thi dược 25 ô tường (khoảng 6 ô đất); Kinh Quyết, Hàn Mâu chỉ tác dụng lên người chơi bạn bè, các dược hiệu còn lại bao phủ Ngọc Thố, người chơi bạn bè và sinh vật bạn bè hợp lệ theo điều kiện riêng.`,
`Thủ vệ Nguyệt Cung không nhận dược hiệu chày ngọc, tránh thủ vệ chồng cả thuốc nhân vật lẫn cường hóa diễn tấu.`,
`Giã theo công thức mỗi lần tiêu 10 điểm đói; công thức trừ một lần toàn bộ nguyên liệu trong bảng và cho ra số phần tương ứng.`])+
YDTB(['Tên thuốc','Công thức giã','Sản lượng','Hiệu quả thi dược'],[
['Bài Uất',YDM('forgetmelots','Hoa Forget-me-not',6)+' + '+YDM('cactus_meat','Thịt Xương Rồng',3),'6','Người chơi bạn bè lập tức hồi 30 lý trí và trong 120 giây cứ 2 giây hồi 2 lý trí'],
['Dạ Minh',YDM('wormlight','Quả Mọng Phát Sáng',3)+' + '+YDM('lightbulb','Quả Huỳnh Quang',6),'6','Bạn bè nhận hiệu ứng phát sáng cao cấp 960 giây'],
['Kinh Quyết',YDM('lightninggoathorn','Sừng Dê Volt',2)+' + '+YDM('feather_canary','Lông Chim Hoàng Yến',1),'3','Đòn của người chơi bạn bè kèm hiệu ứng điện giật 150 giây'],
['Hoạt Huyết',YDM('royal_jelly','Sữa Ong Chúa',2)+' + '+YDM('spidergland','Tuyến Nhện',6),'3','Người chơi bạn bè lập tức hồi 60 máu, trong 120 giây cứ 2 giây hồi 2 máu; sinh vật bạn bè hợp lệ chỉ lập tức hồi 60 máu'],
['Tê Nhung',YDM('minotaurhorn','Sừng Thủ Hộ Cổ Đại',1)+' + '+YDM('reviver','Trái Tim Cứu Chuộc',1),'3','Ưu tiên hồi sinh hồn ma trong 25 ô tường; không có ai hồi sinh được thì bù đầy máu, đói, lý trí cho Ngọc Thố'],
['Hàn Mâu',YDM('deerclops_eyeball','Nhãn Cầu Deerclops',1)+' + '+YDM('deer_antler','Gạc Hươu Bất Kỳ',1),'3','Đòn người chơi bạn bè kèm 1 độ đóng băng 150 giây; cùng là phụ ma tấn công với Kinh Quyết nên không chồng cùng lúc'],
['Thảo Sâm',YDM('mandrake','Mandrake',1)+' + '+YDM('petals','Cánh Hoa',3),'3','Bạn bè hồi 300 máu, và cho mục tiêu thù địch trong phạm vi ngủ khoảng 10 giây']])+
YH4('Giã cơ bản')+YU([
`Khi hai ô nguyên liệu chưa tạo thành thuốc chính thức, trái cây, rau củ và dược liệu chỉ định được xử lý theo giã cơ bản.`,
`Mỗi ô hợp lệ nhấp một lần chỉ tiêu 1 phần nguyên liệu, tác dụng ngay lên bản thân Ngọc Thố; mỗi ô xử lý tiêu 3 điểm đói.`,
`Trái cây thường chủ yếu hồi 5 hoặc 15 lý trí, rau thường chủ yếu hồi 8 hoặc 20 máu; Cánh Bướm Đêm Trăng, xương rồng, tuyến nhện, cánh hoa, quả huỳnh quang… có lợi ích cố định riêng.`,
`Nguyên liệu lõi của thuốc chính thức như Mandrake, Nhãn Cầu Deerclops, Sừng Dê Volt, Sừng Thủ Hộ Cổ Đại không bị dùng nhầm khi giã cơ bản.`])],

['tq-nt-tv','Thủ vệ Nguyệt Cung (月宫守卫)',`<p>Thủ vệ Nguyệt Cung là hộ vệ thường trực của Ngọc Thố và đơn vị hiện thực hóa diễn tấu.</p>`+YDTB(['Thuộc tính','Số liệu'],[
['Máu','500'],['Sát thương cơ bản','50'],['Giãn cách đánh','2 giây'],['Tốc độ chạy','7'],
['Giới hạn truy đuổi','25 ô tường (khoảng 6 ô đất)'],['Hồi chiêu khi chết','120 giây']])+YU([
`Ban đầu không có tư cách thủ vệ; lần đầu học bất kỳ khúc nào ngoài khúc ban đầu thì mở giới hạn 1 thủ vệ.`,
`Tổng số khúc nắm đạt 9 thì giới hạn nâng thẳng lên 3, không có giai đoạn 2.`,
`Triệu hồi hoặc bổ sung thủ vệ tiêu 5 lý trí; đạt giới hạn rồi dùng nút thủ vệ lần nữa thì thu hồi thủ vệ hiện tại, thu hồi không tiêu lý trí.`,
`Nhấp <b>chuột phải</b> nút thủ vệ để khiến toàn bộ thủ vệ hiện tại chui đất quy nguyệt, tạm dừng đi theo, chiến đấu và lao động; sau đó nhấp <b>chuột trái</b> nút thủ vệ để cho chúng ra trận lại một lượt; quy nguyệt và ra trận đều không tiêu lý trí, không hồi máu cũng không kích hoạt hồi chiêu khi chết.`,
`Thủ vệ mặc định chủ yếu bảo vệ Ngọc Thố; khi diễn tấu 《Oán Triền Thân》, 《Xuân Phong Hóa Vũ》, 《Bá Vương Tá Giáp》 sẽ chủ động tấn công kẻ địch chịu ảnh hưởng của khúc trong 16 ô tường (4 ô đất).`,
`Mỗi lần kết toán tiết mà vẫn ở Thần Hợp thì các thủ vệ đang ra trận mỗi con hồi 100 máu.`,
`<b>Mãn Huyền</b> kích hoạt “Nguyệt Hoa Cộng Minh” 20 giây: thủ vệ giảm 50% sát thương nhận, giãn cách đánh rút còn 1 giây, đòn đánh thành 50 sát thương thường + 50 sát thương vị diện.`,
`Khi Mãn Huyền 《Xuân Quang Khúc》, 《Dục Hỏa Tấu》, 《Hàn Phong Điệu》, 《Mộng Phi Sương》, các thủ vệ hiện có của người diễn tấu nhận cùng lúc hiệu ứng khúc cơ bản tương ứng trong 20 giây; thủ vệ không nhận cường hóa Mãn Huyền của người chơi.`,
`Thủ vệ có hiệu ứng khúc cơ bản tương ứng có thể được Thần Hợp cùng khúc của bất kỳ Ngọc Thố bạn bè nào trong 16 ô tường tiếp tục tăng cường, không yêu cầu người diễn tấu là chủ thủ vệ.`,
`Các hiệu ứng khúc tạm thời này không ghi vào save của thủ vệ; thủ vệ chết, thu hồi, đổi hang hoặc đọc save sẽ bị xóa, thủ vệ mới triệu hồi cũng không bù thưởng Mãn Huyền trước đó.`,
`Khi diễn tấu 《Điền Trung Nhạc》, thủ vệ có thể chặt cây, đào đá và dọn gốc cây, không phụ trách nhặt tài nguyên; khối lượng làm việc cơ bản, Thần Hợp, Mãn Huyền lần lượt 1, 2, 4, và hiệu quả Mãn Huyền thúc thủ vệ tự lao động 20 giây.`])],

['tq-nt-th','Thân thiết với tộc Thố và Giảo Thố Tam Quật',YU([
`Ngọc Thố có ngụy trang thỏ: thỏ thường không chạy khi cô lại gần, thỏ sống nhặt trực tiếp được.`,
`Ngọc Thố không thể chủ động giết hoặc nấu trực tiếp thỏ sống.`,
`Mang ít nhất 1 thỏ sống bên người thì hồi lý trí mức trung bình, nhiều con không chồng.`,
`Ngọc Thố trực tiếp làm thỏ chết thì lập tức mất 5 lý trí; thấy thỏ chết trong 20 ô tường (5 ô đất) cũng mất tối đa 5 lý trí liên tục trong 5 giây theo khoảng cách, cùng cửa sổ không chồng đầy lặp lại.`,
`Người Thỏ thường và Vua Thỏ không chủ động thù hận cô chỉ vì mang thịt; nếu Ngọc Thố chủ động tấn công, chia sẻ thù hận hoặc mang thân phận thù địch khác thì tộc Thố vẫn phản đòn bình thường.`,
`Ngọc Thố không bị coi thỏ, Người Thỏ thường và ngoại hình họ thỏ là dạng ác mộng chỉ vì lý trí thấp; ác mộng bắt buộc chính thức vẫn hiệu lực.`])+
YH4('Giảo Thố Tam Quật')+YU([
`Đưa thỏ sống cho một hang thỏ chưa sập và thực hiện “phóng sinh”.`,
`Mỗi Ngọc Thố mỗi ngày tự nhiên nhận tối đa 1 lần Tam Quật qua phóng sinh.`,
`Giới hạn số lần là 3; đạt giới hạn hoặc hôm nay đã nhận thì hang thỏ không thu thỏ sống.`,
`Có lần thì thanh kỹ năng mới hiện “Giảo Thố Tam Quật” và ghi số lần hiện tại.`,
`Sau khi dùng, mở hộp chung Kèn Thỏ chính thức trên mặt đất hợp lệ, sinh hộp thành công tiêu 1 lần.`])+
YN(`Ngọc Thố bản mới không mở lộ trình “hang thỏ hái lượm” hoặc “hang thỏ sản xuất hàng loạt” của bản cũ, hai thiết lập cũ này đã được Giảo Thố Tam Quật thay thế.`,'Quy tắc hiện tại')],

['tq-nt-dt','Độn thổ (遁地)',`<p>Ngọc Thố có thể qua thanh kỹ năng vào hình thái dưới đất, dùng lại để chủ động trồi lên.</p>`+YDTB(['Lợi ích dưới đất','Cái giá dưới đất'],[
['Kẻ địch không chọn được Ngọc Thố; khi độn thổ khiến kẻ địch đang truy đuổi cô trong 12 ô tường bỏ mục tiêu','Hệ số tiêu hao đói ×1,4'],
['Nhận nhìn đêm và miễn Charlie','Lý trí mỗi phút liên tục mất 10 điểm'],
['Sát thương lửa giảm còn 30%','Trời mưa liên tục tăng ẩm ướt'],
['Di chuyển liên tục','Không mở được ô đồ, ba lô hoặc vật chứa đã mở']])+YU([
`Độn thổ không có thời gian cố định, cũng không có phí đói bổ sung ngay khi độn.`,
`Các hành động dài chủ động như tấn công, làm việc, thi pháp, diễn tấu, ngủ khiến Ngọc Thố gỡ độn thổ.`,
`Bị đánh, hất tung, choáng, đóng băng, điện giật và các khống chế cứng bên ngoài không buộc gỡ hình thái độn thổ, hết khống chế thì tiếp tục di chuyển dưới đất.`,
`Đói về 0, chết, thành ma, đi ra mặt biển, vào thuyền hoặc nền tảng, trạng thái hồn xuất khiếu thì từ chối hoặc kết thúc độn thổ.`,
`Khi độn thổ không diễn tấu, giã thuốc, triệu hồi thủ vệ, dùng Giảo Thố Tam Quật hay đằng vân được.`])],

['tq-nt-dv','Đằng vân (腾云)',YU([
`Mở khóa sau khi đến <b>Linh Đài Phương Thốn Sơn</b> đọc thiên thư, chưa mở khóa thì thanh kỹ năng không hiện nút đằng vân.`,
`Gọi mây tiêu 25 lý trí, dùng lại cùng nút để hạ mây theo quy trình đằng vân gốc của thần thoại.`,
`Đang cưỡi thú không gọi mây được, cũng không bị buộc xuống bò hay tiêu lý trí gọi mây.`,
`Nếu đã đặt phím đằng vân trên máy thì dùng cùng phím gọi và hạ mây; thanh kỹ năng vẫn dùng bình thường.`,
`Hệ số di chuyển trên mây 10/6, khoảng 1,67 lần.`,
`Khi đằng vân mỗi 3 giây hồi 1 máu và mang hiệu ứng hàn khí -10.`,
`Ngoại hình Hạnh Hoa Tiên Tử và Nguyệt Quế Tửu Hương khi đằng vân dùng đám mây, hiệu ứng và ánh sáng chuyên biệt tương ứng.`,
`Đằng vân và độn thổ loại trừ nhau; trên mây chỉ giữ khả năng hạ mây, giã thuốc, thủ vệ, Giảo Thố Tam Quật và độn thổ… các kỹ năng mặt đất không dùng được.`])],

['tq-nt-qh','Sinh thái Quảng Hàn và chế tạo riêng',YH4('Hằng Nga và Quảng Hàn Cung')+YU([
`Ngọc Thố tặng Hằng Nga bảo thạch hoặc Đại Bàn Đào thì được thêm 1 điểm hảo cảm.`,
`Mỗi lần tặng quà hảo cảm cơ bản thành công có 10% xác suất nhận thêm một bánh trung thu.`,
`Ngọc Thố ban đêm vào được Quảng Hàn Cung, không bị đuổi theo quy tắc ban đêm của Quảng Hàn.`,
`Sau khi trình vật phẩm khúc cho Hằng Nga để thỉnh giáo, vật phẩm trả lại; tiến độ bản nhạc, giới hạn thủ vệ, mở khóa đằng vân và số lần Tam Quật đều lưu theo save nhân vật.`])+
YH4('Nguyệt Nga Dẫn Lộ')+YU([
`Công thức riêng của Ngọc Thố: ${YDM('petals','Cánh Hoa',1)}.`,
`Sau khi thi pháp sinh hiệu ứng Nguyệt Nga Dẫn Lộ kéo dài 8 giây, ưu tiên chỉ về Quảng Hàn Cung; gần đó không có mục tiêu Quảng Hàn thì dẫn đến vùng mặt trăng dùng được.`,
`Hiệu ứng dẫn đường không phải sinh vật bắt được, không rơi cánh bướm đêm, cây giống trăng hay tài nguyên khác.`])+
YH4('Giỏ Tre')+YU([
`<b>Công thức:</b> ${YDI('bamboo',3)} + ${YDI('rope',2)}.`,
`<b>Công nghệ:</b> Khoa Học Một.`,
`Trang bị lưng riêng của Ngọc Thố, sức chứa 12 ô, không giảm tốc.`,
`Không bảo quản tươi, không giới hạn loại vật phẩm cho vào.`,
`Doanh Nguyệt Tỳ Bà và giỏ tre đều có biểu tượng bản đồ riêng để dễ tìm khi thất lạc.`])]
]],
['tq-hb','Hắc Phong Đại Vương · Hùng Bi chân thân (黑风大王·熊罴真身)',`${YFG('xydztz_blackbear_trueform','Hùng Bi chân thân')}
<p>Hắc Phong Đại Vương bại trận hóa thành gió, vốn định dùng độn pháp thoát thân. Nếu dùng <b>Thôn Thiên Tử Kim Hồ Lô</b> khóa nơi bại trận trước một bước, gió đen không còn đường thoát, yêu vương buộc phải hiện chân thân Hùng Bi.</p>
${YN(`Trang “Quái vật” của Thiên Thư Thần Thoại nay đã ghi Hùng Bi chân thân, xem nhanh được điều kiện hiện hình, máu động, cơ chế chiến đấu chính và phần thưởng hạ gục. Mục thiên thư dùng để tra nhanh trong trận; biên giới kích hoạt đầy đủ, số liệu kỹ năng và quy tắc thất bại vẫn lấy chương này làm chuẩn.`,'Ghi trong Thiên Thư Thần Thoại')}`,[

['tq-hb-kh','Điều kiện kích hoạt',`<p>Hùng Bi chân thân không thể xuất hiện trực tiếp qua làm mới thông thường, phải hoàn thành quy trình sau:</p>`+YO([
`Tìm và thách đấu <b>Hắc Phong Đại Vương gốc</b> của 《Thần Thoại Thư Thuyết》.`,
`Trước khi nó chết, thi triển trước <b>“Thôn Thiên Khống Trường”</b> của Thôn Thiên Tử Kim Hồ Lô.`,
`Phải đợi Thôn Thiên thi pháp thật sự hoàn thành, trường hoạt động đã mở ra.`,
`Để Hắc Phong Đại Vương gốc thật sự bại trận trong phạm vi trường hoạt động phủ.`,
`Hắc Phong Đại Vương gốc hoàn thành cái chết và rơi đồ theo quy trình gốc của thần thoại trước, rồi gió độn bại trận sinh ra sẽ bị trường Thôn Thiên chặn lại.`,
`Gió độn không thoát được, bị khống chế tại điểm thi pháp Thôn Thiên và hiển hóa Hùng Bi chân thân ở đó.`])+
YH4('Điểm phán định')+YU([
`Giết Hắc Phong Đại Vương trước rồi mới bổ sung Thôn Thiên là <b>vô hiệu</b>.`,
`Giết khi Thôn Thiên còn đang tụ lực, trường hoạt động chưa thật sự lập thành là <b>vô hiệu</b>.`,
`Gió độn bại trận bay từ ngoài vào phạm vi Thôn Thiên là vô hiệu, phán định chỉ xét tại khoảnh khắc Hắc Phong gốc chết có bị trường hoạt động phủ hay không.`,
`Gió vào trường khi trộm mật và gió rời trường khi Hắc Phong Đại Vương hết giờ đều không phải gió độn bại trận, không kích hoạt chân thân.`,
`Nhiều trường Thôn Thiên cùng phủ điểm chết thì chỉ cái gần nhất giành quyền kích hoạt.`,
`Cùng một lúc chỉ tồn tại một cuộc chạm trán Hùng Bi chân thân.`])],

['tq-hb-mau','Quy tắc máu động',`<p>Máu tối đa của Hùng Bi chân thân do số lần đã đánh bại Hắc Phong Đại Vương giả thân trong vòng này quyết định, <b>không đổi theo số người online</b>.</p>`+YDTB(['Số lần đánh bại Hắc Phong gốc trong vòng','Máu tối đa Hùng Bi chân thân'],[
['1 lần','24000'],['2 lần','21000'],['3 lần','18000'],['4 lần','15000'],['5 lần trở lên','12000']])+YU([
`Một lần giết Hắc Phong gốc bắt buộc làm tiền đề không làm giảm bậc.`,
`Bộ đếm tăng ngay khi Hắc Phong gốc thật sự chết.`,
`Hùng Bi chân thân sau khi sinh ra sẽ khóa máu tối đa lần này, trong chiến đấu hoặc sau khi đọc save không tính lại theo số người, số lần hiện tại.`,
`Sau khi chân thân thật sự bị hạ gục, bộ đếm đánh bại Hắc Phong gốc của vòng này về 0; vòng sau bắt đầu lại từ 24000 máu.`,
`Thách đấu thất bại, chân thân hồi phong hoặc tải lại thế giới không xóa bộ đếm; lần sau phải giết lại Hắc Phong gốc để kích hoạt, máu tiếp tục giảm theo bảng trên, thấp nhất 12000.`])],

['tq-hb-bang','Bảng chiến đấu cơ bản',YDTB(['Thuộc tính','Số liệu / quy tắc'],[
['Sát thương cơ bản','175; phần sát thương thường lên người chơi dùng 50% hệ số sát thương nhân vật'],
['Sát thương vị diện','30'],['Giãn cách đánh','3 giây'],['Tầm đánh','6 ô tường'],
['Đi bộ / đi bộ giận dữ / chạy','3 / 6 / 10'],
['Phạm vi truy đuổi và hoạt động chạm trán','60 ô tường (15 ô đất)'],
['Kháng đóng băng','Kháng cơ bản 8; lần đầu cần tích lũy 8 điểm lạnh hiệu quả, sau khi đóng băng thành công ngưỡng lần lượt tăng thành 10, 12… tối đa 20, kháng thêm mỗi 30 giây giảm 0,1'],
['Ngủ','Hoàn toàn không thôi miên được'],
['Lửa','Miễn lửa, không cháy hoặc lan lửa'],
['Phe phái','Không thuộc phe Mặt Trăng hay Bóng Tối']])+YU([
`Cuộc chạm trán lấy bản thể chân thân đang di chuyển làm tâm, không có tường ngoài cố định hay giới hạn khu vực.`,
`Chân thân có các đòn cơ bản như vung thường, xông liên hoàn, hất tung và đập đất.`,
`<b>Hắc Phong Thạch Chướng</b> trên chiến trường vừa là chỗ nấp, vừa là tài nguyên cốt lõi để dẫn chân thân đâm vào và tạo cửa sổ gây sát thương.`])],

['tq-hb-tc','Hắc Phong Thạch Chướng',`<p>Chân thân bố trí lại thạch chướng qua đập đất. Thạch chướng không bao thành vòng khép kín hoàn chỉnh, luôn chừa không gian di chuyển và dẫn dắt.</p>`+YDTB(['Số người chơi còn sống','Số thạch chướng'],[['1 người','4 tòa'],['2 người','5 tòa'],['3 người trở lên','6 tòa']])+YU([
`Mỗi tòa thạch chướng có 3 điểm độ bền xói mòn (chỉ chịu ảnh hưởng của Hắc Toàn).`,
`Trước khi thạch chướng nhô lên có 0,75 giây cảnh báo mặt đất.`,
`Nhô lên gây 45 sát thương thường + 5 sát thương vị diện, không hất tung; sau khi nhô lên chạm thạch chướng không bị thương liên tục.`,
`Hắc Toàn Phong xói mòn thạch chướng, một số đòn đập đất và xung kích cũng tiêu hao hoặc xếp lại thạch chướng.`,
`Chân thân xung phong tốc độ cao đâm vào thạch chướng của chính nó thì thạch chướng vỡ, chân thân vào <b>cứng đờ 6 giây</b>.`,
`Khi đập đất xếp lại lượt sau, chân thân chết, thách đấu thất bại hoặc cuộc chạm trán bị gỡ, thạch chướng cũ được dọn thống nhất.`])],

['tq-hb-kn','Tổng quan kỹ năng',YDTB(['Kỹ năng','Giai đoạn mở','Hồi chiêu / kích hoạt','Hiệu quả chính','Cách ứng phó đúng'],[
['Xao Địa Bố Chướng','Cả trận','Khoảng 10 giây','Xếp lại thạch chướng, duy trì chiến trường','Quan sát cảnh báo, giữ chỗ nấp dùng được'],
['Định Điểm Hắc Toàn','Cả trận','Khoảng 14 giây','Sau cảnh báo sinh cơn lốc đen 2 giây bám mục tiêu, mỗi nhịp 35 sát thương + 5 vị diện, và xói mòn thạch chướng','Rời điểm cảnh báo, đừng dẫn lốc qua thạch chướng quan trọng'],
['Hắc Phong Đảo Quyển','Dưới 70% máu','Khoảng 32 giây; còn ít nhất 2 thạch chướng và có người chơi trên đất liền ở khoảng cách hơn 10 và không quá 14 ô tường mà kéo được, không bị che mới khởi thế','Sau khởi thế hút người chơi hợp lệ trong 20 ô tường (5 ô đất) theo thời gian thực; vào mắt gió 3 ô tường thì bị bắt','Thấy tụ lực thì vào phía khuất gió sau thạch chướng'],
['Phong Vương Xung Sơn','Dưới 70% máu','Sau khi Đảo Quyển không bắt được ai thì vào, hồi chiêu riêng khoảng 18 giây','Lao về mục tiêu xung phong tốc độ cao, trúng gây 110 sát thương + 15 vị diện và hất tung','Dẫn đường xung phong vào thạch chướng, đổi lấy cứng đờ 6 giây'],
['Vạn Tự Hắc Phong Hống','Bắt buộc một lần ở 70% và 35%','Sự kiện giai đoạn','Sóng xung kích, khống chế và tối đa hai lần đòn thường săn giết','Mặc Cẩm Lan Ca Sa; không có ca sa thì dùng thạch chướng giảm sát thương và dụ đâm đá']])],

['tq-hb-ht','Định Điểm Hắc Toàn',YU([
`Trước khi Hắc Toàn sinh ra có 1,25 giây cảnh báo, sinh ra rồi bám mục tiêu đã khóa với tốc độ chậm trong 2 giây.`,
`Mỗi nhịp sát thương gây 35 sát thương thường + 5 sát thương vị diện.`,
`Hắc Toàn vòng qua địa hình không hợp lệ, không biến mất ngay vì chướng ngại nhẹ.`,
`Thạch chướng gần Hắc Toàn cứ 0,5 giây bị xói mòn 1 điểm độ bền.`,
`Tổng toàn sân một lần thi triển tăng theo giai đoạn và số người hiệu quả:`])+YDTB(['Số người hiệu quả','Giai đoạn 1','Giai đoạn 2','Giai đoạn 3'],[
['1 người','1','2','3'],['2 người','2','3','4'],['3 người','2','4','5'],['4 người trở lên','2','4','6']])+
`<p>Số trong bảng là <b>tổng toàn sân của lần thi triển</b>, không phải số sinh cho mỗi người. Hắc Toàn ưu tiên phủ người chơi khác nhau, số còn lại bổ sung luân phiên; nhiều điểm cảnh báo của cùng một người sẽ so le. Nếu điểm đặt hợp lệ không đủ thì số sinh thực tế có thể ít hơn trong bảng.</p>`],

['tq-hb-dq','Hắc Phong Đảo Quyển và Phong Vương Xung Sơn',`<p>Sau khi máu xuống dưới 70%, chân thân nâng thạch chướng từ chỗ nấp thường thành tài nguyên giải cơ chế.</p>`+YU([
`Chỉ khi trên sân còn ít nhất 2 thạch chướng hiệu lực, không còn Hắc Toàn chưa kết thúc, và có người chơi đất liền cách chân thân hơn 10 và không quá 14 ô tường, không bị thạch chướng che và kéo được, chân thân mới chọn Đảo Quyển.`,
`Chân thân trước hết dùng động tác đầy đủ tích gió đen, áp suất gió tâm mở rộng dần; sau khởi thế sẽ không hủy cả đòn vì mục tiêu ban đầu chạy chỗ khác.`,
`Sau khi chính thức hút, mỗi nhịp áp gió đều kiểm tra người chơi hợp lệ trong 20 ô tường (5 ô đất) và nhanh chóng kéo về phía chân thân.`,
`Người vào mắt gió khoảng 3 ô tường bị bắt và tạm mất di chuyển.`,
`Nếu bắt được ít nhất 1 người: chân thân khóa người bị bắt, đảm bảo hoàn thành một lần vung thường; sau khi phán định sát thương thực tế kết thúc thì thả toàn bộ người bị bắt.`,
`Nếu cuối cùng không bắt được ai: chân thân vào <b>Phong Vương Xung Sơn</b> ngay.`,
`Trước khi xung phong có cảnh báo, người chơi phải tiếp tục di chuyển để dẫn chân thân vào thạch chướng.`,
`Chân thân đâm vỡ thạch chướng thì vào cứng đờ 6 giây; nếu đâm trúng người thì gây 110 sát thương thường + 15 vị diện và hất tung.`,
`Người chơi đang cưỡi thú vẫn tham gia phán định khởi thế, kéo và bắt của Đảo Quyển bằng bản thân người chơi; vung đảm bảo tiếp tục chuyển sát thương sang thú cưỡi hợp lệ theo quy tắc cưỡi chính thức, không ép thêm việc rơi khỏi thú.`])+
YN(`Phía khuất gió của thạch chướng chỉ giải quyết “Đảo Quyển bắt người”; chắn xong Đảo Quyển vẫn phải hoàn thành bước hai, dẫn Xung Sơn đâm đá. Nếu dùng hết thạch chướng quá sớm thì tổ hợp này mất lời giải đúng.`,'Điểm cơ chế')],

['tq-hb-vt','Vạn Tự Hắc Phong Hống',`<p>Khi máu chân thân lần đầu vượt qua <b>70%</b> và <b>35%</b>, mỗi lần bắt buộc Vạn Tự Hắc Phong Hống một lần. Nếu một đòn sát thương cao đồng thời vượt cả hai ngưỡng thì lần thứ hai xếp hàng chờ, cách nhau ít nhất 6 giây, không bùng nổ liên tiếp ngay mà không có thao tác.</p>`+
YH4('Phạm vi và sát thương bùng nổ')+YU([
`Phạm vi phán định là 24 ô tường (6 ô đất) quanh chân thân.`,
`Sóng xung kích gây 15 sát thương thường + 5 sát thương vị diện.`,
`Mỗi người chơi, ngay khoảnh khắc bùng nổ, bị kiểm tra <b>Cẩm Lan Ca Sa</b> trong ô trang bị thân.`,
`Chỉ để trong ô đồ là vô hiệu; mặc sau khi bùng nổ cũng không gỡ được khống chế đã sinh.`])+
YH4('Mặc Cẩm Lan Ca Sa')+YU([
`Miễn hoàn toàn sóng xung kích và khống chế cứng lần này, cũng không bị điểm danh săn giết; nhưng đứng gần đồng đội bị săn giết thì vẫn có thể bị vung săn giết lan tới.`,
`Thân hiện Phật Quang Hộ Thể.`,
`Trong lúc kết toán chỉ cần ít nhất một người chơi hộ thể thành công, sau khi săn giết kết thúc chân thân sẽ chịu Phật Quang phản chấn, vào cửa sổ gây sát thương 4 giây.`,
`Trong khoảng 14 giây sau bùng nổ, khi chân thân cần chọn lại mục tiêu sẽ ưu tiên nhắm người mặc ca sa.`])+
YH4('Không mặc Cẩm Lan Ca Sa')+YU([
`Chịu sóng xung kích trước, rồi vào khống chế mất thao tác (tâm thần).`,
`Chân thân chỉ dùng vung thường để săn giết từng người bị khống chế, không chen Hắc Toàn, đập đất, xung phong hay liên hoàn.`,
`Cùng một người chơi trúng đòn thường thật lần thứ 2 thì giải khống chế.`,
`Khống chế kéo dài tối đa 12 giây; người chơi chết, chân thân đâm đá cứng đờ, chân thân chết hoặc thách đấu thất bại cũng giải sớm.`])+
YH4('Bảo đảm thạch chướng')+YU([
`Không mặc ca sa mà đứng ở phía khuất gió hợp lệ của thạch chướng thì sát thương sóng xung kích giảm còn 35%, nhưng vẫn bị khống chế.`,
`Trong lúc săn giết, nếu chân thân truy đuổi tốc độ cao đâm vào thạch chướng thì kích hoạt cứng đờ 6 giây và chấm dứt vòng khống chế này.`,
`Thạch chướng không thay thế hoàn toàn Cẩm Lan Ca Sa; không ca sa, không thạch chướng thì người chơi chịu trọn sóng xung kích và tối đa hai lần đòn thường.`])],

['tq-hb-gd','Quy trình giai đoạn',YDTB(['Giai đoạn','Khoảng máu','Thay đổi chiến đấu'],[
['Giai đoạn 1','100%~70%','Học Xao Địa Bố Chướng, liên hoàn cơ bản và Định Điểm Hắc Toàn; Hắc Toàn một người 1 con, nhiều người toàn sân tối đa 2 con, trọng tâm là giữ thạch chướng'],
['Kiểm tra 70%','Lần đầu vượt 70%','Bắt buộc Vạn Tự Hắc Phong Hống; sau đó mở Hắc Phong Đảo Quyển và Phong Vương Xung Sơn'],
['Giai đoạn 2','70%~35%','Hắc Toàn một người 2 con, nhiều người toàn sân tối đa 4 con, thạch chướng bắt đầu cùng đảm nhiệm che chắn Đảo Quyển và cứng đờ Xung Sơn'],
['Kiểm tra 35%','Lần đầu vượt 35%','Lại bắt buộc Vạn Tự Hắc Phong Hống'],
['Giai đoạn 3','Dưới 35%','Hắc Toàn một người 3 con, nhiều người toàn sân tối đa 6 con, áp lực tài nguyên sân đạt cao nhất, nhưng tốc độ, thời lượng và sát thương mỗi lần của Hắc Toàn không tăng nữa']])],

['tq-hb-tb','Thách đấu thất bại và hồi phong',YU([
`Chân thân lấy vị trí thời gian thực của chính nó làm tâm, kiểm tra người chơi còn sống trong 60 ô tường (15 ô đất).`,
`Liên tục <b>20 giây</b> không có người chơi nào còn sống ở trong phạm vi thì thách đấu bị phán thất bại.`,
`Trong thời gian gia hạn, chỉ cần có người chơi còn sống vào lại 60 ô tường, đếm ngược thất bại lập tức hủy.`,
`Sau thất bại chân thân không rơi bất kỳ phần thưởng nào, dọn Hắc Toàn, thạch chướng, khống chế và trạng thái kỹ năng, rồi hóa lại thành gió đen rời đi.`,
`Lần thách đấu sau phải hoàn thành lại toàn bộ quy trình trộm mật, giết Hắc Phong gốc, trải trước trường Thôn Thiên và hoàn thành đòn hạ gục trong trường.`,
`Đóng băng, mất mục tiêu tấn công hiện tại hoặc tạm rút khỏi chiến đấu không bằng thách đấu thất bại, chỉ xét gần chân thân còn người chơi sống hay không.`])],

['tq-hb-pt','Phần thưởng hạ gục',`<p>Hắc Phong Đại Vương gốc hoàn thành rơi đồ bình thường của nó trước, phần thưởng Hùng Bi chân thân kết toán độc lập sau đó, hai bộ chiến lợi phẩm không đè nhau.</p>`+YDTB(['Phần thưởng','Số lượng','Rơi nhiều lần'],[
['Tích Hỏa Tráo','Cố định 1 món','Không chịu ảnh hưởng của bất kỳ rơi nhiều lần thường hoặc theo xác suất nào'],
['Da gấu','1 tấm','Hệ rơi thường, có thể chịu ảnh hưởng rơi nhiều lần hợp lệ'],
['Lông gấu','8 cái','Hệ rơi thường, có thể chịu ảnh hưởng rơi nhiều lần hợp lệ']])+YU([
`Chân thân không rơi thêm thịt, bảo thạch, Thốn Tâm Tinh Phách, nguyên liệu Mặt Trăng, nguyên liệu Bóng Tối hay chiến lợi phẩm của Hắc Phong gốc.`,
`Thất bại hồi phong, gỡ bất thường hoặc chưa hoàn thành đòn hạ gục thật đều không sinh phần thưởng.`,
`Hiệu quả đầy đủ của Tích Hỏa Tráo xem ở mục “Pháp bảo trang bị”.`])]
]],

['tq-hp','Hoàng Phong Đại Thánh (黄风大圣)',`${YFG('xydztz_huangfeng','Hoàng Phong Đại Thánh')}
<p>Bên hồ ốc đảo khóa một con chuột nhỏ bị trói. Khi bão cát mùa hè nổi lên, người chơi mượn giếng cạn xuống đáy hồ, xé bỏ bùa, Tam Muội Thần Phong sẽ quay lại.</p>
${YN(`Hoàng Phong Đại Thánh là trùm mới thêm ở phiên bản này, máu, sát thương, hồi chiêu và thời gian trấn áp trong chương này là số liệu phiên bản hiện tại, sau này có thể thay đổi theo cân bằng.`,'Ghi chú số liệu')}`,[

['tq-hp-gv','Lối vào giếng cạn',YU([
`Trồng rễ <b>Cây Nhân Sâm Quả</b> vào giếng của 《Thần Thoại Thư Thuyết》, đợi nó lớn thành “Phục Tô Tiên Thụ” rồi đốt cây, tại chỗ sẽ để lại một giếng thần thoại cạn; cũng có thể mở <b>Tích Hỏa Tráo</b>, dùng “Dẫn Diễm” đốt cạn trực tiếp giếng thần thoại có nước gần mình nhất trong tráo.`,
`Khoảnh khắc giếng từ có nước thành cạn, nếu sát hồ ốc đảo (chú ý mở hồ) và thế giới này chưa có lối vào giếng cạn, giếng này sẽ thành <b>“Miệng giếng khô”</b>.`,
`Cả thế giới chỉ có một lối vào giếng cạn; giếng thần thoại thường đã cạn sẽ không tự bù vào, hang động dưới đất không có giếng cạn.`])+
YH4('Treo dây')+YU([
`“Treo dây” ở miệng giếng dùng cách xây chính thức: giao <b>1 Cuốc Chim thường và 2 Dây Thừng</b>, giao chia nhiều lần được, Cuốc Chim Vàng không dùng được.`,
`Chỉ treo dây được khi bão cát mùa hè đang thổi và hồ ốc đảo có nước.`,
`Trước khi treo xong mà bão cát ngừng (kể cả mùa hè có mưa), miệng giếng trả về giếng thần thoại có nước, vật liệu đã giao rơi xuống đất.`,
`Treo xong giữ vĩnh viễn, mùa nào cũng xuống giếng được.`,
`Miệng giếng có thể dùng búa đập 3 lần để tháo, hoàn lại vật liệu theo công thức giếng thần thoại; dưới giếng còn người thì không tháo được, cũng không tốn độ bền công cụ.`,
`Kiểm tra miệng giếng để biết trạng thái dưới giếng: xích kêu nhẹ là bị trói, cát gió cuộn trào là đang chiến đấu, gió yếu đi là đang hồi chiêu phục tô.`])],

['tq-hp-xg','Xuống giếng và quy tắc dưới giếng',YU([
`Chọn “Xuống giếng” ở miệng giếng, chọn “Leo” ở dây thả dưới đáy giếng để về mặt đất; đang cưỡi thú không xuống được, đang đằng vân phải thu mây trước.`,
`Dưới giếng chứa tối đa <b>6 người</b>, người đang xuống cũng tính vào chỗ; mỗi lần tiếp đất có 1 giây miễn sát thương.`,
`Dưới giếng nhiệt độ cố định 35°, không dẫn Charlie đến, nhân vật không bị ướt; sấm sét, chó săn, sinh vật bóng tối, Krampus, Deerclops và Bearger tấn công, sụp hố Antlion, mưa chim và ếch cùng các sự kiện thế giới không vào dưới giếng.`,
`Thành viên dưới giếng không dùng được thao tác bản đồ, dịch chuyển bằng Gậy Tím, Đồng Hồ Truy Nguyên và Đồng Hồ Khe Nứt, Đá Cát, dịch chuyển của Winona, triển khai và xây dựng cần chọn điểm đặt; nhảy hồn, Gậy Lười chỉ đặt được ở vùng hoạt động dưới giếng; Thiên Địa Bảo Giám mất hiệu lực; Diều Hâu Tầm Tung của Dương Tiễn bị cấm, điểm rơi của Khu Lôi Sách Điện bị giới hạn trong giếng. Đồng hồ đi ngược và chế tạo trong ba lô không bị ảnh hưởng.`,
`Chết dưới giếng ngoài thời gian chiến đấu thì thành ma sẽ bị đưa về miệng giếng; hồn chết trong chiến đấu ở lại dưới giếng và đồng đội cứu được.`])],

['tq-hp-ct','Quy trình chạm trán',YU([
`Chỉ khi bão cát mùa hè đang thổi mà có người xuống giếng thì đáy giếng mới xuất hiện “Tiểu Thử bị trói” và trụ phong ấn đá cát; không có bão cát vẫn xuống được nhưng dưới giếng trống không.`,
`Lại gần chuột nhỏ nhấp chuột phải <b>“Xé bùa”</b> là khai chiến: lối ra ở miệng giếng lập tức khóa, trong chiến đấu không leo ra được; khi chiến đấu thường lối vào mở, đồng đội có thể xuống chi viện, giai đoạn ảo cảnh và quá độ liên quan thì khóa miệng giếng.`,
`Trong lúc Hoàng Phong hiện hình vào sân không thể bị tấn công; sau khi bắt đầu tấn công, mục tiêu đầu tiên là người xé bùa.`,
`Hoàng Phong Đại Thánh chọn mục tiêu động, ưu tiên truy đuổi người chơi gây sát thương cao nhất; nhiều người thường đổi mục tiêu sau khi điểm danh liên tiếp hai chiêu, người đang đẩy châu được ưu tiên, một người không bị giới hạn đổi mục tiêu.`])+
YDTB(['Thuộc tính','Số liệu / quy tắc'],[
['Máu','18000, không đổi theo số người'],
['Giới hạn sát thương một lần','150 (trừ hiệu ứng giết thẳng)'],
['Loại thực thể','Thực thể vị diện: sát thương thường bị nén, sát thương vị diện hiệu quả hơn'],
['Kháng trạng thái','Không cháy, không đóng băng, không bị thôi miên']])],

['tq-hp-chieu','Chiêu thức và cách ứng phó',YDTB(['Chiêu','Sát thương hiện tại','Đọc chiêu và cách tránh'],[
['Liên Trảo · Nhảy Bổ','68 thường + 30 vị diện','Nhảy đến cạnh mục tiêu bổ ra phía trước; đi dọc một bước là tránh được'],
['Liên Trảo · Quét Ngang','50 thường + 30 vị diện','Quét hình quạt trái phải; tránh cả hai vuốt thì Hoàng Phong lộ sơ hở khoảng 1,33 giây (lúc này Hoàng Phong bị đánh sẽ lắc)'],
['Quá Đường','120 thường + 30 vị diện, đẩy lùi','Trên đất hiện vạch cát và tụ gió trước, rồi quét ngang đến tường, dải gió khá rộng; rời khỏi dải ngang này là được'],
['Trụy Tập','138 thường + 30 vị diện','Điểm danh người chơi ở xa, người dùng đòn từ xa đánh trúng Hoàng Phong được ưu tiên; không có cảnh báo, Hoàng Phong lao tới thì đổi hướng ngang là tránh được'],
['Băng Sa','Lõi 110 thường + 30 vị diện; hai vòng cát mỗi vòng 66 thường + 30 vị diện','Dùng khi mục tiêu chính ở xa; bám mục tiêu khoảng 0,9 giây trước khi khóa, rồi đập xuống và lan hai vòng cát. Tốc độ cao dễ tránh hơn (như Gậy Đi Bộ), chạy quay lưng sau khi khóa cũng tránh được'],
['Hồi Phong','40 thường + 20 vị diện','Kích hoạt khi đánh trong phạm vi sát thân Hoàng Phong mà từ ngoài hướng mặt của nó (trên, dưới, sau lưng); tụ gió ngắn rồi mọi người trong cự ly gần bị thương và bị cuốn về chính diện Hoàng Phong. Sau khi đánh ở điểm mù nên rời đi sớm, đoán trước đường chạy'],
['Rút Bước','—','Khi người chơi dán sát, Hoàng Phong sẽ lách rút ra trước rồi phản đòn']])+YU([
`Khi nhiều người chiến đấu, Băng Sa khóa mục tiêu chính, dưới chân mỗi người chơi còn lại mọc một gai cát (32 sát thương, có bóng cảnh báo).`,
`<b>Bão cát làm chậm:</b> trong lúc Hoàng Phong làm phép nổi gió, người chơi dưới giếng tốc độ ×0,6; đeo kính bảo hộ chính thức bất kỳ hoặc mang Tị Trần Đan thần thoại thì miễn nhiễm.`])+
YH4('Hoàn Thi Bỉ Thân (还施彼身)')+
`<p>Hoàng Phong với một số vũ khí tầm xa quen thuộc, khi bắn trúng nó sẽ bị gió cát cuốn, lơ lửng một lát rồi <b>bắn ngược về người bắn</b> theo tốc độ gốc, tính theo sát thương của chính người bắn, ví dụ: ống thổi tên và ống thổi tên điện, Súng Hú, ná thun, kim ong và kim độc Bàn Ti thần thoại, v.v.</p>`],

['tq-hp-moc','Các mốc máu trong chiến đấu',YDTB(['Mốc','Thay đổi chiến đấu'],[
['80%','Châu Trận Hoàng Phong lần thứ nhất'],
['60%','Châu Trận lần thứ hai, đồng thời Hoàng Phong mở “Quá Đường Tiệt Lộ”; sau Châu Trận vào Tam Muội Ảo Cảnh'],
['20% trong ảo cảnh','Mở Ảnh Trận Hoàng Phong, nhìn thấu ảnh trận thì phá cảnh'],
['Sau phá cảnh','Chung chiến: ra chiêu nhanh hơn, máu dưới 5% thì tung đòn cuối']])+
`<p>Khi một đòn sát thương cùng lúc vượt nhiều mốc máu, chỉ vào quy trình của mốc sâu nhất.</p>`],

['tq-hp-chau','Hoàng Phong Châu Trận (黄风珠阵)',YU([
`<b>Triệu châu:</b> Hoàng Phong Châu từ trời rơi xuống đập vào mỗi người chơi (50 sát thương), sau đó Hoàng Phong ngự châu dệt lưới, quét qua sân bốn nét chia hai lượt (40 thường + 20 vị diện), giữa có cửa sổ hạ cánh; trong suốt châu trận Hoàng Phong vẫn bị đánh được, cũng ra chiêu như thường.`,
`Số châu tăng theo số người: 1/2/3/4 người trở lên lần lượt là <b>6/8/10/12</b> viên, trên sân tối đa 12 viên.`,
`<b>Cách giải:</b> nhấn giữ chuột phải để đẩy châu, đẩy châu vào rãnh châu làm sáng. Khi đẩy có thể đổi hướng bằng phím mũi tên hoặc chuột, tốc độ đẩy tăng dần từ chậm đến nhanh nhất, quá trình đẩy không bị bão cát làm chậm thêm.`,
`Châu có 150 máu, đánh vỡ được; vỡ rồi tại chỗ mọc gai cát (32 sát thương), đồng thời mất một phần nguyên liệu phong ấn.`,
`<b>Khi thu trận có rãnh sáng:</b> Phong Ấn Chi Thủ tóm Hoàng Phong xuống, theo số rãnh sáng 1/2/3 trấn áp <b>3/5/6 giây</b>, trong lúc đó cả đội gây sát thương; trong lúc trấn áp đẩy thêm châu vào rãnh trống có thể kéo dài. Khi Hoàng Phong thoát, mọi châu còn lại trên sân đều nổ thành gai cát.`,
`<b>Khi thu trận không có rãnh sáng:</b> giáng mưa châu, mỗi người tối đa 3 viên (120 thường + 30 vị diện và đẩy lùi), rơi xuống vỡ thành gai cát.`,
`Lượt thứ hai của Châu Trận lần hai xuất hiện <b>“Quá Đường Tiệt Lộ”</b>: châu xếp thành một bức tường dọc, chỉ chừa hai khe hẹp, đồng thời hiện vạch cát quá đường; tường quét qua toàn sân, Hoàng Phong sau đó theo khe quá đường ngang. Có thể đi qua khe còn lại, đánh vỡ một viên châu trong tường để mở đường, hoặc đợi quá đường xong rồi mới đi qua khe bị chặn.`])],

['tq-hp-ao','Ảo cảnh và Ảnh trận',YU([
`Sau Châu Trận lần hai, Hoàng Phong nhảy vào giữa sân (lõi hạ cánh và vòng cát vẫn gây sát thương) khởi thế làm phép, trong lúc đó không bị đánh được.`,
`Trong <b>Tam Muội Ảo Cảnh</b> miệng giếng khóa, dây lối ra, đèn, cờ và cột sáng trăng ẩn đi; giới hạn tốc độ người chơi bị ép xuống 6, tăng tốc như Gậy Đi Bộ mất hiệu lực.`,
`<b>Ngoại lực tán tận:</b> khi vào ảo cảnh, các BUFF tăng sát thương, giảm sát thương, hồi máu hút máu và miễn cứng đờ từ thức ăn, đan dược, chiến ca và dược hiệu chày ngọc (Kinh Quyết, Hoạt Huyết) trên người bị xua tan, trong ảo cảnh dùng lại cũng không có hiệu lực (vật phẩm vẫn bị tiêu); các Nguyên Thìn Tinh Quân cũng tạm rời, Tứ Tượng Tam Hợp Cục của Bàn Ti không bị ảnh hưởng. Sau phá cảnh, giải hạn chế, Thập Nhị Nguyên Thìn khôi phục; BUFF đã bị xua tan không tự khôi phục.`])+
YH4('Chiêu hư ảnh trong ảo cảnh')+YU([
`<b>Lưu Ảnh Phốc Nhân:</b> sau khi bản thể nhảy bổ để lại bóng cát tại chỗ (tối đa 2), khoảng 2 giây sau vồ người chơi gần nhất.`,
`<b>Hoành Tảo Tàn Ảnh:</b> sau khi bản thể quét ngang, tàn ảnh quét lại một lần ở chỗ cũ.`,
`<b>Hư Ảnh Quá Đường:</b> ba đường lần lượt quá đường, có thể trốn vào đường đã quét qua.`,
`<b>Hư Thực Trụy Tập:</b> hai đường vồ giao thành chữ thập trên mục tiêu, hư ảnh vồ trước, bản thể theo sau.`,
`Hư ảnh bị đánh trúng bất kỳ một cái nào trước khi ra tay sẽ tan, vài khung hình lúc ra tay thì không đánh tan được; Hồi Phong, Băng Sa dùng như thường nhưng dưới giới hạn tốc độ rất khó tránh Băng Sa.`])+
YH4('Ảnh trận')+YU([
`Khi máu trong ảo cảnh còn 20%, Hoàng Phong hóa ra bốn bóng cát, bản thân cũng ngụy trang thành bóng cát, đánh ba lượt: lượt một nhảy bổ, lượt hai trụy tập, lượt ba quá đường; mỗi lượt bản thể ra tay cuối cùng, khi khởi trận nổi gió làm chậm (kính bảo hộ hoặc Tị Trần Đan miễn được, nhưng giới hạn tốc độ của ảo cảnh vẫn tồn tại).`,
`<b>Nhìn thấu:</b> đánh trúng bản thể bất kỳ một cái, bóng cát lập tức đứng hình nổ tan, bản thể mất thăng bằng khoảng 1 giây (có thể gây sát thương), sau đó tái tổ hợp vào lượt kế tiếp.`,
`Lần nhìn thấu thứ ba là <b>phá cảnh</b>: Tam Muội Ảo Cảnh vỡ, Hoàng Phong ngã xuống đất, có thể nhân lúc cả đội gây sát thương.`,
`Mỗi ván chỉ vào ảo cảnh một lần; bị giết trong ảo cảnh sẽ phá cảnh trước rồi mới ngã, không vào chung chiến nữa.`])],

['tq-hp-cc','Chung chiến sau phá cảnh',YU([
`Thời gian hồi giữa các chiêu giảm một nửa, hồi chiêu rút ngắn.`,
`Cứ ra 2~3 chiêu thì thở dốc một lúc, có thể nhân đó gây sát thương; lúc này pháp lực Hoàng Phong suy yếu và đèn trước trong giếng bắt đầu nhấp nháy.`,
`<b>Đòn cuối “Quát Tận Khô Tỉnh”:</b> máu dưới 5% thì đèn trước tắt hết, nổi cát đặc làm chậm (kính bảo hộ hoặc Tị Trần Đan miễn được), giới hạn tốc độ mọi người chơi bị ép xuống 6.`,
`Sau đó Hoàng Phong Đại Thánh theo ba đường thứ tự ngẫu nhiên quét qua lại ba lượt, mỗi lượt hiện vạch cát trước rồi xông ra, phán định như Quá Đường.`,
`Quét ba lượt xong thì kiệt sức ngã xuống, nếu vẫn chưa bị hạ thì tiếp tục chiến đấu đến khi gục.`])],

['tq-hp-td','Toàn đội diệt và làm lại',YU([
`Dưới giếng không còn người chơi sống thì Hoàng Phong chờ ngắn rồi vào màn rút lui (suốt thời gian không gây sát thương, lối vào khóa): đập vỡ bộ xương trong giếng, sau đó đưa mọi hồn ma về miệng giếng.`,
`Toàn đội diệt xong thế giới trở về trạng thái bị trói, không hồi chiêu, không có phần thưởng nào; bão cát mùa hè lần sau có thể thách đấu lại.`,
`Người chơi đứt kết nối rồi vào lại giữa trận bị đưa về miệng giếng; khi server đọc lại save trong trận, Hoàng Phong không được lưu, thế giới về trạng thái bị trói.`])],

['tq-hp-pt','Phần thưởng hạ gục',YDTB(['Phần thưởng','Số lượng','Ghi chú'],[
['Bảo thạch cam','1 viên','Rơi cố định, hệ rơi thường'],
['Bảo thạch vàng','1 viên','Rơi cố định, hệ rơi thường'],
['Đá Cát','8 cái','Rơi cố định, hệ rơi thường'],
['Bảo thạch vàng / cam','Mỗi loại 50% xác suất 1 viên','Hệ rơi thường, chịu ảnh hưởng may mắn của người ra đòn cuối'],
['Định Phong Châu','Cố định 1 viên','Rơi tại nơi Hoàng Phong biến mất; không chịu rơi nhiều lần của Hợi Trư, v.v.'],
['Tam Muội Trấn Ách Kỳ','25% xác suất','Có xác suất nhận khi gõ lá cờ chiến trong giếng']])+
`<p>Rơi nhiều lần hợp lệ như Hợi Trư chỉ tác dụng lên bảng rơi thường, không nhân bản Định Phong Châu hay Tam Muội Trấn Ách Kỳ.</p>`+
YH4('Cờ chiến trong giếng')+YU([
`Khi Hoàng Phong biến mất, lá Tam Muội Trấn Ách Kỳ dùng để trấn áp Hoàng Phong hóa cát tan đi, chỉ còn lại một lá “Tam Muội Trấn Ách Kỳ” ở giữa đã mất Định Phong Châu.`,
`Dùng búa gõ <b>5 lần</b>: 25% xác suất rơi một lá Tam Muội Trấn Ách Kỳ lõi rỗng, chịu ảnh hưởng may mắn của người gõ búa cuối; không rơi cờ thì nhận 2 Dây Thừng và 6 Tơ Nhện.`,
`<b>Bảo đảm:</b> liên tiếp 3 lần không rơi cờ thì lần thứ 4 chắc chắn rơi; rơi cờ thì xóa bộ đếm bảo đảm.`,
`Mỗi lần đánh bại chỉ có một lá cờ, khi hồi chiêu phục tô kết thúc mà cờ chưa được gõ sẽ bị thu hồi, không tính vào bảo đảm và không có thưởng.`])],

['tq-hp-ps','Phục tô và thông báo',YU([
`Sau khi bị đánh bại vào hồi chiêu phục tô: cài đặt mod <b>“Hoàng Phong Đại Thánh: chu kỳ phục tô”</b> chọn được 10 ngày hoặc 20 ngày (mặc định 20 ngày), tính liên tục theo ngày trong game từ lúc bị đánh bại, không phân mùa.`,
`Hết hồi chiêu thì trở về trạng thái bị trói, vẫn phải đợi bão cát mùa hè có người xuống giếng thì chuột nhỏ mới xuất hiện.`,
`Khi bật “Thông báo làm mới BOSS thần thoại”, còn 3, 2, 1 ngày mỗi lần thông báo một câu <i>"【Yêu Vương】Hoàng Phong Đại Thánh phục tô"</i>, 5 giây cuối đếm ngược từng giây.`])]
]]
];
