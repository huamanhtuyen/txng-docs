# Đề bài cho AI trong Dự án Truy xuất Nguồn gốc (TXNG)

> **Hứa Mạnh Tuyển**

---

## A. Phát hiện Hàng hóa Bị Chuyển Hướng Bất thường (Diversion Detection)

### Bài toán là gì?

Trong chuỗi cung ứng (supply chain), hàng hóa thường phải đi theo một tuyến đường đã được xác định trước.


**Ví dụ:**

```
Nhà máy -> Kho trung chuyển -> Nhà phân phối -> Bệnh viện
```

Tuy nhiên, trên thực tế có thể xảy ra:

- Hàng bị bán lậu
- Hàng bị tuồn ra ngoài
- Hàng bị chuyển sang thị trường khác
- Hàng giả chen vào chuỗi phân phối

Hệ thống **TXNG** ghi nhận toàn bộ:

| Thông tin | Mô tả |
|-----------|-------|
| Thời gian | Timestamp của sự kiện |
| Địa điểm | Vị trí quét/ghi nhận |
| Đơn vị quét | Thiết bị/người thực hiện |
| Mã sản phẩm | Product ID |
| Mã lô | Batch/Lot number |
| Serial number | Mã định danh duy nhất |

### AI có thể học từ:

- Tuyến vận chuyển bình thường
- Thời gian giao hàng bình thường
- Hành vi quét thông thường

-> **Mục tiêu:** Phát hiện bất thường (Anomaly Detection)

### Ứng dụng AI có thể làm được gì?

AI có thể:

- Phát hiện tuyến đường bất thường
- Phát hiện điểm trung chuyển lạ
- Phát hiện hành vi phân phối đáng ngờ
- Cảnh báo nguy cơ hàng giả hoặc hàng bị tuồn

### Đầu ra (Output)

**Ví dụ đầu ra:**

> - **[CẢNH BÁO]** Lô hàng có nguy cơ bị chuyển hướng **92%**
> - **[CẢNH BÁO]** Container đi sai tuyến
> - **[CẢNH BÁO]** Phát hiện điểm quét chưa từng xuất hiện
> - **[CẢNH BÁO]** Serial xuất hiện tại quốc gia/địa điểm không hợp lệ

### Ví dụ 1

**Dữ liệu TXNG - Tuyến bình thường:**

| Thời gian | Địa điểm | Sự kiện |
|-----------|----------|---------|
| 06:00 | Cảng Hải Phòng | Nhập cảng |
| 12:00 | Kho Hà Nội | Trung chuyển |
| 16:00 | Kho Bắc Ninh | Phân phối |

*Đây là tuyến bình thường.*

---

**Trường hợp bất thường:**

| Thời gian | Địa điểm | Sự kiện |
|-----------|----------|---------|
| 06:00 | Cảng Hải Phòng | Nhập cảng |
| 12:00 | Kho Lạng Sơn | Quét RFID |
| 16:00 | Kho Bắc Ninh | Phân phối |

**AI phát hiện:**

- Lạng Sơn **không phải** điểm trung chuyển hợp lệ
- **[CẢNH BÁO]** Nguy cơ hàng bị tuồn qua biên giới: **87%**

### Ví dụ 2

**Dữ liệu serial:**

| Serial | Địa điểm | Thời gian |
|--------|----------|-----------|
| SN001 | Kho Bắc Ninh | 14:00 |
| SN001 | Kho Hải Phòng | 14:15 |

**AI phát hiện:**

- Khoảng cách Bắc Ninh -> Hải Phòng không thể đi trong **15 phút** với xe container
- **[CẢNH BÁO]** Serial bị **trùng lặp** hoặc **sao chép**

**Output:**

> **[CẢNH BÁO]** Serial **SN001** xuất hiện bất thường
---

## B. Giám sát Chuỗi lạnh & Dự đoán Hỏng hóc (Cold Chain Monitoring & Predictive Spoilage)

### Bài toán là gì?

