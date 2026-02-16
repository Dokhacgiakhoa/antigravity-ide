<div align="center">
  <img src=".agent/core/logo.png" alt="AntiGravity IDE Logo" width="120">

  # AntiGravity IDE
  ## Activate Senior Engineer Mindset for AI

  [English](./README.md) | [Tiếng Việt](./README.vi.md)

  > **Biến AI Agent từ một Thực tập viên thành Kỹ sư trưởng.**
  >
  > Đây không phải là trình soạn thảo code — Đây là **Hệ điều hành Tư duy** giúp nạp tiêu chuẩn chuyên nghiệp (PDCA, Security, Architecture) trực tiếp vào não bộ AI.
</div>

[![npm version](https://img.shields.io/npm/v/antigravity-ide?color=red)](https://badge.fury.io/js/antigravity-ide)
[![License: MIT](https://img.shields.io/badge/License-MIT-orange)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/antigravity-ide?color=yellow)](https://npmjs.com/package/antigravity-ide)
[![GitHub stars](https://img.shields.io/github/stars/Dokhacgiakhoa/antigravity-ide?color=green)](https://github.com/Dokhacgiakhoa/antigravity-ide/stargazers)
[![Contributors](https://img.shields.io/github/contributors/Dokhacgiakhoa/antigravity-ide?color=blue)](https://github.com/Dokhacgiakhoa/antigravity-ide/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/Dokhacgiakhoa/antigravity-ide?color=blueviolet)](https://github.com/Dokhacgiakhoa/antigravity-ide/commits/main)
[![Code Size](https://img.shields.io/github/languages/code-size/Dokhacgiakhoa/antigravity-ide?color=ff69b4)](https://github.com/Dokhacgiakhoa/antigravity-ide)

| **573** Skills | **38** Specialist Agents | **33** Workflows |
| :---: | :---: | :---: |
| Enterprise Standard | Role-Based Personas | PDCA Cycle |

---

## 🚀 1. Quick Start (Scaffolding)

Sử dụng CLI để thiết lập môi trường tác chiến trong 30 giây:

```sh
# 1. New Project (Khuyên dùng - Luôn tải bản mới nhất)
npx antigravity-ide@latest project_name

# 2. Install trực tiếp vào thư mục hiệnại
npx antigravity-ide@latest
```

> [!WARNING]
> **Lưu ý quan trọng:** Không nên cài đặt Global (`npm install -g antigravity-ide`) vì sẽ gây xung đột phiên bản. Luôn dùng `npx ...@latest` để đảm bảo Project được khởi tạo với Engine mới nhất.

### ✨ Setup Wizard (v4.2.1)
Trải nghiệm Premium CLI với 3 cấp độ tài nguyên Resource:

1.  **🌿 ECO (Basic - 96 Skills)**:
    - **Mục tiêu**: Gemini 1.5 Flash / Free Tier.
    - **Capabilities**: Core Skills (Scaffolding, Patterns, Debugging).
    - **Hiệu năng**: Nhẹ, siêu tốc, tiết kiệm token tối đa.

2.  **🏢 PRO (Professional - 216 Skills)**:
    - **Mục tiêu**: Gemini 1.5 Pro / Paid Account.
    - **Capabilities**: Bổ sung DevOps, Security Audit, Cloud Architecture, TDD.
    - **Hiệu năng**: Cân bằng hoàn hảo giữa sức mạnh và ngữ cảnh. Enterprise Standard.

3.  **🌌 ULTRA (Enterprise - 573 Skills)**:
    - **Mục tiêu**: Gemini 1.5 Ultra / Large Context Model (2M+ tokens).
    - **Capabilities**: Full Fractal Knowledge. Bao gồm Vertical Skills (Fintech, Edtech), Deep Research và Multi-Agent Orchestration.
    - **Hiệu năng**: Sức mạnh không giới hạn.

---

## 2. Documentation System (Offline Docs)
Bộ tài liệu chi tiết được cài sẵn trong thư mục `docs/`. Bạn có thể tra cứu Offline bất cứ lúc nào.

### 📘 Core Guides
- **[Quick Install Guide](./docs/INSTALL_NPX_GUIDE.vi.md)**:
  *Các bước cài đặt nhanh và troubleshooting cho người mới.*
- **[Master Guide](./docs/MASTER_GUIDE.vi.md)**:
  *Triết lý thiết kế, các concept cốt lõi và kiến trúc hệ thống Antigravity.*
- **[Operational Flow](./docs/OPERATIONAL_FLOW.vi.md)**:
  *Standard PDCA Operational Workflow (Plan-Do-Check-Act) với AI.*

### 📙 Reference Manuals
- **[Skills Catalog](./docs/SKILLS_GUIDE.vi.md)**:
  *Danh sách chi tiết 573 Skills, triggers và ví dụ.*
- **[Agent Roster](./docs/AGENTS_GUIDE.vi.md)**:
  *Profile năng lực của 42 Specialist Agents (Frontend, Backend, Security...).*
- **[Workflow Library](./docs/WORKFLOW_GUIDE.vi.md)**:
  *Thư viện 21 Standard Workflows (ví dụ: /plan, /create, /deploy).*
- **[Rules & Protocols](./docs/RULES_GUIDE.vi.md)**:
  *Rules, Security Standards và Coding Protocols.*

### 🛠️ Support
- **[Glossary](./docs/GLOSSARY.vi.md)**: *Định nghĩa thuật ngữ (Fractal, PDCA, MCP).*
- **[Troubleshooting](./docs/TROUBLESHOOTING.vi.md)**: *Các lỗi phổ biến và giải pháp xử lý.*


    > **"wake up [agent-name]"**
    
    *(Ví dụ: "wake up Jarvis")*

AI sẽ tự động đọc file cấu hình `.agent/GEMINI.md` và tải toàn bộ Skills vào bộ nhớ đệm.

---

## 🧠 2. The Heart of System: Thư mục `.agent`

Thư mục `.agent` chứa toàn bộ "Brain" của hệ thống:

- **Specialist Agent Personas**: Planner, Backend/Frontend Specialists, Security Auditor và Orchestrator.
- **PDCA Workflow (Plan-Do-Check-Act)**: AI không code tùy tiện. Nó phải Plan -> Execute -> Check -> Approve.
- **Shared Knowledge (`.shared/`)**: Chứa Project DNA như API Standards, DB Schema, Compliance Docs và các Domain Blueprints (Fintech, Edtech...).

---

## ⚡ 3. Slash Commands (`/`) & Updates

Kích hoạt các Workflows chuyên sâu ngay trong chat:

- `/plan`: Project Planner & Phân rã Task.
- `/create`: Xây dựng cấu trúc Project Foundation.
- `/ui-ux-pro-max`: Thiết kế Premium UI/UX & Micro-interactions.
- `/orchestrate`: Orchestrate Multi-Agent giải quyết bài toán phức tạp.
- `/log-error`: Tự động log error kèm phân tích nguyên nhân và giải pháp.
- `/research`: (Mới) Kích hoạt **FastCode Search** tra cứu mã nguồn siêu tốc (Native Node.js).
- `/design-2026`: (New) Áp dụng **Frontend Trends 2026** (Liquid Glass, Bento Grid...).

### System Update
Để cập nhật Antigravity Brain lên bản mới nhất mà không mất các cấu hình custom:
```sh
npx antigravity-ide update
```

---

---

## 📊 Resource Matrix (Chỉ số tài nguyên)

| Chế độ (Mode) | Skills | Agents | Workflows | Rules | Shared Modules |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **🌿 ECO** | 151 | 5 | 6 | 2 | 3 |
| **🏢 PRO** | 296 | 10 | 11 | 5 | 10 |
| **🌌 ULTRA** | 573 | 38 | 33 | 25 | 20 |

## 📂 Project Structure

```text
project-name/
├── .agent/           # 🧠 THE BRAIN: Agent DNA, Skills & Rules
│   ├── .shared/      # ⛩️ Master Knowledge (API, DB, Design)
│   ├── agents/       # 🎭 Specialist Agent Personas
│   └── skills/       # 🛠️ 550+ Combat Tools
├── src/              # 🏗️ YOUR APPLICATION SOURCE CODE 
├── docs/             # 📘 Offline Documentation
├── GEMINI.md         # ⚙️ Agent Configuration (Root Context)
├── ERRORS.md         # 🐛 Auto-generated Error Log
└── README.md         # 📖 Project Guide
```

---

## ️ Philosophy "Vietnamese Shell - English Core"

- **Giao tiếp**: Tiếng Việt (Trực quan, súc tích).
- **Kỹ thuật**: Tiếng Anh (Biến, hàm, logic - Đảm bảo hiệu suất AI cao nhất).

---

**Antigravity IDE** - Phá bỏ mọi giới hạn, đưa dự án của bạn lên tầm cao mới. 🛰️🚀
