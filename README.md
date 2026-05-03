# 📦 TXNG — Tài liệu Truy xuất nguồn gốc

<div align="center">

![TXNG Logo](docs/public/logo.svg)

**Hệ thống tài liệu toàn diện về Truy xuất nguồn gốc hàng hóa, sản phẩm và chuỗi cung ứng tại Việt Nam.**
Đây chỉ là bộ tài liệu của dự án Truy xuất nguồn gốc hàng hóa, sản phẩm và chuỗi cung ứng tại Việt Nam. Chứ không phải bộ mã nguồn hay ứng dụng gì của Truy xuất nguồn gốc hàng hóa, sản phẩm và chuỗi cung ứng tại Việt Nam

[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-646cff?logo=vite&logoColor=white)](https://vitepress.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981.svg)](./LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Docs-Live-10b981?logo=github)](https://huamanhtuyen.github.io/txng-docs)

</div>

---

## 🚀 Bắt đầu nhanh

```bash
# Clone repo
git clone https://github.com/huamanhtuyen/txng-docs.git
cd txng-docs

# Chạy dev server (tự động mở trình duyệt)
./dev.sh
```

Hoặc dùng npm:

```bash
npm install
npm run docs:dev
```

## 📁 Cấu trúc tài liệu

```
docs/
├── gioi-thieu/         # Giới thiệu về TXNG
│   ├── txng-la-gi.md
│   ├── tai-sao-can-txng.md
│   └── kien-truc.md
├── huong-dan/          # Hướng dẫn sử dụng
│   └── bat-dau-nhanh.md
├── chuan-muc/          # Chuẩn mực & Quy định
│   └── tieu-chuan-quoc-te.md
└── cong-nghe/          # Công nghệ
    ├── blockchain.md
    ├── qr-rfid.md
    └── api-reference.md
```

## 📜 Scripts

| Lệnh                   | Mô tả                          |
| ---------------------- | ------------------------------ |
| `./dev.sh`             | Chạy dev server, tự mở browser |
| `./dev.sh 3000`        | Chạy trên port tùy chọn        |
| `npm run docs:build`   | Build production               |
| `npm run docs:preview` | Xem trước bản build            |

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo Issue hoặc Pull Request.

## 📄 Giấy phép

MIT © TXNG Project
