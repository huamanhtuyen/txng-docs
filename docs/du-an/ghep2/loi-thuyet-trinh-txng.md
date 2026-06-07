# 📢 Kịch bản lời thuyết trình
## Hệ thống Truy xuất nguồn gốc sản phẩm công nghiệp – Bộ Công Thương

> **Hướng dẫn sử dụng:**
> - Mỗi `---` là dấu ngừng, hít thở, nhìn lên khán giả
> - Chữ **in đậm** = nhấn mạnh giọng
> - `[chỉ tay]` = hành động kèm theo
> - Thời lượng tổng ước tính: **12–15 phút**

---

## 🖼️ SLIDE 1 – TRANG BÌA
*(~30 giây – mở đầu, nhìn thẳng vào lãnh đạo)*

Kính thưa Lãnh đạo,

Hôm nay tôi xin được trình bày về **Hệ thống Truy xuất nguồn gốc sản phẩm công nghiệp** – một trong những nhiệm vụ trọng tâm mà **Bộ Công Thương** đang triển khai, theo phân công của Ban Chỉ đạo Chính phủ.

Đây là hệ thống mà chúng ta đã và đang xây dựng từng bước, và hôm nay tôi sẽ báo cáo tổng quan từ bối cảnh, giải pháp, đến kế hoạch triển khai thực tế.

---

## 📋 SLIDE 2 – MỤC LỤC
*(~30 giây – giới thiệu hành trình)*

Buổi trình bày hôm nay tôi sẽ đi theo **4 nhóm nội dung chính** `[chỉ tay vào từng ô]`:

Một là, **Mục tiêu của hệ thống** – chúng ta đang giải quyết vấn đề gì, và tại sao cần làm ngay bây giờ.

Hai là, **Giới thiệu giải pháp** – chúng ta đã xây dựng cái gì, mô hình công nghệ như thế nào.

Ba là, **Phương án triển khai** – doanh nghiệp tham gia ra sao, hệ thống vận hành tập trung hay phân tán.

Và bốn là, **Kết quả đạt được** – hệ thống mới tiến bộ hơn hệ thống cũ ở những điểm cụ thể nào.

Ngoài ra, tôi có chuẩn bị thêm phần **Phụ lục kỹ thuật** – chỉ dùng khi có câu hỏi chuyên sâu.

---

## 🎯 SLIDE 3 – MỤC TIÊU CỦA HỆ THỐNG
*(~2 phút – đây là slide quan trọng nhất về lý do)*

Thưa Lãnh đạo, trước hết tôi muốn nói về **bối cảnh và vấn đề**.

**Thực trạng hiện nay trên thị trường** là: hàng giả, hàng kém chất lượng vẫn lưu thông rộng rãi. Người tiêu dùng không có cách nào kiểm chứng một sản phẩm là thật hay giả chỉ bằng mắt thường. Cơ quan quản lý thiếu công cụ giám sát thị trường theo thời gian thực. Và doanh nghiệp làm ăn chân chính thì bị thiệt thòi vì không có cách nào **chứng minh** sản phẩm của mình là chính hãng.

`[chuyển sang phần pháp lý]`

Về **cơ sở pháp lý** – hệ thống này không phải chúng ta tự nghĩ ra, mà được **giao trực tiếp từ cấp Chính phủ**. Cụ thể, **Quyết định số 11 của Ban Chỉ đạo Chính phủ** ngày 27 tháng 2 năm 2026 đã giao **Bộ Công Thương** chủ trì xây dựng và vận hành hệ thống truy xuất nguồn gốc cho các lĩnh vực công nghiệp ưu tiên, công nghiệp thực phẩm, và hàng hóa rủi ro cao – đồng thời tích hợp với Cổng Thông tin truy xuất nguồn gốc Quốc gia.

Bên cạnh đó, Nghị quyết 57 của Bộ Chính trị về đột phá phát triển khoa học công nghệ và chuyển đổi số, cùng với Nghị định 37 về định danh, xác thực và truy xuất nguồn gốc, tạo ra khung pháp lý **đầy đủ và rõ ràng** để chúng ta triển khai.

`[chuyển sang phần lợi ích]`

Vậy hệ thống này mang lại gì? Với **cơ quan Nhà nước**, đây là công cụ giám sát thị trường mạnh mẽ, hậu kiểm tự động, phát hiện sớm vi phạm. Với **doanh nghiệp**, đây là cách để khẳng định uy tín thương hiệu và tiếp cận thị trường xuất khẩu. Với **người tiêu dùng**, chỉ cần quét mã QR là biết hành trình của sản phẩm.

---

## 💡 SLIDE 4 – GIỚI THIỆU GIẢI PHÁP – MÔ HÌNH TỔNG THỂ
*(~2 phút – giải thích kiến trúc, tránh quá kỹ thuật)*

