# 5. Data Quality Framework

**Great Expectations**
- Table-level: row count, column count
- Column-level: uniqueness, nullability, type validation, value sets, ranges
- Checkpoints for validation execution
- Data docs for documentation
- Failure notifications

**dbt Tests**
- Schema tests in YAML
- Custom data quality tests with dbt-expectations
- Test results tracked in metadata