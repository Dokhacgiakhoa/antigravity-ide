# Problem: Permission errors with npm/pip

**Symptoms:** "EACCES" or "Permission denied" errors
**Solution:**
- Don't use sudo
- Fix npm permissions or use nvm
- Use virtual environments for Python
```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
```