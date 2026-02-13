---
version: 4.1.0-fractal
name: startup-business-analyst-market-opportunity
description: Generate comprehensive market opportunity analysis with TAM/SAM/SOM
  calculations
allowed-tools: Read Write Edit Glob Grep Bash WebSearch WebFetch
---

# Market Opportunity Analysis

Generate a comprehensive market opportunity analysis for a startup, including Total Addressable Market (TAM), Serviceable Available Market (SAM), and Serviceable Obtainable Market (SOM) calculations using both bottom-up and top-down methodologies.

## Use this skill when

- Working on market opportunity analysis tasks or workflows
- Needing guidance, best practices, or checklists for market opportunity analysis

## Do not use this skill when

- The task is unrelated to market opportunity analysis
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## What This Command Does

This command guides through an interactive market sizing process to:
1. Define the target market and customer segments
2. Gather relevant market data
3. Calculate TAM using bottom-up methodology
4. Validate with top-down analysis
5. Narrow to SAM with appropriate filters
6. Estimate realistic SOM (3-5 year opportunity)
7. Present findings in a formatted report

## Instructions for Claude

When this command is invoked, follow these steps:

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [Step 1: Gather Context](./sub-skills/step-1-gather-context.md)
### 2. [Step 2: Activate market-sizing-analysis Skill](./sub-skills/step-2-activate-market-sizing-analysis-skill.md)
### 3. [Step 3: Conduct Bottom-Up Analysis](./sub-skills/step-3-conduct-bottom-up-analysis.md)
### 4. [Step 4: Gather Market Data](./sub-skills/step-4-gather-market-data.md)
### 5. [Step 5: Top-Down Validation](./sub-skills/step-5-top-down-validation.md)
### 6. [Step 6: Calculate SAM](./sub-skills/step-6-calculate-sam.md)
### 7. [Step 7: Estimate SOM](./sub-skills/step-7-estimate-som.md)
### 8. [Step 8: Create Market Sizing Report](./sub-skills/step-8-create-market-sizing-report.md)
### 9. [Step 9: Save Report](./sub-skills/step-9-save-report.md)
