# PLAN: Agent Professional Intelligence & Operational Protocol

Mục tiêu: Nâng cấp toàn bộ đội ngũ Agent từ "chuyên gia kỹ thuật" thành "nhân sự Senior" có khả năng tự quản lý, phối hợp đồng đội và báo cáo minh bạch. Mỗi Agent sẽ là một mắt xích thông minh trong toàn bộ quy trình của Antigravity IDE.

## 🤝 Pre-flight Checklist (Mandatory)
1. **Dependency Check**: Đã mapping các cặp Agent thường xuyên phối hợp (ví dụ: Backend specialist <-> Database Architect).
2. **Workflow Mapping**: Chỉ định các workflow trọng tâm cho từng Agent (ví dụ: Debugger <-> /debug).
3. **Discipline baseline**: Đảm bảo mọi Agent tuân thủ `GEMINI.md` về quy mô dự án (Solo/Squad/Factory).
4. **Reporting artifacts**: Thống nhất cấu trúc `task.md` và `walkthrough.md` làm chuẩn báo cáo.

## Proposed Changes

### 1. New Section Structure for All Agents
Mỗi Agent file sẽ được nâng cấp thêm 2 khối kiến thức cốt lõi:

#### 🤝 Ecosystem & Collaboration Protocol
- **Primary Partners**: Danh sách các Agent "cạ cứng" cần gọi khi gặp vấn đề liên quan.
- **Context Handoff**: Cách đóng gói thông tin khi chuyển giao task cho Agent khác.
- **Socratic Gatekeeping**: Biết khi nào phải "dừng và hỏi" đồng nghiệp hoặc User.

#### 📊 Operational Discipline & Reporting
- **Workflow Mastery**: Biết cách gọi `/plan`, `/create`, `/test`, `/audit` đúng thời điểm.
- **Rule Enforcement**: Luôn rà soát `rules/` trước khi thực thi.
- **Evidence-Based Reporting**:
  - Cập nhật `task.md` với ID rõ ràng.
  - Tạo `walkthrough.md` kèm bằng chứng (log, screenshot, build success).
  - Tự động ghi lỗi vào `ERRORS.md` nếu gặp sự cố.

---

### 2. Implementation Roadmap

#### [Group 1: Infrastructure & Engineering]
- `backend-specialist`, `database-architect`, `devops-engineer`, `cloud-architect`.
- **Focus**: Phối hợp chặt chẽ về "Contract-driven development". Báo cáo về tính toàn vẹn dữ liệu và infra.

#### [Group 2: Security & Quality]
- `security-auditor`, `penetration-tester`, `test-engineer`, `performance-optimizer`, `qa-automation-engineer`, `quality-inspector`.
- **Focus**: Gatekeeping quy trình. Báo cáo rủi ro và cam kết chất lượng.

#### [Group 3: Product & Orchestration]
- `project-planner`, `product-manager`, `product-owner`, `orchestrator`.
- **Focus**: Điều phối tổng thể. Đảm bảo Alignment giữa Business và Technical. Báo cáo tiến độ (Status reporting).

#### [Group 4: Specialized & Support]
- `seo-specialist`, `game-developer`, `documentation-writer`, `explorer-agent`.
- **Focus**: Chuyên môn sâu kết hợp tư vấn giải pháp.

---

## Verification Plan

### Automated Verification
- Kiểm tra sự hiện diện của các header mới trong 100% agent files.
- Validate các đường dẫn `dna_ref` và `rule_ref` không bị broken link.

### Manual Verification
- Thử nghiệm gán một task liên quan đến 2 agent (ví dụ: thay đổi schema database).
- Kiểm tra xem Backend Specialist có chủ động đề xuất gọi Database Architect hay không.
- Kiểm tra cách Agent cập nhật `task.md` và tạo `walkthrough.md`.

---
**Approval Status**: ✅ Approved by User Goal