Các sản phẩm như:

- Vaccine
- Sữa
- Thực phẩm đông lạnh
- Thuốc

Phải được bảo quản ở **nhiệt độ nhất định**.

Nếu nhiệt độ vượt ngưỡng quá lâu:

- Chất lượng giảm
- Sản phẩm hỏng
- Mất hiệu lực

**TXNG** có thể lưu:

| Dữ liệu | Mô tả |
|---------|-------|
| Nhiệt độ | Temperature reading |
| Độ ẩm | Humidity level |
| Rung lắc | Vibration/shock |
| GPS | Vị trí địa lý |
| Thời gian | Timestamp |

### AI có thể làm gì?

AI có thể:

- Dự đoán sản phẩm còn sử dụng được bao lâu
- Đánh giá mức độ hỏng
- Cảnh báo sớm
- Tối ưu việc thu hồi

### Đầu ra

**Ví dụ:**

> - Thời hạn sử dụng còn **4 ngày**
> - **[CẢNH BÁO]** Nguy cơ hỏng: **78%**
> - **[CẢNH BÁO]** Container cần kiểm tra ngay

### Ví dụ 1

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

> **[CẢNH BÁO]** Ước tính giảm hiệu lực, giảm tác dụng của vắc xin: **35%**

### Ví dụ 2

**Xe lạnh:**

| Xe | Độ rung | Nhiệt độ |
|----|---------|----------|
| Truck-22 | Cao | 9°C |

**AI dự đoán:**

- Nguy cơ hỏng bao bì **tăng**
- Tuổi thọ sản phẩm giảm **20%**
---

## C. Thu hồi Thông minh (Smart Recall)

### Bài toán là gì?

Khi phát hiện:

- Nhiễm khuẩn
- Lỗi sản xuất
- Sai nhiệt độ

Doanh nghiệp thường phải thu hồi hàng loạt.

**Nhưng thực tế:**

> Không phải tất cả sản phẩm đều bị ảnh hưởng.

### AI có thể làm gì?

AI phân tích:

- Lô hàng (batch/lot)
- Vị trí lưu kho
- Thời gian tiếp xúc
- Container dùng chung
- Nhiệt độ

Để xác định chính xác:

- Pallet nào cần thu hồi
- Pallet nào an toàn

### Đầu ra

**Ví dụ:**

> - **[THU HỒI]** Thu hồi **12 pallet**
> - **[OK]** Không cần thu hồi toàn bộ lô

### Ví dụ 1

**Pallet & Kho lạnh:**

| Pallet | Kho lạnh |
|--------|----------|
| P001 | Zone A |
| P002 | Zone A |
| P003 | Zone B |

**Nhiễm khuẩn chỉ xảy ra tại Zone A.**

**AI kết luận:**

> **[THU HỒI]** Chỉ thu hồi **P001** và **P002**

### Ví dụ 2

**Container & Cảm biến khí ammonia:**

| Container | Cảm biến khí ammonia |
|-----------|----------------|
| C001 | Cao |
| C002 | Bình thường |

**AI xác định:**

> **[KẾT LUẬN]** Nhiễm khuẩn chỉ nằm trong **C001**
---

## D. Phát hiện Hàng giả (Counterfeit Detection)

### Bài toán là gì?

Hàng giả thường:

- Sao chép (clone) serial
- Dùng QR giả
- Giả tuyến phân phối

**TXNG** giúp theo dõi:

- Nguồn gốc
- Chuỗi sở hữu
- Lịch sử quét

### AI có thể làm gì?

AI phát hiện:

- Serial trùng lặp
- Tốc độ di chuyển bất khả thi
- Điểm quét lạ
- Mô hình (quy luật) phân phối bất thường

### Đầu ra

**Ví dụ:**

> **[CẢNH BÁO]** Xác xuất hàng giả (khả năng là hàng giả): **96%**

### Ví dụ 1

**Serial & Địa điểm bán:**

