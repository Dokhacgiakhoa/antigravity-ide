# 3. Debt Metrics Dashboard

Create measurable KPIs:

**Code Quality Metrics**
```yaml
Metrics:
  cyclomatic_complexity:
    current: 15.2
    target: 10.0
    files_above_threshold: 45
    
  code_duplication:
    percentage: 23%
    target: 5%
    duplication_hotspots:
      - src/validation: 850 lines
      - src/api/handlers: 620 lines
      
  test_coverage:
    unit: 45%
    integration: 12%
    e2e: 5%
    target: 80% / 60% / 30%
    
  dependency_health:
    outdated_major: 12
    outdated_minor: 34
    security_vulnerabilities: 7
    deprecated_apis: 15
```

**Trend Analysis**
```python
debt_trends = {
    "2024_Q1": {"score": 750, "items": 125},
    "2024_Q2": {"score": 820, "items": 142},
    "2024_Q3": {"score": 890, "items": 156},
    "growth_rate": "18% quarterly",
    "projection": "1200 by 2025_Q1 without intervention"
}
```