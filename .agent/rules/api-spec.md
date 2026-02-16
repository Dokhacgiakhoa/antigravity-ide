---
trigger: glob
glob: "**/*.{yaml,yml,json,proto}"
---

# API-SPEC.MD - Contract & Interface Standards

> **Mục tiêu**: Đảm bảo hợp đồng dữ liệu giữa các hệ thống (Frontend-Backend, Microservices) luôn nhất quán và minh bạch.

## 📜 1. SPECIFICATION (OPENAPI/SWAGGER)
1. **Source of Truth**: File Spec là nguồn chân lý duy nhất. Code phải tuân thủ Spec hoặc Spec được sinh ra từ code một cách tự động.
2. **Versioning**: Luôn có version trong URL (ví dụ: `/api/v1/...`). Không bao giờ tạo breaking changes ở version hiện tại.
3. **Documentation**: Mọi Endpoint phải có mô tả rõ ràng về Params, Request Body và Response Schema.

## 🛠️ 2. DESIGN BEST PRACTICES
1. **Naming**: Dùng `kebab-case` cho URL. Dùng danh từ số nhiều (ví dụ: `/orders`).
2. **Methods**: Dùng đúng ý nghĩa của HTTP Verbs (GET, POST, PUT, PATCH, DELETE).
3. **Status Codes**: 
   - 200/201: Success.
   - 400: Bad Request (Client error).
   - 401/403: Auth error.
   - 404: Not Found.
   - 500: Server error.

## 🛡️ 3. SECURITY & VALIDATION
1. **Input Sanitization**: Mọi dữ liệu đầu vào phải được validate schema trước khi xử lý.
2. **Rate Limiting**: Giới hạn số lượng request để tránh brute-force và DDoS.
3. **CORS**: Cấu hình chính xác Origin, không dùng `*` ở Production.
