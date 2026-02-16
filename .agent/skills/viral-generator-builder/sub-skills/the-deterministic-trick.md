# The Deterministic Trick

Same input = same output = shareable!
```javascript
function generateName(input) {
  const hash = simpleHash(input.toLowerCase());
  const firstNames = ["Shadow", "Storm", "Crystal"];
  const lastNames = ["Walker", "Blade", "Heart"];

  return `${firstNames[hash % firstNames.length]} ${lastNames[(hash >> 8) % lastNames.length]}`;
}
```