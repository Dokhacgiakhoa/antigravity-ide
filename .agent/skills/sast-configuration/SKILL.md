---
version: 4.1.0-fractal
name: sast-configuration
description: Configure Static Application Security Testing (SAST) tools for automated vulnerability detection in application code. Use when setting up security scanning, implementing DevSecOps practices, or automating code vulnerability detection.
---

# SAST Configuration

Static Application Security Testing (SAST) tool setup, configuration, and custom rule creation for comprehensive security scanning across multiple programming languages.

## Use this skill when

- Set up SAST scanning in CI/CD pipelines
- Create custom security rules for your codebase
- Configure quality gates and compliance policies
- Optimize scan performance and reduce false positives
- Integrate multiple SAST tools for defense-in-depth

## Do not use this skill when

- You only need DAST or manual penetration testing guidance
- You cannot access source code or CI/CD pipelines
- You need organizational policy decisions rather than tooling setup

## Instructions

1. Identify languages, repos, and compliance requirements.
2. Choose tools and define a baseline policy.
3. Integrate scans into CI/CD with gating thresholds.
4. Tune rules and suppressions based on false positives.
5. Track remediation and verify fixes.

## Safety

- Avoid scanning sensitive repos with third-party services without approval.
- Prevent leaks of secrets in scan artifacts and logs.

## Overview

This skill provides comprehensive guidance for setting up and configuring SAST tools including Semgrep, SonarQube, and CodeQL.

## Core Capabilities

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Semgrep Configuration](./sub-skills/1-semgrep-configuration.md)
### 2. [2. SonarQube Setup](./sub-skills/2-sonarqube-setup.md)
### 3. [3. CodeQL Analysis](./sub-skills/3-codeql-analysis.md)
### 4. [Initial Assessment](./sub-skills/initial-assessment.md)
### 5. [Basic Setup](./sub-skills/basic-setup.md)
### 6. [CI/CD Pipeline Integration](./sub-skills/cicd-pipeline-integration.md)
### 7. [Pre-commit Hook](./sub-skills/pre-commit-hook.md)
### 8. [New Project Setup](./sub-skills/new-project-setup.md)
### 9. [Custom Rule Development](./sub-skills/custom-rule-development.md)
### 10. [Compliance Scanning](./sub-skills/compliance-scanning.md)
### 11. [High False Positive Rate](./sub-skills/high-false-positive-rate.md)
### 12. [Performance Issues](./sub-skills/performance-issues.md)
### 13. [Integration Failures](./sub-skills/integration-failures.md)
