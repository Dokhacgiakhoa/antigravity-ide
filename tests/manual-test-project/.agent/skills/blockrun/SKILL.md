---
version: 4.1.0-fractal
name: blockrun
description: Use when user needs capabilities Claude lacks (image generation, real-time X/Twitter data) or explicitly requests external models ("blockrun", "use grok", "use gpt", "dall-e", "deepseek")
allowed-tools: Read, Bash(python:*), Bash(python3:*), Bash(pip:*), Bash(source:*)
---

# BlockRun

**BlockRun works with Claude Code and Google Antigravity.**

You can't generate images. You have no real-time X/Twitter access. BlockRun gives you these capabilities.

## Philosophy

You have a wallet. When you need a capability you lack, you pay for it autonomously.

| You Need | You Call | Pricing |
|----------|----------|---------|
| Image generation | DALL-E | $0.04/image |
| Real-time X data | Grok + Live Search | $0.025/source |
| Second opinion | GPT-5.2 | $1.75/M input, $14/M output |
| Cheaper processing | DeepSeek | $0.14/M input, $0.28/M output |

**How it works:** BlockRun uses x402 micropayments to route your requests to OpenAI, xAI, Google, and other providers. No API keys needed - your wallet pays per token.

## Budget Control (Optional)

If the user specifies a budget (e.g., "use at most $1"), track spending and stop when budget is reached:

```python
from blockrun_llm import setup_agent_wallet

client = setup_agent_wallet()
budget = 1.0  # User's budget

# Before each call, check if within budget
spending = client.get_spending()
if spending['total_usd'] >= budget:
    print(f"Budget reached: ${spending['total_usd']:.4f} spent")
    # Stop making calls
else:
    response = client.chat("openai/gpt-5.2", "Hello!")

# At the end, report spending
spending = client.get_spending()
print(f"💰 Total spent: ${spending['total_usd']:.4f} across {spending['calls']} calls")
```

## When to Use

| Trigger | Your Action |
|---------|-------------|
| User explicitly requests ("blockrun second opinion with GPT on...", "use grok to check...", "generate image with dall-e") | Execute via BlockRun |
| User needs something you can't do (images, live X data) | Suggest BlockRun, wait for confirmation |
| You can handle the task fine | Do it yourself, don't mention BlockRun |

## Example User Prompts

Users will say things like:

| User Says | What You Do |
|-----------|-------------|
| "blockrun generate an image of a sunset" | Call DALL-E via ImageClient |
| "use grok to check what's trending on X" | Call Grok with `search=True` |
| "blockrun GPT review this code" | Call GPT-5.2 via LLMClient |
| "what's the latest news about AI agents?" | Suggest Grok (you lack real-time data) |
| "generate a logo for my startup" | Suggest DALL-E (you can't generate images) |
| "blockrun check my balance" | Show wallet balance via `get_balance()` |
| "blockrun deepseek summarize this file" | Call DeepSeek for cost savings |

## Wallet & Balance

Use `setup_agent_wallet()` to auto-create a wallet and get a client. This shows the QR code and welcome message on first use.

**Initialize client (always start with this):**
```python
from blockrun_llm import setup_agent_wallet

client = setup_agent_wallet()  # Auto-creates wallet, shows QR if new
```

**Check balance (when user asks "show balance", "check wallet", etc.):**
```python
balance = client.get_balance()  # On-chain USDC balance
print(f"Balance: ${balance:.2f} USDC")
print(f"Wallet: {client.get_wallet_address()}")
```

**Show QR code for funding:**
```python
from blockrun_llm import generate_wallet_qr_ascii, get_wallet_address

# ASCII QR for terminal display
print(generate_wallet_qr_ascii(get_wallet_address()))
```

## SDK Usage

**Prerequisite:** Install the SDK with `pip install blockrun-llm`

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [Basic Chat](./sub-skills/basic-chat.md)
### 2. [Real-time X/Twitter Search (xAI Live Search)](./sub-skills/real-time-xtwitter-search-xai-live-search.md)
### 3. [Advanced X Search with Filters](./sub-skills/advanced-x-search-with-filters.md)
### 4. [Image Generation](./sub-skills/image-generation.md)
### 5. [Search Parameters](./sub-skills/search-parameters.md)
### 6. [Source Types](./sub-skills/source-types.md)
