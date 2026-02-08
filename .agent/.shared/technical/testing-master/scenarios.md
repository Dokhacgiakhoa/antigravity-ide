# 🧪 Master Test Scenarios

Danh mục các kịch bản kiểm thử quan trọng nhất (High-Priority Test Cases).

## 🔐 1. Authentication & Session
- [ ] Đăng nhập thành công với thông tin đúng.
- [ ] Đăng nhập thất bại (Sai mật khẩu, Email không tồn tại).
- [ ] Quên mật khẩu & Gửi mail khôi phục.
- [ ] Token hết hạn: Hệ thống phải yêu cầu re-login hoặc refresh token.

## 💳 2. Payment & Checkout (Stripe/Paypal)
- [ ] Thanh toán thành công (Happy Path).
- [ ] Thanh toán thất bại (Thẻ hết tiền, Thẻ bị từ chối).
- [ ] Xử lý ngắt kết nối giữa chừng (Webhooks verification).
- [ ] Tính toán thuế và phí ship vào tổng đơn hàng.

## 📁 3. Optimization & Edge Cases
- [ ] Upload file cực lớn (Kiểm tra Limit & Timeout).
- [ ] Concurrency: 2 người cùng cập nhật 1 bản ghi cùng lúc.
- [ ] Mobile Responsiveness: Kiểm tra giao diện trên màn hình 320px.
