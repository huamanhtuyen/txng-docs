BÁO CÁO NGHIÊN CỨU
C12 VÀ BẢN ĐỒ TRUY XUẤT NGUỒN GỐC 
HÀNG HÓA VIỆT NAM
Tài liệu tham khảo phục vụ Dự án:
Ứng dụng công nghệ số và kỹ thuật tiên tiến nhằm truy xuất nguồn gốc
sản phẩm công nghiệp thuộc các lĩnh vực công nghiệp ưu tiên phát triển
HÀ NỘI – 2026
TÓM TẮT ĐIỀU HÀNH
"C12" không phải là một loại mã vạch, mã QR hay chuẩn kỹ thuật định danh sản phẩm — mà là 
ký hiệu hành chính của Trung tâm Dữ liệu Quốc gia (National Data Center) thuộc Bộ Công 
an, thành lập theo Nghị quyết 175/NQ-CP ngày 30/10/2023 và công bố hoạt động ngày 25/2/2025. 
Đây là phát hiện then chốt của nghiên cứu và là nền tảng để hiểu đúng vai trò của "C12" trong hệ 
sinh thái truy xuất nguồn gốc.
Khi các văn bản và báo chí chính thống nói đến "truy xuất nguồn gốc qua C12" hoặc "kết nối 
CSDL vào C12", họ đề cập đến việc dữ liệu được đồng bộ về Cơ sở dữ liệu tổng hợp quốc gia do 
C12 vận hành — chứ không phải việc dán một loại tem/mã "C12" lên sản phẩm. Trên bao bì hàng 
hóa, cái được dán thực tế là mã QR hoặc thẻ RFID chứa UID duy nhất theo chuẩn NDA Trace 
hoặc mã QR của VNeID/VNIDCheck. C12 là "nút xác thực gốc" của NDAChain — blockchain 
quốc gia chạy trên 49 nút công–tư, xử lý khoảng 20.000–30.000 giao dịch/ngày.
Nghiên cứu chỉ ra năm bất cập lớn: dữ liệu phân mảnh liên ngành, tiêu chuẩn định danh chưa 
thống nhất, phủ sóng còn rất thấp (khoảng 400 mặt hàng và 25.000 UID tính đến 7/2025), rủi ro 
giả mạo QR tĩnh, và chưa có chứng thực tương thích quốc tế độc lập với GS1 Digital Link hoặc 
EU Digital Product Passport.
Áp lực từ Quy định ESPR của EU đang đến rất gần: Battery Passport bắt buộc từ 18/2/2027 
cho pin xe điện và pin công nghiệp; dệt may từ giữa 2027. Việt Nam phải hoàn thiện hệ thống truy 
xuất tương thích quốc tế trong vòng 12–18 tháng tới.
1. BẢN CHẤT “C12” VÀ HỆ SINH THÁI ĐỊNH DANH QUỐC GIA
1.1. C12 là cơ quan, không phải công nghệ
Trung tâm Dữ liệu Quốc gia (gọi tắt là C12) là đơn vị cấp Cục thuộc Bộ Công an, thành lập theo 
Nghị quyết 175/NQ-CP ngày 30/10/2023 của Chính phủ phê duyệt Đề án Trung tâm Dữ liệu Quốc 
gia, được cụ thể hóa bằng Chỉ thị 32/CT-TTg ngày 4/9/2024 và lễ công bố ngày 25/2/2025 do Bộ 
trưởng Lương Tam Quang chủ trì. Trung tâm số 1 đặt tại Khu Công nghệ cao Hòa Lạc, Hà Nội, 
với hạ tầng được thiết kế để lưu trữ, đồng bộ, chia sẻ và phân tích dữ liệu của toàn bộ các cơ quan 
nhà nước, hình thành kho dữ liệu tổng hợp từ các cơ sở dữ liệu quốc gia.
Ban lãnh đạo gồm Giám đốc — Thiếu tướng Nguyễn Ngọc Cương (nguyên Cục trưởng C06), 
cùng các Phó Giám đốc Phạm Minh Tiến, Hà Nam Trung, Nguyễn Thành Vĩnh. Ký hiệu văn 
bản hành chính "BCA-C12" (ví dụ Kế hoạch số 40/KH-BCA-C12 về an ninh Trung tâm Dữ liệu 
Quốc gia số 1) xác nhận đây là mã đơn vị trong hệ thống Bộ Công an.
1.2. Bộ ba công nghệ NDA: Trace, Chain, DID
Cái mà doanh nghiệp và người tiêu dùng thực sự "nhìn thấy" trong truy xuất nguồn gốc quốc gia 
là bộ ba nền tảng do Hiệp hội Dữ liệu Quốc gia (NDA) — do Bộ trưởng Bộ Công an làm Chủ tịch 
— phối hợp với C12 phát triển và công bố tại hội thảo ngày 8/7/2025:
• NDA Trace là nền tảng định danh–xác thực–truy xuất nguồn gốc hàng hóa, cấp một UID 
duy nhất cho mỗi sản phẩm dưới dạng QR hoặc RFID.
• NDAChain là blockchain quốc gia kiểu Proof-of-Authority vận hành bởi Trung tâm 
Sáng tạo và Khai thác Dữ liệu (thuộc C12, ra mắt 4/7/2025), quy tụ 49 nút xác thực 
công–tư gồm các bộ, tỉnh và các tập đoàn lớn như SunGroup, Sovico, Masan, VNVC.
• NDA DID là mã định danh phi tập trung theo chuẩn W3C kết hợp Zero-Knowledge 
Proofs, dùng cho cá nhân, doanh nghiệp và sản phẩm.
Một giải pháp song song đáng chú ý là VNIDCheck, do Cục C06 (không phải C12) chủ trì cùng 
MobiFone, Cục Hóa chất (Bộ Công Thương) và Trung tâm Mã số mã vạch Quốc gia, công bố thí 
điểm ngày 16/10/2025. VNIDCheck cho phép người dân quét QR trên ứng dụng VNeID để truy 
xuất nguồn gốc mỹ phẩm, thuốc, thực phẩm, hóa chất và tiền chất — ban đầu chuẩn hóa hơn 
13.000 doanh nghiệp hóa chất, đạt an toàn thông tin cấp độ 3.
1.3. Phân biệt với các loại mã khác
Để tránh nhầm lẫn phổ biến, cần phân biệt rõ bốn khái niệm:
• C12 — tên cơ quan chủ quản hạ tầng dữ liệu (Trung tâm Dữ liệu Quốc gia, Bộ Công an).
• NDA Trace UID — mã định danh duy nhất gắn trên sản phẩm theo chuẩn nội địa.
• GTIN/GLN của GS1 Vietnam (893...) — do Trung tâm Mã số mã vạch Quốc gia (Bộ 
KH&CN) quản lý theo chuẩn quốc tế từ năm 1995.
• Mã QR/DataMatrix — chỉ là vật mang dữ liệu (data carrier), có thể chứa bất kỳ mã định 
danh nào bên trong.
Hiện tại Việt Nam tồn tại một nghịch lý tổ chức: hai hệ thống định danh song song ở hai bộ —
GS1 ở Bộ KH&CN và NDA Trace UID ở Bộ Công an — mà chưa có cơ chế ánh xạ chính thức.
2. KHUNG PHÁP LÝ VÀ TIÊU CHUẨN KỸ THUẬT
2.1. Trụ cột pháp luật về định danh và dữ liệu
Nền tảng pháp lý được xây dựng trên ba trục song hành:
• Trục định danh điện tử: Luật Căn cước 2023, Luật Giao dịch điện tử 2023, và Nghị 
định 69/2024/NĐ-CP ngày 25/6/2024 (thay thế Nghị định 59/2022/NĐ-CP) quy định 
định danh và xác thực điện tử, giao Cục C06 Bộ Công an làm cơ quan quản lý VNeID. 
Nghị định 69/2024 xác lập giá trị chứng minh tương đương giấy tờ gốc cho danh tính 
điện tử — cơ sở pháp lý để VNeID làm "cổng đăng nhập" cho các hệ thống truy xuất như 
VNIDCheck.
• Trục dữ liệu: Nghị quyết 175/NQ-CP (30/10/2023) về Trung tâm Dữ liệu Quốc gia, 
Quyết định 06/QĐ-TTg ngày 6/1/2022 (Đề án 06) về phát triển ứng dụng dữ liệu dân cư, 
và Luật Dữ liệu 2024 (C12 phát động triển khai 1/7/2025).
• Trục chính trị: Nghị quyết 57-NQ/TW của Bộ Chính trị về đột phá khoa học công nghệ, 
đổi mới sáng tạo và chuyển đổi số quốc gia — được viện dẫn trong hầu hết các phát ngôn 
chính thức về C12 và truy xuất nguồn gốc.
2.2. Khung pháp luật về truy xuất nguồn gốc
• Quyết định 100/QĐ-TTg ngày 19/1/2019 — điểm khởi đầu chiến lược, phê duyệt Đề án 
triển khai, áp dụng và quản lý hệ thống truy xuất nguồn gốc, giao Bộ KH&CN chủ trì.
• Nghị định 13/2022/NĐ-CP ngày 21/1/2022 — bổ sung Điều 19đ vào Nghị định 
74/2018/NĐ-CP, xác lập nguyên tắc: Bộ KH&CN quản lý mã truy vết sản phẩm, mã truy 
vết địa điểm và vật mang dữ liệu; các bộ quản lý ngành xác định danh mục hàng hóa phải 
truy xuất.
• Thông tư 02/2024/TT-BKHCN ngày 28/3/2024 (hiệu lực 1/6/2024) — cụ thể hóa 10 
thông tin bắt buộc khi truy xuất và bốn nguyên tắc hệ thống: "một bước trước – một bước 
sau", "sẵn có phần tử dữ liệu chính", "minh bạch", "sự tham gia đầy đủ các bên".
• Khung pháp luật hóa chất, tiền chất: Luật Phòng chống ma túy 2021, Nghị định 
105/2021/NĐ-CP, Nghị định 57/2022/NĐ-CP (557 chất ma túy và 60 tiền chất) và Nghị 
định 90/2024/NĐ-CP bổ sung 14 chất mới.
• Khung pháp luật nông sản: Quyết định 3156/QĐ-BNN-TT về mã số vùng trồng, Nghị 
định 37/2024/NĐ-CP về thủy sản, Quyết định 5272/QĐ-BNNMT ngày 13/12/2025 về thí 
điểm truy xuất sầu riêng, và hệ thống truy xuất quốc gia checkvn.mae.gov.vn ra mắt 
26/12/2025.
2.3. Hệ tiêu chuẩn TCVN
Bộ KH&CN đã công bố hơn 20 TCVN về truy xuất nguồn gốc, trong đó năm trụ cột là:
• TCVN 12850:2019 — Yêu cầu chung về truy xuất nguồn gốc.
• TCVN 12851:2019 — Đánh giá và chứng nhận hệ thống truy xuất.
• TCVN 13274:2020 — Định dạng mã truy vết dựa trên GS1.
• TCVN 13275:2020 — Định dạng vật mang dữ liệu (bắt buộc áp dụng theo Thông tư 
02/2024), phân loại ba nhóm: quang học, từ tính, điện tử.
• TCVN 12827:2019 — Truy xuất nguồn gốc chuỗi rau quả tươi.
3. ỨNG DỤNG THỰC TIỄN ĐÃ TRIỂN KHAI
3.1. Ba sự kiện bản lề 2025–2026
Sự kiện 1 — Ngày 8/7/2025: Ra mắt NDA Trace và NDAChain
C12 cùng NDA tổ chức hội thảo công bố NDA Trace và ký kết hợp tác đầu tiên giữa Công ty CP 
Dược phẩm ECO và Tập đoàn PILA. Đại tá Phạm Minh Tiến phát biểu then chốt:
"Mã định danh chưa thống nhất trên toàn quốc, dữ liệu bị phân mảnh theo ngành, thiếu nền 
tảng tích hợp để kiểm soát chuỗi cung ứng khiến truy xuất nguồn gốc mới chỉ dừng ở hình 
thức."
Sự kiện 2 — Ngày 16/10/2025: Thí điểm VNIDCheck
Cục C06 công bố thí điểm VNIDCheck — giải pháp định danh và truy xuất nguồn gốc hóa chất, 
tiền chất trên VNeID — do MobiFone triển khai hạ tầng, chuẩn hóa hơn 13.000 dữ liệu doanh 
nghiệp. Đại tá Trần Hồng Phú (Phó Cục trưởng C06) dẫn số liệu:
• 47.135 vụ vi phạm năm 2024, trị giá 425 tỷ đồng.
• Gần 10.000 vụ trong 5 tháng đầu năm 2025.
Sự kiện 3 — Ngày 6/4/2026: Kết nối 12 CSDL ngành NN&MT với C12
Bộ NN&MT và Bộ Công an ký Biên bản ghi nhớ kích hoạt kết nối 12 cơ sở dữ liệu ngành nông 
nghiệp và môi trường vào Cơ sở dữ liệu tổng hợp quốc gia. Bộ trưởng Trần Đức Thắng tuyên bố 
hoàn thành 12/12 CSDL trọng điểm theo tiêu chí "đúng, đủ, sạch, sống, thống nhất, dùng chung", 
với chiến dịch 90 ngày đêm rà soát hơn 62,2 triệu thửa đất (xác thực 42,5 triệu) và đối soát hơn 
82.000 tàu cá.
Hệ thống truy xuất nông sản thí điểm từ cuối 2025 cho sầu riêng, lúa gạo, thịt, trứng, sữa, trái cây, 
cà phê, dự kiến triển khai toàn quốc từ 1/7/2026.
3.2. Các nền tảng song song
Bên cạnh trục Bộ Công an–NDA, thị trường truy xuất Việt Nam hiện có nhiều hệ thống song song:
• Cổng truy xuất nguồn gốc quốc gia — do Trung tâm Mã số mã vạch Quốc gia (Bộ 
KH&CN) vận hành từ tháng 10/2024.
• Verigoods (verigoods.vn) — của Bộ Công Thương từ 23/12/2025.
• checkvn.mae.gov.vn — của Bộ NN&MT từ 26/12/2025.
• Gần 30 giải pháp tư nhân như iCheck, VNPT Check, iTrace247, TE-FOOD (triển khai 
truy xuất thịt lợn tại TP.HCM từ 2017 với hơn 6.000 doanh nghiệp tham gia ở miền 
Nam).
Phủ sóng thực tế còn rất khiêm tốn: đến tháng 7/2025, NDA Trace mới định danh khoảng 400 
loại mặt hàng với hơn 25.000 tem UID — rất nhỏ so với hàng triệu SKU lưu hành thị trường. 
Đại tá Phạm Minh Tiến thừa nhận: "Doanh nghiệp không bắt buộc phải tham gia hệ thống truy 
xuất nguồn gốc hàng hóa. Trong khi đó người dân thì chưa có công cụ để truy xuất."
4. ĐÁNH GIÁ ĐIỂM MẠNH, ĐIỂM YẾU VÀ SO SÁNH QUỐC TẾ
4.1. Bảng tổng hợp đánh giá
Tiêu chí Điểm mạnh Điểm yếu / Khoảng trống
Nền tảng chính trị–
pháp lý
Nghị quyết 57-NQ/TW, Đề án 06, 
Nghị quyết 175/NQ-CP, Luật Dữ 
liệu 2024 tạo hậu thuẫn rất mạnh
Chưa có luật chuyên biệt về truy xuất 
nguồn gốc; doanh nghiệp chưa bị bắt 
buộc tham gia
Tích hợp định danh Kế thừa VNeID + CSDL dân cư 
hơn 100 triệu công dân, giảm gian 
lận
Xung đột "một quốc gia – hai hệ 
thống": NDA Trace UID (Bộ Công an) 
song song GTIN (Bộ KH&CN)
Kiến trúc kỹ thuật NDAChain 49 nút PoA, NDA 
DID chuẩn W3C + ZKP, tính bất 
biến cao
QR vật lý in trên bao bì là mã tĩnh, có 
thể bị photocopy giả mạo; chưa rõ cơ 
chế "one time, one code"
Bảo mật Bộ Công an chủ trì, đạt an toàn 
thông tin cấp độ 3
Tập trung dữ liệu vào một blockchain 
nhà nước gây lo ngại lộ bí mật thương 
mại; trái nguyên tắc EU "decentralise 
where possible"
Liên thông dữ liệu Đã kết nối 12 CSDL ngành 
NN&MT, chuẩn hóa 13.000+ DN 
hóa chất
Dữ liệu vẫn phân mảnh liên bộ; thiếu 
chuẩn chung — "chuỗi cung ứng có quá 
nhiều ngôn ngữ để giao tiếp với nhau" 
(Nguyễn Đức Lê, Bộ Công Thương)
Chi phí & khả năng 
tiếp cận SME
Miễn phí UID qua Cổng DVC 
(tuyên bố)
Chưa có OpenAPI/SDK công khai; 
nông hộ 0,3–2 ha chiếm đa số, chi phí 
tuân thủ tăng 20–25%/lô
Phủ sóng Quyết tâm chính trị cao, lộ trình rõ Mới ~400 mặt hàng và 25.000 UID tính 
đến 7/2025
Tương thích quốc tế NDA Trace tuyên bố tương thích 
GS1/W3C DID và EBSI 
TRACE4EU
Chưa được chứng thực độc lập bởi 
GS1 Global hay EU; chưa đăng ký GS1 
Conformant Resolver
4.2. Bối cảnh cạnh tranh toàn cầu
Trong khi Việt Nam đang thí điểm, thế giới đã tiến nhanh:
• GS1 Digital Link cho phép một QR code duy nhất phục vụ cả POS, người tiêu dùng lẫn 
B2B, với sáng kiến Sunrise 2027 yêu cầu hệ thống thanh toán tại hơn 48 quốc gia chấp 
nhận QR/DataMatrix vào cuối 2027. GS1 EPCIS 2.0 là xương sống chia sẻ sự kiện chuỗi 
cung ứng (what/where/when/why) bằng JSON-LD.
• Quy định ESPR của EU (2024/1781) có hiệu lực từ tháng 7/2024, với lộ trình Battery 
Passport bắt buộc từ 18/2/2027 cho pin xe điện và pin công nghiệp >2 kWh; dệt may và 
sắt thép áp dụng từ giữa 2027; nhôm, điện tử, ICT từ 2028–2029. Không có DPP đồng 
nghĩa bị hải quan EU chặn — tác động trực tiếp đến xuất khẩu pin của VinFast/Dat Bike, 
dệt may (~4 tỷ USD/năm), cà phê, gỗ, cao su, thủy sản Việt Nam.
• Blockchain thương mại đã trưởng thành: IBM Food Trust giúp Walmart rút thời gian 
truy xuất xoài từ 7 ngày xuống 2,2 giây; Carrefour triển khai ở 12.000 cửa hàng tại 33 
quốc gia. TE-FOOD — giải pháp triển khai lớn ở Việt Nam từ 2017 — đã đưa dữ liệu lên 
public blockchain từ 2018.
• FDA FSMA 204 ban đầu hiệu lực 20/1/2026 đã được hoãn chính thức đến 20/7/2028 
theo Continuing Appropriations Act of 2026.
4.3. Năm khoảng trống chiến lược
Khoảng trống 1 — "Hai hệ thống định danh": NDA Trace UID (Bộ Công an) và GTIN/GS1 
Vietnam (Bộ KH&CN) không có cơ chế ánh xạ chính thức tạo ra mâu thuẫn chủ quyền kỹ thuật. 
Hàng xuất khẩu phải gắn GTIN để được chấp nhận tại POS EU/Mỹ, nhưng trong nước lại phải 
gắn NDA Trace UID. Giải pháp thực tế: dùng GTIN làm thành phần "identifier" trong URI của 
NDA Trace theo đúng chuẩn GS1 Digital Link.
Khoảng trống 2 — Khả năng giả mạo QR tĩnh: vẫn tồn tại dù kiến trúc blockchain có tính bất 
biến. Công ty ECO Pharma dù dùng mã cào + QR + hologram vẫn thừa nhận "có định danh sản 
phẩm nhưng lại thiếu liên thông và xác thực trên toàn chuỗi cung ứng". Trung Quốc đã áp dụng 
cơ chế "one time, one code" với mã hóa AES cho ngành rủi ro cao — mô hình Việt Nam có thể 
học tập.
Khoảng trống 3 — Tương thích quốc tế chưa được chứng thực: các tuyên bố "NDA Trace 
tương thích GS1/W3C và EBSI TRACE4EU" xuất phát chủ yếu từ thông cáo báo chí của NDA, 
chưa có xác nhận độc lập từ GS1 Global hay Ủy ban châu Âu. Để được công nhận, NDA Trace 
phải đăng ký là GS1 Conformant Resolver và tham gia GS1 Global Data Synchronisation 
Network.
Khoảng trống 4 — API cho SME và hộ nông dân nhỏ: không có tài liệu kỹ thuật công khai, 
không môi trường sandbox miễn phí. Nông hộ nhỏ (0,3–2 ha, chiếm đa số) không có GPS, 
smartphone và kiến thức quản lý — chi phí tuân thủ có thể tăng 20–25%/lô hàng.
Khoảng trống 5 — Nhận thức người tiêu dùng: chưa có khảo sát công khai về tỷ lệ quét QR 
truy xuất; các chuyên gia tại hội thảo 8/7/2025 đồng thuận "người tiêu dùng chưa có một công cụ 
xác thực".
5. KHUYẾN NGHỊ VÀ TRIỂN VỌNG
5.1. Lộ trình ưu tiên ngắn hạn (2026)
• C12 và Trung tâm Mã số mã vạch Quốc gia ký thỏa thuận liên bộ để NDA Trace UID 
ánh xạ 1-1 với GTIN, áp dụng URI chuẩn GS1 Digital Link dạng 
https://ndatrace.gov.vn/01/{GTIN}/10/{batch}/21/{serial}.
• Công bố OpenAPI và SDK kèm sandbox miễn phí.
• Miễn phí 1.000 UID đầu tiên cho mỗi SME.
• Tích hợp plug-in sẵn cho Shopee, Tiki, Lazada, TikTok Shop.
5.2. Chuẩn bị khẩn cho EU DPP (trung hạn)
• Ngành pin (mốc 18/2/2027) không được lùi — các nhà sản xuất pin xe điện Việt cần 
Battery Passport ngay.
• Ngành dệt may cần bắt đầu thu thập dữ liệu chuỗi cung ứng từ 2026 (18–24 tháng chuẩn 
bị).
• Đăng ký chính thức tham gia EBSI TRACE4EU thay vì chỉ "tuyên bố tương thích".
5.3. Tăng cường tính bất biến vật lý
• Kết hợp NFC/RFID cho sản phẩm giá trị cao.
• Áp dụng "one time, one code" với AES cho dược phẩm, sữa, mỹ phẩm, rượu.
• Giữ kiến trúc hybrid: lưu hash + chữ ký on-chain, dữ liệu chi tiết off-chain — vừa bảo 
mật bí mật thương mại vừa tuân thủ GDPR "right to erasure".
5.4. Hoàn thiện khung pháp lý
Cần một Luật Truy xuất nguồn gốc cấp cao hơn Thông tư 02/2024/TT-BKHCN, quy định bắt 
buộc với danh mục mặt hàng rủi ro. Công điện của Thủ tướng Phạm Minh Chính ngày 15/7/2025 
về chống hàng giả cần được cụ thể hóa thành nghị định riêng.
6. KẾT LUẬN
C12 không phải là một công nghệ mã định danh, mà là một kiến trúc thể chế — một trung tâm 
dữ liệu nhà nước đóng vai trò "cột sống" cho hàng loạt nền tảng truy xuất con (NDA Trace, 
NDAChain, NDA DID, VNIDCheck). Đây là lựa chọn chiến lược mang đậm dấu ấn Việt Nam: 
tập trung dữ liệu về một cơ quan an ninh để đảm bảo chủ quyền số, khác với triết lý "phân cấp tối 
đa" của EU DPP hay mô hình thị trường tự do của GS1.
Điểm mạnh của mô hình: ý chí chính trị mạnh, tích hợp định danh cá nhân sâu, chống hàng giả 
hiệu quả về nguyên tắc. Điểm yếu nằm ở sự phân mảnh dữ liệu thực tế giữa các bộ, thiếu tương 
thích quốc tế được chứng thực, và phủ sóng còn rất thấp so với quy mô nền kinh tế.
Mười hai đến mười tám tháng tới là cửa sổ quyết định: nếu Việt Nam hoàn thành ánh xạ với 
GS1 Digital Link, mở API cho SME, và được EU công nhận tương thích DPP trước cuối 2027, 
C12 sẽ trở thành một "hạ tầng mềm chiến lược" cho kinh tế số. Ngược lại, hàng xuất khẩu Việt 
Nam có nguy cơ bị kẹt giữa hai hệ thống định danh — một trong nước, một quốc tế — với chi phí 
tuân thủ kép.
Bài toán không còn là "có làm truy xuất hay không" mà là "làm đúng chuẩn toàn cầu với bao 
nhiêu thời gian còn lại".
DANH MỤC TÀI LIỆU THAM KHẢO
Văn bản pháp luật Việt Nam
1. Nghị quyết 175/NQ-CP (30/10/2023) — Đề án Trung tâm Dữ liệu Quốc gia.
2. Quyết định 06/QĐ-TTg (6/1/2022) — Đề án phát triển ứng dụng dữ liệu dân cư, định 
danh và xác thực điện tử.
3. Quyết định 100/QĐ-TTg (19/1/2019) — Đề án truy xuất nguồn gốc.
4. Nghị định 13/2022/NĐ-CP; Nghị định 69/2024/NĐ-CP; Nghị định 57/2022/NĐ-CP; 
Nghị định 90/2024/NĐ-CP; Nghị định 105/2021/NĐ-CP; Nghị định 37/2024/NĐ-CP.
5. Thông tư 02/2024/TT-BKHCN (28/3/2024) — Quản lý truy xuất nguồn gốc sản phẩm 
hàng hóa.
6. Luật Dữ liệu 2024; Luật Căn cước 2023; Luật Giao dịch điện tử 2023; Luật Phòng chống 
ma túy 2021.
7. Nghị quyết 57-NQ/TW của Bộ Chính trị; Chỉ thị 32/CT-TTg (4/9/2024); Kế hoạch 
40/KH-BCA-C12.
8. Quyết định 5272/QĐ-BNNMT (13/12/2025) — Thí điểm truy xuất sầu riêng.
Tiêu chuẩn quốc gia: TCVN 12850:2019, TCVN 12851:2019, TCVN 12827:2019, TCVN 
13274:2020, TCVN 13275:2020, TCVN 13969:2024.
Báo chí và nguồn thứ cấp Việt Nam
9. VnExpress (8/7/2025). Thách thức truy xuất nguồn gốc hàng hóa tại Việt Nam.
10. Tuổi Trẻ (21/7/2025). Giải pháp quốc gia chặn hàng giả.
11. Tia Sáng (11/2025). Truy xuất nguồn gốc — Khi dữ liệu không chuẩn và thiếu đồng bộ.
12. Dân Trí (1/7/2025). Bộ Công an đảm bảo an toàn cho dữ liệu quốc gia. 
https://dantri.com.vn/thoi-su/bo-cong-an-dam-bao-an-toan-cho-du-lieu-quoc-gia-la￾nhiem-vu-song-con-20250701161035476.htm
13. VOV. Trung tâm Dữ liệu Quốc gia là hạ tầng chiến lược. https://vov.vn/chinh-tri/trung￾tam-du-lieu-quoc-gia-la-ha-tang-chien-luoc-quan-trong-cua-quoc-gia-so￾post1269019.vov
14. NDA (nda.org.vn). Truy xuất nguồn gốc — Động lực mới cho kinh tế số Việt Nam.
15. Cổng chính thức NDAChain: https://ndachain.vn/vi
Nguồn quốc tế
16. GS1 (gs1.org). GS1 Digital Link standard; Sunrise 2027; EPCIS 2.0.
17. GS1 EU (2024). GS1 Standards enabling the EU Digital Product Passport (white paper).
18. Ủy ban châu Âu. ESPR Regulation (EU) 2024/1781; ESPR Working Plan 2025–2030 
(16/4/2025).
19. EU Battery Regulation 2023/1542.
20. US FDA. FSMA Section 204 Food Traceability Rule; Federal Register 8/2025 —
Extension to 20/7/2028.
21. MDPI (2023). Blockchain-Based Frameworks for Food Traceability.
22. Ledger Insights — TE-FOOD public blockchain launch (2018).
23. Bộ Công an (16/10/2025). Thí điểm giải pháp định danh, truy xuất nguồn gốc hóa chất, 
tiền chất trên nền tảng VNeID. https://bocongan.gov.vn/bai-viet/thi-diem-giai-phap-dinh￾danh-truy-xuat-nguon-goc-hoa-chat-tien-chat-tren-nen-tang-vneid-1760687799
24. Báo Sài Gòn Giải Phóng (8/7/2025). Định danh, xác thực và truy xuất nguồn gốc —
Động lực phát triển kinh tế số Việt Nam. https://www.sggp.org.vn/dinh-danh-xac-thuc￾va-truy-xuat-nguon-goc-dong-luc-phat-trien-kinh-te-so-viet-nam-post802924.html
25. Báo Chính phủ (6/4/2026). Kết nối 12 cơ sở dữ liệu ngành nông nghiệp và môi trường 
với Trung tâm Dữ liệu Quốc gia. https://baochinhphu.vn/ket-noi-12-co-so-du-lieu-nganh￾nong-nghiep-va-moi-truong-voi-trung-tam-du-lieu-quoc-gia-102260406173828183.htm