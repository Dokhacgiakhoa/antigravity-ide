# 💡 API Best Practice Example

Ví dụ về cách định nghĩa một Endpoint chuẩn Enterprise.

### 1. Request Validation
- Sử dụng JSON Schema để kiểm tra dữ liệu đầu vào.
- Trả về mã lỗi `422 Unprocessable Entity` nếu dữ liệu sai định dạng.

### 2. Response Example
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid-v4",
    "email": "user@example.com",
    "created_at": "2026-01-29T08:58:00Z"
  }
}
```

### 3. Error Handling
- Trả về mã lỗi `401 Unauthorized` cho các endpoint yêu cầu Auth.
- Trả về mã lỗi `403 Forbidden` nếu người dùng không có quyền truy cập.
- Luôn trả về `error_code` để Frontend dễ xử lý.
