/* Thần Thoại Thư Thuyết – Tab 5: Luyện đan & pháp bảo
   Nạp SAU intro.js (TTTG, TTFG, TTYD) và yem-doc-tien/helpers.js (YDTB, YU, YN, YH4). */
const TTAX=(loai,lq)=>TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: '+loai,'Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: '+lq]);
const TTAL=(t)=>YN(t,'Lưu ý liên động Yêm Đốc Tiên');
const TTAY=(p,t)=>`<a style="cursor:pointer" onclick="go('#/mod/yem-doc-tien/${p}')">${t}</a>`;
const TTAK=(p,t)=>`<a style="cursor:pointer" onclick="go('#/mod/than-thoai/${p}')">${t}</a>`;
const TTAPATH='images/than-thoai/artifacts/';
const TTAGRID=(items,w)=>{w=w||260;return `<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:16px;margin:18px 0">${items.map(([f,t])=>`<figure style="margin:0;flex:1 1 ${w}px;max-width:${w}px;box-sizing:border-box;padding:16px 12px 12px;text-align:center;border:1px solid rgba(160,140,110,.35);border-radius:12px;background:rgba(160,140,110,.08)"><img src="${TTAPATH}${f}.webp" alt="${t}" title="${t}" loading="lazy" style="display:block;margin:0 auto 10px;width:100%;max-width:${w-24}px;height:auto;aspect-ratio:1/1;object-fit:contain"><figcaption style="font-weight:600;font-size:14px;line-height:1.4">${t}</figcaption></figure>`).join('')}</div>`;};
const TTAHERO=(items)=>TTAGRID(items,300);
const TTA=[
['ta-overview','Tổng quan luyện đan &amp; pháp bảo',
TTAX('Hệ thống chế tạo cốt lõi','Bát Quái Lô, đan dược thường, Cấp Cấp Như Luật Lệnh, pháp bảo dùng chung')+
`<p>Bài này chỉ ghi quy tắc chung của Bát Quái Lô, các loại đan dược thường và những pháp bảo không thuộc riêng nhân vật thần thoại hay Boss. Đan môi trường và vũ khí ba tim của Tê Ngưu Tam Đại Vương xem ở ${TTAK('creatures','Thủ lĩnh &amp; quái vật')}, khí vật Nguyệt Cung xem ở ${TTAK('npcs','NPC &amp; tương tác')}, trang bị riêng của nhân vật xem ở trang nhân vật thần thoại tương ứng.</p>${YH4('Vật phẩm chính trong chương')}${TTAGRID([['alchmy_fur','Bát Quái Lô'],['laozi_sp','Cấp Cấp Như Luật Lệnh'],['pill_bottle_gourd','Hồ Lô Đan Dược'],['purple_gourd','Hồ Lô Đỏ Tử Kim'],['bananafan_big','Ba Tiêu Bảo Phiến'],['myth_yjp-idle-000','Dương Chi Ngọc Tịnh Bình'],['laozi_bell-idle-000','Chuông Trâu Đâu Suất'],['saddle_qingniu','Yên Trâu Đâu Suất'],['myth_passcard_jie','Thông Thiên Sắc Lệnh'],['myth_fuchen','Phất Trần'],['myth_gold_staff','Kim Kích Tử']],220)}`],

['ta-bagua','Bát Quái Lô: mở khóa & chế tạo',
TTAX('Hệ thống chế tạo cốt lõi','Vô Tự Thiên Thư, Bát Quái Lô, nguyên liệu, kết toán')+``,
[
['ta-bg-unlock','Mở khóa & xây dựng',
`<p><b>Vô Tự Thiên Thư</b> chế tạo bằng Giấy Cói ×2, là trạm khoa học Thần Thoại có thể mang theo và đặt xuống; đến gần nó là có quyền chế tạo khoa học Thần Thoại. Vô Tự Thiên Thư có thể bị đốt, cháy hết sẽ chuyển thành “Thiên Thư” có thể đọc: sau khi chuyển vẫn cung cấp khoa học Thần Thoại, đồng thời mở được bách khoa của mod. Nó và “Thiên Thư Di Lưu” trong mật thất Linh Đài Phương Thốn Sơn dùng để mở khóa kỹ năng nhân vật là hai thực thể khác nhau, không thay thế cho nhau.</p>
<p>Bát Quái Lô cần <b>Thulecite ×6, Tử Khuê Thạch ×1, Vảy Rồng ×2</b>, sau khi xây xong là công trình cố định có bốn ô luyện chế.</p>${TTAHERO([['book_myth','Vô Tự Thiên Thư'],['alchmy_fur','Bát Quái Lô']])}${YH4('Nguyên liệu chế tạo Vô Tự Thiên Thư')}${TTAGRID([['papyrus','Giấy Cói']])}`],
['ta-bg-settle','Nguyên liệu & kết toán',
`<p>Bát Quái Lô có 4 ô nguyên liệu. Phải đóng vật chứa mới bắt đầu luyện; lò chỉ tiêu hao đúng phần công thức yêu cầu, <b>nguyên liệu bỏ dư sẽ bị nhả ra đất khi mở lò</b>, không tăng phẩm chất hay sản lượng. Thời gian luyện do công thức quyết định: công thức ngắn khoảng 60 giây, trang bị thường gặp 120—240 giây, còn pháp bảo cao cấp như Hồ Lô Đỏ Tử Kim, Ba Tiêu Bảo Phiến, Dương Chi Ngọc Tịnh Bình và Kim Kích Tử cần <b>960 giây, tức 2 ngày game</b>.</p>
<p>Nếu trong lò không có công thức hợp lệ nào, sau khoảng 1,5 giây sẽ thất bại: toàn bộ nguyên liệu bị văng ra, nguyên liệu cháy được sẽ bị châm lửa, các vật cháy được khác trong khoảng <b>6 ô</b> quanh lò cũng bị đốt.</p>`+
TTAL('Luyện đan nhiều lần mặc định bật, chỉ hỗ trợ sáu loại đan: Đằng Vân, Thị Huyết, Ngưng Vị, Tráng Cốt, Di Sơn, Kinh Cức, mỗi lần tối đa 40 mẻ; Cấp Cấp Như Luật Lệnh tối đa 13 mẻ (tổng 39 tờ). Ba loại đan môi trường, trang bị và vật phẩm khác không luyện hàng loạt được. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')]
]],

['ta-pills','Đan dược thường',
TTAX('Hệ thống chế tạo cốt lõi','Kinh Cức Đan, năm loại đan trạng thái, Hoàn Hồn Đan')+
`<ul>
<li><b>Kinh Cức Đan</b> không cần ăn, mang trong túi đồ nhân vật là có hiệu lực và liên tục tiêu hao thời hiệu của chính nó; bỏ vào Hồ Lô Đan Dược có thể tạm dừng thời hiệu, nhưng khi chưa lấy ra thì cũng không có hiệu lực.</li>
<li><b>Năm loại đan trạng thái</b> phải ăn mới có hiệu lực. Đằng Vân, Thị Huyết, Ngưng Vị, Tráng Cốt thuộc cùng một nhóm loại trừ nhau; Di Sơn Đan là thiết kế ghi đè không đối xứng.</li>
<li>Ba loại đan môi trường Tị Thử, Tị Hàn, Tị Trần được suy ra từ tim ba Tê Ngưu; công thức, màu sắc đảo ngược và vũ khí đều ghi thống nhất ở ${TTAK('creatures','Tê Ngưu Tam Đại Vương')}.</li>
</ul>${YH4('Sáu loại đan dược thường')}${TTAGRID([['thorns_pill','Kinh Cức Đan'],['bloodthirsty_pill','Thị Huyết Đan'],['condensed_pill','Ngưng Vị Đan'],['armor_pill','Tráng Cốt Đan'],['movemountain_pill','Di Sơn Đan'],['fly_pill','Đằng Vân Đan']],220)}${YH4('Đan tài thường gặp')}${TTAGRID([['cactus_flower','Hoa Xương Rồng'],['nightmarefuel','Nhiên Liệu Ác Mộng']],220)}`,
[
['ta-p-thorn','Kinh Cức Đan',
`<p>Kinh Cức Đan cần <b>Hoa Xương Rồng, Bom Cỏ Nước, Gỗ Sống, Hạt Giống Hoa Ăn Thịt Người</b>. Khi mang theo có thể chống sát thương từ thực vật có gai; khi bị tấn công sẽ kích hoạt phản đòn gai có thời gian hồi ngắn.</p>${TTAHERO([['thorns_pill','Kinh Cức Đan'],['cactus_flower','Hoa Xương Rồng']])}`],
['ta-p-five','Năm loại đan trạng thái',
TTAHERO([['fly_pill','Đằng Vân Đan'],['bloodthirsty_pill','Thị Huyết Đan'],['condensed_pill','Ngưng Vị Đan'],['armor_pill','Tráng Cốt Đan'],['movemountain_pill','Di Sơn Đan']])+
YDTB(['Đan dược','Thời lượng & hiệu quả thực tế','Nguyên liệu'],[
['<b>Đằng Vân Đan</b>','8 phút, tốc độ di chuyển ×1,5, đồng thời mở trạng thái đằng vân cần cho bay thông dụng','Diêm Tiêu, Thanh Long, Mật Ong, Nhiên Liệu Ác Mộng'],
['<b>Thị Huyết Đan</b>','8 phút; mỗi lần đánh trúng kẻ địch bình thường hồi ngẫu nhiên 5–10 máu','Đá Quý Tím, Gỗ Sống, Cánh Dơi, Nhiên Liệu Ác Mộng'],
['<b>Ngưng Vị Đan</b>','8 phút; hệ số sát thương của nhân vật thường thành 2 lần','Thuốc Súng, Ngòi Ong, Sầu Riêng, Nhiên Liệu Ác Mộng'],
['<b>Tráng Cốt Đan</b>','4 phút; hấp thụ thêm 50% sát thương, và duy trì sức mạnh của Wolfgang','Tỏi, Đá, Mảnh Xương, Nhiên Liệu Ác Mộng'],
['<b>Di Sơn Đan</b>','8 phút; cõng vật nặng không còn bị chậm, trang bị không còn cho tốc độ thấp hơn bình thường, Wolfgang không bị mất sức mạnh','Răng Chó, Đá Cát, Măng Tây, Nhiên Liệu Ác Mộng']])+
YH4('Nguyên liệu có ảnh')+TTAGRID([['nightmarefuel','Nhiên Liệu Ác Mộng'],['purplegem','Đá Quý Tím']])+
YH4('Quy tắc ghi đè & cùng tồn tại của đan trạng thái')+
YDTB(['Trạng thái ăn sau','Trạng thái đã có bị xóa','Trạng thái cùng tồn tại sau kết toán'],[
['Đằng Vân Đan / Thị Huyết Đan / Ngưng Vị Đan / Tráng Cốt Đan','Cả bốn trạng thái Đằng Vân, Thị Huyết, Ngưng Vị, Tráng Cốt đều bị xóa, rồi áp trạng thái mới','Di Sơn Đan đã có không bị xóa, cùng tồn tại với trạng thái mới'],
['Di Sơn Đan','Các trạng thái Đằng Vân, Thị Huyết, Ngưng Vị, Tráng Cốt đã có','Giữ Di Sơn Đan; bốn trạng thái chính không được giữ'],
['Môi trường nguyên bản: món ăn tăng sát thương nhờ bột ớt','Trạng thái Ngưng Vị Đan đã có','Tăng sát thương do món ăn bột ớt'],
['Môi trường nguyên bản: Ngưng Vị Đan','Tăng sát thương món ăn bột ớt đã có','Ngưng Vị Đan'],
['Món ăn giảm sát thương nhờ bột tỏi','Trạng thái Tráng Cốt Đan đã có','Giảm sát thương do món ăn bột tỏi'],
['Tráng Cốt Đan','Giảm sát thương món ăn bột tỏi đã có','Tráng Cốt Đan']])+
`<p>Kết quả cùng tồn tại giữa Di Sơn Đan và bốn trạng thái chính phụ thuộc thứ tự ăn: <b>Di Sơn Đan → đan trạng thái chính</b> thì hai cái cùng tồn tại; <b>đan trạng thái chính → Di Sơn Đan</b> thì chỉ giữ Di Sơn Đan. Ăn lại cùng một loại đan trạng thái sẽ áp lại trạng thái đó và đặt lại thời lượng.</p>`+
YN('Trong môi trường nhiều mod, một số đan trạng thái và tăng ích gia vị có thể có quan hệ kết toán khác; hãy lấy kết quả thực tế trong game làm chuẩn.','Gợi ý tương thích')],
['ta-p-revive','Hoàn Hồn Đan',
`<p>Có thể dùng Trái Tim Mách Lẻo đổi với Thái Thượng Lão Quân, Tụ Bảo Bồn cũng có cơ hội rút trúng. Ăn trực tiếp hồi <b>4096 tinh thần</b>, không vượt quá giới hạn nhân vật; cho thân xác của người chơi đang nguyên thần xuất khiếu nằm trên mặt đất ăn thì có thể triệu hồi nguyên thần về. Nó không dùng để hồi sinh hồn ma người chơi thông thường.</p>`+
TTAL('Giới hạn xếp chồng mặc định của Hoàn Hồn Đan là 10; nếu mod khác đã đặt giới hạn cao hơn thì giữ giá trị cao hơn. Xem chi tiết ở '+TTYD('Tối ưu thần thoại')+'.')]
]],

['ta-lingfu','Cấp Cấp Như Luật Lệnh',
TTAX('Pháp bảo dùng chung','Triệu hồi Lão Quân, vật liệu luyện chế cao cấp, phong ấn Ba Lô Krampus')+TTAHERO([['laozi_sp','Cấp Cấp Như Luật Lệnh']])+
`<p>Công thức là Giấy Cói ×3, Bút Lông Vũ, Cánh Hoa ×3, mỗi lần luyện cho ra <b>3 tờ</b>. Cấp Cấp Như Luật Lệnh vừa là vật triệu hồi Thái Thượng Lão Quân, vừa là nguyên liệu luyện chế cao cấp cho Ba Tiêu Bảo Phiến, Dương Chi Ngọc Tịnh Bình, Chuông Trâu Đâu Suất, Thất Tinh Kiếm, v.v.</p>
<p>Đốt Cấp Cấp Như Luật Lệnh cho cháy hết, hoặc ném vào đống lửa làm nhiên liệu là có thể triệu hồi Thái Thượng Lão Quân; dùng lên Ba Lô Krampus sẽ phong ấn ba lô, xem chi tiết ở phần Hồ Lô Đỏ Tử Kim bên dưới.</p>${YH4('Nguyên liệu luyện chế')}${TTAGRID([['papyrus','Giấy Cói'],['featherpencil','Bút Lông Vũ'],['petals','Cánh Hoa']])}`+
TTAL('Thất Tinh Kiếm luyện bằng Cấp Cấp Như Luật Lệnh có thể tham gia Hỏa Nguyên Thối Luyện, cả cận chiến lẫn phi kiếm đều nhận sát thương vị diện thối luyện, hiệu quả với mục tiêu bóng tối vốn có không đổi. Xem chi tiết ở '+TTAY('systems','Hệ thống Hỏa Nguyên Thối Luyện')+'.')],

['ta-gourd','Hồ Lô Đan Dược',
TTAX('Pháp bảo dùng chung','Vật chứa đan dược, Hồ Lô, tạm dừng thời hiệu')+TTAHERO([['pill_bottle_gourd','Hồ Lô Đan Dược']])+
`<p>Hồ Lô Đan Dược cần <b>Hồ Lô, Dây Thừng ×2, Sáp Ong</b>, chỉ nhận đan dược, sức chứa <b>8 ô</b>. Bốn loại đan môi trường để trong túi đồ thường sẽ liên tục tiêu hao thời hiệu và cho hiệu quả; sau khi bỏ vào Hồ Lô Đan Dược, thời hiệu tạm dừng, nhưng người chơi cũng không còn nhận được sự bảo hộ tương ứng.</p>
<p>Hồ Lô Đan Dược do Hắc Phong Đại Vương rơi cố định được nạp sẵn bốn loại đan trạng thái Đằng Vân, Thị Huyết, Ngưng Vị, Tráng Cốt, mỗi loại ngẫu nhiên <b>1—2 viên</b>.</p>`],

['ta-zijin','Hồ Lô Đỏ Tử Kim',
TTAX('Pháp bảo dùng chung','Ba Lô Krampus phong ấn, thu nhặt vật phẩm, Kim Thiềm nhỏ')+TTAHERO([['purple_gourd','Hồ Lô Đỏ Tử Kim']])+
`<p>Thời gian luyện 960 giây, nguyên liệu là <b>Ba Lô Krampus phong ấn, Cục Vàng, Đá Quý Cam, Hồ Lô Đan Dược</b>. Bản thân nó có sức chứa <b>14 ô</b>, nhưng không thể bỏ vào vật chứa khác hay vật đã đóng gói, nên không thể lồng nhau để mở rộng.</p>
<p>“Ba Lô Krampus phong ấn” không phải vật rơi tự nhiên: dùng <b>Cấp Cấp Như Luật Lệnh</b> lên Ba Lô Krampus, đồ trong ba lô sẽ rơi hết ra trước, ba lô rỗng rồi được niêm phong thành nguyên liệu luyện chế, đồng thời tiêu hao 1 tờ Cấp Cấp Như Luật Lệnh. Vật phong ấn cũng có thể tháo ra để lấy lại ba lô gốc; khi luyện Hồ Lô Đỏ Tử Kim thì ném thẳng vật phong ấn vào Bát Quái Lô.</p>
<p>Cầm Hồ Lô Đỏ Tử Kim có thể chỉ định vị trí trong 16 ô, hút vật phẩm rơi vãi và sinh vật không phải sử thi trong khoảng 8 ô quanh điểm rơi; mỗi lần tiêu hao <b>10 độ đói, 10 tinh thần</b>, thời gian hồi 5 giây. Thủ lĩnh, mục tiêu cấp thủ lĩnh sinh vật và người chơi thông thường không thuộc đối tượng thu thông thường. Kim Thiềm nhỏ bị hút sẽ biến mất, và có 50% xác suất chuyển thành Đồng Tiền Thần Thoại hoặc Cục Vàng May Mắn.</p>${YH4('Vật liệu hồ lô & sinh vật thu được')}${TTAHERO([['krampussack_sealed','Ba Lô Krampus phong ấn'],['pill_bottle_gourd','Hồ Lô Đan Dược'],['myth_small_goldfrog','Kim Thiềm nhỏ']])}`],

['ta-fan','Ba Tiêu Bảo Phiến',
TTAX('Pháp bảo dùng chung','Quạt, gọi mưa, lốc xoáy, thúc chín Bát Quái Lô, Tị Trần Đan')+TTAHERO([['bananafan_big','Ba Tiêu Bảo Phiến']])+
`<p>Thời gian luyện 960 giây, nguyên liệu là <b>Cấp Cấp Như Luật Lệnh, Quạt Lông Vũ, Trứng Sâu Dung Nham, Lá Chuối ×6</b>.</p>${YH4('Nguyên liệu có ảnh')}${TTAGRID([['laozi_sp','Cấp Cấp Như Luật Lệnh']])}`+
YDTB(['Cách dùng','Tiêu hao & thời gian hồi','Hiệu quả thực tế'],[
['Quạt thường','15 độ đói; thường vào thời gian hồi 15 giây','Tác dụng khoảng 32 ô: khi chưa mưa sẽ gọi mưa, dập lửa và âm ỉ cháy, làm mục tiêu hạ nhiệt; mùa đông còn gây thêm lạnh. Bát Quái Lô đang vận hành sẽ được thúc chín hoàn thành ngay'],
['Chỉ mục tiêu thả lốc xoáy','5 độ đói, 5 tinh thần; sau đó vào thời gian hồi','Tạo lốc xoáy khoảng 5 giây tại mục tiêu, mỗi 0,5 giây gây 1 sát thương và giữ chặt mục tiêu đủ điều kiện khoảng 3 giây; còn thực hiện một lần công việc tương ứng lên các đối tượng thu hoạch được, chặt được']])+
`<p>Khi trong túi đồ có Tị Trần Đan còn hiệu lực, quạt thường sẽ tiêu hao <b>480 giây thời hiệu</b> của viên đan đó, và bỏ qua thời gian hồi 15 giây thông thường.</p>`],

['ta-vase','Dương Chi Ngọc Tịnh Bình',
TTAX('Pháp bảo dùng chung','Bình nước, mưa, bán kính tưới, ruộng, dưỡng chất')+TTAHERO([['myth_yjp-idle-000','Dương Chi Ngọc Tịnh Bình']])+
`<p>Thời gian luyện 960 giây, nguyên liệu là <b>Đá Quý Cầu Vồng, Cấp Cấp Như Luật Lệnh, Thủy Tinh Mặt Trăng ×6, Bướm Đêm Mặt Trăng</b>. Bình mới có lượng nước 0, giới hạn 100; thả bình ngoài mưa, mỗi 5 giây tăng 1 điểm nước.</p>${YH4('Nguyên liệu có ảnh')}${TTAGRID([['laozi_sp','Cấp Cấp Như Luật Lệnh'],['moonglass','Thủy Tinh Mặt Trăng'],['yt_moonbutterfly','Bướm Đêm Mặt Trăng']])}
<ul>
<li>Khi lượng nước dưới 20 mà dùng dưới mưa, lượng nước được bù thẳng lên 100 và mưa dừng; lần đó không còn thi triển hiệu ứng phạm vi.</li>
<li>Khi lượng nước từ 20 trở lên mà dùng, tiêu hao 20 nước và 10 tinh thần, thời gian hồi 5 giây.</li>
<li>Phạm vi khoảng 28 ô: dập lửa và âm ỉ cháy, bảo vệ thực vật khỏi héo, làm sinh vật hạ nhiệt và tăng độ ẩm.</li>
<li>Với ruộng trong phạm vi, bổ sung theo lưới: mỗi ô đất hợp lệ tăng 100 nước, đồng thời tăng cả ba loại dưỡng chất.</li>
</ul>`],

['ta-bell','Chuông Trâu Đâu Suất & Yên Trâu Đâu Suất',
TTAX('Pháp bảo dùng chung','Chuông Trâu Đâu Suất, Thanh Ngưu, Yên, đan dược cho thú cưỡi')+TTAHERO([['laozi_bell-idle-000','Chuông Trâu Đâu Suất'],['laozi_qingniu','Thanh Ngưu'],['saddle_qingniu','Yên Trâu Đâu Suất'],['laozi_bell_broken','Chuông Vỡ']])+
`<p>Chuông Trâu Đâu Suất luyện 240 giây, nguyên liệu là <b>Sừng Cá Voi Một Sừng, Sừng Bò, Cấp Cấp Như Luật Lệnh, Cục Vàng May Mắn</b>. Khi cùng một thế giới đã có Chuông Trâu Đâu Suất còn hiệu lực, luyện lại chỉ cho ra chuông bò thường.</p>
<p>Chuông hỏng có thể dùng <b>Chuông Vỡ, Đá Quý Đỏ, Đá Quý Xanh, Đá Quý Tím</b> luyện sửa, tốn 120 giây. Khi Thanh Ngưu chết, Chuông Trâu Đâu Suất gắn với nó biến thành “Chuông Vỡ”.</p>${YH4('Nguyên liệu sửa chuông & làm yên')}${TTAGRID([['redgem','Đá Quý Đỏ'],['purplegem','Đá Quý Tím'],['succulent_picked','Cây Mọng Nước'],['laozi_sp','Cấp Cấp Như Luật Lệnh']])}
<p>Thanh Ngưu cơ bản có <b>1000 máu, 51 sát thương, tốc độ chạy 9</b>. Chỉ chủ nhân chuông hiện tại mới cưỡi được, và độ đói của Thanh Ngưu phải lớn hơn 0. Yên Trâu Đâu Suất chuyên dụng cần <b>Yên Đua, Cây Mọng Nước, Cấp Cấp Như Luật Lệnh, Cục Vàng May Mắn</b>, tốn 240 giây; có <b>8 lần độ bền</b>, hệ số tốc độ khi cưỡi là <b>1,55</b>, bản thân không cho thêm sát thương tấn công. Chỉ sau khi trang bị Yên Trâu Đâu Suất, Thanh Ngưu mới nhận được tăng ích từ ba loại đan Ngưng Vị, Tráng Cốt, Đằng Vân; Thị Huyết Đan không nằm trong phạm vi dùng được.</p>`+
YDTB(['Đan dược','Hiệu quả thực tế với Thanh Ngưu'],[
['Ngưng Vị Đan','Kéo dài 480 giây, sát thương cơ bản tăng từ 51 lên 102'],
['Tráng Cốt Đan','Kéo dài 240 giây, nhận thêm 50% giảm sát thương'],
['Đằng Vân Đan','Kéo dài 480 giây, vào trạng thái bay, có thể vượt qua mặt biển'],
['Thị Huyết Đan','Thanh Ngưu không nhận']])+
TTAL('Các lỗi liên quan đến cưỡi Thanh Ngưu, giao diện chuông cũ và sự cố khi chuông bị đơn vị không phải người chơi nhặt được tự động sửa; khi cưỡi Thanh Ngưu hoặc Niên Thú còn hiển thị HUD máu thú cưỡi. Xem chi tiết ở '+TTAY('compatibility','Sửa lỗi tương thích')+' và '+TTYD('Tối ưu thần thoại')+'.')],

['ta-misc','Thông Thiên Sắc Lệnh, Phất Trần & Kim Kích Tử',
TTAX('Pháp bảo dùng chung','Thông Thiên Sắc Lệnh, Phất Trần, Kim Kích Tử')+TTAHERO([['myth_passcard_jie','Thông Thiên Sắc Lệnh'],['myth_fuchen','Phất Trần'],['myth_gold_staff','Kim Kích Tử']])+
YDTB(['Vật phẩm','Công thức & thời gian','Công dụng'],[
['Thông Thiên Sắc Lệnh','Tử Khuê Nham, Cục Vàng May Mắn, Ngà Hải Mã, Hoa Sen Thần Thoại; 240 giây','Giúp Bạch Cốt Phu Nhân, WX-78, Wortox, Wormwood, Wurt, Bàn Ti Nương Nương có tư cách giao dịch với Thái Thượng Lão Quân, không phải vật tăng ích cho mọi nhân vật'],
['Phất Trần','Gậy Đi Bộ, Đuôi Người Thỏ ×3; 60 giây','0 sát thương, không có độ bền, khi trang bị tốc độ di chuyển ×1,25; đòn thường đánh trúng ép mục tiêu đánh rơi vật đang cầm. Năng lực chủ động hồi 10 giây, có thể thu vật phẩm từ xa, thu hoạch bẫy hoặc xua đuổi sinh vật; Người Heo, Người Thỏ và nhóm khỉ còn bị ép đánh rơi trang bị'],
['Kim Kích Tử','Oánh Nguyệt Như Ý, Cục Vàng May Mắn ×4; 960 giây','Sát thương chỉ 5, nhưng không vỡ vì tấn công như Oánh Nguyệt Như Ý; hái nhanh Bàn Đào và Nhân Sâm Quả, là công cụ chứ không phải vũ khí chiến đấu']])]
];