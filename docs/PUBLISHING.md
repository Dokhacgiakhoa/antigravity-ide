# Publishing to npm

## ✅ Published Successfully!

**Package:** `antigravity-ide`  
**Version:** `4.2.1`  
**Published:** 2026-02-16  
**Link:** https://www.npmjs.com/package/antigravity-ide

---

## Pre-publish Checklist

All steps completed:

- [x] CLI tested locally with `npm link`
- [x] Test project created successfully
- [x] Version number updated in `package.json`
- [x] README.md complete with installation instructions
- [x] LICENSE file present
- [x] All dependencies listed correctly
- [x] Successfully published to npm

## Publishing Steps

### 1. Login to npm

```bash
npm login
```

Enter your npm credentials when prompted.

### 2. Test the package

```bash
# Dry run to see what will be published
npm publish --dry-run
```

Review the output to ensure only necessary files are included.

### 3. Publish

```bash
# For first-time public package
npm publish --access public

# For subsequent updates
npm publish
```

### 4. Verify publication

Visit: `https://www.npmjs.com/package/antigravity-ide`

### 5. Test installation

```bash
# In a different directory
npx antigravity-ide@latest
```

## Version Management

Update version before each publish:

```bash
# Patch (bug fixes): 3.5.5 → 3.5.6
npm version patch

# Minor (new features): 3.5.0 → 3.6.0
npm version minor

# Major (breaking changes): 3.0.0 → 4.0.0
npm version major
```

## Unpublishing (Emergency Only)

If you need to remove a version within 72 hours:

```bash
npm unpublish antigravity-ide@3.5.5
```

⚠️ **Warning**: Unpublishing is discouraged. Use deprecation instead:

```bash
npm deprecate antigravity-ide@3.5.5 "This version has issues, please upgrade"
```

## Troubleshooting

**"Package name taken"**
- The name `antigravity-ide` is yours.
- If creating a new one, try: `@dokhacgiakhoa/antigravity-ide` (scoped package)

## Post-Publish Verification

After successful publish, verify the package:

### 1. Check npm Registry

Visit: https://www.npmjs.com/package/antigravity-ide

You should see:
- Package name: `antigravity-ide`
- Version: `3.5.5`
- Published date
- README preview
- Download stats (will start from 0)

### 2. Test Installation

In a different directory (NOT the project directory):

```bash
# Test npx (recommended way)
npx antigravity-ide

# Test global installation
npm install -g antigravity-ide
antigravity-ide --version
antigravity-ide
```

### 3. Monitor Package

- **Download stats**: https://www.npmjs.com/package/antigravity-ide
- **Package health**: https://snyk.io/advisor/npm-package/antigravity-ide

---

## Next Version Publishing

When you want to publish updates:

1. Make your changes
2. Update   "version": "3.5.11"
   ```bash
   npm version patch  # 3.0.0 → 3.0.1
   # or
   npm version minor  # 3.0.0 → 3.1.0
   # or
   npm version major  # 3.0.0 → 4.0.0
   ```
3. Publish:
   ```bash
   npm publish
   ```

## Package Maintenance

### Update README on npm

After editing README.md:
```bash
npm version patch
npm publish
```

### Deprecate a Version

If a version has issues:
```bash
npm deprecate antigravity-ide@3.0.0 "Please upgrade to 3.0.1 - fixes critical bug"
```

### Add Collaborators

```bash
npm owner add <username> antigravity-ide
```

---

**Congratulations! Your package is now live on npm! 🎉**
