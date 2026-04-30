# Tiêu chuẩn quốc tế

Hệ thống TXNG tuân thủ và tích hợp đầy đủ các tiêu chuẩn quốc tế về truy xuất nguồn gốc.

## GS1 — Tổ chức tiêu chuẩn toàn cầu

**GS1** là tổ chức phi lợi nhuận phát triển các tiêu chuẩn định danh và chia sẻ thông tin hàng hóa được sử dụng tại 150+ quốc gia.

### Các tiêu chuẩn GS1 trong TXNG

| Tiêu chuẩn | Tên đầy đủ | Ứng dụng |
|-----------|-----------|---------|
| **GTIN** | Global Trade Item Number | Định danh duy nhất cho sản phẩm |
| **GLN** | Global Location Number | Định danh địa điểm |
| **SSCC** | Serial Shipping Container Code | Định danh pallet/container |
| **GS1-128** | GS1 Application Identifiers | Mã vạch trên thùng hàng |
| **GS1 QR** | GS1 Digital Link | QR Code chuẩn GS1 |
| **EPCIS 2.0** | Electronic Product Code Info Services | Chia sẻ sự kiện chuỗi cung ứng |

## ISO Standards

### ISO 22005:2007 — Truy xuất nguồn gốc thực phẩm

Tiêu chuẩn quốc tế cốt lõi cho TXNG trong ngành thực phẩm:

> *"Truy xuất nguồn gốc là công cụ hỗ trợ mục tiêu cụ thể trong hệ thống thực phẩm, như xác minh thông tin, thu hồi và rút sản phẩm, và xác định trách nhiệm."*

**Yêu cầu chính:**
- Định danh duy nhất cho mỗi lô sản phẩm
- Tài liệu hóa đầy đủ các khâu chế biến
- Khả năng thu hồi chính xác trong vòng 4 giờ
- Lưu trữ hồ sơ tối thiểu theo quy định

### ISO 9001:2015 — Quản lý chất lượng

Tích hợp TXNG với hệ thống quản lý chất lượng ISO 9001.

### ISO/IEC 15963 — Tiêu chuẩn RFID

Quy định giao thức và định dạng cho thẻ RFID dùng trong logistics.

## Chuẩn thực phẩm quốc tế

### Codex Alimentarius (CAC/GL 60-2006)

Hướng dẫn của WHO/FAO về thiết lập và vận hành hệ thống truy xuất nguồn gốc thực phẩm:

1. **One-step-back, one-step-forward** — Mỗi tác nhân cần biết mình nhận hàng từ đâu và giao đi đâu
2. **Batch identification** — Mỗi lô phải có định danh duy nhất
3. **Record keeping** — Hồ sơ lưu trong thời gian tối thiểu 2× thời hạn sử dụng

### GlobalGAP (Thực hành Nông nghiệp Tốt)

Chứng nhận GlobalGAP yêu cầu:

```
✅ Ghi chép đầy đủ: phân bón, thuốc BVTV
✅ Theo dõi nguồn nước tưới
✅ Vệ sinh dụng cụ, thiết bị
✅ Truy xuất được đến từng thửa vườn
✅ Lưu trữ hồ sơ tối thiểu 2 năm
```

### VietGAP — Phiên bản Việt Nam

Tương đương GlobalGAP được điều chỉnh cho điều kiện Việt Nam, ban hành bởi Bộ NN&PTNT.

## Yêu cầu xuất khẩu

### Thị trường EU (EVFTA)

Từ 2025, EU yêu cầu:
- TXNG bắt buộc cho nông sản, thủy sản
- Tuân thủ EU Deforestation Regulation (EUDR)
- Dữ liệu địa lý tọa độ GPS
- Chứng nhận bởi bên thứ ba độc lập

### Thị trường Nhật Bản

- **JAS (Japanese Agricultural Standard)** — Tiêu chuẩn nông sản Nhật
- Ghi nhãn bắt buộc: nước xuất xứ, phương thức canh tác
- Kiểm tra dư lượng hóa chất nghiêm ngặt (Positive List System)

### Thị trường Mỹ (FDA FSMA)

- **FSMA Rule 204** — Hồ sơ truy xuất bổ sung cho thực phẩm nguy cơ cao
- Yêu cầu lưu giữ dữ liệu Key Data Elements (KDEs)
- Khả năng cung cấp cho FDA trong vòng 24 giờ khi có yêu cầu
