# First-Time Setup (Optional but Recommended)

If the user wants to add API keys for better results:

```bash
mkdir -p ~/.config/last30days
cat > ~/.config/last30days/.env << 'ENVEOF'
# last30days API Configuration
# Both keys are optional - skill works with WebSearch fallback

# For Reddit research (uses OpenAI's web_search tool)
OPENAI_API_KEY=

# For X/Twitter research (uses xAI's x_search tool)
XAI_API_KEY=
ENVEOF

chmod 600 ~/.config/last30days/.env
echo "Config created at ~/.config/last30days/.env"
echo "Edit to add your API keys for enhanced research."
```

**DO NOT stop if no keys are configured.** Proceed with web-only mode.

---

## Research Execution

**IMPORTANT: The script handles API key detection automatically.** Run it and check the output to determine mode.

**Step 1: Run the research script**

```bash
python3 ~/.claude/skills/last30days/scripts/last30days.py "$ARGUMENTS" --emit=compact 2>&1
```

The script will automatically:

- Detect available API keys
- Show a promo banner if keys are missing (this is intentional marketing)
- Run Reddit/X searches if keys exist
- Signal if WebSearch is needed

**Step 2: Check the output mode**

The script output will indicate the mode:

- **"Mode: both"** or **"Mode: reddit-only"** or **"Mode: x-only"**: Script found results, WebSearch is supplementary
- **"Mode: web-only"**: No API keys, Claude must do ALL research via WebSearch

**Step 3: Do WebSearch**

For **ALL modes**, do WebSearch to supplement (or provide all data in web-only mode).

Choose search queries based on QUERY_TYPE:

**If RECOMMENDATIONS** ("best X", "top X", "what X should I use"):

- Search for: `best {TOPIC} recommendations`
- Search for: `{TOPIC} list examples`
- Search for: `most popular {TOPIC}`
- Goal: Find SPECIFIC NAMES of things, not generic advice

**If NEWS** ("what's happening with X", "X news"):

- Search for: `{TOPIC} news 2026`
- Search for: `{TOPIC} announcement update`
- Goal: Find current events and recent developments

**If PROMPTING** ("X prompts", "prompting for X"):

- Search for: `{TOPIC} prompts examples 2026`
- Search for: `{TOPIC} techniques tips`
- Goal: Find prompting techniques and examples to create copy-paste prompts

**If GENERAL** (default):

- Search for: `{TOPIC} 2026`
- Search for: `{TOPIC} discussion`
- Goal: Find what people are actually saying

For ALL query types:

- **USE THE USER'S EXACT TERMINOLOGY** - don't substitute or add tech names based on your knowledge
  - If user says "ChatGPT image prompting", search for "ChatGPT image prompting"
  - Do NOT add "DALL-E", "GPT-4o", or other terms you think are related
  - Your knowledge may be outdated - trust the user's terminology
- EXCLUDE reddit.com, x.com, twitter.com (covered by script)
- INCLUDE: blogs, tutorials, docs, news, GitHub repos
- **DO NOT output "Sources:" list** - this is noise, we'll show stats at the end

**Step 3: Wait for background script to complete**
Use TaskOutput to get the script results before proceeding to synthesis.

**Depth options** (passed through from user's command):

- `--quick` → Faster, fewer sources (8-12 each)
- (default) → Balanced (20-30 each)
- `--deep` → Comprehensive (50-70 Reddit, 40-60 X)

---

## Judge Agent: Synthesize All Sources

**After all searches complete, internally synthesize (don't display stats yet):**

The Judge Agent must:

1. Weight Reddit/X sources HIGHER (they have engagement signals: upvotes, likes)
2. Weight WebSearch sources LOWER (no engagement data)
3. Identify patterns that appear across ALL three sources (strongest signals)
4. Note any contradictions between sources
5. Extract the top 3-5 actionable insights

**Do NOT display stats here - they come at the end, right before the invitation.**

---

## FIRST: Internalize the Research

**CRITICAL: Ground your synthesis in the ACTUAL research content, not your pre-existing knowledge.**

Read the research output carefully. Pay attention to:

- **Exact product/tool names** mentioned (e.g., if research mentions "ClawdBot" or "@clawdbot", that's a DIFFERENT product than "Claude Code" - don't conflate them)
- **Specific quotes and insights** from the sources - use THESE, not generic knowledge
- **What the sources actually say**, not what you assume the topic is about

**ANTI-PATTERN TO AVOID**: If user asks about "clawdbot skills" and research returns ClawdBot content (self-hosted AI agent), do NOT synthesize this as "Claude Code skills" just because both involve "skills". Read what the research actually says.