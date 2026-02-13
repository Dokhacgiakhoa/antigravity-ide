# Severity Assessment

- Lower severity than XSS (no script execution)
- Higher impact when combined with phishing
- Consider defacement/reputation damage
- Evaluate credential theft potential

## Troubleshooting

| Issue | Solutions |
|-------|-----------|
| HTML not rendering | Check if output HTML-encoded; try encoding variations; verify HTML context |
| Payload stripped | Use encoding variations; try tag splitting; test null bytes; nested tags |
| XSS not working (HTML only) | JS filtered but HTML allowed; leverage phishing forms, meta refresh redirects |