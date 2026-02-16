# 🗑️ Hướng Dẫn Gỡ Cài Đặt (Uninstall Guide)

Tài liệu này hướng dẫn cách gỡ bỏ hoàn toàn **AntiGravity IDE** khỏi hệ thống của bạn, bao gồm cả các file cấu hình và bộ nhớ đệm (cache).

---

## 1. Gỡ bỏ Global Config
AntiGravity lưu trữ cấu hình chung (tên Agent, ngôn ngữ mặc định) tại thư mục Home của người dùng. Để xóa sạch:

### Windows (PowerShell)
```powershell
Remove-Item -Recurse -Force "$HOME\.antigravity"
```

### MacOS / Linux
```bash
rm -rf ~/.antigravity
```

---

## 2. Gỡ bỏ NPX Cache (Tùy chọn)
Nếu bạn không muốn `npx` lưu giữ bản copy của AntiGravity:

```bash
npm cache clean --force
```
*Lưu ý: Lệnh này sẽ xóa toàn bộ cache của npm, không chỉ riêng AntiGravity.*

Nếu bạn muốn xóa riêng gói này (nếu đã cài global):
```bash
npm uninstall -g antigravity-ide
```

---

## 3. Gỡ bỏ khỏi Dự án (Local Project)
Nếu bạn đã khởi tạo dự án và muốn "xóa bài làm lại từ đầu":

1. **Xóa thư mục `.agent`**:
   Đây là nơi chứa "não bộ", kỹ năng và quy tắc của Agent.
   ```bash
   rm -rf .agent
   ```

2. **Xóa các file cấu hình**:
   ```bash
   rm GEMINI.md README.md .gitignore .editorconfig .gitattributes package.json
   ```

---

## 4. Kiểm tra lại
Gõ lệnh sau để đảm bảo hệ thống không còn nhận diện AntiGravity:
```bash
antigravity --version
```
Nếu báo lỗi `command not found` hoặc tương tự, bạn đã gỡ bỏ thành công.
