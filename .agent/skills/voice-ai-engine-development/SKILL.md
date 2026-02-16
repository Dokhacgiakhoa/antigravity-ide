---
name: voice-ai-engine-development
description: Architecting real-time Voice AI agents.
category: development
version: 4.1.0-fractal
layer: master-skill
---

# Voice AI Engine Development

> **Goal**: Build low-latency, conversational Voice AI agents capable of full-duplex communication.

## 1. The Voice Pipeline (Latency is King)

The total loop Latency (Voice-to-Ear) should be < 1000ms (Ideal < 500ms).

1.  **Transport**: WebRTC (preferred for browser) or WebSocket (server-server).
2.  **VAD (Voice Activity Detection)**: Detect when user starts/stops speaking.
    - *Tools*: Silero VAD, WebRTC VAD.
3.  **STT (Speech-to-Text)**: Transcribe audio to text.
    - *Tools*: Deepgram (fastest), Whisper (high accuracy but slower), AssemblyAI.
4.  **LLM (Brain)**: Process text and generate response.
    - *Tools*: Groq (Llama 3), GPT-4o, Claude 3.5 Sonnet.
5.  **TTS (Text-to-Speech)**: Convert response to audio.
    - *Tools*: ElevenLabs (Quality), Cartesia (Speed), OpenAI TTS.

## 2. Architecture Patterns

- **Streaming Pipeline**: DO NOT wait for full transcription or full generation. Stream everything.
    - User Audio Stream -> VAD -> STT Stream -> LLM Stream -> TTS Stream -> Audio Output.
- **Interruption Handling (Barge-in)**:
    - If VAD detects user speech while AI is talking -> Immediately CUT text generation and audio playback. Clear buffers.

## 3. Implementation Stack

- **Backend**: Python (FastAPI) or Node.js. Python ecosystem is stronger for audio processing (numpy/scipy).
- **Frameworks**:
    - **Pipecat**: Open source framework for building voice agents.
    - **LiveKit**: WebRTC infrastructure for real-time audio/video.
    - **Twilio**: For telephony integration.

## 4. Optimization Techniques

- **Optimistic VAD**: Tune VAD to be sensitive to start, but careful with "silence" timeout (usually 500ms-800ms) to detect end of turn.
- **Prompt Engineering**: Instruct LLM to be concise and conversational.
    - *System Prompt*: "You are a helpful voice assistant. Keep responses short (1-2 sentences). Do not use markdown or emojis."
- **Audio Formats**: Use OPUS or PCM (16khz/24khz/48khz) for transmission. Avoid MP3 transcoding latency.

## 5. Debugging & Metrics

- **WER (Word Error Rate)**: For STT accuracy.
- **TTFT (Time to First Token)**: LLM speed.
- **TTA (Time to Audio)**: The critical metric. Time from user silence to first AI sound.

---

**Common Pitfalls**:
- Echo cancellation issues (User hears themselves). Use WebRTC's built-in AEC.
- Hallucination in STT (Whisper transcribing silence).
- Race conditions during interruptions.
