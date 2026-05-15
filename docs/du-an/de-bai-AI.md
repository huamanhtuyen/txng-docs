# Đề bài cho AI trong Dự án Truy xuất Nguồn gốc (TXNG)

> **Hứa Mạnh Tuyển**

---

## A. Phát hiện Hàng hóa Bị Chuyển Hướng Bất thường (Diversion Detection)

### 📌 Bài toán là gì?

Trong chuỗi cung ứng (supply chain), hàng hóa thường phải đi theo một tuyến đường đã được xác định trước.

**Ví dụ:**

```
Nhà máy → Kho trung chuyển → Nhà phân phối → Bệnh viện
```

Tuy nhiên, trên thực tế có thể xảy ra:

- 🚫 Hàng bị bán lậu
- 🚫 Hàng bị tuồn ra ngoài
- 🚫 Hàng bị chuyển sang thị trường khác
- 🚫 Hàng giả chen vào chuỗi phân phối

Hệ thống **TXNG** ghi nhận toàn bộ:

| Thông tin | Mô tả |
|-----------|-------|
| Thời gian | Timestamp của sự kiện |
| Địa điểm | Vị trí quét/ghi nhận |
| Đơn vị quét | Thiết bị/người thực hiện |
| Mã sản phẩm | Product ID |
| Mã lô | Batch/Lot number |
| Serial number | Mã định danh duy nhất |

### 🤖 AI có thể học từ:

- ✅ Tuyến vận chuyển bình thường
- ✅ Thời gian giao hàng bình thường
- ✅ Hành vi quét thông thường

→ **Mục tiêu:** Phát hiện bất thường (*Anomaly Detection*)

### 🎯 Ứng dụng AI có thể làm được gì?

AI có thể:

- 🔍 Phát hiện tuyến đường bất thường
- 🔍 Phát hiện điểm trung chuyển lạ
- 🔍 Phát hiện hành vi phân phối đáng ngờ
- 🔍 Cảnh báo nguy cơ hàng giả hoặc hàng bị tuồn

### 📤 Đầu ra (Output)

**Ví dụ đầu ra:**

> - ⚠️ "Lô hàng có nguy cơ bị chuyển hướng **92%**"
> - 🚨 "Container đi sai tuyến"
> - 🚨 "Phát hiện điểm quét chưa từng xuất hiện"
> - 🚨 "Serial xuất hiện tại quốc gia không hợp lệ"
### 📊 Ví dụ Mockdata 1

**Dữ liệu TXNG - Tuyến bình thường:**

| Thời gian | Địa điểm | Sự kiện |
|-----------|----------|---------|
| 08:00 | Hamburg | Xuất kho |
| 14:00 | Singapore | Trung chuyển |
| 18:00 | Hải Phòng | Nhập khẩu |

✅ *Đây là tuyến bình thường.*

---

**Trường hợp bất thường:**

| Thời gian | Địa điểm | Sự kiện |
|-----------|----------|---------|
| 08:00 | Hamburg | Xuất kho |
| 14:00 | Phnom Penh | Quét RFID |
| 22:00 | Hải Phòng | Nhập khẩu |

**AI phát hiện:**

- ❌ Phnom Penh **chưa từng** nằm trong tuyến chính thức
- ⚠️ Xác suất diversion: **89%**
### 📊 Ví dụ Mockdata 2

**Dữ liệu serial:**

| Serial | Địa điểm | Thời gian |
|--------|----------|-----------|
| SN001 | Hà Nội | 09:00 |
| SN001 | Bangkok | 09:25 |

**AI phát hiện:**

- ❌ Không thể vận chuyển trong **25 phút**
- 🚨 Khả năng serial bị **clone** hoặc hàng giả

**Output:**

> 🔴 "Counterfeit risk: **HIGH**"
---

## B. Giám sát Chuỗi lạnh & Dự đoán Hỏng hóc (Cold Chain Monitoring & Predictive Spoilage)

### 📌 Bài toán là gì?

Các sản phẩm như:

- 💉 Vaccine
- 🥛 Sữa
- 🧊 Thực phẩm đông lạnh
- 💊 Thuốc

Phải được bảo quản ở **nhiệt độ nhất định**.

