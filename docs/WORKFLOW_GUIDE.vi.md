# 📘 Hướng Dẫn Sử Dụng Hệ Thống Workflow (Quy Trình)

> **Antigravity IDE** cung cấp **30 quy trình (Workflow)** chuyên biệt, tuân thủ nghiêm ngặt **Quy chuẩn Nhất thể (Unified Protocol)** với 4 giai đoạn: **Discovery → Planning → Execution → Audit**.

---

## 1. Nhóm Cốt Lõi (Core - Ai cũng có)
*Dành cho mọi dự án, từ cơ bản đến nâng cao.*

### `/brainstorm` - Khởi tạo ý tưởng
- **Khi nào dùng**: Khi bạn có ý tưởng mơ hồ, cần AI gợi ý cách triển khai.
- **Cách dùng**: `/brainstorm [ý tưởng]`
- **Ví dụ**: `/brainstorm ứng dụng đặt món ăn healthy`

### `/plan` - Lập kế hoạch
- **Khi nào dùng**: Trước khi code tính năng mới. AI sẽ chia nhỏ task và ước lượng thời gian.
- **Cách dùng**: `/plan [tên tính năng]`

### `/status` - Dashboard trạng thái
- **Khi nào dùng**: Xem "sức khỏe" dự án, tiến độ các task.
- **Cách dùng**: `/status`

### `/debug` - Sửa lỗi thông minh
- **Khi nào dùng**: Khi gặp lỗi khó hiểu hoặc muốn tối ưu code.
- **Cách dùng**: `/debug [mô tả lỗi hoặc dán log lỗi]`

### `/log-error` - Ghi lại lỗi tự động
- **Khi nào dùng**: Workflow này chạy tự động khi có lỗi. AI sẽ ghi vào `ERRORS.md` để học tập.
- **Cách dùng**: Tự động (không cần gọi thủ công)

---

## 2. Nhóm Xây dựng (Builder - Cho Dev)
*Tự động kích hoạt cho nhóm ngành: General, Logistics, Other.*

### `/create` - Tạo tính năng mới
- **Khi nào dùng**: Build một module hoàn chỉnh (Frontend + Backend + DB).
- **Cách dùng**: `/create [tên module]`
- **Ví dụ**: `/create user-authentication`

### `/enhance` - Nâng cấp, sửa đổi
- **Khi nào dùng**: Thêm nút bấm, đổi màu sắc, sửa logic nhỏ.
- **Cách dùng**: `/enhance [yêu cầu thay đổi]`

### `/orchestrate` - Điều phối Đa Agent (Cao cấp)
- **Khi nào dùng**: Làm tính năng cực lớn cần 3-4 chuyên gia (Frontend, Backend, Security) làm cùng lúc.
- **Cách dùng**: `/orchestrate [yêu cầu phức tạp]`

---

## 3. Nhóm Chất lượng & Bảo mật (Enterprise)
*Tự động kích hoạt cho nhóm ngành: Finance, Healthcare.*

### `/audit` - Tổng kiểm tra
- **Khi nào dùng**: Trước khi bàn giao. Check toàn diện Security, SEO, Performance.
- **Cách dùng**: `/audit`

### `/security` - Bảo mật chuyên sâu
- **Khi nào dùng**: Hardening hệ thống, quét lỗ hổng, check API Key lộ.
- **Cách dùng**: `/security scan`

### `/test` - Kiểm thử tự động
- **Khi nào dùng**: Viết Unit Test, E2E Test cho dự án.
- **Cách dùng**: `/test [tên file/module]`

### `/performance` - Tối ưu hiệu năng *(Mới)*
- **Khi nào dùng**: Khi web chậm, cần đo Lighthouse và tối ưu tốc độ load.
- **Cách dùng**: `/performance [URL/mô tả]`

### `/compliance` - Pháp lý & Tuân thủ *(Mới)*
- **Khi nào dùng**: Rà soát tiêu chuẩn an toàn dữ liệu (GDPR/HIPAA).

---

---

