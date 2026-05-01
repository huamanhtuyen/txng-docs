#!/bin/bash
# DOCX to Markdown Converter - dùng Pandoc (macOS)

# Hỗ trợ UTF-8
export LANG=en_US.UTF-8

# Hàm hiển thị hướng dẫn
show_help() {
    echo "============================================="
    echo "  DOCX to Markdown Converter - dùng Pandoc"
    echo "============================================="
    echo ""
    echo "Hướng dẫn sử dụng:"
    echo "  Cách 1: Kéo thả file .docx vào file .sh này"
    echo "  Cách 2: Chạy trong Terminal:"
    echo "          ./docx_to_md.sh file1.docx file2.docx ..."
    echo ""
    echo "Lưu ý: Cần cài Pandoc trước"
    echo "  brew install pandoc"
    echo "  Hoặc tải tại: https://pandoc.org/installing.html"
    echo ""
}

# Nếu không có tham số nào
if [ $# -eq 0 ]; then
    show_help
    echo "Nhấn Enter để thoát..."
    read -r
    exit 0
fi

# Kiểm tra Pandoc đã cài chưa
if ! command -v pandoc &> /dev/null; then
    echo "[LỖI] Không tìm thấy Pandoc!"
    echo "Vui lòng cài đặt bằng lệnh: brew install pandoc"
    echo "Hoặc tải tại: https://pandoc.org/installing.html"
    echo ""
    echo "Nhấn Enter để thoát..."
    read -r
    exit 1
fi

echo "============================================="
echo "  DOCX to Markdown Converter - dùng Pandoc"
echo "============================================="
echo ""

SUCCESS=0
FAIL=0

for FILE in "$@"; do
    # Lấy phần mở rộng (extension) của file
    EXT="${FILE##*.}"

    # Chỉ xử lý file .docx (không phân biệt hoa thường)
    EXT_LOWER=$(echo "$EXT" | tr '[:upper:]' '[:lower:]')
    if [[ "$EXT_LOWER" != "docx" ]]; then
        echo "[Bỏ qua] \"$(basename "$FILE")\" - không phải file .docx"
        continue
    fi

    # Kiểm tra file có tồn tại không
    if [ ! -f "$FILE" ]; then
        echo "[LỖI] File không tồn tại: \"$(basename "$FILE")\""
        FAIL=$((FAIL + 1))
        continue
    fi

    echo "[Đang xử lý] $(basename "$FILE") ..."

    # Output cùng thư mục với file gốc
    DIR=$(dirname "$FILE")
    BASENAME=$(basename "$FILE" .docx)
    # Xử lý trường hợp file có đuôi .DOCX (viết hoa)
    BASENAME=$(basename "$BASENAME" .DOCX)
    OUTPUT="${DIR}/${BASENAME}.md"

    if pandoc "$FILE" -o "$OUTPUT" --wrap=none 2>/dev/null; then
        echo "[THÀNH CÔNG] ${BASENAME}.md"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "[THẤT BẠI]  $(basename "$FILE")"
        FAIL=$((FAIL + 1))
    fi
done

echo ""
echo "============================================="
echo "  Kết quả: ${SUCCESS} thành công, ${FAIL} thất bại"
echo "  File .md được lưu cùng thư mục với file gốc"
echo "============================================="
echo ""
echo "Nhấn Enter để thoát..."
read -r
