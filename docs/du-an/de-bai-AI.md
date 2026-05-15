# Đề bài cho AI trong dự án truy xuất nguồn gốc
Tuyển

## A. Phát hiện hàng hóa bị chuyển hướng bất thường (Diversion Detection)
Bài toán là gì?

Trong chuỗi cung ứng (supply chain), hàng hóa thường phải đi theo một tuyến đường đã được xác định trước.

Ví dụ:

Nhà máy → Kho trung chuyển → Nhà phân phối → Bệnh viện

Tuy nhiên trên thực tế có thể xảy ra:

hàng bị bán lậu
hàng bị tuồn ra ngoài
hàng bị chuyển sang thị trường khác
hàng giả chen vào chuỗi phân phối

Hệ thống EPCIS ghi nhận toàn bộ:

thời gian
địa điểm
đơn vị quét
mã sản phẩm
mã lô
serial number

AI có thể học từ:

tuyến vận chuyển bình thường
thời gian giao hàng bình thường
hành vi quét thông thường

để phát hiện bất thường (anomaly detection).

Ứng dụng AI có thể làm được gì?

AI có thể:

phát hiện tuyến đường bất thường
phát hiện điểm trung chuyển lạ
phát hiện hành vi phân phối đáng ngờ
cảnh báo nguy cơ hàng giả hoặc hàng bị tuồn
Đầu ra (Output)

Ví dụ đầu ra:

“Shipment có nguy cơ diversion 92%”
“Container đi sai tuyến”
“Phát hiện điểm quét chưa từng xuất hiện”
“Serial xuất hiện tại quốc gia không hợp lệ”
Ví dụ mockdata 1
Dữ liệu EPCIS
Thời gian	Địa điểm	Sự kiện
08:00	Hamburg	Xuất kho
14:00	Singapore	Trung chuyển
18:00	Hải Phòng	Nhập khẩu

Đây là tuyến bình thường.

Trường hợp bất thường
Thời gian	Địa điểm	Sự kiện
08:00	Hamburg	Xuất kho
14:00	Phnom Penh	Quét RFID
22:00	Hải Phòng	Nhập khẩu

AI phát hiện:

Phnom Penh chưa từng nằm trong tuyến chính thức
xác suất diversion: 89%
Ví dụ mockdata 2
Dữ liệu serial
Serial	Địa điểm	Thời gian
SN001	Hà Nội	09:00
SN001	Bangkok	09:25

AI phát hiện:

không thể vận chuyển trong 25 phút
khả năng serial bị clone hoặc hàng giả

Output:

“Counterfeit risk: HIGH”
B. Giám sát chuỗi lạnh và dự đoán hỏng hóc (Cold Chain Monitoring & Predictive Spoilage)
Bài toán là gì?

Các sản phẩm như:

vaccine
sữa
thực phẩm đông lạnh
thuốc

phải được bảo quản ở nhiệt độ nhất định.

Nếu nhiệt độ vượt ngưỡng quá lâu:

chất lượng giảm
sản phẩm hỏng
mất hiệu lực

EPCIS 2.0 có thể lưu:

nhiệt độ
độ ẩm
rung lắc
GPS
thời gian
AI có thể làm gì?

AI có thể:

dự đoán sản phẩm còn sử dụng được bao lâu
đánh giá mức độ hỏng
cảnh báo sớm
tối ưu việc thu hồi
Đầu ra

Ví dụ:

“Shelf life còn 4 ngày”
“Nguy cơ hỏng: 78%”
“Container cần kiểm tra ngay”
Ví dụ mockdata 1
Thời gian	Nhiệt độ
08:00	4°C
09:00	5°C
10:00	13°C
11:00	14°C

AI học rằng:

vaccine trên 8°C quá 60 phút sẽ giảm hiệu lực mạnh

Output:

“Estimated potency loss: 35%”
Ví dụ mockdata 2
Xe lạnh	Độ rung	Nhiệt độ
Truck-22	Cao	9°C

AI dự đoán:

nguy cơ hỏng bao bì tăng
tuổi thọ sản phẩm giảm 20%
C. Thu hồi thông minh (Smart Recall)
Bài toán là gì?

Khi phát hiện:

nhiễm khuẩn
lỗi sản xuất
sai nhiệt độ

doanh nghiệp thường phải thu hồi hàng loạt.

Nhưng thực tế:

không phải tất cả sản phẩm đều bị ảnh hưởng.
AI có thể làm gì?

AI phân tích:

lô hàng
vị trí lưu kho
thời gian tiếp xúc
container dùng chung
nhiệt độ

để xác định chính xác:

pallet nào cần recall
pallet nào an toàn
Đầu ra

Ví dụ:

“Recall 12 pallet”
“Không cần recall toàn bộ lô”
Ví dụ mockdata 1
Pallet	Kho lạnh
P001	Zone A
P002	Zone A
P003	Zone B

Nhiễm khuẩn chỉ xảy ra tại Zone A.

AI kết luận:

chỉ recall P001 và P002
Ví dụ mockdata 2
Container	Sensor ammonia
C001	Cao
C002	Bình thường

AI xác định:

contamination chỉ nằm trong C001
D. Phát hiện hàng giả (Counterfeit Detection)
Bài toán là gì?

Hàng giả thường:

clone serial
dùng QR giả
giả tuyến phân phối

EPCIS giúp theo dõi:

nguồn gốc
chuỗi sở hữu
lịch sử quét
AI có thể làm gì?

AI phát hiện:

serial trùng lặp
tốc độ di chuyển bất khả thi
điểm quét lạ
pattern phân phối bất thường
Đầu ra

