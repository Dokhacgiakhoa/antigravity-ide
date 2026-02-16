# Cross-Site Scripting (XSS)

**VULNERABLE**: Direct HTML manipulation with unsanitized user input (innerHTML, outerHTML, document.write)

**SECURE**:
```javascript
// Use textContent for plain text
element.textContent = userInput;

// React auto-escapes
<div>{userInput}</div>

// Sanitize when HTML required
import DOMPurify from 'dompurify';
element.innerHTML = DOMPurify.sanitize(userInput);
```