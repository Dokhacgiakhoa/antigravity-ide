# REFACTOR Phase Validation

- [ ] All tests still pass after refactoring
- [ ] Code complexity reduced
- [ ] Duplication eliminated
- [ ] Performance improved or maintained
- [ ] Test readability improved

## Coverage Reports

Generate coverage reports after each phase:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

## Failure Recovery

If TDD discipline is broken:
1. **STOP** immediately
2. Identify which phase was violated
3. Rollback to last valid state
4. Resume from correct phase
5. Document lesson learned

## TDD Metrics Tracking

Track and report:
- Time in each phase (Red/Green/Refactor)
- Number of test-implementation cycles
- Coverage progression
- Refactoring frequency
- Defect escape rate

## Anti-Patterns to Avoid

- Writing implementation before tests
- Writing tests that already pass
- Skipping the refactor phase
- Writing multiple features without tests
- Modifying tests to make them pass
- Ignoring failing tests
- Writing tests after implementation

## Success Criteria

- 100% of code written test-first
- All tests pass continuously
- Coverage exceeds thresholds
- Code complexity within limits
- Zero defects in covered code
- Clear test documentation
- Fast test execution (< 5 seconds for unit tests)

## Notes

- Enforce strict RED-GREEN-REFACTOR discipline
- Each phase must be completed before moving to next
- Tests are the specification
- If a test is hard to write, the design needs improvement
- Refactoring is NOT optional
- Keep test execution fast
- Tests should be independent and isolated

TDD implementation for: $ARGUMENTS