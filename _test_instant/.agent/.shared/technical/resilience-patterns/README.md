---
module: resilience-patterns
version: 4.2.0
layer: technical
compliance_gates:
  - error_handling_audit
  - chaos_test_pass
references:
  - rules: [backend.md, devops-engineer.md]
---

# 🏗️ Resilience Patterns & Fault Tolerance

> **Status**: Deep Tech / Enterprise
> **Type**: Shared Module (System Stability)

This module provides the blueprints for building unbreakable, distributed systems.

## 📂 Structure

```
resilience-patterns/
├── checklists/           # ✅ Audit Tools
│   └── chaos_engineering.md # - Simulation scenarios
└── presets/              # ⚙️ Configs
    └── circuit_breaker.json # - Timeout & Fallback policies
```

## 🚀 Usage
Use these patterns when building interactions between Microservices or 3rd Party APIs. They prevent cascading failures.
