# Template 5: Filtering and Scoping

```bash
# Build specific package
turbo build --filter=@myorg/web

# Build package and its dependencies
turbo build --filter=@myorg/web...

# Build package and its dependents
turbo build --filter=...@myorg/ui

# Build changed packages since main
turbo build --filter='...[origin/main]'

# Build packages in directory
turbo build --filter='./apps/*'

# Combine filters
turbo build --filter=@myorg/web --filter=@myorg/docs

# Exclude package
turbo build --filter='!@myorg/docs'

# Include dependencies of changed
turbo build --filter='...[HEAD^1]...'
```