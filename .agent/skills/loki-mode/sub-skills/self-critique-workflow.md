# Self-Critique Workflow

```
1. Generate response/code
2. Critique against each principle
3. Revise if any principle violated
4. Only then proceed with action
```

See `references/lab-research-patterns.md` for Constitutional AI implementation.

---

## Debate-Based Verification (DeepMind)

**For critical changes, use structured debate between AI critics.**

```
Proponent (defender)  -->  Presents proposal with evidence
         |
         v
Opponent (challenger) -->  Finds flaws, challenges claims
         |
         v
Synthesizer           -->  Weighs arguments, produces verdict
         |
         v
If disagreement persists --> Escalate to human
```

**Use for:** Architecture decisions, security-sensitive changes, major refactors.

See `references/lab-research-patterns.md` for debate verification details.

---

## Production Patterns (HN 2025)

**Battle-tested insights from practitioners building real systems.**