# Intelligent Design System Generation Rules (v2.0)

> **Context**: Applied when using `/ui-ux-pro-max` or `frontend-specialist` to generate a new Design System.

## 1. Five-Domain Parallel Search
The generator MUST search these 5 domains concurrently to form a cohesive system:
1.  **Product Domain**: What is the core function? (e.g., Fintech, Health, Social).
2.  **Style Archetype**: Which aesthetic fits? (e.g., Swiss Minimal, Cyberpunk, Neo-Brutalism).
3.  **Color Psychology**: Which palette drives the desired emotion? (Trust -> Blue, Action -> Red).
4.  **Typography**: Which font pairing ensures readability + character? (Sans + Serif, Mono + Sans).
5.  **Layout Strategy**: Dense (Dashboard) vs Airy (Landing).

## 2. The 100-Point Check
Each generated token (color, spacing, shadow) must pass:
- **Contrast Ratio**: WCAG AA (4.5:1) minimum for text.
- **Scale Consistency**: Spacing follows 4px grid (0.25rem).
- **Naming Convention**: `design-token-usage` (e.g., `text-primary`, `bg-surface-200`).
- **Dark Mode Support**: Every token must have a semantic counterpart in dark mode.

## 3. Output Artifacts
The generator must produce:
1.  `tailwind.config.js`: Extended theme configuration.
2.  `global.css`: CSS variables for root and dark mode.
3.  `components.json`: Shadcn/ui configuration (if applicable).
4.  `brand-guide.md`: Human-readable documentation of the choices.

## 4. Fallback Protocol
If input is vague (e.g., "Make it pop"):
- Defaults to **"Modern SaaS"** archetype.
- Palette: **Indigo/Slate**.
- Font: **Inter/Geist**.
- Radius: **Medium (0.5rem)**.
