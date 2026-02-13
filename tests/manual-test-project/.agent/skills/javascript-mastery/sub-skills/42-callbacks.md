# 4.2 Callbacks

```javascript
// Callback pattern
function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: "result" });
  }, 1000);
}

// Error-first convention
fetchData((error, result) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(result);
});

// Callback hell (avoid this!)
getData((data) => {
  processData(data, (processed) => {
    saveData(processed, (saved) => {
      notify(saved, () => {
        // 😱 Pyramid of doom
      });
    });
  });
});
```