[IMPORTANT]
## 🟢 GIAI ĐOẠN 1: Chiến Dịch "Modernize or Die" (v4.1.0)

**Mục tiêu**: Nâng cấp toàn diện các Master Skill cốt lõi để bắt kịp công nghệ AI Agent mới nhất (Feb 2026), tập trung vào Testing tự động, Agent Architecture hiện đại, và An toàn AI.

---

## 🟡 GIAI ĐOẠN 2: Danh Sách Tác Vụ (Task List)

### 1. Cập nhật `RESOURCES.md` (Knowledge Base)
- [ ] Bổ sung link repo `modelcontextprotocol/servers` (Testing, Search, Finance).
- [ ] Cập nhật phiên bản AutoGen (v0.4), LangGraph (Distributed), Fabric (Safety).
- [ ] Thêm ghi chú quan trọng về sự thay đổi kiến trúc (Async/Event-driven).

### 2. Refactor `ai-engineer` Skill (Re-Architecture)
- [ ] Viết lại section **AutoGen Patterns**:
    - Thay "Hierarchical" cũ bằng "Event-Driven GroupChat".
    - Thêm mô hình "Async Messaging" và đa ngôn ngữ (.NET/Python).
- [ ] Cập nhật section **Prompt Engineering**:
    - Thêm **DSPy Modules** thay vì chỉ nhắc đến.
    - Tích hợp khái niệm **System 2 Thinking** (o1-preview logic).

### 3. Tạo Mới `testing-automation-mcp` Skill (Killer Feature)
- [ ] Tạo file `.agent/skills/testing-automation-mcp/SKILL.md`.
- [ ] Nội dung chính:
    - Hướng dẫn cài đặt và sử dụng **Playwright MCP Server**.
    - Prompt mẫu để Agent tự viết test script E2E.
    - Quy trình "Self-Healing Tests" (Tự sửa test khi UI đổi).

### 4. Tạo Mới `fabric-compliance` Skill (AI Safety)
- [ ] Tạo file `.agent/skills/fabric-compliance/SKILL.md`.
- [ ] Tích hợp bộ quy tắc **`ultimate_law_safety`** của Daniel Miessler.
- [ ] Hướng dẫn Agent tự kiểm duyệt output (Content Moderation, Bias Check).
- [ ] Liên kết với `security-auditor` Agent.

### 5. Finalize & Sync Documentation
- [ ] Cập nhật `SKILLS.md` (Tổng hợp Skill mới).
- [ ] Cập nhật `README.md` (Tick xanh các feature mới).
- [ ] Chạy script `update-docs` để đồng bộ số lượng Skill (72 -> 74).

---

## 🔵 GIAI ĐOẠN 3: Kế Hoạch Kiểm Thử
1. **Static Check**: Review markdown output đảm bảo đúng format.
2. **Logic Check**: Đảm bảo các hướng dẫn trong Skill mới là khả thi và có link tham chiếu chuẩn.
3. **Integration**: Verified rằng `security-auditor` có thể trỏ đến `fabric-compliance`.
