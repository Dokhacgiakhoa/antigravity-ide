# Click interactions

```javascript
circles
  .on("click", function(event, d) {
    // Handle click (dispatch event, update app state, etc.)
    console.log("Clicked:", d);

    // Visual feedback
    d3.selectAll("circle").attr("fill", "steelblue");
    d3.select(this).attr("fill", "orange");

    // Optional: dispatch custom event for your framework/app to listen to
    // window.dispatchEvent(new CustomEvent('chartClick', { detail: d }));
  });
```

## Transitions and animations

Add smooth transitions to visual changes:

```javascript
// Basic transition
circles
  .transition()
  .duration(750)
  .attr("r", 10);

// Chained transitions
circles
  .transition()
  .duration(500)
  .attr("fill", "orange")
  .transition()
  .duration(500)
  .attr("r", 15);

// Staggered transitions
circles
  .transition()
  .delay((d, i) => i * 50)
  .duration(500)
  .attr("cy", d => yScale(d.value));

// Custom easing
circles
  .transition()
  .duration(1000)
  .ease(d3.easeBounceOut)
  .attr("r", 10);
```

## Scales reference