# 4. Verify Test Failure

- Use Task tool with subagent_type="tdd-workflows::code-reviewer"
- Prompt: "Verify that all tests for: $ARGUMENTS are failing correctly. Ensure failures are for the right reasons (missing implementation, not test errors). Confirm no false positives."
- Output: Test failure verification report
- **GATE**: Do not proceed until all tests fail appropriately

## Phase 3: GREEN - Make Tests Pass