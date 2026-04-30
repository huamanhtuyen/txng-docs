# Kiến trúc hệ thống

Hệ thống TXNG được thiết kế theo kiến trúc microservices, đảm bảo khả năng mở rộng, bảo mật và hiệu năng cao.

## Tổng quan kiến trúc

```
┌─────────────────────────────────────────────────────────┐
│                    NGƯỜI DÙNG CUỐI                       │
│    [Web Portal]  [Mobile App]  [API Client]  [QR Scan]   │
└────────────────────────┬────────────────────────────────┘
                         │ HTTPS
┌────────────────────────▼────────────────────────────────┐
│                   API GATEWAY                            │
│          Auth / Rate Limiting / Load Balancing           │
└──────┬──────────────┬───────────────┬───────────────────┘
       │              │               │
┌──────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
│  Product    │ │  Supply   │ │   Event     │
│  Service   │ │  Chain    │ │   Service   │
│            │ │  Service  │ │             │
└──────┬──────┘ └─────┬─────┘ └──────┬──────┘
       │              │               │
┌──────▼──────────────▼───────────────▼──────┐
│              BLOCKCHAIN LAYER               │
│         (Hyperledger Fabric / EPCIS)        │
└─────────────────────────────────────────────┘
       │              │               │
┌──────▼──────┐ ┌─────▼─────┐ ┌──────▼──────┐
│  PostgreSQL │ │  MongoDB  │ │    Redis    │
│  (chính)   │ │  (sự kiện)│ │   (cache)  │
└─────────────┘ └───────────┘ └─────────────┘
```

## Các thành phần chính

### 1. API Gateway

Cổng vào duy nhất cho toàn bộ hệ thống:

- **Xác thực** — JWT, OAuth 2.0, API Key
- **Phân quyền** — RBAC (Role-Based Access Control)
- **Rate Limiting** — Chống lạm dụng API
- **Load Balancing** — Phân phối tải thông minh
- **Logging** — Ghi lại mọi request

### 2. Product Service

Quản lý thông tin sản phẩm:

```json
{
  "productId": "VN-2024-APPLE-001",
  "name": "Táo Fuji Đà Lạt",
  "category": "fresh_produce",
  "origin": {
    "province": "Lâm Đồng",
    "commune": "Xuân Thọ",
    "coordinates": [11.9565, 108.4422]
  },
  "certifications": ["VietGAP", "GlobalGAP"],
  "producer": {
    "id": "HTX-DALAT-001",
    "name": "HTX Nông nghiệp Xuân Thọ"
  }
}
```

### 3. Supply Chain Service

Theo dõi chuỗi cung ứng:

| Sự kiện | Mô tả | Dữ liệu ghi lại |
|---------|-------|----------------|
| `HARVEST` | Thu hoạch | Ngày, địa điểm, số lượng, người thu hoạch |
| `PROCESS` | Chế biến | Cơ sở, quy trình, nhiệt độ |
| `PACK` | Đóng gói | Ngày, lô, số lượng, nhãn |
| `SHIP` | Vận chuyển | Phương tiện, tuyến đường, điều kiện |
| `RECEIVE` | Nhận hàng | Địa điểm, kiểm tra chất lượng |
| `RETAIL` | Bán lẻ | Cửa hàng, giá, ngày |

### 4. Blockchain Layer

Đảm bảo tính bất biến và tin cậy:

::: tip Tại sao dùng Blockchain?
Blockchain không thể bị sửa đổi sau khi ghi, đảm bảo dữ liệu TXNG là đáng tin cậy 100% và có thể kiểm chứng bởi bất kỳ bên nào.
:::

- **Hyperledger Fabric** — Private blockchain cho doanh nghiệp
- **Smart Contracts (Chaincode)** — Tự động hóa xác minh
- **Consensus** — Raft (hiệu năng cao)
- **Permissioned** — Chỉ thành viên được phép mới tham gia

### 5. Event Service

Xử lý sự kiện real-time:

```
Producer → Kafka → Consumer → Database → WebSocket → Client
```

## Luồng dữ liệu TXNG

```
1. Đăng ký sản phẩm
   └─ Tạo mã GS1/GTIN → Sinh QR Code → Ghi Blockchain

2. Sự kiện chuỗi cung ứng
   └─ API call → Validate → Ghi DB → Ghi Blockchain → Emit Event

3. Tra cứu nguồn gốc
   └─ Quét QR → API → Đọc Blockchain + DB → Trả kết quả

4. Cảnh báo & Thu hồi
   └─ Phát hiện vấn đề → Xác định lô → Thông báo tự động → Báo cáo
```

## Bảo mật

| Lớp | Biện pháp |
|-----|-----------|
| Network | TLS 1.3, VPN, Firewall |
| Application | OAuth 2.0, JWT, CSRF protection |
| Data | Mã hóa AES-256 khi lưu trữ |
| Blockchain | Chữ ký số, consensus đa bên |
| Audit | Ghi log đầy đủ, không thể xóa |
