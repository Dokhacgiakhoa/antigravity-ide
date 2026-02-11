# 2. Impact Assessment

Calculate the real cost of each debt item:

**Development Velocity Impact**
```
Debt Item: Duplicate user validation logic
Locations: 5 files
Time Impact: 
- 2 hours per bug fix (must fix in 5 places)
- 4 hours per feature change
- Monthly impact: ~20 hours
Annual Cost: 240 hours × $150/hour = $36,000
```

**Quality Impact**
```
Debt Item: No integration tests for payment flow
Bug Rate: 3 production bugs/month
Average Bug Cost:
- Investigation: 4 hours
- Fix: 2 hours  
- Testing: 2 hours
- Deployment: 1 hour
Monthly Cost: 3 bugs × 9 hours × $150 = $4,050
Annual Cost: $48,600
```

**Risk Assessment**
- **Critical**: Security vulnerabilities, data loss risk
- **High**: Performance degradation, frequent outages
- **Medium**: Developer frustration, slow feature delivery
- **Low**: Code style issues, minor inefficiencies