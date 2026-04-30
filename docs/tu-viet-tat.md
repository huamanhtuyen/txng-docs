---
outline: [2, 3]
---

# Từ viết tắt & Thuật ngữ

Giải thích toàn bộ từ viết tắt và thuật ngữ chuyên ngành được sử dụng trong hệ thống TXNG.

::: tip Mẹo tìm kiếm
Nhấn <kbd>Ctrl</kbd> + <kbd>F</kbd> (hoặc <kbd>⌘</kbd> + <kbd>F</kbd> trên Mac) để tìm nhanh thuật ngữ cần tra.
:::

---

## A

### ATTP
**An Toàn Thực Phẩm** — Lĩnh vực quản lý nhà nước liên quan đến đảm bảo thực phẩm không gây hại cho sức khoẻ người tiêu dùng. Ví dụ: *Chi cục ATTP Tiền Giang* là cơ quan kiểm định cấp tỉnh.

### API
**Application Programming Interface** (Giao diện lập trình ứng dụng) — Tập hợp các quy tắc và định nghĩa cho phép các phần mềm khác nhau giao tiếp với nhau. Trong TXNG, API cho phép các hệ thống ERP, kho hàng, thương mại điện tử kết nối và trao đổi dữ liệu truy xuất nguồn gốc.

### AES-256
**Advanced Encryption Standard - 256 bit** — Thuật toán mã hóa đối xứng độ mạnh cao, được dùng để bảo vệ dữ liệu TXNG khi lưu trữ (at-rest encryption). Đây là chuẩn mã hóa được chính phủ Mỹ và hầu hết các tổ chức bảo mật quốc tế chấp thuận.

---

## B

### Batch / Lot (Lô sản xuất)
Nhóm sản phẩm được sản xuất hoặc thu hoạch trong cùng một điều kiện (nguyên liệu, thời gian, quy trình). Là đơn vị nhỏ nhất trong TXNG — khi có sự cố, hệ thống khoanh vùng chính xác theo lô thay vì thu hồi toàn bộ.

### Blockchain
Cơ sở dữ liệu phân tán dạng chuỗi khối, trong đó mỗi giao dịch (transaction) được ghi thành một khối (block) liên kết mật mã với khối trước đó. Đặc điểm cốt lõi: **bất biến** — không ai có thể sửa dữ liệu đã ghi mà không bị phát hiện.

### BVTV
**Bảo Vệ Thực Vật** — Thuốc trừ sâu, thuốc diệt cỏ, thuốc trừ bệnh dùng trong nông nghiệp. Hệ thống TXNG yêu cầu ghi lại loại và liều lượng BVTV sử dụng trên từng lô sản phẩm để kiểm tra dư lượng.

---

## C

### CAC
**Codex Alimentarius Commission** — Ủy ban Tiêu chuẩn Thực phẩm quốc tế do WHO và FAO đồng thành lập. Ban hành hướng dẫn **CAC/GL 60-2006** về hệ thống truy xuất nguồn gốc thực phẩm.

### Chaincode
Thuật ngữ của Hyperledger Fabric cho **Smart Contract**. Là đoạn code chạy trên mạng blockchain, tự động thực thi logic nghiệp vụ (ví dụ: xác minh sự kiện TXNG, kiểm tra quyền ghi dữ liệu) khi có giao dịch gửi vào.

### CPTPP
**Comprehensive and Progressive Agreement for Trans-Pacific Partnership** (Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương) — FTA thế hệ mới Việt Nam tham gia từ 2019, yêu cầu tiêu chuẩn cao về TXNG nông sản xuất khẩu sang các nước thành viên (Nhật Bản, Canada, Úc...).

### CSRF
**Cross-Site Request Forgery** — Loại tấn công bảo mật web buộc người dùng thực hiện hành động không mong muốn. TXNG API được bảo vệ khỏi CSRF thông qua token xác thực trên mỗi request.

---

## D

### DNA Traceability (Truy xuất nguồn gốc ADN)
Phương pháp tiên tiến dùng dấu hiệu di truyền (DNA marker) để xác minh giống cây trồng, vật nuôi, hoặc nguồn gốc địa lý của sản phẩm. Bổ sung cho QR Code/RFID trong các trường hợp cần xác thực tuyệt đối.

---

## E

### EPC
**Electronic Product Code** — Mã định danh điện tử duy nhất cho từng mặt hàng theo chuẩn GS1. Cấu trúc: `urn:epc:id:sgtin:[company].[item].[serial]`. Dùng trên thẻ RFID và trong chuẩn EPCIS.

