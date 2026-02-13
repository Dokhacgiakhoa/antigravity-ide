# 3. The "Simulator" Pattern (User Journey)

Construct multi-step flows:
- **Login Flow**: Navigate -> Fill Login -> Click Submit -> Verify Dashboard URL.
- **Checkout Flow**: Add to Cart -> View Cart -> Checkout -> Payment Mock.

---

## 📝 Best Practices

- **Selectors**: Always favor `data-testid` > `id` > `aria-label` > `class`.
- **Waits**: Avoid hard `sleep()`. Use `waitForSelector` or `waitForLoadState`.
- **State**: Ensure a clean state (cookies/localstorage) before critical tests.
- **Evidence**: Always capture screenshots on failure.

---

## 🤖 System Instruction (Prompt)

```text
When asked to "Test this page":
1. Use `playwright_navigate` to open the URL.
2. Use `playwright_screenshot` to "see" the UI.
3. Propose a Test Plan (Happy Path + Edge Cases).
4. Execute steps sequentially using MCP tools.
5. Report results with pass/fail status.
```