# 2.2 Issue Analysis Prompt

```typescript
const TRIAGE_PROMPT = `
Analyze this GitHub issue and classify it:

Title: {title}
Body: {body}

Return JSON with:
{
  "type": "bug" | "feature" | "question" | "docs" | "other",
  "severity": "low" | "medium" | "high" | "critical",
  "area": "frontend" | "backend" | "api" | "docs" | "ci" | "other",
  "summary": "one-line summary",
  "hasReproSteps": boolean,
  "isFirstContribution": boolean,
  "suggestedLabels": ["label1", "label2"],
  "suggestedAssignees": ["username"] // based on area expertise
}
`;
```