| Serial | Địa điểm bán |
|--------|--------------|
| SN555 | Nhà thuốc A - Hà Nội |
| SN555 | Nhà thuốc B - Đà Nẵng |

**AI phát hiện:**

> **[CẢNH BÁO]** Serial **SN555** xuất hiện tại **2 nhà thuốc** khác nhau -> Khả năng cao là hàng giả

### Ví dụ 2

**Nhà thuốc & Tỷ lệ scan:**

| Nhà thuốc | Tỷ lệ scan |
|-----------|------------|
| A | 20/ngày |
| B | 5000/ngày |

**AI đánh giá:**

> **[CẢNH BÁO]** Nhà thuốc **B** có hành vi **bất thường**
---

## E. Tối ưu Chuỗi cung ứng (Supply Chain Optimization)

### Bài toán là gì?

Doanh nghiệp muốn:

- Giao nhanh hơn
- Giảm tồn kho
- Giảm tắc nghẽn
- Giảm chi phí hậu cần logistics

### AI có thể làm gì?

AI có thể:

- Dự đoán thời gian đến ETA (Estimated Time Arrival)
- Dự đoán độ trễ (delay)
- Tối ưu tuyến đường
- Tối ưu tồn kho

### Đầu ra

**Ví dụ:**

> **[CẢNH BÁO]** Lô hàng sẽ trễ **18 giờ**
> **[ĐỀ XUẤT]** Nên đổi tuyến qua Singapore

### Ví dụ 1

**Tuyến & Delay trung bình:**

| Tuyến | Delay trung bình |
|-------|------------------|
| Cảng Hải Phòng -> Hà Nội | 4h |
| Cảng Hải Phòng -> Bắc Ninh | 2h |

**AI đề xuất:**

> **[ĐỀ XUẤT]** Ưu tiên phân phối qua Bắc Ninh để **giảm tắc nghẽn**

### Ví dụ 2

**Kho & Tồn kho:**

| Kho | Tồn kho |
|-----|---------|
| Hải Phòng | 95% |
| Đà Nẵng | 22% |

**AI đề xuất:**

> **[ĐỀ XUẤT]** Chuyển hàng sang **Đà Nẵng**
---

## F. AI Đồ thị & Đồ thị tri thức Knowledge Graph (Graph AI)

### Bài toán là gì?

Chuỗi cung ứng thực chất là một **mạng lưới quan hệ**:

- Nhà máy
- Container
- Tàu
- Kho
- Nhà phân phối
- Pallet

AI dạng đồ thị (graph) có thể phân tích **toàn bộ mạng lưới** này.

### AI có thể làm gì?

AI có thể:

- Phát hiện trung tâm rủi ro
- Phát hiện đường lây nhiễm
- Phát hiện nhà cung cấp (supplier) nguy hiểm

### Đầu ra

**Ví dụ:**

> **[CẢNH BÁO]** Nhà cung cấp **X** liên quan tới **78%** vụ ô nhiễm

### Ví dụ 1

**Supplier & Số vụ thu hồi:**

| Supplier | Số vụ thu hồi |
|----------|-----------|
| S001 | 15 |
| S002 | 1 |

**AI đánh giá:**

> **[CẢNH BÁO]** Nhà cung cấp **S001** có điểm rủi ro rất cao

### Ví dụ 2

**Graph phát hiện:**

> **[CẢNH BÁO]** **90%** lô lỗi đều đi qua **Warehouse-WH7**

**AI cảnh báo:**

> **[CẢNH BÁO]** Kho **WH7** có nguy cơ ô nhiễm
---

## G. AI Agent & LLM cho Truy vấn Chuỗi cung ứng

### Bài toán là gì?

Dữ liệu TXNG thường:

- Rất lớn
- Khó truy vấn
- Nhiều event

Người dùng **không biết** viết query kỹ thuật.

### AI có thể làm gì?

**LLM** có thể:

- Hiểu tiếng người
- Chuyển thành TXNG query
- Tóm tắt chuỗi sự kiện
- Giải thích bất thường

