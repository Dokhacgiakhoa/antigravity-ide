---
version: 4.1.0-fractal
name: mtls-configuration
description: Configure mutual TLS (mTLS) for zero-trust service-to-service communication. Use when implementing zero-trust networking, certificate management, or securing internal service communication.
---

# mTLS Configuration

Comprehensive guide to implementing mutual TLS for zero-trust service mesh communication.

## Do not use this skill when

- The task is unrelated to mtls configuration
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## Use this skill when

- Implementing zero-trust networking
- Securing service-to-service communication
- Certificate rotation and management
- Debugging TLS handshake issues
- Compliance requirements (PCI-DSS, HIPAA)
- Multi-cluster secure communication

## Core Concepts

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. mTLS Flow](./sub-skills/1-mtls-flow.md)
### 2. [2. Certificate Hierarchy](./sub-skills/2-certificate-hierarchy.md)
### 3. [Template 1: Istio mTLS (Strict Mode)](./sub-skills/template-1-istio-mtls-strict-mode.md)
### 4. [Template 2: Istio Destination Rule for mTLS](./sub-skills/template-2-istio-destination-rule-for-mtls.md)
### 5. [Template 3: Cert-Manager with Istio](./sub-skills/template-3-cert-manager-with-istio.md)
### 6. [Template 4: SPIFFE/SPIRE Integration](./sub-skills/template-4-spiffespire-integration.md)
### 7. [Template 5: Linkerd mTLS (Automatic)](./sub-skills/template-5-linkerd-mtls-automatic.md)
### 8. [Do's](./sub-skills/dos.md)
### 9. [Don'ts](./sub-skills/donts.md)
