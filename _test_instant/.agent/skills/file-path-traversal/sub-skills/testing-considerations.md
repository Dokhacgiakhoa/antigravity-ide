# Testing Considerations

- Respect authorized scope
- Avoid accessing genuinely sensitive data
- Document all successful access

## Troubleshooting

| Problem | Solutions |
|---------|-----------|
| No response difference | Try encoding, blind traversal, different files |
| Payload blocked | Use encoding variants, nested sequences, case variations |
| Cannot escalate to RCE | Check logs, PHP wrappers, file upload, session poisoning |