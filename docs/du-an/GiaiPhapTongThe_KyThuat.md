**BỘ CÔNG THƯƠNG**

**CỤC QUẢN LÝ VÀ PHÁT TRIỂN THỊ TRƯỜNG TRONG NƯỚC**

**CHƯƠNG X**

**GIẢI PHÁP KỸ THUẬT TỔNG THỂ HỆ THỐNG**

**TRUY XUẤT NGUỒN GỐC HÀNG HÓA QUỐC GIA**

**VeriGoods++**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Thông tin**          **Nội dung**
  ---------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  Dự án                  Ứng dụng công nghệ số và kỹ thuật tiên tiến nhằm truy xuất nguồn gốc sản phẩm công nghiệp thuộc các lĩnh vực công nghiệp ưu tiên phát triển

  Chủ đầu tư             Bộ Công Thương --- Cục Quản lý và Phát triển thị trường trong nước

  Phiên bản              2.0 --- Hồ sơ đề xuất kỹ thuật

  Ngày lập               Tháng 5, năm 2026

  Căn cứ pháp lý         Dự thảo Nghị định BCA + Dự thảo Thông tư BCT (hiệu lực 01/07/2026)
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------

# MỤC LỤC

**1.** Giới thiệu tổng quan

**2.** Mô hình nghiệp vụ tổng thể

**3.** Kiến trúc phần mềm --- 8 phân hệ · 37 module · 400 UC

**4.** Kiến trúc kỹ thuật

**5.** Thiết kế hạ tầng

**6.** Phương pháp lập BOQ

**7.** Hiệu năng và quy mô hệ thống

**8.** An toàn và bảo mật

**9.** Khả năng mở rộng

**10.** Kết luận

# 1. GIỚI THIỆU TỔNG QUAN

## 1.1 Mục tiêu hệ thống

Hệ thống VeriGoods++ được thiết kế nhằm xây dựng nền tảng truy xuất nguồn gốc hàng hóa toàn quốc, đáp ứng đầy đủ các yêu cầu của Nghị định Bộ Công an về định danh, xác thực và truy xuất nguồn gốc, và Thông tư Bộ Công Thương về cơ chế quản lý theo mức độ rủi ro sản phẩm. Hệ thống hướng tới các mục tiêu cụ thể sau:

- Thiết lập hạ tầng định danh sản phẩm thống nhất toàn quốc thông qua mã UID được cấp bởi Nền tảng quốc gia (BCA/C12).

- Chuẩn hóa ghi nhận sự kiện truy xuất nguồn gốc theo chuẩn EPCIS 2.0 (ISO/IEC 19987:2024) và GS1 Digital Link.

- Xây dựng cơ chế quản lý theo mức độ rủi ro: ưu tiên nhóm hàng rủi ro cao (Phụ lục II Thông tư BCT), mở rộng sang nhóm rủi ro trung bình theo lộ trình.

- Tích hợp với Nền tảng quốc gia thông qua NDOP + AgentNode theo đúng kiến trúc kỹ thuật của Bộ Công an.

- Cung cấp công cụ hậu kiểm, giám sát thị trường và xử lý vi phạm cho lực lượng Quản lý thị trường.

## 1.2 Phạm vi triển khai

Hệ thống được triển khai phục vụ toàn bộ các chủ thể tham gia vào chuỗi cung ứng sản phẩm hàng hóa tại Việt Nam, bao gồm doanh nghiệp sản xuất, kinh doanh; cơ quan quản lý nhà nước cấp trung ương và địa phương; người tiêu dùng và các đơn vị kết nối liên ngành.

  -----------------------------------------------------------------------------------------------------------
  **Hạng mục**             **Phạm vi**
  ------------------------ ----------------------------------------------------------------------------------
  Địa lý triển khai        DC chính: Hà Nội · DR site: TP. Hồ Chí Minh

  Đối tượng doanh nghiệp   DN sản xuất, nhập khẩu, phân phối nhóm hàng hóa rủi ro cao và trung bình

  Nhóm hàng ưu tiên        Sữa, đồ uống có cồn/không cồn, dầu thực vật, tiền chất, hóa chất, dệt may

  Người dùng hệ thống      Doanh nghiệp · QLTT · Hải quan · Người tiêu dùng · Quản trị viên

  Chuẩn dữ liệu áp dụng    EPCIS 2.0 · GS1 Digital Link · TCVN 12850 · ISO/IEC 19987:2024

  Giai đoạn triển khai     Giai đoạn 1 (2026): Thí điểm hàng rủi ro cao · Giai đoạn 2--3: Mở rộng toàn quốc
  -----------------------------------------------------------------------------------------------------------

## 1.3 Các bên tham gia (Actor)

  --------------------------------------------------------------------------------------------------------------------
  **Actor**                 **Vai trò**                                                  **Phạm vi UC liên quan**
  ------------------------- ------------------------------------------------------------ -----------------------------
  Doanh nghiệp (DN)         Đăng ký, khai báo sản phẩm, ghi nhận sự kiện TXNG            UC001--UC115 · UC116--UC185

  Cán bộ QLTT / Thanh tra   Hậu kiểm, giám sát, phát hiện và xử lý vi phạm               UC231--UC330

  Người tiêu dùng           Scan QR, tra cứu thông tin, phản ánh gian lận                UC186--UC230

  Quản trị viên BCT         Quản trị hệ thống, cấu hình, phân quyền                      UC361--UC400

  Bộ Công an / C12          Cấp UID/DID, xác thực chứng chỉ số, vận hành Blockchain QG   Kết nối qua AgentNode

  Hải quan, Thuế, TMĐT      Liên thông dữ liệu qua LGSP/NDOP                             UC311--UC360
  --------------------------------------------------------------------------------------------------------------------

# 2. MÔ HÌNH NGHIỆP VỤ TỔNG THỂ

## 2.1 Chuỗi nghiệp vụ TXNG

Hệ thống VeriGoods++ thực hiện theo dõi toàn bộ chuỗi cung ứng từ điểm sản xuất hoặc nhập khẩu đến tay người tiêu dùng cuối, thông qua cơ chế ghi nhận sự kiện chuẩn hóa (EPCIS). Chuỗi nghiệp vụ được tổ chức theo 5 nhóm luồng chính:

  -----------------------------------------------------------------------------------------------------------------------------------
  **Luồng nghiệp vụ**            **Mô tả**                                                          **Sự kiện EPCIS liên quan**
  ------------------------------ ------------------------------------------------------------------ ---------------------------------
  1\. Onboarding DN & Sản phẩm   Đăng ký DN, khai báo sản phẩm, nhận UID, gắn QR GS1                UC001--UC055

  2\. Sản xuất & Đóng gói        Ghi nhận lô/mẻ SX, serial, đóng gói, phát sinh event sản xuất      Production Event (UC116--UC127)

  3\. Logistics & Phân phối      Xuất kho, vận chuyển, nhập kho, giao đại lý                        Logistics Event (UC128--UC149)

  4\. Scan & Verify              Người tiêu dùng/QLTT scan QR, xác thực UID, kiểm tra tính hợp lệ   UC186--UC210

  5\. Risk & Thu hồi             Phát hiện rủi ro, cảnh báo QLTT, điều tra và thu hồi sản phẩm      UC231--UC330
  -----------------------------------------------------------------------------------------------------------------------------------

