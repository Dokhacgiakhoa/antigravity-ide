# ❌ Non-streaming Pipeline

**Why bad**: Adds seconds of latency.
User perceives as slow.
Loses conversation flow.

**Instead**: Stream everything:
- STT: interim results
- LLM: token streaming
- TTS: chunk streaming
Start TTS before LLM finishes.