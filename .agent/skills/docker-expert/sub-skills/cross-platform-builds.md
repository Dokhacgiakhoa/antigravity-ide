# Cross-Platform Builds

```bash
# Multi-architecture builds
docker buildx create --name multiarch-builder --use
docker buildx build --platform linux/amd64,linux/arm64 \
  -t myapp:latest --push .
```