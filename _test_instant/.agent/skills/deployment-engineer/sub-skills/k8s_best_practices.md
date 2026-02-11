# 🛳️ Kubernetes Production Best Practices

Quy chuẩn triển khai K8s chuẩn công nghiệp.

### 1. Resource Limits
- Luôn định nghĩa `requests` và `limits` cho CPU và Memory.
- Tránh tình trạng "OOM Kill" (Out Of Memory) làm sập Pod.

### 2. Health Checks
- **Liveness Probe**: Kiểm tra Pod còn sống không (nếu chết thì Restart).
- **Readiness Probe**: Kiểm tra Pod đã sẵn sàng nhận Traffic chưa.

### 3. Graceful Shutdown
- Cấu hình `terminationGracePeriodSeconds` (mặc định 30s) để ứng dụng kịp đóng các kết nối DB/Socket trước khi tắt.

### 4. Config & Secrets
- Tuyệt đối không hardcode bí mật vào Docker Image.
- Sử dụng `ConfigMaps` cho cấu hình và `Secrets` cho các mã khóa.
