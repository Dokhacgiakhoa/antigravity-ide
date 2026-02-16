# Troubleshooting

**Problem:** "node: command not found"
**Solution:** Restart your terminal or run \`source ~/.bashrc\` (Linux) or \`source ~/.zshrc\` (macOS)

**Problem:** "Permission denied" errors
**Solution:** Don't use sudo with npm. Fix permissions:
\`\`\`bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
\`\`\`
```