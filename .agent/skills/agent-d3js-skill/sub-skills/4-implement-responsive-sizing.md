# 4. Implement responsive sizing

Make visualisations responsive to container size:

```javascript
function setupResponsiveChart(containerId, data) {
  const container = document.getElementById(containerId);
  const svg = d3.select(`#${containerId}`).append('svg');

  function updateChart() {
    const { width, height } = container.getBoundingClientRect();
    svg.attr('width', width).attr('height', height);

    // Redraw visualisation with new dimensions
    drawChart(data, svg, width, height);
  }

  // Update on initial load
  updateChart();

  // Update on window resize
  window.addEventListener('resize', updateChart);

  // Return cleanup function
  return () => window.removeEventListener('resize', updateChart);
}

// Usage:
// const cleanup = setupResponsiveChart('chart-container', myData);
// cleanup(); // Call when component unmounts or element removed
```

Or use ResizeObserver for more direct container monitoring:

```javascript
function setupResponsiveChartWithObserver(svgElement, data) {
  const observer = new ResizeObserver(() => {
    const { width, height } = svgElement.getBoundingClientRect();
    d3.select(svgElement)
      .attr('width', width)
      .attr('height', height);

    // Redraw visualisation
    drawChart(data, d3.select(svgElement), width, height);
  });

  observer.observe(svgElement.parentElement);
  return () => observer.disconnect();
}
```

## Common visualisation patterns