### Đầu ra

**Ví dụ:**

> Container đang ở Hải Phòng
> **[CẢNH BÁO]** 3 lô hàng có nguy cơ cao

### Ví dụ 1

**Người dùng hỏi:**

> "Lô vaccine ABC hiện ở đâu?"

**AI:**

1. Query TXNG
2. Trả về:
   - Kho Hải Phòng
   - Cập nhật 12 phút trước

### Ví dụ 2

**Người dùng hỏi:**

> "Container nào có nhiệt độ nguy hiểm trong 24 giờ qua?"

**AI:**

1. Lọc sự kiện của cảm biến (sensor events)
2. Trả về danh sách container rủi ro
---

## H. Sinh Dữ liệu Mô phỏng (Synthetic Data Generation)

### Bài toán là gì?

Dữ liệu chuỗi cung ứng (supply-chain) thật:

- Khó xin
- Nhạy cảm
- Thiếu trường hợp lỗi

### AI có thể làm gì?

AI tạo:

- Dữ liệu TXNG giả lập
- Mô phỏng tấn công
- Mô phỏng nhiễm bẩn, nhiễm khuẩn, lây nhiễm, ô nhiễm
- Mô phỏng logistics

### Đầu ra

**Ví dụ:**

> 10 triệu TXNG events giả lập

### Ví dụ 1

**AI tạo:**

- 1000 container
- 5% bị delay
- 2% bị mất nhiệt độ

-> Để train **anomaly model**.

### Ví dụ 2

**AI mô phỏng:**

- Hacker sao chép serial RFID

-> Để test hệ thống **chống hàng giả**.

---

## I. Một số tình huống khác dùng AI & IoT tại biên

### Bài toán là gì?

Một số quyết định phải xử lý **ngay tại biên**:

- Kho
- Gateway
- RFID reader
- Camera edge

-> **Không thể** chờ cloud xử lý.

### AI có thể làm gì?

AI chạy trực tiếp trên **device cục bộ**:

- Phát hiện nhiệt độ bất thường
- Phát hiện pallet sai vị trí
- Nhận diện container mở trái phép

### Đầu ra

**Ví dụ:**

> **[CẢNH BÁO]** Cảnh báo tại kho số 4
> **[CẢNH BÁO]** Pallet sai tuyến

### Ví dụ 1

**Camera AI tại biên phát hiện:**

- Pallet đi vào khu vực cấm

**Output:**

> Bật còi cảnh báo **realtime**

### Ví dụ 2

**RFID reader phát hiện:**

- Pallet xuất hiện sai cửa bốc dỡ (dock)

**AI:**

> Chặn xuất kho **tự động**
---

## J. AI cho đánh giá Bền vững & Phát thải Carbon

### Bài toán là gì?

Doanh nghiệp ngày càng phải báo cáo:

- Phát thải CO2
- Sự bền vững
- Đánh giá sự bền vững theo tiêu chí ESG (môi trường, xã hội, quản trị)

### AI có thể làm gì?

AI tính:

- CO2 theo lô hàng
- Phát thải theo nhà cung cấp
- Tuyến vận chuyển tối ưu carbon

### Đầu ra

**Ví dụ:**

> Lô hàng tạo ra **1.8 tấn CO2**
> **[ĐỀ XUẤT]** Đổi tuyến giúp giảm **22%** phát thải

### Ví dụ 1

**Tuyến & CO2:**

| Tuyến | CO2 |
|-------|-----|
| Air freight | 4.2 tấn |
| Sea freight | 1.1 tấn |

**AI đề xuất:**

> **[ĐỀ XUẤT]** Chuyển sang **sea freight**

### Ví dụ 2

**Supplier & ESG score:**

| Supplier | ESG score |
|----------|-----------|
| S001 | 92 |
| S002 | 41 |

**AI khuyến nghị:**

> **[ĐỀ XUẤT]** Ưu tiên nhà cung cấp **S001** trong đấu thầu.