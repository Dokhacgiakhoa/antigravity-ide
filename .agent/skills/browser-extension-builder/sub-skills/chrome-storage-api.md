# Chrome Storage API

```javascript
// Save data
chrome.storage.local.set({ key: 'value' }, () => {
  console.log('Saved');
});

// Get data
chrome.storage.local.get(['key'], (result) => {
  console.log(result.key);
});

// Sync storage (syncs across devices)
chrome.storage.sync.set({ setting: true });

// Watch for changes
chrome.storage.onChanged.addListener((changes, area) => {
  if (changes.key) {
    console.log('key changed:', changes.key.newValue);
  }
});
```