# 4.3 Promises

```javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // or: reject(new Error("Failed!"));
  }, 1000);
});

// Consuming Promises
promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Done"));

// Promise combinators
Promise.all([p1, p2, p3]); // All must succeed
Promise.allSettled([p1, p2]); // Wait for all, get status
Promise.race([p1, p2]); // First to settle
Promise.any([p1, p2]); // First to succeed
```