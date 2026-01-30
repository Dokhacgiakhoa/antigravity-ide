# Operational Flow Guide 📘

> **Foreword**: Building software is a **long conversation** between the Boss (User) and the Employee (AI). This document is not theory; it provides **Sample Transcripts** of 5 real-world projects so you can copy-paste and learn how to "command" effectively.

---

## 🎯 Case Study 1: E-commerce Platform (Web Fullstack) 🛒
**Difficulty**: High | **Timeline**: 2 weeks (equiv) | **Focus**: Database, API, State Management.

### Phase 1: Kickoff & Foundation (10%)
> **Boss**: `/create` (select SME, Industry F&B)
>
> **Boss**: `/plan`
> **Prompt**: "I want to build a Sneaker store. Needs Homepage, Detail page, Cart, and Admin Dashboard. Analyze what Tables we need in the Database?"
>
> **Boss**: *Approves plan* -> "Ok, plan looks good. Create the folder structure."

### Phase 2: Backend & Database (30%)
> **Boss**: "Now design the Database Schema. Use PostgreSQL."
> **Context**: `@database-architect`
> **Prompt**: "Create `schema.sql`. Need `Users`, `Products` (with size, color), `Orders`, `OrderItems` tables. Add an Index to the `price` column for faster filtering."
>
> **Boss**: "Now write the Register/Login API."
> **Context**: `@backend` `@security`
> **Prompt**: "Create POST `/auth/register` API. Validate email strictly. Password must be hashed with Bcrypt. Return a JWT Token."
>
> **Boss**: *Tests and finds error* -> `/debug`
> **Prompt**: "I sent a Login request but got 500. Log says: `Cannot read property 'hash' of undefined`. Fix ASAP."
> **Context**: `@debug`

### Phase 3: Frontend (40%)
> **Boss**: "Switch to UI. Use Next.js."
> **Context**: `@frontend` `@ui-ux-pro-max`
> **Prompt**: "Create `ProductCard` component. Requirements: Large image, bold title, red price. On hover, the card should elevate (shadow)."
>
> **Boss**: "Make the Shopping Cart page."
> **Context**: `@frontend`
> **Prompt**: "Create `/cart` page. Use Zustand for cart state management. Show product list, quantity toggle, and subtotal."
>
> **Boss**: "Ugly. Fix the CSS."
> **Context**: `@ui-ux-pro-max`
> **Prompt**: "The 'Checkout' button looks cheap. Change it to an orange-purple gradient, rounded corners, and add a Shopping Bag icon."

### Phase 4: Integration & Polish (20%)
> **Boss**: "Connect API to Frontend."
> **Prompt**: "On Login page, when user clicks Submit, call `/auth/login` API. If success, save token to localStorage and redirect to Home."
>
> **Boss**: "Check performance."
> **Context**: `@performance`
> **Prompt**: "Run Lighthouse audit on Home page. Optimize images and lazy load heavy components for me."

---

## 🎯 Case Study 2: Mobile Game "Flappy Clone" (Indie Game) 🎮
**Difficulty**: Medium | **Focus**: Logic, Physics, Performance.

### Phase 1: Core Logic
> **Boss**: `/create` (select Mobile & Game)
>
> **Boss**: "Write gravity logic for the bird."
> **Context**: `@game-development`
> **Prompt**: "Create `Bird` class. Have an `update()` function. Every frame `y` increases (falls). When calling `flap()`, `velocity` jumps up. Tune numbers to feel like real Flappy Bird."

### Phase 2: Gameplay Loop
> **Boss**: "Make obstacles (Pipes)."
> **Prompt**: "Create `PipeManager` class. Spawn a pipe pair (top/bottom) every 2 seconds. Pipes move right to left. If bird collides, Game Over."

### Phase 3: Polish
> **Boss**: "Add sound."
> **Prompt**: "Play `sfx_wing.mp3` when flying. Play `sfx_hit.mp3` on death."
>
> **Boss**: `/debug` (Game stutters)
> **Context**: `@performance`
> **Prompt**: "Game lags after playing a while. I suspect too many objects are created without deletion. Check for memory leaks in `PipeManager`?"

---

## 🎯 Case Study 3: Digital Banking (Fintech Enterprise) 🏦
**Difficulty**: Very Hard | **Focus**: Security, Audit, Compliance.

### Phase 1: Hardening
> **Boss**: `/create` (select Enterprise, Finance)
>
> **Boss**: "Design security architecture."
> **Context**: `@security-auditor`
> **Prompt**: "Review `server.js`. Ensure Helmet, Rate Limiting, and CORS are strictly configured. Block strange IPs from Admin API."

### Phase 2: Sensitive Logic
> **Boss**: "Write money transfer function."
> **Context**: `@backend` `@database-architect`
> **Prompt**: "Write `transferMoney` function. MUST use Database Transaction. Debit A and Credit B must happen simultaneously. Rollback immediately on error. Log everything to Audit table."

### Phase 3: Audit
> **Boss**: `/audit`
> **Context**: `@compliance`
> **Prompt**: "Scan entire code for accidental logging of sensitive info (Card numbers, Phone). Project must comply with PCI-DSS."

---

## 🎯 Case Study 4: Personal Blog (Personal Brand) ✍️
**Difficulty**: Easy | **Focus**: SEO, Speed, Content.

> **Boss**: `/create` (Personal)
>
> **Boss**: "Write Home page intro."
> **Context**: `@seo-expert-kit`
> **Prompt**: "Write intro content introducing me as an AI Engineer with 5 years exp. Embed keywords like 'AI Consultant', 'Machine Learning' for Google ranking."
>
> **Boss**: "Add Dark Mode."
> **Context**: `@frontend`
> **Prompt**: "Add Light/Dark toggle in top right. Save setting to local storage."
>
> **Boss**: `/deploy` -> "Push to Vercel for me."

---

## 🎯 Case Study 5: Data Processing Tool (Python AI Lab) 🐍
**Difficulty**: Specialist | **Focus**: Python, Data, Charts.

> **Boss**: `/create` (select Advanced - Python)
> **Boss**: *Sees Python missing warning* -> "Ok, run the install command."
>
> **Boss**: "Write script to read Excel."
> **Context**: `@data-engineer`
> **Prompt**: "Use `pandas` to read `sales.xlsx`. Clean data: Remove empty rows, fill 0 for missing values."
>
> **Boss**: "Draw chart."
> **Context**: `@ai-engineer`
> **Prompt**: "Use `matplotlib` to plot line chart of monthly revenue. Export to `chart.png`."

---

## 📝 Summary of "Magic Spells" (Prompt Patterns)

1.  **"Role - Task - Standard" Model**:
    *   *Basic*: "Write login code." (Vague)
    *   *Pro*: "Act as `@security`, write Login API (`Task`), require password hash and Anti-Brute Force (`Standard`)."

2.  **"Evidence-based Debugging" Model**:
    *   *Basic*: "Code is broken, fix it." (AI guesses)
    *   *Pro*: "Call `/debug`. I got `Error: connection refused` at line 50 of `db.js`. Analyze if it's config port issue or DB not running?"

3.  **"Iterative" Model**:
    *   Lap 1: "Create basic UI first."
    *   Lap 2: "Add CSS to make it pretty."
    *   Lap 3: "Optimize code to be cleaner."
    *   *(Don't force AI to be perfect in the very first prompt)*.
