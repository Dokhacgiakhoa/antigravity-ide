# 📣 Marketing Automation & CRM Domain Blueprint

Tiêu chuẩn nghiệp vụ cho hệ thống quản lý Marketing, Email Automation và chăm sóc khách hàng.

## 1. 📧 Nhóm Chiến dịch & Tự động hóa (Campaigns & Automation)
- `POST /campaigns`: Tạo chiến dịch Email/SMS/Push.
- `GET /campaigns/:id/stats`: Thống kê tỷ lệ mở (Open rate), tỷ lệ click (CTR).
- `POST /automations/workflows`: Thiết kế luồng tự động (ví dụ: Gửi email sau 2h đăng ký).
- `POST /segments/create`: Phân loại khách hàng dựa trên hành vi (Tags, Age, Location).

## 2. 👥 Nhóm Quản lý Leads (Leads & Contacts)
- `POST /leads/import`: Nhập danh sách khách hàng từ Excel/CSV.
- `GET /leads/:id/timeline`: Xem lịch sử tương tác của khách hàng với brand.
- `POST /leads/score`: Chấm điểm tiềm năng (Lead scoring) của khách hàng.

## 🔗 3. Nhóm Tích hợp (Integrations)
- `POST /integrations/webhooks`: Tiếp nhận dữ liệu từ Landing Page/Web bên ngoài.
- `GET /integrations/social-ads`: Đồng bộ danh sách khách hàng với Facebook/Google Ads.

## 📊 4. Nhóm Báo cáo & Phân tích (Analytics)
- `GET /reports/conversion`: Báo cáo tỷ lệ chuyển đổi từ Lead sang Customer.
- `GET /reports/revenue-attribution`: Phân tích nguồn marketing nào mang lại doanh thu cao nhất.

---

### 🛡️ Business Rules (Kinh nghiệm thực chiến):
- **GDPR Compliance**: Tuân thủ các quy định về bảo mật dữ liệu và quyền riêng tư của khách hàng.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Interaction & Tracking
- **Email/Template Builder**: Tích hợp trình kéo thả (Drag & Drop) để người dùng tự thiết kế mẫu email marketing ngay trên giao diện web.
- **Tracking Pixels**: Cơ chế nhúng Small images (1x1 pixel) hoặc tracking links để đo lường hành vi người dùng (Open/Click).
- **Dashboards & Charts**: Sử dụng `Recharts` hoặc `Highcharts` để hiển thị biểu đồ phễu chuyển đổi (Funnel) và hiệu quả chiến dịch.

### ⚙️ Backend (BE) - Automation & Throughput
- **Job Queues (BullMQ / Celery)**: Xử lý việc gửi hàng triệu email/SMS theo hàng đợi, đảm bảo không làm nghẽn hệ thống chính.
- **Webhook Handler**: Tiếp nhận và xử lý hàng ngàn tín hiệu từ hệ thống gửi mail (SendGrid, Mailgun) về trạng thái thư (Delivered, Bounced, Opened).
- **Workflow Engine**: Xây dựng bộ máy xử lý logic tự động (If-This-Then-That) dựa trên hành vi khách hàng.

### 💾 Database (DB) - High Volume Data
- **Contact Segmentation**: Sử dụng `JSONB` hoặc `Key-Value store` để lưu trữ các thuộc tính linh hoạt của khách hàng (Tags/Attributes).
- **Event Logs**: Lưu trữ lịch sử tương tác khổng lồ, cần cân nhắc sử dụng `ClickHouse` hoặc `Elasticsearch` cho các báo cáo phân tích sâu.

### 🔄 Industry Workflow (PDCA)
- **Check Phase**: Tự động đánh giá hiệu quả A/B Testing và báo cáo phiên bản nào chiến thắng để Orchestrator quyết định chạy diện rộng.
