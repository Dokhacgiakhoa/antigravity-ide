# Quantitative scales

```javascript
// Linear scale
const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 500]);

// Log scale (for exponential data)
const logScale = d3.scaleLog()
  .domain([1, 1000])
  .range([0, 500]);

// Power scale
const powScale = d3.scalePow()
  .exponent(2)
  .domain([0, 100])
  .range([0, 500]);

// Time scale
const timeScale = d3.scaleTime()
  .domain([new Date(2020, 0, 1), new Date(2024, 0, 1)])
  .range([0, 500]);
```