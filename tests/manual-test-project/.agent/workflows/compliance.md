---
description: Legal & Data Privacy Compliance (GDPR, HIPAA, SOC2).
---

## ⚖️ Quy trình Kiểm soát Pháp lý & Tuân thủ

Đảm bảo dự án của bạn đáp ứng các tiêu chuẩn an toàn dữ liệu toàn cầu.

### 1. Rà soát Dữ liệu (Inventory)
- Xác định các loại dữ liệu cá nhân (PII) đang thu thập.
- Kiểm tra mục đích sử dụng dữ liệu.

### 2. Áp dụng DNA Compliance
- Triển khai `Privacy Policy` và `Terms of Service` từ thư mục `.shared/compliance`.
- Cấu hình Cookie Consent và Data Deletion mechanisms.

### 3. Kiểm kê Bảo mật
- Auditor: `security-auditor`.
- Kiểm tra mã hóa dữ liệu (At rest & In transit).

### 4. Báo cáo Tuân thủ
- Xuất file `COMPLIANCE_REPORT.md` để bàn giao cho khách hàng/đối tác.

// turbo
`npx compliance-scanner .`
