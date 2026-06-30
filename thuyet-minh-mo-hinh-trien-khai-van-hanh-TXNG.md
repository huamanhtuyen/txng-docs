# THUYẾT MINH MÔ HÌNH TRIỂN KHAI VÀ VẬN HÀNH  
## Hệ Thống Truy Xuất Nguồn Gốc Hàng Hóa Quốc Gia (VeriGoods++)  
### Sau khi Go-live

> **Căn cứ tài liệu dự án tại:** `/Users/beeng/PROJECTS/TXNG/docs/du-an/`  
> **Ngày tổng hợp:** 30/06/2026

---

## 1. TỔNG QUAN MÔ HÌNH VẬN HÀNH SAU GO-LIVE

Hệ thống **VeriGoods++** (kế thừa và nâng cấp từ VeriGoods) là nền tảng truy xuất nguồn gốc hàng hóa quốc gia do **Bộ Công Thương – Cục Quản lý và Phát triển Thị trường trong nước (CQL&PTTTTN)** làm chủ đầu tư và vận hành. Hệ thống được triển khai theo mô hình tập trung, tuân thủ chuẩn **EPCIS 2.0 (ISO/IEC 19987:2024)**, tích hợp với Nền tảng định danh quốc gia của Bộ Công an (C12/NDOP).

**Lộ trình triển khai:**

| Giai đoạn | Thời gian | Quy mô |
|-----------|-----------|--------|
| GĐ 1 – Thí điểm | 2026 (Quý III) | 20–50 DN pilot, hàng hóa rủi ro cao |
| GĐ 2 – Mở rộng | 2027–2028 | 200–500 DN, rủi ro trung bình |
| GĐ 3 – Toàn quốc | 2029+ | 2.000+ DN, toàn bộ nhóm BCT |

---

## 2. VAI TRÒ CỦA CỤC QUẢN LÝ VÀ PHÁT TRIỂN THỊ TRƯỜNG TRONG NƯỚC (CQL&PTTTTN)

Cục CQL&PTTTTN là **cơ quan chủ quản, vận hành và giám sát** toàn bộ hệ thống sau go-live, với các vai trò cụ thể:

### 2.1 Vai trò quản lý nhà nước
- **Chủ đầu tư** (Investor): Toàn quyền quản lý, khai thác hệ thống VeriGoods++ từ giai đoạn chuẩn bị đến vận hành.
- **Cơ quan quản lý truy xuất nguồn gốc** (Registry Authority): Xây dựng, ban hành và hướng dẫn thực hiện các quy định về truy xuất nguồn gốc theo Thông tư BCT.
- **Đơn vị thẩm định và phê duyệt**: Thẩm định hồ sơ doanh nghiệp, phê duyệt đăng ký sản phẩm trên hệ thống.

### 2.2 Vai trò vận hành hệ thống kỹ thuật
- Chủ trì **xây dựng, quản lý, vận hành và phát triển** Hệ thống truy xuất nguồn gốc hàng hóa của Bộ Công Thương (verigoods.vn).
- Đảm bảo **liên thông, đồng bộ dữ liệu** với Cổng thông tin truy xuất nguồn gốc sản phẩm, hàng hóa Quốc gia.
- Duy trì **hạ tầng Data Center chính tại Hà Nội** và **DR site tại TP. Hồ Chí Minh** với SLA ≥ 99,9%.
- Quản lý kết nối với **Nền tảng NDOP + AgentNode** của Bộ Công an (BCA/C12) để cấp và đồng bộ mã UID/DID sản phẩm.

### 2.3 Vai trò giám sát thị trường
- **Hậu kiểm** thông qua Cán bộ Quản lý thị trường (QLTT): Phát hiện vi phạm, điều tra, xử lý qua các module Risk Engine, Dashboard QLTT, vi phạm & thu hồi.
- **Tạm dừng / hủy hiển thị** mã truy xuất nguồn gốc trên hệ thống khi phát hiện vi phạm.
- **Phát lệnh thu hồi** sản phẩm, gán trạng thái thu hồi theo lô/serial.
- **Cảnh báo sớm** (Real-time Alert) khi phát hiện điểm bất thường trong chuỗi cung ứng.
- Phối hợp với Hải quan, Thuế, Sàn TMĐT qua LGSP/NGSP để kiểm tra liên ngành.