## 2.2 Luồng End-to-End chính

### Luồng 1 --- Onboarding Doanh nghiệp

  --------------------------------------------------------------------------------------------------------------
  **Bước**   **Hoạt động**                                            **Actor**      **Hệ thống**
  ---------- -------------------------------------------------------- -------------- ---------------------------
  B1         DN khai báo thông tin doanh nghiệp và nộp hồ sơ          Doanh nghiệp   Module 1.1 · UC001--UC003

  B2         BCT thẩm định, phê duyệt hồ sơ DN                        Quản trị BCT   UC004--UC007

  B3         Khai báo sản phẩm, gán mã HS và tiêu chuẩn áp dụng       Doanh nghiệp   Module 1.2 · UC011--UC025

  B4         Yêu cầu cấp UID --- đồng bộ với C12 qua AgentNode/NDOP   Hệ thống       Module 1.3 · UC026--UC028

  B5         Tạo mã QR GS1 Digital Link chứa UID                      Hệ thống       Module 2.3 · UC086--UC095
  --------------------------------------------------------------------------------------------------------------

### Luồng 2 --- Ghi nhận sự kiện sản xuất & phân phối

  ---------------------------------------------------------------------------------------------------------------------
  **Bước**   **Hoạt động**                                          **Event EPCIS**              **Actor**
  ---------- ------------------------------------------------------ ---------------------------- ----------------------
  B1         Tạo lô sản xuất, gán sản phẩm/serial                   (khởi tạo lô)                DN

  B2         Kết thúc SX: ghi nhận event sản xuất (CTE bắt buộc)    ObjectEvent/SX               Hệ thống

  B3         Đóng gói và xuất kho nhà máy                           ObjectEvent/Pack             DN + Hệ thống

  B4         Vận chuyển: ghi nhận điểm xuất -- đến -- thời gian     AggregationEvent/Logistics   DN/đối tác logistics

  B5         Nhập kho phân phối / bán lẻ (CTE bắt buộc nhập khẩu)   ObjectEvent/Retail           Phân phối
  ---------------------------------------------------------------------------------------------------------------------

### Luồng 3 --- Scan QR & Xác minh

Khi người dùng scan mã QR GS1 trên sản phẩm, hệ thống thực hiện chuỗi xử lý: QR Resolver tra cứu UID → kiểm tra tính hợp lệ UID với C12 qua AgentNode → truy vấn chuỗi sự kiện EPCIS → tổng hợp và trả kết quả (hợp lệ / cảnh báo / không tìm thấy) trong thời gian dưới 2 giây.

### Luồng 4 --- Risk Engine & Thu hồi

  ------------------------------------------------------------------------------------------------------------------
  **Bước**   **Hoạt động**                                                             **Output**
  ---------- ------------------------------------------------------------------------- -----------------------------
  B1         Risk Engine tính điểm rủi ro theo mã HS, profile DN, completeness event   Risk Score

  B2         Alert engine phát cảnh báo khi vượt ngưỡng                                Alert → QLTT Dashboard

  B3         QLTT lập kế hoạch kiểm tra thực địa                                       Kế hoạch kiểm tra

  B4         Ghi nhận vi phạm, mở hồ sơ điều tra                                       Hồ sơ vi phạm

  B5         Phát lệnh thu hồi, đánh dấu serial/lô thu hồi                             Recall command → DN
  ------------------------------------------------------------------------------------------------------------------

# 3. KIẾN TRÚC PHẦN MỀM

## 3.1 Tổng quan 8 phân hệ

Kiến trúc phần mềm VeriGoods++ được tổ chức thành 8 phân hệ độc lập, tương ứng với các nhóm chức năng nghiệp vụ khác nhau, triển khai theo mô hình microservices. Mỗi phân hệ bao gồm nhiều module và được quản lý độc lập về vòng đời, khả năng mở rộng và SLA.

  ---------------------------------------------------------------------------------------------------------------------------
  **STT**   **Phân hệ**             **Số module**   **Phạm vi chức năng**                                  **UC tương ứng**
  --------- ----------------------- --------------- ------------------------------------------------------ ------------------
  1         Định danh & Đăng ký     5               Đăng ký DN, sản phẩm, UID, danh mục, hồ sơ             UC001--UC055

  2         Sản xuất & Lot/Serial   5               Quản lý lô, serial, QR, đóng gói, kho                  UC056--UC115

  3         Event EPCIS             6               Ghi nhận, lưu trữ, truy vấn sự kiện chuỗi cung ứng     UC116--UC185

  4         Xác thực & Người dùng   4               Scan QR, xác minh UID, hiển thị, phản ánh              UC186--UC230

  5         Risk & QLTT             6               Tính điểm rủi ro, giám sát, cảnh báo, dashboard        UC231--UC295

  6         Vi phạm & Thu hồi       4               Ghi nhận vi phạm, điều tra, thu hồi, xử phạt           UC296--UC330

  7         Tích hợp                4               API, LGSP, đồng bộ dữ liệu, Data Lake/ETL              UC331--UC360

  8         Quản trị & Vận hành     3               Người dùng, phân quyền, audit log, cấu hình hệ thống   UC361--UC400

            Tổng cộng               37 module       8 phân hệ · kiến trúc microservices                    \~400 UC Level 2
  ---------------------------------------------------------------------------------------------------------------------------

## 3.2 Danh sách 37 module

### Phân hệ 1 --- Định danh & Đăng ký (5 module)

  ------------------------------------------------------------------------------------------------------
  **Module**   **Tên**                **Mô tả chức năng chính**
  ------------ ---------------------- ------------------------------------------------------------------
  1.1          Quản lý Doanh nghiệp   Đăng ký, thẩm định, phê duyệt, phân loại và quản lý vòng đời DN

  1.2          Quản lý Sản phẩm       Hồ sơ sản phẩm, phiên bản, gán mã HS, tiêu chuẩn áp dụng

  1.3          Quản lý UID            Yêu cầu và đồng bộ mã UID với C12, gán vào lô/serial, tra cứu

  1.4          Quản lý Danh mục       Danh mục ngành, mã rủi ro, mã HS, tiêu chuẩn QCVN/TCVN

  1.5          Quản lý Hồ sơ          Tải lên, phân loại, quản lý vòng đời tài liệu và giấy tờ pháp lý
  ------------------------------------------------------------------------------------------------------

