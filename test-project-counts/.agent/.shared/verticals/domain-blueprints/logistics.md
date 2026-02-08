# 🚚 Logistics System Domain Blueprint

Một hệ thống Logistics đạt chuẩn chuyên nghiệp BẮT BUỘC phải có các nhóm API sau. Agent phải tự động đề xuất nếu thiếu.

## 1. 📦 Nhóm Vận đơn (Shipments & Tracking)
- `POST /shipments`: Tạo vận đơn mới (cần logic tính giá tự động).
- `GET /shipments`: Danh sách vận đơn (phân quyền: Admin xem hết, Khách xem của mình).
- `GET /shipments/:id`: Chi tiết vận đơn & Timeline trạng thái.
- `PATCH /shipments/:id/status`: Cập nhật trạng thái (Pickup, In Transit, Delivered, Returned).
- `GET /shipments/:id/tracking`: Lấy dữ liệu tracking thời gian thực.
- `POST /shipments/:id/cancel`: Hủy đơn (kèm điều kiện trạng thái).
- `POST /shipments/calculate-fee`: API giả lập tính phí dựa trên khối lượng/vị trí.

## 2. 🚛 Nhóm Điều phối & Tài xế (Fleet & Dispatch)
- `GET /drivers/available`: Tìm tài xế đang rảnh trong khu vực.
- `POST /dispatch/assign`: Điều xe/Gán tài xế cho đơn hàng.
- `PATCH /drivers/:id/location`: Cập nhật tọa độ GPS (Real-time).
- `GET /routes/optimize`: API tích hợp Google Maps/Mapbox để tính cung đường ngắn nhất.

## 3. 🏠 Nhóm Kho & Trạm (Hubs & Inventory)
- `POST /hubs/:id/inbound`: Nhập kho trạm (quét mã vạch).
- `POST /hubs/:id/outbound`: Xuất kho trạm để vận chuyển chặng tiếp theo.
- `GET /hubs/:id/inventory`: Kiểm kê hàng hiện có tại trạm.

## 4. 💰 Nhóm Tài chính (Billing & COD)
- `GET /billing/cod-report`: Báo cáo thu hộ tiền mặt của tài xế/trạm.
- `POST /invoices/generate`: Xuất hóa đơn điện tử cho khách hàng.
- `PATCH /billing/settlement`: Đối soát tài chính cuối ngày.

## 👥 5. Nhóm Khách hàng & Hỗ trợ (CRM)
- `POST /manifests/generate`: Tạo bảng kê hàng hóa cho khách hàng DN.
- `POST /tickets/complain`: Gửi khiếu nại về đơn hàng (mất/hỏng).

---
### 🛡️ Business Rules (Kinh nghiệp thực chiến):
- **Security**: Chỉ tài xế được gán mới có quyền cập nhật trạng thái đơn đó.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Real-time Operation
- **Map Integration**: Sử dụng `Mapbox` hoặc `Google Maps SDK` với cơ chế "Custom Overlay" để hiển thị hàng ngàn điểm Hub và Tài xế mà không bị lag.
- **Driver App (PWA/Mobile)**: Tích hợp `Web-OTP` và `Camera QR Scanner` cực nhạy để tài xế quét mã vận đơn tại trạm (Hub in/out).
- **Socket Tracking**: Hiển thị biểu tượng xe di chuyển mượt mà trên bản đồ bằng cách nội suy (Interpolation) tọa độ từ Websockets.

### ⚙️ Backend (BE) - Optimization & Routing
- **Route Optimization**: Tích hợp `GraphHopper` hoặc `OR-Tools` của Google để tính toán lộ trình giao hàng ngắn nhất cho tài xế dựa trên nhiều điểm dừng.
- **Geo-fencing**: Tự động thông báo cho khách hàng khi tài xế cách vị trí giao hàng < 500m bằng `Turf.js` hoặc các hàm không gian trong DB.

### 💾 Database (DB) - Spatial Intelligence
- **PostGIS**: Sử dụng tiện ích mở rộng `PostGIS` trong PostgreSQL để lưu tọa độ `GEOMETRY` và truy vấn nhanh các Hub lân cận bằng `ST_DWithin`.
- **Activity Feed**: Lưu mỗi lần chuyển trạng thái đơn hàng vào một bảng `shipment_events` (JSONB) để dễ dàng truy xuất timeline.

### 🔄 Industry Workflow (PDCA)
- **Do Phase**: Khi tài xế bấm "Đã lấy hàng", hệ thống phải tự động kiểm tra xem tọa độ GPS của tài xế có khớp với tọa độ kho hàng hay không.
