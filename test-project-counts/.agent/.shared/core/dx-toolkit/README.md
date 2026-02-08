---
module: dx-toolkit
version: 4.2.0
layer: core
compliance_gates:
  - engineering_standards
  - code_review_checklist
references:
  - rules: [code-quality.md, orchestrator.md]
---

# 🛠️ DX Toolkit & Engineering Standards

> **Status**: Developer Experience
> **Type**: Shared Module (Workflow Optimization)

This module ensures your development team moves fast without breaking things.

## 📂 Structure

```
dx-toolkit/
├── checklists/           # ✅ Audit Tools
│   └── code_review.md    #    - The "Senior Engineer" review guide
└── presets/              # ⚙️ IDE Configs
    └── vscode_settings.json # - Opinionated VSCode Workspace settings
```

## 🚀 Usage
Copy `vscode_settings.json` to `.vscode/settings.json` in your project root to align the whole team's editor behavior (Auto-save, Linting on save).
