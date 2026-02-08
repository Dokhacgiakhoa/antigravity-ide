# 🏗️ Modern Infrastructure Blueprint

Tiêu chuẩn hạ tầng cho ứng dụng hiện đại.

## 🐳 1. Dockerization
- Dùng `Multi-stage build` để giảm dung lượng file Image.
- Chạy app dưới quyền user `node` hoặc `non-root` để bảo mật.

## 🔄 2. CI/CD (GitHub Actions)
- `Lint & Test`: Tự động chạy khi có PR vào nhánh `develop`.
- `Build & Push`: Tự động tạo Docker image khi merge vào `release`.
- `Deploy`: Tự động cập nhật server (Blue/Green Deployment) khi merge vào `main`.

## 🌐 3. Nginx & Reverse Proxy
- Bật `Gzip/Brotli` compression.
- Cấu hình `Caching` cho asset tĩnh (images, js, css).
- Setup `Health Check` để tự động khởi động lại nếu app crash.
