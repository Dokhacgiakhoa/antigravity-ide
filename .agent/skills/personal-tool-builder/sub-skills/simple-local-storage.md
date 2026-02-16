# Simple Local Storage

```javascript
// For simple tools: JSON file storage
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

const DATA_DIR = join(homedir(), '.mytool');
const DATA_FILE = join(DATA_DIR, 'data.json');

function loadData() {
  if (!existsSync(DATA_FILE)) return { items: [] };
  return JSON.parse(readFileSync(DATA_FILE, 'utf8'));
}

function saveData(data) {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR);
  writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}
```