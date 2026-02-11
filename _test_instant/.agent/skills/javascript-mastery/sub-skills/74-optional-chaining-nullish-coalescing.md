# 7.4 Optional Chaining & Nullish Coalescing

```javascript
// Optional chaining (?.)
const user = { address: { city: "NYC" } };
const city = user?.address?.city; // "NYC"
const zip = user?.address?.zip; // undefined (no error)
const fn = user?.getName?.(); // undefined if no method

// Nullish coalescing (??)
const value = null ?? "default"; // "default"
const zero = 0 ?? "default"; // 0 (not nullish!)
const empty = "" ?? "default"; // "" (not nullish!)

// Compare with ||
const value2 = 0 || "default"; // "default" (0 is falsy)
```

---

## Quick Reference Card

| Concept        | Key Point                         |
| :------------- | :-------------------------------- |
| `==` vs `===`  | Always use `===`                  |
| `var` vs `let` | Prefer `let`/`const`              |
| Closures       | Function + lexical scope          |
| `this`         | Depends on how function is called |
| Event loop     | Microtasks before macrotasks      |
| Pure functions | Same input → same output          |
| Prototypes     | `__proto__` → prototype chain     |
| `??` vs `\|\|` | `??` only checks null/undefined   |

---

## Resources

- [33 JS Concepts](https://github.com/leonardomso/33-js-concepts)
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)