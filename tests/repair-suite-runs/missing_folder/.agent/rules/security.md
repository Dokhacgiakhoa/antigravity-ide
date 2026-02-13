---
trigger: always_on
---

# SECURITY.MD - Security Guardrails

> **Mục tiêu**: Bảo vệ hệ thống khỏi các lỗ hổng phổ biến và sai sót của con người.

---

## 🚫 1. FORBIDDEN ACTIONS (Cấm tuyệt đối)

1. **Hardcode Secrets**: 
   - Không bao giờ viết API Key, Password, Token trực tiếp vào code.
   - Luôn sử dụng `process.env` hoặc biến môi trường.
2. **Commit Token**: 
   - Kiểm tra file `.gitignore` trước khi commit.
   - Đảm bảo `.env` nằm trong `.gitignore`.
3. **Delete Database**: 
   - Không bao giờ chạy lệnh `DROP TABLE` hoặc xóa file `.sqlite` nếu không có lệnh rõ ràng từ người dùng và BA bước xác nhận.

---

## 🛡️ 2. CODING STANDARDS (Tiêu chuẩn Code An toàn)

1. **SQL Injection**:
   - Luôn sử dụng Parameterized Queries (hoặc ORM như Prisma/TypeORM).
   - Cấm nối chuỗi trực tiếp vào câu lệnh SQL.
2. **XSS (Cross-Site Scripting)**:
   - Sanitize mọi dữ liệu đầu vào từ người dùng hoặc API.
   - Sử dụng các thư viện như `dompurify` khi render HTML.
3. **Authentication**:
   - Luôn hash mật khẩu (Bcrypt/Argon2).

---

## 🚨 3. INCIDENT PROTOCOL (Quy trình sự cố)

Khi phát hiện lỗ hổng hoặc nghi ngờ lộ secret:
1. **DỪNG**: Ngừng mọi tác vụ hiện tại.
2. **BÁO CÁO**: Thông báo ngay cho người dùng bằng cảnh báo đ (RED ALERT).
3. **KHẮC PHỤC**: Đề xuất phương án xoay key (rotation) hoặc vá lỗi.
