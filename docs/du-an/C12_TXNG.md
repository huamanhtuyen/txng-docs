**C12 VÀ NỀN TẢNG ĐỊNH DANH,**

**XÁC THỰC VÀ TRUY XUẤT NGUỒN GỐC**

# I. TỔNG QUAN VÀ BẢN CHẤT HỆ THỐNG

## 1.1. Khái niệm Truy xuất nguồn gốc hiện đại

Truy xuất nguồn gốc (TXNG) hiện đại không còn là việc \'gắn tem QR để xem thông tin sản phẩm\', mà là một hệ thống dữ liệu liên chuỗi giúp nhận diện ai tạo ra sản phẩm, sản phẩm/lô hàng nào đang được theo dõi, sự kiện gì đã xảy ra với nó, ở đâu, khi nào, và vì sao. Theo các chuẩn quốc tế như Codex, GS1 và FDA, TXNG hiện đại là hệ thống dữ liệu sự kiện liên chuỗi, trong đó mỗi sự kiện được ghi nhận theo logic \'cái gì -- ở đâu -- khi nào -- vì sao\'.

Ủy ban Codex Alimentarius (CAC/GL 60-2006) định nghĩa TXNG là công cụ trong hệ thống kiểm tra và chứng nhận, không phải \'giải pháp thần kỳ\' tự nó bảo đảm an toàn. ISO 22005 đặt trọng tâm vào nguyên tắc thiết kế và triển khai hệ thống TXNG trong toàn chuỗi, không chỉ tại từng doanh nghiệp. GS1 biến các nguyên tắc đó thành ngôn ngữ dữ liệu ở quy mô liên tổ chức. FDA FSMA 204 đã chuyển yêu cầu pháp lý sang logic Critical Tracking Events (CTE) và Key Data Elements (KDE).

Với hàng công nghiệp, xu hướng quốc tế đang tiến sang mô hình Digital Product Passport (DPP), nơi định danh số đi cùng dữ liệu vòng đời, tuân thủ, bền vững và hậu kiểm --- như Quy định ESPR (EU 2024/1781) đang yêu cầu. Hệ thống TXNG hoàn chỉnh gồm các lớp: định danh, mang dữ liệu, thu thập dữ liệu, mô hình sự kiện (EPCIS), dữ liệu chủ, bằng chứng, tích hợp và ứng dụng.

**Bảng 1. Kiến trúc lớp kỹ thuật của hệ thống TXNG hoàn chỉnh**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Lớp kỹ thuật**         **Vai trò chính**                                                 **Công nghệ / Chuẩn thường dùng**                                       **Liên quan C12**
  ------------------------ ----------------------------------------------------------------- ----------------------------------------------------------------------- ----------------------------------------------------------
  **Định danh**            Gán mã duy nhất cho SP, địa điểm, tổ chức, lô, đơn vị logistics   GS1 (GTIN/GLN/SSCC); mã lô/batch; serial; UID (NDA Trace); DID (W3C)    C12 quản lý UID/DID; ánh xạ sang GTIN

  **Mang dữ liệu**         Mang mã ra hiện trường và bao bì                                  1D barcode, QR/2D, GS1 Digital Link, RFID, NFC, tem chống tháo gỡ       Gián tiếp (thông qua UID)

  **Thu thập dữ liệu**     Ghi nhận sự kiện vật lý và nghiệp vụ                              ERP/MES/WMS/LIMS, app di động, cổng đọc RFID, PLC, camera               Gián tiếp; nguồn dữ liệu gốc ở DN

  **Sự kiện (EPCIS)**      Lưu \'cái gì -- ở đâu -- khi nào -- vì sao\'                      EPCIS 2.0/CBV, event log, event broker                                  C12 không thay thế; nhận tóm tắt sự kiện bắt buộc

  **Dữ liệu chủ**          Quản trị dữ liệu gốc và tham chiếu                                Master data, danh mục dùng chung, product master                        Kho dữ liệu dùng chung tại C12

  **Bằng chứng**           Gắn chứng từ, kiểm nghiệm, chứng nhận, ảnh, sensor                Object store, e-signature, time-stamp, chứng chỉ số, sensor telemetry   C12 cung cấp cơ sở hạ tầng ký số

  **Tích hợp & chia sẻ**   Đồng bộ giữa DN, bộ/ngành, cổng quốc gia                          API, message broker, ESB, LGSP, Agent Node, data hub                    Nền tảng chia sẻ, điều phối dữ liệu + Agent Node của C12

  **Ứng dụng**             Tra cứu công khai, hậu kiểm, điều tra, thu hồi, phân tích         Portal web, app inspector, dashboard, BI, cảnh báo gian lận             Cổng TXNG quốc gia; cổng giám sát của cơ quan quản lý
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1.2. Bản chất của C12

C12 (Trung tâm Dữ liệu Quốc gia -- Bộ Công an) là đơn vị cấp Cục thuộc Bộ Công an, thành lập theo Nghị quyết 175/NQ-CP ngày 30/10/2023 của Chính phủ, được cụ thể hóa bằng Chỉ thị 32/CT-TTg ngày 4/9/2024 và lễ công bố ngày 25/2/2025 do Bộ trưởng Lương Tam Quang chủ trì. Trung tâm số 1 đặt tại Khu Công nghệ cao Hòa Lạc, Hà Nội.

Ký hiệu văn bản hành chính \'BCA-C12\' (ví dụ Kế hoạch 40/KH-BCA-C12 về an ninh Trung tâm Dữ liệu Quốc gia số 1) xác nhận đây là mã đơn vị trong hệ thống Bộ Công an. C12 được định vị là hạ tầng gốc về định danh, xác thực, kết nối, điều phối và dùng chung dữ liệu; có nền tảng chia sẻ, điều phối dữ liệu với Agent Node ở bộ/ngành/địa phương. C12 không phải là hệ thống TXNG theo nghĩa hàng hóa, mà là hạ tầng định danh, xác thực và điều phối dữ liệu, phục vụ cho nhiều hệ thống nghiệp vụ, trong đó có TXNG.

Ban lãnh đạo gồm Giám đốc --- Thiếu tướng Nguyễn Ngọc Cương (nguyên Cục trưởng C06), cùng các Phó Giám đốc Phạm Minh Tiến, Hà Nam Trung, Nguyễn Thành Vĩnh.

## 1.3. Bộ ba công nghệ NDA và Mối quan hệ với C12

Cái mà doanh nghiệp và người tiêu dùng thực sự \'nhìn thấy\' trong TXNG quốc gia là bộ ba nền tảng do Hiệp hội Dữ liệu Quốc gia (NDA) --- do Bộ trưởng Bộ Công an làm Chủ tịch --- phối hợp với C12 phát triển và công bố ngày 8/7/2025:

- NDA Trace: nền tảng định danh--xác thực--truy xuất nguồn gốc hàng hóa, cấp một UID duy nhất cho mỗi sản phẩm dưới dạng QR hoặc RFID.

- NDAChain: blockchain quốc gia kiểu Proof-of-Authority vận hành bởi Trung tâm Sáng tạo và Khai thác Dữ liệu (thuộc C12, ra mắt 4/7/2025), quy tụ 49 nút xác thực công--tư gồm các bộ, tỉnh và tập đoàn lớn như SunGroup, Sovico, Masan, VNVC; xử lý khoảng 20.000--30.000 giao dịch/ngày.

- NDA DID: mã định danh phi tập trung theo chuẩn W3C kết hợp Zero-Knowledge Proofs, dùng cho cá nhân, doanh nghiệp và sản phẩm.

Song song đó, VNIDCheck --- do Cục C06 phối hợp MobiFone, Cục Hóa chất (BCT) và Trung tâm Mã số mã vạch Quốc gia --- được thí điểm ngày 16/10/2025, cho phép người dân quét QR trên VNeID để truy xuất nguồn gốc mỹ phẩm, thuốc, thực phẩm, hóa chất và tiền chất, ban đầu chuẩn hóa hơn 13.000 doanh nghiệp hóa chất, đạt an toàn thông tin cấp độ 3.