### Phân hệ 2 --- Sản xuất & Lot/Serial (5 module)

  ----------------------------------------------------------------------------------------------
  **Module**   **Tên**            **Mô tả chức năng chính**
  ------------ ------------------ --------------------------------------------------------------
  2.1          Quản lý LOT        Tạo, quản lý, tách/gộp lô sản xuất; kiểm tra hợp lệ lô

  2.2          Quản lý SERIAL     Sinh serial theo dải/lô, quản lý trạng thái, phát hiện trùng

  2.3          Quản lý QR         Tạo mã QR GS1 Digital Link, gán UID, in ấn theo template

  2.4          Quản lý Đóng gói   Ghi nhận đóng gói đa cấp, gán lô/serial vào đơn vị đóng gói

  2.5          Quản lý Kho        Nhập/xuất/chuyển kho, kiểm kê, điều chỉnh tồn kho
  ----------------------------------------------------------------------------------------------

### Phân hệ 3 --- Event EPCIS (6 module)

  -----------------------------------------------------------------------------------------------------
  **Module**   **Tên**            **Mô tả chức năng chính**
  ------------ ------------------ ---------------------------------------------------------------------
  3.1          Production Event   Ghi nhận sự kiện sản xuất theo chuẩn EPCIS 2.0

  3.2          Logistics Event    Sự kiện vận chuyển: xuất kho, giao nhận, điểm trung chuyển

  3.3          Retail Event       Sự kiện bán lẻ tại điểm cuối: nhập điểm bán, xuất bán, thu hồi

  3.4          Event Validation   Kiểm tra schema, quy tắc nghiệp vụ, trùng lặp, liên kết LOT--SERIAL

  3.5          Event Storage      Lưu trữ phân vùng, nén, retention policy (12/60 tháng), sao lưu

  3.6          Event Query        Truy vấn đa chiều: theo sản phẩm, lô, serial, thời gian, địa điểm
  -----------------------------------------------------------------------------------------------------

### Phân hệ 4 --- Xác thực & Người dùng (4 module)

  --------------------------------------------------------------------------------------------------------
  **Module**   **Tên**                **Mô tả chức năng chính**
  ------------ ---------------------- --------------------------------------------------------------------
  4.1          Scan QR                Tiếp nhận yêu cầu scan, resolve UID, kiểm tra tính hợp lệ

  4.2          Verification           Gọi AgentNode/NDOP xác minh UID/DID với C12, kiểm tra chứng chỉ số

  4.3          Consumer Interaction   Hiển thị thông tin sản phẩm, lịch sử lưu thông, kết quả xác minh

  4.4          Feedback & Report      Tiếp nhận phản ánh từ người tiêu dùng, chuyển QLTT xử lý
  --------------------------------------------------------------------------------------------------------

### Phân hệ 5 --- Risk & QLTT (6 module)

  ----------------------------------------------------------------------------------------------------
  **Module**   **Tên**          **Mô tả chức năng chính**
  ------------ ---------------- ----------------------------------------------------------------------
  5.1          Risk Scoring     Tính điểm rủi ro DN/SP dựa trên mã HS, completeness, lịch sử vi phạm

  5.2          Rule Engine      Cấu hình quy tắc rủi ro theo Phụ lục I & II Thông tư BCT

  5.3          Monitoring       Giám sát real-time hoạt động ghi nhận event, bất thường trong chuỗi

  5.4          Alert            Phát cảnh báo ngưỡng rủi ro, push notification đến QLTT

  5.5          Dashboard QLTT   Bản đồ rủi ro, thống kê hàng hóa, kế hoạch kiểm tra thực địa

  5.6          Analytics        Phân tích xu hướng, báo cáo tổng hợp, BI/data visualization
  ----------------------------------------------------------------------------------------------------

### Phân hệ 6 --- Vi phạm & Thu hồi (4 module)

  -------------------------------------------------------------------------------------------------
  **Module**   **Tên**         **Mô tả chức năng chính**
  ------------ --------------- --------------------------------------------------------------------
  6.1          Violation       Ghi nhận vi phạm từ QLTT, scan phát hiện, phản ánh người tiêu dùng

  6.2          Investigation   Quản lý hồ sơ điều tra, thu thập bằng chứng, phân công

  6.3          Recall          Phát lệnh thu hồi, gán trạng thái serial/lô, theo dõi tiến độ

  6.4          Penalty         Lập biên bản, quyết định xử phạt, theo dõi thực thi
  -------------------------------------------------------------------------------------------------

### Phân hệ 7 --- Tích hợp (4 module)

  --------------------------------------------------------------------------------------------------------
  **Module**   **Tên**            **Mô tả chức năng chính**
  ------------ ------------------ ------------------------------------------------------------------------
  7.1          API Management     Quản lý API endpoint, rate limiting, OAuth2, versioning

  7.2          LGSP Integration   Kết nối liên thông Hải quan, Thuế, TMĐT qua LGSP/NGSP

  7.3          Data Sync          Đồng bộ dữ liệu chủ với NDOP/C12 qua AgentNode theo batch/real-time

  7.4          Data Lake / ETL    Thu thập, làm sạch, chuyển đổi dữ liệu vào Data Lake phục vụ analytics
  --------------------------------------------------------------------------------------------------------

### Phân hệ 8 --- Quản trị & Vận hành (3 module)

  -----------------------------------------------------------------------------------------------------
  **Module**   **Tên**         **Mô tả chức năng chính**
  ------------ --------------- ------------------------------------------------------------------------
  8.1          User & Role     Quản lý người dùng, phân quyền RBAC theo vai trò và đơn vị

  8.2          Audit & Log     Nhật ký đầy đủ mọi thao tác, không thể xóa, lưu trữ ≥ retention policy

  8.3          System Config   Cấu hình tham số hệ thống, retention, SLA, cấu hình AgentNode
  -----------------------------------------------------------------------------------------------------

## 3.3 Phân bổ 400 Use Case Level 2

  ---------------------------------------------------------------------------------------
  **Phân hệ**           **Module**   **Số UC**   **Dải UC**     **Actor chính**
  --------------------- ------------ ----------- -------------- -------------------------
  1\. Định danh & ĐK    5            55          UC001--UC055   DN · BCT Admin

  2\. SX & Lot/Serial   5            60          UC056--UC115   DN · Hệ thống tự động

  3\. Event EPCIS       6            70          UC116--UC185   DN · API · Hệ thống

  4\. Xác thực & NSD    4            45          UC186--UC230   Người tiêu dùng · QLTT

  5\. Risk & QLTT       6            65          UC231--UC295   QLTT · Analytics engine

  6\. Vi phạm & TH      4            35          UC296--UC330   QLTT · Thanh tra

  7\. Tích hợp          4            30          UC331--UC360   Hệ thống · API · LGSP

  8\. Quản trị & VH     3            40          UC361--UC400   Quản trị viên hệ thống

                        Tổng         400         UC001--UC400   5 nhóm Actor chính
  ---------------------------------------------------------------------------------------