### EPCIS
**Electronic Product Code Information Services** — Chuẩn GS1 định nghĩa định dạng và giao thức chia sẻ dữ liệu sự kiện chuỗi cung ứng giữa các tổ chức. Phiên bản hiện tại TXNG dùng là **EPCIS 2.0** (2022).

### ERP
**Enterprise Resource Planning** (Hoạch định nguồn lực doanh nghiệp) — Phần mềm quản lý toàn diện doanh nghiệp (kế toán, kho hàng, nhân sự, sản xuất...). Các hệ thống ERP phổ biến như SAP, Oracle, Odoo có thể tích hợp với TXNG qua API.

### EU
**European Union** (Liên minh Châu Âu) — Thị trường xuất khẩu quan trọng của Việt Nam. TXNG cần đáp ứng **EU Deforestation Regulation (EUDR)** và **EU Farm-to-Fork Strategy** từ 2024-2025 để xuất khẩu nông sản vào EU.

### EUDR
**EU Deforestation Regulation** — Quy định của EU yêu cầu doanh nghiệp chứng minh sản phẩm không gây phá rừng, có hiệu lực từ 2025. Bắt buộc cung cấp dữ liệu tọa độ GPS vùng canh tác — TXNG hỗ trợ đầy đủ yêu cầu này.

### EVFTA
**EU-Vietnam Free Trade Agreement** (Hiệp định Thương mại Tự do Việt Nam - EU) — Có hiệu lực từ 8/2020, mở ra thị trường 450 triệu dân EU cho hàng Việt, kèm yêu cầu nghiêm ngặt về TXNG và chứng nhận xuất xứ.

---

## F

### FAO
**Food and Agriculture Organization** — Tổ chức Lương thực và Nông nghiệp Liên Hợp Quốc. Cùng WHO ban hành chuẩn Codex Alimentarius và hướng dẫn TXNG thực phẩm toàn cầu.

### FDA
**Food and Drug Administration** — Cơ quan quản lý Thực phẩm và Dược phẩm Hoa Kỳ. Ban hành **FSMA Rule 204** bắt buộc TXNG cho thực phẩm xuất khẩu vào Mỹ từ 2026.

### FTA
**Free Trade Agreement** (Hiệp định Thương mại Tự do) — Hiệp định song phương hoặc đa phương giảm/xóa thuế quan giữa các quốc gia. EVFTA, CPTPP, RCEP là các FTA Việt Nam đã tham gia, đều có điều khoản liên quan đến TXNG.

### FSMA
**Food Safety Modernization Act** — Đạo luật Hiện đại hóa An toàn Thực phẩm của Mỹ (2011). **Rule 204** trong FSMA yêu cầu lưu giữ hồ sơ TXNG bổ sung (Key Data Elements - KDE) cho thực phẩm nguy cơ cao.

---

## G

### GLN
**Global Location Number** — Mã định danh địa điểm theo chuẩn GS1 (13 chữ số). Dùng để xác định duy nhất: nhà máy, kho hàng, cảng biển, cửa hàng... trên toàn cầu.

### GlobalGAP
**Global Good Agricultural Practices** — Chứng nhận thực hành nông nghiệp tốt được công nhận quốc tế. Yêu cầu hệ thống TXNG đầy đủ từ vườn đến đóng gói. Là điều kiện tiên quyết xuất khẩu vào siêu thị châu Âu.

### GS1
**Global Standards 1** — Tổ chức phi lợi nhuận quốc tế phát triển hệ thống tiêu chuẩn nhận dạng hàng hóa (mã vạch, QR, RFID, EPCIS...). Được sử dụng bởi 2+ triệu doanh nghiệp tại 150+ quốc gia.

### GS1-128
Loại mã vạch tuyến tính theo chuẩn GS1, thường thấy trên thùng hàng xuất khẩu. Mã hóa nhiều thông tin: số lô, hạn dùng, trọng lượng, địa điểm xuất phát thông qua **Application Identifiers (AI)**.

### GTIN
**Global Trade Item Number** — Mã số thương phẩm toàn cầu (8, 12, 13 hoặc 14 chữ số). Đây là "mã vạch" phổ biến trên mọi sản phẩm bán lẻ. Ví dụ: GTIN-13 = EAN-13 thường thấy ở Việt Nam.

---

## H

### HF
**High Frequency** — Tần số cao (13.56 MHz) dùng cho thẻ RFID khoảng cách ngắn (< 1m). Phổ biến trong thẻ NFC trên smartphone, thẻ kiểm soát ra vào, passport điện tử.

