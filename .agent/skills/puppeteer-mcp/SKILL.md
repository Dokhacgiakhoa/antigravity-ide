---
name: puppeteer-mcp
description: Official Puppeteer Model Context Protocol Server for browser automation.
category: tools
version: 4.0.5
layer: master-skill
---

# Puppeteer MCP Skill

## 🎯 Goal
Enable the AI Agent to control a headless browser for testing, scraping, and UI verification using the official Model Context Protocol standard.

## 🛠️ Tools

### `navigate`
Navigate the browser to a specific URL.
- **url**: The URL to visit (string)

### `screenshot`
Take a screenshot of the current page or a specific element.
- **path**: Path to save the screenshot (string)
- **selector**: CSS selector to capture (optional, default: full page)

### `click`
Click an element on the page.
- **selector**: CSS selector of the element to click (string)

### `fill`
Fill an input field.
- **selector**: CSS selector of the input (string)
- **value**: Value to type (string)

### `evaluate`
Execute JavaScript in the page context.
- **script**: JavaScript code to run (string)

### `get_content`
Get the HTML content of the page.
- **selector**: CSS selector to get content from (optional, default: body)

## 🚀 Usage Rules
1.  **Headless**: Creating a session spawns a headless browser by default.
2.  **Selectors**: Use stable CSS selectors (id, data-testid) where possible.
3.  **Wait**: Ensure standard Puppeteer `waitFor` logic is considered if the page is dynamic (handled by the tool implicitly or explicitly).
