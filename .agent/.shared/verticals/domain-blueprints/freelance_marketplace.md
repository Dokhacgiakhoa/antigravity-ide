# 💼 Freelance Marketplace Domain Blueprint

Tiêu chuẩn nghiệp vụ cho sàn giao dịch việc làm, dịch vụ tự do (giống Upwork, Fiverr).

## 1. 🛠️ Nhóm Công việc & Dự án (Jobs & Projects)
- `POST /jobs`: Khách hàng (Client) đăng tin tuyển dụng.
- `GET /jobs/search`: Freelancer tìm kiếm công việc (Filter theo skill, budget).
- `POST /proposals/submit`: Freelancer gửi báo giá/đề xuất thực hiện.
- `PATCH /proposals/:id/status`: Client chấp nhận/từ chối báo giá.

## 2. 🤝 Nhóm Hợp đồng & Cột mốc (Contracts & Milestones)
- `POST /contracts/create`: Khởi tạo hợp đồng sau khi chọn được Freelancer.
- `POST /milestones/create`: Chia dự án thành các giai đoạn thanh toán.
- `PATCH /milestones/:id/approve`: Client xác nhận hoàn thành giai đoạn.
- `POST /disputes/open`: Mở tranh chấp khi có mâu thuẫn giữa 2 bên.

## 3. 👤 Nhóm Hồ sơ năng lực (Profiles & Portfolio)
- `PATCH /profiles/freelancer`: Cập nhật kỹ năng, kinh nghiệm, giá theo giờ.
- `POST /portfolios/add`: Đăng tải các dự án đã thực hiện mẫu.
- `GET /profiles/:id/reviews`: Xem đánh giá và feedback từ các client cũ.

## 💳 4. Nhóm Thanh toán & Ký quỹ (Payments & Escrow)
- `POST /escrow/deposit`: Client nạp tiền vào hệ thống giữ hộ (Escrow).
- `POST /escrow/release`: Chuyển tiền từ kho giữ hộ cho Freelancer.
- `GET /earnings/payout`: Rút tiền về ngân hàng của Freelancer.

---

### 🛡️ Business Rules (Kinh nghiệm thực chiến):
- **Privacy**: Thông tin liên hệ (Email, Phone) phải được ẩn cho đến khi hợp đồng được ký.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Collaborative Interface
- **Real-time Chat**: Tích hợp cửa sổ chat giữa Client và Freelancer với tính năng gửi file và thông báo đẩy (Push notifications).
- **Rich-text Proposal**: Trình soạn thảo báo giá hỗ trợ Markdown hoặc WYSIWYG để Freelancer trình bày portfolio chuyên nghiệp.
- **Timer & Desktop App**: (Tùy chọn) Ứng dụng theo dõi giờ làm việc (Time tracker) bằng cách chụp màn hình định kỳ.

### ⚙️ Backend (BE) - Security & Escrow
- **Escrow Logic**: Xây dựng luồng tiền tạm giữ (Escrow) cực kỳ an toàn, chỉ được giải ngân (Release) khi cả 2 bên xác nhận hoặc qua tranh chấp (Dispute Resolution).
- **Payment Split**: Tự động chia tiền (Split payment) giữa Freelancer và phí hoa hồng của sàn ngay sau khi hợp đồng hoàn tất.
- **Background Checks**: Tích hợp API định danh hoặc liên kết tài khoản LinkedIn để xác thực uy tín người dùng.

### 💾 Database (DB) - Relationships & History
- **Milestone Tracking**: Thiết kế schema hỗ trợ nhiều stages trong 1 hợp đồng, mỗi stage có trạng thái thanh toán riêng.
- **Review System**: Hệ thống đánh giá 2 chiều (Client đánh giá Freelancer và ngược lại) để đảm bảo tính khách quan.

### 🔄 Industry Workflow (PDCA)
- **Act Phase**: Dựa trên dữ liệu tranh chấp (Dispute data), hệ thống tự động điều chỉnh bộ lọc để cảnh báo các Client/Freelancer có xu hướng gian lận.