Ví dụ:

“Counterfeit probability: 96%”
Ví dụ mockdata 1
Serial	Quốc gia
SN555	Việt Nam
SN555	Brazil

AI phát hiện:

cùng serial xuất hiện tại 2 nơi
Ví dụ mockdata 2
Nhà thuốc	Tỷ lệ scan
A	20/ngày
B	5000/ngày

AI đánh giá:

Nhà thuốc B có hành vi bất thường
E. Tối ưu chuỗi cung ứng (Supply Chain Optimization)
Bài toán là gì?

Doanh nghiệp muốn:

giao nhanh hơn
giảm tồn kho
giảm tắc nghẽn
giảm chi phí logistics
AI có thể làm gì?

AI có thể:

dự đoán ETA (Estimated Time Arrival)
dự đoán delay
tối ưu tuyến đường
tối ưu tồn kho
Đầu ra

Ví dụ:

“Shipment sẽ trễ 18 giờ”
“Nên đổi tuyến qua Singapore”
Ví dụ mockdata 1
Tuyến	Delay trung bình
Shanghai → Hải Phòng	4h
Shanghai → Singapore → Hải Phòng	1h

AI đề xuất:

đổi tuyến để giảm delay
Ví dụ mockdata 2
Kho	Tồn kho
Hải Phòng	95%
Đà Nẵng	22%

AI đề xuất:

chuyển hàng sang Đà Nẵng
F. AI đồ thị và knowledge graph (Graph AI)
Bài toán là gì?

Chuỗi cung ứng thực chất là một mạng lưới quan hệ:

nhà máy
container
tàu
kho
nhà phân phối
pallet

AI dạng graph có thể phân tích toàn bộ mạng lưới này.

AI có thể làm gì?

AI có thể:

phát hiện trung tâm rủi ro
phát hiện đường lây nhiễm
phát hiện supplier nguy hiểm
Đầu ra

Ví dụ:

“Supplier X liên quan tới 78% vụ contamination”
Ví dụ mockdata 1
Supplier	Số recall
S001	15
S002	1

AI đánh giá:

Supplier S001 có risk score rất cao
Ví dụ mockdata 2

Graph phát hiện:

90% lô lỗi đều đi qua Warehouse-WH7

AI cảnh báo:

kho WH7 có nguy cơ contamination
G. AI Agent và LLM cho truy vấn chuỗi cung ứng
Bài toán là gì?

Dữ liệu EPCIS thường:

rất lớn
khó truy vấn
nhiều event

Người dùng không biết viết query kỹ thuật.

AI có thể làm gì?

LLM có thể:

hiểu tiếng người
chuyển thành EPCIS query
tóm tắt chuỗi sự kiện
giải thích bất thường
Đầu ra

Ví dụ:

“Container đang ở Hải Phòng”
“3 shipment có nguy cơ cao”
Ví dụ mockdata 1

Người dùng hỏi:

“Lô vaccine ABC hiện ở đâu?”

AI:

query EPCIS
trả về:
Kho Hải Phòng
cập nhật 12 phút trước
Ví dụ mockdata 2

Người dùng hỏi:

“Container nào có nhiệt độ nguy hiểm trong 24 giờ qua?”

AI:

lọc sensor events
trả về danh sách container rủi ro
H. Sinh dữ liệu mô phỏng (Synthetic Data Generation)
Bài toán là gì?

Dữ liệu supply-chain thật:

khó xin
nhạy cảm
thiếu trường hợp lỗi
AI có thể làm gì?

AI tạo:

dữ liệu EPCIS giả lập
mô phỏng tấn công
mô phỏng contamination
mô phỏng logistics
Đầu ra

Ví dụ:

10 triệu EPCIS events giả lập
Ví dụ mockdata 1

AI tạo:

1000 container
5% bị delay
2% bị mất nhiệt độ

để train anomaly model.

Ví dụ mockdata 2

AI mô phỏng:

hacker clone serial RFID

để test hệ thống chống hàng giả.

I. Edge AI và IoT AI
Bài toán là gì?

Một số quyết định phải xử lý ngay tại:

kho
gateway
RFID reader
camera edge

không thể chờ cloud xử lý.

AI có thể làm gì?

AI chạy trực tiếp trên edge device:

phát hiện nhiệt độ bất thường
phát hiện pallet sai vị trí
nhận diện container mở trái phép
Đầu ra

Ví dụ:

“Alarm tại kho số 4”
“Pallet sai tuyến”
Ví dụ mockdata 1

Camera edge AI phát hiện:

pallet đi vào khu vực cấm

Output:

bật còi cảnh báo realtime
Ví dụ mockdata 2

RFID reader phát hiện:

pallet xuất hiện sai dock

AI:

chặn xuất kho tự động
J. AI cho ESG và Carbon Footprint
Bài toán là gì?

Doanh nghiệp ngày càng phải báo cáo:

phát thải CO₂
sustainability
ESG compliance
AI có thể làm gì?

AI tính:

CO₂ theo shipment
phát thải theo supplier
tuyến vận chuyển tối ưu carbon
Đầu ra

Ví dụ:

“Shipment tạo ra 1.8 tấn CO₂”
“Đổi tuyến giúp giảm 22% phát thải”
Ví dụ mockdata 1
Tuyến	CO₂
Air freight	4.2 tấn
Sea freight	1.1 tấn

AI đề xuất:

chuyển sang sea freight
Ví dụ mockdata 2
Supplier	ESG score
S001	92
S002	41

AI khuyến nghị:

ưu tiên Supplier S001 trong đấu thầu.