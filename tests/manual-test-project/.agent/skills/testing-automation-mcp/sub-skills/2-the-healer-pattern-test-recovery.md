# 2. The "Healer" Pattern (Test Recovery)

If a test fails:
1.  Capture a screenshot (`playwright_screenshot`).
2.  Read the error log.
3.  Compare the expected selector with the current DOM.
4.  Update the selector in the test file.