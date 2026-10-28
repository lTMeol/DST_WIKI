/* Thần Thoại Thư Thuyết – Tab 4: Thủ lĩnh & quái vật
   Nạp SAU intro.js (TTTG, TTFG, TTYD) và yem-doc-tien/helpers.js (YDTB, YU, YN, YH4). */
const TTCX=(loai,lq)=>TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: '+loai,'Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: '+lq]);
const TTCL=(t)=>YN(t,'Lưu ý liên động Yêm Đốc Tiên');
const TTYX=(p,t)=>`<a style="cursor:pointer" onclick="go('#/mod/yem-doc-tien/${p}')">${t}</a>`;
const TTC=[
['tc-overview','Tổng quan thủ lĩnh &amp; quái vật',
TTCX('Tổng quan Boss và sinh vật đặc biệt','Hắc Phong Đại Vương, Tê Ngưu Tam Đại Vương, Tụ Bảo Kim Thiềm, Tử Khuê Huyền Điểu, Niên Thú')+
`<p>Trang này ghi lại điều kiện xuất hiện, số liệu chiến đấu, chiêu thức, vật phẩm rơi và vật phẩm liên quan của năm thủ lĩnh / sinh vật đặc biệt trong chủ đề Thần Thoại.</p>`+
TTCL('Thông báo làm mới yêu vương mặc định bật, sẽ nhắc toàn server vào 3, 2, 1 ngày trước khi làm mới và 5 giây cuối; chu kỳ làm mới của Hắc Phong Đại Vương, Kim Thiềm và ba Tê Ngưu mặc định đều là 5 ngày, cũng có thể đổi về chu kỳ nguyên bản của từng con. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')],

['tc-blackwind','Hắc Phong Đại Vương',
TTCX('Boss','Hũ Mật, mật ong, Sữa Ong Chúa, Cà Sa, Hồ Lô Đan Dược')+
`<div class="tt-gallery"><figure style="width:170px"><img src="images/npcs/boss-blackwind.png" alt="Hắc Phong Đại Vương" style="width:160px;height:auto" loading="lazy"><figcaption>Hắc Phong Đại Vương</figcaption></figure><figure style="width:170px"><img src="images/npcs/item-honey-pot.png" alt="Hũ Mật" style="width:160px;height:auto" loading="lazy"><figcaption>Hũ Mật</figcaption></figure></div><p>Hắc Phong Đại Vương không phải ngẫu nhiên đi ngang qua. <b>Hũ Mật</b> trong thế giới chỉ nhận <b>mật ong hoặc Sữa Ong Chúa</b>, tổng cộng chín ô; khi chín ô đã đầy và đóng vật chứa lại, Hắc Phong sẽ xuất hiện cách hũ khoảng 30 ô rồi lao về phía Hũ Mật, khoảng 5 giây sau biến thành bản thể. Trong lúc chờ, Hũ Mật bị khóa; sau khi Hắc Phong Đại Vương xuất hiện sẽ bước vào thời gian hồi <b>20 ngày game</b>.</p>`,
[
['tc-bw-combat','Số liệu chiến đấu & kỹ năng',
`<p>Hắc Phong Đại Vương có <b>12500 máu</b>, sát thương cơ bản 200, chu kỳ đánh khoảng 3 giây; xung quanh mục tiêu chính khoảng 6,2 ô còn chịu thêm đòn lan bằng 80% sát thương cơ bản. Đòn đánh thường sẽ hất văng vật cầm tay chưa được bảo vệ; đòn giậm đất dựng lên vòng chướng ngại đá bán kính khoảng 13 ô; xung phong và giậm đất sẽ phá hủy cây, đá và các công trình có thể phá khác.</p>`+
YDTB(['Chiêu thức','Dấu hiệu & phạm vi','Quy tắc'],[
['Vỗ thường','Nhấc người vung đòn, chu kỳ khoảng 3 giây','Mục tiêu chính chịu 200 sát thương cơ bản, đơn vị xung quanh chịu sát thương lan; vật cầm tay có thể bị hất văng'],
['Giậm đất dựng đá','Đứng thẳng giậm mạnh, khoảng 10 giây có thể dùng lại','Sau bốn vòng giậm đất, tạo 32 khối chướng ngại đá hình vòng ở bán kính khoảng 13 ô'],
['Hắc Phong xoay','Khi máu dưới 50%, trong đòn đánh thường có thể chuyển thành Hắc Phong','Hắc Phong gây 50 sát thương mỗi giây cho mục tiêu trong 4,5 ô; thời gian hồi cơ bản 20 giây, khi máu dưới 20% rút xuống 15 giây'],
['Phản ứng bốc cháy','Khi bị đốt sẽ vào thẳng Hắc Phong xoay','Lửa không cố định nó tại chỗ mà ngược lại lập tức kích hoạt sát thương lan tần suất cao'],
['Xung phong phá hoại','Bốn chân tăng tốc lao tới','Cây, đá và đa số công trình phá được trên đường đi đều bị phá hủy; một số tài nguyên tự nhiên sẽ không rơi đồ bình thường']])+
`<p>Trong chiến đấu nó gây hào quang tinh thần rất mạnh lên người chơi gần đó: khi có mục tiêu chiến đấu khoảng -400 tinh thần mỗi phút, chưa giao chiến cũng khoảng -100 mỗi phút.</p>`+
YH4('Vật phẩm rơi')+
YDTB(['Vật rơi','Số lượng hoặc xác suất'],[
['Cục Vàng May Mắn','Cố định 5 cái'],
['Đồng Tiền Thần Thoại','Cố định 5 cái, thêm 5 lần xét 50% độc lập nên tổng là 5–10 cái'],
['<img class="tt-ico" src="images/npcs/item-coin-string.png" alt="Chuỗi Đồng Tiền" loading="lazy"> Chuỗi Đồng Tiền','50% xác suất 1 cái'],
['Tổ Ong','Cố định 3 cái, thêm 50% xác suất rơi thêm 1 cái'],
['Hồ Lô Đan Dược','Cố định 1 cái'],
['<img class="tt-ico" src="images/npcs/item-kasaya.png" alt="Cà Sa" loading="lazy"> Cà Sa','Cố định 1 món'],
['Bản thiết kế Cẩm Lan Cà Sa','Cố định 1 tờ'],
['<img class="tt-ico" src="images/npcs/item-brocade-kasaya.png" alt="Cẩm Lan Cà Sa" loading="lazy"> Cẩm Lan Cà Sa hoàn chỉnh','5% xác suất rơi thêm 1 món']])],
['tc-bw-kasaya','Cà Sa & Cẩm Lan Cà Sa',
`<p>Cà Sa thường cần <b>Tơ Nhện ×9, Đuôi Người Thỏ ×3, Da Slurper ×3</b>. Khi mặc ở ô thân, mức tiêu hao độ đói giảm còn 0,8 lần, hồi khoảng 6 tinh thần mỗi phút; nó có độ bền sử dụng riêng, cạn là biến mất, nhưng không có khả năng giảm sát thương như giáp.</p>
<p>Cẩm Lan Cà Sa cần <b>Cà Sa thường, Da Gấu, Vảy Rồng</b>, bản thiết kế do Hắc Phong Đại Vương rơi cố định. Nó giảm tiếp mức tiêu hao độ đói còn 0,5 lần, hồi khoảng 9 tinh thần mỗi phút, và khiến một số sinh vật bóng tối không còn chủ động thù địch; cũng hao theo thời gian sử dụng, cũng không phải giáp.</p>`+
TTCL('Chức năng chống bóng ảnh của Cẩm Lan Cà Sa được tự động sửa: bóng ảnh vẫn xuất hiện và quấy rối xung quanh nhưng không chủ động tấn công; sau khi chủ động tấn công bóng ảnh, hiệu ứng này mất tác dụng 12 giây. Độ bền, hệ số đói và lượng hồi tinh thần không đổi. Xem chi tiết ở '+TTYX('compatibility','Sửa lỗi tương thích')+'.')+
TTCL('Yêm Đốc Tiên còn có trận đánh thủ lĩnh “Hùng Bi Chân Thân”: phải hoàn thành khống chế Thôn Thiên trước khi Hắc Phong Đại Vương gốc bại trận, và để nó bại trận trong đấu trường. Hắc Phong gốc vẫn được tính tử vong và vật phẩm rơi theo chương này trước, sau đó mới có thể hiện chân thân. Xem chi tiết ở '+TTYX('characters','Nhân vật tinh quái')+'.')]
]],

['tc-rhino','Tê Ngưu Tam Đại Vương',
TTCX('Nhóm Boss','Bàn thờ Thanh Trúc Châu, Bàn Đào thường, đêm mùa xuân, tim ba màu, sừng tê giác')+
`<p>Điều kiện kích hoạt chính xác của bàn thờ cũ nát ở Thanh Trúc Châu gồm bốn điều:</p>
<ol><li>Hiện tại là <b>đêm mùa xuân</b>;</li><li>Trong bàn thờ đã đặt một quả <b>Bàn Đào thường</b>, không phải Đại Bàn Đào;</li><li>Nến trên bàn thờ đã được thắp bằng bất kỳ nhiên liệu cháy được nào;</li><li>Bàn thờ không đang trong thời gian hồi triệu hồi 50 ngày game.</li></ol>
<p>Bàn Đào sau khi đặt vào được giữ tối đa 600 giây, nến cháy tối đa 180 giây, và hễ trời sáng thì cả hai đều bị xóa sạch.</p>
<p>Ba con tê giác mỗi con có <b>10000 máu</b>. Khi xuất hiện, chúng lần lượt chiếm ba tư thế chiến đấu và cứ khoảng <b>40 giây</b> luân phiên một lần; tư thế không cố định vĩnh viễn theo Tị Hàn, Tị Thử, Tị Trần, cũng không đơn giản là “chết một con, các con còn lại lên một giai đoạn vĩnh viễn”.</p><div class="tt-gallery"><figure style="width:160px"><img src="images/npcs/rhino-ti-han.png" alt="Tê Ngưu Tị Hàn" style="width:150px;height:auto" loading="lazy"><figcaption>Tê Ngưu Tị Hàn</figcaption></figure><figure style="width:160px"><img src="images/npcs/rhino-ti-thu.png" alt="Tê Ngưu Tị Thử" style="width:150px;height:auto" loading="lazy"><figcaption>Tê Ngưu Tị Thử</figcaption></figure><figure style="width:160px"><img src="images/npcs/rhino-ti-tran.png" alt="Tê Ngưu Tị Trần" style="width:150px;height:auto" loading="lazy"><figcaption>Tê Ngưu Tị Trần</figcaption></figure></div>`,
[
['tc-rh-posture','Giảm sát thương theo số người & tư thế chiến đấu',
`<p>Tê giác được giảm sát thương theo <b>số người chơi thực tế trong 32 ô quanh bàn thờ</b>: 1 người là 0, 2–3 người là 25%, từ 4 người trở lên là 50%; người chơi online ở khu vực khác của server không được tính.</p>`+
YDTB(['Tư thế','Số liệu cơ bản (đối với người chơi là trước khi trừ giáp)','Chiêu thức và số liệu'],[
['Cận chiến','Chu kỳ đánh 3 giây, tầm đánh khoảng 4; sát thương gốc 200, với người chơi là 100; không hồi máu','Vung đòn chính diện có phạm vi hình quạt và đẩy lùi.'],
['Pháp thuật','Chu kỳ đánh 3 giây, tầm tìm mục tiêu / thi pháp tăng mạnh; sát thương gốc 400, với người chơi là 200; hồi 10 máu mỗi giây','Khoảng 12 giây thi pháp được một lần. Tị Hàn tạo vòng băng, kết thúc gây 100 sát thương và đóng băng; Tị Thử tạo vòng lửa, kết thúc gây 200 sát thương; Tị Trần tạo vùng cát bụi, vùng lõi giảm tốc độ di chuyển còn 30%, khi kết thúc sinh ra lốc xoáy.'],
['Xung phong','Tầm đánh khoảng 8; sát thương gốc 300, với người chơi là 150; hồi 10 máu mỗi giây','Khoảng 10 giây xung phong lại được một lần, dọc đường xung phong liên tục xét sát thương và phá hủy vật phá được.']])+
YH4('Cơ chế hồi sinh')+
`<p>Ba con tê giác vừa xuất hiện đều có chung một cơ hội hồi sinh. Khi con đầu tiên ngã xuống, các anh em còn sống sẽ vào động tác gầm thét và hồi sinh, người thi pháp vô địch trong lúc làm động tác này, con ngã xuống sẽ đứng dậy với <b>25% máu</b>; đồng thời các tê giác còn sống khác nếu dưới 25% cũng được nâng lên 25%. Sau khi lần hồi sinh này hoàn tất, cả ba đều mất tư cách hồi sinh lần nữa, từ đó đánh gục mới thực sự tính vật phẩm rơi.</p>
<p>Tư thế cận chiến và xung phong thường không chủ động chọn mục tiêu trên biển; tư thế pháp thuật vẫn có thể khóa người chơi trên biển, điểm rơi pháp thuật gây 200 sát thương lên thuyền gần đó. Cả ba loại pháp thuật đều có thể hạ người chơi đang bay.</p>
<p>Ba con tê giác không thể bị đóng băng thông thường, xét ngủ cũng không làm chúng ngủ; chúng còn kháng nổ, sát thương lửa thường chỉ tính 20%, Tị Thử không bị đốt cháy hay chịu sát thương quá nóng.</p>
<p>Nếu quanh bàn thờ khoảng 28 ô liên tục khoảng 16 giây không có người chơi còn sống, các tê giác còn sống sẽ rời đi hết; thời gian hồi 50 ngày đã bắt đầu khi triệu hồi vẫn phải tuân thủ.</p>`],
['tc-rh-loot','Vật phẩm rơi & nguyên liệu',
`<p>Mỗi con tê giác rơi cố định 1 Sừng Hộ Vệ, 3 đá quý đúng màu, 1 Chuỗi Đồng Tiền, 1 tim đúng màu, 1 Đèn Lồng Đỏ, 4 miếng thịt và 5 Cục Vàng May Mắn.</p>`+
YDTB(['Nguyên liệu','Công dụng chính'],[
['<img class="tt-ico" src="images/npcs/heart-ti-han.png" alt="Tim Tị Hàn (tim xanh)" loading="lazy"> Tim Tị Hàn (tim xanh)','Tị Thử Đan, Sương Việt Phủ'],
['<img class="tt-ico" src="images/npcs/heart-ti-thu.png" alt="Tim Tị Thử (tim đỏ)" loading="lazy"> Tim Tị Thử (tim đỏ)','Tị Hàn Đan, Thử Dục Đao'],
['<img class="tt-ico" src="images/npcs/heart-ti-tran.png" alt="Tim Tị Trần" loading="lazy"> Tim Tị Trần','Tị Trần Đan, Ngật Đạt Đằng'],
['Sừng Tê Giác','Ba loại đan môi trường, giáp đầu nhân vật, v.v.']])],
['tc-rh-pills','Đan dược ba tim',
`<p>Ba loại tim trước hết phục vụ tuyến đan môi trường của chính ba con tê giác. Để trong túi đồ thường của người chơi là có hiệu lực và liên tục tiêu hao thời hiệu; bỏ vào Hồ Lô Đan Dược thì tạm dừng thời hiệu, đồng thời cũng ngừng tiêu hao.</p>`+
YDTB(['Đan dược','Hiệu quả cốt lõi','Công thức & luyện tiếp'],[
['<img class="tt-ico" src="images/npcs/pill-ti-thu.png" alt="Tị Thử Đan" loading="lazy"> <b>Tị Thử Đan</b>','Miễn nhiễm sát thương lửa; nhiệt độ không lên quá mức ngưỡng quá nóng trừ 10 điểm','Sừng Tê Giác, <b>Tim Tị Hàn (xanh)</b>, Lá Dương Xỉ, Diêm Tiêu; luyện tiếp bằng đá quý xanh, Lá Dương Xỉ, Diêm Tiêu'],
['<img class="tt-ico" src="images/npcs/pill-ti-han.png" alt="Tị Hàn Đan" loading="lazy"> <b>Tị Hàn Đan</b>','Không còn tăng độ ẩm, tốc độ khô tăng; nhiệt độ không xuống dưới 10','Sừng Tê Giác, <b>Tim Tị Thử (đỏ)</b>, Lá Dương Xỉ, Diêm Tiêu; luyện tiếp bằng đá quý đỏ, Lá Dương Xỉ, Diêm Tiêu'],
['<img class="tt-ico" src="images/npcs/pill-ti-tran.png" alt="Tị Trần Đan" loading="lazy"> <b>Tị Trần Đan</b>','Không bị bão cát che tầm nhìn, có tầm nhìn tương đương kính bảo hộ','Sừng Tê Giác, <b>Tim Tị Trần (vàng)</b>, Lá Dương Xỉ, Diêm Tiêu; luyện tiếp bằng đá quý vàng, Lá Dương Xỉ, Diêm Tiêu']])+
`<p>Tên Tị Thử và Tị Hàn với màu tim là <b>đối ngược</b>: tim xanh làm Tị Thử, tim đỏ làm Tị Hàn. Luyện lại sẽ lấy đan dược đã có làm nguyên liệu và khôi phục thời hiệu, không cho thêm một viên. Quy tắc chung của việc bỏ liệu vào Bát Quái Lô và Hồ Lô Đan Dược xem ở <a style="cursor:pointer" onclick="go('#/mod/than-thoai/artifacts')">Luyện đan &amp; pháp bảo</a>.</p>`+
TTCL('Mọi pháp bảo Yêm Đốc Tiên + mỗi loại một tim ba màu có thể luyện lại trong lò thành Thốn Tâm Tinh Phách.')],
['tc-rh-weapons','Vũ khí ba tim',
YDTB(['Vũ khí','Công thức & thời gian','Đòn đánh thường & kỹ năng chủ động'],[
['<img class="tt-ico" src="images/npcs/weapon-frost-axe.png" alt="Sương Việt Phủ" loading="lazy"> Sương Việt Phủ','Rìu Thủy Tinh Mặt Trăng, Tim Tị Hàn (xanh), Đá Mặt Trăng, đá quý xanh; 960 giây','51 sát thương, 400 lần dùng; đánh trúng có thể dập lửa và tăng độ lạnh. Chủ động tiêu hao 5 độ đói và 1 độ bền, hồi 10 giây, gây lạnh mạnh hơn trong vùng hình nón khoảng 4 ô; đồng thời là rìu cấp một, khi trang bị cho 25 điểm hạ nhiệt'],
['<img class="tt-ico" src="images/npcs/weapon-sand-club.png" alt="Ngật Đạt Đằng" loading="lazy"> Ngật Đạt Đằng','Gậy Thulecite, Tim Tị Trần (vàng), Đá Cát, đá quý vàng; 960 giây','51 sát thương, 400 lần dùng; đòn thường đánh trúng còn gây thêm 51 sát thương lan cho mục tiêu trong khoảng 3 ô. Sau khi trang bị chu kỳ đánh còn khoảng 0,8 giây; chủ động tiêu hao 5 độ đói và 1 độ bền, hồi 20 giây, nhảy về phía mục tiêu và theo khoảng cách gây khoảng 50–200 sát thương lan'],
['<img class="tt-ico" src="images/npcs/weapon-flame-blade.png" alt="Thử Dục Đao" loading="lazy"> Thử Dục Đao','Dao Thủy Tinh, Tim Tị Thử (đỏ), Cục Vàng, đá quý đỏ; 960 giây','600 lần dùng; sát thương thay đổi theo nhiệt độ người cầm trong khoảng 36–72. Chủ động tiêu hao 5 độ đói và 1 độ bền, hồi 10 giây, rải 8 đoạn tuyến lửa về phía trước, mỗi mục tiêu chỉ trúng một lần và chịu gấp đôi sát thương của vũ khí khi đó; khi trang bị cung cấp nguồn nhiệt cao']])+
`<p>Cả ba vũ khí đều có thể dùng “<b>vũ khí gốc, đá quý đỏ, đá quý xanh, đá quý tím</b>” để luyện lại thành phẩm đầy độ bền, tốn 480 giây.</p>`+
TTCL('Đòn đánh thường và kỹ năng của vũ khí ba tim đều có thể nhận sát thương vị diện từ thối luyện; tuyến lửa của Thử Dục Đao không nhân đôi phần sát thương này. Khi độ bền cạn, kỹ năng chủ động ngừng dùng; chưa đủ bậc thì không còn gây sát thương vũ khí, đủ bậc tối đa vẫn giữ sát thương vị diện thối luyện. Ở bậc tối đa vẫn có thể tiêu hao 1 phần Tim Hỏa Viên Thạch để sửa đầy độ bền, đã đầy thì không tiêu hao. Xem chi tiết ở '+TTYX('systems','Hệ thống Hỏa Nguyên Thối Luyện')+'.')]
]],

['tc-toad','Tụ Bảo Kim Thiềm',
TTCX('Boss sự kiện','Tượng Kim Nguyên Bảo, nuốt người, Tụ Bảo Bồn, Cây Rung Tiền, Đồng Tiền Thần Thoại')+
`<div class="tt-pic"><img src="images/npcs/toad-statue.png" alt="Tượng Kim Nguyên Bảo" style="width:150px" loading="lazy"></div><p>Tượng Kim Nguyên Bảo ở rìa ngoài Quảng Hàn Cung là vật kích hoạt Kim Thiềm. Dùng cuốc chim đào <b>3 lần</b>, tượng biến mất và Tụ Bảo Kim Thiềm hiện thân; thời gian hồi sinh của nó là <b>20 ngày game</b>.</p>
<div class="tt-pic"><img src="images/npcs/toad-boss.png" alt="Tụ Bảo Kim Thiềm" style="width:170px" loading="lazy"></div><p>Giới hạn máu của Kim Thiềm là 99999, và được đặt mức máu tối thiểu 1: theo nghĩa thông thường không thể bị giết. Ép nó xuống máu tối thiểu thì nó sẽ độn thổ rời đi, và tính phần thưởng theo “bức lui thành công”. Ở trạng thái cơ bản, tầm đánh khoảng 7, chu kỳ đánh 3,5 giây, sát thương gốc 100, với người chơi khoảng 50. Sát thương lửa vô hiệu với nó, nó không có trạng thái đóng băng; ngủ có tác dụng nhưng có 4 điểm kháng ngủ, và thôi miên liên tục sẽ càng khó.</p>`+
YDTB(['Giai đoạn máu','Thay đổi theo giai đoạn'],[
['100%—70%','Lì xì mỗi lần chọn 1 mục tiêu, đòn cơ bản và tung tiền gây địa chấn'],
['70%—40%','Mục tiêu lì xì tăng lên 2 người, thời gian hồi lì xì rút từ 14 giây còn 10 giây, quy mô tung tiền / địa chấn tăng'],
['40%—1 điểm','Lì xì vẫn 2 người, bắt đầu dùng đòn giậm đất liên tục với thời gian hồi cơ bản khoảng 20 giây']])+
`<p>Kim Thiềm định kỳ triệu hồi Kim Thiềm nhỏ. Khi số lượng trên sân là 1–4, 5–7, từ 8 con trở lên, bản thể lần lượt được giảm sát thương 10%, 20%, 30%; sát thương cơ bản đối với người chơi tăng từ 50 lên 60, 75, 125, chu kỳ đánh rút từ 3,5 giây xuống 3, 2,5, 2 giây.</p>
<p>Nuốt người chỉ được thử khi trên sân đã có Kim Thiềm nhỏ và trong 8 ô quanh Kim Thiềm có ít nhất hai người chơi còn sống. Sau khi nuốt thành công, đội có 10 giây cửa sổ cứu; tổng sát thương vượt 500 sẽ nhả người ra sớm, dù chưa đạt cũng sẽ nhả khi hết giờ, nhưng trong lúc này người bị nuốt không thể hành động bình thường. Sau khi bị nhả và chạm đất, mọi vật phẩm đang trang bị có độ bền giáp của nhân vật lúc đó đều chịu một lần sát thương bằng giới hạn độ bền của chính nó, thường sẽ bị cạn thẳng; giáp không trang bị trong túi đồ không tham gia lần tính này. Sau khi nuốt thành công chiêu này hồi 60 giây, nếu không nuốt được mục tiêu thì khoảng 30 giây sau có thể thử lại.</p>`+
TTCL('Khi bật Hỏa Nguyên Thối Luyện, giáp được hỗ trợ đạt giới hạn thối luyện hiện tại của giáp sẽ có kháng vực sâu, có thể miễn lần bào mòn độ bền sau khi bị Kim Thiềm nuốt chạm đất; giáp chưa đủ cấp hoặc không được hệ thống thối luyện hỗ trợ vẫn tính theo quy tắc nguyên bản. Xem chi tiết ở '+TTYX('systems','Hệ thống Hỏa Nguyên Thối Luyện')+'.')+
`<p>Bom lì xì: khoảng 3,5 giây sau sẽ được gỡ và sinh ra 1 Kim Nguyên Bảo dưới chân.</p>
<p>Sau khi bức lui thành công, rơi Tụ Bảo Bồn, 10–20 Đồng Tiền, 33 Cục Vàng May Mắn, 4 đá quý ngẫu nhiên, Đá Quý Cầu Vồng và 2 Chuỗi Đồng Tiền; nếu thế giới chưa sinh ra Cây Rung Tiền thì rơi thêm một cây Cây Rung Tiền.</p>`,
[
['tc-toad-bowl','Tụ Bảo Bồn (rút thưởng nguyên bản)',
`<div class="tt-pic"><img src="images/npcs/toad-bowl.png" alt="Tụ Bảo Bồn" style="width:170px" loading="lazy"></div><p>Tụ Bảo Bồn không có công thức chế tạo, chỉ có thể do Tụ Bảo Kim Thiềm rơi. Nó chỉ nhận <b>Cục Vàng May Mắn</b>: mỗi lần giao tiêu hao 1 cái, khoảng 0,5 giây sau hoàn thành một lần rút độc lập. Logic nguyên bản không có đếm lượt tích lũy, bảo đảm hay sở hữu cá nhân, vật phẩm rơi thẳng cạnh bồn, người chơi nào cũng nhặt được.</p>
<p>Tụ Bảo Bồn cũng không phải công trình vĩnh viễn. Khi vòng sau tượng Kim Nguyên Bảo bị đào ra và Kim Thiềm trồi lên lại, Tụ Bảo Bồn còn tồn tại trong thế giới sẽ bị xói mòn và gỡ bỏ cùng lúc; vì vậy nên hiểu nó là công trình rút thưởng có thời hạn do sự kiện Kim Thiềm vòng này để lại.</p>`+
YDTB(['Bậc thưởng','Xác suất bậc','Xác suất từng món trong bậc','Ứng viên xác suất bằng nhau'],[
['Bậc 1','50%','6,25%','Cục Vàng, Đá Cát, Hoa Sen, Da Heo, Lông Bò, Đồng Tiền Thần Thoại, Lông Thỏ, Diêm Tiêu'],
['Bậc 2','30%','5%','Bánh Răng, Mảnh Xương, Gỗ Sống, Đom Đóm, Chuột Chũi, Sừng Bò'],
['Bậc 3','10%','khoảng 0,526%','Hồ Lô, Tôm Hùm, Măng Tre, Bụi Gai, Bông Thép, cùng củ khổng lồ của Cà Rốt, Ngô, Bí Ngô, Cà Tím, Sầu Riêng, Lựu, Thanh Long, Dưa Hấu, Cà Chua, Khoai Tây, Măng Tây, Hành Tây, Tỏi, Ớt'],
['Bậc 4','5%','khoảng 0,227%','Hồ Lô Khổng Lồ, Sừng Dê Điện, Chất Nhầy Cừu Thép, Da Slurper, Ngà Hải Mã, Đồng Xu Mũi Heo, Tổ Ong, Bơ, Di Sơn Đan, Đằng Vân Đan, Thị Huyết Đan, Ngưng Vị Đan, Tráng Cốt Đan, Diêm Tiêu, Tử Khuê Thạch, Bom Rong Biển, đá quý tím / xanh / đỏ / cam / vàng / lục'],
['Bậc 5','3%','khoảng 0,158%','Làm Vườn Ứng Dụng, nhóm bản thiết kế đặc biệt, Mảnh Hóa Thạch, Giáp Vỏ Ốc, Đèn Lồng, Mandrake, Kiếm Bóng Đêm, Giáp Bóng Đêm, Gậy Đi Bộ, ba loại bánh trung thu, Kinh Cức Đan, Hoàn Hồn Đan, Chuỗi Đồng Tiền, Gậy Thulecite, Vương Miện Thulecite, Giáp Thulecite, Quả Cây Bạch Dương'],
['Bậc 6','1,5%','khoảng 0,079%','Đại Bàn Đào, Đá Quý Cầu Vồng, Vảy Rồng, Mắt Hươu Khổng Lồ, Da Cóc, Da Gấu, Tim Bóng Tối, Vương Miện Ong Chúa, Sừng Hộ Vệ, Sừng Cá Voi Một Sừng, Mỏ Thiên Ông Tà, Ba Lô Krampus, Kim Thiềm nhỏ, Hồ Lô Đan Dược có đan, Hộp Bánh Trung Thu, Tử Khuê Chiến Khôi, Tử Khuê Chiến Giáp, Thương Trúc, Gậy Gỗ Đào'],
['Bậc 7','0,5%','khoảng 0,071%','Tị Trần Đan, Tị Hàn Đan, Tị Thử Đan, Hồ Lô Đỏ Tử Kim, Tim Tị Thử, Tim Tị Hàn, Tim Tị Trần']])+
`<p>“Nhóm bản thiết kế đặc biệt” sau khi được rút trúng còn chọn đều ngẫu nhiên 1 tờ trong <b>9 bản thiết kế</b>: Lò Vảy Rồng, Mũ Nấm Đỏ / Lục / Lam, Đèn Mũ Nấm, Đèn Nấm, Tháp Dịch Chuyển Lười, Gói Buộc, Đinh Ba Chói Tai. Xác suất cả nhóm khoảng 0,158%, một bản thiết kế chỉ định khoảng <b>0,0175%</b>.</p>
<p>Số ít ứng viên có sản lượng thực không phải 1: Diêm Tiêu là 3 cái, Bom Rong Biển là 5 cái; Kim Thiềm nhỏ là 6 con. Hồ Lô Đan Dược được nạp sẵn Đằng Vân Đan, Thị Huyết Đan, Ngưng Vị Đan, Tráng Cốt Đan mỗi loại 1–2 viên; Hộp Bánh Trung Thu được nạp sẵn ba loại bánh trung thu mỗi loại 1 cái.</p>`+
YN('Trong kho thưởng nguyên bản hiện tại, Thanh Long khổng lồ và Đằng Vân Đan theo thử nghiệm thực tế của người chơi không thể rút ra hiệu quả, hai mục cộng lại chiếm khoảng <b>0,75%</b> tổng số lần rút.','Ghi chú bất thường')+
TTCL('Thân Kim Thiềm và các vật rơi nói trên vẫn tính theo quy trình nguyên bản; sau khi có Tụ Bảo Bồn, mặc định bật “Cải tiến Tụ Bảo Bồn” của Yêm Đốc Tiên, kho thưởng nguyên bản sẽ được thay bằng kho thưởng phân tầng, mở khóa theo giai đoạn và cơ chế bảo hộ cá nhân; có thể tắt trong cài đặt để quay về logic rút thưởng nguyên bản nêu trên. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')]
]],

['tc-crow','Tử Khuê Huyền Điểu',
TTCX('Sinh vật đặc biệt và khách giao dịch','Hoa sen trưởng thành, Tử Khuê Thạch, ao sen, thời gian hồi mười ngày, trang bị Tử Khuê')+
`<div class="tt-gallery"><figure style="width:160px"><img src="images/npcs/crow-bird.png" alt="Tử Khuê Huyền Điểu" style="width:150px;height:auto" loading="lazy"><figcaption>Tử Khuê Huyền Điểu</figcaption></figure><figure style="width:160px"><img src="images/npcs/item-zigui-stone.png" alt="Tử Khuê Thạch" style="width:150px;height:auto" loading="lazy"><figcaption>Tử Khuê Thạch</figcaption></figure></div><p>Khi người chơi lại gần đóa sen ở <b>giai đoạn 4</b> đang nở rộ, nếu hiện tại không phải ban đêm, trong thế giới không có Huyền Điểu khác và không đang trong thời gian hồi do bị tấn công, thì lần kiểm tra này có <b>10% xác suất</b> dẫn Tử Khuê Huyền Điểu đến. Cùng một lúc sẽ không xuất hiện hai con. Sau khi hạ cánh nó chỉ ở lại khoảng <b>30 giây</b>: sẽ ăn các đóa sen trưởng thành gần đó, sau đó tính kết quả rồi rời đi.</p>
<p>Thời gian hồi mười ngày không phải lần gặp nào kết thúc cũng bắt đầu. <b>Chỉ khi Huyền Điểu bị tấn công</b> nó mới lập tức bay đi, khiến người chơi và tùy tùng trong 6 ô quanh rơi trang bị đang mặc, và mở thời gian hồi thế giới 10 ngày game; giao hoa bình thường hay tự rời đi không chủ động mở thời gian hồi trừng phạt này.</p>
<p>Sau khi người chơi tự tay đưa 1 đóa sen, lần gặp này kết thúc ngay lập tức; số Tử Khuê Thạch nhận được là “số sen trưởng thành Huyền Điểu đã ăn trước đó + 1 đóa giao lần này”, nên dù trước đó chưa ăn đóa nào cũng nhận ít nhất 1 viên. Nếu không giao sen mà chờ Huyền Điểu tự rời đi, thì chỉ rơi Tử Khuê Thạch theo số sen trưởng thành nó đã ăn trước đó.</p>`,
[
['tc-crow-gear','Trang bị Tử Khuê',
`<p><img class="tt-ico" src="images/npcs/item-zigui-gold.png" alt="Tử Khuê Thanh Kim" loading="lazy"> Tử Khuê Thanh Kim được luyện từ <b>Tử Khuê Nham, Cục Vàng May Mắn, Mảnh Thulecite</b>, tốn 60 giây. Nguyên liệu Tử Khuê do Huyền Điểu mang đến tiếp tục dùng cho cả bộ trang bị dưới đây:</p>`+
YDTB(['Trang bị','Công thức & thời gian','Năng lực hiện tại'],[
['<img class="tt-ico" src="images/npcs/weapon-seven-star-sword.png" alt="Thất Tinh Kiếm" loading="lazy"> Thất Tinh Kiếm','Cấp Cấp Như Luật Lệnh, Tử Khuê Thanh Kim ×3; 960 giây','34 sát thương, không có độ bền; có thể ném mục tiêu trong khoảng 16 ô làm điểm rơi, thời gian hồi 10 giây, sau khi trúng sẽ bay về và trang bị lại. Với sinh vật bóng tối, sinh vật ác mộng và quân cờ bóng tối gây đòn đặc biệt gần như chắc chắn chết, nhưng mục tiêu đồng thời không rơi chiến lợi phẩm bình thường'],
['<img class="tt-ico" src="images/npcs/gear-zigui-helmet.png" alt="Tử Khuê Chiến Khôi" loading="lazy"> Tử Khuê Chiến Khôi','Tử Khuê Thanh Kim ×2, Mũ Sắt Đúc, Gỗ Sống; 960 giây','3000 độ bền, giảm 90% sát thương, khoảng +3,3 tinh thần mỗi phút, và miễn nhiễm hào quang tinh thần tiêu cực'],
['<img class="tt-ico" src="images/npcs/gear-zigui-armor.png" alt="Tử Khuê Chiến Giáp" loading="lazy"> Tử Khuê Chiến Giáp','Tử Khuê Thanh Kim ×2, Giáp Sắt Đúc, Gỗ Sống; 960 giây','3000 độ bền, giảm 90% sát thương; với sát thương loại bóng tối, ác mộng và Kẻ Dệt Bóng Cổ Đại tăng lên giảm 95%; khoảng +3,3 tinh thần mỗi phút']])+
`<p>Khi Tử Khuê Chiến Giáp ở ban ngày, không mưa, độ bền dưới 50% nhưng chưa hỏng, thả xuống đất có thể mỗi 5 giây hồi 2 độ bền.</p>`+
TTCL('Mỗi bậc Tử Khuê Chiến Giáp tăng 5 điểm phòng thủ vị diện, giới hạn hồi phục tăng theo cấp; tự sửa khi mặc cần ban ngày và không mưa. Ở bậc tối đa khi cạn độ bền không vỡ, mất phòng thủ cơ bản nhưng giữ phòng thủ vị diện, có thể tự sửa khi mặc hoặc tiêu hao 1 phần Lụa Da Rồng để sửa đầy; độ bền đã đầy thì không tiêu hao. Ở bậc tối đa vẫn miễn nhiễm việc bào mòn khi bị Kim Thiềm nuốt chạm đất. Xem chi tiết ở '+TTYX('systems','Hệ thống Hỏa Nguyên Thối Luyện')+'.')]
]],

['tc-nian','Niên Thú',
TTCX('Boss sự kiện mùa','Tiệm Thanh Trúc, ngày áp chót của mùa đông, bàn thờ, giảm giá năm ngày, thú cưỡi Niên Thú')+
`<div class="tt-pic"><img src="images/npcs/boss-nian.png" alt="Niên Thú" style="width:200px" loading="lazy"></div><p>Niên Thú xuất hiện khi mùa đông còn 2 ngày, vào hoàng hôn và có ít nhất một Tiệm Thanh Trúc còn hiệu lực; đồng thời bàn thờ không được ở trong thời gian hồi theo ngày game. Niên Thú truy đuổi mục tiêu trong khoảng 40 ô, đòn thường có sát thương lan 3 ô và đẩy lùi.</p>
<p>Nó có <b>8888 máu, 75 sát thương mặc định, tốc độ chạy 7</b>; lao tới gây 150 sát thương, nổ bào tử gây 200 sát thương. Khoảng cách cơ bản giữa bào tử, lao tới, gầm lần lượt khoảng 12, 50, 30 giây. Niên Thú chịu sát thương lửa tính gấp 3 lần, pháo hoặc vụ nổ gây giật mình khác còn có thể cứ 20 giây ngắt động tác một lần.</p>`+
YDTB(['Chiêu thức','Dấu hiệu & số liệu'],[
['Ném bào tử','Làm động tác ném tại chỗ; mặc định ném 3 viên, khi người chơi xung quanh trên 3 người thì tăng theo số người, tối đa 6 viên'],
['Mây bào tử','Mây có thể kéo dài khoảng 120 giây; người ở trong đó có tốc độ di chuyển ×0,75, sát thương gây ra ×0,5, sát thương nhận vào ×1,25, thức ăn còn hỏng nhanh hơn'],
['Gầm kích nổ','Gầm khoảng 1 giây sau sẽ kích nổ mây bào tử còn chưa tan trên sân'],
['Lao tới','Khoảng 1,3 giây tích lực rồi xung phong thẳng 1 giây, bán kính đường đi khoảng 2'],
['Khiên nửa máu','Lần đầu xuống 50% máu thì vào tư thế ngủ và mở khiên; khiên hấp thụ hoàn toàn sát thương thường, khoảng 1 giây sau bắt đầu hồi 200 máu mỗi giây. Sát thương lửa lập tức phá khiên, máu hồi đầy cũng tự thu khiên']])+
`<p>Bản thân Niên Thú có thể bị khống chế bằng ngủ và đóng băng, nhưng trong thời gian khiên nửa máu thì không còn tích lũy ngủ, và sát thương thường bị hấp thụ hoàn toàn.</p>`+
YDTB(['Kết cục sự kiện','Kết quả'],[
['Đánh bại trước mùa xuân','Tính chiến lợi phẩm Niên Thú; thị trấn nhận giảm giá 5 ngày, và trước khi hết mùa xuân ban đêm không đóng cửa (nếu ba Tê Ngưu xâm nhập sẽ bị ngắt sớm)'],
['Kéo dài đến mùa xuân','Niên Thú rời đi, không tương đương tính giết; thị trấn mất hàng hóa và ngừng nhập hàng 5 ngày'],
['Thú cưỡi Niên Thú','Sau khi cho Chuông Niên Thú ăn đủ rồi dùng, sẽ sinh thêm một con thú cưỡi Niên Thú; nó không phải Boss Niên Thú bị đánh bại rồi chuyển hóa hay thuần phục. Cơ bản là 888 máu, 68 sát thương, tầm đánh 4, tốc độ chạy 9']]),
[
['tc-nian-flavor','Độ Tết & lì xì mùa xuân',
`<p>Độ Tết được ghi riêng cho từng người chơi. Một chu kỳ tính toán được xóa về 0 khi mùa đông bắt đầu, và được tính ở <b>thời điểm chuyển ngày khi mùa xuân đã qua 3 ngày</b>; vì vậy cùng một sự kiện toàn server có thể khiến mọi người chơi đều được cộng điểm, còn ăn uống, xây dựng và vật phẩm gần bên của cá nhân thì chỉ ảnh hưởng người chơi tương ứng.</p>`+
YDTB(['Nguồn','Mỗi lần cộng','Giới hạn tích lũy của loại này','Thuộc về & điều kiện'],[
['Mùa đông giết Hươu Khổng Lồ hoặc Klaus','+10','20','Toàn bộ người chơi; Klaus phải ở trạng thái đã tính kết quả'],
['Ăn món ăn có không khí Tết','+4','20','Người ăn; gồm Sủi Cảo, Bánh Bao Thịt Lớn, Gà Hầm Nấm, Cá Kho Cay Tê, Cơm Bát Bảo, Chả Giò Chiết Nguyệt, Hấp Lạp Vị Hợp Chưng, Rượu Đồ Tô'],
['Xây hoặc dùng liên quan Bàn Ăn Gỗ Đỏ','+4','8','Người thao tác lần này'],
['Mùa đông đốt pháo','+2','10','Người chơi trong 15 ô quanh pháo'],
['Mùa đông bắn Pháo Thăng Thiên','+5','10','Toàn bộ người chơi'],
['Chế tạo đèn lồng, giá đèn hoặc treo đèn lồng','+2','10','Người thao tác lần này'],
['Mùa đông đánh bại Niên Thú','+50','50','Toàn bộ người chơi'],
['Đồ chơi chủ đề trong 20 ô quanh lúc tính toán','Mỗi món +2','Mỗi đống rơi trên đất tính tối đa 12','Chỉ đọc vào đúng thời điểm tính toán; nhiều đống tính riêng']])+
YDTB(['Độ Tết khi tính toán','Nội dung lì xì'],[
['0—1','Không có lì xì'],
['2—20','Đồng Tiền Thần Thoại ×1'],
['21—40','Cục Vàng May Mắn ×4—8'],
['41—60','Cục Vàng May Mắn ×8—12'],
['61—99','Cục Vàng May Mắn ×16—20'],
['100 trở lên','Lì xì May Mắn, Cục Vàng May Mắn ×20']])+
YH4('Tăng ích Phúc Lộc Thọ')+
`<p>Độ Tết khi tính toán đạt 100 sẽ nhận được lì xì may mắn. Sau khi mở, ngoài vật phẩm bên trong còn ngẫu nhiên nhận một trong “Phúc”, “Lộc”, “Thọ”, xác suất mỗi loại 1/3; lì xì thường không cho các tăng ích này.</p>`+
YDTB(['Tăng ích','Hiệu quả'],[
['Phúc','Khi hái có 30% xác suất cộng thêm thu hoạch cùng loại; khi giết có 30% xác suất cộng thêm 1 chiến lợi phẩm ngẫu nhiên, khi kích hoạt lại có 20% xác suất cộng thêm món thứ 2'],
['Lộc','Giao dịch với Vua Heo, Vua Cá và lồng chim có xác suất cộng thêm hoàn trả; bán hàng cho Tiệm Thanh Trúc có 40% xác suất nhận thêm 20% khoản thu của lần đó, làm tròn lên'],
['Thọ','Khi hái cây Bàn Đào, chắc chắn rơi thêm 1 Đại Bàn Đào, sau đó tiêu hao trạng thái này']])+
`<p>Tăng ích kéo dài tối đa <b>3 ngày game (1440 giây)</b>; nhận lại cùng loại thì làm mới thời lượng, khác loại thì cùng tồn tại, chết thì biến mất.</p>`+
TTCL('Khi bật “Cải tiến Tụ Bảo Bồn”, lì xì may mắn cũng có thể lấy được từ kho thưởng sử thi.')+
`<div class="tt-gallery"><figure style="width:110px"><img src="images/npcs/item-firecracker.png" alt="Pháo" style="width:100px;height:auto" loading="lazy"><figcaption>Pháo</figcaption></figure><figure style="width:110px"><img src="images/npcs/item-sky-monkey-rocket.png" alt="Pháo Thăng Thiên" style="width:100px;height:auto" loading="lazy"><figcaption>Pháo Thăng Thiên</figcaption></figure></div><p>Pháo có thể chế tạo bằng <b>Diêm Tiêu ×1, Tre ×3, Dây Thừng ×1</b> dưới Máy Khoa Học, mỗi lần được 6 cái. Sau khi đốt sẽ liên tục làm sinh vật giật mình; khi tiến trình đốt qua một nửa còn châm cháy pháo, pháo nổ và thuốc súng đủ điều kiện trong 4 ô. Pháo Thăng Thiên là hàng giới hạn mùa đông của Tiệm Thanh Trúc, sau khi bắn sẽ tạm lưu dấu trên bản đồ.</p>`],
['tc-nian-drops','Vật phẩm Niên Thú rơi',
YDTB(['Vật rơi','Số lượng hoặc xác suất'],[
['<img class="tt-ico" src="images/npcs/item-nian-bell.png" alt="Chuông Niên Thú" loading="lazy"> Chuông Niên Thú','Cố định 1 cái; đây là vật phẩm cốt lõi của thú cưỡi Niên Thú'],
['<img class="tt-ico" src="images/npcs/item-nian-mane.png" alt="Bờm Niên Thú" loading="lazy"> Bờm Niên Thú','Cố định 8 cái'],
['Cục Vàng May Mắn','Cố định 4 cái, thêm 3 lần xét thêm 50% độc lập'],
['Đá quý đỏ','Cố định 2 cái'],
['Đá quý xanh','Cố định 2 cái'],
['Đá quý tím, cam, vàng, lục','Mỗi loại cố định 1 cái, mỗi loại lại có 50% xác suất rơi thêm 1 cái']])],
['tc-nian-bell','Chuông Niên Thú',
`<div class="tt-pic"><img src="images/npcs/item-nian-bell.png" alt="Chuông Niên Thú" style="width:110px" loading="lazy"></div><p>Cho chuông ăn thức ăn, tích lũy đủ <b>666 điểm độ đói</b>, sau đó nhấp chuột phải trong túi đồ để lắc chuông là có thể triệu hồi thú cưỡi Niên Thú. Khi thú cưỡi đã tồn tại và không có người cưỡi, lắc chuông lần nữa có thể gọi nó về bên mình; sau khi thú cưỡi chết, độ đói của chuông về 0, cho ăn đủ lại là có thể triệu hồi lần nữa.</p>`],
['tc-nian-mask','Mặt Nạ Niên Thú',
`<div class="tt-pic"><img src="images/npcs/gear-nian-mask.png" alt="Mặt Nạ Niên Thú" style="width:130px" loading="lazy"></div><p>Mặt Nạ Niên Thú được chế tạo dưới khoa học Thần Thoại, cần <b>Bờm Niên Thú ×4, Tơ Nhện ×8, Răng Chó ×12</b>. Nó có <b>2000 độ bền, giảm 70% sát thương</b>; người đội chịu sát thương lửa tính <b>gấp 2 lần</b>.</p>
<p>Khi đội, mỗi lần ăn bình thường đều có <b>25%</b> xác suất kích hoạt tính toán đặc biệt: vật phẩm gốc của lần ăn này không bị tiêu hao, và hệ số hấp thụ máu, độ đói, tinh thần của lần ăn này tạm thời tăng lên 2 lần. Nếu xác suất không kích hoạt thì xử lý như ăn bình thường.</p>`]
]]
];