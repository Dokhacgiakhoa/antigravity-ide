# Initial Triage

1. Parse diff to determine modified files and affected components
2. Match file types to optimal static analysis tools
3. Scale analysis based on PR size (superficial >1000 lines, deep <200 lines)
4. Classify change type: feature, bug fix, refactoring, or breaking change