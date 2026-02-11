# SQL Injection

**VULNERABLE**: String formatting/concatenation with user input in SQL queries

**SECURE**:
```python
# Parameterized queries
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
User.objects.filter(id=user_id)  # ORM
```