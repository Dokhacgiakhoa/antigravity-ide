# 5.2 Pure Functions

```javascript
// Pure: same input → same output, no side effects
function add(a, b) {
  return a + b;
}

// Impure: modifies external state
let total = 0;
function addToTotal(value) {
  total += value; // Side effect!
  return total;
}

// Impure: depends on external state
function getDiscount(price) {
  return price * globalDiscountRate; // External dependency
}
```