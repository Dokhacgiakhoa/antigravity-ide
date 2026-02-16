# Ordinal scales

```javascript
// Band scale (for bar charts)
const bandScale = d3.scaleBand()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 400])
  .padding(0.1);

// Point scale (for line/scatter categories)
const pointScale = d3.scalePoint()
  .domain(['A', 'B', 'C', 'D'])
  .range([0, 400]);

// Ordinal scale (for colours)
const colourScale = d3.scaleOrdinal(d3.schemeCategory10);
```