---
trigger: glob
glob: "**/*.{tf,hcl,yaml,yml,json}"
---

# ARCHITECTURE-REVIEW.MD - Enterprise System Integrity

> **Mục tiêu**: Đảm bảo kiến trúc Microservices/Monolith Scale được thiết kế đúng chuẩn, chịu tải cao và High Availability (HA).

---

## 🏗️ 1. SCALABILITY & RESILIENCE

1. **Stateless**: Tuyệt đối không lưu Session state trên RAM của Server. Dùng Redis.
2. **Circuit Breaker**: Khi gọi 3rd Party API (Payment, SMS), bắt buộc phải có cơ chế ngắt mạch (Circuit Breaker) để không làm sập cả hệ thống khi đối tác chết.
3. **Rate Limiting**: API public phải có giới hạn request/giây để chống DDoS.

---

## ☁️ 2. INFRASTRUCTURE AS CODE (IaC)

1. **Immutable Infra**: Không bao giờ SSH vào server sửa config tay. Mọi thay đổi phải qua Terraform/Ansible code.
2. **Environment Parity**: Dev, Staging, Prod phải giống nhau 99% về cấu hình docker/env.

---

## 🔄 3. DISASTER RECOVERY (DR)

1. **RPO/RTO**:
   - Backup Database mỗi 1 giờ (SME) hoặc 15 phút (Enterprise).
   - Phải có kịch bản Restore tự động đã được diễn tập.
2. **Multi-Region**: (Tùy chọn) Cân nhắc backup dữ liệu sang Region khác (ví dụ: Singapore -> Tokyo).