## 1.4. Phân biệt các khái niệm dễ nhầm lẫn

Hiện tại Việt Nam tồn tại một nghịch lý tổ chức: hai hệ thống định danh song song ở hai bộ --- GS1 ở Bộ KH&CN và NDA Trace UID ở Bộ Công an --- mà chưa có cơ chế ánh xạ chính thức. Điều này tạo ra gánh nặng kép cho hàng xuất khẩu: trong nước phải gắn NDA Trace UID, ra quốc tế phải gắn GTIN để được chấp nhận tại POS EU/Mỹ.

**Bảng 2. Phân biệt bốn khái niệm dễ nhầm lẫn**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Khái niệm**            **Mô tả**                                                                                **Ghi chú**
  ------------------------ ---------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------
  **C12**                  Trung tâm Dữ liệu Quốc gia -- cơ quan cấp Cục thuộc Bộ Công an                           Không phải công nghệ mã định danh; là cơ quan hành chính quản lý hạ tầng dữ liệu

  **NDA Trace UID**        Mã định danh duy nhất gắn trên sản phẩm theo chuẩn nội địa của NDA                       Hiển thị trên bao bì dưới dạng QR hoặc RFID; \~400 mặt hàng, 25.000 UID (tính đến 7/2025)

  **GTIN/GLN (GS1)**       Mã do Trung tâm Mã số mã vạch Quốc gia (Bộ KH&CN) quản lý theo chuẩn quốc tế từ 1995     Prefix 893\...; bắt buộc cho hàng xuất khẩu vào EU/Mỹ; chấp nhận tại POS toàn cầu

  **Mã QR / DataMatrix**   Vật mang dữ liệu (data carrier) -- chỉ là phương tiện mang mã, không phải mã định danh   Có thể chứa UID, GTIN, GS1 Digital Link hoặc bất kỳ mã nào bên trong
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 1.5. Quan hệ giữa C12 và hệ thống TXNG

Trong kiến trúc tổng thể, C12 đóng vai trò lớp định danh và xác thực (trust layer), trong khi hệ thống TXNG đóng vai trò lớp nghiệp vụ (business layer). Kết luận cốt lõi: C12 là điều kiện cần nhưng chưa đủ để tự nó trở thành một hệ thống TXNG mạnh. C12 rất phù hợp để làm lớp định danh số, xác thực, điều phối chia sẻ dữ liệu, đối soát liên cơ quan, quản trị chuẩn dữ liệu và hậu kiểm quốc gia. Nhưng TXNG mạnh còn cần thêm lớp nghiệp vụ chuyên sâu gồm mô hình sự kiện EPCIS theo lô/serial, cơ chế serialization, quy trình thu hồi--điều tra, bằng chứng hiện trường, tích hợp ERP/MES/WMS/LIMS và giao diện công khai cho doanh nghiệp--người tiêu dùng--cơ quan quản lý.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  C12 = identity + trust + data exchange TXNG = business + event + supply chain TCHQG = C12 (định danh--xác thực) + Nền tảng TXNG ngành (EPCIS + master data) + Cổng TXNG QG (tra cứu công khai)
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# II. KHUNG PHÁP LÝ VÀ THỂ CHẾ

## 2.1. Ba trục pháp lý chính

Hệ thống pháp lý về C12 và TXNG tại Việt Nam được xây dựng trên ba trục song hành:

- **Trục định danh điện tử:** Luật Căn cước 2023, Luật Giao dịch điện tử 2023, Nghị định 69/2024/NĐ-CP ngày 25/6/2024 --- giao Cục C06 quản lý VNeID; xác lập giá trị chứng minh tương đương giấy tờ gốc cho danh tính điện tử.

- **Trục dữ liệu:** Nghị quyết 175/NQ-CP (30/10/2023) về Trung tâm Dữ liệu Quốc gia, Quyết định 06/QĐ-TTg (Đề án 06), Luật Dữ liệu 2024, Quyết định 1751/QĐ-TTg (Chiến lược dữ liệu), Quyết định 2439/QĐ-TTg (Khung kiến trúc dữ liệu quốc gia), Nghị định 278/2025/NĐ-CP, Thông tư 08/2025/TT-BCA.

- **Trục chính trị:** Nghị quyết 57-NQ/TW của Bộ Chính trị về đột phá KH-CN, đổi mới sáng tạo và chuyển đổi số --- được viện dẫn trong hầu hết phát ngôn chính thức về C12 và TXNG.

## 2.2. Khung pháp lý về truy xuất nguồn gốc

Khung pháp lý TXNG hàng hóa được xây dựng từ Quyết định 100/QĐ-TTg năm 2019 --- điểm khởi đầu chiến lược, phê duyệt Đề án TXNG quốc gia, giao Bộ KH&CN chủ trì --- đến các văn bản cụ thể hóa qua nhiều năm. Nghị định 13/2022/NĐ-CP bổ sung quản lý nhà nước về TXNG và Thông tư 02/2024/TT-BKHCN (hiệu lực 1/6/2024) cụ thể hóa 10 thông tin bắt buộc khi truy xuất và bốn nguyên tắc hệ thống: \'một bước trước -- một bước sau\', \'sẵn có phần tử dữ liệu chính\', \'minh bạch\', \'sự tham gia đầy đủ các bên\'. Luật Chất lượng sản phẩm, hàng hóa sửa đổi năm 2025 cũng đã bổ sung quy định về TXNG.

## 2.3. Hệ tiêu chuẩn TCVN và Phân vai cơ quan

Bộ KH&CN đã công bố hơn 20 TCVN về TXNG. Năm tiêu chuẩn trụ cột: TCVN 12850:2019 (yêu cầu chung), TCVN 12851:2019 (đánh giá và chứng nhận hệ thống), TCVN 13274:2020 (định dạng mã truy vết dựa trên GS1), TCVN 13275:2020 (định dạng vật mang dữ liệu --- bắt buộc theo TT 02/2024, gồm ba nhóm: quang học, từ tính, điện tử), TCVN 12827:2019 (TXNG chuỗi rau quả tươi).

Phân vai giữa cơ quan: Bộ Công an (C12) quản lý định danh, xác thực và nền tảng dữ liệu quốc gia; Bộ KH&CN quản lý tiêu chuẩn TXNG, GS1, mã số mã vạch; Bộ Công Thương quản lý TXNG ngành công nghiệp, thương mại. Phân vai này cần được bảo đảm rõ ràng để tránh chồng lấn chức năng và gánh nặng kép cho doanh nghiệp.

