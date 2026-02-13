# 🍴 F&B & Restaurant Domain Blueprint

Tiêu chuẩn nghiệp vụ cho hệ thống Nhà hàng, Quán cafe, Giao đồ ăn (Food Delivery) và Quản lý vận hành (POS).

## 1. 📋 Nhóm Đặt bàn & Thực đơn (Booking & Digital Menu)
- `GET /menus`: Thực đơn số (chia theo nhóm: Khai vị, Chính, Đồ uống...).
- `POST /tables/book`: Đặt bàn (kèm số người, thời gian, vị trí).
- `GET /tables/availability`: Kiểm tra bàn trống thời gian thực.
- `POST /orders/at-table`: Gọi món tại bàn qua QR Code.

## 2. 🛵 Nhóm Giao hàng & Mang đi (Delivery & Takeaway)
- `POST /orders/delivery`: Đặt đơn giao tận nơi (cần tích hợp Map để tính phí ship).
- `PATCH /orders/:id/status`: Cập nhật trạng thái bếp (Đang chuẩn bị, Đã xong, Đang giao).
- `GET /delivery/tracking`: Theo dõi vị trí shipper.

## 3. 🖥️ Nhóm Vận hành & Kho (Back-office & Inventory)
- `POST /pos/checkout`: API thanh toán tại quầy (tích hợp ví, thẻ, tiền mặt).
- `GET /inventory/ingredients`: Quản lý nguyên liệu (Cảnh báo khi sắp hết).
- `POST /kitchen/display`: Đẩy đơn xuống màn hình bếp (KDS).

## 🎁 4. Nhóm Khách hàng thân thiết (Loyalty)
- `GET /loyalty/points`: Tích điểm và hạng thành viên.
- `POST /vouchers/apply`: Áp dụng mã giảm giá.

---

### 🛡️ Business Rules (Kinh nghiệm thực chiến):
- **Real-time Kitchen**: Đơn hàng từ App/Web phải đẩy xuống bếp ngay lập tức (Websockets).
- **Modifier Logic**: Phải hỗ trợ tùy chỉnh món ăn (ví dụ: Trà sữa ít đường, không đá).
- **Peak Hour Handling**: Cơ chế tạm đóng nhận đơn khi nhà hàng quá tải.
- **Auto-Inventory Deduction**: Khi bán 1 món, hệ thống phải tự động trừ nguyên liệu tương ứng trong kho.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Speed & Intuition
- **PWA for POS**: Thiết kế giao diện máy tính tiền (POS) dạng App để nhân viên thao tác cực nhanh, hỗ trợ cả khi mất mạng (Offline-first).
- **Digital Menu (QR)**: Tối ưu cho di động với hiệu ứng "Add to cart" mượt mà và giao diện "Sticky Cart" để khách luôn thấy giỏ hàng.
- **Table Map UI**: Giao diện sơ đồ bàn trực quan cho quản lý, hiển thị trạng thái bàn bằng màu sắc (Trống, Đang ăn, Chờ thanh toán).

### ⚙️ Backend (BE) - Real-time Coordination
- **Kitchen Display System (KDS)**: Sử dụng `Websockets (Socket.io)` để đẩy đơn từ Khách/Nhân viên xuống bếp trong < 100ms.
- **Printer Integration**: Tích hợp API in hóa đơn nhiệt qua giao thức `ESC/POS` (mạng LAN hoặc Bluetooth).
- **Modifier Logic**: Cấu trúc dữ liệu linh hoạt cho các lựa chọn món (ví dụ: Topping, Size, Note) để tính toán giá chính xác.

### 💾 Database (DB) - Operational Integrity
- **Shift Management**: Lưu trữ dữ liệu theo "Ca làm việc" (Shift) để dễ dàng đối soát tiền mặt cuối ngày.
- **Recipe Management**: Thiết kế bảng `recipes` liên kết món ăn với nguyên liệu kho để tự động tính toán giá vốn (COGS - Cost of Goods Sold).
- **Audit Trail**: Lưu log mọi thao tác "Hủy món" hoặc "Giảm giá tay" của nhân viên để tránh gian lận.

### 🔄 Industry Workflow (PDCA)
- **Check Phase**: Theo dõi chỉ số "Speed of Service" (Thời gian từ lúc gọi món đến lúc ra đồ) để tối ưu quy trình bếp.
