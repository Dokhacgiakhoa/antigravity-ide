# 🧠 AI Master Module

> **Status**: Core Capability
> **Type**: Shared Module (Prompts & Patterns)

This module provides the intelligence backbone for AI Agent operations, including standardized prompt patterns and model configurations.

## 📂 Structure

```
ai-master/
├── best_patterns.md      # 📜 Theory & Strategy (Existing)
├── checklists/           # ✅ Audit Tools
│   └── prompt_audit.md   #    - Verify prompt quality & safety
└── presets/              # ⚙️ Configuration
    └── model_configs.json #    - Recommended params for Gemini/GPT
```

## 🚀 Usage

### 1. Model Selection
Use `presets/model_configs.json` to configure the optimal temperature and tokens for your task (Creative vs. Biological vs. Coding).

### 2. Prompt Engineering
Before sending a heavy prompt, audit it against `checklists/prompt_audit.md` to ensure it follows the "Chain of Thought" or "ReAct" standards.
