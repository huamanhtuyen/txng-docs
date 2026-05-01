# UID/DID TXNG — Nội dung sơ đồ tổng quan

> Nguồn: `docs/du-an/UIDDID TXNG.png`

---

## 1. Về phía Doanh nghiệp: Từ nhập sản phẩm – Dán nhãn – Đến thị trường

**Quy trình chính & cách doanh nghiệp theo dõi TXNG của chính mình**

### Quy trình 7 bước

| Bước | Tên bước | Nội dung chi tiết |
|------|----------|-------------------|
| 1 | **Nhập nguyên liệu / Sản xuất** | - Nhập nguyên liệu<br>- Kiểm tra – QC đầu vào<br>- Tạo lô sản xuất (Batch/LOT) |
| 2 | **Sản xuất / Chế biến** | - Ghi nhận quá trình sản xuất<br>- Kiểm soát công đoạn<br>- Kiểm tra – QC từng công đoạn |
| 3 | **Đóng gói / Tạo đơn vị sản phẩm** | - Đóng gói sản phẩm<br>- Tạo đơn vị sản phẩm (SKU/Serial)<br>- Gắn dữ liệu TXNG |
| 4 | **In & Dán nhãn TXNG** | - In nhãn TXNG (QR/UID)<br>- Mã hóa – ký số – chống giả<br>- Dán nhãn lên sản phẩm |
| 5 | **Nhập kho / Xuất kho** | - Nhập kho thành phẩm<br>- Quản lý tồn kho<br>- Xuất kho theo lô/đơn hàng |
| 6 | **Phân phối / Bán hàng** | - Phân phối đến NPP/Đại lý<br>- Bán hàng / Giao hàng<br>- Ghi nhận điểm bán |
| 7 | **Ra thị trường** | - Sản phẩm đến tay người tiêu dùng (End User) |

> **Lưu ý:** Tất cả các bước đều có **Ghi nhận TXNG**.

### Dữ liệu & Hạ tầng

> **Tất cả dữ liệu được ghi nhận lên nền tảng TXNG (CSDL + Blockchain) – Không thể sửa đổi**

### Cách doanh nghiệp theo dõi TXNG của chính mình (Trên Web Portal)

| Tính năng | Mô tả |
|-----------|-------|
| Dashboard tổng quan | Sản lượng, tồn kho, phân phối |
| Theo dõi theo lô/serial/UID | Hành trình chi tiết |
| Báo cáo & thống kê | Sản xuất, phân phối, bán hàng |
| Cảnh báo bất thường | Tem đã quét nhiều lần, khu vực lạ |
| Quản lý đối tác | NPP, đại lý, điểm bán |
| Xuất dữ liệu / Tích hợp API | ERP, CRM, Kế toán... |

### Công nghệ sử dụng

- Mã QR / UID duy nhất
- Ký số & mã hóa dữ liệu
- Blockchain (NDAChain)
- Lưu trữ CSDL & Backup
- Kết nối C12 / GS1 (EPCIS)

---

## 2. Về phía Người tiêu dùng / End User: Cài App – Quét mã – Kiểm tra TXNG (Thật / Giả)

### Quy trình 6 bước

| Bước | Tên bước | Nội dung chi tiết |
|------|----------|-------------------|
| 1 | **Tải & Cài đặt App** | - Tải App "VeriGoods" (iOS / Android)<br>- Đăng ký / Đăng nhập |
| 2 | **Quét mã sản phẩm** | - Mở App<br>- Quét mã QR trên sản phẩm |
| 3 | **Kiểm tra & Xử lý** | - App gửi yêu cầu đến hệ thống TXNG<br>- Đối chiếu dữ liệu (CSDL + Blockchain) |
| 4 | **Hiển thị kết quả** | - **Thật:** Hiển thị thông tin chi tiết hành trình sản phẩm<br>- **Giả / Không hợp lệ:** Cảnh báo đỏ |
| 5 | **Theo dõi chi tiết** | - Xem hành trình TXNG (từ nguyên liệu → điểm bán)<br>- Xem giấy chứng nhận, kiểm định, hình ảnh... |
| 6 | **Phản hồi / Báo cáo** | - Báo cáo nghi ngờ giả hoặc sản phẩm bất thường<br>- Gửi phản hồi cho DN và cơ quan chức năng |

### Kết quả kiểm tra

#### ✅ Kết quả: Thật / Hợp lệ
- Thông tin sản phẩm đầy đủ
- Nguồn gốc rõ ràng
- Hành trình minh bạch

#### ⚠️ Kết quả: Giả / Không hợp lệ
- Không có dữ liệu / Dữ liệu không khớp
- Mã đã bị báo cáo giả
- Cảnh báo người dùng không sử dụng

### Lợi ích đối với người tiêu dùng

- Xác thực nhanh (1 lần quét)
- An tâm về nguồn gốc & chất lượng
- Bảo vệ sức khỏe & quyền lợi
- Góp phần chống hàng giả, bảo vệ thương hiệu VN

### Màn hình App VeriGoods — Hành trình sản phẩm

**Sản phẩm chính hãng** — Hành trình sản phẩm:
- ✅ Sản xuất
- ✅ Đóng gói
- ✅ Nhập kho
- ✅ Phân phối
- ✅ Điểm bán
- ✅ Người tiêu dùng

---

## 3. In nhãn giả & Cách phòng chống

### A. Kịch bản in nhãn giả

| Bước | Mô tả |
|------|-------|
| 1. Lấy mã hợp lệ | Kẻ gian lấy hình ảnh mã QR hợp lệ từ sản phẩm thật |
| 2. In nhãn giả | In nhãn giả giống hệt nhãn thật |
| 3. Dán lên hàng giả | Dán nhãn giả lên sản phẩm kém chất lượng |
| 4. Đưa ra thị trường | Bán ra thị trường như hàng thật |
| 5. Người dùng quét | Người dùng quét mã → có thể vẫn hiển thị "THẬT" (nếu hệ thống không kiểm soát) |

### B. Cách phòng chống (Công nghệ & Quản trị)

| Cơ chế | Mô tả |
|--------|-------|
| **Mã duy nhất & ngẫu nhiên** | Mỗi sản phẩm 1 UID duy nhất, không thể đoán/duplicate |
| **Ký số & Mã hóa** | Dữ liệu được ký số bởi DN, không thể sửa đổi |
| **Xác thực 2 lớp** | Kiểm tra trên CSDL + Blockchain |
| **Giới hạn số lần quét** | Mỗi mã chỉ quét 1 lần đầu tiên ở mỗi địa điểm/thiết bị |
| **Cảnh báo bất thường** | Phát hiện quét nhiều lần, ở vị trí lạ, thời gian bất thường |
| **Quản trị chuỗi cung ứng** | Kiểm soát chặt từ sản xuất → phân phối → điểm bán |

### C. Xử lý khi phát hiện nhãn giả

- Cảnh báo người dùng ngay lập tức
- Ghi nhận bằng chứng (thời gian, vị trí, thiết bị)
- Thông báo cho doanh nghiệp
- Chuyển thông tin đến cơ quan chức năng
- Hỗ trợ truy vết nguồn gốc hàng giả

---

## Nền tảng hỗ trợ

> **CSDL Tập trung + Blockchain (NDAChain) + Kết nối C12/GS1 + Chữ ký số + AI phát hiện bất thường**
