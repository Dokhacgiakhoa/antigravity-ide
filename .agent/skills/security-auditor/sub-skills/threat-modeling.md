# 🧠 Threat Modeling & Risk Assessment

## 🎯 Purpose
Thinking like an attacker to identify potential threats during the design phase.

## 📐 Methodologies

### 1. STRIDE (Microsoft)
- **S**poofing: Impersonating someone else.
- **T**ampering: Modifying data or code.
- **R**epudiation: Denying an action (need logs).
- **I**nformation Disclosure: Leaking data.
- **D**enial of Service: Crashing the system.
- **E**levation of Privilege: Gaining unauthorized access.

### 2. PASTA (Risk-Centric)
Process for Attack Simulation and Threat Analysis. Focuses on business impact.

### 3. DREAD (Quantitative)
- **D**amage potential
- **R**eproducibility
- **E**xploitability
- **A**ffected users
- **D**iscoverability
Score = (D+R+E+A+D) / 5. High score = Fix first.

## 📝 Deliverable: Threat Model Document
Should contain:
1.  **Data Flow Diagram (DFD)**: Visualizing trust boundaries.
2.  **Asset Inventory**: What are we protecting? (User DB, API Keys).
3.  **Threat List**: Identified threats mapped to assets.
4.  **Mitigation Strategy**: Planned defenses.
