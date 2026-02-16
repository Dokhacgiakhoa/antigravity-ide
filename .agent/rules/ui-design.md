---
trigger: glob
glob: "**/*.{css,scss,less,styled.ts,tailwind.config.js}"
---

# UI-DESIGN.MD - Visual Excellence & Aesthetics

> **Mục tiêu**: Kiến tạo giao diện đẳng cấp, giàu tính nghệ thuật và đồng nhất về ngôn ngữ thiết kế.

## 🎨 1. TYPOGRAPHY & SPACING
1. **Scale**: Dùng hệ thống lưới 4px hoặc 8px cho mọi khoảng cách (Margin/Padding).
2. **Hierarchy**: Định nghĩa rõ ràng H1-H6, Body, Label với trọng số (Weight) và kích thước (Line-height) chuẩn.
3. **Font**: Ưu tiên các Variable Fonts cho web hiện đại để tối ưu hiệu suất.

## 🌈 2. COLOR SYSTEM
1. **Semantic Colors**: `primary`, `secondary`, `success`, `error`, `warning` phải có độ tương phản (WCAG) tốt.
2. **Dark Mode**: Mọi giao diện đều phải hỗ trợ Dark Mode một cách tự nhiên (không chỉ đảo ngược màu).
3. **Glassmorphism**: Dùng hiệu ứng mờ (Blur) và độ trong suốt (Opacity) một cách tinh tế.

## ✨ 3. MICRO-ANIMATIONS
1. **Transitions**: Mọi trạng thái Hover, Focus đều phải có hiệu ứng mượt mà (Ease-in-out).
2. **Lottie/SVG**: Dùng các hiệu ứng vector cho các loading hoặc icon tương tác.
3. **Performance**: Không dùng animation gây giật (jank), ưu tiên dùng `transform` và `opacity`.
