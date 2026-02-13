# 🛡️ Security Hardening Checklist (The Armor)

Bộ quy tắc bảo mật bắt buộc cho mọi ứng dụng. Agent Security phải dùng cái này để soi lỗi.

## 1. 🌐 Web Security
- **CORS Config**: Chỉ cho phép các domain được định danh. Không dùng `Access-Control-Allow-Origin: *`.
- **CSP Headers**: Thiết lập Content Security Policy để chặn XSS (Cross-Site Scripting).
- **Security Headers**: Bật `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`.

## 🔒 2. Data Protection
- **Encryption**: Lưu mật khẩu dùng `Argon2` hoặc `Bcrypt`. Tuyệt đối không dùng MD5/SHA1.
- **Environment Variables**: Không bao giờ hardcode API Keys/Secrets vào code.
- **Input Sanitization**: Dùng các thư viện như `DOMPurify` (Frontend) và `Zod/Joi` (Backend) để làm sạch dữ liệu.

## 🚀 3. Infrastructure Security
- **Rate Limiting**: Giới hạn số lượng yêu cầu theo IP để chống Brute-force/DDoS.
- **SSL/TLS**: Bắt buộc dùng HTTPS (`HSTS` enabled).
- **SQL Injection**: Luôn dùng `Parameterized Queries` hoặc ORM. Tuyệt đối không ghép chuỗi SQL.
