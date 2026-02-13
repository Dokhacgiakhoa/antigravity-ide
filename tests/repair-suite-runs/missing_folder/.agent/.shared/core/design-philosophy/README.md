---
module: design-philosophy
version: 4.2.0
layer: core
compliance_gates:
  - visual_audit
  - tactile_audit
references:
  - rules: [frontend.md, quality-inspector.md]
---

# 🎨 Design Philosophy & Aesthetic Core

> **Status**: Internalized Wisdom
> **Type**: Shared Module (Philosophy & Assets)

This module encapsulates the **Design Soul** of the Google Antigravity project. It is not just text; it contains actionable tools and assets to enforce "Premium" aesthetics.

## 📂 Structure

```
design-philosophy/
├── MANIFESTO.md          # 📜 The Core Philosophy (Declaration)
├── checklists/           # ✅ Audit Tools (Manual Verification)
│   ├── tactile_audit.md  #    - Check interactions (Hover, Cursor)
│   └── visual_audit.md   #    - Check aesthetics (Light/Dark, Contrast)
└── presets/              # 🎨 Copy-paste Assets (Tailwind/CSS)
    └── linear_glow.json  #    - "Linear-style" border & glow configs
```

## 🚀 Usage

### 1. Read the Manifesto
Before designing any screen, read `MANIFESTO.md` to align your mindset.

### 2. Run an Audit
After implementing a UI, use the checklists to verify quality.
```bash
# Example: "Agent, please audit this page using the Tactile Checklist"
```

### 3. Use Presets
Don't reinvent the wheel. Use the JSON presets for complex effects like "Subtle Border Glow".