Thưa Lãnh đạo, bây giờ tôi xin trình bày về **giải pháp chúng ta đã xây dựng**.

`[chỉ vào sơ đồ kiến trúc]`

Về mặt kiến trúc, hệ thống được tổ chức theo **5 lớp**. Từ dưới lên:

- **Lớp tiếp nhận dữ liệu** – gồm ứng dụng di động cho doanh nghiệp kê khai thủ công, và cổng API để kết nối với hệ thống nội bộ của doanh nghiệp như ERP hay kho vận. Với các nhà máy muốn tự động hóa cao, chúng ta có thể tiếp nhận dữ liệu **trực tiếp từ thiết bị IoT**.

- **Lớp xử lý** – là trục tích hợp, có khả năng xử lý **hàng triệu sự kiện mỗi giây**, đảm bảo hệ thống không bị nghẽn dù có hàng nghìn doanh nghiệp kết nối đồng thời.

- **Lớp AI** – đây là điểm nhấn của hệ thống. **AI chuyên dụng** của chúng ta có khả năng phát hiện hàng giả, phát hiện tuyến phân phối bất thường, giám sát điều kiện vận chuyển, và chấm điểm rủi ro cho từng lô hàng, từng nhà cung cấp.

- **Lớp Blockchain** – mọi sự kiện truy xuất nguồn gốc đều được **niêm phong bằng Blockchain**. Có nghĩa là không ai có thể sửa lịch sử hàng hóa sau khi đã ghi nhận.

- **Lớp kết nối** – hệ thống của chúng ta kết nối với **Nền tảng Quốc gia về định danh và truy xuất nguồn gốc**, với **GS1 Việt Nam** để đảm bảo mã hàng hóa được công nhận quốc tế.

---

## ☁️ SLIDE 5 – HẠ TẦNG CNTT ĐƯỢC ĐẦU TƯ
*(~1.5 phút – PR cho lãnh đạo, tránh đi sâu kỹ thuật)*

Thưa Lãnh đạo, để vận hành được hệ thống này, **Bộ Công Thương đã đầu tư một hạ tầng CNTT rất đáng kể**.

`[chỉ vào 2 ô lớn ở trên]`

**Điểm nhấn đầu tiên** là **máy chủ AI chuyên dụng NVIDIA H100** – đây là dòng chip AI tiên tiến nhất hiện nay, cùng thế hệ với các hệ thống AI nổi tiếng như ChatGPT. Với 3 GPU H100, hệ thống của chúng ta có khả năng xử lý và phân tích dữ liệu truy xuất nguồn gốc theo thời gian thực, phát hiện hàng giả và gian lận **ngay lập tức**.

**Điểm nhấn thứ hai** là **hệ thống đám mây riêng – Private Cloud BCT**. Toàn bộ dữ liệu của hệ thống nằm **hoàn toàn trong hạ tầng Nhà nước**, không phụ thuộc vào nước ngoài. Đây là đảm bảo **chủ quyền số quốc gia** cho dữ liệu truy xuất nguồn gốc hàng hóa Việt Nam.

`[chỉ vào 3 ô nhỏ ở giữa]`

Ngoài ra, hệ thống được bảo vệ đạt **Cấp độ bảo mật 3** – tiêu chuẩn cao nhất theo quy định của Nhà nước, với giám sát an toàn thông tin 24/7. Dữ liệu được lưu trữ trên Blockchain bất biến và hệ thống có khả năng phục hồi tự động – đảm bảo **uptime 99.9%**.

*(Nếu có câu hỏi về thông số kỹ thuật, tôi có phần chi tiết đầy đủ – xin nhấn vào "Chi tiết kỹ thuật đầy đủ".)*

---

## 🚀 SLIDE 6 – PHƯƠNG ÁN TRIỂN KHAI – TẬP TRUNG HAY PHÂN TÁN?
*(~1.5 phút – giải thích mô hình vận hành)*

Thưa Lãnh đạo, một câu hỏi quan trọng khi thiết kế hệ thống là: **nên đặt hệ thống ở đâu?**

Chúng tôi đã cân nhắc kỹ và **chọn mô hình cài đặt tập trung tại Bộ Công Thương**. Lý do là:

`[chỉ vào phần ưu điểm]`

Khi đặt tập trung, **Bộ hoàn toàn kiểm soát** hạ tầng, bảo mật, và chất lượng dữ liệu. Doanh nghiệp không cần tự mua server, không cần thuê đội IT riêng để vận hành – **chi phí cho doanh nghiệp bằng không**.

