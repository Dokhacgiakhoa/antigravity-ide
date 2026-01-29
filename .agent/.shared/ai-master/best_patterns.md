### 🤖 AI Engineering Master Patterns

#### 1. Zero-Shot Planning Prompt
`Role: Senior Architect. Task: Analyze the following request and output a 3-phase implementation plan emphasizing data integrity and UI aesthetics.`

#### 2. RAG (Retrieval Augmented Generation) Strategy
- **Chunking**: Overlapping fixed-size (500 tokens) with Markdown headers preservation.
- **Embedding**: Use `text-embedding-3-large` for high semantic density.
- **Retrieval**: Hybrid search (Dense + BM25) for precision.

- Always enforce JSON schema for agent-to-agent communication.
- Use Zod schemas for validation after every LLM generation.

#### 4. Standard Pattern Persistence (Active Blueprinting)
- **Rule**: After any significant implementation (FE, BE, or DB), always ask: *"Sếp có muốn lưu cấu hình cài đặt này làm mẫu tiêu chuẩn (Blueprint) cho dự án không?"*
- **Purpose**: Accumulate project-specific high-quality patterns and ensure architectural consistency.
- **Action**: If yes, document the pattern in `.agent/.shared/domain-blueprints/` or update global rules.
