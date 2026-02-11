# 🤖 AI Infrastructure & Memory Stack

Để xây dựng hệ thống AI mạnh mẽ, cần kết hợp các lớp lưu trữ sau:

### 1. Vector Database (Long-term Memory)
- **Qdrant / Pinecone**: Lưu trữ Embeddings cho RAG.
- **Milvus**: Cho quy mô cực lớn (Billions of vectors).

### 2. Cache Layer
- **Redis (GPTCache)**: Lưu trữ các câu trả lời tương tự để giảm chi phí Token và tăng tốc độ phản hồi.

### 3. State Management (Short-term Memory)
- **PostgreSQL (pgvector)**: Lưu trữ lịch sử hội thoại (Chat History) và Metadata của tài liệu.

### 4. Evaluation Tools
- **RAGAS / Arize Phoenix**: Đo lường Faithfulness và Relevance.
