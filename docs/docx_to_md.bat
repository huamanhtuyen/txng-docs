@echo off
chcp 65001 >nul
title DOCX to Markdown Converter

if "%~1"=="" (
    echo =============================================
    echo   DOCX to Markdown Converter - dung Pandoc
    echo =============================================
    echo.
    echo Huong dan su dung:
    echo   Keo tha file .docx vao file .bat nay
    echo   Hoac keo tha nhieu file cung mot luc
    echo.
    echo Luu y: Can cai Pandoc truoc tai pandoc.org
    echo.
    pause
    exit /b
)

:: Kiem tra Pandoc da cai chua
pandoc --version >nul 2>&1
if errorlevel 1 (
    echo [LOI] Khong tim thay Pandoc!
    echo Vui long cai dat tai: https://pandoc.org/installing.html
    echo.
    pause
    exit /b
)

echo =============================================
echo   DOCX to Markdown Converter - dung Pandoc
echo =============================================
echo.

set SUCCESS=0
set FAIL=0

:loop
if "%~1"=="" goto done

:: Chi xu ly file .docx
if /i not "%~x1"==".docx" (
    echo [Bo qua] "%~nx1" - khong phai file .docx
    shift
    goto loop
)

echo [Dang xu ly] %~nx1 ...

:: Output cung thu muc voi file goc
set "OUTPUT=%~dp1%~n1.md"

pandoc "%~1" -o "%OUTPUT%" --wrap=none 2>nul

if errorlevel 1 (
    echo [THAT BAI]  %~nx1
    set /a FAIL+=1
) else (
    echo [THANH CONG] %~n1.md
    set /a SUCCESS+=1
)

shift
goto loop

:done
echo.
echo =============================================
echo  Ket qua: %SUCCESS% thanh cong, %FAIL% that bai
echo  File .md duoc luu cung thu muc voi file goc
echo =============================================
echo.
pause
