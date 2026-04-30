# QR Code & RFID

Hai công nghệ nhận dạng chính được sử dụng trong hệ thống TXNG để kết nối sản phẩm vật lý với dữ liệu số.

## QR Code

### Cấu trúc QR Code TXNG

Mỗi QR Code TXNG chứa URL có cấu trúc:

```
https://trace.txng.vn/{product-id}?batch={batch-id}&verify={hash}
```

Ví dụ:
```
https://trace.txng.vn/PROD-2024-001?batch=B2024-0115&verify=7d3a8f2e
```

Khi quét:
1. Người dùng quét bằng camera điện thoại
2. Trình duyệt mở trang tra cứu
3. Hệ thống truy vấn blockchain
4. Hiển thị toàn bộ hành trình sản phẩm

### Thông số kỹ thuật

| Thông số | Giá trị |
|---------|--------|
| Phiên bản QR | 7+ |
| Mức sửa lỗi | H (30%) |
| Kích thước tối thiểu in | 2cm × 2cm |
| Encoding | UTF-8 |
| Màu sắc | Đen trắng hoặc màu có contrast cao |

### Tích hợp QR Code vào ứng dụng

```javascript
import { TXNGClient } from '@txng/sdk';

const client = new TXNGClient({ apiKey: 'YOUR_API_KEY' });

// Sinh QR Code cho sản phẩm
const qrCode = await client.generateQR({
  productId: 'PROD-2024-001',
  batchId: 'BATCH-0115',
  format: 'PNG',    // 'PNG' | 'SVG' | 'PDF'
  size: 300,        // pixels
  errorCorrection: 'H'
});

// Lưu file
fs.writeFileSync('product-qr.png', qrCode.buffer);
```

## RFID (Radio-Frequency Identification)

### Ứng dụng trong TXNG

RFID phù hợp cho:
- 📦 Quản lý kho tự động (không cần scan thủ công)
- 🚛 Theo dõi container/pallet vận chuyển
- 🏭 Dây chuyền sản xuất tốc độ cao
- ❄️ Kho lạnh (tay đeo găng không cần scan)

### Loại RFID trong TXNG

| Loại | Tần số | Khoảng cách | Ứng dụng |
|------|--------|------------|---------|
| **LF (Low Frequency)** | 125-134 kHz | < 10cm | Gia súc, vật nuôi |
| **HF (High Frequency)** | 13.56 MHz | < 1m | Thẻ thông minh |
| **UHF (Ultra High Frequency)** | 860-960 MHz | 1-12m | Logistics, kho hàng |
| **Microwave** | 2.45 GHz | > 10m | Đặc thù, xe cộ |

### Chuẩn EPC Gen2 (ISO 18000-6C)

TXNG sử dụng chuẩn **EPCglobal Gen 2** cho RFID:

```
EPC (Electronic Product Code) structure:
┌──────────┬──────────┬──────────────┬──────────────┐
│  Header  │  Filter  │  Company     │  Item + Serial│
│  8 bits  │  3 bits  │  20-40 bits  │  Variable    │
└──────────┴──────────┴──────────────┴──────────────┘

Ví dụ: urn:epc:id:sgtin:8935001.123456.SERIAL001
```

### Reader/Writer API

```python
from txng_sdk import RFIDManager

rfid = RFIDManager(reader_host='192.168.1.100', reader_port=5084)

# Đọc tags trong vùng phủ sóng
tags = rfid.scan(timeout_ms=500)

for tag in tags:
    print(f"EPC: {tag.epc}")
    
    # Ghi sự kiện TXNG
    rfid.record_event(
        epc=tag.epc,
        event_type='RECEIVE',
        location='Kho Hà Nội - Cổng A',
        timestamp=datetime.now()
    )
```

## So sánh QR Code vs RFID

| Tiêu chí | QR Code | RFID |
|---------|---------|------|
| Chi phí | Rất thấp (in ấn) | Cao hơn (thẻ chip) |
| Đọc hàng loạt | ❌ Cần scan từng cái | ✅ Đọc nhiều cùng lúc |
| Người tiêu dùng scan | ✅ Dùng camera phone | ❌ Cần thiết bị đặc biệt |
| Chịu môi trường | Tốt (chống nước nếu laminate) | Rất tốt |
| Khoảng cách đọc | Cần nhìn thấy | Xuyên vật liệu |
| **Khuyến nghị** | Sản phẩm lẻ, B2C | Pallet, container, B2B |

::: tip Chiến lược kết hợp
Dùng **QR Code** cho người tiêu dùng tra cứu sản phẩm, kết hợp **RFID UHF** cho quản lý logistics và kho hàng tự động. Cả hai đều liên kết cùng một hồ sơ blockchain.
:::
