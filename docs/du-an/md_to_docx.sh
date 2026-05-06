#!/bin/bash
# =============================================
#   Markdown to DOCX Converter - dung Pandoc
#   macOS version
# =============================================

# Kiem tra co file truyen vao khong
if [ $# -eq 0 ]; then
    echo "============================================="
    echo "  Markdown to DOCX Converter - dung Pandoc"
    echo "============================================="
    echo ""
    echo "Huong dan su dung:"
    echo "  bash md_to_docx.sh <file.md>          # 1 file"
    echo "  bash md_to_docx.sh *.md               # nhieu file"
    echo "  bash md_to_docx.sh <file.md> <ref.docx>  # co template"
    echo ""
    echo "Vi du:"
    echo "  bash md_to_docx.sh \"danh sach chuc nang.md\""
    echo ""
    echo "Luu y: Can cai Pandoc truoc"
    echo "  brew install pandoc"
    echo "  Hoac tai tai: https://pandoc.org/installing.html"
    echo ""
    exit 0
fi

# Kiem tra Pandoc da cai chua
if ! command -v pandoc &> /dev/null; then
    echo "[LOI] Khong tim thay Pandoc!"
    echo "Vui long cai dat:"
    echo "  brew install pandoc"
    echo "  Hoac tai tai: https://pandoc.org/installing.html"
    exit 1
fi

echo "============================================="
echo "  Markdown to DOCX Converter - dung Pandoc"
echo "============================================="
echo ""

SUCCESS=0
FAIL=0

# Thu muc chua script nay (de tim reference.docx neu co)
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

for INPUT_FILE in "$@"; do

    # Lay extension
    EXT="${INPUT_FILE##*.}"

    # Chi xu ly file .md hoac .markdown
    EXT_LOWER=$(echo "$EXT" | tr '[:upper:]' '[:lower:]')
    if [[ "$EXT_LOWER" != "md" && "$EXT_LOWER" != "markdown" ]]; then
        echo "[Bo qua] \"$(basename "$INPUT_FILE")\" - khong phai file .md"
        continue
    fi

    # Kiem tra file co ton tai khong
    if [ ! -f "$INPUT_FILE" ]; then
        echo "[LOI] Khong tim thay file: \"$INPUT_FILE\""
        ((FAIL++))
        continue
    fi

    echo "[Dang xu ly] $(basename "$INPUT_FILE") ..."

    # Output: cung thu muc, doi duoi sang .docx
    BASENAME="${INPUT_FILE%.*}"
    OUTPUT="${BASENAME}.docx"

    # Kiem tra co file reference.docx khong (de giu dinh dang font, style)
    REFERENCE_DOC=""
    if [ -f "${SCRIPT_DIR}/reference.docx" ]; then
        REFERENCE_DOC="--reference-doc=${SCRIPT_DIR}/reference.docx"
        echo "  [Template] Dung reference.docx"
    fi

    # Chay pandoc
    pandoc "$INPUT_FILE" \
        -o "$OUTPUT" \
        --from=markdown \
        --to=docx \
        -s \
        --wrap=none \
        $REFERENCE_DOC \
        2>/dev/null

    if [ $? -eq 0 ]; then
        echo "[THANH CONG] $(basename "$OUTPUT")"
        ((SUCCESS++))
    else
        echo "[THAT BAI]  $(basename "$INPUT_FILE")"
        ((FAIL++))
    fi

done

echo ""
echo "============================================="
echo " Ket qua: $SUCCESS thanh cong, $FAIL that bai"
echo " File .docx duoc luu cung thu muc voi file goc"
echo "============================================="
echo ""