### 2.4 Vai trò hỗ trợ và đào tạo
- Tổ chức **hướng dẫn, hỗ trợ kỹ thuật** cho thương nhân và các đơn vị liên quan trong việc sử dụng hệ thống.
- Tổ chức **tuyên truyền, phổ biến pháp luật**, nâng cao nhận thức về TXNG.
- Định kỳ **tổng hợp, đánh giá** tình hình thực hiện và đề xuất cải tiến.
- Xây dựng và triển khai **Chương trình hỗ trợ thương nhân** thực hiện TXNG.

> **Căn cứ pháp lý:** Điều 15, Dự thảo Thông tư BCT; Điều 12, Quyển 1 BCNCKT.

---

## 3. VAI TRÒ ĐẠI LÝ DỊCH VỤ TXNG

### 3.1 Khái niệm và định nghĩa
**Đại lý Dịch vụ TXNG** là mô hình trung gian được nghiên cứu, tương tự mô hình **đại lý thuế** (thay DN kê khai thuế) hay **đại lý hải quan** (thay DN làm thủ tục thông quan). Đây là đơn vị được Bộ Công Thương cấp phép, hỗ trợ doanh nghiệp triển khai truy xuất nguồn gốc từ đầu đến cuối.

### 3.2 Phạm vi dịch vụ của Đại lý
| Dịch vụ | Mô tả |
|---------|-------|
| **Onboarding** | Tư vấn, hướng dẫn thiết lập hồ sơ DN, đăng ký sản phẩm trên hệ thống |
| **Nhập liệu** | Cập nhật dữ liệu sản phẩm, lô sản xuất, sự kiện EPCIS thay DN |
| **Tích hợp kỹ thuật** | Kết nối API giữa hệ thống nội bộ của DN với VeriGoods++ |
| **Thiết bị IoT** | Lắp đặt thiết bị scan mã, IoT tại hiện trường sản xuất |
| **In tem/nhãn** | Hỗ trợ in mã QR GS1 Digital Link, tem nhãn đúng chuẩn |
| **Giám sát** | Cảnh báo khi có sự cố dữ liệu, lỗi khai báo |
| **Đại diện pháp lý** | Làm việc với cơ quan quản lý khi có yêu cầu hậu kiểm |
| **Báo cáo tuân thủ** | Báo cáo định kỳ tình trạng tuân thủ TXNG cho lãnh đạo DN |

### 3.3 Mô hình tham gia vào hệ thống
Thương nhân có **3 phương thức** để tham gia hệ thống:
1. **Tự kết nối trực tiếp** – Dùng portal VeriGoods++, tự thao tác (nhập liệu trực tiếp hoặc upload file).
2. **Tích hợp kỹ thuật** – Xây dựng / mua hệ thống nội bộ riêng, kết nối API vào VeriGoods++.
3. **Qua Đại lý Dịch vụ TXNG** – Thuê đơn vị trung gian được cấp phép thực hiện toàn bộ.

> **Lưu ý:** Mô hình Đại lý đang được nghiên cứu hoàn thiện. Cần ban hành quy định cấp phép và quản lý Đại lý TXNG tương tự cơ chế đại lý thuế điện tử.

---

## 4. VAI TRÒ CỦA CÁC DOANH NGHIỆP TRONG HỆ THỐNG

### 4.1 Phân loại đối tượng doanh nghiệp

| Nhóm | Vai trò trong hệ thống | Nghĩa vụ |
|------|----------------------|----------|
| **Sản xuất** | Ghi nhận sự kiện SX, đóng gói, xuất kho; đăng ký sản phẩm và cấp UID | Bắt buộc (nhóm rủi ro cao) |
| **Nhập khẩu** | Khai báo thêm: tên/địa chỉ đơn vị nhập khẩu, nhà phân phối chính thức | Bắt buộc (nhóm rủi ro cao) |
| **Logistics / Vận chuyển** | Ghi nhận sự kiện xuất kho, vận chuyển, điểm trung chuyển (AggregationEvent) | Theo yêu cầu chuỗi |
| **Phân phối / Đại lý** | Ghi nhận sự kiện nhập kho phân phối, bán lẻ (RetailEvent) | Theo yêu cầu chuỗi |
| **Bán lẻ / Cửa hàng** | Nhập điểm bán, xác nhận bán hàng cuối chuỗi | Khuyến khích |

