# Template 2: Package-Specific Pipeline

```json
// apps/web/turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "extends": ["//"],
  "pipeline": {
    "build": {
      "outputs": [".next/**", "!.next/cache/**"],
      "env": [
        "NEXT_PUBLIC_API_URL",
        "NEXT_PUBLIC_ANALYTICS_ID"
      ]
    },
    "test": {
      "outputs": ["coverage/**"],
      "inputs": [
        "src/**",
        "tests/**",
        "jest.config.js"
      ]
    }
  }
}
```