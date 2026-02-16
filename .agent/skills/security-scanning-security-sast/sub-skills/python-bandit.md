# Python: Bandit

```bash
# Installation & scan
pip install bandit
bandit -r . -f json -o bandit-report.json
bandit -r . -ll -ii -f json  # High/Critical only
```

**Configuration**: `.bandit`
```yaml
exclude_dirs: ['/tests/', '/venv/', '/.tox/', '/build/']
tests: [B201, B301, B302, B303, B304, B305, B307, B308, B312, B323, B324, B501, B502, B506, B602, B608]
skips: [B101]
```