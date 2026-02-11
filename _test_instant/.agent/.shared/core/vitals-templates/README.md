---
module: vitals-templates
version: 4.2.0
layer: core
compliance_gates:
  - web_vitals_audit
references:
  - rules: [frontend.md, performance-optimizer.md]
---

# 📈 Vitals Templates & Performance Patterns

> **Status**: Performance Optimization
> **Type**: Shared Module (CWV & Speed)

This module focuses on Core Web Vitals (CWV) optimization and performance budgeting.

## 📂 Structure

```
vitals-templates/
├── budgets/              # 📉 Performance Budgets (Size limits)
└── checklists/           # ✅ Audit Tools
    └── lcp_optimization.md
```

## 🚀 Usage
Apply the performance budgets in CI/CD to prevent heavy regressions. Use checklists to debug slow LCP/CLS.