**Bảng 3. Hệ thống văn bản pháp lý về C12 và TXNG**

  ---------------------------------------------------------------------------------------------------------------------------------------------
  **Văn bản**                     **Năm**     **Nội dung liên quan đến TXNG / C12**
  ------------------------------- ----------- -------------------------------------------------------------------------------------------------
  **Nghị quyết 175/NQ-CP**        **2023**    Phê duyệt Đề án Trung tâm Dữ liệu Quốc gia; thành lập C12

  **Luật Căn cước**               **2023**    Nền tảng pháp lý cho VNeID và định danh điện tử cá nhân

  **Luật Giao dịch điện tử**      **2023**    Giá trị pháp lý của danh tính điện tử và chữ ký số

  **Luật Dữ liệu**                **2024**    Thu thập, đồng bộ, khai thác Cơ sở dữ liệu tổng hợp quốc gia; C12 phát động triển khai 1/7/2025

  **Nghị định 69/2024/NĐ-CP**     **2024**    Định danh và xác thực điện tử; thay thế NĐ 59/2022; giao C06 quản lý VNeID

  **Quyết định 06/QĐ-TTg**        **2022**    Đề án 06 -- phát triển ứng dụng dữ liệu dân cư, định danh và xác thực điện tử

  **Nghị quyết 57-NQ/TW**         **2024**    Đột phá KH-CN, đổi mới sáng tạo và CĐS; được viện dẫn trong mọi phát ngôn về C12 và TXNG

  **Quyết định 100/QĐ-TTg**       **2019**    Đề án TXNG quốc gia; giao Bộ KH&CN chủ trì

  **Nghị định 13/2022/NĐ-CP**     **2022**    Bổ sung quản lý nhà nước về TXNG; Bộ KH&CN quản lý mã truy vết, vật mang dữ liệu

  **Thông tư 02/2024/TT-BKHCN**   **2024**    10 thông tin bắt buộc khi truy xuất; 4 nguyên tắc hệ thống; hiệu lực 1/6/2024

  **Nghị định 278/2025/NĐ-CP**    **2025**    Cơ chế kết nối--chia sẻ dữ liệu bắt buộc với C12

  **Thông tư 08/2025/TT-BCA**     **2025**    Quy chuẩn kỹ thuật quốc gia về cấu trúc thông điệp dữ liệu trao đổi với C12 (QCVN message)

  **Quyết định 1751/QĐ-TTg**      **2025**    Chiến lược dữ liệu tại Trung tâm Dữ liệu quốc gia

  **Quyết định 2439/QĐ-TTg**      **2025**    Khung kiến trúc dữ liệu quốc gia
  ---------------------------------------------------------------------------------------------------------------------------------------------

# III. KIẾN TRÚC TỔNG THỂ HỆ SINH THÁI

## 3.1. Kiến trúc TXNG chuẩn quốc tế

Bộ khung vàng cho TXNG hiện đại là sự kết hợp giữa: nguyên tắc của Codex; tư duy thiết kế của ISO 22005; tầng định danh và trao đổi dữ liệu của GS1; logic kiểm soát sự kiện--dữ liệu của FDA; và cách tiếp cận DPP của châu Âu. Điểm chung là chuẩn mở, ghi dữ liệu tại nguồn, dữ liệu sự kiện có ngữ nghĩa, khả năng chia sẻ có kiểm soát, và khả năng dùng lại cùng một bộ dữ liệu cho nhiều mục tiêu quản lý. Năm thực hành tốt cần giữ nguyên:

- Tách rõ lớp định danh, lớp sự kiện và lớp công bố công khai.

- Không khóa hệ thống vào một nhà cung cấp riêng; dữ liệu phải chuyển được giữa các nền tảng.

- Chỉ chia sẻ phần dữ liệu thực sự cần thiết cho cơ quan quản lý hoặc người tiêu dùng.

- Không dùng blockchain như trái tim của hệ thống; chỉ dùng như lớp chứng thực cho sự kiện và hồ sơ rủi ro cao.

- Với hàng công nghiệp xuất khẩu, thiết kế ngay từ đầu theo tư duy DPP-ready để khỏi phải thay kiến trúc sau này.

## 3.2. Kiến trúc C12 (bốn lớp)

Kiến trúc công khai của C12 gồm bốn lớp chính:

- **Kho dữ liệu:** kho dữ liệu dùng chung, kho chuyên ngành, kho tổng hợp, danh mục dữ liệu dùng chung và dữ liệu mở.

- **Lớp chia sẻ--điều phối:** Nền tảng chia sẻ, điều phối dữ liệu và Agent Node tại bộ/ngành/địa phương --- xương sống của liên thông liên bộ.

- **Lớp chuẩn hóa--governance:** Khung kiến trúc dữ liệu quốc gia, Khung quản trị dữ liệu, Từ điển dữ liệu dùng chung --- giúp chuẩn hóa và tránh \'mỗi bộ một ngôn ngữ\'.

- **Lớp khai thác ứng dụng:** cổng dữ liệu quốc gia, sàn dữ liệu, hệ phân tích dữ liệu, điểm một cửa số duy nhất --- Cổng Dịch vụ công quốc gia đã chuyển sang vận hành tại C12 từ tháng 4/2026.

## 3.3. Kiến trúc tích hợp TXNG -- C12 (Mô hình mục tiêu)

Kiến trúc phù hợp nhất cho Việt Nam: trục TXNG ngành/doanh nghiệp theo chuẩn mở GS1 Digital Link và EPCIS/CBV; Cổng TXNG quốc gia làm lớp công bố/tra cứu; C12 làm lớp định danh, xác thực, điều phối, giám sát và xác minh liên cơ quan. Nguyên tắc federated-by-design: nguồn sự thật vận hành vẫn là nền tảng TXNG ngành/doanh nghiệp; C12 là nguồn sự thật về danh tính số, đối soát liên cơ quan và dữ liệu quốc gia dùng chung.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Doanh nghiệp (ERP / MES / WMS)**   **→**        **Nền tảng TXNG ngành (ITP) EPCIS sự kiện · Master data · Bằng chứng số**       **→**         **C12**\                   **Cổng TXNG Quốc gia (tra cứu công khai)**
                                                                                                                                             identity · verify\     
                                                                                                                                               data exchange        
  ------------------------------------ ------- ------------------------------------------------------------------------------------ ------- -------------------- -- ------------------------------------------------------------
                                                                                      **↓**                                                        **↓**                                       **↓**

                                                     Portal DN · Portal thanh tra Rule engine · Quản lý thu hồi · API Gateway                                        **Agent Node (Bộ/Ngành · Địa phương hậu kiểm · đối soát)**

                                                                                      **↓**                                                                                                    **↓**

                                                **Người tiêu dùng · Nhà bán lẻ · Sàn TMĐT (quét mã · tra cứu thông tin sản phẩm)**                                        **Cơ quan quản lý Bộ ngành · QLTT · Địa phương**
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Bảng 4. Kiến trúc phân lớp mục tiêu TXNG -- C12**

  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Lớp**                                          **Chủ thể quản lý**                       **Nội dung và trách nhiệm**
  ------------------------------------------------ ----------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------
  **Lớp định danh & xác thực (Trust Layer)**       **BCA / C12**                             Mã UID/DID, PKI quốc gia, VNeID, xác thực danh tính tổ chức và cá nhân, NDAChain (49 nút PoA), NDA DID (chuẩn W3C + ZKP)

  **Lớp nghiệp vụ TXNG (Business Layer)**          **DN / Nền tảng TXNG ngành**              Sản phẩm, lô, serial, sự kiện sản xuất -- logistics -- bán lẻ (EPCIS/CBV), master data, bằng chứng số, portal tra cứu, rule engine, thu hồi

  **Lớp giám sát & thực thi (Governance Layer)**   **BCT / Bộ ngành quản lý / Địa phương**   Risk scoring, thanh tra, hậu kiểm, cảnh báo gian lận, xử lý vi phạm, báo cáo liên cơ quan qua Agent Node
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# IV. MÔ HÌNH DỮ LIỆU VÀ ĐỊNH DANH

## 4.1. Hệ thống định danh và Vấn đề hai hệ song song

Việt Nam hiện tồn tại hai hệ thống định danh song song ở hai bộ mà chưa có cơ chế ánh xạ chính thức: (1) GS1 (GTIN, GLN, SSCC) do Trung tâm Mã số mã vạch Quốc gia (Bộ KH&CN) quản lý theo chuẩn quốc tế từ năm 1995 với prefix 893\...; (2) NDA Trace UID do Bộ Công an / NDA quản lý theo chuẩn nội địa từ 2025. Ngoài ra còn NDA DID theo chuẩn W3C Decentralized Identifier kết hợp Zero-Knowledge Proofs cho cá nhân, tổ chức và sản phẩm.

Giải pháp thực tế đã được Báo cáo C12 khuyến nghị: dùng GTIN làm thành phần \'identifier\' trong URI của NDA Trace theo đúng chuẩn GS1 Digital Link, dạng:

  -----------------------------------------------------------------------
  https://ndatrace.gov.vn/01/{GTIN}/10/{batch}/21/{serial}
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------

