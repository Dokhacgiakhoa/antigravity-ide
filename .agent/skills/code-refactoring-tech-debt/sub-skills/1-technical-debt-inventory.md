# 1. Technical Debt Inventory

Conduct a thorough scan for all types of technical debt:

**Code Debt**
- **Duplicated Code**
  - Exact duplicates (copy-paste)
  - Similar logic patterns
  - Repeated business rules
  - Quantify: Lines duplicated, locations
  
- **Complex Code**
  - High cyclomatic complexity (>10)
  - Deeply nested conditionals (>3 levels)
  - Long methods (>50 lines)
  - God classes (>500 lines, >20 methods)
  - Quantify: Complexity scores, hotspots

- **Poor Structure**
  - Circular dependencies
  - Inappropriate intimacy between classes
  - Feature envy (methods using other class data)
  - Shotgun surgery patterns
  - Quantify: Coupling metrics, change frequency

**Architecture Debt**
- **Design Flaws**
  - Missing abstractions
  - Leaky abstractions
  - Violated architectural boundaries
  - Monolithic components
  - Quantify: Component size, dependency violations

- **Technology Debt**
  - Outdated frameworks/libraries
  - Deprecated API usage
  - Legacy patterns (e.g., callbacks vs promises)
  - Unsupported dependencies
  - Quantify: Version lag, security vulnerabilities

**Testing Debt**
- **Coverage Gaps**
  - Untested code paths
  - Missing edge cases
  - No integration tests
  - Lack of performance tests
  - Quantify: Coverage %, critical paths untested

- **Test Quality**
  - Brittle tests (environment-dependent)
  - Slow test suites
  - Flaky tests
  - No test documentation
  - Quantify: Test runtime, failure rate

**Documentation Debt**
- **Missing Documentation**
  - No API documentation
  - Undocumented complex logic
  - Missing architecture diagrams
  - No onboarding guides
  - Quantify: Undocumented public APIs

**Infrastructure Debt**
- **Deployment Issues**
  - Manual deployment steps
  - No rollback procedures
  - Missing monitoring
  - No performance baselines
  - Quantify: Deployment time, failure rate