# Problem: "Command not found" after installation

**Symptoms:** Installed tool but terminal doesn't recognize it
**Solution:**
- Restart terminal or source shell config
- Check PATH environment variable
- Verify installation location
```bash
# Check PATH
echo $PATH

# Add to PATH (example)
export PATH="/usr/local/bin:$PATH"
```