Cách tiếp cận này giúp hàng xuất khẩu không phải gắn hai mã riêng, đồng thời tương thích với yêu cầu GS1 Sunrise 2027.

## 4.2. Mô hình dữ liệu TXNG

**Bảng 5. Mô hình dữ liệu TXNG và quan hệ với C12**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Loại dữ liệu**               **Mô tả**                                                             **Chuẩn / Định danh**                           **Lưu trữ**
  ------------------------------ --------------------------------------------------------------------- ----------------------------------------------- -------------------------------------------------------
  **Dữ liệu chủ (Master)**       Thông tin gốc của SP, DN, địa điểm; tính dùng chung và ổn định        GTIN, GLN, SSCC, product master, party master   Kho master data tại Nền tảng TXNG ngành + đồng bộ C12

  **Dữ liệu sự kiện (Event)**    Ghi nhận \'cái gì -- ở đâu -- khi nào -- vì sao\' tại mỗi công đoạn   EPCIS 2.0 / CBV; JSON-LD; QCVN message (C12)    Kho EPCIS tại nền tảng ngành; tóm tắt chia sẻ lên C12

  **Dữ liệu bằng chứng**         COA, chứng nhận, ảnh, cảm biến nhiệt độ/GPS, tem bảo mật              Chứng chỉ số, time-stamp, hash, VC (W3C)        Object store + on-chain hash; chi tiết off-chain

  **Dữ liệu trao đổi với C12**   Dữ liệu tối thiểu bắt buộc chia sẻ với Cơ sở dữ liệu tổng hợp QG      JSON/XML theo QCVN message của BCA              C12 / CSDL tổng hợp quốc gia
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4.3. Chuẩn và Bộ định danh mục tiêu

Lộ trình chuẩn hóa định danh cần áp dụng nhất quán cho tất cả đối tượng trong chuỗi cung ứng, từ tổ chức đến từng đơn vị sản phẩm.

**Bảng 6. Bộ chuẩn và định danh mục tiêu theo nhóm đối tượng**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Đối tượng**                                **Chuẩn / Mã đề xuất**                                                 **Cơ sở pháp lý / Kỹ thuật**                **Mức bắt buộc**
  -------------------------------------------- ---------------------------------------------------------------------- -------------------------------------- --------------------------
  **Tổ chức / Doanh nghiệp**                   Định danh điện tử tổ chức + Mã số doanh nghiệp                         NĐ 69/2024; Luật Căn cước 2023                  Bắt buộc

  **Cơ sở, kho, dây chuyền, điểm giao nhận**   GLN hoặc mã địa điểm được ánh xạ GLN                                   GS1 GLN; TCVN 13274:2020                        Bắt buộc

  **Sản phẩm thương mại**                      GTIN nếu phù hợp; model code nội bộ phải có quy tắc ánh xạ chuẩn GS1   TCVN 13274:2020; GS1 GTIN                       Bắt buộc

  **Lô sản xuất**                              Batch / Lot gắn với GTIN                                               EPCIS CBV; FSMA 204 (KDE)                  Bắt buộc mọi nhóm

  **Đơn vị đơn chiếc**                         Serial number                                                          EPCIS CBV; FDA FSMA 204                 Bắt buộc nhóm rủi ro cao

  **Đơn vị logistics**                         SSCC hoặc mã logistics unit tương đương                                GS1 SSCC                                  Bắt buộc vận tải/kho

  **Mã mang dữ liệu trên bao bì**              GS1 Digital Link QR; DataMatrix cho môi trường công nghiệp             TCVN 13275:2020; GS1 Sunrise 2027               Bắt buộc

  **Dữ liệu sự kiện**                          EPCIS 2.0/CBV hoặc mô hình tương đương tương thích                     GS1 EPCIS 2.0; ISO 22005                Bắt buộc ở lớp nghiệp vụ

  **Dữ liệu trao đổi với C12**                 JSON/XML theo QCVN message của BCA                                     TT 08/2025/TT-BCA; NĐ 278/2025          Bắt buộc lớp chia sẻ QG

  **Hàng rủi ro rất cao**                      NFC/RFID bảo mật hoặc QR ký số chống sao chép                          TrustTag, AES \'one time, one code\'        Áp dụng chọn lọc
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# V. LUỒNG DỮ LIỆU VÀ NGHIỆP VỤ

## 5.1. Nguyên tắc dữ liệu cốt lõi

- Dữ liệu gốc phát sinh tại doanh nghiệp và hiện trường (ERP/MES/WMS/LIMS, thiết bị IoT, máy quét).

- Dữ liệu vận hành chi tiết không tập trung tại C12; chỉ chia sẻ dữ liệu tối thiểu cần thiết theo mục đích quản lý.

- Cổng TXNG quốc gia là lớp công bố và tra cứu; C12 là lớp định danh, xác minh, điều phối liên cơ quan.

- Không đẩy toàn bộ telemetry thô lên C12; raw event ở lại nền tảng TXNG ngành; tóm tắt và master data bắt buộc chia sẻ lên C12 theo Nghị định 278/2025.

## 5.2. Luồng dữ liệu tổng thể

**Bảng 7. Luồng dữ liệu cốt lõi trong hệ thống TXNG**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Luồng**                  **Nguồn phát sinh**              **Dữ liệu chính**                                          **Đích chính**                **Ghi chú**
  -------------------------- -------------------------------- ---------------------------------------------------------- ----------------------------- ------------------------------------------
  **Onboarding DN**          Cổng đăng ký + eID               Hồ sơ tổ chức, người đại diện, địa điểm, giấy phép         Nền tảng TXNG ngành + C12     Dùng định danh điện tử, đối soát pháp lý

  **Cấp mã SP/lô/serial**    ERP hoặc dịch vụ serialization   Product master, batch, serial, packaging hierarchy         Kho master data + in tem/mã   Bắt buộc serial cho nhóm rủi ro cao

  **Ghi nhận sự kiện SX**    MES/WMS/app scanner              Commissioning, packing, aggregation, shipping, receiving   EPCIS repository              Trái tim của TXNG

  **Ghi nhận bằng chứng**    LIMS, kiểm nghiệm, IoT           COA, chứng nhận, ảnh, nhiệt độ, GPS, seal status           Kho bằng chứng số             Chỉ chọn sensor nơi có giá trị quản lý

  **Chia sẻ lên C12**        Adapter / Agent Node             Master data bắt buộc, sự kiện tóm tắt, hồ sơ tuân thủ      C12 / CSDLTHQG                Không đẩy toàn bộ telemetry thô

  **Công bố công khai**      Portal TXNG ngành                Tên SP, ảnh, nhà SX, lô, xuất xứ, chứng nhận công khai     Cổng TXNG quốc gia            Tuân thủ 10 thông tin TT 02/2024

  **Hậu kiểm -- Điều tra**   Cơ quan quản lý / thanh tra      Truy vấn chéo theo tổ chức, lô, serial, tuyến vận chuyển   Dashboard kiểm tra + C12      Xác minh liên cơ quan qua Agent Node
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 5.3. Nghiệp vụ cốt lõi của hệ thống TXNG

- **Truy xuất nguồn gốc:** trả lời \'sản phẩm này đến từ đâu\' trong toàn chuỗi; thời gian truy hồ sơ một lô/serial cho thanh tra mục tiêu ≤ 2 phút.

- **Thu hồi sản phẩm:** khoanh vùng chính xác lô/serial bị ảnh hưởng, giảm thiệt hại; mục tiêu rút ngắn từ nhiều ngày xuống còn vài giờ (so sánh: Walmart với IBM Food Trust rút từ 7 ngày xuống 2,2 giây cho xoài).

- **Điều tra và hậu kiểm:** cơ quan quản lý tra cứu chéo theo tổ chức, lô, serial, tuyến vận chuyển; xác minh liên cơ quan qua Agent Node của C12.

