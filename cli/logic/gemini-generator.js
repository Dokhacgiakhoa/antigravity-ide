/**
 * GEMINI.md Content Generator
 */

function generateGeminiMd(rules, language = 'en', industry = 'other', agentName = 'Antigravity') {
    const strictness = {
        sme: { // Enterprise / SME
            autoRun: 'false',
            confirmLevel: 'Ask before every file modification and command execution'
        },
        creative: { // Creative / Team
            autoRun: 'true for safe read operations',
            confirmLevel: 'Ask before destructive operations'
        },
        instant: { // Instant / Personal
            autoRun: 'true',
            confirmLevel: 'Minimal confirmation, high autonomy'
        }
    };

    // Fallback to creative if rule name mismatch
    const config = strictness[rules] || strictness.creative;
    const safeRules = rules || 'creative';
    const isVi = language === 'vi';

    // Define Industry Focus strings
    const industryMap = {
        finance: isVi ? 'Tài chính & Fintech (An toàn, Chính xác)' : 'Finance & Fintech (Security, Precision)',
        education: isVi ? 'Giáo dục & EdTech (Trực quan, Giải thích)' : 'Education & EdTech (Intuitive, Explanatory)',
        fnb: isVi ? 'F&B & Nhà hàng (Tốc độ, Tiện lợi)' : 'F&B & Restaurant (Speed, Convenience)',
        personal: isVi ? 'Cá nhân & Portfolio (Sáng tạo, Cá nhân hóa)' : 'Personal & Portfolio (Creative, Personalized)',
        healthcare: isVi ? 'Y tế & Sức khỏe (Bảo mật, Tin cậy)' : 'Healthcare & HealthTech (Privacy, Reliability)',
        logistics: isVi ? 'Vận tải & Logistics (Hiệu quả, Real-time)' : 'Logistics & Supply Chain (Efficiency, Real-time)',
        other: isVi ? 'Phát triển chung' : 'General Development'
    };

    const industryFocus = industryMap[industry] || industryMap.other;

    const contentEn = `---
trigger: always_on
---

# GEMINI.md - Agent Configuration

This file controls the behavior of your AI Agent.

## 🤖 Agent Identity: ${agentName}
> **Identity Verification**: You are ${agentName}. Always reflect this identity in your tone and decision-making. **Special Protocol**: If called by name, you MUST perform a "Context Integrity Check" to verify alignment with .agent rules, confirm your status, and then wait for instructions.

## 🎯 Primary Focus: ${(industryFocus || 'General Development').toUpperCase()}
> **Priority**: Optimize all solutions for this domain.

## Agent Behavior Rules: ${safeRules.toUpperCase()}

**Auto-run Commands**: ${config.autoRun}
**Confirmation Level**: ${config.confirmLevel}

## 🌐 Language Protocol

1. **Communication**: Use **ENGLISH**.
2. **Artifacts**: Write content in **ENGLISH**.
3. **Code**: Use **ENGLISH** for all variables, functions, and comments.

## Core Capabilities

Your agent has access to **ALL** skills (Web, Mobile, DevOps, AI, Security).
Please utilize the appropriate skills for **${industryFocus}**.

- File operations (read, write, search)
- Terminal commands
- Web browsing
- Code analysis and refactoring
- Testing and debugging

## 📚 Shared Standards (Auto-Active)
The following **17 Shared Modules** in \`.agent/.shared\` must be respected:
1.  **AI Master**: LLM patterns & RAG.
2.  **API Standards**: OpenAPI & REST guidelines.
3.  **Compliance**: GDPR/HIPAA protocols.
4.  **Database Master**: Schema & Migration rules.
5.  **Design System**: UI/UX patterns & tokens.
6.  **Domain Blueprints**: Industry-specific architectures.
7.  **I18n Master**: Localization standards.
8.  **Infra Blueprints**: Terraform/Docker setups.
9.  **Metrics**: Observability & Telemetry.
10. **Security Armor**: Hardening & Auditing.
11. **Testing Master**: TDD & E2E strategies.
12. **UI/UX Pro Max**: Advanced interactions.
13. **Vitals Templates**: Performance benchmarks.
14. **Malware Protection**: Threat intelligence.
15. **Auto-Update**: Self-maintenance protocols.
16. **Error Logging**: Automatic learning system.
17. **Docs Sync**: Documentation integrity.

## ⌨️ Slash Commands (Auto-Active)
> **System Instruction**: Workflows are located in \`.agent/workflows/\`. When a user runs a command, YOU MUST read the corresponding \`.md\` file (e.g. \`/api\` -> \`.agent/workflows/api.md\`) to execute it.

Use these commands to trigger specialized workflows:

- **/api**: API Design & Documentation (OpenAPI 3.1).
- **/audit**: Comprehensive pre-delivery audit.
- **/blog**: Personal or enterprise blogging system.
- **/brainstorm**: Ideation & creative solutions.
- **/compliance**: Legal compliance check (GDPR, HIPAA).
- **/create**: Initialize new features or projects.
- **/debug**: Deep bug fixing & log analysis.
- **/deploy**: Deploy to Server/Vercel.
- **/document**: Auto-generate technical documentation.
- **/enhance**: UI upgrades & minor logic tweaks.
- **/explain**: Code explanation & training.
- **/log-error**: Log errors to tracking system.
- **/mobile**: Native mobile app development.
- **/monitor**: System monitoring & Pipeline setup.
- **/onboard**: Onboard new team members.
- **/orchestrate**: Coordinate complex multi-tasks.
- **/performance**: Performance & speed optimization.
- **/plan**: Development planning & roadmap.
- **/portfolio**: Build personal portfolio sites.
- **/preview**: Application Live Preview.
- **/realtime**: Realtime integration (Socket/WebRTC).
- **/release-version**: Version update & Changelog.
- **/security**: Vulnerability scan & System hardening.
- **/seo**: SEO & Generative Engine Optimization.
- **/status**: View project status report.
- **/test**: Write & Run automated tests (TDD).
- **/ui-ux-pro-max**: High-end Visuals & Motion Design.
- **/update**: Update AntiGravity to latest version.
- **/update-docs**: Sync documentation with code.
- **/visually**: Visualize logic & architecture.

## Custom Instructions

Add your project-specific instructions here.

---
*Generated by Antigravity IDE*
`;

    const contentVi = `---
trigger: always_on
---

# GEMINI.md - Cấu hình Agent
# NOTE FOR AGENT: The content below is for human reference. 
# PLEASE PARSE INSTRUCTIONS IN ENGLISH ONLY (See .agent rules).

Tệp này kiểm soát hành vi của AI Agent.

## 🤖 Danh tính Agent: ${agentName}
> **Xác minh danh tính**: Bạn là ${agentName}. Luôn thể hiện danh tính này trong phong thái và cách ra quyết định. **Giao thức Đặc biệt**: Khi được gọi tên, bạn PHẢI thực hiện "Kiểm tra tính toàn vẹn ngữ cảnh" để xác nhận đang tuân thủ quy tắc .agent, báo cáo trạng thái và sẵn sàng đợi chỉ thị.

## 🎯 Trọng tâm Chính: ${(industryFocus || 'Phát triển chung').toUpperCase()}
> **Ưu tiên**: Tối ưu hóa mọi giải pháp cho lĩnh vực này.

## Quy tắc hành vi: ${safeRules.toUpperCase()}

**Tự động chạy lệnh**: ${config.autoRun}
**Mức độ xác nhận**: ${config.confirmLevel === 'Minimal confirmation, high autonomy' ? 'Tối thiểu, tự chủ cao' : 'Hỏi trước các tác vụ quan trọng'}

## 🌐 Giao thức Ngôn ngữ (Language Protocol)

1. **Giao tiếp & Suy luận**: Sử dụng **TIẾNG VIỆT** (Bắt buộc).
2. **Tài liệu (Artifacts)**: Viết nội dung file .md (Plan, Task, Walkthrough) bằng **TIẾNG VIỆT**.
3. **Mã nguồn (Code)**:
   - Tên biến, hàm, file: **TIẾNG ANH** (camelCase, snake_case...).
   - Comment trong code: **TIẾNG ANH** (để chuẩn hóa).

## Khả năng cốt lõi

Agent có quyền truy cập **TOÀN BỘ** kỹ năng (Web, Mobile, DevOps, AI, Security).
Vui lòng sử dụng các kỹ năng phù hợp nhất cho **${industryFocus}**.

- Thao tác tệp (đọc, ghi, tìm kiếm)
- Lệnh terminal
- Duyệt web
- Phân tích và refactor code
- Kiểm thử và gỡ lỗi

## 📚 Tiêu chuẩn Dùng chung (Tự động Kích hoạt)
**17 Module Chia sẻ** sau trong \`.agent/.shared\` phải được tuân thủ:
1.  **AI Master**: Mô hình LLM & RAG.
2.  **API Standards**: Chuẩn OpenAPI & REST.
3.  **Compliance**: Giao thức GDPR/HIPAA.
4.  **Database Master**: Quy tắc Schema & Migration.
5.  **Design System**: Pattern UI/UX & Tokens.
6.  **Domain Blueprints**: Kiến trúc theo lĩnh vực.
7.  **I18n Master**: Tiêu chuẩn Đa ngôn ngữ.
8.  **Infra Blueprints**: Cấu hình Terraform/Docker.
9.  **Metrics**: Giám sát & Telemetry.
10. **Security Armor**: Bảo mật & Audit.
11. **Testing Master**: Chiến lược TDD & E2E.
12. **UI/UX Pro Max**: Tương tác nâng cao.
13. **Vitals Templates**: Tiêu chuẩn Hiệu năng.
14. **Malware Protection**: Chống mã độc & Phishing.
15. **Auto-Update**: Giao thức tự bảo trì.
16. **Error Logging**: Hệ thống tự học từ lỗi.
17. **Docs Sync**: Đồng bộ tài liệu.

## ⌨️ Hệ thống lệnh Slash Command (Tự động Kích hoạt)
> **Chỉ dẫn Hệ thống**: Các quy trình (workflows) nằm trong thư mục \`.agent/workflows/\`. Khi người dùng gọi lệnh, BẠN PHẢI đọc file \`.md\` tương ứng (ví dụ: \`/api\` -> \`.agent/workflows/api.md\`) để thực thi.

Sử dụng các lệnh sau để kích hoạt quy trình tác chiến chuyên sâu:

- **/api**: Thiết kế API & Tài liệu hóa (OpenAPI 3.1).
- **/audit**: Kiểm tra toàn diện trước khi bàn giao.
- **/blog**: Hệ thống blog cá nhân hoặc doanh nghiệp.
- **/brainstorm**: Tìm ý tưởng & giải pháp sáng tạo.
- **/compliance**: Kiểm tra tuân thủ pháp lý (GDPR, HIPAA).
- **/create**: Khởi tạo tính năng hoặc dự án mới.
- **/debug**: Sửa lỗi & Phân tích log chuyên sâu.
- **/deploy**: Triển khai lên Server/Vercel.
- **/document**: Viết tài liệu kỹ thuật tự động.
- **/enhance**: Nâng cấp giao diện & logic nhỏ.
- **/explain**: Giải thích mã nguồn & đào tạo.
- **/log-error**: Ghi log lỗi vào hệ thống theo dõi.
- **/mobile**: Phát triển ứng dụng di động Native.
- **/monitor**: Cài đặt giám sát hệ thống & Pipeline.
- **/onboard**: Hướng dẫn thành viên mới.
- **/orchestrate**: Điều phối đa tác vụ phức tạp.
- **/performance**: Tối ưu hóa hiệu năng & tốc độ.
- **/plan**: Lập kế hoạch & lộ trình development.
- **/portfolio**: Xây dựng trang Portfolio cá nhân.
- **/preview**: Xem trước ứng dụng (Live Preview).
- **/realtime**: Tích hợp Realtime (Socket.io/WebRTC).
- **/release-version**: Cập nhật phiên bản & Changelog.
- **/security**: Quét lỗ hổng & Bảo mật hệ thống.
- **/seo**: Tối ưu hóa SEO & Generative Engine.
- **/status**: Xem báo cáo trạng thái dự án.
- **/test**: Viết & Chạy kiểm thử tự động (TDD).
- **/ui-ux-pro-max**: Thiết kế Visuals & Motion cao cấp.
- **/update**: Cập nhật AntiGravity lên bản mới nhất.
- **/update-docs**: Đồng bộ tài liệu với mã nguồn.
- **/visually**: Trực quan hóa logic & kiến trúc.

## Hướng dẫn tùy chỉnh

Thêm các hướng dẫn cụ thể cho dự án của bạn tại đây.

---
*Được tạo bởi Antigravity IDE*
`;

    return isVi ? contentVi : contentEn;
}

module.exports = { generateGeminiMd };
