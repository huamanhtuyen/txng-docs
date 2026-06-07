## 🖼️ SLIDE 1 – TRANG BÌA

Kính thưa anh Linh, Lãnh đạo Cục. Kính thưa các anh chị Lãnh đạo. Kính thưa toàn thể các anh chị.


Hôm nay em xin được trình bày về **Hệ thống Truy xuất nguồn gốc sản phẩm công nghiệp** – một trong những nhiệm vụ trọng tâm mà **Bộ Công Thương** đang triển khai, theo phân công Chính phủ.

Đây là hệ thống mà chúng ta đã và đang xây dựng từng bước, và hôm nay em sẽ báo cáo tổng quan từ mục tiêu, giải pháp, đến kế hoạch triển khai thực tế.

---

## 📋 SLIDE 2 – MỤC LỤC

Về nội dung trình bày. Hôm nay em sẽ đi theo **4 nhóm nội dung chính**:



Một là, **Mục tiêu của hệ thống** – chúng ta đang giải quyết vấn đề gì.

Hai là, **Giới thiệu giải pháp** – chúng ta sẽ xây dựng cái gì, mô hình công nghệ như thế nào.

Ba là, **Phương án triển khai** – doanh nghiệp tham gia ra sao, hệ thống vận hành thế nào.

Và bốn là, **Kết quả đạt được** – hệ thống mới tiến bộ hơn hệ thống cũ ở những điểm cụ thể nào.

Ngoài ra, em có chuẩn bị thêm phần **Phụ lục kỹ thuật** phục vụ trao đổi chuyên sâu hơn khi cần thiết.

---

## 🎯 SLIDE 3 – MỤC TIÊU CỦA HỆ THỐNG

Về Mục tiêu của hệ thống.

Đây là một hệ thống hiệu năng cao được xây dựng nhằm đáp ứng được các yêu cầu về triển khai mạnh mẽ, cụ thể:

- **Thứ nhất**, đáp ứng được doanh nghiệp sản xuất tốc độ cao
- **Thứ hai**, truy xuất toàn chuỗi cung ứng, ghi nhận đầy đủ từ nguyên liệu → sản xuất → đóng gói → vận chuyển → phân phối → tiêu dùng, theo 6 chiều thông tin:
  - **What** – Hàng hoá gì?
  - **When** – Thời điểm nào?
  - **Where** – Ở địa điểm nào?
  - **Who** – Ai thực hiện?
  - **Why** – Lý do / mục đích gì?
  - **How** – Thực hiện bằng phương thức nào?
- **Thứ ba**, công nghệ AI phòng chống hàng giả hàng nhái
- **Thứ tư**, kết nối liên thông
- **Thứ năm**, phân tích cảnh báo rủi ro
- **Thứ sáu**, bảo đảm toàn vẹn dữ liệu

---

## 💡 SLIDE 4 – GIỚI THIỆU GIẢI PHÁP – MÔ HÌNH TỔNG THỂ

thưa các anh chị, để đạt được mục tiêu như trên thì chúng ta cần **một giải pháp mới**.

Về mặt kiến trúc, hệ thống được tổ chức theo **5 lớp**. Từ dưới lên:

- **Lớp tiếp nhận dữ liệu** – gồm các ứng dụng cho doanh nghiệp kê khai , và cổng tiếp nhận dữ liệu để kết nối với hệ thống nội bộ của doanh nghiệp như ERP hay kho vận. Với các nhà máy muốn tự động hóa cao, chúng ta có thể tiếp nhận dữ liệu **trực tiếp từ thiết bị IoT**.

- **Lớp xử lý** – sử dụng trục tích hợp, có khả năng xử lý **hàng triệu sự kiện mỗi giây**, đảm bảo hệ thống không bị nghẽn dù có hàng nghìn doanh nghiệp kết nối đồng thời.


- **Lớp AI** – đây là điểm nhấn của hệ thống. **AI chuyên dụng** của chúng ta có khả năng phát hiện hàng giả, phát hiện tuyến phân phối bất thường, giám sát điều kiện vận chuyển, chấm điểm rủi ro cho từng lô hàng, từng nhà cung cấp, và trợ lý tra cứu AI.


- **Lớp Blockchain** – mọi sự kiện truy xuất nguồn gốc đều được **niêm phong bằng Blockchain**. Có nghĩa là không ai có thể sửa lịch sử hàng hóa sau khi đã ghi nhận.

- **Lớp kết nối** – hệ thống của chúng ta kết nối với **Nền tảng Quốc gia về định danh và truy xuất nguồn gốc**, với **GS1 Việt Nam** để đảm bảo mã hàng hóa được công nhận quốc tế.

