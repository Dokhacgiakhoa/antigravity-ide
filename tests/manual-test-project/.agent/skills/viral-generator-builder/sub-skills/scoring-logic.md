# Scoring Logic

```javascript
// Simple weighted scoring
const scores = { typeA: 0, typeB: 0, typeC: 0, typeD: 0 };

answers.forEach(answer => {
  scores[answer.type] += answer.weight;
});

const result = Object.entries(scores)
  .sort((a, b) => b[1] - a[1])[0][0];
```