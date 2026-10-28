/* ============================================================
   Hướng dẫn cơ bản (SEC) + bảng thưởng nhân vật + chú giải biểu tượng
   ============================================================ */
const SEC=[
['bat-dau','Bắt đầu',`<p><b>Achievement &amp; Level</b> là một mod giúp nâng cao trải nghiệm chơi bằng cách thêm vào hệ thống tiến trình với những mục tiêu mới đầy hấp dẫn. TOÀN BỘ nội dung của mod đều <b>TÙY CHỌN</b> và phần lớn có thể được cấu hình trong phần cài đặt hoặc thông qua các mod bổ sung trên trang chính của mod.</p>
<p>Mod có hai cơ chế chính: <b>Hệ thống Thành tựu</b> và <b>Hệ thống Cấp độ</b>. Hai hệ thống này hoạt động độc lập với nhau, cho phép bạn dùng hệ thống này mà không cần hệ thống kia, dù một số kỹ năng phối hợp rất tốt với Hệ thống Cấp độ.</p>
<div class="tip"><b>Khuyến nghị: </b>tắt "LAG COMPENSATION" trong cài đặt game (đặt thành NONE).</div>
<p>Hướng dẫn này dùng các biểu tượng để hiển thị thông tin vật phẩm hoặc sinh vật. Xem phần <a href="#" onclick="sc('bieu-tuong');return false">Chú giải biểu tượng</a> ở cuối trang. Bạn cũng có thể tham gia kênh Discord của mod để cập nhật tin tức, hỏi đáp hoặc đề xuất.</p>`,[]],
['hud','HUD chính',`<p>Đây là HUD chính, nằm ở góc trên bên trái màn hình.</p>${F('hud','HUD chính với các vị trí đánh số')}
<ol class="n">
<li><b>Nút Thành tựu</b> — mở cửa sổ Thành tựu, nơi bạn xem danh sách tất cả thành tựu có thể đạt được.</li>
<li><b>Nút Perk</b> — mở cửa sổ Perk, nơi bạn nhận các perk mới.</li>
<li><b>Nút Nhiệm vụ theo mùa</b> — mở cửa sổ Nhiệm vụ theo mùa, nơi bạn xem danh sách các nhiệm vụ có thể hoàn thành trong mùa này.</li>
<li><b>Nút Cấp độ</b> — mở cửa sổ Cấp độ, nơi bạn tìm hiểu mọi thứ về Hệ thống Cấp độ. Con số cho biết cấp độ hiện tại và thanh bên cạnh là tiến độ tới cấp tiếp theo.</li>
<li><b>Thanh XP</b> — hiển thị tiến độ Kinh nghiệm. Bạn lên cấp khi thanh này đầy.</li>
<li><b>Nút Cài đặt</b> — mở rộng thành các mục với 3 nút để cấu hình HUD chính và kích thước cửa sổ: tăng kích thước cửa sổ, giảm kích thước cửa sổ, chuyển đổi kiểu HUD chính.</li>
<li><b>Nút Kỹ năng chủ động</b> — mở rộng thành một mục nhỏ bên dưới HUD chính, nơi bạn thấy các kỹ năng chủ động đã nhận.</li>
<li><b>Ô Trang sức</b> — một ô túi đồ để đặt trang sức, giúp bạn nhận được các kỹ năng hữu ích. Phải nhận perk <b>Enchantmemento</b>.</li></ol>
${F('hudmin','HUD chính (kiểu Tối giản)','sm')}${T('Bạn có thể di chuyển HUD chính theo chiều ngang (trái và phải) bằng cách kéo thả với chuột phải.')}`,[]],
['cap-do','Hệ thống Cấp độ',`<p>Hệ thống Cấp độ mang lại tiến trình theo cấp độ, tương tự các game RPG. Bạn nhận Kinh nghiệm khi làm những việc bình thường trong game.</p>${F('lvl','Cửa sổ Cấp độ')}`,[
['cd-bang','Các thành phần của cửa sổ',`<ol class="n">
<li><b>Thanh Tiến độ Kinh nghiệm</b> — mỗi khi nhận XP, thanh này đầy dần lên. Lượng XP nhận được khi làm một số việc có thể thay đổi trong cấu hình mod.</li>
<li><b>Cấp độ hiện tại</b> — bạn lên cấp mỗi khi làm đầy Thanh Kinh nghiệm. Có thể đặt giới hạn cấp độ trong cấu hình mod (mặc định không giới hạn).</li>
<li><b>Điểm Chỉ số khả dụng</b> — số Điểm Chỉ số bạn có thể dùng. Nhận khi lên cấp; số điểm nhận được có thể đổi trong cấu hình mod.</li>
<li><b>XP tổng</b> — tổng XP bạn từng nhận. Khi đổi nhân vật, bạn tự động nhận cùng lượng XP, nghĩa là quay lại đúng cấp độ cũ.</li>
<li><b>Chi tiết Chỉ số</b> — xem chỉ số của mình. Đây là chỉ số cuối cùng, đã tính cả tác động bên ngoài (sát thương từ buff, tốc độ từ nền đất, phòng thủ từ giáp).</li>
<li><b>Nút Dùng Điểm Chỉ số</b> — xuất hiện khi bạn có điểm khả dụng. Nhấn để tiêu điểm và tăng chỉ số tương ứng (mức tăng mỗi lần chỉnh được trong cấu hình). Có thêm nút <b>x10</b> và <b>MAX</b>; cẩn thận, MAX sẽ dùng hết toàn bộ điểm còn lại.</li>
<li><b>Chi tiết Thuộc tính</b> — hiển thị Chi phí để nhận một chỉ số và số lần đã nhận. Ban đầu tốn 1 điểm, nhận càng nhiều lần càng đắt.</li>
<li><b>Nút Đặt lại</b> — đặt lại toàn bộ Điểm Chỉ số đã dùng và hoàn lại một phần (85%), đồng thời phạt máu tối đa (cả hai chỉnh được trong cấu hình). Không đặt lại Cấp độ hay XP.</li>
<li><b>Nút Cấp độ Thú cưng</b> — chuyển sang cửa sổ cấp độ thú cưng. Chỉ hiển thị nếu bạn có perk "Pet Not Included".</li></ol>`],
['cd-xp','Cách nhận XP',`<ul><li>Mỗi lần lên cấp, XP được đặt lại và mục tiêu cấp tiếp theo tăng lên — cấp càng cao càng khó lên.</li>
<li>Nhận <b>XP</b> bằng cách hoàn thành công việc (chặt cây, đào mỏ, đào đất…), giết sinh vật, trồng và chăm sóc cây, nấu ăn (Crockpot), ăn uống, câu cá, chế tạo và hái vật phẩm.</li>
<li>Giết sinh vật mạnh hơn, ăn món ngon hơn, chế tạo công trình (hơn vật phẩm), câu cá biển (hơn cá ao) hay trồng một số hạt giống đặc biệt đều cho nhiều XP hơn.</li>
<li>Khi giết sinh vật, giết một mình nhận nhiều XP hơn vì XP được chia đều cho người chơi ở gần (<b>Assist XP</b>, phạm vi cấu hình được).</li>
<li>Việc giết hoặc làm việc của người đi theo bạn <b>KHÔNG</b> mang lại XP (trừ Merm Wardens, "BERNIE", "Maxwell Shadow Minions", Fluffy và "Abigail").</li></ul>
<h3>Thưởng XP theo nhân vật</h3><ul><li>Woodie và Maxwell khi làm việc; Wigfrid khi giết sinh vật; Wormwood khi trồng trọt; Warly khi nấu ăn và ăn uống; Wurt khi câu cá; Winona khi chế tạo.</li><li>Wes nhận thêm 25% XP cho mọi việc để bù đắp sự vô dụng của anh ta.</li></ul>`],
['cd-meo','Mẹo về Chỉ số',`<p>Chỉ số trong phần Chi tiết Chỉ số là tổng chỉ số, gồm cả thưởng từ giáp, buff hoặc nền đất bạn đang đứng.</p>
${T('Mặc định, đặt lại Điểm Chỉ số không hoàn 100% điểm. Nhưng nếu bạn đổi nhân vật bằng <b>"Moon Rock Idol"</b>, bạn nhận lại toàn bộ điểm mà vẫn giữ nguyên Điểm Chỉ số. Nhờ vậy bạn có thể chơi nhân vật thiên về thu thập/làm việc (Woodie, Maxwell) rồi đổi sang nhân vật chiến đấu (Wigfrid, Willow) mà không mất tiến trình.')}`]]],
['thanh-tuu','Hệ thống Thành tựu',`<p>Hệ thống Thành tựu gồm nhiều thành tích trong game, mang lại cho bạn <b>Sao</b> khi đạt được. Sao dùng để đổi Perk.</p>${F('ach','Cửa sổ Thành tựu')}`,[
['tt-bang','Các thành phần của cửa sổ',`<ol class="n"><li><b>Sao</b> — số Sao hiện tại của bạn.</li>
<li><b>Danh sách Thành tựu</b> — mỗi thành tựu là một mục, gồm tên, mô tả và số Sao nhận được. Thành tựu đã hoàn thành sáng lên màu vàng.</li>
<li><b>Các Tab Danh mục</b> — thành tựu được nhóm theo danh mục, nhấn các nút danh mục để chuyển qua lại.</li>
<li><b>Các Nút Hành động</b> — ngoài tên, mô tả và số sao, mỗi mục có một hoặc nhiều nút (xem bên dưới).</li></ol>${F('achitem','Một mục thành tựu và các nút hành động','sm')}
<ul><li><b>Nút Ghim</b> — ghim tiến độ thành tựu ở góc dưới bên trái màn hình.</li><li><b>Nút Thông tin</b> — hiển thị một mục mới bên phải cửa sổ với thông tin bổ sung; chỉ có ở thành tựu có danh sách hành động cần làm.</li><li><b>Nút Hướng dẫn</b> — hiện cửa sổ bật lên với hướng dẫn và mẹo cho thành tựu đó; chỉ xuất hiện nếu các mod hướng dẫn phía client được kích hoạt.</li></ul>`],
['tt-meo','Mẹo',`<ul><li>Rê chuột lên mục Thành tựu để xem tiến độ hoàn thành.</li></ul>${F('tip1','Rê chuột để xem tiến độ','sm')}
<ul><li>Thành tựu đã ghim hiện ở góc dưới bên trái màn hình. Gỡ bằng nút X hoặc nhấn lại nút ghim.</li></ul>${F('tip2','Thành tựu đã ghim','sm')}
<ul><li>Hoàn thành thành tựu sẽ có hoạt ảnh, âm thanh và thông báo trong khung chat (tắt được trong cấu hình mod).</li></ul>${F('tip3','Thông báo hoàn thành thành tựu','sm')}
<ul><li>Một số thành tựu có hành động cần làm; nhấn Nút Thông tin để xem ở bên phải cửa sổ.</li></ul>${F('tip4','Phần thông tin bổ sung bên phải cửa sổ')}
<ul><li>Hầu hết thành tựu được thiết kế để mất nhiều ngày mới hoàn thành (không dành cho phá đảo nhanh), nên cứ thong thả — nhiều thành tựu sẽ tự nhiên đạt được.</li>
<li>Một số thành tựu chỉ một số nhân vật nhất định làm được, hãy đổi nhân vật để kiếm nhiều Sao. Nếu thấy thành tựu không phù hợp (không chơi nhân vật đó, chơi một mình nên không làm được thành tựu co-op), bạn có thể tắt bằng các mod riêng trên trang Steam của mod. <b>Lưu ý:</b> tắt thành tựu bằng các mod này sẽ không cho bạn nhận Sao.</li></ul>`]]],
['perk','Hệ thống Perk',`<p>Hệ thống Perk bổ sung hàng chục kỹ năng mở khóa bằng cách tiêu Sao, từ buff đơn giản đến nội dung hoàn toàn mới như vật phẩm, trùm, công trình mới…</p>${F('perk','Cửa sổ Perk')}`,[
['pk-bang','Các thành phần của cửa sổ',`<ol class="n"><li><b>Sao</b> — số Sao hiện tại của bạn.</li>
<li><b>Danh sách Perk</b> — mỗi perk là một nút gồm tên, mô tả và số sao cần để nhận. Nhấn chuột trái để nhận; perk đã nhận sáng lên màu vàng.</li>
<li><b>Các Tab Loại Perk</b> — nhấn các nút loại để chuyển qua lại.</li>
<li><b>Nút Đặt lại</b> — đặt lại toàn bộ perk đã nhận, hoàn lại một phần sao (85%) và phạt máu tối đa (cả hai chỉnh được trong cấu hình mod).</li>
<li><b>Số lượng Perk Thuộc tính</b> — trong mục Perk Thuộc tính có con số cho biết bạn đã nhận bao nhiêu lần.</li>
<li><b>Chỉ báo Danh mục Global</b> — một số perk Global có chỉ báo ON/OFF; nhấn chuột trái để bật/tắt.</li></ol>
<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">${F('perk1','Perk Thuộc tính (có số lần đã nhận)','sm')}${F('perk2','Perk Global (có chỉ báo ON/OFF)','sm')}</div>`],
['pk-loai','Các loại Perk',`<p>Hiện có 6 loại perk:</p><div class="tw"><table><tr><th>Loại</th><th>Đặc điểm</th></tr>
<tr><td><b>Attributes</b></td><td>Nhận được nhiều lần, mạnh hơn sau mỗi lần; mỗi lần nhận tiếp theo đắt hơn.</td></tr>
<tr><td><b>Abilities</b></td><td>Chỉ nhận một lần, hiệu ứng mạnh và độc đáo.</td></tr>
<tr><td><b>Expertise</b></td><td>Chỉ nhận một lần, dành cho một số nhân vật nhất định.</td></tr>
<tr><td><b>Produce</b> <a href="#" onclick="go('#/mod/achievement-level/produce');return false">(xem chi tiết)</a></td><td>Chỉ nhận một lần, mang lại khả năng "chế tạo" mới.</td></tr>
<tr><td><b>Instant</b> <a href="#" onclick="go('#/mod/achievement-level/instant');return false">(xem chi tiết)</a></td><td>Chỉ mang lại hiệu ứng một lần khi nhận; có thể nhận nhiều lần.</td></tr>
<tr><td><b>Global</b> <a href="#" onclick="go('#/mod/achievement-level/global');return false">(xem chi tiết)</a></td><td>Tác động lớn đến thế giới, ảnh hưởng toàn bộ shard. Chỉ nhận một lần, vĩnh viễn, không thể đặt lại (đặt lại thế giới cũng không hủy nhận; cần tạo bản lưu mới).</td></tr></table></div>`],
['pk-luuy','Lưu ý',`<ul><li>Sao đã tiêu cho perk <b>Global</b> và <b>Instant</b> không được hoàn lại khi đặt lại (kể cả bấm Nút Đặt lại hay đổi nhân vật).</li>
<li>Perk hoàn toàn tùy chọn: nếu không nhận, chúng không ảnh hưởng game. Nếu chạy máy chủ công khai và muốn chặn một số perk, bạn có thể tắt chúng bằng các mod riêng trên trang Steam của mod.</li></ul>`]]],
['nhiem-vu','Nhiệm vụ theo mùa',`<p>Tương tự Hệ thống Thành tựu nhưng hoàn thành nhiệm vụ không cho thưởng ngay. Bạn cần hoàn thành nhiều nhiệm vụ để tiến tới các <b>mốc</b> và nhận phần thưởng tương ứng. Mỗi mùa có <b>6 nhiệm vụ ngẫu nhiên</b>; nhiệm vụ, mốc và phần thưởng được đặt lại mỗi khi mùa thay đổi.</p>${F('task','Cửa sổ Nhiệm vụ theo mùa')}`,[
['nv-moc','Các mốc thưởng',`<div class="tw"><table><tr><th>Mốc</th><th>Yêu cầu</th><th>Thưởng</th></tr>
<tr><td>1</td><td>1 nhiệm vụ</td><td>Hồi 50 Máu, Tinh thần và Độ đói</td></tr>
<tr><td>2</td><td>2 nhiệm vụ</td><td>Quà riêng của nhân vật (dùng 1 lần)</td></tr>
<tr><td>3</td><td>3 nhiệm vụ</td><td>1 Sao</td></tr>
<tr><td>4</td><td>4 nhiệm vụ</td><td>Buff riêng của nhân vật kéo dài cả mùa + 200 XP</td></tr></table></div>`],
['nv-bang','Các thành phần của cửa sổ',`<ol class="n"><li><b>Sao</b> — số Sao hiện tại của bạn.</li><li><b>Danh sách Nhiệm vụ</b> — mô tả ở bên trái, tiến độ ở bên phải.</li><li><b>Thanh Tiến độ Mốc</b> — đầy dần khi hoàn thành nhiệm vụ; có 4 mốc, mỗi mốc có nút rương kho báu ở phía trên để nhận thưởng.</li><li><b>Nút Nhận tất cả</b> — nhận mọi phần thưởng cùng lúc.</li></ol>`],
['nv-nv','Phần thưởng theo nhân vật',`<p>Mỗi nhân vật có phần thưởng khác nhau ở mốc 2 và mốc 4.</p><div class="tw"><table id="ct"><tr><th>Nhân vật</th><th>Mốc 2</th><th>Mốc 4</th></tr></table></div>`]]],
['bieu-tuong','Chú giải biểu tượng',`<p>Các biểu tượng dùng để hiển thị thông tin vật phẩm hoặc sinh vật trong mod.</p><div class="lg" id="lg"></div>`,[]]];
const CH=[['Wilson','Nhận 1 viên đá quý ngẫu nhiên','Chặn 0,1 sát thương cho mỗi ngày râu mọc (tối đa 100); sát thương tối thiểu phải chịu sau khi chặn vẫn là 1'],
['Willow','Nhận 5 Ethereal Embers','+25% sát thương trong 30 giây mỗi khi thi triển phép bằng Ethereal Embers'],
['Wolfgang','Hồi đầy Máu','Nhận XP bằng 50% sát thương phải chịu'],
['Wendy','Nâng cấp Abigail lên tối đa','+100% sát thương cả ngày mỗi khi Abigail chết; mất buff nếu triệu hồi lại Abigail'],
['WX-78','Nhận 6 đơn vị Charge','Tung đòn kết liễu trùm sẽ rơi ra 1 bánh răng'],
['Wickerbottom','Hồi đầy Tinh thần','+5 XP mỗi khi đọc sách; 50% tỉ lệ không tiêu hao sách'],
['Woodie','Nhận 1 Kitschy Idol','+100% sát thương trong 60 giây mỗi khi hoàn thành công việc (chặt cây, đập đá, đào gốc cây…)'],
['Wigfrid','Hồi đầy độ bền toàn bộ giáp đang trang bị','+0,5% sát thương trong 15 giây mỗi khi giết sinh vật; giết trùm nhận +5% trong 5 phút. Buff cộng dồn và làm mới thời gian'],
['Winona','Tháo rã vật phẩm đầu tiên trong túi đồ (nếu tháo được)','Các công trình ở gần không thể bị phá hủy'],
['Warly','Hồi đầy Độ đói','Khi ăn, chia sẻ lượng chỉ số hồi phục và hiệu ứng cho người chơi ở gần'],
['Wortox','Triệu hồi một Krampus (khi bị giết cho nhiều hơn 666% XP)','+10% Tỉ lệ Chí mạng, +20% Sát thương Chí mạng, +30% Né tránh'],
['Wormwood','Tạo ngẫu nhiên 1–5 cây trồng ở gần','Khi bị tấn công, chuyển hướng đòn đánh sang một cái cây gần đó nếu có'],
['Wurt','Nhận 1 con cá biển ngẫu nhiên','Merm NPC thân thiện ở gần nhận tỉ lệ né tránh dựa trên độ ướt của Wurt (tối đa 70%)'],
['Walter','Nhận 2 miếng thịt khô ngẫu nhiên','Súng cao su có 80% không tiêu hao đạn'],
['Wes, Maxwell, Webber, Wanda','Chưa được triển khai','Chưa được triển khai'],
['Nhân vật từ mod','50 XP','200 XP']];
const LG=[['Máu tối đa','Máu tối đa của sinh vật. Sinh vật không có biểu tượng này thì không thể bị tấn công.'],['Sát thương tấn công','Sát thương tấn công cơ bản; thông tin bổ sung (AoE, Tầm xa, Planar…) được liệt kê nếu có. Không có biểu tượng này thì không thể tấn công.'],['Tốc độ di chuyển','Dạng khoảng (vd 3–7): số đầu là tốc độ đi bộ, số sau là tốc độ chạy. Không có biểu tượng này thì không thể di chuyển.'],['Tốc độ bay','Dạng khoảng: số đầu là tốc độ thường, số sau là tốc độ chạy. Có biểu tượng này là sinh vật biết bay.'],['Tốc độ bơi','Dạng khoảng: số đầu là tốc độ thường, số sau là tốc độ chạy. Không có biểu tượng này thì không thể bơi.'],['Ô trang bị','Có thể trang bị; ghi rõ ô sử dụng. Một số mod có thể đổi ô trang bị (phổ biến là ô ba lô và ô bùa đeo).'],['Sát thương cận chiến','Vũ khí cận chiến khi trang bị; ghi rõ sát thương gây ra.'],['Sát thương tầm xa','Vũ khí tầm xa khi trang bị; ghi rõ sát thương gây ra.'],
['Giáp','Cung cấp giáp khi trang bị; ghi rõ phần trăm chặn.'],['Độ bền Giáp','Máu của giáp. Giảm khi giáp nhận sát thương, hỏng khi về 0.'],['Độ bền theo Lượt dùng','Giảm mỗi lần sử dụng, hỏng khi về 0.'],['Độ bền theo Thời gian','Giảm dần theo thời gian, hỏng khi hết thời gian.'],['Độ bền Vô hạn','Không bị hỏng hay biến mất.'],['Có thể nạp nhiên liệu','Ghi rõ loại nhiên liệu.'],['Dụng cụ','Cung cấp hành động làm việc khi trang bị (vd: DIG, CHOP, MINE).'],['Cấp độ Bóng tối','Cung cấp cấp độ trang bị bóng tối; ghi rõ cấp độ.'],
['Cách nhiệt mùa hè','Cách nhiệt chống nóng khi trang bị; ghi rõ giá trị.'],['Cách nhiệt mùa đông','Cách nhiệt chống lạnh khi trang bị; ghi rõ giá trị.'],['Kháng ướt','Kháng ướt khi trang bị; ghi rõ phần trăm.'],['Có Charge','Cơ chế mới riêng của mod. Hiển thị bằng phần trăm trên biểu tượng vật phẩm như độ bền, nhưng vật phẩm không bị phá hủy khi về 0% (trừ khi có ghi chú).'],['Thi triển phép','Vật phẩm có phép thi triển được. 3 cách: Phép chuột phải (RMB Spell: nhấp chuột phải vào khu vực), Phép mục tiêu (Target Spell: nhấp chuột phải vào mục tiêu), Phép túi đồ (Inventory Spell: nhấp chuột phải vào biểu tượng trong túi đồ).'],['Công trình','Công trình xây dựng; có thể phá bằng búa (trừ khi có ghi chú).'],['Sinh vật / Quái','Có thể di chuyển (nếu có biểu tượng tốc độ), tấn công (nếu có sát thương tấn công), bị tấn công hoặc bị giết (nếu có máu tối đa).'],['Rương chứa','Có chỗ chứa đồ; ghi rõ số ô.'],
['Rương xách tay','Có chỗ chứa đồ, nhặt lên được và đặt vào túi đồ hoặc rương khác; ghi rõ số ô.'],['Rương di động','Có chỗ chứa đồ và di chuyển được (vd: Woby, Chester, Hutch); ghi rõ số ô.'],['Ba lô','Ba lô; ghi rõ số ô.']];