### 4.2 Trách nhiệm pháp lý của doanh nghiệp
Theo **Điều 13, Dự thảo Thông tư BCT**, doanh nghiệp có các trách nhiệm:

1. Lựa chọn phương thức tham gia (trực tiếp / tích hợp API / qua đại lý).
2. **Thiết lập và vận hành** hệ thống TXNG nội bộ đáp ứng yêu cầu.
3. **Khai báo và cập nhật** thông tin lên VeriGoods++ trước khi đưa sản phẩm vào lưu thông.
4. **Chịu trách nhiệm trước pháp luật** về tính chính xác, đầy đủ, toàn vẹn của dữ liệu.
5. **Lưu trữ dữ liệu** đủ thời gian: ≥12 tháng (hàng có hạn sử dụng) hoặc 60 tháng (hàng không có HSD).
6. **Cung cấp dữ liệu trong 24 tiếng** kể từ khi có yêu cầu của cơ quan có thẩm quyền.
7. **Chịu sự kiểm tra, giám sát** của cơ quan QLNN về TXNG.
8. Gắn mã QR/barcode TXNG **lên sản phẩm hoặc bao bì** theo chuẩn TCVN 13275.

---

## 5. DOANH NGHIỆP CẦN CHUẨN BỊ GÌ KHI THAM GIA HỆ THỐNG?

### 5.1 Chuẩn bị hạ tầng kỹ thuật

| Hạng mục | Mô tả | Phương án |
|----------|-------|-----------|
| **Chữ ký số** | DN phải có chữ ký số để xác thực khai báo | Mua từ CA được cấp phép |
| **Kết nối Internet** | Đường truyền ổn định để truy cập portal hoặc call API | Sẵn có |
| **Hệ thống ERP/Phần mềm quản lý** | Nếu có tích hợp API: cần module TXNG hoặc middleware | Mua/xây dựng thêm |
| **Thiết bị in mã QR** | Máy in tem nhãn đạt chuẩn GS1 Digital Link | Mua mới hoặc thuê |
| **Thiết bị scan** | Máy đọc mã tại nhà xưởng (nếu cần tự động hóa) | Tùy quy mô SX |
| **IoT/Cảm biến** | Cho dây chuyền SX có tốc độ cao (bia, sữa...) | Tùy nhu cầu |

### 5.2 Thay đổi quy trình vận hành

| Quy trình | Thay đổi cần thiết |
|-----------|-------------------|
| **Quy trình sản xuất** | Bổ sung bước: tạo lô SX, gán serial/UID, ghi nhận sự kiện sản xuất (CTE) trên hệ thống |
| **Quy trình đóng gói** | Gắn mã QR GS1 lên bao bì; liên kết mã với lô/serial tương ứng |
| **Quy trình xuất kho** | Ghi nhận sự kiện xuất kho, vận chuyển lên hệ thống trước khi hàng rời kho |
| **Quy trình nhập khẩu** | Khai báo tại cửa khẩu nhập → cập nhật CTE nhập khẩu vào hệ thống |
| **Quy trình bán hàng** | Cho phép tra cứu QR cuối chuỗi; ghi nhận sự kiện bán lẻ (RetailEvent) |
| **Quy trình lưu trữ hồ sơ** | Lưu điện tử, có kiểm soát thay đổi, sẵn sàng xuất dữ liệu theo yêu cầu |

### 5.3 Chuẩn bị nhân lực
- **Đầu mối TXNG**: Bộ phận CNTT hoặc nhân viên được phân công là đầu mối triển khai.
- **Cán bộ vận hành**: Cán bộ nhập liệu, cập nhật sự kiện hàng ngày.
- **Cán bộ tuân thủ**: Kiểm tra, báo cáo tình trạng tuân thủ định kỳ.

> **Lộ trình chuẩn bị của DN (khuyến nghị):** Dưới 3 tháng (DN lớn, có hệ thống ERP) | 3–6 tháng (DN vừa) | 6–12 tháng (DN nhỏ, chưa số hóa).

