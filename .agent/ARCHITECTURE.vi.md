# Kiến trúc Antigravity Kit (Vietnamese)

> Bộ công cụ mở rộng năng lực Agent AI toàn diện

---

## 📋 Tổng quan

Antigravity Kit là một hệ thống nhất thể hóa (Unified), được thiết kế để thích ứng theo quy mô dự án (Scale-Adaptive), bao gồm:

- **15 Chuyên gia Agent** - Các nhân dạng AI dựa trên vai trò, hoạt động theo 3 chế độ: Solo, Squad, và Factory.
- **26 Bộ Kỹ năng (Skills)** - Các mô-đun tri thức "Sci-Link" (Liên kết khoa học) chứa đựng 600+ năng lực.
- **17 Quy trình (Workflows)** - Các chiến dịch thực thi lệnh slash command được điều phối bởi Metadata.
- **17 Mô-đun DNA (Shared)** - Hạt nhân tri thức nền tảng và tiêu chuẩn bất biến.

---

## 🏗️ Cấu trúc thư mục

```plaintext
.agent/
├── ARCHITECTURE.md          # Tài liệu kiến trúc (Tiếng Anh)
├── ARCHITECTURE.vi.md       # Tài liệu kiến trúc (Tiếng Việt)
├── CONCEPTS.md              # Định nghĩa Rule, Skill, Workflow
├── agents/                  # 20 Specialist Agents
├── skills/                  # 550+ Skills
├── workflows/               # 11 Slash Commands
├── rules/                   # Global Rules (Quy tắc toàn cục)
└── scripts/                 # Master Validation Scripts (Kịch bản kiểm tra)
```

---

## 🤖 Hệ thống Agent (15 Chuyên gia chính)

| Agent | Vai trò | Trách nhiệm |
| ----- | ---- | -------------- |
| `orchestrator` | **Thuyền trưởng** | Điều phối luồng chiến lược & Quyết định cuối cùng |
| `quality-inspector` | **Thanh tra viên** | Kiểm tra, Xác thực & Kiểm toán (Cổng chặn cuối cùng) |
| `project-planner` | **Kiến trúc sư** | Chiến lược, Yêu cầu & MVP Mapping |
| `backend-specialist` | **Worker** | Logic, API & Cấu trúc Dữ liệu (SQL Master) |
| `frontend-specialist`| **Worker** | UI, UX & Hiệu suất Web (Premium UI) |
| `security-auditor` | **Worker** | Bảo mật phòng thủ & Tấn công (Security Armor) |
| `test-engineer` | **Worker** | Hạ tầng kiểm thử & TDD |
| `cloud-architect` | **Worker** | CI/CD, Cloud & Triển khai hệ thống |
| `codebase-expert` | **Worker** | Phân tích & Tái cấu trúc mã nguồn (Refactoring) |
| `mobile-developer` | **Worker** | Phát triển ứng dụng di động Full-stack |
| `game-developer` | **Worker** | Phát triển Game và trải nghiệm nhúng |
| `debugger` | **Worker** | Xử lý sự cố & Sửa lỗi nóng (Hotfixing) |
| `seo-specialist` | **Worker** | Tăng trưởng & Tối ưu hóa tìm kiếm (GEO/SEO) |

---

## 🧩 Hệ thống Kỹ năng (Skills)

Các miền tri thức mô-đun mà Agent có thể tải theo yêu cầu dựa trên ngữ cảnh công việc.

### Phát triển Web & giao diện:
- `modern-web-architect`: Kiến trúc Next.js/React hiện đại.
- `ui-ux-pro-max`: Thư viện 50+ style và 21 bảng màu cao cấp.
- `frontend-design`: Các mẫu thiết kế UI/UX và Design System.

### Backend & Infrastructure:
- `api-patterns`: Chuẩn thiết kế REST, GraphQL, tRPC.
- `database-design`: Thiết kế Schema 3NF và tối ưu hóa truy vấn.
- `deployment-engineer`: Quy trình CI/CD và triển khai Docker/K8s.

### Bảo mật & Chất lượng:
- `security-auditor`: Kiểm toán bảo mật theo chuẩn OWASP.
- `testing-master`: Chiến lược kiểm thử TDD/E2E toàn diện.
- `production-code-audit`: Quét và chuẩn hóa mã nguồn lên cấp độ doanh nghiệp.

---

## 🔄 Quy trình làm việc (11 Workflows)

Kích hoạt các quy trình bằng lệnh `/command`.

- `/brainstorm`: Khám phá ý tưởng theo phương pháp Socratic.
- `/create`: Khởi tạo tính năng hoặc dự án mới.
- `/plan`: Phân rã tác vụ và lập kế hoạch (Project Planner).
- `/orchestrate`: Điều phối đa Agent cho bài toán phức tạp.
- `/ui-ux-pro-max`: Thiết kế giao diện Premium.

---

## 🛠️ Kịch bản kiểm tra (Scripts)

Hệ thống sử dụng các kịch bản kiểm tra tự động để đảm bảo chất lượng đầu ra.

- **`checklist.py`**: Kiểm tra các tiêu chí cốt lõi (Bảo mật, Lint, Schema, Test cơ bản).
- **`verify_all.py`**: Kiểm tra toàn diện (Lighthouse, E2E Playwright, Bundle Analysis).

---

## 📊 Chỉ số hệ thống

| Chỉ số | Giá trị |
| ------ | ----- |
| **Tổng số Agent** | 15 |
| **Tổng số Kỹ năng** | 26 Master Kits (Chứa 600+ năng lực) |
| **Quy trình tiêu chuẩn** | 17 |
| **Độ phủ nghiệp vụ** | ~98% Web/Mobile/DevOps/AI/Security |

---

**Antigravity Kit** - Hệ thống được thiết kế để chuẩn hóa sức mạnh trí tuệ AI vào quy trình sản xuất phần mềm chuyên nghiệp. 🛰️🚀