## 3.4 Mapping Use Case → Actor

  ----------------------------------------------------------------------------------------------------------------------------
  **Actor**              **Nhóm UC**                              **Số UC**   **Mô tả vai trò**
  ---------------------- ---------------------------------------- ----------- ------------------------------------------------
  Doanh nghiệp (DN)      UC001--UC115 · UC116--UC185 (một phần)   \~115       Đăng ký, khai báo, ghi nhận sự kiện, tra cứu

  Người tiêu dùng        UC186--UC230                             45          Scan QR, xác minh, phản ánh, tra cứu công khai

  QLTT / Thanh tra       UC231--UC330                             100         Hậu kiểm, giám sát, xử lý vi phạm, thu hồi

  Liên ngành (HQ/Thuế)   UC331--UC360                             30          Kết nối LGSP, đồng bộ dữ liệu liên ngành

  Quản trị viên BCT      UC361--UC400                             40          Cấu hình, phân quyền, audit, quản trị hệ thống
  ----------------------------------------------------------------------------------------------------------------------------

# 4. KIẾN TRÚC KỸ THUẬT

## 4.1 Kiến trúc phân lớp tổng thể

Hệ thống VeriGoods++ được thiết kế theo mô hình kiến trúc 5 lớp (Five-Layer Architecture), bảo đảm tách bạch chức năng, khả năng mở rộng độc lập từng lớp và tuân thủ đúng kiến trúc phân vai giữa hệ thống BCT và Nền tảng quốc gia BCA.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Lớp**               **Thành phần**                                                                **Chức năng**                                                           **Công nghệ**
  --------------------- ----------------------------------------------------------------------------- ----------------------------------------------------------------------- -----------------------------------------------------------
  Layer 1 Access        Load Balancer · WAF · API Gateway · QR Resolver                               Tiếp nhận request, bảo vệ, phân tải, resolve UID                        Nginx/HAProxy · Kong/AWS API GW · CDN/Cache

  Layer 2 Application   App Microservices · EPCIS Processing · Risk Engine · Case Mgmt · Cache        Xử lý nghiệp vụ 8 phân hệ · 37 module · 400 UC                          Spring Boot/FastAPI · Kubernetes · Redis

  Layer 3 Data          Master DB · EPCIS Event Store · Serial/Scan DB · Search Cluster · Data Lake   Lưu trữ dữ liệu chủ và sự kiện · tìm kiếm · phân tích                   PostgreSQL HA · Cassandra/TSDB · Elasticsearch · MinIO/S3

  Layer 4 Integration   Kafka Cluster · ESB · LGSP Adapter · AgentNode Connector                      Streaming event · tích hợp nội bộ · kết nối liên ngành · cầu nối NDOP   Apache Kafka · WSO2/Mule · REST/SOAP · XML/JSON

  Layer 5 National      AgentNode (do BCA cấp) · NDOP Platform · C12 Services (UID/DID/PKI)           Cổng kết nối quốc gia · định danh · xác thực · blockchain               Theo quy định BCA · MPLS/TSLCD · XML+Ký số
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4.2 Topology node (9 loại node)

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Node**   **Tên**                            **Số lượng**                                                        **Module phục vụ**                     **Cấu hình tối thiểu**
  ---------- ---------------------------------- ------------------------------------------------------------------- -------------------------------------- ----------------------------------------
  N1         Access / LB Node                   Load Balancer x2 · WAF x2 · API GW x3 · QR Resolver x3              Module 4.1 · 4.2                       ≥16 vCPU · 64GB RAM

  N2         App Server Node (Microservices)    12                                                                  Tất cả module nghiệp vụ (1.x -- 6.x)   ≥32 vCPU · 128GB RAM · SSD ≥1TB

  N3         EPCIS Processing Node              6                                                                   Module 3.1--3.6                        ≥32 vCPU · 128GB RAM · SSD ≥2TB (NVMe)

  N4         Risk/Analytics Node                4                                                                   Module 5.1--5.6                        ≥32 vCPU · 128GB RAM (GPU tùy chọn)

  N5         Case/Workflow Node                 4                                                                   Module 6.1--6.4                        ≥16 vCPU · 64GB RAM

  N6         Data Node (DB/EventStore/Search)   Master DB x3 · EventStore x8 · ScanDB x4 · Search x5                Tất cả phân hệ                         ≥32 vCPU · 128GB RAM · SSD ≥4--8TB

  N7         Integration Node (Kafka/ESB)       Kafka x5 · ESB x5                                                   Module 7.1--7.4                        ≥32 vCPU · 128GB RAM · SSD ≥4TB

  N8         AgentNode (BCA cấp)                DC x1 · DR x1 (+ Connector x2)                                      Module 7.3 · 1.3                       Theo quy chuẩn BCA

  N9         DR Site Node                       App DR x4--6 · DB Replica x3--4 · Storage DR x1 · AgentNode DR x1   Dự phòng toàn bộ                       50--70% cấu hình DC chính
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4.3 Kiến trúc kết nối NDOP + AgentNode

Theo đúng kiến trúc kỹ thuật của Bộ Công an, hệ thống VeriGoods++ không kết nối trực tiếp với các dịch vụ C12 qua internet, mà thực hiện tích hợp thông qua NDOP Platform (Nền tảng chia sẻ, điều phối dữ liệu) tại Trung tâm dữ liệu quốc gia. Điểm kết nối duy nhất là AgentNode đặt tại BCT.

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Thành phần**        **Vị trí**                        **Vai trò**                                                            **Kênh truyền**
  --------------------- --------------------------------- ---------------------------------------------------------------------- ----------------------------------------------------
  AgentNode (DC)        Đặt tại BCT Hà Nội (do BCA cấp)   Cổng kết nối duy nhất: đóng gói, ký số, truyền nhận dữ liệu lên NDOP   MPLS/TSLCD (CP.NET) --- không dùng internet public

  AgentNode (DR)        Đặt tại site DR TP.HCM            Failover cho AgentNode DC                                              MPLS dự phòng

  AgentNode Connector   Nội bộ BCT (do dự án mua)         Gateway nội bộ kết nối App Server với AgentNode                        API nội bộ/EPCIS

  NDOP Platform         Trung tâm DLQG                    Điều phối, routing, audit log, kiểm soát truy cập                      Đường truyền quốc gia

  C12 Services          BCA vận hành                      Cấp UID/DID, xác thực PKI, quản lý Blockchain QG                       Qua NDOP
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Nguyên tắc kết nối (5 điều bắt buộc): (1) AgentNode là gateway duy nhất; (2) Không kết nối trực tiếp C12; (3) Không dùng internet public; (4) Message phải ký số theo chuẩn BCA; (5) Chỉ đồng bộ UID/DID --- KHÔNG đồng bộ EPCIS event.
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4.4 Luồng dữ liệu cấp UID