---

## 6. LÝ DO DOANH NGHIỆP THAM GIA HỆ THỐNG

### 6.1 Lý do bắt buộc (quy định pháp luật)

Theo **Dự thảo Thông tư BCT** (hiệu lực 01/07/2026) và **Nghị định 37/2026/NĐ-CP** (23/01/2026):

- **Bắt buộc** áp dụng đối với sản phẩm, hàng hóa có **mức độ rủi ro cao** thuộc phạm vi quản lý của BCT (Phụ lục II Thông tư BCT), bao gồm: hóa chất, tiền chất công nghiệp, tiền chất thuốc nổ, vật liệu nổ công nghiệp, nguyên liệu thuốc lá, sữa, đồ uống có/không cồn, dầu thực vật...
- **Giai đoạn 1** (từ ngày TT có hiệu lực): DN đăng ký tài khoản, nhận mã định danh sản phẩm.
- **Giai đoạn 2** (từ 01/01/2027): DN thực hiện đầy đủ TXNG trước khi đưa hàng vào lưu thông.
- Hệ thống TXNG nội bộ của DN **phải kết nối với VeriGoods++** (bắt buộc theo Điều 9 Thông tư).
- DN vi phạm sẽ bị: Tạm dừng / Hủy hiển thị thông tin TXNG; bị xử lý vi phạm hành chính theo pháp luật.

### 6.2 Lợi ích mang lại (động lực tự nguyện)

| Lợi ích | Mô tả |
|---------|-------|
| **Chống hàng giả, bảo vệ thương hiệu** | Người tiêu dùng có thể xác thực tính hợp lệ của sản phẩm; ngăn chặn hàng nhái |
| **Tăng niềm tin NTD** | Minh bạch thông tin giúp tăng độ tin cậy, thúc đẩy doanh số |
| **Hỗ trợ xuất khẩu** | Đáp ứng yêu cầu TXNG của EU (EVFTA), Mỹ, Nhật, Trung Quốc; tránh rào cản kỹ thuật |
| **Tích xanh (Green Badge)** | DN tự nguyện được gắn "tích xanh" hiển thị trên sản phẩm, sàn TMĐT, tài liệu |
| **Giảm chi phí thu hồi** | Xác định nhanh lô/serial bị lỗi, thu hồi đúng mục tiêu, giảm thiệt hại |
| **Quảng bá thương hiệu** | BCT tổ chức truyền thông, giới thiệu DN tiêu biểu thực hiện TXNG tốt |
| **Hỗ trợ kỹ thuật ưu tiên** | Được BCT hỗ trợ kỹ thuật, hướng dẫn kết nối, tư vấn miễn phí |
| **Tiếp cận chuỗi phân phối** | Yêu cầu TXNG là điều kiện vào siêu thị, sàn TMĐT, chuỗi phân phối lớn |
| **Tối ưu chuỗi cung ứng** | Dữ liệu sự kiện giúp DN phân tích hiệu quả vận chuyển, tồn kho |

---

## 7. HÀNH LANG PHÁP LÝ CẦN CHUẨN BỊ VÀ BAN HÀNH

### 7.1 Các văn bản đã có / đang trong quá trình ban hành

| Văn bản | Nội dung chính | Tình trạng |
|---------|--------------|------------|
| **Nghị định 37/2026/NĐ-CP** (23/01/2026) | Thi hành Luật Chất lượng SP, HH; quy định TXNG tại Điều 23 | Đã ban hành |
| **Dự thảo Thông tư BCT** | Quy định chi tiết về TXNG SP, HH thuộc phạm vi BCT; lộ trình áp dụng | Dự thảo, hiệu lực 01/07/2026 |
| **Quyết định 400/QĐ-BCT** | Kế hoạch thực hiện nhiệm vụ xây dựng, vận hành hệ thống TXNG | Đã ban hành |
| **Nghị định BCA (C12)** | Quy định về UID/DID/Blockchain Quốc gia; kết nối AgentNode/NDOP | Đã ban hành |

### 7.2 Các quy định cần bổ sung / ban hành sau go-live

