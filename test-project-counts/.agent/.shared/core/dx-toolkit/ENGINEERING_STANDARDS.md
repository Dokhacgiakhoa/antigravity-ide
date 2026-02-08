# 🛠️ Antigravity Engineering Standards (Vercel & Antfu Grade)
> **Ref**: Anthony Fu / Vercel Engineering / Zero-config patterns

Bộ tiêu chuẩn kỹ thuật nhằm tối ưu tốc độ phát triển (DX) và hiệu năng sản phẩm (Performance).

## 1. Kiến trúc Edge-First
- **Tư duy**: Logic nào có thể chạy ở gần người dùng nhất thì để ở đó (Edge Runtime).
- **Middleware**: Sử dụng Middleware để xử lý Auth, Redirect và Internationalization trước khi request chạm tới Server.
- **PPR (Partial Prerendering)**: Kết hợp Static Shell với Dynamic Holes để tối ưu hóa thời gian tải trang đầu tiên.

## 2. Composable Logic (Antfu Standards)
- **Functions over Classes**: Ưu tiên sử dụng function và hooks.
- **Side-effect Free**: Các hàm tiện ích (utils) nên là hàm thuần khiết (pure functions), dễ test với Vitest.
- **Zero-config**: Ưu tiên sử dụng các công cụ không cần cấu hình phức tạp (Vite, ESLint Flat Config).

## 3. Quản lý Monorepo (Turborepo)
- **Shared Packages**: Chia nhỏ hệ thống thành các gói: `ui`, `utils`, `config`, `database`.
- **Remote Caching**: Sử dụng cache để không phải build lại những phần chưa thay đổi.

## 4. Type-Safety chuẩn "Chìa khóa trao tay"
- **Runtime Validation**: Luôn validate dữ liệu từ API bằng Zod.
- **Branded Types**: Sử dụng kỹ thuật Branded Types để tránh nhầm lẫn giữa các ID khác nhau (User ID vs Project ID).

---
*Tiêu chuẩn này được áp dụng cho mọi quy trình phát triển từ cá nhân đến doanh nghiệp.*
