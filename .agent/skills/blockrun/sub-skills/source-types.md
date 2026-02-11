# Source Types

**X/Twitter Source:**
```python
{
    "type": "x",
    "included_x_handles": ["handle1", "handle2"],  # Max 10
    "excluded_x_handles": ["spam_account"],        # Max 10
    "post_favorite_count": 100,  # Min likes threshold
    "post_view_count": 1000      # Min views threshold
}
```

**Web Source:**
```python
{
    "type": "web",
    "country": "US",  # ISO alpha-2 code
    "allowed_websites": ["example.com"],  # Max 5
    "safe_search": True
}
```

**News Source:**
```python
{
    "type": "news",
    "country": "US",
    "excluded_websites": ["tabloid.com"]  # Max 5
}
```

## Available Models

| Model | Best For | Pricing |
|-------|----------|---------|
| `openai/gpt-5.2` | Second opinions, code review, general | $1.75/M in, $14/M out |
| `openai/gpt-5-mini` | Cost-optimized reasoning | $0.30/M in, $1.20/M out |
| `openai/o4-mini` | Latest efficient reasoning | $1.10/M in, $4.40/M out |
| `openai/o3` | Advanced reasoning, complex problems | $10/M in, $40/M out |
| `xai/grok-3` | Real-time X/Twitter data | $3/M + $0.025/source |
| `deepseek/deepseek-chat` | Simple tasks, bulk processing | $0.14/M in, $0.28/M out |
| `google/gemini-2.5-flash` | Very long documents, fast | $0.15/M in, $0.60/M out |
| `openai/dall-e-3` | Photorealistic images | $0.04/image |
| `google/nano-banana` | Fast, artistic images | $0.01/image |

*M = million tokens. Actual cost depends on your prompt and response length.*

## Cost Reference

All LLM costs are per million tokens (M = 1,000,000 tokens).

| Model | Input | Output |
|-------|-------|--------|
| GPT-5.2 | $1.75/M | $14.00/M |
| GPT-5-mini | $0.30/M | $1.20/M |
| Grok-3 (no search) | $3.00/M | $15.00/M |
| DeepSeek | $0.14/M | $0.28/M |

| Fixed Cost Actions | |
|-------|--------|
| Grok Live Search | $0.025/source (default 10 = $0.25) |
| DALL-E image | $0.04/image |
| Nano Banana image | $0.01/image |

**Typical costs:** A 500-word prompt (~750 tokens) to GPT-5.2 costs ~$0.001 input. A 1000-word response (~1500 tokens) costs ~$0.02 output.

## Setup & Funding

**Wallet location:** `$HOME/.blockrun/.session` (e.g., `/Users/username/.blockrun/.session`)

**First-time setup:**
1. Wallet auto-creates when `setup_agent_wallet()` is called
2. Check wallet and balance:
```python
from blockrun_llm import setup_agent_wallet
client = setup_agent_wallet()
print(f"Wallet: {client.get_wallet_address()}")
print(f"Balance: ${client.get_balance():.2f} USDC")
```
3. Fund wallet with $1-5 USDC on Base network

**Show QR code for funding (ASCII for terminal):**
```python
from blockrun_llm import generate_wallet_qr_ascii, get_wallet_address
print(generate_wallet_qr_ascii(get_wallet_address()))
```

## Troubleshooting

**"Grok says it has no real-time access"**
→ You forgot to enable Live Search. Add `search=True`:
```python
response = client.chat("xai/grok-3", "What's trending?", search=True)
```

**Module not found**
→ Install the SDK: `pip install blockrun-llm`

## Updates

```bash
pip install --upgrade blockrun-llm
```