Và đặc biệt, trong giải pháp này, chúng em đề xuất sử dụng **chuẩn dữ liệu quốc tế GS1 EPCIS 2.0** – cho phép tự động hoá 100% việc ghi nhận sự kiện trên toàn chuỗi cung ứng.


---

## ☁️ SLIDE 5 – HẠ TẦNG CNTT ĐƯỢC ĐẦU TƯ
Để vận hành được hệ thống này, **Bộ Công Thương đã đầu tư một hạ tầng CNTT rất đáng kể**.


**Điểm nhấn đầu tiên** là **máy chủ AI chuyên dụng NVIDIA H100** – cùng thế hệ với máy chủ ChatGPT. Cho phép xử lý & phân tích dữ liệu truy xuất nguồn gốc theo thời gian thực, phát hiện hàng giả và gian lận **ngay lập tức**.


**Điểm nhấn thứ hai** là sử dụng công nghệ **điện toán đám mây riêng**. Toàn bộ dữ liệu của hệ thống nằm **hoàn toàn trong hạ tầng Nhà nước**, không phụ thuộc vào nước ngoài, tăng cường **chủ quyền số quốc gia** cho dữ liệu truy xuất nguồn gốc hàng hóa Việt Nam.



Hệ thống bảo mật đạt **Cấp độ 3** là cấp độ cao nhất, với giám sát an toàn thông tin 24/7. Dữ liệu được lưu trữ trên Blockchain bất biến và hệ thống có khả năng phục hồi tự động – đảm bảo **ổn định 99.9%**.


*(Nếu có câu hỏi về thông số kỹ thuật, tôi có phần chi tiết đầy đủ – xin nhấn vào "Chi tiết kỹ thuật đầy đủ".)*

---

## 🚀 SLIDE 6 – PHƯƠNG ÁN TRIỂN KHAI 

Về phương án triển khai, một câu hỏi quan trọng: **các phương án triển khai như thế nào?**


Chúng em đã cân nhắc kỹ và **chọn mô hình cài đặt tập trung tại Bộ Công Thương**. Lý do là:

`[chỉ vào phần ưu điểm]`

Khi đặt tập trung, **Bộ hoàn toàn kiểm soát** hạ tầng, bảo mật, và chất lượng dữ liệu. Doanh nghiệp không cần tự mua máy chủ, không cần thuê đội IT riêng để vận hành – **chi phí cho doanh nghiệp bằng không**.

Hệ thống được cập nhật và nâng cấp **một lần duy nhất ở trung tâm** – tất cả doanh nghiệp hưởng lợi ngay lập tức, không cần cài lại phần mềm.


Tuy nhiên, chúng tôi cũng dự phòng cho trường hợp doanh nghiệp muốn **vận hành nội bộ** vì lý do bảo mật dữ liệu kinh doanh – hệ thống có thể triển khai theo mô hình **lai**, dữ liệu nhạy cảm lưu tại doanh nghiệp, chỉ đồng bộ sự kiện TXNG lên hệ thống Bộ.

Như vậy, với phương án triển khai này, vừa **đảm bảo quản lý Nhà nước** vừa **linh hoạt cho doanh nghiệp**.


---

## 🏭 SLIDE 7 – DOANH NGHIỆP CẦN LÀM GÌ ĐỂ THAM GIA?
Vậy: **Doanh nghiệp muốn tham gia thì cần làm gì?**


`[chỉ vào 3 ô cấp độ ở trên]`

Câu trả lời là: **tùy theo quy mô và năng lực của doanh nghiệp**, chúng ta có **3 cấp độ tham gia**:

**Cấp độ 1 – Sử dụng phần mềm miễn phí:** Doanh nghiệp chỉ cần một chiếc điện thoại hoặc máy tính có kết nối Internet, đăng nhập vào cổng **verigoods.vn** và bắt đầu kê khai. **Hoàn toàn miễn phí.** Phù hợp với các cơ sở sản xuất nhỏ, hộ kinh doanh.

**Cấp độ 2 – Sử dụng cổng tiếp nhận:** Với doanh nghiệp vừa và lớn đã có phần mềm nội bộ – chúng ta cung cấp **cổng tiếp nhận** để kết nối trực tiếp. Dữ liệu truy xuất nguồn gốc tự động đẩy lên hệ thống, không cần nhân viên kê khai lại.


**Cấp độ 3 – Sử dụng thiết bị IoT:** Với các nhà máy sản xuất lớn, muốn ghi nhận tự động từng sự kiện trên dây chuyền – chúng ta hỗ trợ tích hợp thiết bị IoT như thẻ từ RFID, cảm biến, cân điện tử, camera AI. Mọi sự kiện ghi nhận tự động theo chuẩn quốc tế **EPCIS 2.0**, không cần nhân công nhập liệu.