Luồng cấp UID cho sản phẩm: VeriGoods++ → AgentNode Connector → AgentNode (ký số XML) → NDOP → C12 UID Service → NDOP → AgentNode → VeriGoods++ (lưu UID). Toàn bộ luồng đi qua kênh truyền chuyên dùng MPLS/TSLCD, thời gian phản hồi theo cam kết SLA hệ thống quốc gia.

## 4.5 Phân biệt dữ liệu đồng bộ với NDOP/C12

  ----------------------------------------------------------------------------------------------------------------------
  **Loại dữ liệu**    **Đồng bộ NDOP/C12?**   **Lý do**                                      **Module xử lý**
  ------------------- ----------------------- ---------------------------------------------- ---------------------------
  UID sản phẩm        ✅ Có --- bắt buộc      UID do C12 cấp --- cần lấy về và lưu tại BCT   Module 1.3 · UC026--UC028

  DID tổ chức/DN      ✅ Có --- bắt buộc      Định danh pháp nhân trên Blockchain QG         Module 1.1 · UC028

  EPCIS Event         ❌ Không                Dữ liệu nghiệp vụ TXNG lưu tại BCT             Module 3.x --- nội bộ BCT

  Scan Log            ❌ Không                Dữ liệu vận hành nội bộ                        Module 4.1 --- nội bộ

  Chứng chỉ số (VC)   Theo yêu cầu            Xác minh khi cần --- không đồng bộ toàn bộ     Module 4.2 · AgentNode
  ----------------------------------------------------------------------------------------------------------------------

# 5. THIẾT KẾ HẠ TẦNG

## 5.1 Danh mục thiết bị theo nhóm chức năng

### Nhóm A --- Access & Edge

  --------------------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**                     **SL**   **Cấu hình tối thiểu**            **Ghi chú**
  -------- -------------------------------- -------- --------------------------------- -------------------------------
  A1       Load Balancer (hardware)         2        ≥40Gbps, multi-algorithm          HA pair

  A2       WAF (Web Application Firewall)   2        ≥10Gbps, OWASP Top 10, Bot/DDoS   CDN tích hợp

  A3       API Gateway Node                 3        ≥16 vCPU · 64GB RAM               Rate-limit, OAuth2, Cluster

  A4       QR Resolver / Edge               3        ≥8 vCPU · 32GB RAM                Geo-cache, đặt gần người dùng
  --------------------------------------------------------------------------------------------------------------------

### Nhóm B --- Application / Compute

  -------------------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**                 **SL**   **Cấu hình tối thiểu**                 **Ghi chú**
  -------- ---------------------------- -------- -------------------------------------- -----------------------------
  B1       App Server (Microservices)   12       ≥32 vCPU · 128GB RAM · SSD ≥1TB        Container (K8s) · autoscale

  B2       EPCIS Processing Server      6        ≥32 vCPU · 128GB RAM · SSD ≥2TB NVMe   Throughput cao

  B3       Risk/Analytics Compute       4        ≥32 vCPU · 128GB RAM (GPU tùy chọn)    Có thể scale-out

  B4       Case/Workflow Server         4        ≥16 vCPU · 64GB RAM                    Điều tra, thu hồi

  B5       Cache (Redis Cluster)        3        ≥16 vCPU · 128GB RAM                   In-memory, Cluster mode
  -------------------------------------------------------------------------------------------------------------------

### Nhóm C --- Data Layer

  ---------------------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**                     **SL**   **Cấu hình tối thiểu**                   **Ghi chú**
  -------- -------------------------------- -------- ---------------------------------------- -------------------------
  C1       Master DB (PostgreSQL HA)        3        ≥32 vCPU · 128GB RAM · SSD ≥4TB NVMe     Primary + 2 Standby

  C2       EPCIS Event Store                8        ≥32 vCPU · 128GB RAM · SSD ≥8TB NVMe     NoSQL/TSDB · scale-out

  C3       Serial/Scan DB                   4        ≥16 vCPU · 64GB RAM · SSD ≥4TB           Log scan, tra cứu nhanh

  C4       Search Cluster (Elasticsearch)   5        ≥16 vCPU · 64GB RAM · SSD ≥4TB           Hot/Warm tier

  C5       SAN Storage                      1        Usable ≥100TB · RAID 10 NVMe tier        Block storage cho DB/VM

  C6       NAS Storage                      1        Usable ≥50TB · RAID 6                    File/backup storage

  C7       Data Lake (Object Storage)       1 cụm    ≥200TB · S3-compatible                   MinIO/S3 · analytics

  C8       Backup System                    1        ≥100TB + Tape/Cloud · Immutable backup   DR · bare-metal restore
  ---------------------------------------------------------------------------------------------------------------------

### Nhóm D --- Integration & Streaming

  --------------------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**                  **SL**   **Cấu hình tối thiểu**            **Ghi chú**
  -------- ----------------------------- -------- --------------------------------- ----------------------------------
  D1       Integration Hub (ESB/Kafka)   5        ≥32 vCPU · 128GB RAM              HA cluster · Mule/WSO2/Kafka

  D2       API Management Platform       1        Enterprise license                SaaS hoặc on-prem

  D3       LGSP/NGSP Adapter             1        Custom adapter                    Kết nối Hải quan, Thuế, TMĐT

  D4       Kafka Cluster (Streaming)     5        ≥32 vCPU · 128GB RAM · SSD ≥4TB   Tiered storage · real-time event
  --------------------------------------------------------------------------------------------------------------------

### Nhóm E --- Security & Crypto

  -------------------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**                     **SL**   **Yêu cầu**                        **Ghi chú**
  -------- -------------------------------- -------- ---------------------------------- -----------------------------
  E1       Firewall (NGFW)                  2        ≥10--20Gbps throughput             HA pair · rule-based

  E2       IDS/IPS                          2        Deep packet inspection             SOC integration

  E3       PKI / CA System                  1        Tuân thủ Thông tư 08/2025/BCA      Tích hợp Ban Cơ yếu/BCA

  E4       HSM (Hardware Security Module)   1--2     FIPS 140-2 Level 3                 Bảo vệ khóa mật mã · HA

  E5       IAM / SSO Platform               1        MFA · RBAC · LDAP/AD integration   Toàn bộ người dùng hệ thống
  -------------------------------------------------------------------------------------------------------------------

