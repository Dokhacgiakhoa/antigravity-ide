# 10. Infrastructure & CI/CD Setup

- Use Task tool with subagent_type="deployment-engineer"
- Prompt: "Setup deployment infrastructure for: $ARGUMENTS. Create Docker containers, Kubernetes manifests (or cloud-specific configs), implement CI/CD pipelines with automated testing gates, setup feature flags (LaunchDarkly/Unleash), and configure monitoring/alerting. Include blue-green deployment strategy and rollback procedures."
- Expected output: Dockerfiles, K8s manifests, CI/CD pipeline configs, feature flag setup, IaC templates (Terraform/CloudFormation)
- Context: All implementations and tests from previous phases