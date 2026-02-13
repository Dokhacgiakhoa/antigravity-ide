# 1. The "Observer" Pattern (Test Creation)

Before writing a test, the Agent should:
1.  Navigate to the live page.
2.  Inspect the DOM using `playwright_evaluate`.
3.  Identify stable selectors (data-testid preferred).
4.  Generate the test code based on *actual* observed structure.