# Hướng Dẫn Đóng Góp (Contributing)

Cảm ơn bạn đã quan tâm đến dự án AntiGravity IDE! Chúng tôi luôn chào đón mọi sự đóng góp từ cộng đồng để cùng xây dựng một hệ sinh thái mã nguồn mở vững mạnh. 

> [!NOTE]
> Khi đóng góp, vui lòng tôn trọng bản quyền và các nguồn tham khảo (References) chính của dự án.

## 🤝 Quy Tắc Ứng Xử
Khi tham gia dự án, vui lòng giữ thái độ tôn trọng, lịch sự và chuyên nghiệp.

## 🚀 Cách Thức Đóng Góp

### 1. Báo Lỗi (Bug Report)
-   Kiểm tra [Hướng Dẫn Khắc Phục Lỗi](./TROUBLESHOOTING.vi.md) xem lỗi đã biết chưa.
-   Tạo Issue mới với tiêu đề rõ ràng.
-   Mô tả các bước để tái hiện lỗi (Reproduce steps).

### 2. Đề Xuất Tính Năng
-   Tạo Issue gắn tag `enhancement`.
-   Giải thích *tại sao* tính năng này lại hữu ích cho cộng đồng.

### 3. Gửi Code (Pull Request)
-   **Fork** dự án và tạo branch từ nhánh `develop`.
-   **Tên Branch**: `feat/ten-tinh-nang` hoặc `fix/ten-loi`.
-   **Commit Message**: Tuân thủ chuẩn [Conventional Commits](https://www.conventionalcommits.org/).
    -   `feat: them workflow moi`
    -   `fix: sua loi cai dat npm`
    -   `docs: cap nhat tai lieu`
-   **Kiểm thử**: Đảm bảo chạy `npm test` thành công.
-   **Lint Code**: Chạy `npm run lint` để code sạch đẹp.

### 4. Quy trình đăng ký Skill/Workflow mới
Để một Skill hoặc Workflow mới xuất hiện trong Setup Wizard, bạn cần:
1.  **Skill**: Thêm định dạng vào `cli/logic/skill-definitions.js`.
2.  **Workflow**: Thêm tên vào `cli/logic/workflow-manager.js`.
3.  **Lựa chọn (Scale)**: Cấu hình quy mô xuất hiện (Instant/SME/Creative) trong `cli/logic/manifest-manager.js`.

## 🛠️ Cài Đặt Môi Trường Dev

1.  Clone fork của bạn:
    ```bash
    git clone https://github.com/your-username/antigravity-ide.git
    cd antigravity-ide
    ```
2.  Cài đặt thư viện:
    ```bash
    npm install
    ```
3.  Link để test lệnh CLI:
    ```bash
    npm link
    ```

## 📜 Bản Quyền
Mọi đóng góp của bạn sẽ tuân theo giấy phép MIT License của dự án.
