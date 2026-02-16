# 🔄 Hướng Dẫn Cập Nhật (Update Guide)

AntiGravity IDE có cơ chế cập nhật "kép" độc đáo. Bạn cần hiểu rõ để chọn phương pháp phù hợp.

---

## 1. Cập nhật Core (CLI & System Rules)
Đây là việc cập nhật bản thân công cụ `npx antigravity-ide`.

### Cách làm:
Chỉ cần chạy lệnh "vạn năng" trong thư mục dự án của bạn:
```bash
npx antigravity-ide
```
Hệ thống sẽ tự động khởi động **Repair & Update Mode**:
1.  **Check**: Kiểm tra tính toàn vẹn của dự án.
2.  **Update**: Cập nhật Engine và Rules mới nhất từ NPM.
3.  **Repair**: Khôi phục các file hệ thống bị hỏng hoặc mất.
4.  **Sync**: Đồng bộ DNA chuẩn v4.0.8 mới nhất.

### Kiểm tra phiên bản hiện tại:
```bash
npx antigravity-ide --version
```

---

## 2. Cập nhật Kỹ năng & Workflow (Self-Update)
Đây là cập nhật **nội dung bên trong** dự án của bạn (Skills, Prompts, Workflows) mà không thay đổi cấu trúc dự án.

### Sử dụng Workflow:
Trong quá trình chat với AI, bạn có thể ra lệnh:
```
/update
```
AI sẽ kiểm tra các thay đổi trong kho kiến thức trung tâm và đồng bộ về dự án của bạn.

### Sử dụng CLI:
```bash
npx antigravity-ide update
```
Lệnh này sẽ tải lại danh sách các `Global Skills` mới nhất về máy.

---

## 3. Chiến lược Cập nhật An toàn (Safe Update Strategy)

Khi cập nhật một dự án đang chạy (Production), hãy tuân thủ quy tắc:

1. **Backup**: Luôn commit code lên Git trước khi update.
2. **Review**: Khi chạy `init` lại, hệ thống sẽ hỏi `Overwrite?`.
   - Chọn **No** để tạo file `.new`.
   - Dùng công cụ Diff (như trong VS Code) để so sánh file cũ và file `.new`.
   - Thủ công copy những phần cải tiến mới vào file cũ.
3. **Test**: Chạy `/test` workflow sau khi cập nhật để đảm bảo không có gì bị hỏng.

---

## 4. Xử lý sự cố sau cập nhật
Nếu Agent hoạt động lạ sau khi update:
1. Xóa thư mục `.agent/skills` và chạy lại `init`.
2. Kiểm tra file `GEMINI.md` xem có bị mất các rule quan trọng không.
3. Tham khảo [TROUBLESHOOTING.vi.md](./TROUBLESHOOTING.vi.md).
