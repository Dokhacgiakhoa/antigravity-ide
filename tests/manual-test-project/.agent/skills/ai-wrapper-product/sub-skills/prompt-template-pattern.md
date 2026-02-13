# Prompt Template Pattern

```javascript
const promptTemplates = {
  emailWriter: {
    system: `You are an expert email writer.
      Write professional, concise emails.
      Match the requested tone.
      Never include placeholder text.`,
    user: (input) => `Write an email:
      Purpose: ${input.purpose}
      Recipient: ${input.recipient}
      Tone: ${input.tone}
      Key points: ${input.points.join(', ')}
      Length: ${input.length} sentences`,
  },
};
```