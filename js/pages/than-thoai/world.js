/* Thần Thoại Thư Thuyết – Tab 2: Thế giới & địa điểm
   Nạp SAU intro.js (dùng TTTG) và yem-doc-tien/helpers.js (YDTB, YO). */
const TTW=[
['tw-overview','Tổng quan địa điểm',
TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: Tổng quan địa điểm','Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: Đào Viên, Linh Đài Phương Thốn Sơn, Quảng Hàn Cung, Rừng Gấu Trúc, Thanh Trúc Châu'])+
`<p>Trang này tóm tắt quy tắc sinh ra, môi trường và tài nguyên của ba khu vực chính: <b>Đào Đảo</b>, <b>Quảng Hàn Cung</b> và <b>Thanh Trúc Châu</b>.</p>`],

['tw-peach','Đào Đảo',
TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: Khu vực bản đồ','Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: Cây Bàn Đào, Đại Bàn Đào, Linh Đài Phương Thốn Sơn, học kỹ năng nhân vật'])+
`<p>Cây Bàn Đào mọc hoang liên tục cho ra <b>Bàn Đào thường</b>, và có xác suất thấp cho ra <b>Đại Bàn Đào</b>. Đại Bàn Đào có thể đem trồng thành cây Bàn Đào mới; mỗi cây có hai giai đoạn sinh trưởng, mỗi giai đoạn khoảng 6–10 ngày trong game, và vẫn lớn được vào mùa đông.</p>`+TTFG('peachtree','Cây Bàn Đào trưởng thành')+
YDTB(['Tài nguyên','Công dụng'],[
['Bàn Đào thường','Ăn trực tiếp, nấu ăn, tài nguyên giao cho NPC và sự kiện'],
['Đại Bàn Đào','Trồng cây Bàn Đào mới; tăng mạnh độ hảo cảm của Hằng Nga'],
['Linh Đài Phương Thốn Sơn','Mở khóa một số kỹ năng riêng của nhân vật hoặc điều kiện tiên quyết để chế tạo']]),
[
['tw-staff','Gậy Gỗ Đào',
`<p>Gậy Gỗ Đào có thể tìm thấy trên Đào Đảo, và cũng có cơ hội rút được từ Tụ Bảo Bồn. Khi trang bị, tốc độ di chuyển <b>×1.25</b>. Khi cầm trên tay, nhấp chuột phải chọn điểm đặt để dùng chiêu “Bỏ Trượng Hóa Lâm”: sinh ra <b>3–5 cây Bàn Đào</b> quanh đó, đồng thời cây gậy biến mất.</p>`],
['tw-lingtai','Linh Đài Phương Thốn Sơn',
``+TTFG('fangcunhill','Linh Đài Phương Thốn Sơn')+`<p>Sau lần đầu vào Linh Đài Phương Thốn Sơn, bạn cần lần lượt vượt qua <b>phòng cơ quan</b> và <b>phòng bài trí</b> mới nhận được Thiên Thư dùng để phát triển nhân vật:</p>`+
YO([
'Vào mật thất thứ nhất, giẫm lên gạch đá hình Sao và gạch đá hình Trăng; vật phẩm thường ném lên gạch đá cũng đè được cơ quan, còn sinh vật đang bay thì không kích hoạt được.',
'Gạch Trăng làm vòng trong xoay <b>ngược chiều kim đồng hồ 30°</b>, vòng ngoài xoay <b>thuận chiều kim đồng hồ 60°</b>; gạch Sao làm vòng trong xoay <b>thuận chiều kim đồng hồ 60°</b>, vòng ngoài xoay <b>ngược chiều kim đồng hồ 60°</b>.',
'Khi Địa Chi và con giáp trên hai lớp phù điêu đá khớp nhau, bốn ngọn đèn đá sáng lên và gây rung chấn; khoảng 6 giây sau cửa đá mở. Trạng thái mở cửa được lưu theo thế giới.',
'Vào mật thất thứ hai, lần lượt dùng hành động “Dọn dẹp” lên giường ngồi, lư hương, bàn, hũ sành và bình phong cũ nát. Khi cả năm món đã được quét sạch bụi, Thiên Thư xuất hiện trên bàn.',
'Nhấp chuột phải để đọc Thiên Thư: hồi 2 điểm tinh thần và mở khóa vĩnh viễn kỹ năng bay hoặc kỹ năng riêng tương ứng với nhân vật hiện tại. Bảng đối chiếu đầy đủ các nhân vật nằm ở mục “Đằng vân &amp; kỹ năng › Mở khóa kỹ năng” (sẽ bổ sung).'])+
`<div class="tip"><b>Lưu ý: </b>Thiên Thư là điểm học tập chung trong thế giới, nhưng bản ghi kỹ năng được lưu trên từng nhân vật của mỗi người chơi, nên người chơi nào cần học đều phải tự mình đọc.</div>`]
]],

['tw-moon','Quảng Hàn Cung',
TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: Khu vực bản đồ','Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: Hằng Nga, hảo cảm, khoa học Nguyệt Cung, Tụ Bảo Kim Thiềm, Ngọc Thố'])+
TTFG('guanghangong','Quảng Hàn Cung')+`<p>Quảng Hàn Cung cung cấp tương tác với Hằng Nga và khoa học Nguyệt Cung, đồng thời liên quan đến sự kiện Tụ Bảo Kim Thiềm. Nhân vật không phải Ngọc Thố sẽ bị khu vực cổng đưa ra ngoài vào <b>ban đêm</b>, đồng thời bị cấm vào 960 giây; Ngọc Thố không bị đuổi vào ban đêm.</p>
<p>Tụ Bảo Bồn ở vòng ngoài sẽ dẫn đến <b>Tụ Bảo Kim Thiềm</b>. Điều kiện kích hoạt chi tiết và chiến lợi phẩm của Kim Thiềm được ghi ở mục “Thủ lĩnh &amp; quái vật” (sẽ bổ sung).</p>`],

['tw-bamboo','Thanh Trúc Châu',
TTTG(['Thư viện: Chủ đề Thần Thoại','Loại dữ liệu: Khu vực bản đồ','Thuộc về: Nguyên bản Thần Thoại','Trạng thái Yêm Đốc Tiên: Mốc gốc (nguyên bản)','Liên quan: Rừng Gấu Trúc, tre, ao sen, Miếu Thổ Địa, Tam Tê Ngưu, Tiệm Thanh Trúc, Niên Thú'])+
`<p>Thanh Trúc Châu tập trung tre, hoa sen, bàn cúng Tam Tê Ngưu, Tiệm Thanh Trúc và sự kiện Niên Thú.</p>`+TTFG('rhino_desk','Bàn cúng cũ nát (điểm kích hoạt Tam Tê Ngưu)')+
YDTB(['Nội dung','Mô tả'],[
['Tre','Các giai đoạn sinh trưởng: mầm tre, tre con, tre trưởng thành, Thương Trúc; tre trưởng thành sau mưa có cơ hội ra măng'],
['Măng','Ăn trực tiếp, nấu ăn, trồng lại; cũng là nguyên liệu nền của nhiều đồ làm từ tre'],
['Ao sen','Hoa sen, củ sen, hạt sen, lá sen; hoa sen đang nở còn liên quan đến Tử Khuê Huyền Điểu'],
['Bàn cúng cũ nát','Điểm kích hoạt Tam Tê Ngưu vào đêm mùa xuân'],
['Thị Trấn Thanh Trúc','Cửa hàng, đồng tiền, sự kiện Niên Thú và các dịch vụ']])]
];