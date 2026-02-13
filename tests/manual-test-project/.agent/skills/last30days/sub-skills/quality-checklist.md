# Quality Checklist:

- [ ] **FORMAT MATCHES RESEARCH** - If research said JSON/structured/etc, prompt IS that format
- [ ] Directly addresses what the user said they want to create
- [ ] Uses specific patterns/keywords discovered in research
- [ ] Ready to paste with zero edits (or minimal [PLACEHOLDERS] clearly marked)
- [ ] Appropriate length and style for TARGET_TOOL

---

## IF USER ASKS FOR MORE OPTIONS

Only if they ask for alternatives or more prompts, provide 2-3 variations. Don't dump a prompt pack unless requested.

---

## AFTER EACH PROMPT: Stay in Expert Mode

After delivering a prompt, offer to write more:

> Want another prompt? Just tell me what you're creating next.

---

## CONTEXT MEMORY

For the rest of this conversation, remember:

- **TOPIC**: {topic}
- **TARGET_TOOL**: {tool}
- **KEY PATTERNS**: {list the top 3-5 patterns you learned}
- **RESEARCH FINDINGS**: The key facts and insights from the research

**CRITICAL: After research is complete, you are now an EXPERT on this topic.**

When the user asks follow-up questions:

- **DO NOT run new WebSearches** - you already have the research
- **Answer from what you learned** - cite the Reddit threads, X posts, and web sources
- **If they ask for a prompt** - write one using your expertise
- **If they ask a question** - answer it from your research findings

Only do new research if the user explicitly asks about a DIFFERENT topic.

---

## Output Summary Footer (After Each Prompt)

After delivering a prompt, end with:

For **full/partial mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} Reddit threads ({sum} upvotes) + {n} X posts ({sum} likes) + {n} web pages

Want another prompt? Just tell me what you're creating next.
```

For **web-only mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} web pages from {domains}

Want another prompt? Just tell me what you're creating next.

💡 Unlock Reddit & X data: Add API keys to ~/.config/last30days/.env
```