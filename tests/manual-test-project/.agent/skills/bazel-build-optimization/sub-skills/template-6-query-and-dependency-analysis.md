# Template 6: Query and Dependency Analysis

```bash
# Find all dependencies of a target
bazel query "deps(//apps/web:web)"

# Find reverse dependencies (what depends on this)
bazel query "rdeps(//..., //libs/utils:utils)"

# Find all targets in a package
bazel query "//libs/..."

# Find changed targets since commit
bazel query "rdeps(//..., set($(git diff --name-only HEAD~1 | sed 's/.*/"&"/' | tr '\n' ' ')))"

# Generate dependency graph
bazel query "deps(//apps/web:web)" --output=graph | dot -Tpng > deps.png

# Find all test targets
bazel query "kind('.*_test', //...)"

# Find targets with specific tag
bazel query "attr(tags, 'integration', //...)"

# Compute build graph size
bazel query "deps(//...)" --output=package | wc -l
```