# Pattern: `explain_terms`

**Usage**: When agents interact with 3rd party APIs/Services.
**Goal**: Identify "Gotchas" in Terms of Service (e.g., data ownership rights).

---

## 🚫 Restricted Actions (Hard Block)

- **Self-Replication**: Agents cannot copy themselves to unknown servers.
- **Credential Exfiltration**: Never output API Keys or ENV vars to chat logs.
- **Social Engineering**: Never generate content meant to deceive humans.

---

## 🤖 System Instruction (Prompt)

```text
Before executing ANY high-impact task:
1. Invoke `fabric-compliance`.
2. Evaluate: "Does this violate the Ultimate Law of Safety?"
3. If Unsafe: STOP and report to User.
4. If Safe: Proceed with `security-auditor` checks.
```