- **Giám sát và cảnh báo:** phát hiện bất thường trong chuỗi EPCIS events, logistics, điều kiện bảo quản; phát hiện gian lận, hàng giả (trùng mã, giả mạo, thay thế sản phẩm).

# VI. VAI TRÒ CỦA C12 TRONG TXNG

## 6.1. Những năng lực C12 làm tốt

- **Định danh và xác thực:** rất mạnh, đặc biệt khi gắn với VNeID và CSDL dân cư hơn 100 triệu công dân; giảm gian lận danh tính trong chuỗi cung ứng.

- **Kết nối liên cơ quan:** mạnh nhờ Nền tảng chia sẻ, điều phối dữ liệu và Agent Node; đã kết nối thực tế 12/12 CSDL trọng điểm Bộ NN&MT (6/4/2026), chuẩn hóa 13.000+ doanh nghiệp hóa chất.

- **Điều phối và đối soát:** phù hợp để giám sát, xác minh, đối soát, chia sẻ bắt buộc; NDAChain 49 nút PoA bảo đảm tính bất biến của hash dữ liệu.

- **Bảo mật quốc gia:** Bộ Công an chủ trì, đạt an toàn thông tin cấp độ 3; VNIDCheck xử lý tiền chất và hóa chất nguy hiểm (47.135 vụ vi phạm năm 2024, trị giá 425 tỷ đồng).

## 6.2. Những giới hạn và khoảng trống

Ba khoảng trống kỹ thuật--tổ chức--pháp lý cần bổ sung theo Báo cáo kỹ thuật 2026:

