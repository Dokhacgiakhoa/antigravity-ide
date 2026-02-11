# 🧠 Hướng Dẫn Về "Kỹ Năng" (Skills System)

> **AntiGravity IDE** không chỉ là một con bot chat. Nó là một tập hợp của **573 Kỹ Năng Lõi (Core Skills)**, mỗi kỹ năng nắm giữ hàng ngàn chiến thuật chuyên sâu (**2977** Fractal Patterns), đạt chuẩn v4.1.0.

---

## 1. Cơ Chế Hoạt Động (v4.1.0 - Fractal Update)

### 🧩 Kiến Trúc Phân Hình (Fractal Skill Architecture)
Ở phiên bản v4.1, mỗi **Skill** được thiết kế như một thư mục kiến thức sống động:
- **Core Skill** (`SKILL.md`): File chính đóng vai trò Mục lục và Điều phối viên.
- **Sub-skills** (`sub-skills/*.md`): Các mô đun kiến thức con chuyên sâu, có thể được gọi độc lập.
- **Standardized Branding**: Tất cả kỹ năng đều được chuẩn hóa dưới tên gọi `agent-*`, xóa bỏ rào cản thương hiệu AI (Claude/Gemini/GPT).

---

## 1.5. Phân Bổ Thích Ứng (Scale-Adaptive Allocation)

Vũ khí (Skills) được cấp phát thông minh dựa trên **Quy mô dự án**:

### A. Theo Chế độ Vận hành (Operation Mode)
*   **👤 Solo-Ninja (Flexible)**: Nạp "Hybrid Skills". Agent có thể sử dụng đa chuyên môn (UI + Backend) cùng lúc để đạt tốc độ tối đa.
*   **👥 Agile-Squad (Balanced)**: Phân hóa kỹ năng theo Domain. Agent Frontend chỉ dùng Skill giao diện, Backend dùng Skill API.
*   **🏢 Software-Factory (Strict)**: Ép buộc nạp các Skill kiểm định (Audit, Security, Testing) cho mọi bước thực thi.

### B. Theo Loại Sản Phẩm (Product Type)
*   📱 **User Application**: Tự động nạp `webdev`, `mobile`, `testing`, `uiux` (Magic UI).
*   🛠️ **Developer Tool**: Tự động nạp `devops`, `testing`, `performance`.
*   🤖 **AI Agent**: Tự động nạp `ai`, `maker`, `research` (Fabric Patterns).
*   🎨 **Digital Asset**: Tự động nạp `game-development`, `webdev`, `seo`, `uiux`.

---

## 2. Danh Sách Kỹ Năng Tiêu Biểu (Featured Skills)

> ℹ️ **Lưu ý**: Đây chỉ là danh sách các kỹ năng nổi bật. Để xem toàn bộ **573 Kỹ năng**, vui lòng tra cứu file [`SKILLS.md`](../SKILLS.md) tại thư mục gốc.

### 💻 Nhóm Phát Triển (Development)
*   **`modern-web-architect`**: Trùm Frontend, Next.js, React 19 Best Practices.
*   **`react-best-practices`**: Chuẩn Vercel Engineering cho Next.js 14+ & React 19.
*   **`agent-coding-standards`** *(Mới)*: Tiêu chuẩn code Minimalist & High-Performance.
*   **`nextjs-react-expert`**: Chuyên sâu Next.js 15+ App Router và React optimization.
*   **`backend-specialist`**: API Design, Microservices.
*   **`nodejs-best-practices`**: Node.js patterns, async patterns, security.
*   **`python-patterns`**: Python development, Django/Flask, type hints.
*   **`mobile-design`**: React Native Patterns, Flutter.
*   **`react-native-best-practices`**: Expo Router, FlashList, NativeWind (Vercel Labs).
*   **`github-mcp`** *(Official)*: Quản lý Git Repo, Issue, PR chuẩn MCP.
*   **`game-development`**: WebGL, Canvas, Mobile Game Logic.
*   **`frontend-design`**: UI/UX design thinking, component design.
*   **`tailwind-patterns`**: Tailwind CSS v4, design systems.
*   **`rust-pro`**: Rust Systems Programming (Async, Memory Safety).
*   **`full-stack-scaffold`**: Tạo khung dự án Fullstack (Node/Python/Rust/Mobile).
*   **`git-collaboration-master`**: Quy trình Git Flow làm việc nhóm chuyên nghiệp.

### 🏗️ Nhóm Kiến Trúc & Thiết Kế
*   **`architecture`**: Architectural decision-making, ADR.
*   **`api-patterns`**: REST vs GraphQL vs tRPC, API design.
*   **`database-design`**: Schema design, indexing strategy.
*   **`postgres-mcp`** *(Official)*: Truy vấn & Kiểm tra Schema PostgreSQL an toàn.
*   **`postgres-best-practices`**: Tối ưu hóa Supabase/PostgreSQL (Index, RLS).
*   **`app-builder`**: Full-stack scaffolding từ natural language.
*   **`clean-code`**: Pragmatic coding standards, SOLID.
*   **`database-migration`**: Chiến lược migration DB an toàn, không downtime.
*   **`strategic-research`**: Nghiên cứu chiến lược công nghệ và đối thủ.
*   **`agent-strategic-compact`** *(Mới)*: Tư duy chiến lược tinh gọn cho High-Level Engineering.

### 🏠 Nhóm Đọc Hiểu & Scraping *(Mới)*
*   **`firecrawl-scraper`**: Deep Crawling, PDF Parsing, Screenshot (Chuyên sâu).
*   **`tavily-web`**: Search & Extract thông tin nhanh từ Web.
*   **`playwright-skill`**: Tự động hóa trình duyệt để tương tác và test UI.

