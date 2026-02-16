---
trigger: glob
glob: "**/*.{js,jsx,ts,tsx}"
---

# UX-PATTERNS.MD - User Experience & Flow Standards

> **Mục tiêu**: Tối ưu hóa hành trình người dùng, giảm thiểu ma sát (friction) và tăng cường sự hài lòng.

## ⚓ 1. NAVIGATION & LAYOUT
1. **Predictability**: Các thành phần điều hướng (Navbar, Sidebar) phải nằm ở vị trí người dùng mong đợi.
2. **Breadcrumbs**: Luôn cung cấp đường dẫn cho các trang sâu > 2 cấp.
3. **Responsiveness**: Tuân thủ Mobile-first, đảm bảo trải nghiệm trên mọi kích thước màn hình.

## ⚡ 2. INTERACTION & FEEDBACK
1. **Skeleton Screens**: Dùng Skeleton thay cho spinner xoay tròn để tạo cảm giác tốc độ.
2. **Optimistic UI**: Cập nhật trạng thái ngay lập tức trên UI và đồng bộ với server ngầm.
3. **Error Prevention**: Validate dữ liệu ngay khi người dùng nhập (Inline validation).

## 🧠 3. ACCESSIBILITY (A11Y)
1. **Keyboard**: Phải điều hướng được toàn bộ trang bằng phím Tab.
2. **Screen Readers**: Dùng Semantic HTML (`<header>`, `<main>`, `<footer>`, `aria-label`).
3. **Focus States**: Trạng thái Focus phải rõ ràng, không được ẩn đi.