- **Kỹ thuật:** chưa thấy chuẩn sự kiện TXNG thống nhất kiểu EPCIS/CBV được công bố chính thức; chưa có catalog API nghiệp vụ TXNG chi tiết; mã tĩnh in trên bao bì có thể bị photocopy (Trung Quốc đã áp dụng \'one time, one code\' với AES cho ngành rủi ro cao).

- **Tổ chức:** cần phân vai rõ giữa Cổng TXNG quốc gia (Bộ KH&CN) và C12 (Bộ Công an) để tránh DN phải khai báo hai nơi và tránh phân mảnh hệ thống.

- **Pháp lý:** ranh giới dữ liệu công khai, bí mật kinh doanh, dữ liệu phải chia sẻ bắt buộc cần quy định cụ thể hơn cho TXNG công nghiệp đa chủ thể.

## 6.3. Đánh giá kỹ thuật tổng hợp

**Bảng 8. Đánh giá kỹ thuật C12 trong bài toán TXNG**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Chiều cạnh**                  **C12 làm tốt**                                                             **C12 còn thiếu cho TXNG đầy đủ**
  ------------------------------- --------------------------------------------------------------------------- ---------------------------------------------------------------------------------
  **Định danh & xác thực**        Rất mạnh, đặc biệt khi gắn với VNeID và dữ liệu dân cư 100 triệu công dân   Chưa đủ để thay thế lớp định danh sản phẩm/lô/serial chuyên biệt (cần GTIN/GS1)

  **Kết nối liên cơ quan**        Rất mạnh nhờ Nền tảng chia sẻ, điều phối dữ liệu và Agent Node              Chưa đồng nghĩa với liên thông chuỗi cung ứng B2B/B2G/B2C

  **Chuẩn dữ liệu quốc gia**      Đang hình thành tốt: Khung kiến trúc, Từ điển dữ liệu, QCVN message         Chưa thấy mô hình sự kiện TXNG kiểu EPCIS/CBV công bố chính thức

  **Điều phối & hậu kiểm**        Phù hợp để giám sát, xác minh, đối soát, chia sẻ bắt buộc                   Chưa phải hệ thống vận hành hiện trường cho ERP/MES/WMS/LIMS

  **Tra cứu công khai**           Có thể làm lớp xác minh                                                     Đã có Cổng TXNG quốc gia riêng -- cần phân vai rõ

  **Chống giả hàng rủi ro cao**   Phù hợp để bổ sung eID, ký số, bằng chứng số                                Cần thêm secure tag, serialization, quy trình nghiệp vụ tại nguồn

  **Mở rộng đa ngành**            Lợi thế quy mô quốc gia, đã kết nối 12 CSDL Bộ NN&MT                        Dễ chồng lấn vai trò nếu governance không rõ
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# VII. CÔNG NGHỆ ÁP DỤNG

## 7.1. Trí tuệ nhân tạo (AI)

AI được coi là thành phần cốt lõi của hệ thống TXNG hiện đại, giúp chuyển hệ thống từ \'ghi nhận dữ liệu\' sang \'giám sát và điều hành\'. Các ứng dụng chính trong TXNG:

- Phát hiện bất thường trong chuỗi EPCIS events, logistics và điều kiện bảo quản.

- Phát hiện gian lận và hàng giả: trùng mã, giả mạo, thay thế sản phẩm.

- Dự báo rủi ro thu hồi, nhu cầu chuỗi cung ứng và các điểm nóng vi phạm.

- Giám sát thời gian thực dựa trên dữ liệu IoT và hành vi quét mã của người tiêu dùng.

- Phân tích chuỗi cung ứng đa tầng (multi-tier supply chain analytics).

- Hỗ trợ ra quyết định vận hành, phân phối, xử lý vi phạm.

Mức độ áp dụng quốc tế: Mỹ rất cao (FDA, Walmart, cold chain, demand forecasting); EU cao (DPP, ESG analytics, product lifecycle); Trung Quốc rất cao (giám sát thị trường, phát hiện gian lận); Nhật/Hàn/Úc trung bình--cao (quality prediction, recall optimization).

**→ Kết luận:** AI là công nghệ bắt buộc triển khai trong hệ thống TXNG hiện đại, đóng vai trò Risk Engine, Fraud Detection, Monitoring và Analytics.

## 7.2. Blockchain

Blockchain không phải thành phần cốt lõi, mà đóng vai trò lớp kiểm chứng dữ liệu (proof layer). Các ứng dụng phù hợp:

- Lưu trữ giá trị băm (hash) làm bằng chứng tính toàn vẹn của dữ liệu truy xuất.

- Kiểm chứng tính bất biến của dữ liệu; chống sửa đổi sau thực tế.

- Cấp và xác minh chứng nhận số (Verifiable Credential -- VC) theo chuẩn W3C.

- Lưu vết kiểm tra, thanh tra (audit trail) đa bên, không thể xóa.

- Thiết lập cơ chế tin cậy giữa nhiều bên trong chuỗi cung ứng (tiền chất, dược phẩm, VLNCN).

Mức độ áp dụng quốc tế: Mỹ thấp--trung bình (pilot thực phẩm, dược phẩm); EU trung bình (DPP certificate, ESG traceability); Trung Quốc trung bình (platform, consumer trust); Nhật/Hàn/Úc thấp (chủ yếu chứng nhận, xuất khẩu). Kiến trúc lai thực tế: lưu hash + chữ ký on-chain (NDAChain), dữ liệu chi tiết off-chain --- vừa bảo mật bí mật thương mại vừa tuân thủ \'right to erasure\' của GDPR.

**→ Kết luận:** Blockchain áp dụng chọn lọc (VC, audit, chứng nhận, hash). Không thiết kế hệ thống theo hướng \'blockchain-first\'. Không dùng blockchain làm core storage.

## 7.3. So sánh phương án công nghệ và Lựa chọn khuyến nghị

**Bảng 9. So sánh phương án công nghệ triển khai TXNG**

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Phương án**                                   **Mô tả**                                                            **Liên thông**          **Chống giả**   **Chi phí**   **Khuyến nghị**
  ----------------------------------------------- -------------------------------------------------------------------- ----------------------- --------------- ------------- --------------------------------
  **QR + CSDL tập trung**                         Mỗi SP/lô có QR trỏ về một DB trung tâm                              Trung bình              Thấp--TB        Thấp          Chỉ phù hợp giai đoạn rất sớm

  **QR/RFID + EPCIS**                             Chuẩn sự kiện bài bản, dữ liệu ghi ở nguồn và chia sẻ qua chuẩn mở   Cao                     Trung bình      Trung bình    Tốt cho nền tảng ngành

  **EPCIS + Digital Link + C12 + Cổng TXNG QG**   Lõi chuẩn mở, tích hợp trust và chia sẻ quốc gia                     Rất cao                 TB--Cao         TB--Cao       ✔ Khuyến nghị chính

  **Permissioned blockchain-centric**             Đưa phần lớn sự kiện lên blockchain riêng                            Thấp--TB                Trung bình      Cao           Không nên chọn làm lõi

  **Secure NFC / QR ký số bổ sung**               Tăng bảo mật nhận diện hàng rủi ro cao                               Cao nếu gắn lõi chuẩn   Cao             Cao/đơn vị    Dùng chọn lọc tiền chất, VLNCN
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  *Khuyến nghị chính: phương án lai chuẩn mở (EPCIS + Digital Link + C12 + Cổng TXNG quốc gia) thay vì blockchain-centric hay central database đơn giản. Áp dụng kiến trúc federated-by-design: nguồn sự thật vận hành là nền tảng TXNG ngành/doanh nghiệp; C12 là nguồn sự thật về danh tính số, đối soát liên cơ quan và dữ liệu quốc gia dùng chung.*
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# VIII. ĐÁNH GIÁ HIỆN TRẠNG VIỆT NAM

## 8.1. Các nền tảng đã triển khai

Bên cạnh trục BCA--NDA, thị trường TXNG Việt Nam hiện có nhiều hệ thống song song: Cổng TXNG quốc gia (Bộ KH&CN, vận hành từ 10/2024); Verigoods.vn (BCT, từ 23/12/2025); checkvn.mae.gov.vn (Bộ NN&MT, từ 26/12/2025); gần 30 giải pháp tư nhân như iCheck, VNPT Check, iTrace247, TE-FOOD (triển khai thịt lợn tại TP.HCM từ 2017 với hơn 6.000 doanh nghiệp tham gia ở miền Nam, đưa dữ liệu lên public blockchain từ 2018). Ba sự kiện bản lề năm 2025--2026 đánh dấu bước chuyển quan trọng:

- **8/7/2025:** Ra mắt NDA Trace và NDAChain --- C12 cùng NDA công bố bộ ba công nghệ; ký kết hợp tác đầu tiên. Đại tá Phạm Minh Tiến thừa nhận: \'Mã định danh chưa thống nhất toàn quốc, dữ liệu bị phân mảnh theo ngành, thiếu nền tảng tích hợp để kiểm soát chuỗi cung ứng khiến TXNG mới chỉ dừng ở hình thức.\'

- **16/10/2025:** Thí điểm VNIDCheck --- C06 công bố thí điểm truy xuất nguồn gốc hóa chất, tiền chất trên VNeID; chuẩn hóa 13.000+ doanh nghiệp; phát hiện 47.135 vụ vi phạm năm 2024, trị giá 425 tỷ đồng.

- **6/4/2026:** Kết nối 12 CSDL ngành NN&MT với C12 --- hoàn thành 12/12 CSDL trọng điểm theo tiêu chí \'đúng, đủ, sạch, sống, thống nhất, dùng chung\'; chiến dịch 90 ngày đêm rà soát hơn 62,2 triệu thửa đất và đối soát hơn 82.000 tàu cá.

## 8.2. Đánh giá điểm mạnh, yếu và khoảng trống chiến lược

**Bảng 10. Đánh giá tổng hợp hiện trạng TXNG Việt Nam**

  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Tiêu chí**                      **Điểm mạnh**                                                                   **Điểm yếu / Khoảng trống**
  --------------------------------- ------------------------------------------------------------------------------- --------------------------------------------------------------------------------------------
  **Nền tảng chính trị--pháp lý**   NQ 57-NQ/TW, Đề án 06, NQ 175/NQ-CP, Luật Dữ liệu 2024 tạo hậu thuẫn rất mạnh   Chưa có luật chuyên biệt về TXNG; DN chưa bắt buộc tham gia

  **Tích hợp định danh**            Kế thừa VNeID + CSDL dân cư hơn 100 triệu công dân, giảm gian lận               Xung đột \'một quốc gia -- hai hệ thống\': NDA Trace UID (BCA) song song GTIN (Bộ KH&CN)

  **Kiến trúc kỹ thuật**            NDAChain 49 nút PoA, NDA DID chuẩn W3C + ZKP, tính bất biến cao                 QR vật lý là mã tĩnh, có thể bị photocopy; chưa rõ cơ chế \'one time, one code\'

  **Bảo mật**                       BCA chủ trì, đạt an toàn thông tin cấp độ 3                                     Tập trung dữ liệu vào một blockchain nhà nước gây lo ngại lộ bí mật thương mại

  **Liên thông dữ liệu**            Đã kết nối 12 CSDL ngành NN&MT, chuẩn hóa 13.000+ DN hóa chất                   Dữ liệu phân mảnh liên bộ; \'chuỗi cung ứng có quá nhiều ngôn ngữ\' (Nguyễn Đức Lê, BCT)

  **Chi phí & tiếp cận SME**        Miễn phí UID qua Cổng DVC (tuyên bố)                                            Chưa có OpenAPI/SDK công khai; chi phí tuân thủ có thể tăng 20--25%/lô với hộ nông dân nhỏ

  **Phủ sóng**                      Quyết tâm chính trị cao, lộ trình rõ                                            Mới \~400 mặt hàng, 25.000 UID tính đến 7/2025 so với hàng triệu SKU lưu hành

  **Tương thích quốc tế**           NDA Trace tuyên bố tương thích GS1/W3C DID và EBSI TRACE4EU                     Chưa được chứng thực độc lập; chưa đăng ký GS1 Conformant Resolver
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 8.3. Năm khoảng trống chiến lược

- **Khoảng trống 1 -- Hai hệ thống định danh:** NDA Trace UID (BCA) và GTIN/GS1 (Bộ KH&CN) không có cơ chế ánh xạ chính thức. Hàng xuất khẩu phải gắn GTIN để được chấp nhận tại POS EU/Mỹ, nhưng trong nước lại phải gắn NDA Trace UID. Giải pháp: dùng GTIN làm \'identifier\' trong URI NDA Trace theo GS1 Digital Link.

- **Khoảng trống 2 -- Khả năng giả mạo QR tĩnh:** vẫn tồn tại dù kiến trúc blockchain có tính bất biến. Cần áp dụng cơ chế \'one time, one code\' với mã hóa AES cho ngành rủi ro cao như Trung Quốc đã làm.

- **Khoảng trống 3 -- Tương thích quốc tế chưa chứng thực:** các tuyên bố \'NDA Trace tương thích GS1/W3C và EBSI TRACE4EU\' chưa có xác nhận độc lập từ GS1 Global hay EU. Cần đăng ký GS1 Conformant Resolver và tham gia GS1 Global Data Synchronisation Network.

- **Khoảng trống 4 -- API cho SME và hộ nông dân:** không có tài liệu kỹ thuật công khai, không có sandbox miễn phí. Nông hộ nhỏ (0,3--2 ha, chiếm đa số) không có GPS, smartphone --- chi phí tuân thủ tăng 20--25%/lô hàng.

- **Khoảng trống 5 -- Nhận thức người tiêu dùng:** chưa có khảo sát công khai về tỷ lệ quét QR truy xuất. Đại tá Phạm Minh Tiến thừa nhận: \'Doanh nghiệp không bắt buộc phải tham gia hệ thống TXNG. Người dân chưa có công cụ để truy xuất.\'

# IX. ĐỀ XUẤT MÔ HÌNH TRIỂN KHAI

## 9.1. Nguyên tắc kiến trúc

- **Federated (phân tán):** không tập trung toàn bộ dữ liệu TXNG tại một cơ quan nhà nước duy nhất; nguồn dữ liệu gốc nằm ở doanh nghiệp và hiện trường.

- **Chuẩn mở (GS1/EPCIS):** lấy EPCIS làm lõi dữ liệu sự kiện; GS1 Digital Link làm chuẩn mang dữ liệu; bảo đảm tương thích quốc tế và DPP-ready.

- **Risk-based:** triển khai theo mức độ rủi ro ngành hàng; không áp đại trà ngay từ đầu; ưu tiên tiền chất thuốc nổ và đồ uống, sau đó mở rộng dần.

- **AI-first cho vận hành:** tích hợp AI ngay từ thiết kế cho Risk Engine, Fraud Detection, Monitoring và Analytics.

- **Blockchain có chọn lọc:** chỉ dùng hash proof, VC, audit trail cho nhóm rủi ro cao; không phải core storage.

## 9.2. Mô hình mục tiêu

- Doanh nghiệp và hệ thống ERP/MES là nguồn dữ liệu gốc; kết nối qua máy in tem, máy quét, IoT, RFID.

- Nền tảng TXNG ngành (ITP) lưu trữ dữ liệu sự kiện EPCIS chi tiết; cung cấp portal cho doanh nghiệp, thanh tra, người tiêu dùng; vận hành rule engine và quản lý thu hồi.

- C12 thực hiện định danh, xác thực và điều phối; nhận master data bắt buộc và tóm tắt sự kiện từ nền tảng ngành qua Agent Node.

- Cổng TXNG quốc gia phục vụ công bố và tra cứu công khai; liên thông với hệ thống TXNG của tất cả bộ ngành.

- Cơ quan quản lý truy cập qua dashboard kiểm tra và C12 để thực hiện hậu kiểm và điều tra liên cơ quan.

## 9.3. Lộ trình triển khai 4 pha (24--36 tháng)

**Bảng 11. Lộ trình triển khai 4 pha**

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Pha**                       **Trọng tâm**                                                                                  **Kết quả chính**                                                                            **Chi phí tương đối**
  ----------------------------- ---------------------------------------------------------------------------------------------- -------------------------------------------------------------------------------------------- -----------------------
  **1 -- Khởi tạo**             Chuẩn hóa mô hình dữ liệu, governance, chọn chuẩn định danh, phân vai                          Data model thống nhất, quy trình nghiệp vụ, sandbox tích hợp C12, danh mục KPI               Medium

  **2 -- Thí điểm**             Tiền chất thuốc nổ, đồ uống; 1--2 địa phương; 20--30 DN đầu mối                                Serialization, EPCIS repository, portal thanh tra, tích hợp C12 và Cổng TXNG QG              Medium--High

  **3 -- Mở rộng**              Hóa chất, thuốc nổ công nghiệp, phụ kiện nổ, máy thiết bị; tích hợp logistics và kiểm nghiệm   Scale-out hạ tầng, dashboard quản lý, quy trình thu hồi--điều tra, AI phát hiện bất thường   High

  **4 -- Tối ưu & DPP-ready**   Giấy, nhóm hàng XK công nghiệp, nâng cấp thị trường quốc tế                                    Ánh xạ DPP-ready, phân tích gian lận, chia sẻ xuyên chuỗi, đăng ký GS1 Conformant            Medium--High
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 9.4. Bộ KPI vận hành

- Tỷ lệ sản phẩm/lô thuộc phạm vi đã có mã chuẩn: ≥ 95% sau pha mở rộng.

- Tỷ lệ sự kiện bắt buộc được ghi nhận đầy đủ: ≥ 98%.

- Thời gian đồng bộ sự kiện trọng yếu lên lớp dùng chung: ≤ 15 phút (online).

- Thời gian truy hồ sơ một lô/serial cho thanh tra: ≤ 2 phút.

- Thời gian khoanh vùng thu hồi: từ nhiều ngày xuống còn vài giờ.

- Tỷ lệ đối soát thành công giữa dữ liệu DN và dữ liệu quốc gia: ≥ 95%.

- Phủ sóng mục tiêu 2026: chuẩn bị ánh xạ GS1 Digital Link cho NDA Trace UID; mở API sandbox miễn phí; tích hợp plug-in cho Shopee, Tiki, Lazada, TikTok Shop.

## 9.5. Quản lý rủi ro triển khai

- Chồng lấn vai trò giữa Cổng TXNG quốc gia và C12: Ban hành phân vai rõ -- cổng quốc gia là public/discovery; C12 là identity/trust/exchange.

- Chất lượng dữ liệu thấp tại nguồn: Bắt buộc validation tại điểm nhập; đo completeness; audit định kỳ; đào tạo doanh nghiệp.

- Quá tải chia sẻ lên C12: Chỉ đồng bộ dữ liệu tối thiểu cần thiết; raw telemetry ở lại nền tảng ngành.

- Khóa công nghệ vào một vendor: Bắt buộc chuẩn mở, API mở, hợp đồng dữ liệu và kế hoạch exit.

- Chưa tương thích EU DPP trước 2027: Ngành pin cần Battery Passport khẩn cấp (mốc 18/2/2027); dệt may cần bắt đầu thu thập dữ liệu từ 2026 (18--24 tháng chuẩn bị).

# X. AN TOÀN THÔNG TIN VÀ GOVERNANCE

## 10.1. Phân loại dữ liệu và Nguyên tắc chia sẻ

Hệ thống TXNG xử lý nhiều loại dữ liệu với mức độ nhạy cảm khác nhau. Nguyên tắc chung: chia sẻ tối thiểu theo mục đích; kiểm soát truy cập theo vai trò; không đẩy toàn bộ telemetry thô lên C12.

**Bảng 12. Phân loại dữ liệu và nguyên tắc tiếp cận**

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Phân loại**                 **Nội dung ví dụ**                                                   **Nguyên tắc tiếp cận**
  ----------------------------- -------------------------------------------------------------------- ------------------------------------------------------------------------------
  **Công khai**                 Tên SP, ảnh, nhà SX, lô, xuất xứ, chứng nhận công khai               Đăng tải tự do trên Cổng TXNG quốc gia; tuân thủ 10 thông tin TT 02/2024

  **Nội bộ doanh nghiệp**       EPCIS event chi tiết, kế hoạch SX, tồn kho                           Chỉ chia sẻ khi có yêu cầu hợp lệ từ cơ quan có thẩm quyền

  **Bí mật kinh doanh**         Mạng lưới phân phối, sản lượng, giá vốn, dữ liệu logistics đối tác   Bắt buộc phân loại; không đẩy toàn bộ lên C12; bảo vệ theo Luật Doanh nghiệp

  **Dữ liệu cá nhân**           Thông tin người mua, người vận chuyển, người kiểm tra                Tuân thủ quyền riêng tư; áp dụng GDPR nếu có yếu tố EU; \'right to erasure\'

  **Dữ liệu bí mật nhà nước**   Tiền chất thuốc nổ, VLNCN, dữ liệu an ninh                           Chia sẻ theo quy định đặc thù; C06/C12 kiểm soát chặt
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 10.2. Bảy biện pháp bảo mật bắt buộc

- Mọi người dùng nội bộ quan trọng phải đăng nhập qua định danh điện tử và tích hợp IAM (Identity and Access Management).

- Tất cả dữ liệu truy xuất nhạy cảm phải được phân lớp: công khai -- nội bộ -- bí mật kinh doanh -- dữ liệu cá nhân -- bí mật nhà nước.

- Dữ liệu chia sẻ với C12 chỉ là dữ liệu tối thiểu theo mục đích; không đẩy toàn bộ telemetry thô.

- Hồ sơ quan trọng phải dùng chữ ký số và time-stamp để bảo đảm tính toàn vẹn và không thể phủ nhận.

- Nhật ký hệ thống (audit log) phải bất biến và truy vết được; sử dụng NDAChain hoặc cơ chế tương đương để ghi nhận sự kiện kiểm tra quan trọng.

- Hàng rủi ro cao phải có cơ chế tem bảo mật hoặc mã ký số chống sao chép (\'one time, one code\' với AES).

- Hệ thống phải có phương án offline fallback cho kiểm tra hiện trường khi mất kết nối mạng.

## 10.3. Quản trị dữ liệu (Governance)

- Khung kiến trúc dữ liệu quốc gia (Quyết định 2439/QĐ-TTg) và Từ điển dữ liệu dùng chung là nền tảng bắt buộc để tránh \'mỗi bộ một ngôn ngữ\'.

- Không khóa hệ thống vào một nhà cung cấp công nghệ riêng; yêu cầu chuẩn mở, API mở và kế hoạch exit trong hợp đồng.

- Kiểm toán dữ liệu định kỳ để đo tỷ lệ completeness và accuracy; đưa KPI chất lượng dữ liệu vào báo cáo vận hành.

- Phân vai rõ ràng: Cổng TXNG quốc gia (Bộ KH&CN) là lớp public/discovery; C12 (Bộ Công an) là lớp identity/trust/exchange; Nền tảng TXNG ngành (BCT/Bộ chuyên ngành) là lớp business/operations.

# KẾT LUẬN CHƯƠNG

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  *Việt Nam đang hình thành hai lớp năng lực bổ sung cho nhau: Lớp 1 là năng lực TXNG theo nghĩa quản lý sản phẩm và hàng hóa (từ Quyết định 100, Nghị định 13, Thông tư 02, Cổng TXNG quốc gia); Lớp 2 là năng lực dữ liệu quốc gia (C12 đang trở thành hạ tầng trust, định danh, xác thực, chia sẻ và điều phối dữ liệu). Nếu nhìn đúng vai trò, hai lớp này không cạnh tranh mà phải ghép vào nhau.*
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Hệ thống C12 đóng vai trò hạ tầng định danh và điều phối dữ liệu quốc gia, trong khi hệ thống TXNG phải được xây dựng như một lớp ứng dụng nghiệp vụ dựa trên chuẩn dữ liệu mở (EPCIS/GS1), bảo đảm dữ liệu phát sinh tại nguồn và tích hợp với C12 để thực hiện xác thực, đối soát và giám sát liên cơ quan.

Bài toán chiến lược trong 12--18 tháng tới không còn là \'có làm truy xuất hay không\' mà là \'làm đúng chuẩn toàn cầu với bao nhiêu thời gian còn lại\'. Áp lực từ EU DPP rất gần: Battery Passport bắt buộc từ 18/2/2027 cho pin EV và pin công nghiệp; dệt may từ giữa 2027. Nếu Việt Nam hoàn thành ánh xạ GS1 Digital Link, mở API cho SME và được EU công nhận tương thích DPP trước cuối 2027, C12 sẽ trở thành \'hạ tầng mềm chiến lược\' cho kinh tế số. Ngược lại, hàng xuất khẩu có nguy cơ bị kẹt giữa hai hệ thống định danh --- một trong nước, một quốc tế --- với chi phí tuân thủ kép.

**Đề xuất kỹ thuật tối ưu:**

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  TXNG ngành/DN (GS1 Digital Link + EPCIS/CBV) + Cổng TXNG quốc gia (tra cứu công khai) + C12 (định danh, xác thực, điều phối, giám sát liên cơ quan) + Secure tags / RFID / QR ký số (chọn lọc theo rủi ro)
  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# DANH MỤC TÀI LIỆU THAM KHẢO

## Văn bản pháp luật Việt Nam

- Nghị quyết 175/NQ-CP (30/10/2023) --- Đề án Trung tâm Dữ liệu Quốc gia.

- Quyết định 06/QĐ-TTg (6/1/2022) --- Đề án 06 phát triển ứng dụng dữ liệu dân cư, định danh và xác thực điện tử.

- Quyết định 100/QĐ-TTg (19/1/2019) --- Đề án triển khai, áp dụng và quản lý hệ thống TXNG.

- Nghị định 13/2022/NĐ-CP; Nghị định 69/2024/NĐ-CP; Nghị định 57/2022/NĐ-CP; Nghị định 90/2024/NĐ-CP; Nghị định 105/2021/NĐ-CP; Nghị định 37/2024/NĐ-CP; Nghị định 278/2025/NĐ-CP.

- Thông tư 02/2024/TT-BKHCN (28/3/2024) --- Quản lý TXNG sản phẩm hàng hóa; hiệu lực 1/6/2024.

- Thông tư 08/2025/TT-BCA --- Quy chuẩn kỹ thuật quốc gia về cấu trúc thông điệp dữ liệu trao đổi với C12.

- Luật Dữ liệu 2024; Luật Căn cước 2023; Luật Giao dịch điện tử 2023; Luật Phòng chống ma túy 2021; Luật Chất lượng SP&HH (sửa đổi 2025).

- Nghị quyết 57-NQ/TW của Bộ Chính trị; Chỉ thị 32/CT-TTg (4/9/2024); Kế hoạch 40/KH-BCA-C12.

- Quyết định 1751/QĐ-TTg (Chiến lược dữ liệu QG); Quyết định 2439/QĐ-TTg (Khung kiến trúc dữ liệu QG).

- Quyết định 5272/QĐ-BNNMT (13/12/2025) --- Thí điểm TXNG sầu riêng.

- Tiêu chuẩn quốc gia: TCVN 12850:2019, TCVN 12851:2019, TCVN 12827:2019, TCVN 13274:2020, TCVN 13275:2020, TCVN 13969:2024.

## Báo chí và nguồn thứ cấp Việt Nam

- VnExpress (8/7/2025). Thách thức TXNG hàng hóa tại Việt Nam.

- Tuổi Trẻ (21/7/2025). Giải pháp quốc gia chặn hàng giả.

- Tia Sáng (11/2025). TXNG -- Khi dữ liệu không chuẩn và thiếu đồng bộ.

- Dân Trí (1/7/2025). Bộ Công an đảm bảo an toàn cho dữ liệu quốc gia. https://dantri.com.vn

- VOV. Trung tâm Dữ liệu Quốc gia là hạ tầng chiến lược. https://vov.vn

- NDA (nda.org.vn). TXNG --- Động lực mới cho kinh tế số Việt Nam.

- Cổng chính thức NDAChain: https://ndachain.vn/vi

- Báo Sài Gòn Giải Phóng (8/7/2025). Định danh, xác thực và TXNG --- Động lực phát triển kinh tế số Việt Nam. https://www.sggp.org.vn

- Bộ Công an (16/10/2025). Thí điểm giải pháp định danh, TXNG hóa chất, tiền chất trên VNeID. https://bocongan.gov.vn

- Báo Chính phủ (6/4/2026). Kết nối 12 CSDL ngành NN&MT với C12. https://baochinhphu.vn

## Nguồn quốc tế

- GS1 (gs1.org). GS1 Digital Link standard; EPCIS 2.0; Sunrise 2027 initiative.

- GS1 EU (2024). GS1 Standards enabling the EU Digital Product Passport (white paper).

- Ủy ban châu Âu. ESPR Regulation (EU) 2024/1781; ESPR Working Plan 2025--2030 (16/4/2025).

- EU Battery Regulation 2023/1542.

- US FDA. FSMA Section 204 Food Traceability Rule; Federal Register 8/2025 --- Extension to 20/7/2028.

- Codex Alimentarius. CAC/GL 60-2006 --- Principles for Traceability/Product Tracing as a Tool Within a Food Inspection and Certification System.

- ISO 22005:2007 --- Traceability in the feed and food chain --- General principles and basic requirements.

- W3C. Decentralized Identifiers (DIDs) v1.0; Verifiable Credentials Data Model.

- MDPI (2023). Blockchain-Based Frameworks for Food Traceability.

- Ledger Insights --- TE-FOOD public blockchain launch (2018).
