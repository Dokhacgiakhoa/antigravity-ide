# Async/Await Pattern

```javascript
// Modern async wrapper
async function getStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, resolve);
  });
}

async function setStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.local.set(data, resolve);
  });
}

// Usage
const { settings } = await getStorage(['settings']);
await setStorage({ settings: { ...settings, theme: 'dark' } });
```
```

## Anti-Patterns