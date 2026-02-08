# ✅ Prompt Audit Checklist

> check_type: manual_audit
> priority: high

Use this checklist to verify the quality of a System Prompt or Complex Task Prompt.

## 1. Structure & Context
- [ ] **Role Definition**: Does the prompt clearly state "You are [Role]"?
- [ ] **Context Injection**: Is necessary context (File path, User intent) included?
- [ ] **Output Format**: Is the expected output format (JSON, Markdown, Code only) explicitly defined?

## 2. Reasoning & Logic
- [ ] **Chain of Thought**: Does the prompt ask the AI to "Think step-by-step"?
- [ ] **Few-Shot Examples**: Are there at least 2 snippets of "Input -> Output" examples?
- [ ] **Edge Cases**: Does it instruct how to handle missing data or errors?

## 3. Safety & Constraints
- [ ] **No Hallucination**: Is there a directive to "Admit if you don't know"?
- [ ] **Tone**: Is the specific tone (Professional, Friendly, Technical) requested?
