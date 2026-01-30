# Từ điển Hệ thống Antigravity (System Glossary) 📖

Đây là tài liệu tra cứu **toàn diện** tất cả các Thực thể (Entity), Lệnh (Command), và Từ khóa (Keyword) có trong hệ thống Antigravity.
Hãy dùng các từ khóa này để giao tiếp chính xác với AI.

---

## 1. Workflows (Quy trình) - Ký hiệu `/`
*Gõ lệnh này để KHỞI ĐỘNG một chuỗi hành động.*

| Lệnh | Ý nghĩa | Khi nào dùng? |
| :--- | :--- | :--- |
| `/audit` | **Kiểm toán chất lượng** | Trước khi bàn giao, cần rà soát lỗi bảo mật/hiệu năng. |
| `/brainstorm` | **Bão não ý tưởng** | Bí ý tưởng, cần AI gợi ý giải pháp/kiến trúc. |
| `/create` | **Khởi tạo dự án** | Bắt đầu một dự án mới từ con số 0. |
| `/debug` | **Gỡ lỗi** | Khi code chạy sai, quăng log lỗi cho AI phân tích. |
| `/deploy` | **Triển khai** | Đóng gói và đẩy ứng dụng lên Server/Cloud. |
| `/document` | **Viết tài liệu** | Tự động viết README, API Docs từ code. |
| `/enhance` | **Nâng cấp** | Muốn sửa UI đẹp hơn, hoặc tối ưu code cũ. |
| `/monitor` | **Giám sát** | Cài đặt công cụ theo dõi Server/Logs. |
| `/onboard` | **Dẫn nhập** | Tạo tài liệu hướng dẫn cho thành viên mới (Newbie). |
| `/orchestrate` | **Điều phối** | Gọi "Hội đồng chuyên gia" giải quyết bài toán lớn. |
| `/plan` | **Lập kế hoạch** | Phân tích yêu cầu -> Ra file `implementation_plan.md`. |
| `/preview` | **Xem trước** | Chạy thử web/app để xem giao diện. |
| `/security` | **Quét bảo mật** | Kiểm tra lỗ hổng chuyên sâu (Penetration Test). |
| `/seo` | **Tối ưu tìm kiếm** | Giúp web lên Top Google (Meta tags, Sitemap). |
| `/status` | **Trạng thái** | Xem báo cáo tiến độ dự án. |
| `/test` | **Kiểm thử** | Viết và chạy Unit Test/E2E Test. |
| `/ui-ux-pro-max`| **Giao diện Đỉnh cao**| Thiết kế UI đẹp như tranh vẽ (Magic UI/Linear). |

---

## 2. Rules (Luật/Ngữ cảnh) - Ký hiệu `@`
*Gõ từ khóa này (hoặc nói tên) để GÁN NGỮ CẢNH chuyên môn cho AI.*

| Tag Rule | Chuyên môn | Nhiệm vụ |
| :--- | :--- | :--- |
| `@backend` | kĩ sư Backend | Viết API, xử lý Logic Server, Database. |
| `@frontend` | Kỹ sư Frontend | Viết Giao diện, CSS, Animation, React/Vue. |
| `@security` | Chuyên gia Bảo mật | Mã hóa, Auth, chống Hack. |
| `@debug` | Chuyên gia Gỡ lỗi | Phân tích Log, tìm nguyên nhân lỗi. |
| `@business` | Chuyên gia BA | Phân tích nghiệp vụ, quy trình doanh nghiệp. |
| `@compliance` | Luật sư Compliance | Kiểm tra tuân thủ GDPR, HIPAA, PCI-DSS. |
| `@architecture`| Kiến trúc sư | Review sơ đồ hệ thống, Clean Code. |
| `@gemini` | **Core System** | Luật gốc của hệ thống (file cấu hình chính). |

---

## 3. Agents (Những nhân cách AI)
*AI có thể tự đóng các vai này trong quá trình làm việc, hoặc bạn yêu cầu.*

*   **Orchestrator**: Nhạc trưởng, tổng chỉ huy.
*   **Project Planner**: Người lập kế hoạch, chia việc.
*   **Backend Specialist**: Chuyên Back-end.
*   **Frontend Specialist**: Chuyên Front-end.
*   **Mobile Developer**: Chuyên App (iOS/Android).
*   **Game Developer**: Chuyên làm Game.
*   **Cloud Architect**: Kiến trúc sư Cloud (AWS/GCP).
*   **Performance Optimizer**: Chuyên gia tối ưu tốc độ.
*   **Security Auditor**: Chuyên gia rà soát bảo mật.
*   **SEO Specialist**: Chuyên gia Marketing/SEO.
*   **Quality Inspector**: Người kiểm tra chất lượng (QA).
*   **Documentation Writer**: Thư ký viết tài liệu.
*   **Test Engineer**: Kỹ sư kiểm thử.
*   **Debugger**: Thám tử săn lỗi.
*   **Codebase Expert**: Cuốn từ điển sống của dự án.

---

## 4. Master Skills (Kỹ năng Lõi)
*550+ Skills, đây là những skill "trùm cuối" hay dùng nhất.*

| Skill Name | Công dụng |
| :--- | :--- |
| `ai-engineer` | Làm app AI, Chatbot, RAG. |
| `api-documenter` | Viết tài liệu API chuẩn OpenAPI. |
| `cloud-architect-master` | Thiết kế hệ thống Cloud đa nền tảng. |
| `database-migration` | Chuyên gia chuyển đổi Database an toàn. |
| `deployment-engineer` | Chuyên gia CI/CD và Docker. |
| `full-stack-scaffold` | Dựng dự án chuẩn chỉnh từ đầu. |
| `modern-web-architect` | Kiến trúc Web hiện đại (Next.js/React). |
| `security-auditor` | Kiểm tra lỗ hổng bảo mật. |
| `seo-expert-kit` | Bộ công cụ SEO toàn diện. |
| `tdd-master-workflow` | Quy trình Test-Driven Development. |
| ... | *(Và hàng trăm skill khác trong folder `.agent/skills`)* |

---

## 5. Shared Modules (Thư viện dùng chung)
*Các module tiêu chuẩn Enterprise được tự động nạp.*

*   `ai-master`: Chuẩn mực AI.
*   `api-standards`: Chuẩn mực thiết kế API.
*   `compliance`: Các quy định pháp lý.
*   `database-master`: Chuẩn thiết kế Database.
*   `design-system`: Hệ thống thiết kế UI.
*   `domain-blueprints`: Kiến trúc mẫu theo ngành.
*   `i18n-master`: Đa ngôn ngữ.
*   `infra-blueprints`: Mẫu hạ tầng (Terraform).
*   `metrics`: Đo đạc chỉ số.
*   `security-armor`: Áo giáp bảo mật.
*   `testing-master`: Chiến lược kiểm thử.
*   `ui-ux-pro-max`: Giao diện cao cấp.

---

> **Mẹo**: Bạn không cần nhớ hết.
> *   Cần hành động -> Gõ `/` rồi Tab.
> *   Cần chuyên môn -> Gõ `@` rồi Tab (hoặc mô tả "gọi ông backend ra đây").