### Nhóm F --- Network (DC + DR)

  ------------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**              **SL**   **Thông số**                    **Ghi chú**
  -------- ------------------------- -------- ------------------------------- --------------------------
  F1       Core Switch               2        10/25/40Gbps · ≥24 ports        Stack · HA

  F2       Access Switch             6        1/10Gbps · ≥48 ports · PoE      Phân tán theo rack

  F3       Router WAN                2        ≥10Gbps · Dual ISP              MPLS/TSLCD

  F4       VPN Gateway               2        IPsec · MPLS/TSLCD · TLS 1.2+   Kết nối AgentNode → NDOP

  F5       Load Balancer (network)   2        Network-level L4 LB             HA pair
  ------------------------------------------------------------------------------------------------------

### Nhóm G --- DR Site (TP.HCM)

  ------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**           **SL**   **Ghi chú**
  -------- ---------------------- -------- -------------------------------------------------
  G1       App Server (standby)   4--6     Tương đương 50--70% DC chính · warm standby

  G2       DB Replica             3--4     Synchronous (Master DB) + Async (Event Store)

  G3       Storage DR             1        Replication từ DC chính · đảm bảo RPO ≤ 15 phút

  G4       AgentNode (DR)         1--2     Bắt buộc theo kiến trúc BCA · failover tự động
  ------------------------------------------------------------------------------------------

### Nhóm H --- AgentNode (Bắt buộc theo kiến trúc BCA)

  --------------------------------------------------------------------------------------------------
  **Mã**   **Hạng mục**           **SL**   **Ghi chú**
  -------- ---------------------- -------- ---------------------------------------------------------
  H1       AgentNode (DC chính)   1        Do BCA cấp phát · không tự mua · đặt tại BCT HN

  H2       AgentNode (DR)         1        Failover · bắt buộc theo quy định kết nối NDOP

  H3       AgentNode Connector    2        Gateway nội bộ kết nối App với AgentNode · do dự án mua
  --------------------------------------------------------------------------------------------------

## 5.2 Phân bổ thiết bị theo địa lý

  --------------------------------------------------------------------------------------------------------------------------
  **Nhóm thiết bị**   **DC Hà Nội (DC chính)**                                    **DR TP.HCM (DR site)**    **Tổng**
  ------------------- ----------------------------------------------------------- -------------------------- ---------------
  Access & Edge (A)   LB x2 · WAF x2 · API GW x3 · QR x3                          LB x1 (nếu cần)            \~10--11

  Compute (B)         App x12 · EPCIS x6 · Risk x4 · Case x4 · Redis x3           App x4--6 (warm standby)   \~33--35

  Database (C)        Master DB x3 · EventStore x8 · ScanDB x4 · Search x5        DB Replica x3--4           \~24--25

  Storage (C5--C8)    SAN ≥100TB · NAS ≥50TB · Data Lake ≥200TB · Backup ≥100TB   Storage DR                 \~4 cụm

  Integration (D)     ESB x5 · API Mgmt x1 · LGSP x1 · Kafka x5                   DR node tối thiểu          \~12

  Security (E)        NGFW x2 · IDS/IPS x2 · PKI x1 · HSM x1--2 · IAM x1          Firewall DR x2             \~9--10

  Network (F)         Core Switch x2 · Access x6 · Router x2 · VPN x2 · LB x2     Tương đương \~60%          \~14

  AgentNode (H)       AgentNode x1 + Connector x2                                 AgentNode DR x1            \~4
  --------------------------------------------------------------------------------------------------------------------------

## 5.3 High Availability & Disaster Recovery

  -----------------------------------------------------------------------------------------------------------------------------
  **Yêu cầu**                      **Mục tiêu**                         **Giải pháp triển khai**
  -------------------------------- ------------------------------------ -------------------------------------------------------
  Availability                     ≥ 99.9% (uptime ≥ 8,736 giờ/năm)     Active-Active LB · Health check · Auto failover

  RPO (Recovery Point Objective)   ≤ 15 phút                            Synchronous replication Master DB · Async Event Store

  RTO (Recovery Time Objective)    ≤ 1 giờ                              Warm standby DR · Automated DR failover script

  Backup                           Daily full + incremental mỗi 4 giờ   Immutable backup · offsite/cloud tier

  AgentNode HA                     Bắt buộc (theo quy định BCA)         AgentNode DC + AgentNode DR · tự động chuyển đổi
  -----------------------------------------------------------------------------------------------------------------------------

# 6. PHƯƠNG PHÁP LẬP BOQ --- DỰA TRÊN KIẾN TRÚC HỆ THỐNG

## 6.1 Nguyên tắc lập dự toán

Dự toán chi phí hạ tầng được xây dựng theo phương pháp phân rã từ trên xuống (top-down decomposition), theo chuỗi logic: Nghiệp vụ (UC) → Module → Lớp chức năng → Node → Thiết bị → Chi phí. Phương pháp này bảo đảm tính minh bạch, khả năng kiểm chứng và phù hợp với quy mô vận hành thực tế.

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Chuỗi logic BOQ: Use Case (400 UC) → Module (37 module) → Lớp kiến trúc (5 layer) → Node topology (9 loại node) → Thiết bị cụ thể (danh mục A--I) → Chi phí đầu tư.
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 6.2 Mapping thiết bị → Node → UC

  --------------------------------------------------------------------------------------------------------------
  **Thiết bị**              **Node**                  **Lớp**       **Module phục vụ**   **UC tương ứng**
  ------------------------- ------------------------- ------------- -------------------- -----------------------
  App Server x12 (B1)       N2 --- App Node           Application   Tất cả phân hệ       UC001--UC400

  EPCIS Server x6 (B2)      N3 --- EPCIS Node         Application   Module 3.1--3.6      UC116--UC185

  Risk Server x4 (B3)       N4 --- Analytics Node     Application   Module 5.1--5.6      UC231--UC295

  Master DB x3 (C1)         N6 --- Data Node          Data          Module 1.x · 2.x     UC001--UC115

  Event Store x8 (C2)       N6 --- Data Node          Data          Module 3.x           UC116--UC185

  Kafka x5 (D4)             N7 --- Integration Node   Integration   Module 7.1--7.4      UC331--UC360

  AgentNode x2 (H1--H2)     N8 --- AgentNode          National      Module 1.3 · 7.3     UC026--UC028 · UC331+

  LB x2 · WAF x2 (A1--A2)   N1 --- Access Node        Access        Toàn bộ              UC186--UC230 (scan)
  --------------------------------------------------------------------------------------------------------------

