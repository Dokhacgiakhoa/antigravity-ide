---
trigger: always_on
---

# QUALITY-ASSURANCE.MD - Zero-Bug Tolerance Standards

> **Mục tiêu**: Đảm bảo sản phẩm ra đời với chất lượng cao nhất thông qua quy trình kiểm thử nghiêm ngặt.

## 🧪 1. TESTING PYRAMID
1. **Unit Tests**: Phải bao phủ > 80% logic nghiệp vụ.
2. **Integration Tests**: Kiểm tra sự phối hợp giữa các module và database.
3. **E2E Tests**: Kiểm tra các luồng đi quan trọng (Critical Paths) từ góc nhìn người dùng.

## 📉 2. AUTOMATION & CI
1. **Regression Testing**: Mọi bug mới được phát hiện phải có một bản test đi kèm để tránh lặp lại.
2. **Performance Testing**: Kiểm tra ngưỡng chịu tải của hệ thống (Load test, Stress test).
3. **Visual Regression**: Kiểm tra sự thay đổi của giao diện qua các bản build.

## 📋 3. MANUAL REVIEW PROTOCOL
1. **Double-Check**: Task quan trọng phải được review bởi ít nhất 2 agent khác nhau.
2. **Edge Cases**: Luôn liệt kê và test các trường hợp biên, dữ liệu rác, mất kết nối mạng.
3. **Acceptance Criteria**: Chỉ hoàn thành task khi đạt 100% tiêu chí nghiệm thu (AC).
