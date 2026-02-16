# Lock File Management

```bash
# npm
npm install --package-lock-only  # Update lock file only
npm ci  # Clean install from lock file

# yarn
yarn install --frozen-lockfile  # CI mode
yarn upgrade-interactive  # Interactive upgrades
```