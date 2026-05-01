# 🚀 Hướng Dẫn CI/CD: GitHub → VPS (txng.beeng.vn)

Mỗi lần bạn `git push` lên GitHub, hệ thống sẽ tự động:
1. Build VitePress docs
2. Upload lên VPS `103.61.123.242`
3. Nginx phục vụ tại `https://txng.beeng.vn`

---

## Kiến Trúc Tổng Quan

```
[Local Machine] --git push--> [GitHub Repo]
                                    |
                          [GitHub Actions CI/CD]
                          (build + SSH deploy)
                                    |
                              [VPS Ubuntu]
                         (Nginx phục vụ static files)
                                    |
                         https://txng.beeng.vn
```

---

## BƯỚC 1 — Chuẩn Bị VPS Ubuntu

SSH vào VPS của bạn:

```bash
ssh root@103.61.123.242
```

### 1.1 Cài Nginx

```bash
apt update && apt upgrade -y
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

### 1.2 Cài Node.js (để build nếu cần, hoặc bỏ qua nếu chỉ serve static)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
```

### 1.3 Tạo thư mục web

```bash
mkdir -p /var/www/txng
chown -R www-data:www-data /var/www/txng
chmod -R 755 /var/www/txng
```

### 1.4 Cấu hình Nginx

```bash
nano /etc/nginx/sites-available/txng.beeng.vn
```

Dán nội dung sau:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name txng.beeng.vn;

    root /var/www/txng;
    index index.html;

    # VitePress routing — fallback to index.html
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
}
```

Kích hoạt site:

```bash
ln -s /etc/nginx/sites-available/txng.beeng.vn /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 1.5 Cài SSL miễn phí với Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d txng.beeng.vn
# Nhập email, đồng ý điều khoản, chọn redirect HTTP → HTTPS
```

> Certbot sẽ tự sửa file Nginx để thêm HTTPS. Cert tự động renew mỗi 90 ngày.

---

## BƯỚC 2 — Tạo SSH Key Cho GitHub Actions

**Thực hiện trên VPS:**

```bash
# Tạo SSH key riêng cho deploy (không dùng key cá nhân)
ssh-keygen -t ed25519 -C "github-actions-deploy" -f /root/.ssh/deploy_key -N ""

# Thêm public key vào authorized_keys
cat /root/.ssh/deploy_key.pub >> /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys

# In private key ra để copy
cat /root/.ssh/deploy_key
```

Copy toàn bộ nội dung private key (từ `-----BEGIN...` đến `-----END...`).

---

## BƯỚC 3 — Thêm Secrets Vào GitHub

Vào repo GitHub của bạn → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Thêm 3 secrets:

| Secret Name | Giá Trị |
|---|---|
| `VPS_HOST` | `103.61.123.242` |
| `VPS_USER` | `root` |
| `VPS_SSH_KEY` | Nội dung private key đã copy ở Bước 2 |

---

## BƯỚC 4 — Tạo GitHub Actions Workflow

Tạo file `.github/workflows/deploy.yml` trong repo:

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main   # hoặc master, tuỳ tên branch chính của bạn

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

      - name: Reload Nginx
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            systemctl reload nginx
            echo "✅ Deploy thành công lúc $(date)"
```

---

## BƯỚC 5 — Push Lên GitHub

```bash
# Tại thư mục dự án /Users/beeng/PROJECTS/TXNG
git add .github/
git commit -m "ci: add GitHub Actions deploy workflow"
git push origin main
```

Vào tab **Actions** trên GitHub để xem tiến trình deploy.

---

## Kiểm Tra

| Kiểm tra | Lệnh / URL |
|---|---|
| Nginx đang chạy | `systemctl status nginx` |
| Logs deploy | GitHub → Actions tab |
| Website | https://txng.beeng.vn |
| SSL còn hạn | `certbot certificates` |

---

## Quy Trình Hàng Ngày (Sau Khi Setup)

```
Bạn viết docs → git add . → git commit → git push
                                              ↓
                              GitHub Actions tự chạy (~2-3 phút)
                                              ↓
                              https://txng.beeng.vn cập nhật ✅
```

---

## Ghi Chú

- **Thư mục build**: `docs/.vitepress/dist/` (VitePress mặc định)
- **Thư mục trên VPS**: `/var/www/txng/`
- `--delete` trong rsync: tự xoá file cũ không còn trong build mới
- Nếu branch chính của bạn là `master` thay vì `main`, sửa trong file workflow
