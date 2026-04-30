#!/usr/bin/env bash
# ─────────────────────────────────────────────
#  TXNG Docs — Dev Server
# ─────────────────────────────────────────────

# Màu sắc terminal
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
RESET='\033[0m'

# Chuyển về thư mục gốc của dự án (dù gọi script từ đâu)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo ""
echo -e "${CYAN}${BOLD}  ████████╗██╗  ██╗███╗   ██╗ ██████╗ ${RESET}"
echo -e "${CYAN}${BOLD}     ██╔══╝╚██╗██╔╝████╗  ██║██╔════╝ ${RESET}"
echo -e "${GREEN}${BOLD}     ██║    ╚███╔╝ ██╔██╗ ██║██║  ███╗${RESET}"
echo -e "${GREEN}${BOLD}     ██║    ██╔██╗ ██║╚██╗██║██║   ██║${RESET}"
echo -e "${CYAN}${BOLD}     ██║   ██╔╝ ██╗██║ ╚████║╚██████╔╝${RESET}"
echo -e "${CYAN}${BOLD}     ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ${RESET}"
echo ""
echo -e "  ${BOLD}Truy Xuất Nguồn Gốc — Documentation Dev Server${RESET}"
echo -e "  ${YELLOW}──────────────────────────────────────────────${RESET}"
echo ""

# Kiểm tra node_modules
if [ ! -d "node_modules" ]; then
  echo -e "  ${YELLOW}⚙  node_modules chưa có, đang cài đặt dependencies...${RESET}"
  npm install
  echo ""
fi

# Lấy port từ tham số (mặc định 5173)
PORT="${1:-5173}"

echo -e "  ${GREEN}▶  Khởi động VitePress dev server tại port ${BOLD}${PORT}${RESET}"
echo -e "  ${CYAN}🌐  Địa chỉ: ${BOLD}http://localhost:${PORT}${RESET}"
echo ""

# Mở trình duyệt sau 2 giây (macOS)
if [[ "$OSTYPE" == "darwin"* ]]; then
  (sleep 2 && open "http://localhost:${PORT}") &
fi

# Chạy VitePress (với port tuỳ chọn nếu khác mặc định)
if [ "$PORT" = "5173" ]; then
  npm run docs:dev
else
  npx vitepress dev docs --port "$PORT"
fi