## 6.3 Phân bổ chi phí theo lớp kiến trúc (ước tính)

  -----------------------------------------------------------------------------------------------------------------------
  **Lớp kiến trúc**         **Thiết bị chính**                     **Tỷ trọng ước tính**   **Cơ sở tính**
  ------------------------- -------------------------------------- ----------------------- ------------------------------
  Access & Edge             LB · WAF · API GW · QR Resolver        8--10%                  10 node × đơn giá thị trường

  Application / Compute     App Server · EPCIS · Risk · Cache      30--35%                 29 node × 32--128 vCPU

  Data Layer                DB · EventStore · Search · Storage     35--40%                 SAN 100TB + Data Lake 200TB

  Integration & Streaming   Kafka · ESB · API Mgmt                 10--12%                 10 node streaming

  Security & Network        Firewall · HSM · Switch · VPN          8--10%                  HA pair, tất cả node

  AgentNode & DR Site       AgentNode + DR compute + replication   5--8%                   DR = 50--70% DC chính

                            Tổng                                   100%                    Tổng mức đầu tư phần cứng
  -----------------------------------------------------------------------------------------------------------------------

## 6.4 Yêu cầu báo giá nhà cung cấp

  -----------------------------------------------------------------------------------
  **Nội dung**                 **Yêu cầu bắt buộc**
  ---------------------------- ------------------------------------------------------
  Lead time                    ≤ 8 tuần kể từ ngày ký hợp đồng

  Bảo hành thiết bị            ≥ 3 năm onsite · ≥ 5 năm với thiết bị mạng, lưu trữ

  SLA hỗ trợ                   24/7 · Phản hồi ≤ 4 giờ · Onsite ≤ 8 giờ

  Chứng chỉ xuất xứ            CO/CQ đầy đủ · Chứng chỉ tương thích FIPS, ISO 27001

  Cam kết cung cấp linh kiện   ≥ 5 năm kể từ ngày giao hàng

  Báo giá theo danh mục        Đơn giá từng hạng mục · Số lượng · Thành tiền · VAT
  -----------------------------------------------------------------------------------

# 7. HIỆU NĂNG VÀ QUY MÔ HỆ THỐNG

## 7.1 Quy mô vận hành dự kiến

  -------------------------------------------------------------------------------------------------------
  **Chỉ tiêu**          **Giai đoạn 1 (2026)**   **Giai đoạn 2 (2027--2028)**   **Giai đoạn 3 (2029+)**
  --------------------- ------------------------ ------------------------------ -------------------------
  Số doanh nghiệp       20--50 DN pilot          200--500 DN                    2.000+ DN toàn quốc

  Số sản phẩm (SKU)     5.000--20.000            50.000--200.000                ≥ 1.000.000

  Event EPCIS / ngày    \~100.000                \~2.000.000                    ≥ 10.000.000

  Scan QR / ngày        \~500.000                \~5.000.000                    ≥ 20.000.000

  Storage event / năm   \~50GB (1KB/event)       \~730GB                        ≥ 3.6TB

  Số UID cần cấp        \~500.000                \~5.000.000                    ≥ 50.000.000
  -------------------------------------------------------------------------------------------------------

## 7.2 Chỉ tiêu hiệu năng và SLA

  -------------------------------------------------------------------------------------------------------
  **Yêu cầu SLA**         **Mục tiêu**                                **Thành phần đảm bảo**
  ----------------------- ------------------------------------------- -----------------------------------
  Scan QR → Kết quả       \< 2 giây (P95)                             QR Resolver + Cache + EPCIS Query

  API event ingest        \< 500ms per request                        EPCIS Processing Node + Kafka

  Throughput Kafka        ≥ 100.000 event/giây peak                   Kafka Cluster 5 node

  DB query response       \< 100ms (indexed)                          Master DB + Search Cluster

  UID cấp / sync          \< 5 giây (qua AgentNode)                   AgentNode → NDOP → C12

  Cung cấp DL cho CQ QL   ≤ 24 giờ (đơn giản) / ≤ 3 ngày (phức tạp)   Event Store + Export API

  Availability hệ thống   ≥ 99.9%                                     HA + DR + Auto failover

  RTO / RPO               ≤ 1h / ≤ 15 phút                            DR Site TP.HCM
  -------------------------------------------------------------------------------------------------------

## 7.3 Sizing Database và Storage

  --------------------------------------------------------------------------------------------------------------------
  **Thành phần**          **Kích thước event**       **Retention**      **Storage ước tính (GĐ 2)**
  ----------------------- -------------------------- ------------------ ----------------------------------------------
  EPCIS Event Store       \~2KB/event (trung bình)   12--60 tháng       \~2 triệu event × 365 ngày × 2KB ≈ 1.4TB/năm

  Serial/Scan DB          \~0.5KB/scan               12 tháng           \~5 triệu scan × 365 × 0.5KB ≈ 900GB/năm

  Master DB (DN/SP)       Dữ liệu chủ                Vĩnh viễn          \~50GB (tương đối nhỏ, tăng tuyến tính)

  Search Index            \~30% Event Store          12 tháng rolling   \~500GB (GĐ 2)

  Data Lake (Analytics)   Toàn bộ raw data           5 năm              ≥ 200TB (thiết kế scale-out)

  Backup (GĐ 2)           Daily + incremental        1 năm              \~100TB (SAN + Tape)
  --------------------------------------------------------------------------------------------------------------------

# 8. AN TOÀN VÀ BẢO MẬT

## 8.1 Kiến trúc bảo mật đa lớp

Hệ thống VeriGoods++ áp dụng nguyên tắc Defense-in-Depth (bảo mật theo chiều sâu), với các lớp kiểm soát độc lập từ network perimeter đến dữ liệu, kết hợp các biện pháp kỹ thuật và quy trình quản lý. Kiến trúc bảo mật tuân thủ đầy đủ yêu cầu của Bộ Công an về kết nối, chia sẻ dữ liệu với Nền tảng quốc gia.

  --------------------------------------------------------------------------------------------------------------------------
  **Lớp bảo mật**      **Biện pháp**                                                            **Tiêu chuẩn áp dụng**
  -------------------- ------------------------------------------------------------------------ ----------------------------
  Network Perimeter    NGFW + WAF + IDS/IPS · deny-all by default · VLAN segmentation           ISO 27001 · NIST CSF

  Truyền thông         VPN IPSec/TLS 1.2+ cho mọi kết nối · MPLS cho AgentNode → NDOP           TLS 1.3 khuyến nghị

  Xác thực             MFA bắt buộc · SSO tập trung · RBAC theo vai trò                         OAuth 2.0 · OpenID Connect

  Ký số                HSM FIPS 140-2 · Chứng thư số Ban Cơ yếu · Ký số mọi message NDOP        Thông tư 08/2025/BCA

  Dữ liệu              Mã hóa at-rest (AES-256) · at-transit (TLS) · Key rotation               FIPS 140-2

  PKI / CA             Tích hợp CA quốc gia (BCA) · Cấp chứng chỉ số VC                         Theo quy định BCA

  Audit & Logging      Log 100% thao tác · Immutable · SIEM integration · Retention ≥ 5 năm     ISO 27001

  AgentNode Security   Chỉ AgentNode kết nối NDOP · Cô lập mạng nội bộ · Ký số từng giao dịch   Kiến trúc BCA
  --------------------------------------------------------------------------------------------------------------------------

