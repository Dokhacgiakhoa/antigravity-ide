---
version: 4.1.0-fractal
name: prometheus-configuration
description: Set up Prometheus for comprehensive metric collection, storage, and monitoring of infrastructure and applications. Use when implementing metrics collection, setting up monitoring infrastructure, or configuring alerting systems.
---

# Prometheus Configuration

Complete guide to Prometheus setup, metric collection, scrape configuration, and recording rules.

## Do not use this skill when

- The task is unrelated to prometheus configuration
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## Purpose

Configure Prometheus for comprehensive metric collection, alerting, and monitoring of infrastructure and applications.

## Use this skill when

- Set up Prometheus monitoring
- Configure metric scraping
- Create recording rules
- Design alert rules
- Implement service discovery

## Prometheus Architecture

```
┌──────────────┐
│ Applications │ ← Instrumented with client libraries
└──────┬───────┘
       │ /metrics endpoint
       ↓
┌──────────────┐
│  Prometheus  │ ← Scrapes metrics periodically
│    Server    │
└──────┬───────┘
       │
       ├─→ AlertManager (alerts)
       ├─→ Grafana (visualization)
       └─→ Long-term storage (Thanos/Cortex)
```

## Installation

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [Kubernetes with Helm](./sub-skills/kubernetes-with-helm.md)
### 2. [Docker Compose](./sub-skills/docker-compose.md)
### 3. [Static Targets](./sub-skills/static-targets.md)
### 4. [File-based Service Discovery](./sub-skills/file-based-service-discovery.md)
### 5. [Kubernetes Service Discovery](./sub-skills/kubernetes-service-discovery.md)
