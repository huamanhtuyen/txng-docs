@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

REM =============================================
REM   Markdown to DOCX Converter - dung Pandoc
REM   Windows version
REM =============================================

REM Kiem tra co file truyen vao khong
if "%~1"=="" (
    echo =============================================
    echo   Markdown to DOCX Converter - dung Pandoc
    echo =============================================
    echo.
    echo Huong dan su dung:
    echo   md_to_docx.bat ^<file.md^>          # 1 file
    echo   md_to_docx.bat *.md               # nhieu file
    echo.
    echo Vi du:
    echo   md_to_docx.bat "danh sach chuc nang.md"
    echo.
    echo Luu y: Can cai Pandoc truoc
    echo   winget install pandoc
    echo   Hoac tai tai: https://pandoc.org/installing.html
    echo.
    exit /b 0
)

REM Kiem tra Pandoc da cai chua
where pandoc >nul 2>nul
if %errorlevel% neq 0 (
    echo [LOI] Khong tim thay Pandoc!
    echo Vui long cai dat:
    echo   winget install pandoc
    echo   Hoac tai tai: https://pandoc.org/installing.html
    exit /b 1
)

echo =============================================
echo   Markdown to DOCX Converter - dung Pandoc
echo =============================================
echo.

set SUCCESS=0
set FAIL=0

REM Thu muc chua script nay (de tim reference.docx neu co)
set "SCRIPT_DIR=%~dp0"

REM Duyet qua tung file truyen vao
:loop
if "%~1"=="" goto done

set "INPUT_FILE=%~1"

REM Lay extension
set "EXT=%~x1"
set "EXT_LOWER=%EXT%"

REM Chi xu ly file .md hoac .markdown
if /i "!EXT_LOWER!"==".md" goto process
if /i "!EXT_LOWER!"==".markdown" goto process

echo [Bo qua] "%~nx1" - khong phai file .md
shift
goto loop

:process

REM Kiem tra file co ton tai khong
if not exist "%INPUT_FILE%" (
    echo [LOI] Khong tim thay file: "%INPUT_FILE%"
    set /a FAIL+=1
    shift
    goto loop
)

echo [Dang xu ly] %~nx1 ...

REM Output: cung thu muc, doi duoi sang .docx
set "OUTPUT=%~dpn1.docx"

REM Kiem tra co file reference.docx khong (de giu dinh dang font, style)
set "REFERENCE_DOC="
if exist "%SCRIPT_DIR%reference.docx" (
    set "REFERENCE_DOC=--reference-doc=%SCRIPT_DIR%reference.docx"
    echo   [Template] Dung reference.docx
)

REM Chay pandoc
pandoc "%INPUT_FILE%" -o "%OUTPUT%" --from=markdown --to=docx -s --wrap=none !REFERENCE_DOC! 2>nul

if !errorlevel! equ 0 (
    echo [THANH CONG] %~n1.docx
    set /a SUCCESS+=1
) else (
    echo [THAT BAI]  %~nx1
    set /a FAIL+=1
)

shift
goto loop

:done
echo.
echo =============================================
echo  Ket qua: !SUCCESS! thanh cong, !FAIL! that bai
echo  File .docx duoc luu cung thu muc voi file goc
echo =============================================
echo.

endlocal
