# ❌ Missing Expected Outputs

**Why bad**: Agent doesn't know done criteria.
Inconsistent outputs.
Hard to chain tasks.

**Instead**: Always specify expected_output:
expected_output: |
  A JSON object with:
  - summary: string (100 words max)
  - key_points: list of strings
  - confidence: float 0-1