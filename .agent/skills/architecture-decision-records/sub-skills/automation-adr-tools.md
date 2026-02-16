# Automation (adr-tools)

```bash
# Install adr-tools
brew install adr-tools

# Initialize ADR directory
adr init docs/adr

# Create new ADR
adr new "Use PostgreSQL as Primary Database"

# Supersede an ADR
adr new -s 3 "Deprecate MongoDB in Favor of PostgreSQL"

# Generate table of contents
adr generate toc > docs/adr/README.md

# Link related ADRs
adr link 2 "Complements" 1 "Is complemented by"
```

## Review Process

```markdown
## ADR Review Checklist