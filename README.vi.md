# Antigravity IDE

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Framework AI Agent Tối Ưu.**  
> *Xây dựng trên nền tảng vững chắc của [Antigravity Kit](https://github.com/vudovn/antigravity-kit).*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nâng Cấp](https://img.shields.io/badge/Antigravity-Enhanced-blueviolet)]()

**Antigravity IDE** là phiên bản nâng cấp mạnh mẽ của Antigravity Kit. Nó biến một Agent template cơ bản thành hệ sinh thái production-ready hoàn chỉnh, giúp bạn xây dựng AI Agents chuyên nghiệp.

## 📦 Cài Đặt

### Bắt đầu nhanh (Khuyên dùng)

Tạo dự án AI Agent mới chỉ với một lệnh:

```bash
npx antigravity-ide create my-agent-project
```

Làm theo hướng dẫn tương tác để tùy chỉnh:
- **Template**: Minimal / Standard / Full
- **Agent Rules**: Strict / Balanced / Flexible  
- **Skills**: Chọn từ 6 categories (webdev, mobile, devops, security, ai, data)
- **Workflows**: Git, Testing, Deployment, Code Review
- **Dashboard**: Giao diện Web Next.js (tùy chọn)

### Bỏ qua câu hỏi (dùng mặc định)

```bash
npx antigravity-ide create my-project --skip-prompts
```

### Cài Đặt Toàn Cục

```bash
npm install -g antigravity-ide
antigravity-ide create my-project
```

## 🤖 Tương thích với Google Gemini

**Tất cả 550+ skills đều hoạt động với Gemini!**

```javascript
// Gemini agent tự động có sẵn tất cả skills
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp"
});

// Skills nằm trong .agent/skills/ - sẵn sàng dùng ngay!
```

**Tại sao chọn Gemini + Antigravity IDE?**
- ✅ **Universal Skills**: Hoạt động với mọi AI model
- ✅ **Large Context**: Gemini 1.5 Pro xử lý được 2M tokens
- ✅ **Production-Ready**: 550+ skills đã qua kiểm chứng thực tế

👉 Xem [GEMINI.md](./GEMINI.md) để biết hướng dẫn chi tiết.

## 🚀 Điểm nổi bật

### 🧠 **2500+ Files, 550+ AI Skills**
- **Core Skills**: Hơn 550 skills production-ready cho AI agent
- **Gemini-Ready**: Tương thích 100% với Google Gemini AI
- **Universal Format**: Dùng được với mọi AI model (Claude, GPT, Gemini, Llama)
- **8 Categories**: Development, DevOps, Database, AI/ML, Security, Design, Business, Tools

### 🎨 **CLI đẹp mắt với hiệu ứng Gradient**
- **Gradient UI**: Banner ASCII art rainbow, output gọn gàng
- **Interactive Setup**: Chọn skills, workflows và templates dễ dàng
- **Tạo nhanh**: Chỉ cần `npx antigravity-ide create my-project`

### 📦 **Cấu trúc dự án được cải tiến**
```text
antigravity-ide/
├── .agent/           # 550+ Skills (từ awesome-skills)
├── web/              # Next.js Dashboard
├── lab/              # Experimental Features
├── test/             # Testing Suite
└── cli/              # CLI Tool (gradient UI)
```

### ✨ **Điểm đặc biệt**
- **AI-Agnostic**: Skills hoạt động với mọi LLM (Gemini, Claude, GPT...)
- **Production-Ready**: Được kiểm chứng bởi 500+ contributors
- **Comprehensive**: Từ frontend đến AI agents, security đến marketing
- **Well-Documented**: Mỗi skill đều có hướng dẫn và ví dụ cụ thể

## 📂 Cấu trúc dự án

```text
antigravity-ide/
├── .agent/           # 🧠 BỘ NÃO: Config & 550+ Skills
├── web/              # 🖥️ GIAO DIỆN: Next.js Dashboard
├── lab/              # 🧪 THÍ NGHIỆM: Features thử nghiệm
├── test/             # 🛡️ KIỂM THỬ: Testing & Benchmarks
└── cli/              # ⚡ CLI TOOL: Tạo project
```

## 🛠️ Bắt đầu sử dụng

Đây là monorepo. Để chạy giao diện chính:

```bash
cd web
npm install
npm run dev
```

Truy cập `http://localhost:3000` để xem Dashboard.

## 📚 Tài liệu

- [**README.md**](./README.md) - Phiên bản tiếng Anh
- [**SKILLS.md**](./SKILLS.md) - Danh sách 550+ skills
- [**GEMINI.md**](./GEMINI.md) - Hướng dẫn tích hợp Gemini
- [**COPYRIGHT.md**](./COPYRIGHT.md) - Thông tin bản quyền

## 📜 Giấy phép & Ghi nhận

Dự án này sử dụng giấy phép MIT.

*   Phát triển dựa trên [Antigravity Kit](https://github.com/vudovn/antigravity-kit) của [vudovn](https://github.com/vudovn).
*   Xem [LICENSE](./LICENSE) để biết chi tiết về giấy phép.
*   Xem [COPYRIGHT.md](./COPYRIGHT.md) để đọc giải thích bằng tiếng Việt.

---
*Được tạo với ❤️ bởi Dokhacgiakhoa*
