# 5.1 Higher-Order Functions

Functions that take or return functions:

```javascript
// Takes a function
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2); // [2, 4, 6]

// Returns a function
function multiply(a) {
  return function (b) {
    return a * b;
  };
}
const double = multiply(2);
double(5); // 10
```