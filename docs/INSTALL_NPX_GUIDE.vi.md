# 📦 Hướng Dẫn Cài Đặt Node.js & Sử Dụng NPX

Lệnh `npx` là cách nhanh nhất và an toàn nhất để trải nghiệm **AntiGravity IDE** mà không cần cài đặt cố định vào máy. Tài liệu này sẽ hướng dẫn bạn thiết lập môi trường từ con số 0.

---

## 1. NPX là gì?
`npx` (Node Package Runner) là một công cụ đi kèm với **npm** (v5.2.0+). Nó cho phép bạn:
- Chạy các gói (packages) mà không cần cài đặt global (`-g`).
- Đảm bảo bạn luôn sử dụng phiên bản mới nhất.
- Tránh xung đột giữa các phiên bản phần mềm cũ và mới.

---

## 2. Các bước cài đặt (Từng bước)

### Bước 1: Tải và cài đặt Node.js
Để có `npx`, bạn cần cài đặt **Node.js** (bao gồm npm).
1. Truy cập trang chủ: [nodejs.org](https://nodejs.org/)
2. Chọn phiên bản **LTS** (Recommended For Most Users) - Đây là bản ổn định nhất.
3. Chạy file cài đặt (`.msi` trên Windows, `.pkg` trên Mac) và bấm **Next** cho đến khi hoàn tất.

### Bước 2: Kiểm tra cài đặt
Mở Terminal (Command Prompt hoặc PowerShell trên Windows) và gõ:
```bash
node -v
npm -v
npx -v
```
> [!TIP]
> Nếu các lệnh trên trả về số phiên bản (ví dụ: `v20.x.x`), nghĩa là bạn đã cài đặt thành công!

### Bước 3: Cài đặt Python (Tùy chọn - Cho AI/Data)
Nếu bạn dự định sử dụng các tính năng cao cấp (Advanced AI, Data Science, Security Scanner), bạn nên cài đặt thêm **Python**.
1. Truy cập: [python.org](https://www.python.org/downloads/)
2. Tải bản mới nhất và cài đặt.
3. **Quan trọng**: Tích chọn "Add Python to PATH" trong khi cài đặt.

---

## 3. Khởi động AntiGravity IDE
Sau khi đã có `npx`, bạn chỉ cần chạy lệnh sau để bắt đầu "Vibe Coding":

```bash
# Tạo dự án mới trong thư mục 'my-vibe-app'
npx antigravity-ide@latest my-vibe-app
```

Nếu bạn muốn cài đặt ngay vào thư mục hiện tại:
```bash
npx antigravity-ide@latest
```

---

## 4. Tra cứu nhanh CLI (Quick Reference)

| Lệnh (Command) | Ý nghĩa | Tùy chọn (Options) |
| :--- | :--- | :--- |
| `npx antigravity-ide init` | Khởi tạo Agent vào dự án có sẵn. | `-v` (Verbose) |
| `npx antigravity-ide [name]` | Tạo dự án mới hoàn toàn. | `-t` (Template), `-s` (Skip Prompts) |
| `npx antigravity-ide update` | Cài đặt bản IDE mới nhất. | N/A |
| `--version` / `-V` | Kiểm tra phiên bản hiện tại. | N/A |
| `--help` / `-h` | Xem hướng dẫn sử dụng lệnh. | N/A |

### Tham số phổ biến:
- **`-s, --skip-prompts`**: Khởi tạo thần tốc bằng các giá trị mặc định.
- **`-t, --template <type>`**: Chọn mẫu project (`minimal`, `standard`, `full`).

---

## 5. Khởi tạo nhanh (Bỏ qua câu hỏi)
Nếu bạn là người dùng chuyên nghiệp hoặc muốn dùng trong script tự động, bạn có thể bỏ qua các bước trả lời câu hỏi của Setup Wizard bằng tùy chọn:

- **`--skip-prompts`** (hoặc **`-s`**)

```bash
# Khởi tạo dự án nhanh với cấu hình mặc định (Creative Scale)
npx antigravity-ide@latest my-quick-project --skip-prompts
```

> [!NOTE]
> Khi dùng tùy chọn này, hệ thống sẽ tự động chọn:
> - Ngôn ngữ: **English**
> - Quy mô: **Creative** (Full AI & Data features)
> - Loại sản phẩm: **User Application**
> - Tên Agent: **Agent**

---

## 🛠️ Các lỗi thường gặp (Troubleshooting)

### 1. `command not found: npx`
- **Nguyên nhân**: Node.js chưa được cài đặt hoặc chưa được thêm vào biến môi trường (PATH).
- **Cách sửa**: Khởi động lại máy tính sau khi cài Node.js. Nếu vẫn không được, hãy cài lại Node.js và tích hợp tùy chọn "Add to PATH".

### 2. Lỗi quyền truy cập (`EACCES` hoặc `Permission Denied`)
- **Windows**: Hãy chạy Terminal dưới quyền **Administrator**.
- **Mac/Linux**: Bạn có thể cần thêm `sudo` trước lệnh: `sudo npx antigravity-ide@latest`.

### 3. Phiên bản Node.js quá cũ
- **Yêu cầu**: AntiGravity IDE hoạt động tốt nhất trên Node.js **v18** trở lên.
- **Cách sửa**: Tải bản LTS mới nhất từ trang chủ Node.js để ghi đè bản cũ.

---

## 💡 Tại sao luôn nên dùng `@latest`?
Khi bạn chạy `npx antigravity-ide@latest`, hệ thống sẽ:
1. Kiểm tra phiên bản mới nhất trên máy chủ npm.
2. Tải về những cải tiến, Agent mới và Rule mới nhất.
3. Xóa bộ nhớ đệm (cache) cũ để tránh lỗi "version mismatch".

> [!IMPORTANT]
> **Khuyến nghị**: Luôn ưu tiên dùng `npx` thay vì `npm install -g` để giữ cho hệ thống của bạn luôn sạch sẽ và cập nhật.
