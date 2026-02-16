# 🛰️ Antigravity IDE - Master Operations Guide
**Version**: 3.5.54 (Enterprise Multi-Agent Edition)
**Language**: Tiếng Việt (Giao diện) - English (Technical)

Chào mừng bạn đến với hệ thống Antigravity IDE đã được "độ" lên mức tối đa. Đây không còn là một công cụ lập trình thông thường, mà là một **Phòng tác chiến AI** với đầy đủ tri thức nghiệp vụ và dây chuyền sản xuất chuyên nghiệp.

---

## 🛠️ 1. Tiền đề (Prerequisites)
Để hệ thống hoạt động với 100% công suất, bạn nên cài đặt:
- **Node.js**: Để chạy lệnh cài đặt và quản lý gói.
- **Python 3.x**: (**Khuyên dùng**) Để các Skill thực thi được các kịch bản tự động như Scanners, Evaluators.

## 🚀 2. Khởi động nhanh (Quick Start)

Để cài đặt hoặc cập nhật hệ thống lên mức Global (toàn cục), hãy sử dụng các lệnh sau:

- **Cài đặt mới**: `npx antigravity-ide` (Cài vào thư mục hiện tại) hoặc `npx antigravity-ide [tên-dự-án]`.
- **Cập nhật tính năng**: `npx antigravity-ide update` (Bảo tồn nội dung custom).

---

## 🏎️ 2. Chế độ Động cơ (Engine Modes)
Antigravity hỗ trợ hai chế độ vận hành linh hoạt tùy theo nhu cầu dự án:

- **Standard Mode (Node.js)**: 
  - *Mục tiêu*: Nhẹ nhàng, tốc độ, Zero-Config.
  - *Sử dụng*: Phù hợp dự án Web, Portfolio, SaaS vừa và nhỏ.
  - *Yêu cầu*: Chỉ cần Node.js (đã có sẵn khi dùng npx).
- **Advanced Mode (Python)**:
  - *Mục tiêu*: Chuyên sâu, Bảo mật cao, AI phức tạp.
  - *Sử dụng*: Phù hợp dự án Enterprise, Big Data, Pentest.
  - *Yêu cầu*: Cần cài đặt Python 3.x trên hệ thống.

Hệ thống sẽ tự động ưu tiên gọi công cụ tương ứng với chế độ bạn đã chọn trong `.config.json`.

---

## 🧠 3. Triết lý vận hành: Quy trình PDCA
Hệ thống hoạt động theo chu kỳ quản trị 4 bước để đảm bảo không bao giờ có code lỗi hoặc thiết kế cẩu thả:

1.  **🔴 PLAN (Planner)**: Sử dụng `/plan` để Agent phác thảo PRD và bản kế hoạch chi tiết (Task Breakdown). **Bạn duyệt xong Agent mới được làm.**
2.  **🔵 DO (Workers)**: Các chuyên gia (Backend, Frontend, Security, DB) sẽ thi công song song dựa trên bản kế hoạch đã duyệt.
3.  **🟡 CHECK (Inspector)**: `quality-inspector` sẽ thanh tra code dựa trên bộ chỉ số `metrics` và danh sách `scenarios` kiểm thử.
4.  **🟢 ACT (Orchestrator)**: `orchestrator` tổng hợp báo cáo và đưa ra quyết định cuối cùng (Merge code hoặc yêu cầu Worker sửa lại).

---

## 🎭 3. Hệ thống Agent Chuyên gia (Specialist Agents)

Mỗi Agent trong hệ thống đều có "não bộ" riêng được nạp qua các file `.md` trong kho Global:

- **`project-planner`**: Kiến trúc sư trưởng, người viết PRD và chia nhỏ task.
- **`backend-specialist`**: Phù thủy Server/API, tuân thủ tuyệt đối API Standards và 3NF Database.
- **`frontend-specialist`**: Nghệ sĩ giao diện, chuyên gia về Premium UI/UX và Micro-interactions.
- **`security-auditor`**: Hiệp sĩ bảo vệ, soi lỗi XSS, SQL Injection qua bộ `security-armor`.
- **`quality-inspector`**: Thanh tra viên, người "bắt lỗi" dựa trên benchmarks và scenarios.
- **`orchestrator`**: Vị thuyền trưởng điều phối toàn bộ luồng công việc.

---

## 📚 4. Kho tài nguyên Shared (`.shared/`)
Đây là nơi lưu trữ "DNA" của hệ thống, giúp Agent thông minh hơn theo thời gian:

| Th mục | Nội dung |
| :--- | :--- |
| `domain-blueprints` | Tri thức nghiệp vụ: Fintech, Healthcare, Logistics, F&B, Real Estate... |
| `api-standards` | Chuẩn giao tiếp: Response format, Error codes, Auth patterns, Naming. |
| `database-master` | Các Schema mẫu chuẩn 3NF cho Auth, E-commerce, CMS. |
| `design-system` | Presets thẩm mỹ (Luxury, Tech, Soft) và quy chuẩn Micro-interactions. |
| `security-armor` | Bộ quy tắc "bất khả xâm phạm" cho ứng dụng. |
| `testing-master` | Kho kịch bản kiểm thử (Test Scenarios) cho các luồng thanh toán, đăng nhập. |
| `compliance` | Mẫu pháp lý: Chính sách bảo mật (Privacy Policy) và Điều khoản (TOS). |
| `metrics` | Các chỉ số Benchmarks về tốc độ và chất lượng code. |
| `core` | Hệ điều hành (OS) của Agent: Tính cách cốt lõi, Cấu trúc dự án mẫu (Archetypes). |

---

## ⌨️ 5. Hệ thống lệnh Slash Command (`/`)

Sử dụng phím **`/`** trong khung chat để kích hoạt các Workflow chuyên sâu:

- `/brainstorm`: Lên ý tưởng, cấu trúc dự án.
- `/create`: Khởi tạo dự án mới, App Builder.
- `/plan`: Lập kế hoạch, phân rã tác vụ.
- `/ui-ux-pro-max`: Thiết kế giao diện Premium.
- `/orchestrate`: Điều phối đa Agent phức tạp.
- `/audit`: Kiểm định chất lượng toàn diện (Security, SEO).
- `/security`: Hardening & Bảo mật chuyên sâu.
- `/seo`: Tối ưu hóa tìm kiếm & Growth.
- `/onboard`: Hướng dẫn thành viên mới.
- `/document`: Tự động viết tài liệu.
- `/monitor`: Thiết lập giám sát vận hành.
- `/status`: Xem Dashboard tiến độ.

---

## 🛡️ 6. Nguyên tắc "Vỏ Việt - Lõi Anh"
- **Giao tiếp với người dùng**: Ưu tiên tiếng Việt súc tích, chuyên nghiệp.
- **Tư duy Kỹ thuật**: Sử dụng tiếng Anh cho biến, hàm, kiến trúc để Agent đạt hiệu suất cao nhất và code dễ bảo trì toàn cầu.

---
**Antigravity IDE - Sẵn sàng bẻ gãy mọi quy luật trọng lực để đưa dự án của bạn lên tầm cao mới.** 🚀🛰️
