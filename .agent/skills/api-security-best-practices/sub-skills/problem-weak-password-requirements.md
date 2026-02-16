# Problem: Weak Password Requirements

**Symptoms:** Users can set weak passwords like "password123"
**Solution:**
\`\`\`javascript
const passwordSchema = z.string()
  .min(12, 'Password must be at least 12 characters')
  .regex(/[A-Z]/, 'Must contain uppercase letter')
  .regex(/[a-z]/, 'Must contain lowercase letter')
  .regex(/[0-9]/, 'Must contain number')
  .regex(/[^A-Za-z0-9]/, 'Must contain special character');

// Or use a password strength library
const zxcvbn = require('zxcvbn');
const result = zxcvbn(password);
if (result.score < 3) {
  return res.status(400).json({
    error: 'Password too weak',
    suggestions: result.feedback.suggestions
  });
}
\`\`\`