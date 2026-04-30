# API Reference

Tài liệu đầy đủ về TXNG REST API v1.

## Thông tin chung

| Thông số | Giá trị |
|---------|--------|
| Base URL | `https://api.txng.vn/v1` |
| Format | JSON |
| Authentication | Bearer Token (JWT) |
| Rate Limit | 1000 req/phút |
| Phiên bản | v1.0.0 |

## Xác thực (Authentication)

### Đăng nhập

```http
POST /auth/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

**Phản hồi thành công (200):**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4..."
}
```

### Sử dụng token

```http
GET /products
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Sản phẩm (Products)

### Tạo sản phẩm mới

```http
POST /products
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Xoài cát Hòa Lộc",
  "category": "fresh_produce",
  "sku": "MANGO-HL-001",
  "origin": {
    "country": "VN",
    "province": "Tiền Giang",
    "commune": "Hòa Hưng",
    "coordinates": [10.3451, 106.1234]
  },
  "producer": {
    "id": "PRD-001",
    "name": "HTX Mango Hoa Loc"
  },
  "attributes": {
    "weight_kg": 0.3,
    "variety": "Hoa Loc",
    "harvest_season": "3-6"
  }
}
```

**Phản hồi (201 Created):**

```json
{
  "id": "PROD-2024-001",
  "gtin": "8935001234567",
  "qr_code_url": "https://api.txng.vn/qr/PROD-2024-001",
  "blockchain_tx": "0xabc123...",
  "created_at": "2024-01-15T10:30:00Z"
}
```

### Lấy thông tin sản phẩm

```http
GET /products/{id}
Authorization: Bearer {token}
```

### Tìm kiếm sản phẩm

```http
GET /products?category=fresh_produce&province=Tien+Giang&page=1&limit=20
Authorization: Bearer {token}
```

---

## Sự kiện (Events)

### Ghi sự kiện chuỗi cung ứng

```http
POST /events
Authorization: Bearer {token}
Content-Type: application/json

{
  "product_id": "PROD-2024-001",
  "batch_id": "BATCH-2024-0115-001",
  "event_type": "HARVEST",
  "timestamp": "2024-01-15T06:00:00Z",
  "location": {
    "name": "Vườn HTX Hòa Lộc",
    "coordinates": [10.3451, 106.1234]
  },
  "actor": {
    "id": "FARMER-001",
    "name": "Nguyễn Văn A",
    "role": "farmer"
  },
  "data": {
    "quantity_kg": 500,
    "quality_grade": "A",
    "temperature_c": 28,
    "humidity_percent": 75,
    "notes": "Thu hoạch đúng lịch, chất lượng tốt"
  }
}
```

### Các loại sự kiện

| Event Type | Mô tả |
|-----------|-------|
| `HARVEST` | Thu hoạch nông sản |
| `PROCESS` | Chế biến, sơ chế |
| `PACK` | Đóng gói |
| `QUALITY_CHECK` | Kiểm tra chất lượng |
| `SHIP` | Bắt đầu vận chuyển |
| `RECEIVE` | Nhận hàng tại điểm mới |
| `STORE` | Nhập kho |
| `RETAIL` | Đưa ra bán lẻ |
| `RECALL` | Thu hồi sản phẩm |

---

## Tra cứu nguồn gốc (Trace)

### Tra cứu theo ID sản phẩm

```http
GET /trace/{product_id}
```

> 🔓 Endpoint này **không cần xác thực** — cho phép người tiêu dùng tra cứu tự do.

**Phản hồi (200):**

```json
{
  "product": {
    "id": "PROD-2024-001",
    "name": "Xoài cát Hòa Lộc",
    "gtin": "8935001234567",
    "origin": { "province": "Tiền Giang" },
    "certifications": ["VietGAP"]
  },
  "journey": [
    {
      "step": 1,
      "event": "HARVEST",
      "date": "2024-01-15",
      "location": "Hòa Hưng, Tiền Giang",
      "actor": "HTX Mango Hoa Loc",
      "verified": true,
      "blockchain_tx": "0xabc..."
    },
    {
      "step": 2,
      "event": "QUALITY_CHECK",
      "date": "2024-01-16",
      "location": "Trung tâm kiểm định TG",
      "actor": "Chi cục ATTP Tiền Giang",
      "verified": true,
      "blockchain_tx": "0xdef..."
    }
  ],
  "total_steps": 2,
  "verified": true
}
```

---

## Mã lỗi

| Code | Mô tả |
|------|-------|
| `200` | Thành công |
| `201` | Tạo mới thành công |
| `400` | Dữ liệu đầu vào không hợp lệ |
| `401` | Chưa xác thực |
| `403` | Không có quyền truy cập |
| `404` | Không tìm thấy tài nguyên |
| `429` | Vượt quá giới hạn request |
| `500` | Lỗi máy chủ |

## SDK & Thư viện

::: tip Tiết kiệm thời gian
Sử dụng SDK chính thức thay vì gọi API trực tiếp:
:::

```bash
# JavaScript/Node.js
npm install @txng/sdk

# Python
pip install txng-sdk

# PHP
composer require txng/sdk
```