## 8.2 Quy tắc kiểm soát truy cập

  ------------------------------------------------------------------------------------------------------------------------
  **Nhóm người dùng**   **Phương thức xác thực**                       **Quyền truy cập**
  --------------------- ---------------------------------------------- ---------------------------------------------------
  Doanh nghiệp          Username/Password + OTP hoặc Certificate       Dữ liệu DN của mình; không xem DN khác

  QLTT / Thanh tra      Certificate số + MFA                           Dữ liệu giám sát, hậu kiểm; không sửa dữ liệu gốc

  Người tiêu dùng       Không đăng nhập (anonymous) hoặc OTP           Chỉ xem thông tin công khai qua QR

  Quản trị viên BCT     Certificate số + MFA + IP whitelist            Quản trị toàn bộ · Audit log bắt buộc

  Hệ thống (API)        Client Certificate + API Key + Rate limiting   Theo phạm vi scope được cấp
  ------------------------------------------------------------------------------------------------------------------------

# 9. KHẢ NĂNG MỞ RỘNG

## 9.1 Mở rộng theo quy mô (Scale-out)

Kiến trúc microservices và container hóa (Kubernetes) cho phép mở rộng độc lập từng dịch vụ theo nhu cầu thực tế mà không ảnh hưởng đến toàn hệ thống. Các thành phần có thể scale-out theo chiều ngang:

- App Server Cluster: tăng số pod/node tự động theo CPU/memory threshold (HPA trong K8s).

- EPCIS Event Store: thiết kế phân vùng sẵn (sharding), bổ sung node Cassandra/TimescaleDB theo volume.

- Kafka Cluster: bổ sung broker node theo throughput yêu cầu, phân vùng topic linh hoạt.

- QR Resolver: triển khai thêm edge node ở các vùng địa lý (TP.HCM, Đà Nẵng) để giảm latency.

- Data Lake: object storage MinIO/S3 hỗ trợ scale-out vô hạn theo dung lượng.

## 9.2 Mở rộng theo ngành (Multi-sector)

  ---------------------------------------------------------------------------------------------------------------------------
  **Giai đoạn**       **Nhóm hàng mở rộng**                                      **Yêu cầu kỹ thuật bổ sung**
  ------------------- ---------------------------------------------------------- --------------------------------------------
  GĐ 1 (2026)         Sữa · Đồ uống · Dầu thực vật · Tiền chất                   Danh mục HS · Risk rule GĐ 1

  GĐ 2 (2027--2028)   Hóa chất công nghiệp · Dệt may · Hàng kiểm soát đặc biệt   Mở rộng Risk Engine · LGSP Hải quan

  GĐ 3 (2029+)        Toàn bộ nhóm BCT · Product Passport EU                     EU DPP module · ESG tracking · Carbon data

  Tùy chọn            Nông nghiệp · Dược phẩm (Bộ Y tế)                          LGSP liên ngành · Module tùy chỉnh theo bộ
  ---------------------------------------------------------------------------------------------------------------------------

## 9.3 Kết nối liên ngành (Open API)

Hệ thống VeriGoods++ cung cấp Open API theo chuẩn RESTful và EPCIS Query Interface, cho phép các hệ thống của bộ ngành khác kết nối liên thông. Mọi kết nối từ bên ngoài đi qua API Gateway có kiểm soát, xác thực và audit log đầy đủ.

  ------------------------------------------------------------------------------------------------------------------
  **Đơn vị kết nối**              **Mục đích**                                    **Cơ chế kết nối**
  ------------------------------- ----------------------------------------------- ----------------------------------
  Tổng cục Hải quan               Kiểm tra UID/xuất xứ hàng hóa xuất nhập khẩu    LGSP/NGSP · REST API

  Tổng cục Thuế                   Đối chiếu hóa đơn điện tử với dữ liệu lô hàng   LGSP · Batch sync

  Sàn TMĐT (Shopee/Lazada/Tiki)   Hiển thị thông tin TXNG trên trang sản phẩm     Open API · QR Resolver

  Bộ Y tế / NN&PTNT               Mở rộng TXNG sang ngành dược, nông sản          Federated API · Module tùy chỉnh

  BCA / C12                       UID/DID sync · Blockchain proof                 AgentNode → NDOP (bắt buộc)
  ------------------------------------------------------------------------------------------------------------------

# 10. KẾT LUẬN

Giải pháp tổng thể hệ thống VeriGoods++ được xây dựng trên cơ sở phân rã đầy đủ từ nghiệp vụ đến hạ tầng theo chuỗi logic: 400 Use Case Level 2 → 37 Module → 8 Phân hệ → 5 Lớp kiến trúc → 9 loại Node topology → Danh mục thiết bị và dự toán chi phí. Đây là phương pháp thiết kế chuẩn mực, bảo đảm tính minh bạch, khả năng kiểm chứng và phù hợp với quy mô vận hành thực tế.

  ----------------------------------------------------------------------------------------------------------
  **Hạng mục**           **Kết quả**
  ---------------------- -----------------------------------------------------------------------------------
  Phạm vi chức năng      8 phân hệ · 37 module · 400 UC Level 2 --- kiến trúc microservices

  Tuân thủ pháp lý       Nghị định BCA (UID/DID/Blockchain QG) + Thông tư BCT (Risk-based, SLA, retention)

  Kết nối quốc gia       AgentNode + NDOP --- đúng kiến trúc BCA · không kết nối trực tiếp C12

  Hạ tầng                Danh mục đầy đủ: A--I · DC Hà Nội chính · DR TP.HCM · HA/DR chuẩn

  Phương pháp BOQ        UC → Module → Node → Thiết bị → Chi phí --- kiểm chứng được

  Hiệu năng              Scan \< 2s · Event ingest ≥ 100.000/s · Availability ≥ 99.9%

  Khả năng mở rộng       Scale-out microservices · Multi-sector · Open API liên ngành
  ----------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Giải pháp đề xuất đáp ứng đầy đủ các yêu cầu về kỹ thuật, pháp lý và nghiệp vụ được quy định tại Dự thảo Nghị định Bộ Công an và Dự thảo Thông tư Bộ Công Thương (hiệu lực dự kiến 01/07/2026). Hệ thống sẵn sàng triển khai thí điểm trong Quý III/2026 và mở rộng toàn quốc theo lộ trình đã được phê duyệt.
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
