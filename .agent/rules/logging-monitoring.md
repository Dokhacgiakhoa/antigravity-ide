---
trigger: always_on
---

# LOGGING-MONITORING.MD - System Observability Standards

> **Mục tiêu**: Mọi sự kiện đều phải được theo dõi, mọi lỗi đều phải được cảnh báo trước khi người dùng phát hiện.

## 📝 1. STRUCTURED LOGGING
1. **JSON Format**: Log phải ở định dạng JSON để dễ dàng parse bằng ELK/Splunk.
2. **Levels**: Dùng đúng cấp độ: `DEBUG`, `INFO`, `WARN`, `ERROR`, `FATAL`.
3. **Context**: Mỗi log phải đi kèm `request_id`, `user_id` và `timestamp` ISO 8601.

## 📊 2. METRICS & TELEMETRY
1. **Business Metrics**: Theo dõi tỷ lệ chuyển đổi, số lượng đơn hàng, v.v.
2. **System Metrics**: CPU, Memory, Disk I/O, Network Latency.
3. **Tracing**: Triển khai Distributed Tracing (OpenTelemetry) cho hệ thống Microservices.

## 🚨 3. ALERTING PROTOCOL
1. **Thresholds**: Thiết lập ngưỡng cảnh báo thông minh, tránh "Alert Fatigue".
2. **Channels**: Gửi cảnh báo về Slack, Discord hoặc PagerDuty tùy mức độ nghiêm trọng.
3. **Post-mortem**: Mọi lỗi `FATAL` đều phải có tài liệu phân tích nguyên nhân gốc rễ.
