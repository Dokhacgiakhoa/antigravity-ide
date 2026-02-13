# ❌ Single Provider Lock-in

**Why bad**: May not be best quality.
Single point of failure.
Harder to optimize.

**Instead**: Mix best providers:
- Deepgram for STT (speed + accuracy)
- ElevenLabs for TTS (voice quality)
- OpenAI/Anthropic for LLM

## Limitations

- Latency varies by provider
- Cost per minute adds up
- Quality depends on network
- Complex debugging

## Related Skills

Works well with: `langgraph`, `structured-output`, `langfuse`