Hệ thống được cập nhật và nâng cấp **một lần duy nhất ở trung tâm** – tất cả doanh nghiệp hưởng lợi ngay lập tức, không cần cài lại phần mềm.

`[chỉ vào phần nhược điểm và giải pháp]`

Tuy nhiên, chúng tôi cũng dự phòng cho trường hợp doanh nghiệp muốn **vận hành nội bộ** vì lý do bảo mật dữ liệu kinh doanh – hệ thống có thể triển khai theo mô hình **hybrid**, dữ liệu nhạy cảm lưu tại doanh nghiệp, chỉ đồng bộ sự kiện TXNG lên hệ thống Bộ.

Tóm lại, mô hình này vừa **đảm bảo quản lý Nhà nước** vừa **linh hoạt cho doanh nghiệp**.

---

## 🏭 SLIDE 7 – DOANH NGHIỆP CẦN LÀM GÌ ĐỂ THAM GIA?
*(~2 phút – phần thực tế nhất, lãnh đạo quan tâm)*

Thưa Lãnh đạo, đây có lẽ là câu hỏi thực tế nhất: **Doanh nghiệp muốn tham gia thì cần làm gì?**

`[chỉ vào 3 ô cấp độ ở trên]`

Câu trả lời là: **tùy theo quy mô và năng lực của doanh nghiệp**, chúng ta có **3 cấp độ tham gia**:

**Cấp độ 1 – Sử dụng phần mềm miễn phí:** Doanh nghiệp chỉ cần một chiếc điện thoại hoặc máy tính có kết nối Internet, đăng nhập vào cổng **verigoods.vn** và bắt đầu kê khai. **Hoàn toàn miễn phí.** Phù hợp với các cơ sở sản xuất nhỏ, hộ kinh doanh.

**Cấp độ 2 – Kết nối hệ thống nội bộ:** Với doanh nghiệp vừa và lớn đã có phần mềm quản lý ERP, kho vận WMS – chúng ta cung cấp **API tích hợp trực tiếp**. Dữ liệu truy xuất nguồn gốc tự động đẩy lên hệ thống, không cần nhân viên kê khai lại.

**Cấp độ 3 – Tự động hóa 100% IoT:** Với các nhà máy sản xuất lớn, muốn ghi nhận tự động từng sự kiện trên dây chuyền – chúng ta hỗ trợ tích hợp thiết bị IoT như RFID, cân điện tử, camera AI. Mọi sự kiện ghi nhận tự động theo chuẩn **EPCIS 2.0**, không cần nhân công nhập liệu.

`[chỉ vào phần vai trò đại lý]`

Một điểm mới **rất quan trọng** là chúng ta có **mạng lưới Đại lý TXNG**. Đây là các đơn vị được Bộ ủy quyền, đến **tận nơi hỗ trợ doanh nghiệp nhỏ** đăng ký, cài đặt, đào tạo. Điều này giải quyết bài toán lớn nhất của hệ thống cũ là: doanh nghiệp nhỏ không biết làm và không có người hỗ trợ.

`[chỉ vào phần các bước tham gia]`

Quy trình tham gia rất đơn giản, **4 bước**: Đăng ký tài khoản → Kê khai thông tin sản phẩm → Nhận mã và in tem QR → Tùy chọn tích hợp API nếu muốn nâng cao.

`[chỉ vào phần GTIN]`

Về **mã định danh sản phẩm** – với doanh nghiệp chưa có mã GTIN quốc tế, chúng tôi có 3 phương án. Khuyến nghị đăng ký **GTIN qua GS1 Việt Nam** với mức phí khoảng 1 đến 3 triệu một năm, để sản phẩm được công nhận trên toàn cầu. Doanh nghiệp nào chưa có GTIN ngay thì Bộ sẽ cấp **mã tạm dựa trên mã số thuế** để dùng ngay, sau đó migrate sang GTIN thật.

---

## 📊 SLIDE 8 – KẾT QUẢ ĐẠT ĐƯỢC – ĐIỂM MỚI SO VỚI HỆ THỐNG CŨ
*(~2 phút – đây là phần thuyết phục lãnh đạo)*

Thưa Lãnh đạo, cuối cùng tôi muốn so sánh **hệ thống mới và hệ thống cũ** một cách thẳng thắn.

`[chỉ vào bảng so sánh]`

**Về chuẩn dữ liệu:** Hệ thống cũ tự định nghĩa schema, không theo chuẩn quốc tế, không liên thông được với nước ngoài. Hệ thống mới tuân thủ **chuẩn GS1 EPCIS 2.0** – tương thích với quy định của **Mỹ, Châu Âu**, và đáp ứng điều kiện xuất xứ hàng hóa theo **EVFTA và CPTPP**. Điều này có nghĩa là doanh nghiệp Việt Nam có thể dùng dữ liệu TXNG này khi xuất khẩu sang các thị trường khó tính nhất.