`[chỉ vào phần vai trò đại lý]`

Một điểm mới **rất quan trọng** là chúng ta có **mạng lưới Đại lý TXNG**. Đây là các đơn vị được ủy quyền, đến **tận nơi hỗ trợ doanh nghiệp** đăng ký, cài đặt, đào tạo và hỗ trợ vận hành.


`[chỉ vào phần các bước tham gia]`

Quy trình tham gia rất đơn giản, **4 bước**: Đăng ký tài khoản → Kê khai thông tin sản phẩm → Nhận mã và in tem QR → Tùy chọn tích hợp API nếu muốn nâng cao.

`[chỉ vào phần GTIN]`

Về **mã định danh sản phẩm** – với doanh nghiệp chưa có mã GTIN quốc tế, chúng tôi có 3 phương án. Khuyến nghị đăng ký **GTIN qua GS1 Việt Nam** với mức phí khoảng 1 đến 3 triệu một năm, để sản phẩm được công nhận trên toàn cầu. Doanh nghiệp nào chưa có GTIN ngay thì Bộ sẽ cấp **mã tạm dựa trên mã số thuế** để dùng ngay, sau đó migrate sang GTIN thật.

---

## 📊 SLIDE 8 – KẾT QUẢ ĐẠT ĐƯỢC – ĐIỂM MỚI SO VỚI HỆ THỐNG CŨ
*(~2 phút – đây là phần thuyết phục lãnh đạo)*

Thưa các anh chị, cuối cùng là phần so sánh **hệ thống mới và hệ thống cũ**.


`[chỉ vào bảng so sánh]`

**Về chuẩn dữ liệu:** Hệ thống cũ tự định nghĩa cấu trúc, không theo chuẩn quốc tế, không hợp chuẩn được với nước ngoài. Hệ thống mới tuân thủ **chuẩn GS1 EPCIS 2.0** – tương thích với quy định của **Mỹ, Châu Âu**, và đáp ứng điều kiện xuất xứ hàng hóa theo hiệp định **EVFTA và CPTPP**. Điều này có nghĩa là doanh nghiệp Việt Nam có thể dùng dữ liệu TXNG này khi xuất khẩu sang các thị trường khó tính nhất.

**Về mô hình triển khai:** Hệ thống cũ Bộ trực tiếp hỗ trợ doanh nghiệp, không có trung gian, rất khó tiếp cận doanh nghiệp nhỏ. Hệ thống mới có **mạng lưới Đại lý TXNG** được ủy quyền – phủ khắp tỉnh thành, hỗ trợ tại chỗ.

**Về IoT:** Hệ thống cũ không tiếp nhận dữ liệu cảm biến, chỉ nhận thông tin doanh nghiệp khai báo thủ công. Hệ thống mới **tiếp nhận trực tiếp dữ liệu IoT** như nhiệt độ, độ ẩm, GPS từ thiết bị trên dây chuyền sản xuất.

**Về Blockchain:** Hệ thống cũ không có cơ chế chống giả mạo dữ liệu. Hệ thống mới sử dụng **Hyperledger Fabric** – mọi thông tin truy xuất nguồn gốc sau khi ghi không thể sửa đổi.

**Về AI:** Hệ thống cũ chưa có AI, phát hiện vi phạm chủ yếu dựa vào báo cáo thủ công. Hệ thống mới có **AI chuyên dụng** phát hiện serial trùng lặp, tuyến bất thường, mô hình phân phối giả mạo – và **chấm điểm rủi ro** cho từng lô hàng, từng nhà cung cấp theo thời gian thực.

`[nhìn thẳng vào lãnh đạo]`

Tóm lại, đây là một hệ thống có rất nhiều điểm mới, công nghệ tầm quốc tế, phù hợp định hướng **chuyển đổi số và hội nhập kinh tế toàn cầu** của Việt Nam.


---

## 👏 SLIDE 9 – CẢM ƠN & KẾT THÚC
*(~30 giây)*

Kính thưa các anh chị Lãnh đạo,

Trên đây là toàn bộ nội dung tôi muốn báo cáo về **Hệ thống Truy xuất nguồn gốc sản phẩm công nghiệp của Bộ Công Thương**.

Hệ thống đang được triển khai theo đúng lộ trình, **bám sát các văn bản chỉ đạo của Chính phủ** và kế thừa tốt nhất kinh nghiệm từ quốc tế.


Kính mong Lãnh đạo ghi nhận và tiếp tục **chỉ đạo, hỗ trợ** để chúng tôi có thể hoàn thành nhiệm vụ được giao.

Tôi xin trân trọng cảm ơn và **sẵn sàng trả lời mọi câu hỏi**.

