/* Thần Thoại Thư Thuyết – Tab 1: Tổng quan chủ đề
   Dùng hàm dựng HTML của yem-doc-tien/helpers.js (YDTB, YN) nên phải nạp SAU file đó. */
/* Hàm dùng chung cho các tab Thần Thoại: dòng nhãn tra cứu */
const TTTG=a=>`<p>${a.map(x=>`<span class="tt-tag">${x}</span>`).join('')}</p>`;
/* Ảnh có chú thích: file nằm ở img/tt/<tên>.webp */
const TTFG=(f,c)=>`<figure class="fig tt-fig"><img src="img/tt/${f}.webp" alt="${c}" title="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`;
/* Liên kết sang trang Tối ưu thần thoại của Yêm Đốc Tiên */
const TTYD=(t)=>`<a style="cursor:pointer" onclick="go('#/mod/yem-doc-tien/optimizations')">${t}</a>`;
const TTS=[
['tt-overview','Tổng quan chủ đề',`
<p><span class="tt-tag">Thư viện: Chủ đề Thần Thoại</span><span class="tt-tag">Loại dữ liệu: Bách khoa thế giới</span><span class="tt-tag">Thuộc về: Nguyên bản Thần Thoại</span><span class="tt-tag">Liên quan: Địa điểm, NPC, Boss, Luyện đan, Pháp bảo, Nông nghiệp, Ẩm thực, Kiến trúc, Bay</span></p>
<p>Tập tài liệu này ghi lại điều kiện xuất hiện, quy tắc tương tác, số liệu, công thức, vật phẩm rơi, thay đổi trạng thái và các giới hạn thế giới của phiên bản hiện tại mod <b>Thần Thoại Thư Thuyết</b>.</p>
${YN('Đây là tài liệu tổng hợp <b>không chính thức</b>, không đại diện cho tác giả hay đội ngũ duy trì mod Thần Thoại Thư Thuyết. Nội dung do người biên soạn tự kiểm chứng, sắp xếp và trình bày.','Tài liệu không chính thức')}
${YDTB(['Hạng mục','Cơ sở'],[
['Workshop ID','1991746508'],
['Phiên bản tổng hợp','Thần Thoại Thư Thuyết 9.10.27.4'],
['Quy tắc tổng hợp','Thu thập và ghi lại cách xuất hiện, tương tác, số liệu và giới hạn gốc của Thần Thoại Thư Thuyết'],
['Liên động với Yêm Đốc Tiên','Những thay đổi khi bật mod Yêm Đốc Tiên được đánh dấu trong mục “Lưu ý liên động Yêm Đốc Tiên”; cơ chế đầy đủ được ghi ở phần riêng']])}`,[
['tt-categories','Phân loại nội dung',YDTB(['Phân loại','Thông tin bao gồm'],[
['Thế giới &amp; địa điểm','Quy tắc sinh ra và môi trường của Đào Viên, Quảng Hàn Cung, Thanh Trúc Châu'],
['NPC &amp; tương tác','Thái Thượng Lão Quân, Hằng Nga, Miếu Thổ Địa, cùng các khí vật và hướng dẫn nhận được khi theo chuỗi nhiệm vụ NPC'],
['Thủ lĩnh &amp; quái vật','Hắc Phong Đại Vương, Tê Ngưu Tam Đại Vương, Tụ Bảo Kim Thiềm, Tử Khuê Huyền Điểu, Niên Thú, cùng vật phẩm rơi, đan dược và trang bị liên quan'],
['Luyện đan &amp; pháp bảo','Mở khóa Bát Quái Lô, đan dược thông thường và pháp bảo dùng chung'],
['Nông nghiệp &amp; ẩm thực','Cây trồng chủ đề, các giai đoạn sinh trưởng, món ăn và thuộc tính thực phẩm'],
['Kiến trúc &amp; sinh thái','Rương/vật chứa, bàn thờ, chiến kỳ, Cây Rung Tiền, hàng hóa và dịch vụ của Tiệm Thanh Trúc'],
['Đằng vân &amp; kỹ năng','Mở khóa chung, giới thiệu về bay; điểm khác biệt giữa các nhân vật được nêu chi tiết ở trang nhân vật riêng'],
['Nhân vật thần thoại','Tám nhân vật có thể chơi được nằm ở mục Nhân vật thần thoại; tập này không lặp lại phần giới thiệu năng lực nhân vật']])],
['tt-options','Tùy chọn mod',YDTB(['Tùy chọn','Mặc định','Tác dụng hiện tại'],[
['Ngôn ngữ','Tự động','Có thể đổi sang tiếng Trung, tiếng Anh, tiếng Nhật hoặc tiếng Việt; “Tự động” sẽ chọn theo ngôn ngữ của game'],
['Biểu tượng Buff','Có','Quyết định có tải hiển thị biểu tượng trạng thái thần thoại hay không; tắt đi chỉ là không hiện bộ biểu tượng này, <b>không</b> vô hiệu hóa bản thân các trạng thái của đan dược, món ăn…']])+
`<p class="tt-thanks">Cảm ơn từng người chơi đã đăng ký mod và ủng hộ, động viên. Chúc mọi người chơi game vui vẻ, vạn sự hanh thông, tận hưởng trọn hành trình thần thoại!<br>— Hàm Ngư &amp; Đại Trư Đề Tử kính thư</p>`]
]]
];