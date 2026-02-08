# 📦 Hướng Dẫn Cài Đặt Node.js & Sử Dụng NPX

> **Easy Vibe, Lazy Code. One Command to Rule Them All.** 🛰️🚀

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

## 3. Khởi độnɡ AntiGravity IDE (Lệnh Vạn Năng)
Bạn chỉ cần một lệnh duy nhất để xử lý mọi tình huốnɡ (Tạo mới, Cập nhật, Sửa lỗi, Đồng bộ):

```bash
npx antigravity-ide [tên_dự_án]
```
- **Nếu thư mục chưa có gì**: Hệ thống sẽ tạo mới (Create).
- **Nếu đã là dự án Antigravity IDE**: Hệ thống sẽ tự động kiểm tra, sửa lỗi (Repair), cập nhật Rules mới nhất (Update) và đồng bộ DNA (Fix).

---

## 4. Tra cứu nhanh CLI (Quick Reference)

| Tình huống | Lệnh (Command) | Ý nghĩa |
| :--- | :--- | :--- |
| **Cài lần đầu** | `npx antigravity-ide .` | Khởi tạo vào thư mục hiện tại. |
| **Sửa lỗi/Update** | `npx antigravity-ide` | Tự động rà soát và vá lỗi (Repair & Update). |
| **Đè lại toàn bộ** | `npx antigravity-ide --force` | Cưỡng bức khôi phục các Rule về bản gốc. |
| **Check bản IDE** | `npx antigravity-ide --version` | Kiểm tra phiên bản Engine. |

### Tham số phổ biến:
- **`-s, --skip-prompts`**: Khởi tạo thần tốc bằng các giá trị mặc định.
- **`-t, --template <type>`**: Chọn mẫu project (`minimal`, `standard`, `full`).
- **`-f, --force`**: Cưỡng bức ghi đè khi sửa lỗi dự án cũ.

---

## 5. Xử lý Trùng lặp File (Conflict Resolution)
Nếu bạn cài đặt vào một thư mục đã có sẵn các file cấu hình (như `GEMINI.md`, `package.json`), hệ thống sẽ hỏi bạn cách xử lý để bảo vệ dữ liệu cũ.

### 🛡️ Cơ chế Tương tác (Mặc định)
Hệ thống sẽ dừng lại và hỏi bạn từng file:
```bash
⚠️  File "GEMINI.md" already exists. Overwrite? / File đã tồn tại. Ghi đè? [y/N]
```
- **Yes (y)**: Ghi đè file cũ bằng file mới nhất.
- **No (n)**: Tạo file backup an toàn (ví dụ: `GEMINI.new.md`) và giữ nguyên file cũ.

### 🔥 Ghi đè Cưỡng bức (Force Overwrite)
Nếu bạn muốn reset dự án và chấp nhận mất cấu hình cũ, hãy dùng cờ `--force`:
```bash
npx antigravity-ide . --force
```
> **Tác dụng**: Bỏ qua tất cả câu hỏi và ghi đè toàn bộ file trùng lặp để đưa dự án về trạng thái chuẩn nhất.

---

## 🛠️ Các lỗi thường gặp (Troubleshooting)

### 1. `command not found: npx`
- **Nguyên nhân**: Node.js chưa được cài đặt hoặc chưa được thêm vào biến môi trường (PATH).
- **Cách sửa**: Khởi động lại máy tính sau khi cài Node.js. Nếu vẫn không được, hãy cài lại Node.js và tích hợp tùy chọn "Add to PATH".

### 2. Lỗi quyền truy cập (`EACCES` hoặc `Permission Denied`)
- **Windows**: Hãy chạy Terminal dưới quyền **Administrator**.
- **Mac/Linux**: Bạn có thể cần thêm `sudo` trước lệnh: `sudo npx antigravity-ide`.

### 3. Phiên bản Node.js quá cũ
- **Yêu cầu**: AntiGravity IDE hoạt động tốt nhất trên Node.js **v18** trở lên.

---

## 💡 Luôn luôn cập nhật?
Bạn không cần gõ `@latest` nữa. Mỗi khi bạn chạy `npx antigravity-ide`, hệ thống sẽ tự động kiểm tra và nâng cấp lên phiên bản mới nhất từ NPM để đảm bảo bạn luôn có những Kỹ năng và Agent hiện đại nhất.
