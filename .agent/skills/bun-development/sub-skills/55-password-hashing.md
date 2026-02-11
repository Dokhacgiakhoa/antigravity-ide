# 5.5 Password Hashing

```typescript
// Hash password
const password = "super-secret";
const hash = await Bun.password.hash(password);

// Verify password
const isValid = await Bun.password.verify(password, hash);
console.log(isValid); // true

// With algorithm options
const bcryptHash = await Bun.password.hash(password, {
  algorithm: "bcrypt",
  cost: 12,
});
```

---

## 6. Testing