#### 7.2.1 Quy định về vận hành hệ thống
- **Quy chế vận hành VeriGoods++**: Ban hành quy chế nội bộ về tổ chức, vận hành, khai thác hệ thống sau go-live.
- **Quy định phân cấp, phân quyền**: Quy định rõ quyền truy cập và trách nhiệm của từng nhóm người dùng (Cục, Sở, DN, QLTT).
- **SLA vận hành**: Cam kết mức độ dịch vụ (uptime, thời gian phản hồi, hỗ trợ kỹ thuật).

#### 7.2.2 Quy định về Đại lý Dịch vụ TXNG
- **Điều kiện cấp phép Đại lý TXNG**: Tiêu chuẩn về năng lực kỹ thuật, nhân lực, tài chính.
- **Quy trình đăng ký, cấp phép và quản lý Đại lý**: Tương tự cơ chế đại lý thuế điện tử.
- **Trách nhiệm pháp lý của Đại lý**: Nghĩa vụ bảo mật dữ liệu, độ chính xác thông tin, trách nhiệm liên đới với DN.
- **Phí dịch vụ và cơ chế định giá**: Khung giá tham chiếu để tránh độc quyền.

#### 7.2.3 Quy định về dữ liệu và kết nối
- **Tiêu chuẩn kỹ thuật kết nối API**: Đặc tả kỹ thuật (API spec), định dạng dữ liệu (EPCIS 2.0, GS1 Digital Link) cho DN tự kết nối.
- **Quy định về bảo mật, an toàn thông tin**: Yêu cầu mã hóa dữ liệu, xác thực, phòng chống tấn công mạng.
- **Chính sách dữ liệu**: Quy định ai được truy cập dữ liệu nào, thời hạn lưu trữ, quyền xóa/chỉnh sửa.
- **Quy định liên thông liên ngành**: Cơ chế kết nối chính thức với Hải quan, Thuế, Sàn TMĐT, Bộ Y tế, Bộ NN&PTNT.

#### 7.2.4 Quy định về chế tài và xử phạt
- **Mức xử phạt vi phạm TXNG**: Quy định mức phạt cụ thể cho hành vi không khai báo, khai báo sai, không kết nối hệ thống.
- **Thủ tục tạm dừng / thu hồi mã TXNG**: Quy trình rõ ràng đảm bảo quyền giải trình của DN.
- **Cơ chế khiếu nại, tố cáo**: Cơ chế để NTD, DN phản ánh vi phạm và được xử lý.

#### 7.2.5 Quy định hỗ trợ DN tham gia
- **Chương trình hỗ trợ tài chính / kỹ thuật**: Có thể xem xét hỗ trợ chi phí triển khai cho DNNVV trong giai đoạn đầu.
- **Chính sách ưu đãi**: DN tham gia sớm, tự nguyện được ưu đãi về phí, về tích xanh, về quảng bá.

### 7.3 Cơ quan phối hợp ban hành

| Cơ quan | Trách nhiệm phối hợp |
|---------|---------------------|
| **Bộ Công Thương (CQL&PTTTTN)** | Chủ trì toàn bộ khung pháp lý TXNG thuộc BCT |
| **Bộ Công an (C12)** | Quy định về UID/DID, kết nối AgentNode/NDOP, Blockchain QG |
| **Bộ Tư pháp** | Kiểm tra văn bản quy phạm pháp luật |
| **Bộ TT&TT** | Tiêu chuẩn kỹ thuật, an toàn thông tin, hạ tầng số |
| **UBND tỉnh/thành phố** | Tổ chức triển khai tại địa phương, xử lý vi phạm |
| **Sở Công Thương** | Hướng dẫn, tuyên truyền, phổ biến cho DN địa phương |

---

## 8. MÔ HÌNH TỔNG THỂ CÁC BÊN THAM GIA (ECOSYSTEM)

