# Template 3: Remote Caching with Vercel

```bash
# Login to Vercel
npx turbo login

# Link to Vercel project
npx turbo link

# Run with remote cache
turbo build --remote-only

# CI environment variables
TURBO_TOKEN=your-token
TURBO_TEAM=your-team
```

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

env:
  TURBO_TOKEN: ${{ secrets.TURBO_TOKEN }}
  TURBO_TEAM: ${{ vars.TURBO_TEAM }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 4.1.0-fractal
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npx turbo build --filter='...[origin/main]'

      - name: Test
        run: npx turbo test --filter='...[origin/main]'
```