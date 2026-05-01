# 📋 Tài Liệu Triển Khai — TXNG Docs

> Cập nhật lần cuối: 2026-05-01  
> Người thực hiện: beeng

---

## 1. Tổng Quan Hệ Thống

| Thông tin | Giá trị |
|---|---|
| **Website** | https://txng.beeng.vn |
| **VPS IP** | `103.61.123.242` |
| **OS** | Ubuntu 22.04 |
| **Web server** | Apache2 |
| **SSL** | Cloudflare Origin Certificate (wildcard `*.beeng.vn`) |
| **Framework docs** | VitePress |
| **CI/CD** | GitHub Actions |
| **Authentication** | HTTP Basic Auth |

---

## 2. Thông Tin VPS

### SSH vào VPS

```bash
ssh root@103.61.123.242
```

### Các dịch vụ đang chạy (PM2)

```bash
pm2 list
```

| ID | Name | Port | Mô tả |
|---|---|---|---|
| 0 | `hqso-api` | 3002 | Backend API cho hqso.beeng.vn |
| 3 | `tinhcach` | 3333 | App tinhcach.beeng.vn |

> **txng.beeng.vn** là static site — **không cần PM2**, Apache2 serve trực tiếp.

### Các domain trên VPS

| Domain | Config file | Loại |
|---|---|---|
| `beeng.vn` | `bagisto.conf` / `bagisto-ssl.conf` | PHP/Bagisto |
| `hqso.beeng.vn` | `hqso.conf` | VitePress + Node API |
| `tinhcach.beeng.vn` | `tinhcach.conf` | Node.js app |
| `txng.beeng.vn` | `txng.beeng.vn.conf` | VitePress static |

---

## 3. Cấu Hình Apache2

### File config

**Đường dẫn:** `/etc/apache2/sites-available/txng.beeng.vn.conf`

```apache
<VirtualHost *:80>
    ServerName txng.beeng.vn
    Redirect permanent / https://txng.beeng.vn/
</VirtualHost>

<VirtualHost *:443>
    ServerName txng.beeng.vn

    SSLEngine on
    SSLCertificateFile /etc/ssl/cloudflare/beeng.vn.crt
    SSLCertificateKeyFile /etc/ssl/cloudflare/beeng.vn.key

    DocumentRoot /var/www/txng

    <Directory /var/www/txng>
        AllowOverride None
        FallbackResource /index.html

        AuthType Basic
        AuthName "Vui long dang nhap"
        AuthUserFile /etc/apache2/.htpasswd
        Require valid-user
    </Directory>

    ErrorLog  ${APACHE_LOG_DIR}/txng-error.log
    CustomLog ${APACHE_LOG_DIR}/txng-access.log combined
</VirtualHost>
```

### Thư mục web

```
/var/www/txng/       ← Apache serve từ đây
```

GitHub Actions rsync sẽ copy nội dung `docs/.vitepress/dist/` vào thư mục này sau mỗi lần push.

### SSL Certificate

| File | Đường dẫn |
|---|---|
| Certificate | `/etc/ssl/cloudflare/beeng.vn.crt` |
| Private Key | `/etc/ssl/cloudflare/beeng.vn.key` |

> Đây là **Cloudflare Origin Certificate** dạng wildcard `*.beeng.vn`, dùng chung cho tất cả subdomain.

### Basic Auth

| File | Đường dẫn |
|---|---|
| htpasswd | `/etc/apache2/.htpasswd` |

File này dùng chung với `hqso.beeng.vn`. Để thêm/sửa user:

```bash
# Thêm user mới
htpasswd /etc/apache2/.htpasswd <username>

# Đổi password user cũ (lệnh giống nhau)
htpasswd /etc/apache2/.htpasswd <username>
```

---

## 4. CI/CD — GitHub Actions

### Quy trình

```
git push origin main
        ↓
GitHub Actions chạy (.github/workflows/deploy.yml)
        ↓
1. Checkout code
2. npm ci (cài dependencies)
3. npm run docs:build (build VitePress → docs/.vitepress/dist/)
4. rsync dist/ → root@103.61.123.242:/var/www/txng/
5. systemctl reload apache2
        ↓
https://txng.beeng.vn cập nhật (~2-3 phút)
```

### File workflow

**Đường dẫn:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build VitePress
        run: npm run docs:build

      - name: Deploy to VPS via rsync
        uses: burnett01/rsync-deployments@7.0.1
        with:
          switches: -avzr --delete
          path: docs/.vitepress/dist/
          remote_path: /var/www/txng/
          remote_host: ${{ secrets.VPS_HOST }}
          remote_user: ${{ secrets.VPS_USER }}
          remote_key: ${{ secrets.VPS_SSH_KEY }}

      - name: Reload Apache
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            systemctl reload apache2
            echo "✅ Deploy thành công lúc $(date)"
```

### GitHub Secrets

Vào: **GitHub repo → Settings → Secrets and variables → Actions**

| Secret Name | Giá trị |
|---|---|
| `VPS_HOST` | `103.61.123.242` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Nội dung file `/root/.ssh/txng_deploy` trên VPS |

### SSH Deploy Key

| File | Đường dẫn trên VPS |
|---|---|
| Private key | `/root/.ssh/txng_deploy` |
| Public key | `/root/.ssh/txng_deploy.pub` |

Public key đã được append vào `/root/.ssh/authorized_keys`.

> **Lưu ý**: `authorized_keys` chứa cả key của `hqso_deploy` — không được overwrite file này, chỉ được append (`>>`).

---

## 5. Lệnh Quản Trị Thường Dùng

### Apache2

```bash
# Kiểm tra config
apache2ctl configtest

# Xem tất cả VirtualHost
apache2ctl -S

# Reload sau khi sửa config
systemctl reload apache2

# Xem log lỗi
tail -f /var/log/apache2/txng-error.log

# Xem log access
tail -f /var/log/apache2/txng-access.log
```

### PM2 (cho các app khác)

```bash
pm2 list
pm2 logs hqso-api
pm2 restart tinhcach
pm2 save
```

### Kiểm tra deploy

```bash
# Xem nội dung đã được rsync chưa
ls -la /var/www/txng/

# Xem GitHub Actions logs
# → GitHub repo → tab Actions
```

---

## 6. Khôi Phục Khi Gặp Sự Cố

### Website trả về 403/404

```bash
# Kiểm tra file đã được deploy chưa
ls /var/www/txng/index.html

# Kiểm tra quyền thư mục
chown -R www-data:www-data /var/www/txng
chmod -R 755 /var/www/txng
```

### GitHub Actions thất bại

1. Vào tab **Actions** trên GitHub → xem log lỗi
2. Kiểm tra 3 secrets đã đúng chưa
3. Test SSH thủ công: `ssh -i /root/.ssh/txng_deploy root@103.61.123.242`

### Thêm lại Apache config từ đầu

```bash
a2ensite txng.beeng.vn.conf
apache2ctl configtest && systemctl reload apache2
```
