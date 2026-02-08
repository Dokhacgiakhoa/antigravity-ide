# 🏥 Healthcare & MedTech Domain Blueprint

Tiêu chuẩn nghiệp vụ cho hệ thống Quản lý Bệnh viện (HIS), Phòng khám (Clinic), và Ứng dụng Sức khỏe cá nhân. Bảo mật dữ liệu y tế (HIPAA standard) là tiên quyết.

## 1. 📂 Nhóm Hồ sơ Bệnh án & Bệnh nhân (EMR/EHR)
- `POST /patients`: Đăng ký thông tin bệnh nhân (kèm tiền sử bệnh lý).
- `GET /patients/:id/records`: Truy vấn hồ sơ bệnh án điện tử (Medical History).
- `POST /records/:id/prescriptions`: Kê đơn thuốc điện tử (e-Prescription).
- `GET /records/:id/lab-results`: Trả kết quả xét nghiệm/hình ảnh (DICOM support).

## 2. 📅 Nhóm Đặt lịch & Khám bệnh (Appointments & Consultation)
- `GET /doctors/availability`: Lịch trống của bác sĩ theo chuyên khoa.
- `POST /appointments/book`: Đặt lịch khám (Online/Offline).
- `POST /telemedicine/session`: Khởi tạo phòng khám từ xa (Video call integration).
- `PATCH /appointments/:id/vitals`: Cập nhật chỉ số sinh tồn (Huyết áp, nhịp tim, nhiệt độ).

## 💊 3. Nhóm Dược phẩm & Vật tư (Pharmacy & Inventory)
- `GET /pharmacy/inventory`: Kiểm kê thuốc và biệt dược.
- `POST /pharmacy/dispense`: Xuất thuốc theo đơn đã kê.
- `GET /pharmacy/drug-interactions`: API kiểm tra tương tác thuốc (Cảnh báo sốc thuốc).

## 🏦 4. Nhóm Bảo hiểm & Thanh toán (Insurance & Billing)
- `POST /insurance/verify`: Kiểm tra thông tin bảo hiểm y tế (BHYT/BH tư nhân).
- `POST /billing/generate`: Xuất hóa đơn viện phí.
- `PATCH /billing/claim`: Gửi yêu cầu bồi thường bảo hiểm.

---

### 🛡️ Business Rules (Kinh nghiệp thực chiến):
- **Data Privacy (HIPAA/GDPR)**: Dữ liệu y tế phải được mã hóa ở mức đĩa (Encryption at rest). Chỉ người có thẩm quyền (Bác sĩ điều trị) mới được xem bệnh án.
- **Audit Logging (Strict)**: Mọi lượt xem (view) hồ sơ bệnh nhân đều phải được lưu log (Ai xem, xem lúc nào).
- **Critical Alerts**: Hệ thống phải có cơ chế cảnh báo (Alert) ngay lập tức nếu các chỉ số sinh tồn của bệnh nhân vượt ngưỡng nguy hiểm.

---

## 🛠️ Technical Implementation Strategy (Senior Experience)

### 🎨 Frontend (FE) - Accessibility & Precision
- **Clinical Dashboards**: Thiết kế tập trung vào sự tối giản và tương phản cao để y bác sĩ không bị nhầm lẫn dữ liệu.
- **DICOM Imaging**: Tích hợp thư viện `Cornerstone.js` để hiển thị ảnh chụp X-quang/MRI ngay trên trình duyệt với các công cụ zoom/đo đạc chuyên nghiệp.
- **Accessibility (WCAG 2.1)**: Đảm bảo app tuân thủ các quy tắc cho người khiếm thị/khiếm thính (Voice commands support).

### ⚙️ Backend (BE) - Security & Standards
- **Interoperability**: Triển khai API theo chuẩn `FHIR` (Fast Healthcare Interoperability Resources) để có thể trao đổi dữ liệu với các bệnh viện khác.
- **HIPAA Compliance Logic**: Hệ thống tự động mã hóa dữ liệu nhạy cảm (PII) trước khi đưa vào Database và giải mã khi cần thiết.
- **Real-time Monitoring**: Tích hợp `MQTT` hoặc `Socket.io` để nhận tín hiệu từ các thiết bị đo loãng xương/nhịp tim và đưa ra cảnh báo tức thì.

### 💾 Database (DB) - Security & Scale
- **Column-Level Encryption**: Mã hóa từng cột dữ liệu chứa thông tin cá nhân của bệnh nhân (Họ tên, SĐT, Tiền sử bệnh).
- **Time-Series for Vitals**: Sử dụng `TimescaleDB` hoặc `InfluxDB` để lưu trữ dữ liệu sinh tồn (nhịp tim, huyết áp) theo giây một cách tối ưu.
- **Access Audit Logs**: Một bảng Log "không thể xóa" lưu lại tất cả hành vi truy cập bệnh án.

### 🔄 Industry Workflow (PDCA)
- **Check Phase**: Tổng thanh tra phải thực hiện Pen-test (Kiểm tra xâm nhập) định kỳ cho các lỗ hổng rò rỉ dữ liệu y tế.
