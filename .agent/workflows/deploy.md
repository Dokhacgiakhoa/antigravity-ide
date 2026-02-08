---
description: Code xong rồi? Đẩy lên Server/Vercel thôi.
---

# /deploy - Production Release System

$ARGUMENTS

---

## 🟢 PHASE 1: Pre-Flight Integrity Check
**Agent**: `devops-engineer` & `security-auditor`
**Mission**: Ensure the code is "Deployable."
- **Action**: Run `npm run build` and `npm test`.
- **Checklist**:
  - [ ] Zero Lint/TS errors.
  - [ ] All security patches applied (`npm audit`).
  - [ ] Environment variables configured in Production.

## 🟡 PHASE 2: Artifact Creation & Gating
**Agent**: `devops-engineer`
**Mission**: Build the release.
- **Action**: Create the production bundle/container.
- **Gate**: Stop and verify the "Pre-deploy Checklist" success.

## 🔵 PHASE 3: Surgical Deployment
**Agent**: `devops-engineer`
**Mission**: Switch the traffic.
- **Action**: Execute `vercel --prod`, `railway up`, or target platform command.
- **Strategy**: Use Blue/Green or Canary if supported by the infrastructure.

## 🔴 PHASE 4: Health Audit & Verification
**Agent**: `performance-optimizer` & `incident-responder`
**Mission**: Verify the "Live" state.
- **Action**: Check Production URL response time and status.
- **Action**: Verify Database connectivity in the live environment.
- **Artifact**: Provide the Production URL and Health Badge to the User.

---

## Deployment Rules:
- **No Yolo-Deploy**: Never deploy without a successful local build.
- **Rollback Ready**: Always have a plan to return to the previous version.
- **Zero Downtime**: Prioritize strategies that don't break the user experience.

---

## Examples:
- `/deploy production`
- `/deploy preview`
- `/deploy check`