Nếu nhiệt độ vượt ngưỡng quá lâu:

- ⚠️ Chất lượng giảm
- ❌ Sản phẩm hỏng
- ❌ Mất hiệu lực

**TXNG** có thể lưu:

| Dữ liệu | Mô tả |
|---------|-------|
| Nhiệt độ | Temperature reading |
| Độ ẩm | Humidity level |
| Rung lắc | Vibration/shock |
| GPS | Vị trí địa lý |
| Thời gian | Timestamp |

### 🤖 AI có thể làm gì?

AI có thể:

- 📈 Dự đoán sản phẩm còn sử dụng được bao lâu
- 📊 Đánh giá mức độ hỏng
- 🚨 Cảnh báo sớm
- 🔄 Tối ưu việc thu hồi

### 📤 Đầu ra

**Ví dụ:**

> - ⏱️ "Shelf life còn **4 ngày**"
> - ⚠️ "Nguy cơ hỏng: **78%**"
> - 🚨 "Container cần kiểm tra ngay"
### 📊 Ví dụ Mockdata 1

**Dữ liệu nhiệt độ:**

| Thời gian | Nhiệt độ |
|-----------|----------|
| 08:00 | 4°C |
| 09:00 | 5°C |
| 10:00 | 13°C |
| 11:00 | 14°C |

**AI học rằng:**

> Vaccine trên **8°C** quá **60 phút** sẽ giảm hiệu lực mạnh

**Output:**

> ⚠️ "Estimated potency loss: **35%**"
### 📊 Ví dụ Mockdata 2

**Xe lạnh:**

| Xe | Độ rung | Nhiệt độ |
|----|---------|----------|
| Truck-22 | Cao | 9°C |

**AI dự đoán:**

- ⚠️ Nguy cơ hỏng bao bì **tăng**
- 📉 Tuổi thọ sản phẩm giảm **20%**
---

## C. Thu hồi Thông minh (Smart Recall)

### 📌 Bài toán là gì?

Khi phát hiện:

- 🦠 Nhiễm khuẩn
- 🔧 Lỗi sản xuất
- 🌡️ Sai nhiệt độ

Doanh nghiệp thường phải thu hồi hàng loạt.

**Nhưng thực tế:**

> Không phải tất cả sản phẩm đều bị ảnh hưởng.

### 🤖 AI có thể làm gì?

AI phân tích:

- 📦 Lô hàng (batch/lot)
- 📍 Vị trí lưu kho
- ⏱️ Thời gian tiếp xúc
- 🚛 Container dùng chung
- 🌡️ Nhiệt độ

Để xác định chính xác:

- ✅ Pallet nào cần recall
- ✅ Pallet nào an toàn

### 📤 Đầu ra

**Ví dụ:**

> - 🎯 "Recall **12 pallet**"
> - ✅ "Không cần recall toàn bộ lô"
### 📊 Ví dụ Mockdata 1

**Pallet & Kho lạnh:**

| Pallet | Kho lạnh |
|--------|----------|
| P001 | Zone A |
| P002 | Zone A |
| P003 | Zone B |

**Nhiễm khuẩn chỉ xảy ra tại Zone A.**

**AI kết luận:**

> 🎯 Chỉ recall **P001** và **P002**
### 📊 Ví dụ Mockdata 2

**Container & Sensor ammonia:**

| Container | Sensor ammonia |
|-----------|----------------|
| C001 | Cao |
| C002 | Bình thường |

**AI xác định:**

> 🎯 Contamination chỉ nằm trong **C001**
---

## D. Phát hiện Hàng giả (Counterfeit Detection)

### 📌 Bài toán là gì?

Hàng giả thường:

- 🔢 Clone serial
- 📱 Dùng QR giả
- 🗺️ Giả tuyến phân phối

**TXNG** giúp theo dõi:

- 📍 Nguồn gốc
- 🔗 Chuỗi sở hữu
- 📜 Lịch sử quét

### 🤖 AI có thể làm gì?

AI phát hiện:

- 🔍 Serial trùng lặp
- 🔍 Tốc độ di chuyển bất khả thi
- 🔍 Điểm quét lạ
- 🔍 Pattern phân phối bất thường

