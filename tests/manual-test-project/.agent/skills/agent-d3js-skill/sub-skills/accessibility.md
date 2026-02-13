# Accessibility

Make visualisations accessible:

```javascript
// Add ARIA labels
svg.attr("role", "img")
   .attr("aria-label", "Bar chart showing quarterly revenue");

// Add title and description
svg.append("title").text("Quarterly Revenue 2024");
svg.append("desc").text("Bar chart showing revenue growth across four quarters");

// Ensure sufficient colour contrast
// Provide keyboard navigation for interactive elements
// Include data table alternative
```