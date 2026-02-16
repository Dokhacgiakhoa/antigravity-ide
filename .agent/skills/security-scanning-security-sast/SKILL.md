---
version: 4.1.0-fractal
name: security-scanning-security-sast
description: Static Application Security Testing (SAST) for code vulnerability
  analysis across multiple languages and frameworks
metadata:
  globs: "**/*.py, **/*.js, **/*.ts, **/*.java, **/*.rb, **/*.go, **/*.rs, **/*.php"
  keywords: sast, static analysis, code security, vulnerability scanning, bandit,
    semgrep, eslint, sonarqube, codeql, security patterns, code review, ast
    analysis
---
# SAST Security Plugin

Static Application Security Testing (SAST) for comprehensive code vulnerability detection across multiple languages, frameworks, and security patterns.

## Capabilities

- **Multi-language SAST**: Python, JavaScript/TypeScript, Java, Ruby, PHP, Go, Rust
- **Tool integration**: Bandit, Semgrep, ESLint Security, SonarQube, CodeQL, PMD, SpotBugs, Brakeman, gosec, cargo-clippy
- **Vulnerability patterns**: SQL injection, XSS, hardcoded secrets, path traversal, IDOR, CSRF, insecure deserialization
- **Framework analysis**: Django, Flask, React, Express, Spring Boot, Rails, Laravel
- **Custom rule authoring**: Semgrep pattern development for organization-specific security policies

## Use this skill when

Use for code review security analysis, injection vulnerabilities, hardcoded secrets, framework-specific patterns, custom security policy enforcement, pre-deployment validation, legacy code assessment, and compliance (OWASP, PCI-DSS, SOC2).

**Specialized tools**: Use `security-secrets.md` for advanced credential scanning, `security-owasp.md` for Top 10 mapping, `security-api.md` for REST/GraphQL endpoints.

## Do not use this skill when

- You only need runtime testing or penetration testing
- You cannot access the source code or build outputs
- The environment forbids third-party scanning tools

## Instructions

1. Identify the languages, frameworks, and scope to scan.
2. Select SAST tools and configure rules for the codebase.
3. Run scans in CI or locally with reproducible settings.
4. Triage findings, prioritize by severity, and propose fixes.

## Safety

- Avoid uploading proprietary code to external services without approval.
- Require review before enabling auto-fix or blocking releases.

## SAST Tool Selection

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [Python: Bandit](./sub-skills/python-bandit.md)
### 2. [JavaScript/TypeScript: ESLint Security](./sub-skills/javascripttypescript-eslint-security.md)
### 3. [Multi-Language: Semgrep](./sub-skills/multi-language-semgrep.md)
### 4. [Other Language Tools](./sub-skills/other-language-tools.md)
### 5. [SQL Injection](./sub-skills/sql-injection.md)
### 6. [Cross-Site Scripting (XSS)](./sub-skills/cross-site-scripting-xss.md)
### 7. [Hardcoded Secrets](./sub-skills/hardcoded-secrets.md)
### 8. [Path Traversal](./sub-skills/path-traversal.md)
### 9. [Insecure Deserialization](./sub-skills/insecure-deserialization.md)
### 10. [Command Injection](./sub-skills/command-injection.md)
### 11. [Insecure Random](./sub-skills/insecure-random.md)
### 12. [Django](./sub-skills/django.md)
### 13. [Flask](./sub-skills/flask.md)
### 14. [Express.js](./sub-skills/expressjs.md)
### 15. [GitHub Actions](./sub-skills/github-actions.md)
### 16. [GitLab CI](./sub-skills/gitlab-ci.md)
