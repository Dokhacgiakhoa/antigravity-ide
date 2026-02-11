# 7.1 Destructuring

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Object destructuring
const { name, age, city = "Unknown" } = { name: "Alice", age: 25 };
// name = "Alice", age = 25, city = "Unknown"

// Renaming
const { name: userName } = { name: "Bob" };
// userName = "Bob"

// Nested
const {
  address: { street },
} = { address: { street: "123 Main" } };
```