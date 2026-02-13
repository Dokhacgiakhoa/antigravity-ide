# Workflow 3: Find Bug Introduction

```bash
# Start bisect
git bisect start
git bisect bad HEAD
git bisect good v2.1.0

# Git checks out middle commit - run tests
npm test

# If tests fail
git bisect bad

# If tests pass
git bisect good

# Git will automatically checkout next commit to test
# Repeat until bug found

# Automated version
git bisect start HEAD v2.1.0
git bisect run npm test
```