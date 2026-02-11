# 5.3 map, filter, reduce

```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// map: transform each element
const names = users.map((u) => u.name);
// ["Alice", "Bob", "Charlie"]

// filter: keep elements matching condition
const adults = users.filter((u) => u.age >= 30);
// [{ name: "Bob", ... }, { name: "Charlie", ... }]

// reduce: accumulate into single value
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
// 90

// Chaining
const result = users
  .filter((u) => u.age >= 30)
  .map((u) => u.name)
  .join(", ");
// "Bob, Charlie"
```