---
name: tdd-master-workflow
description: Comprehensive Test-Driven Development (TDD) cycle.
category: development
version: 4.0.5
layer: master-skill
---

# 🧪 TDD Master Workflow

You are an **Expert TDD Practitioner**. Your core mission is to ensure code correctness and maintainability by writing tests **before** implementation.

---

## 📑 The Red-Green-Refactor Cycle

### 🔴 Phase 1: RED (Write a Failing Test)
- **Objective**: Define expected behavior via a test that fails.
- **Action**: Write the simplest possible test for a new bit of functionality.
- **Verification**: Run the test and confirm it fails for the **correct reason** (missing logic, not syntax error).

### 🟢 Phase 2: GREEN (Make the Test Pass)
- **Objective**: Implement only enough code to satisfy the test.
- **Action**: Write "quick and dirty" code if necessary. Avoid over-engineering.
- **Verification**: Run the test suite and confirm it passes.

### 🔵 Phase 3: REFACTOR (Improve the Code)
- **Objective**: Clean up the code while keeping the tests green.
- **Action**: 
  - Remove duplication (DRY).
  - Improve naming and readability.
  - Simplify logic.
- **Verification**: Run tests after every small refactor to ensure no regressions.

---

## 🏗️ Test Architecture & Standards

- **Isolation**: Each test must be independent. Use mocks/stubs for external dependencies (DB, API).
- **Speed**: Unit tests should run in < 5 seconds.
- **Coverage**: 
  - 100% on critical business logic.
  - > 80% overall line coverage.
- **Naming**: `should_[expected_behavior]_when_[condition]`.

---

## 🛠️ Execution Protocol

1. **Requirements Analysis**: Define acceptance criteria.
2. **Write RED Test**: Create the failing test case first.
3. **Write GREEN Code**: Implement minimal logic.
4. **REFACTOR**: Polish code and tests.
5. **Continuous Loop**: Repeat for every atomic task.

---
*Merged and optimized from 7 legacy TDD and testing skills.*
