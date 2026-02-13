---
version: 4.1.0-fractal
name: k8s-security-policies
description: Implement Kubernetes security policies including NetworkPolicy, PodSecurityPolicy, and RBAC for production-grade security. Use when securing Kubernetes clusters, implementing network isolation, or enforcing pod security standards.
---

# Kubernetes Security Policies

Comprehensive guide for implementing NetworkPolicy, PodSecurityPolicy, RBAC, and Pod Security Standards in Kubernetes.

## Do not use this skill when

- The task is unrelated to kubernetes security policies
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## Purpose

Implement defense-in-depth security for Kubernetes clusters using network policies, pod security standards, and RBAC.

## Use this skill when

- Implement network segmentation
- Configure pod security standards
- Set up RBAC for least-privilege access
- Create security policies for compliance
- Implement admission control
- Secure multi-tenant clusters

## Pod Security Standards

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Privileged (Unrestricted)](./sub-skills/1-privileged-unrestricted.md)
### 2. [2. Baseline (Minimally restrictive)](./sub-skills/2-baseline-minimally-restrictive.md)
### 3. [3. Restricted (Most restrictive)](./sub-skills/3-restricted-most-restrictive.md)
### 4. [Default Deny All](./sub-skills/default-deny-all.md)
### 5. [Allow Frontend to Backend](./sub-skills/allow-frontend-to-backend.md)
### 6. [Allow DNS](./sub-skills/allow-dns.md)
### 7. [Role (Namespace-scoped)](./sub-skills/role-namespace-scoped.md)
### 8. [ClusterRole (Cluster-wide)](./sub-skills/clusterrole-cluster-wide.md)
### 9. [RoleBinding](./sub-skills/rolebinding.md)
### 10. [Restricted Pod](./sub-skills/restricted-pod.md)
### 11. [ConstraintTemplate](./sub-skills/constrainttemplate.md)
### 12. [Constraint](./sub-skills/constraint.md)
### 13. [PeerAuthentication (mTLS)](./sub-skills/peerauthentication-mtls.md)
### 14. [AuthorizationPolicy](./sub-skills/authorizationpolicy.md)
### 15. [CIS Kubernetes Benchmark](./sub-skills/cis-kubernetes-benchmark.md)
### 16. [NIST Cybersecurity Framework](./sub-skills/nist-cybersecurity-framework.md)
