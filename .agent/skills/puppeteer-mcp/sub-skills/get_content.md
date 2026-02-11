# `get_content`

Get the HTML content of the page.
- **selector**: CSS selector to get content from (optional, default: body)

## 🚀 Usage Rules
1.  **Headless**: Creating a session spawns a headless browser by default.
2.  **Selectors**: Use stable CSS selectors (id, data-testid) where possible.
3.  **Wait**: Ensure standard Puppeteer `waitFor` logic is considered if the page is dynamic (handled by the tool implicitly or explicitly).