## 4. Nhóm Tăng trưởng & Thẩm mỹ (Growth & Design)
*Tự động kích hoạt cho nhóm ngành: F&B, Personal, Education.*

### `/ui-ux-pro-max` - Thiết kế đỉnh cao
- **Khi nào dùng**: Cần giao diện đẹp, hiệu ứng lung linh (Linear/Magic UI).
- **Cách dùng**: `/ui-ux-pro-max [mô tả màn hình]`

### `/seo` - Tối ưu tìm kiếm
- **Khi nào dùng**: Để trang web lên Top Google. Tạo Sitemap, Schema JSON-LD.

### `/portfolio` - Tạo trang cá nhân *(Mới)*
- **Khi nào dùng**: Tự động cấu hình cấu trúc Landing Page giới thiệu bản thân.

### `/blog` - Hệ thống tin tức *(Mới)*
- **Khi nào dùng**: Xây dựng module blog chuẩn SEO markdown.

### `/visually` - Trực quan hóa *(Mới)*
- **Khi nào dùng**: Vẽ biểu đồ luồng dữ liệu hoặc kiến trúc hệ thống.

### `/explain` - Giải thích Code *(Mới)*
- **Khi nào dùng**: Yêu cầu AI giải thích logic phức tạp dễ hiểu.

### `/api` - Master API Design *(Mới)*
- **Khi nào dùng**: Thiết kế hệ thống API chuẩn OpenAPI 3.1, xử lý bảo mật Header.

### `/realtime` - Kết nối thời gian thực *(Mới)*
- **Khi nào dùng**: Triển khai Socket.io, WebRTC hoặc Server-Sent Events.

### `/mobile` - Phát triển Di động *(Mới)*
- **Khi nào dùng**: Tối ưu hóa giao diện và trải nghiệm Native App.

### `/preview` - Xem trước dự án *(Mới)*
- **Khi nào dùng**: Khởi chạy môi trường sandbox để kiểm tra kết quả ngay lập tức.

---

## 6. Nhóm Vận hành & Con người (Ops & Team)
*Dành cho Tech Lead hoặc DevOps.*

### `/onboard` - Hướng dẫn người mới
- **Khi nào dùng**: Khi team có thành viên mới. AI sẽ chỉ họ cách setup, giải thích code.

### `/document` - Viết tài liệu
- **Khi nào dùng**: Tự động update README, API Docs từ code.

### `/update-docs` - Cập nhật tài liệu tự động
- **Khi nào dùng**: Sau khi thêm Skills/Workflows/Rules mới để đồng bộ docs.

### `/release-version` - Phát hành phiên bản *(Mới)*
- **Khi nào dùng**: Tự động cập nhật version, đồng bộ số liệu stats và chuẩn bị commit.

### `/monitor` - Giám sát
- **Khi nào dùng**: Setup logging, theo dõi lỗi trên Production.

### `/deploy` - Phát hành
- **Khi nào dùng**: Deploy lên Vercel, VPS, Docker.

### `/update` - Nâng cấp Hệ thống
- **Khi nào dùng**: Kiểm tra và nâng cấp bộ não của Antigravity IDE lên bản mới nhất.

---

## 🏗️ Quy chuẩn Nhất thể (Unified Protocol) là gì?
Mọi lệnh bạn gõ đều trải qua dây chuyền 4 lớp:
1.  **🟢 Discovery**: Agent thám hiểm mã nguồn để hiểu "địa hình".
2.  **🟡 Planning**: Tạo `PLAN.md` và chờ bạn duyệt (Design-first).
3.  **🔵 Execution**: Triển khai code bởi các chuyên gia Senior.
4.  **🔴 Audit**: Nghiệm thu, quét bảo mật và báo cáo kết quả (`walkthrough.md`).

## 💡 Mẹo sử dụng
- Bạn có thể **kết hợp** các lệnh. Ví dụ: Dùng `/plan` trước, sau đó dùng `/orchestrate` để thực thi plan đó.
- Nếu không nhớ lệnh? Chỉ cần gõ `/help` hoặc hỏi AI bằng tiếng Việt, nó sẽ tìm workflow phù hợp cho bạn.