### 📤 Đầu ra

**Ví dụ:**

> 🔴 "Counterfeit probability: **96%**"
### 📊 Ví dụ Mockdata 1

**Serial & Quốc gia:**

| Serial | Quốc gia |
|--------|----------|
| SN555 | Việt Nam |
| SN555 | Brazil |

**AI phát hiện:**

> 🚨 Cùng serial xuất hiện tại **2 nơi**
### 📊 Ví dụ Mockdata 2

**Nhà thuốc & Tỷ lệ scan:**

| Nhà thuốc | Tỷ lệ scan |
|-----------|------------|
| A | 20/ngày |
| B | 5000/ngày |

**AI đánh giá:**

> ⚠️ Nhà thuốc **B** có hành vi **bất thường**
---

## E. Tối ưu Chuỗi cung ứng (Supply Chain Optimization)

### 📌 Bài toán là gì?

Doanh nghiệp muốn:

- ⚡ Giao nhanh hơn
- 📉 Giảm tồn kho
- 🚫 Giảm tắc nghẽn
- 💰 Giảm chi phí logistics

### 🤖 AI có thể làm gì?

AI có thể:

- ⏱️ Dự đoán ETA (*Estimated Time Arrival*)
- ⚠️ Dự đoán delay
- 🗺️ Tối ưu tuyến đường
- 📦 Tối ưu tồn kho

### 📤 Đầu ra

**Ví dụ:**

> - ⚠️ "Shipment sẽ trễ **18 giờ**"
> - 💡 "Nên đổi tuyến qua Singapore"
### 📊 Ví dụ Mockdata 1

**Tuyến & Delay trung bình:**

| Tuyến | Delay trung bình |
|-------|------------------|
| Shanghai → Hải Phòng | 4h |
| Shanghai → Singapore → Hải Phòng | 1h |

**AI đề xuất:**

> 💡 Đổi tuyến để **giảm delay**
### 📊 Ví dụ Mockdata 2

**Kho & Tồn kho:**

| Kho | Tồn kho |
|-----|---------|
| Hải Phòng | 95% |
| Đà Nẵng | 22% |

**AI đề xuất:**

> 💡 Chuyển hàng sang **Đà Nẵng**
---

## F. AI Đồ thị & Knowledge Graph (Graph AI)

### 📌 Bài toán là gì?

Chuỗi cung ứng thực chất là một **mạng lưới quan hệ**:

- 🏭 Nhà máy
- 🚛 Container
- 🚢 Tàu
- 🏢 Kho
- 🤝 Nhà phân phối
- 📦 Pallet

AI dạng graph có thể phân tích **toàn bộ mạng lưới** này.

### 🤖 AI có thể làm gì?

AI có thể:

- 🎯 Phát hiện trung tâm rủi ro
- 🦠 Phát hiện đường lây nhiễm
- ⚠️ Phát hiện supplier nguy hiểm

### 📤 Đầu ra

**Ví dụ:**

> 🔴 "Supplier **X** liên quan tới **78%** vụ contamination"
### 📊 Ví dụ Mockdata 1

**Supplier & Số recall:**

| Supplier | Số recall |
|----------|-----------|
| S001 | 15 |
| S002 | 1 |

**AI đánh giá:**

> 🔴 Supplier **S001** có risk score **rất cao**
### 📊 Ví dụ Mockdata 2

**Graph phát hiện:**

> ⚠️ **90%** lô lỗi đều đi qua **Warehouse-WH7**

**AI cảnh báo:**

> 🚨 Kho **WH7** có nguy cơ contamination
---

## G. AI Agent & LLM cho Truy vấn Chuỗi cung ứng

### 📌 Bài toán là gì?

Dữ liệu TXNG thường:

- 📊 Rất lớn
- 🔍 Khó truy vấn
- 📝 Nhiều event

Người dùng **không biết** viết query kỹ thuật.

### 🤖 AI có thể làm gì?

**LLM** có thể:

- 💬 Hiểu tiếng người
- 🔁 Chuyển thành TXNG query
- 📋 Tóm tắt chuỗi sự kiện
- 💡 Giải thích bất thường