**Về mô hình triển khai:** Hệ thống cũ Bộ trực tiếp hỗ trợ doanh nghiệp, không có trung gian, rất khó tiếp cận doanh nghiệp nhỏ. Hệ thống mới có **mạng lưới Đại lý TXNG** được ủy quyền – phủ khắp tỉnh thành, hỗ trợ tại chỗ.

**Về IoT:** Hệ thống cũ không tiếp nhận dữ liệu cảm biến, chỉ nhận thông tin doanh nghiệp khai báo thủ công. Hệ thống mới **tiếp nhận trực tiếp dữ liệu IoT** như nhiệt độ, độ ẩm, GPS từ thiết bị trên dây chuyền sản xuất.

**Về Blockchain:** Hệ thống cũ không có cơ chế chống giả mạo dữ liệu. Hệ thống mới sử dụng **Hyperledger Fabric** – mọi thông tin truy xuất nguồn gốc sau khi ghi không thể sửa đổi.

**Về AI:** Hệ thống cũ chưa có AI, phát hiện vi phạm chủ yếu dựa vào báo cáo thủ công. Hệ thống mới có **AI chuyên dụng** phát hiện serial trùng lặp, tuyến bất thường, mô hình phân phối giả mạo – và **chấm điểm rủi ro** cho từng lô hàng, từng nhà cung cấp theo thời gian thực.

`[nhìn thẳng vào lãnh đạo]`

Tóm lại, đây không chỉ là nâng cấp – đây là **hệ thống hoàn toàn mới**, với công nghệ ở tầm quốc tế, phù hợp với định hướng **chuyển đổi số và hội nhập kinh tế toàn cầu** của Việt Nam.

---

## 👏 SLIDE 9 – CẢM ƠN & KẾT THÚC
*(~30 giây)*

Kính thưa Lãnh đạo,

Trên đây là toàn bộ nội dung tôi muốn báo cáo về **Hệ thống Truy xuất nguồn gốc sản phẩm công nghiệp của Bộ Công Thương**.

Hệ thống đang được triển khai theo đúng lộ trình, **bám sát các văn bản chỉ đạo của Chính phủ** và kế thừa tốt nhất kinh nghiệm từ các hệ thống trước.

Kính mong Lãnh đạo ghi nhận và tiếp tục **chỉ đạo, hỗ trợ** để chúng tôi có thể hoàn thành nhiệm vụ được giao.

Tôi xin trân trọng cảm ơn và **sẵn sàng trả lời mọi câu hỏi**.

---

## 📎 PHỤ LỤC – DÙNG KHI CÓ CÂU HỎI

### Câu hỏi: "IoT hoạt động cụ thể như thế nào?"

Thưa Lãnh đạo, với các nhà máy sản xuất quy mô lớn, chúng ta lắp đặt thiết bị IoT trực tiếp vào dây chuyền. Ví dụ, một nhà máy sữa muốn đảm bảo nhiệt độ bảo quản 2 đến 6 độ C – cảm biến trên xe lạnh sẽ ghi nhận liên tục và đẩy dữ liệu thẳng vào hệ thống theo chuẩn **EPCIS 2.0**. Nếu nhiệt độ vượt ngưỡng quá 60 phút, AI sẽ **cảnh báo ngay** và xác định chính xác **pallet nào bị ảnh hưởng** – không cần thu hồi toàn bộ lô, tiết kiệm chi phí đáng kể.

### Câu hỏi: "Mã QR này khác gì mã QR thông thường?"

Thưa Lãnh đạo, chúng ta sử dụng chuẩn **GS1 Digital Link** – đây là thế hệ mã QR thông minh, không chỉ lưu link web mà còn nhúng trực tiếp **GTIN, số lô, hạn dùng**. Người tiêu dùng chỉ cần dùng camera điện thoại bình thường quét là xem được toàn bộ hành trình sản phẩm, không cần cài app riêng.

### Câu hỏi: "Doanh nghiệp mất bao lâu để tham gia?"

Thưa Lãnh đạo, với cấp độ đơn giản nhất – dùng phần mềm miễn phí – doanh nghiệp chỉ cần **30 phút** để đăng ký và bắt đầu kê khai. Với cấp độ tích hợp API, thời gian kỹ thuật khoảng **1 đến 2 tuần** tùy theo hệ thống nội bộ của doanh nghiệp. Đội Đại lý TXNG sẽ hỗ trợ toàn bộ quá trình này.

---

*📝 Ghi chú: Kịch bản này có thể điều chỉnh tuỳ theo thời lượng thực tế và phản ứng của khán giả.*
