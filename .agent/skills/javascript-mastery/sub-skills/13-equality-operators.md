# 1.3 Equality Operators

```javascript
// == (loose equality) - coerces types
null == undefined; // true
"1" == 1; // true

// === (strict equality) - no coercion
null === undefined; // false
"1" === 1; // false

// Object.is() - handles edge cases
Object.is(NaN, NaN); // true (NaN === NaN is false!)
Object.is(-0, 0); // false (0 === -0 is true!)
```

**Rule**: Always use `===` unless you have a specific reason not to.

---

## 2. Scope & Closures