# Antigravity IDE

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **The Ultimate AI Agent Framework.**  
> *Built on the robust [Antigravity Kit](https://github.com/vudovn/antigravity-kit) core.*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Enhanced](https://img.shields.io/badge/Antigravity-Enhanced-blueviolet)]()

**Google Antigravity** is a supercharged version of the original Antigravity Kit. It transforms a standard Agent template into a massive, production-ready ecosystem for building advanced AI Agents.

## 📦 Installation

### Quick Start (Recommended)

Create a new AI Agent project instantly:

```bash
npx antigravity-ide create my-agent-project
```

Follow the interactive prompts to customize:
- **Template**: Minimal / Standard / Full
- **Agent Rules**: Strict / Balanced / Flexible  
- **Skills**: Choose from 6 categories (webdev, mobile, devops, security, ai, data)
- **Workflows**: Git, Testing, Deployment, Code Review
- **Dashboard**: Optional Next.js Web UI

### Skip Prompts (Use Defaults)

```bash
npx antigravity-ide create my-project --skip-prompts
```

### Global Installation

```bash
npm install -g antigravity-ide
antigravity-ide create my-project
```

## 🤖 Works with Google Gemini

**All 550+ skills are Gemini-compatible!**

```javascript
// Your Gemini agent gets all skills automatically
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ 
  model: "gemini-2.0-flash-exp"
});

// Skills are in .agent/skills/ - ready to use!
```

**Why Gemini + Antigravity IDE?**
- ✅ **Universal Skills**: Works with any AI model
- ✅ **Large Context**: Gemini 1.5 Pro handles 2M tokens
- ✅ **Production-Ready**: 550+ battle-tested skills

See [GEMINI.md](./GEMINI.md) for complete guide.

## 🚀 Upgrade Highlights

This "Pro Max" edition includes significant expansions:

### 🧠 **2500+ Files, 550+ AI Skills**
- **Core Skills**: 550+ production-ready AI agent skills
- **Gemini-Ready**: Full compatibility with Google Gemini AI
- **Universal Format**: Works with any AI model (Claude, GPT, Gemini, Llama)
- **8 Categories**: Development, DevOps, Database, AI/ML, Security, Design, Business, Tools

### 🎨 **Beautiful CLI Experience**
- **Gradient UI**: Rainbow ASCII art banner with concise output
- **Interactive Setup**: Choose skills, workflows, and templates
- **Fast Creation**: `npx antigravity-ide create my-project`

### 📦 **Enhanced Project Structure**
```text
antigravity-ide/
├── .agent/           # 550+ Skills (from awesome-skills)
├── web/              # Next.js Dashboard
├── lab/              # Experimental Features
├── test/             # Testing Suite
└── cli/              # CLI Tool (gradient UI)
```

### ✨ **What Makes It Special**
- **AI-Agnostic**: Skills work with any LLM (Gemini, Claude, GPT, etc.)
- **Production-Ready**: Battle-tested skills from 500+ contributors
- **Comprehensive**: From frontend to AI agents, security to marketing
- **Well-Documented**: Each skill has clear instructions and examples

## 📂 Project Structure

```text
antigravity-ide/
├── .agent/           # 🧠 THE BRAIN: Configs & 2500+ Skills (Enhanced)
├── web/              # 🖥️ THE FACE: Next.js Dashboard Interface
├── lab/              # 🧪 THE LAB: Experimental Features
├── test/             # 🛡️ THE SHIELD: Testing & Benchmarks
└── THIRD_PARTY_NOTICES.md  # 📜 Crediting the giants we stand on
```

## 🛠️ Quick Start

This project is a monorepo. To start the main interface:

```bash
cd web
npm install
npm run dev
```

## 📜 Attribution & License

This project adheres to the MIT License.

*   This project is a derivative work of [Antigravity Kit](https://github.com/vudovn/antigravity-kit) by [vudovn](https://github.com/vudovn).
*   Please see [LICENSE](./LICENSE) for full attribution details and third-party license information.

---
*Created with ❤️ by Dokhacgiakhoa*