### ☁️ Nhóm Hạ Tầng (DevOps & Testing)
*   **`devops-engineer`**: Docker, CI/CD, Kubernetes.
*   **`deployment-procedures`**: Safe deployment workflows, rollback.
*   **`vercel-deploy`**: Deploy tự động lên Vercel Network.
*   **`mcp-builder`**: Xây dựng Model Context Protocol Server.
*   **`tdd-master-workflow`**: Quy trình Test-Driven Development chuẩn chỉ.
*   **`tdd-workflow`**: RED-GREEN-REFACTOR cycle.
*   **`testing-patterns`**: Unit, integration, mocking strategies.
*   **`webapp-testing`**: E2E, Playwright, deep audit.
*   **`server-management`**: Process management, monitoring.
*   **`cloud-architect-master`**: Thiết kế kiến trúc Cloud đa nền tảng (AWS/GCP/Azure).
*   **`deployment-engineer`**: Kỹ sư triển khai hạ tầng chuyên nghiệp.

### 🛡️ Nhóm Bảo Mật & Kiểm Định (Security & Audit)
*   **`security-auditor`**: Soát xét code tìm lỗ hổng OWASP Top 10.
*   **`fabric-compliance`**: Bộ lọc đạo đức & an toàn AI (Ultimate Law).
*   **`filesystem-mcp`** *(Official)*: Thao tác file nội bộ an toàn.
*   **`malware-analyst`**: Quét mã độc, phát hiện Phishing & URL độc hại.
*   **`penetration-tester-master`**: Đóng vai hacker mũ trắng tấn công thử nghiệm.
*   **`vulnerability-scanner`**: OWASP 2025, Supply Chain Security.
*   **`red-team-tactics`**: MITRE ATT&CK, detection evasion.
*   **`production-code-audit`**: Kiểm định code mức độ doanh nghiệp.
*   **`lint-and-validate`**: Kiểm tra chất lượng và tiêu chuẩn tĩnh.
*   **`testing-automation-mcp`**: Tự động viết & chạy Playwright E2E Test.

### 🤖 Nhóm Trí Tuệ Nhân Tạo (AI Agent)
*   **`ai-engineer`**: Xây dựng ứng dụng LLM, RAG System.
*   **`brainstorming`**: Socratic questioning, giao tiếp người dùng.
*   **`parallel-agents`**: Multi-agent orchestration patterns.
*   **`intelligent-routing`**: Tự động chọn Agent phù hợp.
*   **`agent-orchestration`**: Điều phối đa Agent và quản lý trạng thái.
*   **`langgraph-engineering`**: Xây dựng Agent có ký ức (Memory).
*   **`puppeteer-mcp`** *(Official)*: Điều khiển Browser, cào dữ liệu.
*   **`voice-ai-engine-development`**: Voice Agent thời gian thực.
*   **`daily-news-report`**: AI tự động tổng hợp tin tức.

### 🛠️ Nhóm Công Cụ & Quản Trị Hệ Thống
*   **`bash-linux`**: Bash/Linux terminal patterns.
*   **`powershell-windows`**: PowerShell Windows patterns.
*   **`systematic-debugging`**: Quy trình điều tra lỗi 4 bước.
*   **`plan-writing`**: Lập kế hoạch nhiệm vụ có cấu trúc.
*   **`behavioral-modes`**: Các chế độ vận hành của AI.
*   **`code-review-checklist`**: Hướng dẫn review code.
*   **`legacy-modernizer`**: Hiện đại hóa mã nguồn cũ.
*   **`incident-responder`**: Phản ứng sự cố SRE chuyên nghiệp.
*   **`documentation-templates`**: Mẫu tài liệu chuẩn.
*   **`i18n-localization`**: Đa ngôn ngữ và địa phương hóa.
*   **`performance-profiling`**: Đo lường và phân tích hiệu năng.
*   **`performance-engineer`**: Tối ưu hóa ứng dụng đa lớp.
*   **`modern-web-performance`**: Kỹ nghệ Web hiệu năng cao.
*   **`api-documenter`**: Viết tài liệu API chuẩn OpenAPI 3.1.
*   **`notion-mcp`** *(Official)*: Quản lý Workspace Notion qua AI.
*   **`agent-backend-patterns`** *(Mới)*: Mẫu thiết kế Backend chuẩn Agent.

### 📈 Nhóm Growth & Marketing (SEO/GEO)
*   **`seo-expert-kit`**: Bộ công cụ SEO Master toàn diện.
*   **`seo-fundamentals`**: E-E-A-T, Core Web Vitals.
*   **`geo-fundamentals`**: Tối ưu hóa cho AI Search (ChatGPT, Claude Search).
*   **`cro-expert-kit`**: Tối ưu hóa tỷ lệ chuyển đổi (CRO).
*   **`ui-ux-pro-max-skill`**: Thiết kế giao diện Visuals Premium.

---

## 3. Cách Sử Dụng Hiệu Quả

Bạn **không cần** phải nhớ tên Skill để gọi. Chỉ cần mô tả rõ ràng yêu cầu:

*   ❌ **Sai**: "Làm cho cái này." (AI sẽ dùng kiến thức chung chung).
*   ✅ **Đúng**: "Tôi muốn xây dựng ứng dụng **React Native** (sẽ kích hoạt Skill Mobile) có tính năng **Chat AI** (kích hoạt Skill AI) và bảo mật cao (kích hoạt Skill Security)."

> **Mẹo**: Hãy khai báo rõ Tech Stack bạn muốn dùng ngay từ đầu, AI sẽ tự động "triệu hồi" đúng chuyên gia phù hợp nhất!
