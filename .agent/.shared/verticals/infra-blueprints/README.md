---
module: infra-blueprints
version: 4.2.0
layer: vertical
compliance_gates:
  - deployment_readiness
  - scaled_architecture_check
references:
  - rules: [infra-review.md, devops-engineer.md]
---

# 🏗️ Infra Blueprints & Scaled Deployment

> **Status**: Cloud Foundation
> **Type**: Shared Module (IaC & Topology)

This module contains Infrastructure as Code (IaC) templates and cloud topology designs.

## 📂 Structure

```
infra-blueprints/
├── aws/                  # 🟧 AWS Patterns (Terraform/CDK)
├── gcp/                  # 🟦 Google Cloud Patterns
└── docker/               # 🐳 Container Configs
```

## 🚀 Usage
Copy templates from the relevant cloud provider folder to jumpstart infrastructure setup.
