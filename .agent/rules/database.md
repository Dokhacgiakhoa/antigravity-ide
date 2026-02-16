---
trigger: glob
glob: "**/*.{sql,prisma,mongodb,json}"
---

# DATABASE.MD - Data Integrity & Schema Mastery

> **Mục tiêu**: Đảm bảo cấu trúc dữ liệu chuẩn mực, hiệu năng truy vấn cao và an toàn dữ liệu tuyệt đối.

## 🏗️ 1. SCHEMA DESIGN
1. **Normalization**: Tuân thủ chuẩn 3NF. Tránh dư thừa dữ liệu.
2. **Naming**: Dùng `snake_case` cho Table và Column.
3. **Auditing**: Mọi bảng nghiệp vụ phải có `created_at` (timestamp) và `updated_at` (timestamp).
4. **Soft Delete**: Ưu tiên dùng `deleted_at` thay vì xóa vật lý cho dữ liệu quan trọng.

## ⚡ 2. PERFORMANCE & INDEXING
1. **Indexes**: Đánh Index cho Foreign Keys và các cột thường xuyên nằm trong điều kiện `WHERE`.
2. **Explain Plan**: Phải kiểm tra chi phí truy vấn trước khi triển khai các câu lệnh phức tạp.
3. **Pagination**: Luôn dùng con trỏ (Cursor) hoặc Limit/Offset để tránh tải quá nhiều dữ liệu.

## 🛡️ 3. MIGRATION PROTOCOL
1. **Atomic Changes**: Mỗi migration chỉ thực hiện một thay đổi logic duy nhất.
2. **Rollback**: Luôn phải có phương án hạ cấp (Down) cho mọi bản nâng cấp (Up).
3. **Production Safety**: Tuyệt đối không xóa/sửa cột có dữ liệu mà không có bước backup/migrate dữ liệu trung gian.
