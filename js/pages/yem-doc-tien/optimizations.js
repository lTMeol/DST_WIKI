/* ============================================================
   Yêm Đốc Tiên – Tối ưu thần thoại
   ============================================================ */
/* ===== Yêm Đốc Tiên — trang 5: Tối ưu thần thoại ===== */
const YDOP=[
['op-tq','Tổng quan',`<p>Trang này ghi lại các tối ưu, tăng cường và sửa lỗi mà Yêm Đốc Tiên áp dụng lên nhân vật và cơ chế chủ đề của 《Thần Thoại Thư Thuyết》. Các tăng cường có thể cấu hình sẽ ghi rõ giá trị mặc định hiện tại. Sửa lỗi tương thích và tối ưu cố định có hiệu lực ngay, không cần công tắc riêng.</p>
<ul><li><b>Tối ưu cơ chế nhân vật:</b> ${YLS('op-yt','Dương Tiễn')}, ${YLS('op-wk','Tôn Ngộ Không')}, ${YLS('op-bg','Trư Bát Giới')}, ${YLS('op-bc','Bạch Cốt Phu Nhân')}, ${YLS('op-bt','Bàn Ti Nương Nương')}, ${YLS('op-vc','Vô Thường')}, ${YLS('op-nt','Na Tra')} và ${YLS('op-bd','bị động toàn bộ nhân vật')}.</li>
<li><b>Tối ưu cơ chế chủ đề:</b> ${YLS('op-gt','Thị trấn Gấu Trúc')}, ${YLS('op-tbb','Tụ Bảo Bồn')}, ${YLS('op-kt','Kho Thóc Thông Minh')}, ${YLS('op-bbn','Bách Bảo Nang')}, ${YLS('op-ld','Lò Luyện Đan')}, ${YLS('op-ll','giao dịch Thái Thượng Lão Quân')}, ${YLS('op-ns','Cây Nhân Sâm Quả')}, ${YLS('op-dc','xếp chồng')}, ${YLS('op-yv','Thông báo Yêu Vương')}, ${YLS('op-td','Thổ Địa Hỏi Đường')}, ${YLS('op-pt','Phúc Trạch Che Chở')}, ${YLS('op-tl','Rừng Trúc')}, ${YLS('op-ls','Niêm Sáp Rừng Trúc')}, ${YLS('op-dv','Đằng Vân')}, ${YLS('op-kp','phím tùy chỉnh')}, ${YLS('op-ui','phím Đặt lại UI')} và ${YLS('op-hud','HUD máu thú cưỡi')}.</li></ul>`],

['op-nv','Tối ưu cơ chế nhân vật','',[
['op-yt','Dương Tiễn',YU([
`<b>Thanh chế tạo ma thuật:</b> mặc định bật. Mở khóa sẵn thanh chế tạo ma thuật.`,
`<b>Thiên Nhãn Chiếu Phá Hư Vọng:</b> mặc định tắt. Khi bật, trong trạng thái Thiên Nhãn có thể nhìn rõ và tấn công sinh vật bóng tối (heo điên, quái bóng...).`,
`<b>Sửa Khu Lôi Sách Điện:</b> mặc định chỉ sửa lỗi kỹ năng gốc của thần thoại bị mất tác dụng, không thêm cường hóa.`,
`<b>Lôi Động Cửu Thiên:</b> mặc định tắt. Bật riêng trong cài đặt, sau khi Tam Tiêm Lưỡng Nhận Đao được phụ lôi thì Khu Lôi Sách Điện nâng thành Lôi Động Cửu Thiên mạnh hơn, Dẫn Lôi và Thiên Phạt cũng được điều chỉnh theo.<ul>
<li><b>Khu Lôi Sách Điện gốc:</b> trong 6 ô tường quanh điểm rơi gây 10~15 sát thương sét đợt đầu, sau đó với mục tiêu trong 12 ô tường gây thêm 30 sát thương sét và 1 lần sát thương vũ khí.</li>
<li><b>Lôi Động Cửu Thiên:</b> kỹ năng kích hoạt nhanh hơn, lấy điểm rơi làm tâm, gây 35~45 sát thương sét và điện giật tối đa 8 kẻ địch gần nhất trong 8 ô tường; sau 0,45 giây gây thêm 45 sát thương sét và 1,2 lần sát thương vũ khí lên mục tiêu còn sống, và để lại lôi ngấn.</li>
<li><b>Lôi ngấn:</b> kéo dài 10 giây, trong thời gian đó mục tiêu chịu sát thương ×1,1, đến giây thứ 5 điện giật thêm một lần nữa.</li>
<li><b>Dẫn Lôi (từ V2.4.21):</b> không còn giáng sét thật mà trực tiếp phụ lôi lên Tam Tiêm Lưỡng Nhận Đao 240 giây (hồi chiêu như cũ, trong hang động vẫn không dẫn lôi được). Do đó không bị tán cây hay cột thu lôi ảnh hưởng và không đốt vật phẩm bên cạnh; Lôi Tập và Thiên Phạt đổi sang logic điện giật chính thức của game, không còn làm quái như Rồng Ruồi thoát trạng thái choáng bất thường.</li>
<li><b>Thiên Phạt:</b> đòn thứ 6 liên tiếp lên cùng một mục tiêu sẽ giáng Thiên Phạt, gây 25~35 sát thương điện, tính như trúng đòn bình thường, không còn ép cứng đờ (bản gốc là 30 sát thương và ép cứng đờ); trong hang động không kích hoạt.</li>
<li><b>Ngưng Vị Đan:</b> khi dùng, 35~45 sát thương đợt đầu, 1,2 lần sát thương vũ khí và Thiên Phạt được nhân đôi; 45 sát thương bổ sung không nhân đôi.</li>
<li><b>Tiêu hao:</b> tương đương kỹ năng gốc — ưu tiên tiêu 10 độ bền của Dương Tiễn Đầu Quan, nếu không có thì tiêu 10 độ đói.</li></ul>`,
`<b>Sửa Triển Sí Phi Ưng:</b> sửa lỗi nút mục tiêu hiển thị bất thường không nhấp được và vị trí nút không khớp tọa độ thật trên bản đồ; Máy Kết Tinh Mắt Băng có thể dùng làm điểm hạ cánh.`
])],
['op-wk','Tôn Ngộ Không',YU([
`<b>Từ chối tay bơ:</b> mặc định bật. Mọi vũ khí không còn tuột tay.`,
`<b>Sửa biến thân:</b> tự động sửa. Khi biến thành Miếu Thổ Địa sẽ xử lý ổn thỏa vật phẩm đội đầu, tránh mất mũ và các trang bị đầu khác.`
])],
['op-bg','Trư Bát Giới',`<ul><li><b>Lực sĩ no bụng:</b> mặc định bật. Thể hình và hệ số sát thương thay đổi theo bậc thang độ no:</li></ul>${YDTB(['Độ no','Sát thương','Thể hình'],[['&gt; 250','×2,0','×1,2'],['&gt; 150','×1,25','×1,1'],['Còn lại','Trạng thái Bát Giới bình thường','—']])}`],
['op-bc','Bạch Cốt Phu Nhân',YU([
`<b>Mở hết ô trang bị:</b> mặc định bật. Tương thích các mod mở rộng 5 ô/6 ô.`,
`<b>Sửa vật rơi:</b> sửa lỗi giết “Cây Lục Bình Sáng” (Lureplant) không rơi chiến lợi phẩm.`,
`<b>Chủ động thu sương:</b> khi hiệu ứng hóa sương của Bạch Cốt Phu Nhân đang có hiệu lực, có thể nhấp chuột phải lên bản thân chọn “Thu sương” để thu sương của mình về sớm, thời gian hồi chiêu còn lại không đổi. Không xóa sương của Bạch Cốt Phu Nhân khác; không dùng được khi cưỡi thú hoặc đằng vân.`,
`<b>Độ trong suốt của sương:</b> chọn trong <b>Màn hình tạm dừng → Tùy chọn → Yêm Đốc Tiên → Độ trong suốt hóa sương Bạch Cốt</b> một trong bốn mức: gốc, hơi nhẹ, nhẹ hơn, trong suốt. Mọi nhân vật đều chỉnh được, chỉ đổi lớp sương trên màn hình của bạn, không đổi hiệu quả kỹ năng, phạm vi và hồi chiêu, cũng không ảnh hưởng hình ảnh của người chơi khác.`
])],
['op-bt','Bàn Ti Nương Nương',YU([
`<b>Giới hạn tơ nhện:</b> mặc định gốc (100), có thể nâng lên 200.`,
`<b>Trả lại thanh chế tạo:</b> sửa lỗi vật phẩm chuyên biệt gốc không hiển thị trong thanh chế tạo nhân vật.`,
`<b>Làm sạch thanh nhân vật:</b> Bàn Ti vẫn giữ thân phận thân thiện với nhện, nhưng thanh chế tạo nhân vật không còn lẫn các công thức chăm sóc nhện riêng của Webber; công thức chuyên biệt của chính Bàn Ti hiển thị bình thường.`,
`<b>Tứ Tượng Tam Hợp Cục:</b> xem mô-đun riêng ở phần “Hệ thống cốt lõi” — ${YLK('/systems','ys-sc','Tứ Tượng Tam Hợp Cục')}.`
])],
['op-vc','Vô Thường',YU([
`<b>Hệ thống chống bạo hồn:</b> mặc định tắt (bạo động như gốc). Khi bật, linh hồn tràn ra sẽ bốc lên hiệu ứng hồn trắng tại chỗ rồi tan, không gây hình phạt bạo động.`,
`<b>Tùy chỉnh dung lượng:</b> mặc định gốc (20), có thể chọn 40/60/120, ảnh hưởng giới hạn xếp chồng linh hồn và giới hạn hấp thụ của Vô Thường Quan Mạo.<ul><li>Nếu mod khác đặt giới hạn xếp chồng linh hồn cao hơn thì giữ giá trị cao hơn, nhưng giới hạn tự hấp thụ của Vô Thường Quan Mạo vẫn lấy theo thiết lập này.</li></ul>`,
`<b>Giới hạn Bỉ Ngạn Hoàn Dương:</b> mỗi lần tối đa tính và tiêu 20 Ác Hồn và 20 Thiện Hồn; hồn vượt giới hạn mỗi lần vẫn được giữ trong Vô Thường Quan Mạo.`,
`<b>Tăng tầm đánh Câu Hồn Tác:</b> mặc định bật. Khi bật, tầm đánh giai đoạn 1/2/3 kéo dài lên 2,0 / 1,75 / 1,50.`,
`<b>Tối ưu động tác tấn công:</b> mặc định tắt. Thay động tác tấn công bằng hiệu ứng roi gốc.`,
`<b>Sửa động tác Trấn Hồn:</b> khi bật bù trễ, dùng Trấn Hồn Lệnh khi đang di chuyển liên tục sẽ không còn bị giật vị trí; hiệu quả và động tác biểu hiện gốc của Trấn Hồn không đổi.`,
`<b>Chia sẻ lỗ hang Diêm La Tượng:</b> trên mặt đất và trong hang dùng chung cấp cao nhất của các Diêm La Tượng hiện có; giới hạn ba chỉ số, hồi phục ban đêm của thân dự phòng, hồi sinh và hồi linh hồn, lợi ích thức ăn đều có hiệu lực theo cấp này. Khi đi lại giữa mặt đất và hang vẫn giữ riêng ba chỉ số thực tế và trạng thái chết của hai thân Hắc và Bạch; phá tượng cấp cao nhất thì hạ cấp theo các tượng còn lại, nhiều tượng không cộng dồn. Hiến hồn, học công thức, phạm vi Trấn Hồn và hồi lý trí khi đứng gần vẫn cần Diêm La Tượng ở cùng thế giới.`,
`<b>Âm Dương Phân Ty:</b> mặc định tắt.<ul>
<li><b>Chuột trái “Âm Dương Phân Ty” trên thanh kỹ năng:</b> để hình thái hiện tại lại tại chỗ, tự mình đổi sang hình thái kia tiếp tục hành động; thân để lại đứng bán trong suốt, chỉ xem được.</li>
<li>Sau khi phân ty, dùng chuyển Hắc/Bạch gốc của thần thoại để đến chỗ thân kia: cùng thế giới thì đi thẳng tới, khác mặt đất và hang thì qua giới đi tới, lúc rời đi để hình thái hiện tại lại chỗ cũ.</li>
<li>Dùng chung ô đồ, vật phẩm đi theo người.</li>
<li><b>Chuột phải trên thanh kỹ năng:</b> thu thân hợp nhất bất cứ lúc nào, thân còn lại ở thế giới khác cũng thu về xuyên giới được.</li>
<li>Một thân nhận sát thương chí mạng thì hồn quy về thân kia, hình thái ngã xuống ở lại tại chỗ, phải hồi sinh mới chuyển lại được.</li>
<li>Địa hình đặc biệt như mặt nước, trên thuyền không để thân lại được.</li>
<li>Thân để lại nếu bị xóa ngoài ý muốn sẽ tự động hợp làm một.</li></ul>`
])],
['op-nt','Na Tra',YU([
`<b>Hỗn Thiên Lăng hộ chủ tỉnh thần:</b> khi đang mặc Hỗn Thiên Lăng mà bị đóng băng hoặc bị thôi miên ngã xuống, chặn thành công một đòn tấn công chiến đấu thường thì giải trừ khống chế tương ứng. Vũ khí thôi miên không kích hoạt tỉnh dậy; ngủ chủ động bằng túi ngủ hoặc lều, cùng nổ và đá rơi không kích hoạt hiệu quả này. Giữ nguyên chống sát thương và số lần tiêu hao vốn có.`,
`<b>Sửa Càn Khôn Quyển bay:</b> sửa lỗi rơi bất thường xuống nước hoặc vào hư không khi đang bay.`,
`<b>Càn Khôn Quyển tự tuần hoàn:</b> mặc định bật. Vòng bay ra tự bay về ô trang bị hoặc ba lô; trúng đích hay trượt đều tự thu hồi.`
])],
['op-bd','Bị động toàn bộ nhân vật',YU([
`<b>Đẩy lùi lời nguyền khỉ:</b> mặc định bật. Mọi nhân vật thần thoại khi dính lời nguyền sẽ không biến thành Vô Hầu (Wonkey) (nhưng trang sức lời nguyền vẫn dính vào người và có hiệu lực).`
])]
]],

['op-gt','Làm mới Thị trấn Gấu Trúc',`${YU([
`<b>Chính thức thuộc về mod:</b> tầng kinh doanh của Thị trấn Gấu Trúc đã kết thúc thử nghiệm Hồ Thiên Bách Hí, nay do mod chính Yêm Đốc Tiên cung cấp độc lập; công tắc cũ của mod trước không chuyển sang, cần xác nhận “Làm mới Thị trấn Gấu Trúc” trong cài đặt mod này.`,
`<b>Công tắc cấu hình:</b> mặc định bật, tắt được trong cài đặt mod; khi tắt trở về logic kinh doanh gốc của thần thoại, không đóng băng kệ hàng mở rộng hiện có, bật lại thì hàng tồn không có khế ước có thể làm mới theo logic gốc; Thiên Trấn Lệnh và Con Dấu Thị Trấn Gấu Trúc không chịu ảnh hưởng của công tắc này, tắt rồi vẫn luyện và dùng được.`,
`<b>Hệ thống hàng mới cũ ngừng:</b> cấu hình cũ “Làm mới Tiệm Thanh Trúc”, bảng hàng mở rộng riêng và logic bổ sung hàng tần suất cao đã bị gỡ, không song song với lối chơi mới; vật phẩm mở rộng được cung cấp thống nhất, việc đổi hàng chủ động do “Thượng Tiên” bằng Trấn Phiếu đảm nhiệm.`
])}
${YH4('Thiên Trấn Lệnh')}
${YU([
`<b>Mô tả vật phẩm:</b> văn thư không gian đóng ấn quan thiên đình, có thể dỡ thị trấn Thanh Trúc.`,
`<b>Công thức luyện (Lò Luyện Đan Thần Thoại):</b> 1 Giấy Cói + 1 Trúc Thần Thoại + 1 Tử Bảo Thạch + 1 Bút Lông Vũ → 1 Thiên Trấn Lệnh.`,
`Vật phẩm dời Thị trấn Gấu Trúc mới thêm; dùng lên tượng trung tâm để phong ấn và dời thị trấn.`
])}
<div class="pb-rc">${YAM('papyrus','Giấy Cói',1)} + ${YAM('myth_bamboo','Trúc Thần Thoại',1)} + ${YAM('purplegem','Tử Bảo Thạch',1)} + ${YAM('featherpencil','Bút Lông Vũ',1)} → ${YAMF('xydztz_panda_town_relocation_order','Thiên Trấn Lệnh',1)}</div>`,[
['op-gt-bt','Tám Tiệm Tân Ước',YU([
`Giữ nguyên tám cửa tiệm gốc của Thị trấn Gấu Trúc thần thoại, tài nguyên mỹ thuật, tương tác chưởng quầy và nhịp bổ sung hàng tự nhiên; đơn thu mua tự nhiên có thưởng Trấn Phiếu dùng lô cố định, không tiếp tục thêm nhu cầu trước khi dọn hết.`,
`Bổ sung và chỉnh lý danh sách hàng của các tiệm: Chợ Rau, Vật Liệu, Bát Quái, Hoa Điểu, Hạt Giống, Trà Hào, Trân Kỳ, Đúc Tượng.`,
`Nhiều tài nguyên hiện đại, tài nguyên thần thoại và món ăn giá trị cao sẽ vào các tiệm tương ứng, nhưng vật phẩm hiếm vẫn giữ xác suất lên kệ thấp.`
])],
['op-gt-tp','Tài khoản Trấn Phiếu',YU([
`Trấn Phiếu là sổ sách thị trấn dùng chung toàn máy chủ, không tính riêng từng người chơi.`,
`Khi người chơi dọn một lần đơn thu mua tự nhiên đủ điều kiện sẽ nhận <b>1~3 Trấn Phiếu</b> theo bậc hàng; mỗi đơn chỉ kết toán một lần, trong lúc đơn còn tồn tại, nhập hàng ban đêm không làm tăng nhu cầu còn lại.`,
`Đơn thu mua có thưởng Trấn Phiếu hiển thị “Phiếu +1~3” ở góc trên trái ô hàng; đơn khế ước hiển thị “Khế” không sinh Trấn Phiếu.`,
`Đơn bán theo khế ước và đơn thu mua thường chưa đặt thưởng Trấn Phiếu không cho phiếu.`,
`Trấn Phiếu không được thấu chi, chủ yếu dùng để đổi hàng chủ động và ký khế ước.`
])],
['op-gt-cq','Menu chưởng quầy',`<p>Nhấp vào chưởng quầy thị trấn mở menu cấp hai mới.</p>${YDTB(['Mục','Chi phí','Tác dụng'],[['Thượng Tiên','15 Trấn Phiếu','Làm mới đồng thời bảng mua vào và bán ra của tiệm hiện tại; sản phẩm đã lập khế ước được giữ lại, không bổ sung thêm vì làm mới chủ động.'],['Bàn Trướng','Không tốn','Xem sổ thị trấn của máy chủ còn bao nhiêu Trấn Phiếu, không tiêu tài nguyên.']])}`],
['op-gt-lk','Cơ chế Lập Khế',YU([
`Với sản phẩm mua được và đơn thu mua mọc tự nhiên, khi mở menu số lượng có thể chọn “Lập khế”.`,
`Lập khế mua vào tiêu <b>8 Trấn Phiếu</b>, lập khế bán ra tiêu <b>7 Trấn Phiếu</b>, kỳ hạn khế là <b>5 ngày</b> tự nhiên.`,
`Trong kỳ khế, sản phẩm đó sau khi nhập hàng ban đêm tự nhiên của thần thoại sẽ được bổ sung thêm một lượng, bị giới hạn bởi trần xếp chồng.`,
`Sản phẩm đã lập khế khi khế chưa hết sẽ không hiện lối gia hạn lặp lại, bấm vào thì chưởng quầy nhắc số ngày chăm sóc còn lại.`
])],
['op-gt-gd','Giá động',YU([
`Sản phẩm khế ước biến động giá theo áp lực giao dịch mỗi ngày, áp lực cộng dồn tối đa 8 tầng.`,
`<b>Khế mua vào:</b> ngày có giao dịch thì hôm sau giá tăng ×1,25 mỗi tầng, tối đa gấp 5 lần.`,
`<b>Khế bán ra:</b> ngày có giao dịch thì hôm sau giá thu mua giảm ×0,8 mỗi tầng, thấp nhất 0,2 lần.`,
`Ngày không có giao dịch tương ứng, áp lực giảm 1 tầng và dần quay về giá gốc; sản phẩm tự nhiên không có khế ước giữ nguyên logic giá gốc của thần thoại.`
])],
['op-gt-gm','Tiệm Bát Quái · Giáp Mộc Thiêm',YU([
`Bốn loại thuốc gốc của Tiệm Bát Quái giữ thiết lập gốc của thần thoại, không tham gia lập khế và giá động.`,
`Thêm dịch vụ “Giáp Mộc Thiêm” (trong Ngũ Hành, Giáp Mộc là đại thụ chọc trời), cố định tiêu <b>100 đồng tiền</b>, hiệu lực <b>3 ngày</b> tự nhiên.`,
`Trong hiệu lực, khi đào kho báu hiển lộ của thần thoại, xác suất đào ra rễ Cây Nhân Sâm Quả tăng lên <b>20%</b>, trăng tròn/khuyết là <b>40%</b>.`
])],
['op-gt-dt','Chi tiết dời thị trấn',YU([
`<b>Điều kiện phong thị trấn:</b> trong 18 ô tường (4,5 ô đất) quanh tượng trung tâm phải có ít nhất 8 cửa tiệm hoặc công trường, không có cửa tiệm nào đang được người chơi dùng, và thế giới không có Con Dấu Thị Trấn Gấu Trúc nào chưa đặt xong. Khi phong, tượng trung tâm, tám cửa tiệm/công trường và chủ tiệm gấu trúc đi lang thang sẽ biến mất cùng lúc, tại chỗ sinh ra “Con Dấu Thị Trấn Gấu Trúc”.`,
`<b>Điều kiện hạ thị trấn:</b> chỉ triển khai được ở thế giới mặt đất; thế giới hiện tại không được có sẵn thị trấn gấu trúc; khi đặt xem trước tượng trung tâm và 8 vị trí cửa tiệm, cả 9 chỗ đều phải là đất liền vĩnh viễn không bị che, cũng không được nằm trong đấu trường Wagpunk.`,
`Sau khi hạ thị trấn sẽ sinh tượng trung tâm và tám công trường cửa tiệm ở vị trí mới, thị trấn mới bắt đầu lại từ trạng thái chờ xây.`,
`Con Dấu Thị Trấn Gấu Trúc không mang xuống hang được, khi xuống hang sẽ rơi ở lối vào; người giữ rời máy chủ thì con dấu rơi tại chỗ; con dấu có biểu tượng bản đồ để dễ tìm.`,
`Sau khi dời thị trấn, tài khoản Trấn Phiếu được giữ lại; kệ hàng của tám tiệm, khế ước, áp lực giá động và hiệu lực Giáp Mộc Thiêm bị xóa ngay lúc phong thị trấn.`
])]
]],

['op-tbb','Cải tổ Tụ Bảo Bồn',`${YU([
`<b>Chính thức thuộc về mod:</b> Cải tổ Tụ Bảo Bồn đã kết thúc thử nghiệm Hồ Thiên Bách Hí, nay do mod chính cung cấp độc lập; công tắc cũ không chuyển sang, cần xác nhận “Cải tổ Tụ Bảo Bồn” trong cài đặt mod này.`,
`<b>Công tắc cấu hình:</b> mặc định bật, tắt được trong cài đặt mod, tắt thì về logic Tụ Bảo Bồn gốc của thần thoại.`,
`<b>Cách dùng:</b> người chơi bỏ Nguyên Bảo vào Tụ Bảo Bồn để rút thưởng.`
])}`,[
['op-tbb-th','Tầng thưởng',`${YDTB(['Tầng','Xác suất','Bảo vệ trải nghiệm'],[['Thường','60%','Không có'],['Tinh lương','25%','Không có'],['Hiếm','11%','20 lần liên tiếp không ra thì lần 21 chắc chắn ra'],['Sử thi','3,5%','50 lần liên tiếp không ra thì lần 51 chắc chắn ra'],['Truyền thuyết','0,5%','100 lần liên tiếp không ra thì lần 101 chắc chắn ra']])}
${YN('Cơ chế bảo đảm chỉ bảo vệ tầng thưởng, không phải vật phẩm chỉ định. Bộ đếm bảo đảm chỉ tích lũy độc lập theo từng người chơi trong thời gian Tụ Bảo Bồn hiện tại tồn tại, người chơi khác nhau không dùng chung; sinh bồn mới hoặc máy chủ tải lại thế giới thì bắt đầu lại. Mục đích là giảm các lần rút liên tục tầng thấp trong bồn này, chứ không biến Tụ Bảo Bồn thành đổi cố định. Rút trúng tầng đó hoặc cao hơn đều xóa bộ đếm của tầng đó, ví dụ trúng sử thi cũng xóa bộ đếm hiếm.','Giải thích cơ chế')}`],
['op-tbb-gd','Mở khóa theo giai đoạn thế giới',`${YDTB(['Giai đoạn','Ý nghĩa mở khóa'],[['Khởi đầu thế giới','Kho thưởng cơ bản mặc định của Tụ Bảo Bồn'],['Bão Thiên Thể','Khi thế giới trải qua Bão Thiên Thể hoặc tiến độ liên quan đến Anh Hùng Thiên Thể thì thêm phần thưởng thời đại Mặt Trăng; hang động không có giai đoạn này, trước khi mở khe nứt vẫn giữ giai đoạn khởi đầu'],['Hậu kỳ khe nứt','Theo tiến độ khe nứt của thế giới nơi Tụ Bảo Bồn đặt, khi mở thì thêm phần thưởng thời đại khe nứt']])}
<p><b>Thưởng theo giai đoạn:</b> Hồ Lô Tử Kim Đỏ, Dương Chi Ngọc Tịnh Bình, Như Ý, Tị Trần Đan, Tị Hàn Đan, Tị Thử Đan và Mảnh Khải Minh chỉ xuất hiện từ giai đoạn Bão Thiên Thể; Châu Báu Thiên Thể xuất hiện từ hậu kỳ khe nứt.</p>`],
['op-tbb-cm','Chống mệt do giá trị thấp',YU([
`Cùng một tầng liên tục ra phần thưởng giá trị thấp thì các lần sau của tầng đó ưu tiên chọn phần thưởng không phải giá trị thấp.`,
`Tầng thường và tinh lương cố gắng tránh liên tục cho cùng một loại vật phẩm.`,
`Giống bảo đảm, cơ chế này chỉ ghi nhận các lần rút liên tục của người chơi đó trong Tụ Bảo Bồn hiện tại; đổi bồn hoặc tải lại thế giới thì bắt đầu lại.`,
`Cơ chế này chỉ để cải thiện cảm giác rút, không đổi xác suất cơ bản của tầng cao.`
])],
['op-tbb-dn','Thiên Địa Bảo Giám định nguyện',YU([
`Khi người chơi mang ${YLK('/artifacts','pb-bg','Thiên Địa Bảo Giám')} bên người, Tụ Bảo Bồn xuất hiện tương tác “Định nguyện”.`,
`Khi rút phải mang Thiên Địa Bảo Giám thì định nguyện mới có hiệu lực; người chơi khác mang Thiên Địa Bảo Giám khi rút cũng có hiệu lực.`,
`Sau khi mở có thể bỏ tối đa <b>2 vật phẩm</b> làm neo nguyện vọng, nhấp “Định nguyện” sẽ đóng giao diện và hoàn thành nghi thức.`,
`Vật phẩm định nguyện không bị rút thưởng tiêu hao; khi Tụ Bảo Bồn bị gỡ, vật phẩm trong ô rơi ra như vật chứa thường.`,
`Định nguyện chỉ ảnh hưởng xu hướng ứng viên bên trong tầng sử thi/truyền thuyết, không tăng tỷ lệ trúng của chính tầng sử thi hay truyền thuyết.`,
`Chỉ vật phẩm sử thi/truyền thuyết mà kho thưởng hiện tại công nhận mới tham gia tính định nguyện; bỏ vật phẩm không hợp lệ thì không có hiệu lực.`,
`Hai ô cùng một vật phẩm không cộng dồn; mục tiêu sử thi và truyền thuyết có thể bỏ lẫn.`,
`Phần thưởng đã đạt giới hạn cá nhân trong bồn hiện tại sẽ không tiếp tục được cộng định nguyện, tránh nguyện vọng bị kẹt vào vật phẩm không nên nhận lặp lại.`
])],
['op-tbb-mm','Lợi ích may mắn',YU([
`Điểm may mắn do Thiên Địa Bảo Giám cung cấp đi theo hệ may mắn chính thức, Tụ Bảo Bồn đọc điểm may mắn hiện tại của nhân vật để tham gia tính định nguyện.`,
`5 điểm may mắn từ một Thiên Địa Bảo Giám đã cho lợi ích rõ rệt.`,
`Tiếp tục chồng may mắn vẫn có tác dụng, nhưng lợi ích dần phẳng lại, tránh chồng may mắn vô tội vạ làm hỏng kho thưởng.`
])],
['op-tbb-cd','Gói Thốn Tâm Cơ Duyên',`${YU([
`${YLK('/artifacts','pb-tt','Thốn Tâm Tinh Phách')} không vào kho rút đơn thông thường, chỉ xuất hiện dưới dạng gói cơ duyên đặc biệt.`,
`Chỉ sau khi trúng tầng truyền thuyết mới phán định thêm có chuyển thành “Gói Thốn Tâm Cơ Duyên” hay không.`,
`Khi không mang Thiên Địa Bảo Giám, trúng truyền thuyết có <b>0,5%</b> cơ duyên; khi có mang thì tăng lên <b>3,5%</b>.`,
`Đây là “phán định lần hai sau khi trúng tầng truyền thuyết”, không phải mỗi lần rút trực tiếp 3,5%.`
])}
${YDTB(['Nội dung gói cơ duyên','Số lượng'],[['Thốn Tâm Tinh Phách','1'],['Hỏa Viên Thạch Tâm','1'],['Long Bì Trù Đoạn','1'],['Bảo Thạch Cầu Vồng','1']])}`],
['op-tbb-gh','Giới hạn cá nhân và bồi thường trong bồn hiện tại',YU([
`8 loại phần thưởng có lợi ích cận biên giảm mạnh: Hồ Lô Rượu, Ba Lô Krampus, Hồ Lô Tử Kim Đỏ, Dương Chi Ngọc Tịnh Bình, Như Ý, Tị Trần Đan, Tị Hàn Đan, Tị Thử Đan — mỗi người chỉ được 1 lần trong thời gian Tụ Bảo Bồn hiện tại tồn tại.`,
`Giới hạn này không vượt qua Tụ Bảo Bồn khác hay lần tải lại máy chủ, cũng không phải duy nhất vĩnh viễn cấp thế giới; trong cùng một bồn, người chơi khác nhau tính riêng.`,
`Nếu trong bồn này rút trúng phần thưởng mình đã đạt giới hạn, sẽ chuyển thành phần thưởng bồi thường theo giai đoạn thế giới hiện tại.`,
`Giai đoạn đầu cố định là Giày Chạy Trốn; sau Bão Thiên Thể thêm Mảnh Khải Minh; sau khi khe nứt mở thêm Châu Báu Thiên Thể.`,
`Nếu gặp phần thưởng bị thiếu, sinh thất bại hoặc lỗi môi trường đặc biệt, hệ thống chuyển sang bồi thường an toàn như bảo thạch, tránh rút hụt và phần thưởng hỏng.`
])],
['op-tbb-kt','Tổng quan kho thưởng hiện tại',`${YH4('Tầng thường (60%, không bảo đảm)')}<p>Cục Vàng, Đá Cát, Da Heo, Lông Bò, Nitrat, Đồng Tiền, Hoa Sen, Lá Sen, Trúc, Ngó Sen, Hạt Sen, Lông Thỏ, Da Slurper, Bánh Răng, Mảnh Xương, Gỗ Sống, Măng Trúc, Đá Mặt Trăng, Cánh Bướm Đêm Trăng.</p>
${YH4('Tầng tinh lương (25%, không bảo đảm)')}<p>Sừng Bò, Tổ Ong, Lông Ngỗng Moose, Sừng Dê Volt, Sapphire, Hồng Ngọc, Trứng Sâu Dung Nham, Trứng Chim Cao Chân, Mảnh Mặt Trăng, Hoa Cây Trăng, Chuột Chũi, Tôm Hùm, Bụi Gai, Hoa Ăn Thịt, Cây Cỏ Đuôi Khỉ, Bụi Chuối, Cây Con Cây Trăng, Vỏ Hạt, Mảnh Hóa Thạch và các loại cây trồng khổng lồ.</p>
${YH4('Tầng hiếm (11%, 20 lần không ra thì lần 21 chắc chắn)')}<p>Hồ Lô, Trúc, Ngà Hải Mã, Gậy Đi Bộ, Bơ, Tử Bảo Thạch, Cam Bảo Thạch, Hoàng Bảo Thạch, Lục Bảo Thạch, Bánh Trung Thu Ngũ Nhân, Bánh Trung Thu Liên Dung, Bánh Trung Thu Da Băng, Thư Trong Chai, Mái Chèo Chiến, Gối Bông Thép, Hạt Giống Quả Đá, Nhớt Glommer, Mứt Quả, Lông Albatross, Đá Tuyệt Vọng, Nhiên Liệu Nỗi Sợ, Phế Liệu, Hồ Lô Rượu, Tử Khuê Thạch, Bông Thép, Nhớt Mũi, Đằng Vân Đan, Giáp Ốc Sên, Kiếm Đêm, Giáp Đêm, Kinh Cức Đan, Sừng Kỳ Lân Biển, Vảy Rồng.</p><p class="mu">Giai đoạn Bão Thiên Thể thêm Mảnh Mặt Trăng chứa năng lượng; giai đoạn khe nứt thêm Thuần Túy Huy Hoàng, Vỏ Cây Lục Bình Sáng.</p>
${YH4('Tầng sử thi (3,5%, 50 lần không ra thì lần 51 chắc chắn)')}<p>Đèn Cung Đình, Mandrake, Gậy Thulecite, Mũ Thulecite, Giáp Thulecite, Hoàn Hồn Đan, Chuỗi Đồng Tiền, Tim Bóng Tối, Kim Thiềm Nhỏ, Ba Lô Krampus, Bộ Thuyền Cổ, Giày Chạy Trốn, Hỏa Viên Thạch Tâm, Long Bì Trù Đoạn, Hộp Bánh Trung Thu, Phong Bao Lì Xì Siêu Cấp (BUFF năm), Tử Khuê Thanh Kim, Tim Tị Hàn, Tim Tị Thử, Tim Tị Trần, Làm Vườn Ứng Dụng, Hồ Lô Đan Dược, Hạt Giống Cây Nút, Vương Miện Ong Chúa, Mỏ Albatross.</p><p class="mu">Giai đoạn Bão Thiên Thể thêm Hạt Giống Bất Ngờ, Bộ Thuyền Rồng Ruồi; giai đoạn khe nứt thêm Tủ Tia Lửa, Tim Bóng Tối Ám Nhập, Bước Chân Bóng Tối.</p>
${YH4('Tầng truyền thuyết (0,5%, 100 lần không ra thì lần 101 chắc chắn)')}<p>Bảo Thạch Cầu Vồng, Nhãn Cầu Deerclops, Da Nấm, Da Gấu, Sừng Thủ Hộ Cổ Đại, Gậy Đào Mộc, Đại Bàn Đào, Mũ Chiến Tử Khuê, Giáp Chiến Tử Khuê.</p><p class="mu">Giai đoạn Bão Thiên Thể thêm Mảnh Khải Minh, Hồ Lô Tử Kim Đỏ, Dương Chi Ngọc Tịnh Bình, Như Ý, Tị Trần Đan, Tị Hàn Đan, Tị Thử Đan; giai đoạn khe nứt thêm Châu Báu Thiên Thể.</p>`]
]],

['op-cd','Tối ưu cơ chế chủ đề khác','',[
['op-kt','Kho Thóc Thông Minh',YU([
`<b>Bảo quản vĩnh viễn:</b> mặc định tắt, khi bật vật phẩm trong kho thóc không bao giờ hỏng.`,
`<b>Lưu trữ toàn diện:</b> mặc định bật, hỗ trợ cất mọi loại thức ăn như thịt, trứng, trái cây, rau củ (bản gốc chỉ nhận nông sản).`,
`<b>Biển gỗ thông minh:</b> mặc định tắt, tương thích mod Smart Minisign.`,
`<b>Nâng cấp không gian:</b> cố định hỗ trợ dùng “Máy Chế Tạo Không Gian Đàn Hồi” hoặc “Sừng Mặt Trăng” của Prism để nâng cấp xếp chồng vô hạn, không cần bật riêng; sau khi nâng cấp, khi tháo ra sẽ hoàn lại vật phẩm nâng cấp.`
])],
['op-bbn','Bách Bảo Nang',YU([
`<b>Thích ứng giao diện:</b> cố định sửa việc kéo di chuyển nút Bách Bảo Nang, vật chứa Bách Bảo Nang và Hồ Lô Tử Kim thần thoại ở màn 4K và tỷ lệ UI không mặc định, không cần cấu hình; vị trí sau chỉnh lưu trên máy.`,
`<b>Thời gian duy trì:</b> mặc định 30 ngày, có thể chọn 1 ngày (gốc)/15 ngày/không bao giờ rơi; khi không bao giờ rơi thì không tiêu Mảnh Thủy Tinh nữa.`,
`<b>Hệ số bảo quản:</b> mặc định 5% (hiệu quả thùng Gấu Chó Cực), có thể chọn 25% (hiệu quả hộp muối)/50% (gốc).`
])],
['op-ld','Lò Luyện Đan (Bát Quái Lô)',YU([
`<b>Luyện đan nhiều lần:</b> mặc định bật.<ul>
<li>Hỗ trợ luyện hàng loạt một chạm theo tỷ lệ nguyên liệu sáu loại đan trong danh sách trắng: Đằng Vân Đan, Khát Huyết Đan, Ngưng Vị Đan, Tráng Cốt Đan, Di Sơn Đan, Kinh Cức Đan.</li>
<li>Hỗ trợ thêm luyện nhiều lần bằng Cấp Cấp Như Luật Lệnh, mỗi lần tối đa 13 mẻ (39 tờ).</li>
<li><b>Giới hạn:</b> đan trong danh sách trắng mỗi lần tối đa 40 mẻ.</li>
<li><b>Hạn chế:</b> Tị Hàn Đan, Tị Thử Đan, Tị Trần Đan không có trong danh sách, các vật phẩm khác (như trang bị) không luyện hàng loạt được.</li>
<li>Khi thu hoạch thành công hàng loạt, người chơi nói: “Lò lửa vượng, Lão Quân tới cũng khen hay”.</li></ul>`
])],
['op-ll','Giao dịch với Thái Thượng Lão Quân',YU([
`<b>Giới hạn giao dịch:</b> mặc định mỗi người 2 lần, có thể chọn gốc/2 lần/5 lần/vô hạn.<ul><li><b>Gốc:</b> mỗi người 1 lần, tích lũy 3 người giao dịch thì Lão Quân rời đi.</li></ul>`,
`Khi toàn bộ giao dịch cộng lại đủ 4 lần thì Lão Quân rời đi (chọn 5 lần thì là 10 lần; chọn vô hạn thì không vì giao dịch mà rời đi); khi số lần chưa hết vẫn rời đi theo thời hạn gốc của thần thoại.`,
`Mỗi người đếm riêng, đổi Chuông Thanh Ngưu lấy Thanh Ngưu cũng tính một lần; bộ đếm lưu theo lần đến của Lão Quân, khởi động lại không xóa, lần triệu hồi sau tính lại.`
])],
['op-ns','Tối ưu Cây Nhân Sâm Quả',YU([
`<b>Chu kỳ ra quả:</b> mặc định 5 ngày, có thể chọn gốc 49 ngày/15 ngày/5 ngày/2 ngày.`,
`<b>Cấu hình xác suất tìm báu đã gỡ:</b> các mức tùy chỉnh 10%/30%/50% đã gỡ; khi không dùng Giáp Mộc Thiêm vẫn theo quy tắc rơi rễ cây gốc của thần thoại, cần tăng xác suất chủ động thì dùng Giáp Mộc Thiêm của Tiệm Bát Quái.`,
`<b>Tương thích Insight:</b> hỗ trợ đầy đủ hiển thị thông tin của mod Insight.`,
`<b>Mở rộng đất:</b> khi Cây Nhân Sâm Quả lớn lên sẽ chuyển các ô đất xung quanh thành đất canh tác được (tránh bị lát đất phủ lên).`,
`<b>Cài đặt độ trong suốt trên máy:</b> chỉnh trong <b>Màn hình tạm dừng → Cài đặt → Yêm Đốc Tiên</b> độ trong suốt của Cây Nhân Sâm Quả đã chín, gồm gốc, nhẹ, rõ, trong suốt; chỉ ảnh hưởng hình ảnh trên máy, không đổi va chạm, tán cây, thu lôi hay sinh quả.`,
`<b>Dọn thảm:</b> thảm Nhân Sâm Quả có thể dùng cào chuột phải để xúc bỏ, tiện dọn mặt đất ở hậu kỳ.`
])],
['op-dc','Bổ sung xếp chồng',YU([
`Bánh Trung Thu Ngũ Nhân, Liên Dung, Da Băng cố định dùng giới hạn xếp chồng vật phẩm nhỏ (chuẩn chính thức 40 cái), không còn bậc xếp chồng riêng.`,
`Hỏa Viên Thạch Tâm, Long Bì Trù Đoạn, Tim Tị Hàn, Tim Tị Thử, Tim Tị Trần, Nhân Sâm Quả, Hoàn Hồn Đan dùng giới hạn xếp chồng vật phẩm lớn (chuẩn chính thức 10 cái).`,
`Trên là giới hạn xếp chồng mặc định; nếu mod khác đã đặt giới hạn cao hơn cho các vật phẩm này thì giữ giá trị cao hơn.`
])],
['op-yv','Thông báo Yêu Vương',`${YU([
`<b>Công tắc cấu hình:</b> mặc định bật.`,
`<b>Nhắc trước khi làm mới:</b> tự động phát toàn máy chủ ở mốc 3 ngày/2 ngày/1 ngày, 5 giây trước khi làm mới đếm ngược phát thông báo.`
])}
${YH4('Tùy chỉnh chu kỳ làm mới')}${YDTB(['Yêu vương','Mặc định','Tùy chọn'],[['Hắc Phong Đại Vương','5 ngày','10 ngày / gốc 20 ngày'],['Kim Thiềm','5 ngày','10 ngày / gốc 20 ngày'],['Tê Giác','5 ngày','20 ngày / gốc 50 ngày']])}`],
['op-td','Thổ Địa Hỏi Đường',YU([
`Người chơi có thể triệu hồi Thổ Địa Công Công.`,
`Nhấp chuột phải tương tác với Thổ Địa Công Công để dò chính xác vị trí cụ thể của Linh Đài Phương Thốn Sơn.`,
`Tầm tiên hỏi đường không còn phải chạy bản đồ vô định trên Đào Đảo.`
])],
['op-pt','Phúc Trạch Che Chở',YU([
`Trong phạm vi ruộng Thổ Địa Công Công chăm sóc nếu có Cây Lục Bình Sáng, ông sẽ chủ động dọn giúp người chơi và để lại chiến lợi phẩm của nó.`
])],
['op-tl','Tối ưu sức tính Rừng Trúc',YU([
`<b>Công tắc cấu hình:</b> mặc định chế độ cân bằng.`,
`Tiếp tục nâng cao thuật toán tối ưu việc sinh và quản lý tăng trưởng rừng trúc ở Thanh Trúc Châu.`,
`Giảm giật lag máy chủ do rừng trúc chất đống ở hậu kỳ.`
])],
['op-ls','Niêm Sáp Rừng Trúc',YU([
`Cả ba dạng sinh trưởng của trúc đều có thể dùng Xịt Chống Mục chính thức để niêm sáp.`,
`Sau khi niêm sáp giữ nguyên ngoại hình và dạng sinh trưởng lúc xịt, không tiếp tục tự nhiên phát triển.`
])],
['op-dv','Chống rung Đằng Vân',YU([
`<b>Sửa âm thầm:</b> sửa lỗi đằng vân giật khi bật bù trễ; sửa tự động có hiệu lực, không cần cấu hình.`,
`<b>Sửa mặt băng:</b> sửa lỗi khi đằng vân vẫn bị trượt ngã vì mặt băng làm ngắt.`,
`<b>Phím trên máy:</b> khi chưa đặt giữ lại lối chế tạo gốc của thần thoại và chuột phải để hạ mây; đã đặt thì dùng cùng một phím để gọi mây và hạ mây, đồng thời bỏ lối chuột phải hạ mây trên máy.`,
`<b>Chặn khi cưỡi thú:</b> đang cưỡi thú không gọi mây được, không ép xuống bò, cũng không tiêu nguyên liệu đằng vân; đằng vân của Ngọc Thố tuân theo cùng quy tắc.`
])],
['op-kp','Tùy chỉnh toàn bộ phím',`${YU([
`Kỹ năng riêng thần thoại (phím H gốc), đằng vân thần thoại, Ngọ Mã Xung Phong, Dậu Kê Khán Phá Dược Trảm, Thôn Thiên Hồ Lô, Ngọc Thố Đảo Dược và phím Đặt lại UI đều đã nối vào hệ thống thiết lập phím chính thức.`,
`<b>Vị trí chỉnh:</b> Màn hình tạm dừng → Tùy chọn → Yêm Đốc Tiên.`,
`Có thể chọn phím bàn phím, phím bên trước/sau của chuột hoặc tắt, giảm xung đột với phím tắt của mod khác hoặc hệ thống.`,
`<b>Đằng vân thần thoại:</b> mặc định tắt; khi gán phím thì dùng cùng một phím điều khiển gọi mây và hạ mây, lối chuột phải hạ mây gốc bị đóng.`,
`<b>Thôn Thiên Hồ Lô:</b> mặc định tắt; khi gán phím có thể bấm phím để phát Thôn Thiên, khi thỏa điều kiện Thôn Nguyệt thì tự phát Thôn Nguyệt.`,
`<b>Ngọc Thố Đảo Dược:</b> mặc định tắt; khi gán phím có thể bấm phím để mở giao diện giã thuốc.`,
`Khi Thiên Thư Thần Thoại và đồ Nguyên Thìn Kiếp Vận đang mở đều hỗ trợ phím tạm dừng của máy chủ; mặc định bấm <b>P</b> để tạm dừng game, nếu người chơi đã đổi phím tạm dừng chính thức thì theo thiết lập chính thức.`
])}`],
['op-ui','Phím Đặt lại UI',YU([
`Khi không tìm thấy Bách Bảo Nang hoặc UI kỹ năng, có thể dùng phím Đặt lại UI để đặt lại một lần toàn bộ UI thần thoại.`,
`Phím mặc định vẫn là <b>F11</b>, phím thực tế có thể tùy chỉnh trong thiết lập phím chính thức.`
])],
['op-hud','HUD máu thú cưỡi',YU([
`Thêm HUD hiển thị máu Thanh Ngưu và Niên Thú, khi cưỡi sẽ tự bật ra để dễ phán đoán tình trạng máu hiện tại.`
])]
]]
];