### HTX
**Hợp Tác Xã** — Tổ chức kinh tế tập thể trong nông nghiệp Việt Nam. Thường là đơn vị đăng ký TXNG thay mặt cho các thành viên nông dân nhỏ lẻ.

### Hyperledger Fabric
Nền tảng blockchain mã nguồn mở dành cho doanh nghiệp, do Linux Foundation quản lý. Đặc điểm: permissioned (có kiểm soát thành viên), không phí giao dịch, tốc độ cao (1000+ TPS), hỗ trợ Smart Contract (Chaincode) bằng Go/JavaScript/Java.

---

## I

### IoT
**Internet of Things** (Internet Vạn vật) — Mạng lưới thiết bị vật lý (cảm biến nhiệt độ, độ ẩm, GPS...) kết nối internet và tự động ghi dữ liệu vào hệ thống TXNG. Ví dụ: cảm biến trong xe lạnh tự động ghi nhiệt độ vận chuyển.

### ISO
**International Organization for Standardization** — Tổ chức Tiêu chuẩn Quốc tế. Các chuẩn ISO liên quan TXNG: **ISO 22005:2007** (TXNG thực phẩm), **ISO 9001:2015** (quản lý chất lượng), **ISO/IEC 15963** (RFID).

---

## J

### JAS
**Japanese Agricultural Standard** — Tiêu chuẩn nông sản Nhật Bản. Yêu cầu ghi nhãn rõ ràng về nước xuất xứ, phương thức canh tác và kiểm soát dư lượng thuốc BVTV nghiêm ngặt theo **Positive List System**.

### JWT
**JSON Web Token** — Chuẩn mở (RFC 7519) định nghĩa cách truyền thông tin xác thực dưới dạng JSON được ký số. TXNG API dùng JWT để xác thực người dùng sau khi đăng nhập, token có thời hạn và có thể revoke.

---

## K

### KDE
**Key Data Elements** — Các trường dữ liệu thiết yếu mà FDA FSMA Rule 204 yêu cầu ghi lại: mô tả thực phẩm, số lô, địa điểm, ngày tháng, số lượng... TXNG tự động thu thập và lưu trữ đủ KDE.

---

## L

### Ledger (Sổ cái)
Trong blockchain, ledger là bản ghi lịch sử toàn bộ giao dịch. Trong Hyperledger Fabric, mỗi channel có một ledger riêng, được sao lưu trên tất cả các peer node của channel đó.

### LF
**Low Frequency** — Tần số thấp (125-134 kHz) dùng cho RFID khoảng cách rất ngắn (< 10cm). Chủ yếu dùng cho định danh gia súc, vật nuôi (gắn trong tai hoặc dạ dày).

---

## M

### MCP
**Model Context Protocol** — Giao thức cho phép AI assistant (như Antigravity) tích hợp với các công cụ và dịch vụ bên ngoài thông qua server plugin. Ví dụ: tích hợp GitHub, filesystem...

---

## N

### NFC
**Near Field Communication** — Giao thức giao tiếp không dây tầm ngắn (< 4cm) tương thích với RFID HF 13.56 MHz. Hầu hết smartphone hiện đại đều có NFC, cho phép đọc thẻ RFID TXNG mà không cần thiết bị đặc biệt.

### NN&PTNT
**Nông nghiệp và Phát triển Nông thôn** — Bộ NN&PTNT là cơ quan ban hành các thông tư, quy định về TXNG nông lâm thủy sản tại Việt Nam (Thông tư 03/2021/TT-BNNPTNT).

---

## O

### OAuth 2.0
**Open Authorization 2.0** — Giao thức ủy quyền mở, cho phép ứng dụng bên thứ ba truy cập tài nguyên của người dùng mà không cần mật khẩu. TXNG dùng OAuth 2.0 cho tích hợp với hệ thống bên ngoài.

---

## P

### Peer Node
Trong Hyperledger Fabric, peer node là máy chủ tham gia mạng blockchain, lưu trữ bản sao ledger và thực thi chaincode. Mỗi tổ chức trong mạng TXNG vận hành ít nhất một peer node.

### PLS
**Positive List System** — Hệ thống kiểm soát dư lượng thuốc BVTV của Nhật Bản: chỉ cho phép các chất có trong danh sách, chất không có trong danh sách bị giới hạn ở mức 0.01 ppm. TXNG giúp chứng minh tuân thủ PLS.

---

## Q

