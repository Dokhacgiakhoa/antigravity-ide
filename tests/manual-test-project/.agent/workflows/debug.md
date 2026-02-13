---
description: Gặp lỗi khó sửa? Để AI soi log và sửa giúp bạn theo quy trình chuyên nghiệp.
---

# /debug - Systematic Debugging System

$ARGUMENTS

---

## 🟢 PHASE 1: Forensic Discovery (The "Crime Scene")
**Agent**: `explorer-agent` & `debugger`
**Mission**: Isolate the exact point of failure.
- **Action**: Read the Stack Trace or Terminal Logs.
- **Action**: Locate the failing file:line.
- **DNA Link**: Consult `rules/error-logging.md` to see if this is a known recurring issue.

## 🟡 PHASE 2: Root Cause Analysis (RCA)
**Agent**: `debugger`
**Mission**: Formulate a hypothesis (Why is it broken?).
- **Hypothesis Checklist**:
  - Null/Undefined safety?
  - Race condition / Sync error?
  - Missing environment variable?
  - Breaking dependency change?
- **Artifact**: Propose the fix to the User with [Pros/Cons].

## 🔵 PHASE 3: Surgical Repair
**Agent**: `backend-specialist` or `frontend-specialist`
**Mission**: Apply the targetted fix.
- **Correction**: Wrap sensitive logic in `try...catch`.
- **Defensive API**: Use Optional Chaining (`?.`) and Nullish Coalescing (`??`).

## 🔴 PHASE 4: Verification & Post-Mortem
**Agent**: `test-engineer` & `quality-inspector`
**Mission**: Ensure the "Bleeding" has stopped.
- **Action**: Run the failing test case to confirm FIX.
- **Reporting**: Log the incident in `ERRORS.md`.
- **Handoff**: Create a `walkthrough.md` explaining the fix.

---

## Output Format:
```markdown
## 🐞 Debug Report: [Bug Title]

### Root Cause
[One sentence explanation]

### The Fix
[Diff or explanation]

### Verification
- [ ] Test case passed
- [ ] No regression found
- [ ] Error logged in ERRORS.md
```

---

## Key Principles:
- **Evidence-First**: Don't guess, use the logs.
- **Regression-Aware**: Every fix must come with a test case to prevent it from returning.
- **Clean Fix**: Don't use "band-aid" fixes unless it's a critical production outage.
