# Template 4: Self-Hosted Remote Cache

```typescript
// Custom remote cache server (Express)
import express from 'express';
import { createReadStream, createWriteStream } from 'fs';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const app = express();
const CACHE_DIR = './cache';

// Get artifact
app.get('/v8/artifacts/:hash', async (req, res) => {
  const { hash } = req.params;
  const team = req.query.teamId || 'default';
  const filePath = join(CACHE_DIR, team, hash);

  try {
    const stream = createReadStream(filePath);
    stream.pipe(res);
  } catch {
    res.status(404).send('Not found');
  }
});

// Put artifact
app.put('/v8/artifacts/:hash', async (req, res) => {
  const { hash } = req.params;
  const team = req.query.teamId || 'default';
  const dir = join(CACHE_DIR, team);
  const filePath = join(dir, hash);

  await mkdir(dir, { recursive: true });

  const stream = createWriteStream(filePath);
  req.pipe(stream);

  stream.on('finish', () => {
    res.json({ urls: [`${req.protocol}://${req.get('host')}/v8/artifacts/${hash}`] });
  });
});

// Check artifact exists
app.head('/v8/artifacts/:hash', async (req, res) => {
  const { hash } = req.params;
  const team = req.query.teamId || 'default';
  const filePath = join(CACHE_DIR, team, hash);

  try {
    await fs.access(filePath);
    res.status(200).end();
  } catch {
    res.status(404).end();
  }
});

app.listen(3000);
```

```json
// turbo.json for self-hosted cache
{
  "remoteCache": {
    "signature": false
  }
}
```

```bash
# Use self-hosted cache
turbo build --api="http://localhost:3000" --token="my-token" --team="my-team"
```