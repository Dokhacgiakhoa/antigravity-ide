# 13. Security Monitoring and SIEM Integration

- Use Task tool with subagent_type="incident-response::devops-troubleshooter"
- Prompt: "Implement security monitoring and SIEM for: $ARGUMENTS. Deploy Splunk/ELK/Sentinel integration, configure security event correlation, implement behavioral analytics for anomaly detection, set up automated incident response playbooks, create security dashboards and alerting."
- Output: SIEM configuration, correlation rules, incident response playbooks, security dashboards, alert definitions
- Context: Establishes continuous security monitoring

## Configuration Options
- scanning_depth: "quick" | "standard" | "comprehensive" (default: comprehensive)
- compliance_frameworks: ["OWASP", "CIS", "SOC2", "GDPR", "HIPAA", "PCI-DSS"]
- remediation_priority: "cvss_score" | "exploitability" | "business_impact"
- monitoring_integration: "splunk" | "elastic" | "sentinel" | "custom"
- authentication_methods: ["oauth2", "saml", "mfa", "biometric", "passwordless"]

## Success Criteria
- All critical vulnerabilities (CVSS 7+) remediated
- OWASP Top 10 vulnerabilities addressed
- Zero high-risk findings in penetration testing
- Compliance frameworks validation passed
- Security monitoring detecting and alerting on threats
- Incident response time < 15 minutes for critical alerts
- SBOM generated and vulnerabilities tracked
- All secrets managed through secure vault
- Authentication implements MFA and secure session management
- Security tests integrated into CI/CD pipeline

## Coordination Notes
- Each phase provides detailed findings that inform subsequent phases
- Security-auditor agent coordinates with domain-specific agents for fixes
- All code changes undergo security review before implementation
- Continuous feedback loop between assessment and remediation
- Security findings tracked in centralized vulnerability management system
- Regular security reviews scheduled post-implementation

Security hardening target: $ARGUMENTS