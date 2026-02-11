---
description: Muốn web chạy mượt? Tối ưu tốc độ và hiệu năng theo chuẩn Performance Expert.
---

# /performance - Speed & Efficiency Optimization

$ARGUMENTS

---

## 🟢 PHASE 1: Baseline Profiling
**Agent**: `performance-optimizer` & `explorer-agent`
**Mission**: Measure the "Starting Line."
- **Action**: Run a Lighthouse Audit (Mobile & Desktop).
- **Action**: Record Core Web Vitals (LCP, FID, CLS).
- **Tool**: Check for "Network Waterfalls" and large asset sizes.

## 🟡 PHASE 2: Bottleneck Identification
**Agent**: `performance-optimizer`
**Mission**: Find the "Anchor."
- **Checklist**:
  - Unoptimized images?
  - Unused JS/CSS?
  - N+1 Database queries?
  - Long hydration times?

## 🔵 PHASE 3: Surgical Optimization
**Agent**: `frontend-specialist` & `backend-specialist`
**Mission**: Cut the weight.
- **Action**: Implement Lazy Loading, Code Splitting, and Image Compression.
- **Backend**: Add caching layers (Redis/CDN) and optimize DB indices.

## 🔴 PHASE 4: Delta Verification & Reporting
**Agent**: `quality-inspector`
**Mission**: Prove the gain.
- **Action**: Run a "Before vs After" Lighthouse Comparison.
- **Artifact**: Include a performance "Flame Graph" snippet in the `walkthrough.md`.

---

## Performance Targets:
- **Lighthouse**: Target Score > 95 in all categories.
- **LCP**: < 2.5s.
- **Bundle Size**: Minimize main-thread JS execution.

---

## Examples:
- `/performance audit home page speed`
- `/performance optimize images and fonts`
- `/performance reduce bundle size`
