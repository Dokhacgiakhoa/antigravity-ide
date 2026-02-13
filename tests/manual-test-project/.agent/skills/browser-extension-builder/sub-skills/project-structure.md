# Project Structure

```
extension/
├── manifest.json      # Extension config
├── popup/
│   ├── popup.html     # Popup UI
│   ├── popup.css
│   └── popup.js
├── content/
│   └── content.js     # Runs on web pages
├── background/
│   └── service-worker.js  # Background logic
├── options/
│   ├── options.html   # Settings page
│   └── options.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```