# ✈️ Hospitality & Tourism Domain Blueprint

Tiêu chuẩn nghiệp vụ cho hệ thống Đặt phòng khách sạn, Tour du lịch và Quản lý lữ hành.

## 1. 🏨 Nhóm Lưu trú (Hotel & Accommodation)
- `GET /rooms/availability`: Kiểm tra phòng trống theo ngày (Calendar view).
- `POST /bookings/hotel`: Đặt phòng (kèm tùy chọn: Buffet sáng, đưa đón).
- `GET /rooms/:id/policies`: Chính sách hủy phòng và quy định khách sạn.

## 🗺️ 2. Nhóm Tour & Trải nghiệm (Tours & Itinerary)
- `GET /tours`: Danh sách tour (Trọn gói, Trong ngày, Mạo hiểm).
- `GET /tours/:id/schedule`: Lịch trình chi tiết từng ngày (Itinerary).
- `POST /bookings/tour`: Đặt tour (kèm số lượng người lớn/trẻ em).

## 📅 3. Nhóm Quản lý Lịch trình (Trip Planner)
- `POST /trips/create`: Người dùng tự tạo lịch trình du lịch cá nhân.
- `GET /trips/:id/budget`: Ước tính chi phí cho chuyến đi.

## ⭐ 4. Nhóm Đánh giá & Phản hồi (Reviews)
- `POST /reviews`: Đánh giá kèm hình ảnh/video sau chuyến đi.
- `GET /reviews/sentiment`: AI phân tích cảm xúc phản hồi của khách hàng.

---

### 🛡️ Business Rules (Kinh nghiệm thực chiến):
- **Overbooking Guard**: Hệ thống phải khóa slot ngay khi khách đang ở bước thanh toán.
- **Dynamic Pricing**: Tự động tăng giá vào mùa cao điểm hoặc dịp lễ (Holiday multipliers).
- **Voucher Stacking Logic**: Kiểm soát việc áp dụng nhiều mã giảm giá cùng lúc.
- **Multilingual Support**: Du lịch bắt buộc phải hỗ trợ đa ngôn ngữ (i18n) để tiếp cận khách quốc tế.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Inspiration & Ease
- **Immersive Galleries**: Sử dụng ảnh 4K, video drone và hiệu ứng Parallax để khơi gợi cảm hứng du lịch ngay từ trang chủ.
- **Complex Search**: Bộ lọc mạnh mẽ tích hợp `Date Range Picker` và bản đồ tương tác để chọn vị trí khách sạn/điểm đến.
- **Multilingual UI**: Kiến trúc i18n chuẩn (dùng `next-intl` hoặc `react-i18next`) hỗ trợ chuyển đổi ngôn ngữ/tiền tệ mượt mà.

### ⚙️ Backend (BE) - Booking & Pricing Logic
- **Overbooking Guard**: Sử dụng `Session-based locking` (Redis) để giữ slot phòng/chỗ trong 10-15 phút khi khách đang thanh toán.
- **Dynamic Pricing Engine**: Thuật toán tự động điều chỉnh giá dựa trên công suất phòng (Occupancy) và nhu cầu thị trường.
- **API Aggregator**: Tích hợp với các bên cung cấp vé máy bay/khách sạn (Amadeus, Sabre) thông qua các lớp `Adapter` linh hoạt.

### 💾 Database (DB) - Availability Calendar
- **Availability Matrix**: Thiết kế bảng lưu trữ trạng thái phòng trống theo ngày để truy vấn nhanh cho tính năng xem lịch (Calendar view).
- **Price Management**: Bảng giá theo ngày (Daily rates) hỗ trợ các mức giá khác nhau cho ngày thường, cuối tuần và lễ tết.

### 🔄 Industry Workflow (PDCA)
- **Do Phase**: Hệ thống tự động gửi email/SMS nhắc nhở khách hàng trước chuyến đi 24h kèm theo mã QR để check-in nhanh.
