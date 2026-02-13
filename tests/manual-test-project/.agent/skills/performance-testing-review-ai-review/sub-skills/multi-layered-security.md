# Multi-Layered Security

**SAST Layer**: CodeQL, Semgrep, Bandit/Brakeman/Gosec

**AI-Enhanced Threat Modeling**:
```python
security_analysis_prompt = """
Analyze authentication code for vulnerabilities:
{code_snippet}

Check for:
1. Authentication bypass, broken access control (IDOR)
2. JWT token validation flaws
3. Session fixation/hijacking, timing attacks
4. Missing rate limiting, insecure password storage
5. Credential stuffing protection gaps

Provide: CWE identifier, CVSS score, exploit scenario, remediation code
"""

findings = claude.analyze(security_analysis_prompt, temperature=0.1)
```

**Secret Scanning**:
```bash
trufflehog git file://. --json | \
  jq '.[] | select(.Verified == true) | {
    secret_type: .DetectorName,
    file: .SourceMetadata.Data.Filename,
    severity: "CRITICAL"
  }'
```