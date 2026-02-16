# Template 1: Standard ADR (MADR Format)

```markdown
# ADR-0001: Use PostgreSQL as Primary Database

## Status

Accepted

## Context

We need to select a primary database for our new e-commerce platform. The system
will handle:
- ~10,000 concurrent users
- Complex product catalog with hierarchical categories
- Transaction processing for orders and payments
- Full-text search for products
- Geospatial queries for store locator

The team has experience with MySQL, PostgreSQL, and MongoDB. We need ACID
compliance for financial transactions.

## Decision Drivers

* **Must have ACID compliance** for payment processing
* **Must support complex queries** for reporting
* **Should support full-text search** to reduce infrastructure complexity
* **Should have good JSON support** for flexible product attributes
* **Team familiarity** reduces onboarding time

## Considered Options