```
┌─────────────────────────────────────────────────────────────────┐
│              BỘ CÔNG AN (C12 / NDOP)                           │
│         Cấp UID/DID · Blockchain QG · PKI                      │
│              ↕ AgentNode (MPLS/TSLCD)                          │
├─────────────────────────────────────────────────────────────────┤
│         BỘ CÔNG THƯƠNG – CỤC CQL&PTTTTN                       │
│         VeriGoods++ · Quản lý · Vận hành · Giám sát           │
│    ┌───────────────┬──────────────────┬───────────────────┐    │
│    │  Portal Web   │   API Gateway    │  Dashboard QLTT   │    │
│    └───────┬───────┴────────┬─────────┴─────────┬─────────┘    │
├────────────┼────────────────┼───────────────────┼──────────────┤
│    DOANH NGHIỆP             │             LIÊN NGÀNH           │
│  ┌──────────────────┐       │         ┌──────────────────────┐ │
│  │ Tự kết nối       │       │         │ Hải quan · Thuế      │ │
│  │ portal/upload    │       │         │ Sàn TMĐT             │ │
│  ├──────────────────┤       │         │ Bộ Y tế / NN&PTNT   │ │
│  │ Tích hợp API     │       │         └──────────────────────┘ │
│  │ (hệ thống nội bộ)│       │                                  │
│  ├──────────────────┤  LGSP/NGSP                              │
│  │ Qua Đại lý TXNG  │                                          │
│  └──────────────────┘                                          │
│    SX · NK · Logistics · Phân phối · Bán lẻ                   │
├─────────────────────────────────────────────────────────────────┤
│                NGƯỜI TIÊU DÙNG                                 │
│         Scan QR · Tra cứu · Phản ánh vi phạm                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. CÁC CHỈ TIÊU VẬN HÀNH SAU GO-LIVE

| Chỉ tiêu | Mục tiêu |
|----------|----------|
| Uptime hệ thống | ≥ 99,9% |
| Thời gian scan QR → kết quả | < 2 giây |
| Cung cấp dữ liệu cho cơ quan QL | ≤ 24 giờ (đơn giản) |
| Chi phí vận hành | Trích từ nguồn chi thường xuyên của Cục |
| Hoạt động vận hành | Thuê dịch vụ vận hành chuyên nghiệp sau go-live |
| RTO / RPO | ≤ 1 giờ / ≤ 15 phút |

---

## 10. CÁC VẤN ĐỀ CHƯA CÓ ĐỦ THÔNG TIN – CẦN NGHIÊN CỨU BỔ SUNG

> [!IMPORTANT]  
> Các nội dung sau đây chưa được làm rõ hoàn toàn trong tài liệu hiện có tại dự án. Cần bổ sung thêm để hoàn chỉnh thuyết minh.

| Vấn đề cần làm rõ | Trạng thái |
|-------------------|------------|
| Mô hình cụ thể về cấp phép và quản lý Đại lý TXNG | Đang nghiên cứu |
| Chi phí vận hành chi tiết hàng năm sau go-live | Chưa có số liệu cụ thể |
| Cơ chế tài chính hỗ trợ DN vừa và nhỏ tham gia | Chưa được quy định |
| Khung xử phạt vi phạm TXNG (mức phạt cụ thể) | Chờ ban hành Nghị định xử phạt |
| Tích hợp với Sàn TMĐT (Shopee, Lazada, Tiki) | Kế hoạch GĐ 2–3 |
| Cơ chế thanh toán phí dịch vụ (nếu có) của VeriGoods++ | Chưa đề cập |

---

*Tài liệu được tổng hợp từ: [BCNCKT Quyển 1](file:///Users/beeng/PROJECTS/TXNG/docs/du-an/1.BCNCKT-TXNG-Quyen%201-Thuyet%20minh%20chung-050526.md) · [Dự thảo Thông tư BCT](file:///Users/beeng/PROJECTS/TXNG/docs/du-an/03-5-2026%20D%E1%BB%B1%20th%E1%BA%A3o%20Th%C3%B4ng%20t%C6%B0.md) · [Giải pháp tổng thể kỹ thuật](file:///Users/beeng/PROJECTS/TXNG/docs/du-an/GiaiPhapTongThe_KyThuat.md) · [Nội dung khảo sát đề xuất](file:///Users/beeng/PROJECTS/TXNG/docs/du-an/noi-dung-khao-sat-de-xuat.md) · [BCNCKT Quyển 1 bản Jun5](file:///Users/beeng/PROJECTS/TXNG/docs/du-an/ghep2/1.BCNCKT-TXNG-Quyen%201-Thuyet%20minh%20chung-Jun5.md)*
