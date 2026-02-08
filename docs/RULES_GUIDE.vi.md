# 📜 Hướng Dẫn Sử Dụng "Luật Hệ Thống" (Rules System) v4.0.8

> **Cơ chế hoạt động**: Antigravity sử dụng cơ chế **Hybrid Language Protocol** (Song ngữ Anh-Việt) để tối ưu hóa cả khả năng hiểu của AI và sự tiện lợi cho đội ngũ phát triển.

---

## 0. Triết lý "Mục đích kép" (Dual Audience)

Các file trong thư mục `.agent/rules/` được thiết kế để phục vụ cùng lúc 2 đối tượng:

1.  **🤖 AI Agent (Constraint Layer)**:
    -   Đóng vai trò là "Rào chắn" (Guardrails).
    -   Ví dụ: Khi Agent đọc rule `code-quality.md`, nó biết ngay lệnh cấm: *"No console.log in production"*.
    -   Agent hiểu hoàn hảo cả Tiếng Anh (Keyword) và Tiếng Việt (Context).

2.  **👨‍💻 Human Team (Standard Layer)**:
    -   Đóng vai trò là "Cẩm nang phát triển" (Wiki).
    -   Thành viên mới gia nhập dự án có thể đọc để nắm bắt Coding Style, Quy trình Git, Bảo mật.
    -   Sử dụng Tiếng Việt giúp anh em dev nắm bắt nhanh hơn, tránh rào cản ngôn ngữ.

3.  **🏢 Professional Protocol (Compliance Layer)**:
    -   Mọi Rule hiện nay đều được liên kết trực tiếp vào các Phase của **Unified Protocol** (Discovery, Planning, Execution, Audit).
    -   Agent không thể bỏ qua Rule nếu muốn pass qua giai đoạn **Audit**.

---

## 1. Giao thức Ngôn ngữ Lai (Hybrid Language Protocol)

Để đạt hiệu quả tối đa, hệ thống áp dụng quy tắc ngôn ngữ sau:

| Thành phần | Ngôn ngữ | Lý do | Ví dụ |
| :--- | :--- | :--- | :--- |
| **Logic Cốt lõi** | 🇬🇧 **Tiếng Anh** | Chính xác cho máy, keyword chuẩn quốc tế. | `Metadata`, `Variable Name`, `Anti-Patterns` |
| **Giải thích/Ngữ cảnh** | 🇻🇳 **Tiếng Việt** | Tự nhiên, dễ hiểu cho người Việt. | "Mục tiêu: Đảm bảo mã nguồn sạch..." |
| **Cấu hình (Config)** | 🇬🇧 **Tiếng Anh** | Bắt buộc do cú pháp hệ thống. | `json`, `yaml`, `regex` |

---

## 2. Phân Loại Rules

### 🤖 Nhóm Tự Động (Auto-Active)
*Luôn chạy ngầm, bạn không cần gọi.*

| Rule | Chức năng | Ngôn ngữ |
| :--- | :--- | :--- |
| **`GEMINI.md`** | **Hiến pháp lõi**: Định hình nhân dạng, tính cách và các mode vận hành (Solo/Team/Factory). | Hybrid |
| **`security.md`** | **Bảo mật**: Chặn hardcode API Key, SQL Injection, XSS. | Hybrid |
| **`code-quality.md`** | **Chất lượng**: Quy định về Naming, Comments, Error Handling. | Hybrid |
| **`frontend.md`** | **Giao diện**: Chuẩn hóa UI/UX, Responsive, Performance. | Hybrid |
| **`backend.md`** | **Hệ thống**: Chuẩn Clean Architecture, API Response, DB Schema. | Hybrid |
| **`testing-standard.md`** | **Kiểm thử**: Quy chuẩn Pyramid, Naming, Mocking & Coverage. | Hybrid |
| **`malware-protection`** | **An toàn**: Chống virus, link độc hại và kiểm soát package. | English |
| **`error-logging`** | **Học tập**: Tự động ghi lại lỗi vào ERRORS.md. | Hybrid |
| **`docs-update`** | **Tài liệu**: Checklist tự động cập nhật docs khi có tính năng mới. | Hybrid |
| **`system-update`** | **Hệ thống**: Tự động kiểm tra và nâng cấp Antigravity IDE. | Hybrid |
| **`runtime-watchdog`** | **An toàn**: Chống treo, vòng lặp vô hạn và lỗi Agent phản hồi chậm. | Hybrid |

### 🛠️ Nhóm Theo Yêu Cầu (On-Demand / @Tags)
*Chỉ chạy khi có ngữ cảnh phù hợp hoặc được bạn gọi đích danh.*

| Tag Gọi | Tên Rule | Chức năng |
| :--- | :--- | :--- |
| **`@biz`** | `business.md` | Kiểm tra logic nghiệp vụ, tính tiền, quyền hạn. |
| **`@legal`** | `compliance.md` | Rà soát GDPR, bảo mật dữ liệu, Logging chuẩn. |
| **`@arch`** | `architecture-review.md` | Đánh giá khả năng chịu tải, HA, Microservices. |
| **`@debug`** | `debug.md` | Kích hoạt quy trình 4 bước: Điều tra -> Test -> Sửa -> Báo cáo. |

---

## 3. Cách Sử Dụng Semantic Tags (@)

Bạn có thể dùng ký tự `@` trong lệnh chat để **ép buộc** Agent tập trung vào một khía cạnh cụ thể.

**Ví dụ thực tế:**

1.  **Khi Review Logic Tính Tiền:**
    > "Agent, hãy `@biz` check lại hàm tính thuế này xem có bị lỗi làm tròn số (Float) không?"
    *(Agent sẽ lôi `rules/business.md` ra để soi kỹ vấn đề Decimal vs Float)*

2.  **Khi Audit Bảo Mật Dữ Liệu:**
    > "Code này `@legal` có vi phạm quy tắc log email người dùng không?"
    *(Agent sẽ đối chiếu với `rules/compliance.md` về PII masking)*

3.  **Khi Sửa Lỗi Khó:**
    > "Hệ thống đang bị lỗi 500, `@debug` điều tra giúp tôi."
    *(Agent kích hoạt chế độ Sherlock Holmes)*

---

## 4. Tại sao cần chia ra như vậy?

*   **Tránh Overload**: Nếu nạp **tất cả** luật cùng lúc, Agent sẽ bị "quá tải" (Cognitive Overload).
*   **Tăng độ chính xác**: Cơ chế **@Tags** giúp bạn điều hướng sự tập trung của Agent vào đúng chỗ cần thiết nhất.
*   **Thân thiện**: Cách viết Hybrid giúp Rule trở nên "có hồn" hơn, giống như một người mentor đang hướng dẫn team.

> **Lời khuyên**: Hãy coi `rules/` là thư viện luật pháp của dự án. Khi cần ban hành luật mới, hãy tạo file mới hoặc sửa file cũ theo chuẩn Hybrid này.
