# 🛍️ Retail & Omnichannel E-commerce Blueprint

Tiêu chuẩn nghiệp vụ cho hệ thống Bán lẻ hiện đại, hỗ trợ bán hàng đa kênh (Cửa hàng + Online).

## 1. 📦 Nhóm Sản phẩm & Tồn kho (Product & Inventory)
- `GET /products`: Danh sách sản phẩm (kèm biến thể: màu sắc, kích thước).
- `GET /inventory/stocks`: Đồng bộ tồn kho giữa các chi nhánh (Store vs Online).
- `POST /products/flash-sale`: Thiết lập khung giờ giảm giá sốc.

## 2. 🛒 Nhóm Đơn hàng & Thanh toán (Orders & Checkout)
- `POST /cart/sync`: Đồng bộ giỏ hàng trên nhiều thiết bị.
- `POST /checkout/payment-link`: Tạo link thanh toán nhanh.
- `GET /orders/history`: Lịch sử mua hàng đa kênh.
- `POST /returns/request`: Yêu cầu đổi trả hàng (Return/Exchange flow).

## 🚚 3. Nhóm Vận chuyển & Giao nhận (Shipping)
- `POST /shipping/labels`: Tạo nhãn vận chuyển (Tích hợp GHTK, GHN, Viettel).
- `GET /shipping/rates`: So sánh phí ship giữa các đơn vị vận chuyển.

## 👥 4. CRM & Tiếp thị (Marketing)
- `POST /wishlist`: Danh sách yêu thích.
- `GET /recommendations`: Gợi ý sản phẩm "Có thể bạn cũng thích" (AI based).
- `GET /abandoned-cart`: API liệt kê giỏ hàng bị bỏ quên để gửi mail nhắc nhở.

---

### 🛡️ Business Rules (Kinh nghiệm thực chiến):
- **SEO Ready**: Mọi sản phẩm phải có Schema.org markup để Google dễ dàng quét dữ liệu.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Conversion & Performance
- **Image Optimization**: Sử dụng `Next/Image` với cơ chế `Priority` cho các ảnh Above-the-fold và `WebP/AVIF` để giảm dung lượng file xuống tối đa.
- **Virtual Scrolling**: Áp dụng cho các trang danh mục sản phẩm có hàng ngàn mặt hàng để đảm bảo FPS luôn ở mức 60.
- **Cart Sync**: Sử dụng `Zustand` kết hợp `Persistence` để đồng bộ giỏ hàng ngay lập tức khi user chuyển đổi giữa các tab hoặc thiết bị.

### ⚙️ Backend (BE) - Fulfillment & Scale
- **Order State Machine**: Triển khai luồng đơn hàng (Pending -> Paid -> Packing -> Shipping -> Delivered) chặt chẽ, không cho phép nhảy cóc trạng thái.
- **Voucher Engine**: Cơ chế tính toán giảm giá phức tạp (Percent, Fixed, Free-ship, Stackable) với độ chính xác cao.
- **Third-party Logistics (3PL)**: Tích hợp `Webhooks` từ các đơn vị vận chuyển để tự động cập nhật trạng thái đơn hàng cho khách.

### 💾 Database (DB) - Availability & Search
- **Full-Text Search**: Tích hợp `Elasticsearch` hoặc `Algolia` để khách hàng tìm kiếm sản phẩm cực nhanh với gợi ý (Type-ahead).
- **Pessimistic Locking**: Sử dụng khi trừ hàng trong kho (`SELECT FOR UPDATE`) để tránh tình trạng bán vượt số lượng thực tế khi có hàng triệu người cùng mua 1 lúc.
- **Read Replicas**: Sử dụng các bản sao cơ sở dữ liệu để phục vụ truy vấn `GET` (xem sản phẩm), giảm tải cho DB chính.

### 🔄 Industry Workflow (PDCA)
- **Act Phase**: Dựa trên báo cáo hàng tồn (Inventory Report), hệ thống tự động đề xuất tạo các chương trình khuyến mãi (Discount) cho các mặt hàng bán chậm.
