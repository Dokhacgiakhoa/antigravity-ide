# 3.2 A/B Testing Framework

Compare original vs improved agent:

```
Use: parallel-test-runner
Config:
  - Agent A: Original version
  - Agent B: Improved version
  - Test set: 100 representative tasks
  - Metrics: Success rate, speed, token usage
  - Evaluation: Blind human review + automated scoring
```

Statistical significance testing:

- Minimum sample size: 100 tasks per variant
- Confidence level: 95% (p < 0.05)
- Effect size calculation (Cohen's d)
- Power analysis for future tests