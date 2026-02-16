# The Problem

**❌ Vulnerable Code:**
\`\`\`javascript
// NEVER DO THIS - SQL Injection vulnerability
app.get('/api/users/:id', async (req, res) => {
  const userId = req.params.id;
  
  // Dangerous: User input directly in query
  const query = \`SELECT * FROM users WHERE id = '\${userId}'\`;
  const user = await db.query(query);
  
  res.json(user);
});

// Attack example:
// GET /api/users/1' OR '1'='1
// Returns all users!
\`\`\`