### QR Code
**Quick Response Code** — Mã ma trận 2D có thể lưu trữ đến 4296 ký tự. Trong TXNG, QR Code chứa URL dẫn đến trang tra cứu nguồn gốc sản phẩm. Người tiêu dùng quét bằng camera điện thoại, không cần cài app.

---

## R

### RBAC
**Role-Based Access Control** (Kiểm soát truy cập dựa trên vai trò) — Mô hình phân quyền trong đó quyền truy cập được gán theo vai trò (nông dân, nhà chế biến, kiểm định viên, admin...) thay vì từng người dùng riêng lẻ.

### RCEP
**Regional Comprehensive Economic Partnership** — Hiệp định Đối tác Kinh tế Toàn diện Khu vực (ASEAN + Trung Quốc, Nhật Bản, Hàn Quốc, Úc, New Zealand). Có hiệu lực từ 2022, tạo ra thị trường FTA lớn nhất thế giới với tiêu chuẩn TXNG ngày càng cao.

### RFID
**Radio-Frequency Identification** — Công nghệ nhận dạng bằng sóng vô tuyến. Gồm thẻ RFID (gắn vào sản phẩm) và đầu đọc RFID. Ưu điểm: đọc được nhiều thẻ cùng lúc, xuyên vật liệu, không cần nhìn thấy trực tiếp.

### REST / RESTful
**Representational State Transfer** — Kiến trúc thiết kế API web phổ biến nhất. TXNG API tuân theo chuẩn RESTful: dùng HTTP verbs (GET, POST, PUT, DELETE), trả về JSON, stateless.

### ROI
**Return on Investment** (Lợi tức đầu tư) — Tỷ lệ lợi nhuận thu về so với vốn đầu tư ban đầu. Hệ thống TXNG thường đạt ROI 400-1000% nhờ tăng giá trị sản phẩm và giảm thiệt hại thu hồi hàng.

---

## S

### Smart Contract
Chương trình tự thực thi trên blockchain khi điều kiện được thỏa mãn, không cần bên trung gian. Trong TXNG, Smart Contract tự động kiểm tra tính hợp lệ của sự kiện truy xuất trước khi ghi vào ledger.

### SSCC
**Serial Shipping Container Code** — Mã định danh duy nhất cho pallet hoặc container vận chuyển theo chuẩn GS1 (18 chữ số). Dùng trong logistics để theo dõi lô hàng qua các khâu vận chuyển.

### SSL/TLS
**Secure Sockets Layer / Transport Layer Security** — Giao thức mã hóa kết nối internet (HTTPS). TXNG yêu cầu **TLS 1.3** cho toàn bộ giao tiếp API để bảo vệ dữ liệu truyền tải.

---

## T

### TPS
**Transactions Per Second** — Số giao dịch xử lý được trong một giây. Hyperledger Fabric đạt 1000+ TPS, đủ đáp ứng nhu cầu TXNG quy mô lớn.

### TXNG
**Truy Xuất Nguồn Gốc** — Thuật ngữ tiếng Việt cho Traceability/Food Traceability. Là khả năng theo dõi lịch sử, vị trí và hành trình của sản phẩm qua toàn bộ chuỗi cung ứng.

---

## U

### UHF
**Ultra High Frequency** — Tần số siêu cao (860-960 MHz) dùng cho RFID tầm xa (1-12m). Phổ biến nhất trong logistics, quản lý kho, theo dõi container. Cho phép đọc hàng trăm thẻ/giây khi xe hàng đi qua cổng đọc.

---

## V

### VietGAP
**Vietnamese Good Agricultural Practices** — Thực hành Nông nghiệp Tốt của Việt Nam, ban hành bởi Bộ NN&PTNT. Tương đương GlobalGAP nhưng được điều chỉnh phù hợp với điều kiện Việt Nam. Yêu cầu hồ sơ TXNG đầy đủ.

---

## W

### WHO
**World Health Organization** — Tổ chức Y tế Thế giới. Cùng FAO ban hành chuẩn Codex Alimentarius và hướng dẫn toàn cầu về an toàn thực phẩm và TXNG.

---

## X

### XML / JSON
Hai định dạng dữ liệu phổ biến trong TXNG:
- **XML** — Dùng trong EPCIS 1.x và các hệ thống cũ
- **JSON** — Định dạng hiện đại, nhẹ hơn, dùng trong EPCIS 2.0 và TXNG REST API

---

*📅 Trang từ điển này được cập nhật liên tục. Nếu bạn cần giải thích thêm thuật ngữ nào, vui lòng [tạo Issue trên GitHub](https://github.com/huamanhtuyen/txng-docs/issues/new).*
