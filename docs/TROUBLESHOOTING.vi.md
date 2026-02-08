# Hướng Dẫn Khắc Phục Lỗi (Troubleshooting)

Tổng hợp các vấn đề thường gặp khi sử dụng Antigravity IDE và cách xử lý.

## 🛠️ Lỗi Cài Đặt

### `command not found: antigravity`
-   **Nguyên nhân**: Chưa cài global hoặc lỗi đường dẫn PATH.
-   **Cách sửa**:
    -   Chạy lại `npm install -g antigravity-ide`
    -   Hoặc dùng trực tiếp `npx antigravity-ide` (không cần cài).

### `EACCES: permission denied`
-   **Nguyên nhân**: Không đủ quyền ghi file hệ thống.
-   **Cách sửa**:
    -   Mac/Linux: Thêm `sudo` trước lệnh.
    -   Windows: Chạy CMD/PowerShell dưới quyền Admin.

### `Python not found` (Khi chọn Creative/SME Scale)
-   **Nguyên nhân**: Bạn chọn quy mô dự án có dùng AI nâng cao nhưng máy chưa cài Python hoặc chưa đưa vào PATH.
-   **Cách sửa**: Cài đặt Python 3.10+ từ `python.org` và tích chọn **"Add Python to PATH"**.

### File "GEMINI.md" already exists (Lỗi dừng khi khởi tạo)
-   **Nguyên nhân**: Đây không phải lỗi, đây là tính năng bảo vệ dữ liệu.
-   **Cách sửa**: Nhập `y` để ghi đè, hoặc `n` để hệ thống tạo file `.new`. Nếu muốn bỏ qua hoàn toàn, dùng cờ `--force`.

## 🤖 Lỗi AI & Runtime

### "Agent is not responding" (Agent im lặng)
-   **Kiểm tra**: File `.env` đã có API Key chưa?
-   **Cách sửa**:
    -   Xem lại `GEMINI_API_KEY`.
    -   Check mạng internet.

### "Token limit exceeded" (Hết token)
-   **Nguyên nhân**: Cuộc hội thoại quá dài, tràn bộ nhớ context.
-   **Cách sửa**:
    -   Tắt chat đi mở lại hội thoại mới.
    -   Dùng model xịn hơn (Gemini 1.5 Pro) nếu có thể.

## 📦 Lỗi Thư Viện (Dependencies)

### `npm ERR! legacy-peer-deps`
-   **Nguyên nhân**: Xung đột phiên bản (thường gặp với React cũ/mới).
-   **Cách sửa**:
    -   Thêm cờ: `npm install --legacy-peer-deps`

---

## 🆘 Vẫn không sửa được?
Hãy tạo Issue trên [GitHub](https://github.com/Dokhacgiakhoa/antigravity-ide/issues) để team hỗ trợ nhé!

## 🐛 Known Bugs (Các lỗi đã biết)

### `ReferenceError: commonRules is not defined`
-   **Nguyên nhân**: Máy bạn đang cài sẵn phiên bản cũ (v3.5.54 hoặc cũ hơn) ở chế độ Global, gây xung đột với lệnh `npx`.
-   **Cách sửa triệt để**: Gỡ bỏ bản Global cũ để npx tải bản mới nhất.
    ```bash
    npm uninstall -g antigravity-ide
    npx antigravity-ide
    ```