### 📤 Đầu ra

**Ví dụ:**

> - 📍 "Container đang ở Hải Phòng"
> - ⚠️ "3 shipment có nguy cơ cao"
### 📊 Ví dụ Mockdata 1

**Người dùng hỏi:**

> "Lô vaccine ABC hiện ở đâu?"

**AI:**

1. Query TXNG
2. Trả về:
   - 📍 Kho Hải Phòng
   - ⏱️ Cập nhật 12 phút trước
### 📊 Ví dụ Mockdata 2

**Người dùng hỏi:**

> "Container nào có nhiệt độ nguy hiểm trong 24 giờ qua?"

**AI:**

1. Lọc sensor events
2. Trả về danh sách container rủi ro
---

## H. Sinh Dữ liệu Mô phỏng (Synthetic Data Generation)

### 📌 Bài toán là gì?

Dữ liệu supply-chain thật:

- 🔒 Khó xin
- ⚠️ Nhạy cảm
- ❌ Thiếu trường hợp lỗi

### 🤖 AI có thể làm gì?

AI tạo:

- 📊 Dữ liệu TXNG giả lập
- 🎭 Mô phỏng tấn công
- 🦠 Mô phỏng contamination
- 🚛 Mô phỏng logistics

### 📤 Đầu ra

**Ví dụ:**

> 📈 10 triệu TXNG events giả lập
### 📊 Ví dụ Mockdata 1

**AI tạo:**

- 🚛 1000 container
- ⏱️ 5% bị delay
- 🌡️ 2% bị mất nhiệt độ

→ Để train **anomaly model**.

### 📊 Ví dụ Mockdata 2

**AI mô phỏng:**

- 🔓 Hacker clone serial RFID

→ Để test hệ thống **chống hàng giả**.

---

## I. Edge AI & IoT AI

### 📌 Bài toán là gì?

Một số quyết định phải xử lý **ngay tại**:

- 🏢 Kho
- 🌐 Gateway
- 📡 RFID reader
- 📹 Camera edge

→ **Không thể** chờ cloud xử lý.

### 🤖 AI có thể làm gì?

AI chạy trực tiếp trên **edge device**:

- 🌡️ Phát hiện nhiệt độ bất thường
- 📦 Phát hiện pallet sai vị trí
- 🔓 Nhận diện container mở trái phép

### 📤 Đầu ra

**Ví dụ:**

> - 🚨 "Alarm tại kho số 4"
> - ⚠️ "Pallet sai tuyến"
### 📊 Ví dụ Mockdata 1

**Camera edge AI phát hiện:**

- 🚫 Pallet đi vào khu vực cấm

**Output:**

> 🔊 Bật còi cảnh báo **realtime**
### 📊 Ví dụ Mockdata 2

**RFID reader phát hiện:**

- 📦 Pallet xuất hiện sai dock

**AI:**

> 🚫 Chặn xuất kho **tự động**
---

## J. AI cho ESG & Carbon Footprint

### 📌 Bài toán là gì?

Doanh nghiệp ngày càng phải báo cáo:

- 🌍 Phát thải CO₂
- ♻️ Sustainability
- 📋 ESG compliance

### 🤖 AI có thể làm gì?

AI tính:

- 🚛 CO₂ theo shipment
- 🏭 Phát thải theo supplier
- 🗺️ Tuyến vận chuyển tối ưu carbon

### 📤 Đầu ra

**Ví dụ:**

> - 📊 "Shipment tạo ra **1.8 tấn CO₂**"
> - 💡 "Đổi tuyến giúp giảm **22%** phát thải"
### 📊 Ví dụ Mockdata 1

**Tuyến & CO₂:**

| Tuyến | CO₂ |
|-------|-----|
| Air freight | 4.2 tấn |
| Sea freight | 1.1 tấn |

**AI đề xuất:**

> 💡 Chuyển sang **sea freight**
### 📊 Ví dụ Mockdata 2

**Supplier & ESG score:**

| Supplier | ESG score |
|----------|-----------|
| S001 | 92 |
| S002 | 41 |

**AI khuyến nghị:**

> ✅ Ưu tiên Supplier **S001** trong đấu thầu.