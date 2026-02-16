---
module: compliance
version: 4.2.0
layer: vertical
compliance_gates:
  - legal_review
  - gdpr_audit
references:
  - rules: [compliance.md]
---

# ⚖️ Compliance & Legal Blueprint

> **Status**: Regulatory Guard
> **Type**: Shared Module (Policies & Audits)

This module manages legal and regulatory compliance requirements (GDPR, HIPAA, SOC2).

## 📂 Structure

```
compliance/
├── checklists/           # ✅ Audit Tools
│   └── gdpr_audit.md     #    - Data privacy checklist
└── presets/              # ⚙️ Policies
    └── privacy_policy_template.md
```

## 🚀 Usage
Use the checklists to ensure data handling meets legal standards before launch.
