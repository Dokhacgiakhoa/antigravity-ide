---
version: 4.1.0-fractal
name: security-scanning-security-hardening
description: "Coordinate multi-layer security scanning and hardening across application, infrastructure, and compliance controls."
---

Implement comprehensive security hardening with defense-in-depth strategy through coordinated multi-agent orchestration:

[Extended thinking: This workflow implements a defense-in-depth security strategy across all application layers. It coordinates specialized security agents to perform comprehensive assessments, implement layered security controls, and establish continuous security monitoring. The approach follows modern DevSecOps principles with shift-left security, automated scanning, and compliance validation. Each phase builds upon previous findings to create a resilient security posture that addresses both current vulnerabilities and future threats.]

## Use this skill when

- Running a coordinated security hardening program
- Establishing defense-in-depth controls across app, infra, and CI/CD
- Prioritizing remediation from scans and threat modeling

## Do not use this skill when

- You only need a quick scan without remediation work
- You lack authorization for security testing or changes
- The environment cannot tolerate invasive security controls

## Instructions

1. Execute Phase 1 to establish a security baseline.
2. Apply Phase 2 remediations for high-risk issues.
3. Implement Phase 3 controls and validate defenses.
4. Complete Phase 4 validation and compliance checks.

## Safety

- Avoid intrusive testing in production without approval.
- Ensure rollback plans exist before hardening changes.

## Phase 1: Comprehensive Security Assessment

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Initial Vulnerability Scanning](./sub-skills/1-initial-vulnerability-scanning.md)
### 2. [2. Threat Modeling and Risk Analysis](./sub-skills/2-threat-modeling-and-risk-analysis.md)
### 3. [3. Architecture Security Review](./sub-skills/3-architecture-security-review.md)
### 4. [4. Critical Vulnerability Fixes](./sub-skills/4-critical-vulnerability-fixes.md)
### 5. [5. Backend Security Hardening](./sub-skills/5-backend-security-hardening.md)
### 6. [6. Frontend Security Implementation](./sub-skills/6-frontend-security-implementation.md)
### 7. [7. Mobile Security Hardening](./sub-skills/7-mobile-security-hardening.md)
### 8. [8. Authentication and Authorization Enhancement](./sub-skills/8-authentication-and-authorization-enhancement.md)
### 9. [9. Infrastructure Security Controls](./sub-skills/9-infrastructure-security-controls.md)
### 10. [10. Secrets Management Implementation](./sub-skills/10-secrets-management-implementation.md)
### 11. [11. Penetration Testing and Validation](./sub-skills/11-penetration-testing-and-validation.md)
### 12. [12. Compliance and Standards Verification](./sub-skills/12-compliance-and-standards-verification.md)
### 13. [13. Security Monitoring and SIEM Integration](./sub-skills/13-security-monitoring-and-siem-integration.md)
