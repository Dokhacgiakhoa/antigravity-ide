---
description: Realtime communication integration with Socket.io, WebRTC, or SSE.
---

## ⚡ Quy trình Tác chiến Thời gian thực

Sử dụng workflow này khi cần xây dựng Chat, Thông báo đẩy, hoặc Bảng điều khiển Realtime.

### 1. Phân tích Kiến trúc (Architecture)
- Lựa chọn Protocol: WebSockets (Lưu lượng cao), SSE (Thông báo 1 chiều), WebRTC (P2P).
- Thiết kế hệ thống Pub/Sub (Redis/BullMQ).

### 2. Triển khai Server-side
- Cấu hình Heartbeat và Reconnection logic.
- Xử lý xác thực người dùng trên kênh truyền.

### 3. Đồng bộ Frontend
- Sử dụng React Hooks hoặc state management để cập nhật UI mượt mà.
- Xử lý trường hợp mất kết nối (Offline support).

### 4. Stress Test
- Kiểm tra giới hạn số lượng kết nối đồng thời.

// turbo
`npm install socket.io-client`
