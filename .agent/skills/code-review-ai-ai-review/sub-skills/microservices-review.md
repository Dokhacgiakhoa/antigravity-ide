# Microservices Review

```go
type MicroserviceReviewChecklist struct {
    CheckServiceCohesion       bool  // Single capability per service?
    CheckDataOwnership         bool  // Each service owns database?
    CheckAPIVersioning         bool  // Semantic versioning?
    CheckBackwardCompatibility bool  // Breaking changes flagged?
    CheckCircuitBreakers       bool  // Resilience patterns?
    CheckIdempotency           bool  // Duplicate event handling?
}

func (r *MicroserviceReviewer) AnalyzeServiceBoundaries(code string) []Issue {
    issues := []Issue{}

    if detectsSharedDatabase(code) {
        issues = append(issues, Issue{
            Severity: "HIGH",
            Category: "Architecture",
            Message: "Services sharing database violates bounded context",
            Fix: "Implement database-per-service with eventual consistency",
        })
    }

    if hasBreakingAPIChanges(code) && !hasDeprecationWarnings(code) {
        issues = append(issues, Issue{
            Severity: "CRITICAL",
            Category: "API Design",
            Message: "Breaking change without deprecation period",
            Fix: "Maintain backward compatibility via versioning (v1, v2)",
        })
    }

    return issues
}
```

## Security Vulnerability Detection