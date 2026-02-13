# Codemod for Automated Fixes

```bash
# React upgrade codemods
npx react-codeshift <transform> <path>

# Example: Update lifecycle methods
npx react-codeshift \
  --parser tsx \
  --transform react-codeshift/transforms/rename-unsafe-lifecycles.js \
  src/
```