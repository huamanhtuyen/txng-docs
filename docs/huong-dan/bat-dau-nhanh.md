# Bắt đầu nhanh

Hướng dẫn này giúp bạn thiết lập và chạy hệ thống TXNG trong **5 phút**.

## Yêu cầu hệ thống

::: info Trước khi bắt đầu
Đảm bảo hệ thống của bạn đáp ứng các yêu cầu sau:
:::

| Thành phần | Phiên bản tối thiểu |
|-----------|-------------------|
| Node.js | v18.0+ |
| Docker | v24.0+ |
| Docker Compose | v2.0+ |
| RAM | 4GB+ |
| Ổ cứng | 20GB+ |

## Cài đặt nhanh (Docker)

### Bước 1: Tải source code

```bash
git clone https://github.com/your-org/txng.git
cd txng
```

### Bước 2: Cấu hình môi trường

```bash
cp .env.example .env
```

Chỉnh sửa file `.env` với thông tin của bạn:

```ini
# Cơ sở dữ liệu
DB_HOST=localhost
DB_PORT=5432
DB_NAME=txng_db
DB_USER=txng_user
DB_PASSWORD=your_secure_password

# JWT Secret
JWT_SECRET=your-very-long-random-secret-key

# Blockchain
FABRIC_CHANNEL=txng-channel
FABRIC_CHAINCODE=txng-cc
```

### Bước 3: Khởi động hệ thống

```bash
docker compose up -d
```

Hệ thống sẽ tự động:
- Khởi tạo cơ sở dữ liệu
- Deploy Blockchain network
- Chạy các microservices

### Bước 4: Kiểm tra

```bash
# Kiểm tra trạng thái services
docker compose ps

# Kiểm tra API
curl http://localhost:3000/health
```

Kết quả mong đợi:
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "services": {
    "database": "connected",
    "blockchain": "connected",
    "cache": "connected"
  }
}
```

## Thử ngay — Đăng ký sản phẩm đầu tiên

### 1. Lấy Access Token

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "admin123"
  }'
```

### 2. Tạo sản phẩm

```bash
curl -X POST http://localhost:3000/api/v1/products \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Xoài cát Hòa Lộc",
    "category": "fresh_produce",
    "origin": {
      "province": "Tiền Giang",
      "commune": "Hòa Hưng"
    },
    "producer": "HTX Mango Hoa Loc"
  }'
```

### 3. Quét QR Code

Mở Portal tại `http://localhost:8080`, đăng nhập và tìm sản phẩm vừa tạo. QR Code sẽ được sinh tự động.

## Mở Portal quản lý

Truy cập `http://localhost:8080` và đăng nhập:

- **Username**: `admin`
- **Password**: `admin123`

::: warning Đổi mật khẩu ngay!
Hãy đổi mật khẩu mặc định ngay sau lần đăng nhập đầu tiên trong phần **Cài đặt → Bảo mật**.
:::

## Các bước tiếp theo

- [Cài đặt chi tiết](./cai-dat.md) — Cấu hình nâng cao cho môi trường production
- [Đăng ký sản phẩm](./dang-ky-san-pham.md) — Hướng dẫn đầy đủ
- [API Reference](/cong-nghe/api-reference.md) — Tích hợp với hệ thống có sẵn
