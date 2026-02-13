# Cloud Run Service Pattern

Containerized web service on Cloud Run

**When to use**: ['Web applications and APIs', 'Need any runtime or library', 'Complex services with multiple endpoints', 'Stateless containerized workloads']

```javascript
```dockerfile
# Dockerfile - Multi-stage build for smaller image
FROM node:20-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-slim
WORKDIR /app

# Copy only production dependencies
COPY --from=builder /app/node_modules ./node_modules
COPY src ./src
COPY package.json ./

# Cloud Run uses PORT env variable
ENV PORT=8080
EXPOSE 8080

# Run as non-root user
USER node

CMD ["node", "src/index.js"]
```

```javascript
// src/index.js
const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// API routes
app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await getItem(req.params.id);
    res.json(item);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
```

```yaml
# cloudbuild.yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-service:$COMMIT_SHA', '.']

  # Push the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/my-service:$COMMIT_SHA']

  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'my-service'
      - '--image=gcr.io/$PROJECT_ID/my-service:$COMMIT_SHA'
      - '--region=us-central1'
      - '--platform=managed'
      - '--allow-unauthenticated'
      - '--memory=512Mi'
      - '--cpu=1'
      - '--min-instances=1'
      - '--max-instances=100'
     
```