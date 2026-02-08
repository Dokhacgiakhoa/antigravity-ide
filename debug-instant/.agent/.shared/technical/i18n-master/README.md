---
module: i18n-master
version: 4.2.0
layer: technical
compliance_gates:
  - translation_coverage
  - locale_consistency
references:
  - rules: [i18n-localization.md]
---

# 🌐 i18n Master & Localization Strategy
us**: Global Reach
> **Type**: Shared Module (Localization)

This module standardizes internationalization (i18n) and localization (l10n) practices.

## 📂 Structure

```
i18n-master/
├── locales/              # 🏳️ Standard Locale Codes
└── checklists/           # ✅ Audit Tools
    └── text_expansion.md #    - Check for UI breaks with long text
```

## 🚀 Usage
Use this module to ensure your application can properly handle multiple languages and cultural formats (dates, currency).
