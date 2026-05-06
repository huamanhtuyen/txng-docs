BÁO CÁO CHUYÊN SÂU
TRUY XUẤT NGUỒN GỐC, C12 VÀ ĐỀ XUẤT KỸ THUẬT
CHO CÁC LĨNH VỰC CÔNG NGHIỆP ƯU TIÊN PHÁT TRIỂN
Tài liệu nghiên cứu kỹ thuật phục vụ Dự án:
Ứng dụng công nghệ số và kỹ thuật tiên tiến nhằm truy xuất nguồn gốc
sản phẩm công nghiệp thuộc các lĩnh vực công nghiệp ưu tiên phát triển
HÀ NỘI – 2026
I. TÓM TẮT ĐIỀU HÀNH
Truy xuất nguồn gốc (TXNG) hiện đại không còn là việc 'gắn tem QR để xem thông tin sản 
phẩm', mà là một hệ thống dữ liệu liên chuỗi giúp nhận diện ai tạo ra sản phẩm, sản phẩm/lô 
hàng nào đang được theo dõi, sự kiện gì đã xảy ra với nó, ở đâu, khi nào, và vì sao. Chuẩn quốc 
tế của Ủy ban Codex Alimentarius định nghĩa TXNG là khả năng theo dõi chuyển động của sản 
phẩm qua các công đoạn xác định; chuẩn của GS1 triển khai điều đó bằng lớp định danh, mã mang 
dữ liệu và mô hình sự kiện; còn FDA đã chuyển yêu cầu pháp lý sang logic 'critical tracking 
events' và 'key data elements'. Với hàng công nghiệp, xu hướng quốc tế đang tiến sang mô hình 
'digital product passport', nơi định danh số đi cùng dữ liệu vòng đời, tuân thủ, bền vững và hậu 
kiểm.
Tại Việt Nam, khung pháp lý về TXNG đã tiến khá xa: Quyết định 100/QĐ-TTg đặt mục tiêu xây 
dựng hệ sinh thái TXNG quốc gia; Nghị định 13/2022/NĐ-CP bổ sung quản lý nhà nước về 
TXNG; Thông tư 02/2024/TT-BKHCN quy định quản lý TXNG sản phẩm, hàng hóa; và Cổng 
thông tin TXNG sản phẩm, hàng hóa quốc gia đã vận hành chính thức từ tháng 10/2024 với hàng 
nghìn đơn vị kết nối dữ liệu. Luật Chất lượng sản phẩm, hàng hóa sửa đổi năm 2025 cũng đã bổ 
sung quy định về TXNG.
Song song với trục do Bộ Khoa học và Công nghệ quản lý, Bộ Công an đang xây dựng trục dữ 
liệu quốc gia mới dựa trên Luật Dữ liệu, Cơ sở dữ liệu tổng hợp quốc gia và Trung tâm Dữ liệu 
quốc gia/C12. C12 được định vị là hạ tầng gốc về định danh, xác thực, kết nối, điều phối và dùng 
chung dữ liệu; có nền tảng chia sẻ, điều phối dữ liệu với Agent Node ở bộ/ngành/địa phương; đã 
đưa Trung tâm Dữ liệu quốc gia số 1 vào hoạt động (8/2025); đã kết nối 12/12 cơ sở dữ liệu trọng 
điểm của Bộ Nông nghiệp và Môi trường; và đã thí điểm giải pháp VNIDCheck cho hóa chất, tiền 
chất trên nền tảng VNeID.
Kết luận cốt lõi của báo cáo: C12 là điều kiện cần nhưng chưa đủ để tự nó trở thành một hệ 
thống TXNG mạnh, liên thông và kiểm chứng được cho sản phẩm công nghiệp. C12 rất phù hợp 
để làm lớp định danh số, xác thực, điều phối chia sẻ dữ liệu, đối soát liên cơ quan, quản trị 
chuẩn dữ liệu và hậu kiểm quốc gia. Nhưng TXNG mạnh còn cần thêm một lớp nghiệp vụ 
chuyên sâu gồm mô hình sự kiện theo lô/serial, chuẩn định danh chuỗi cung ứng, cơ chế 
serialization, quy trình thu hồi–điều tra, bằng chứng hiện trường, tích hợp ERP/MES/WMS/LIMS 
và giao diện công khai cho doanh nghiệp–người tiêu dùng–cơ quan quản lý.
Kiến trúc phù hợp nhất cho Việt Nam: trục TXNG ngành/doanh nghiệp theo chuẩn mở GS1 
Digital Link và EPCIS/CBV; Cổng TXNG quốc gia làm lớp công bố/tra cứu; C12 làm lớp định 
danh, xác thực, điều phối, giám sát và xác minh liên cơ quan.
II. TỔNG QUAN CÔNG NGHỆ TRUY XUẤT NGUỒN GỐC
TXNG là năng lực trả lời nhanh và tin cậy các câu hỏi: sản phẩm này là gì, đến từ đâu, đã đi qua 
những công đoạn nào, đang ở đâu, có tuân thủ hay không, và nếu có sự cố thì phải thu hồi ở đâu. 
Codex nêu rõ đây là một công cụ trong hệ thống kiểm tra và chứng nhận, không phải 'giải pháp 
thần kỳ' tự nó bảo đảm an toàn; ISO 22005 đặt trọng tâm vào nguyên tắc thiết kế và triển khai hệ 
thống TXNG trong chuỗi thực phẩm; còn GS1 biến các nguyên tắc đó thành ngôn ngữ dữ liệu và 
trao đổi dữ liệu ở quy mô liên tổ chức.
2.1. Kiến trúc kỹ thuật của hệ thống TXNG
Một hệ thống TXNG hoàn chỉnh thường có các lớp sau:
Lớp kỹ thuật Vai trò chính Công nghệ / Chuẩn thường dùng
Định danh Gán mã duy nhất cho sản 
phẩm, địa điểm, tổ chức, lô, 
đơn vị logistics
Hệ khóa GS1 (GTIN/GLN/SSCC); mã 
lô/batch; serial; mã định danh tổ chức
Mang dữ liệu Mang mã ra hiện trường và 
bao bì
1D barcode, QR/2D code, GS1 Digital Link, 
RFID, NFC, tem chống tháo gỡ
Thu thập dữ liệu Ghi nhận sự kiện vật lý và 
nghiệp vụ
Máy quét, app di động, 
ERP/MES/WMS/LIMS, cổng đọc RFID, PLC, 
camera
Sự kiện Lưu 'cái gì – ở đâu – khi 
nào – vì sao'
EPCIS/CBV, event log, event broker
Dữ liệu chủ Quản trị dữ liệu gốc và 
tham chiếu
Master data, danh mục dùng chung, product 
master, party/location master
Bằng chứng Gắn chứng từ, kiểm 
nghiệm, chứng nhận, ảnh, 
sensor
Object store, e-signature, time-stamp, chứng 
chỉ số, sensor telemetry
Tích hợp và chia sẻ Đồng bộ dữ liệu giữa DN, 
bộ/ngành, cổng quốc gia
API, message broker, ESB, LGSP, Agent 
Node, data hub
Ứng dụng Tra cứu công khai, hậu 
kiểm, điều tra, thu hồi, phân 
tích
Portal web, app inspector, dashboard, BI, cảnh 
báo gian lận
2.2. Ba mô hình triển khai điển hình
• Cơ sở dữ liệu tập trung: triển khai nhanh, rẻ hơn giai đoạn đầu, nhưng dễ tạo 'điểm 
nghẽn' khi mở rộng đa ngành.
• Mô hình liên thông theo dữ liệu sự kiện: dữ liệu được ghi ở nguồn, chia sẻ qua chuẩn 
như EPCIS/CBV, phù hợp hơn khi nhiều doanh nghiệp và nhiều cơ quan cùng tham gia.
• Mô hình lai có lớp chứng thực số: dùng thêm chữ ký số, bằng chứng số hoặc blockchain 
làm lớp kiểm chứng cho một số sự kiện/hồ sơ có rủi ro cao.
Theo Codex, bản thân công cụ TXNG chỉ phát huy hiệu quả khi được đặt đúng bối cảnh quản lý; 
vì vậy, blockchain hay C12 nếu dùng đơn lẻ cũng không thay thế được mô hình dữ liệu chuẩn, 
quy trình nghiệp vụ và governance.
2.3. Bốn trục lợi ích của TXNG
• Quản lý rủi ro và thu hồi mục tiêu: nhờ khả năng biết lô nào, nhà cung cấp nào, khách 
hàng nào bị ảnh hưởng.
• Chống giả và xác thực hàng thật: đặc biệt khi mã định danh vật lý gắn với bằng chứng 
số.
• Thuận lợi thương mại và xuất khẩu: đối tác nhập khẩu có thể đòi hỏi khả năng chứng 
minh hành trình sản phẩm.
• Quản trị vận hành: cùng một dữ liệu TXNG có thể nuôi dashboard chất lượng, tồn kho, 
logistics và gian lận.
Chi phí của TXNG thường không nằm ở 'mã QR' mà nằm ở chuẩn hóa dữ liệu, tích hợp hệ thống, 
đào tạo và thay đổi quy trình, duy trì chất lượng dữ liệu, vận hành an toàn thông tin và với một số 
ngành là cảm biến/tem bảo mật. GS1 nhấn mạnh chất lượng dữ liệu ở từng đối tác giao dịch là 
yếu tố quyết định hiệu quả của TXNG; hạ tầng tốt mà dữ liệu nguồn sai hoặc thiếu thì TXNG vẫn 
thất bại.
III. CHUẨN MỰC VÀ THỰC HÀNH TỐT QUỐC TẾ
Bộ khung vàng cho TXNG hiện đại là sự kết hợp giữa: nguyên tắc của Codex; tư duy thiết kế hệ 
thống của ISO 22005; tầng định danh và trao đổi dữ liệu của GS1; logic kiểm soát sự kiện–dữ liệu 
của FDA; và cách tiếp cận hộ chiếu sản phẩm số của châu Âu. Điểm chung là chuẩn mở, ghi dữ 
liệu tại nguồn, dữ liệu sự kiện có ngữ nghĩa, khả năng chia sẻ có kiểm soát, và khả năng dùng lại 
cùng một bộ dữ liệu cho nhiều mục tiêu quản lý.
Khung / Chuẩn Giá trị cốt lõi Hàm ý cho Việt Nam
Codex CAC/GL 60-2006 Định nghĩa TXNG; nhấn mạnh 
biện minh theo mục tiêu quản lý; 
yêu cầu tối thiểu one-step-back / 
one-step-forward
Là 'mức sàn' cho mọi ngành, nhất là khi 
chưa thể số hóa toàn chuỗi
ISO 22005 Nguyên tắc và yêu cầu thiết 
kế/triển khai hệ thống TXNG
Dùng để xây tiêu chí đánh giá hệ thống 
theo chuỗi, không chỉ theo tem
GS1 Identifiers + Digital 
Link
Chuẩn hóa danh tính số của sản 
phẩm, địa điểm và đơn vị 
logistics; nối mã vật lý với tài 
nguyên web
Phù hợp nhất để tránh 'mỗi địa phương 
một mã, mỗi ngành một tem'
GS1 EPCIS / CBV Mô hình chia sẻ dữ liệu sự kiện 
'cái gì – ở đâu – khi nào – vì sao'
Nên là chuẩn dữ liệu lõi cho TXNG đa 
doanh nghiệp
FDA FSMA 204 Mô hình CTE/KDE, sẵn sàng thu 
hồi, truy vết theo lô
Hữu ích để chuyển hóa sang logic sự 
kiện cho thực phẩm và hóa chất có rủi ro
EU DPP / ESPR + 
Battery Regulation
Hộ chiếu sản phẩm số, dữ liệu 
vòng đời, mã tra cứu, tuân thủ
Giúp hệ thống Việt Nam 'DPP-ready', 
nhất là với xuất khẩu công nghiệp
3.1. Năm thực hành tốt cần giữ nguyên
• Tách rõ lớp định danh, lớp sự kiện và lớp công bố công khai.
• Không khóa hệ thống vào một nhà cung cấp riêng; dữ liệu phải chuyển được giữa các 
nền tảng.
• Chỉ chia sẻ phần dữ liệu thực sự cần thiết cho cơ quan quản lý hoặc người tiêu dùng.
• Không dùng blockchain như trái tim của hệ thống; nếu dùng thì chỉ như lớp chứng thực 
cho các sự kiện hoặc hồ sơ rủi ro cao.
• Với hàng công nghiệp xuất khẩu, thiết kế ngay từ đầu theo tư duy DPP-ready để khỏi 
phải thay kiến trúc sau này.
IV. C12 TRONG TRUY XUẤT NGUỒN GỐC TẠI VIỆT NAM
4.1. Khung thể chế và văn bản pháp lý
Chuỗi văn bản cho thấy Nhà nước đang xây xong xương sống dữ liệu quốc gia:
• Luật Dữ liệu: dành riêng các điều về thu thập, cập nhật, đồng bộ, khai thác và kết nối 
vào Cơ sở dữ liệu tổng hợp quốc gia.
• Quyết định 1751/QĐ-TTg: phê duyệt Chiến lược dữ liệu tại Trung tâm Dữ liệu quốc gia.
• Quyết định 2439/QĐ-TTg: ban hành Khung kiến trúc dữ liệu quốc gia.
• Nghị định 278/2025/NĐ-CP: đặt ra cơ chế kết nối–chia sẻ bắt buộc.
• Thông tư 08/2025/TT-BCA: ban hành quy chuẩn kỹ thuật quốc gia về cấu trúc thông 
điệp dữ liệu trao đổi với Cơ sở dữ liệu tổng hợp quốc gia.
4.2. Kiến trúc công khai của C12 (bốn lớp)
• Kho dữ liệu: kho dữ liệu dùng chung, kho dữ liệu chuyên ngành, kho dữ liệu tổng hợp, 
danh mục dữ liệu dùng chung và dữ liệu mở.
• Lớp chia sẻ–điều phối: Nền tảng chia sẻ, điều phối dữ liệu và Agent Node tại 
bộ/ngành/địa phương.
• Lớp chuẩn hóa–governance: Khung kiến trúc dữ liệu quốc gia, Khung quản trị dữ liệu và 
Từ điển dữ liệu dùng chung.
• Lớp khai thác ứng dụng: cổng dữ liệu quốc gia, sàn dữ liệu, hệ phân tích dữ liệu, điểm 
một cửa số duy nhất.
4.3. Bằng chứng triển khai thực tế
• Trung tâm Dữ liệu quốc gia số 1 khai trương tháng 8/2025, đưa vào khai thác nền tảng 
tích hợp–chia sẻ–điều phối dữ liệu, nền tảng đám mây và hệ phân tích dữ liệu phục vụ 
Chính phủ.
• Cổng Dịch vụ công quốc gia đã được chuyển sang vận hành tại Trung tâm Dữ liệu quốc 
gia trong tháng 4/2026.
• Bộ Nông nghiệp và Môi trường đã kết nối đồng bộ 12/12 cơ sở dữ liệu trọng điểm với 
Trung tâm.
• Thí điểm VNIDCheck: giải pháp định danh và truy xuất nguồn gốc hóa chất, tiền chất 
trên nền tảng VNeID, kết nối với CSDL dân cư, CSDL hóa chất quốc gia và hệ thống mã 
số, mã vạch.
4.4. Đánh giá kỹ thuật C12 trong bài toán TXNG
Chiều cạnh C12 làm tốt C12 còn thiếu cho TXNG mạnh
Định danh và xác thực Rất mạnh, nhất là khi gắn với VNeID 
và dữ liệu dân cư
Chưa đủ để thay thế lớp định danh 
sản phẩm/lô/serial chuyên biệt
Kết nối liên cơ quan Rất mạnh nhờ Nền tảng chia sẻ, điều 
phối dữ liệu và Agent Node
Chưa đồng nghĩa với liên thông 
chuỗi cung ứng B2B/B2G/B2C
Chuẩn dữ liệu quốc gia Đang hình thành tốt với Khung kiến 
trúc, Từ điển dữ liệu, QCVN 
message
Chưa thấy công bố công khai mô 
hình sự kiện TXNG kiểu 
EPCIS/CBV
Điều phối và hậu kiểm Phù hợp để giám sát, xác minh, đối 
soát, chia sẻ bắt buộc
Chưa phải là hệ thống vận hành hiện 
trường cho ERP/MES/WMS/LIMS
Tra cứu công khai Có thể làm lớp xác minh Hiện đã có Cổng TXNG quốc gia 
riêng cho công bố/tra cứu
Chống giả hàng rủi ro 
cao
Phù hợp để bổ sung eID, ký số, bằng 
chứng số
Cần thêm secure tag, serialization, 
quy trình nghiệp vụ tại nguồn
Mở rộng đa ngành Có lợi thế quy mô quốc gia Dễ chồng lấn vai trò với cổng TXNG 
quốc gia nếu governance không rõ
Kết luận đánh giá: C12 đủ mạnh để làm hạ tầng trust, identity, exchange và governance cho 
TXNG; nhưng chưa đủ nếu đứng một mình như 'hệ thống TXNG quốc gia hoàn chỉnh'. Ba khoảng 
trống cần lưu ý: (1) Kỹ thuật: chưa thấy chuẩn sự kiện TXNG thống nhất kiểu EPCIS/CBV, chưa 
có catalog API nghiệp vụ TXNG chi tiết. (2) Tổ chức: cần phân vai rõ giữa Cổng TXNG quốc gia 
(Bộ KH&CN) và C12 (Bộ Công an). (3) Pháp lý: ranh giới dữ liệu công khai, bí mật kinh doanh, 
dữ liệu phải chia sẻ bắt buộc cần quy định cụ thể hơn cho TXNG công nghiệp đa chủ thể.
V. ĐỀ XUẤT KỸ THUẬT CHO CÁC LĨNH VỰC CÔNG NGHIỆP ƯU 
TIÊN
5.1. Phân nhóm theo rủi ro
• Rủi ro cao (ưu tiên 1): Tiền chất thuốc nổ; Đồ uống (không cồn và có cồn).
• Rủi ro trung bình (ưu tiên 2): Giấy; Hóa chất và sản phẩm chứa hóa chất; Thuốc nổ công 
nghiệp; Thuốc nổ mạnh; Phụ kiện nổ công nghiệp; Máy và thiết bị công nghiệp.
Hàng có nguy cơ an ninh, gian lận hoặc an toàn cao phải dùng định danh chắc hơn, bằng chứng 
mạnh hơn và cơ chế chia sẻ với cơ quan quản lý chặt hơn.
5.2. Kiến trúc tổng thể đề xuất
Sơ đồ kiến trúc tổng thể 
Mô tả
Kiến trúc hệ thống gồm bốn nhóm thành phần chính kết nối với nhau:
Nhóm 1 – Doanh nghiệp và hiện trường
• Nhà cung ứng nguyên liệu → ERP/MES/WMS/LIMS
• Máy in tem, máy quét QR, đầu đọc RFID/NFC
• Cảm biến IoT và gateway tại hiện trường
• Kho, vận tải, đại lý phân phối
Nhóm 2 – Nền tảng TXNG ngành công nghiệp (ITP)
• Dịch vụ cấp mã và serialization
• Kho master data (sản phẩm, doanh nghiệp, địa điểm)
• Kho sự kiện EPCIS/CBV (trái tim hệ thống)
• Kho bằng chứng số và hồ sơ tuân thủ
• Rule engine, cảnh báo, quản lý thu hồi
• Portal doanh nghiệp / thanh tra / người tiêu dùng
• API Gateway, Message Broker, Adapter kết nối
• Lakehouse, BI, phát hiện bất thường
Nhóm 3 – Lớp quốc gia
• Cổng TXNG quốc gia (công bố và tra cứu công khai)
• C12 / Cơ sở dữ liệu tổng hợp quốc gia
• Nền tảng chia sẻ, điều phối dữ liệu + Agent Node
• VNeID / Định danh điện tử cá nhân – tổ chức
Nhóm 4 – Cơ quan quản lý
• Bộ/ngành chuyên ngành (nhận dữ liệu từ C12)
• Địa phương, Sở, lực lượng hậu kiểm (nhận từ Cổng TXNG quốc gia)
• Bộ Công an (kết nối C12)
Nguyên tắc kiến trúc cốt lõi: nguồn dữ liệu gốc nằm ở doanh nghiệp và hiện trường; nền tảng 
TXNG ngành là nơi lưu dữ liệu sự kiện chi tiết và vận hành nghiệp vụ; Cổng TXNG quốc gia là 
lớp công bố/tra cứu; còn C12 là lớp định danh, xác minh, điều phối và dùng chung dữ liệu liên cơ 
quan. Cách tách lớp này giúp tránh biến C12 thành kho sự kiện sản xuất khổng lồ, đồng thời vẫn 
tận dụng đúng thế mạnh của C12 cho đối soát, hậu kiểm và quản trị chuẩn dữ liệu.
5.3. Luồng dữ liệu cốt lõi
Luồng dữ liệu Nguồn phát sinh Dữ liệu chính Đích chính Ghi chú
Onboarding 
doanh nghiệp
Cổng đăng ký và 
eID
Hồ sơ tổ chức, người đại 
diện, địa điểm, giấy 
phép
Nền tảng TXNG 
ngành + C12
Dùng định danh 
điện tử, đối soát 
pháp lý
Cấp mã sản 
phẩm/lô/serial
ERP hoặc dịch vụ 
serialization
Product master, batch, 
serial, packaging 
hierarchy
Kho master data 
+ in tem/mã
Bắt buộc serial 
cho nhóm rủi ro 
cao
Ghi nhận sự 
kiện sản xuất
MES/WMS/app 
scanner
Commissioning, 
packing, aggregation, 
shipping, receiving, 
transformation
EPCIS repository Là 'trái tim' 
TXNG
Ghi nhận bằng 
chứng
LIMS, kiểm 
nghiệm, chứng 
nhận, IoT
COA, chứng nhận, ảnh, 
nhiệt độ, GPS, seal 
status
Kho bằng chứng 
số
Chỉ chọn sensor 
nơi có giá trị 
quản lý
Chia sẻ cho 
C12
Adapter/Agent 
Node
Master data bắt buộc, sự 
kiện tóm tắt, hồ sơ tuân 
thủ, kết quả xác minh
C12/CSDLTHQG Không đẩy toàn 
bộ telemetry thô
Công bố công 
khai
Portal TXNG Tên hàng, ảnh, nhà sản 
xuất, lô, xuất xứ, chứng 
nhận công khai
Cổng TXNG 
quốc gia
Tuân thủ yêu cầu 
tối thiểu
Hậu kiểm –
Điều tra
Cơ quan quản lý Truy vấn chéo theo tổ 
chức, lô, serial, tuyến 
vận chuyển
Dashboard kiểm 
tra + C12
Cho phép xác 
minh liên cơ 
quan
5.4. Bộ chuẩn và định danh mục tiêu
Đối tượng Chuẩn / Mã đề xuất Mức bắt buộc
Tổ chức / Doanh nghiệp Định danh điện tử tổ chức + mã số 
doanh nghiệp
Bắt buộc
Cơ sở, kho, dây chuyền, 
điểm giao nhận
GLN hoặc mã địa điểm tương đương 
được ánh xạ GLN
Bắt buộc
Sản phẩm thương mại GTIN nếu phù hợp; với hàng công 
nghiệp đặc thù dùng model code nội bộ 
nhưng phải có quy tắc ánh xạ chuẩn
Bắt buộc
Lô sản xuất Batch / Lot Bắt buộc mọi nhóm
Đơn vị đơn chiếc Serial Bắt buộc cho nhóm rủi ro cao và 
sản phẩm cần chống giả mạnh
Đơn vị logistics SSCC hoặc mã logistics unit tương 
đương
Bắt buộc với vận tải/kho
Mã mang dữ liệu trên 
bao bì
GS1 Digital Link QR; DataMatrix cho 
môi trường công nghiệp chật hẹp
Bắt buộc
Hàng rủi ro rất cao NFC/RFID bảo mật hoặc QR ký số có 
cơ chế chống sao chép
Áp dụng chọn lọc
Dữ liệu sự kiện EPCIS 2.0/CBV hoặc mô hình tương 
đương tương thích
Bắt buộc ở lớp nghiệp vụ
Dữ liệu trao đổi với C12 JSON/XML theo QCVN message của 
BCA
Bắt buộc ở lớp chia sẻ quốc gia
5.5. So sánh phương án công nghệ
Phương án Mô tả Liên 
thông
Chống 
giả
Chi phí Độ hợp 
với C12
Khuyến 
nghị
QR + CSDL tập 
trung
Mỗi sản phẩm/lô 
có QR trỏ về một 
DB trung tâm
Trung 
bình
Thấp –
TB
Thấp Trung bình Chỉ phù 
hợp giai 
đoạn rất 
sớm
QR/RFID + EPCIS Chuẩn sự kiện bài 
bản, dữ liệu ghi ở 
nguồn và chia sẻ 
qua chuẩn mở
Cao Trung 
bình
Trung 
bình
Cao Tốt cho 
nền tảng 
ngành
EPCIS + Digital Link 
+ C12 + Cổng 
TXNG QG
Lõi chuẩn mở, 
tích hợp trust và 
chia sẻ quốc gia
Rất cao TB –
Cao
TB –
Cao
Rất cao ✔
Khuyến 
nghị 
chính
Permissioned 
blockchain-centric
Đưa phần lớn sự 
kiện lên 
blockchain riêng
Thấp –
TB
Trung 
bình
Cao Trung bình Không 
nên 
chọn 
làm lõi
Secure NFC / QR ký 
số bổ sung
Tăng bảo mật 
nhận diện cho 
hàng rủi ro cao
Cao nếu 
gắn với 
lõi chuẩn
Cao Cao/đơn 
vị
Cao Dùng 
chọn lọc 
cho tiền 
chất, 
VLNCN
Khuyến nghị chính: phương án lai chuẩn mở (EPCIS + Digital Link + C12 + Cổng TXNG quốc 
gia) thay vì blockchain-centric hay central database đơn giản. Kế hoạch tích hợp với C12 nên tuân 
thủ nguyên tắc federated-by-design: nguồn sự thật vận hành vẫn là nền tảng TXNG ngành/doanh 
nghiệp; C12 là nguồn sự thật về danh tính số, đối soát liên cơ quan và dữ liệu quốc gia dùng 
chung.
VI. AN TOÀN THÔNG TIN VÀ QUYỀN RIÊNG TƯ
Bảy biện pháp bắt buộc:
• Mọi người dùng nội bộ quan trọng phải đăng nhập qua định danh điện tử/tích hợp IAM.
• Tất cả dữ liệu truy xuất nhạy cảm phải được phân lớp thành: công khai – nội bộ – bí mật 
kinh doanh – dữ liệu cá nhân – bí mật nhà nước.
• Dữ liệu chia sẻ với C12 chỉ là dữ liệu tối thiểu theo mục đích; không đẩy toàn bộ 
telemetry thô.
• Hồ sơ quan trọng phải dùng ký số và time-stamp.
• Nhật ký hệ thống phải bất biến và truy vết được.
• Hàng rủi ro cao phải có cơ chế tem bảo mật hoặc mã ký số chống sao chép.
• Hệ thống phải có phương án offline fallback cho kiểm tra hiện trường khi mất mạng.
VII. LỘ TRÌNH TRIỂN KHAI VÀ NGUỒN LỰC
7.1. Lộ trình 4 pha (24–36 tháng)
Pha Trọng tâm Kết quả chính Mức chi phí
Khởi tạo Chuẩn hóa mô hình dữ liệu, 
governance, quy chế phối 
hợp, lựa chọn chuẩn định 
danh, chuẩn chia sẻ với 
C12
Data model thống nhất, quy trình 
nghiệp vụ, sandbox tích hợp, danh 
mục KPI
Medium
Thí điểm Tiền chất thuốc nổ, đồ 
uống; 1–2 địa phương; 20–
30 doanh nghiệp đầu mối
Serialization, EPCIS, portal thanh tra, 
tích hợp C12 và Cổng TXNG quốc 
gia
Medium–High
Mở rộng Hóa chất, thuốc nổ công 
nghiệp, phụ kiện nổ, máy 
thiết bị công nghiệp; tích 
hợp logistics và kiểm 
nghiệm
Scale-out hạ tầng, dashboard quản lý, 
quy trình thu hồi–điều tra
High
Tối ưu và 
DPP-ready
Giấy, nhóm hàng xuất khẩu 
công nghiệp, nâng cấp cho 
thị trường quốc tế
Mapping DPP-ready, phân tích gian 
lận, chia sẻ dữ liệu xuyên chuỗi tốt 
hơn
Medium–High
7.2. Bức tranh chi phí sơ bộ theo hạng mục
Hạng mục Mức nguồn lực Ghi chú
Chuẩn hóa dữ liệu và governance Medium Cần mạnh ở giai đoạn đầu
Serialization và in tem Medium Tăng theo số SKU/lô/serial
Tích hợp ERP/MES/WMS/LIMS High Là phần tốn công nhất
Cảm biến IoT Medium–High Chỉ nên dùng nơi thật sự cần
Tem bảo mật/NFC cho nhóm rủi ro cao High Áp dụng chọn lọc, không dàn trải
Tích hợp C12/Agent Node Medium–High Phụ thuộc mức độ chia sẻ pháp lý
Portal tra cứu và ứng dụng thanh tra Medium Dễ mở rộng nếu chuẩn dữ liệu tốt
SOC, IAM, HSM/KMS Medium–High Không được cắt giảm
Đào tạo và quản trị thay đổi Medium Là điều kiện để dữ liệu 'sống'
7.3. Bộ KPI vận hành
KPI đề xuất Mục tiêu gợi ý
Tỷ lệ sản phẩm/lô thuộc phạm vi đã có mã chuẩn ≥ 95% sau pha mở rộng
Tỷ lệ sự kiện bắt buộc được ghi nhận đầy đủ ≥ 98%
Thời gian đồng bộ sự kiện trọng yếu lên lớp dùng chung ≤ 15 phút với sự kiện online
Tỷ lệ truy vấn tra cứu thành công từ người dùng cuối ≥ 99%
Thời gian truy hồ sơ một lô/số serial cho thanh tra ≤ 2 phút
Thời gian khoanh vùng thu hồi Từ nhiều ngày xuống còn vài giờ
Tỷ lệ đối soát thành công giữa dữ liệu DN và dữ liệu quốc gia ≥ 95%
Tỷ lệ phát hiện bất thường gian lận hoặc sai lệch dữ liệu Tăng theo từng pha, có dashboard 
cảnh báo
7.4. Quản lý rủi ro
Rủi ro Tác động Cách giảm thiểu
Chồng lấn vai trò giữa Cổng 
TXNG quốc gia và C12
Phân mảnh hệ thống, DN 
phải khai báo hai nơi
Ban hành phân vai rõ: cổng quốc gia là 
public/discovery; C12 là 
identity/trust/exchange
Chất lượng dữ liệu thấp tại 
nguồn
TXNG đẹp trên giao diện 
nhưng không dùng được 
khi sự cố
Bắt buộc validation tại điểm nhập, đo 
completeness, audit định kỳ
Quá tải chia sẻ lên C12 Tăng chi phí, tăng rủi ro 
riêng tư
Chỉ đồng bộ dữ liệu tối thiểu cần thiết; 
raw telemetry ở lại nền tảng ngành
Khóa công nghệ vào một 
vendor
Chi phí mở rộng cao, khó 
thay thế
Bắt buộc chuẩn mở, API mở, hợp đồng dữ 
liệu và kế hoạch exit
VIII. KẾT LUẬN
Việt Nam đang hình thành hai lớp năng lực bổ sung cho nhau:
• Lớp 1 – Năng lực TXNG theo nghĩa quản lý sản phẩm và hàng hóa: với hành lang pháp 
lý từ Quyết định 100, Nghị định 13/2022, Thông tư 02/2024, Cổng TXNG quốc gia và 
các quy định mới của Luật Chất lượng sản phẩm, hàng hóa.
• Lớp 2 – Năng lực dữ liệu quốc gia: C12/Trung tâm Dữ liệu quốc gia đang trở thành hạ 
tầng trust, định danh, xác thực, chia sẻ và điều phối dữ liệu của quốc gia.
Nếu nhìn đúng vai trò, hai lớp này không cạnh tranh mà phải ghép vào nhau.
Đề xuất kỹ thuật tối ưu: TXNG ngành/doanh nghiệp theo chuẩn mở GS1 Digital Link + 
EPCIS/CBV; Cổng TXNG quốc gia làm cửa công bố và tra cứu; C12 làm lớp định danh, xác thực, 
điều phối, giám sát và xác minh liên cơ quan; còn secure tags, ký số, RFID/NFC và cảm biến chỉ 
triển khai có chọn lọc theo rủi ro.
Nếu triển khai theo hướng này, Việt Nam có thể vừa tận dụng được hạ tầng dữ liệu quốc gia mới, 
vừa tránh làm lại cổng TXNG đã có, đồng thời tạo một kiến trúc đủ chắc cho hàng công nghiệp 
ưu tiên hôm nay và đủ mở để tương thích với các yêu cầu hộ chiếu sản phẩm số ngày mai.