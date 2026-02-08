---
description: Master API Design & Documentation following OpenAPI 3.1 standards.
---

## 🛠️ Quy trình Thiết kế và Tài liệu hóa API

Quy trình này giúp bạn xây dựng hệ thống API chuyên nghiệp, bảo mật và dễ tích hợp.

### 1. Phân tích & Đặc tả (Design)
- Sử dụng công cụ `api-patterns` và `api-documenter`.
- Khởi tạo file `swagger.yaml` hoặc `openapi.json` theo chuẩn 3.1.
- Định nghĩa các luồng: Authentication (JWT/OAuth2), Error Handling (Standard codes).

### 2. Triển khai Logic (Implementation)
- Worker: `backend-specialist`.
- Áp dụng `api-standards` từ kho DNA.
- Thực hiện Dependency Injection và Separation of Concerns.

### 3. Kiểm định & Bảo mật (Security Check)
- Auditor: `security-auditor`.
- Kiểm tra các lỗi phổ biến: SQL Injection, Broken Object Level Authorization (BOLA).
- Validate Input/Output theo schema.

### 4. Công bố (Documentation)
- Tự động sinh tài liệu chuyên nghiệp.
- Cập nhật phiên bản API trong `CHANGELOG.md`.

// turbo
`npx rapid-api-gen --init`
