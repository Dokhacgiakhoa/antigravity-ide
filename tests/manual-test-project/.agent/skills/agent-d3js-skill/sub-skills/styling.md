# Styling

Use consistent, professional styling:

```javascript
// Define colour palettes upfront
const colours = {
  primary: '#4A90E2',
  secondary: '#7B68EE',
  background: '#F5F7FA',
  text: '#333333',
  gridLines: '#E0E0E0'
};

// Apply consistent typography
svg.selectAll("text")
  .style("font-family", "Inter, sans-serif")
  .style("font-size", "12px");

// Use subtle grid lines
g.selectAll(".tick line")
  .attr("stroke", colours.gridLines)
  .attr("stroke-dasharray", "2,2");
```

## Common issues and solutions

**Issue**: Axes not appearing
- Ensure scales have valid domains (check for NaN values)
- Verify axis is appended to correct group
- Check transform translations are correct

**Issue**: Transitions not working
- Call `.transition()` before attribute changes
- Ensure elements have unique keys for proper data binding
- Check that useEffect dependencies include all changing data

**Issue**: Responsive sizing not working
- Use ResizeObserver or window resize listener
- Update dimensions in state to trigger re-render
- Ensure SVG has width/height attributes or viewBox

**Issue**: Performance problems
- Limit number of DOM elements (consider canvas for >1000 items)
- Debounce resize handlers
- Use `.join()` instead of separate enter/update/exit selections
- Avoid unnecessary re-renders by checking dependencies

## Resources