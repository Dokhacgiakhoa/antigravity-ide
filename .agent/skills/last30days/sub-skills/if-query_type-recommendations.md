# If QUERY_TYPE = RECOMMENDATIONS

**CRITICAL: Extract SPECIFIC NAMES, not generic patterns.**

When user asks "best X" or "top X", they want a LIST of specific things:

- Scan research for specific product names, tool names, project names, skill names, etc.
- Count how many times each is mentioned
- Note which sources recommend each (Reddit thread, X post, blog)
- List them by popularity/mention count

**BAD synthesis for "best Claude Code skills":**

> "Skills are powerful. Keep them under 500 lines. Use progressive disclosure."

**GOOD synthesis for "best Claude Code skills":**

> "Most mentioned skills: /commit (5 mentions), remotion skill (4x), git-worktree (3x), /pr (3x). The Remotion announcement got 16K likes on X."