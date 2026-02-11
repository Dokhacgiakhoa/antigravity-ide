# Problem: Database connection fails

**Symptoms:** "Connection refused" or "Authentication failed"
**Solution:**
- Verify database is running
- Check connection string
- Verify credentials
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Test connection
psql -h localhost -U postgres -d mydb
```

## Setup Script Template

Create a `setup.sh` script to automate setup:

```bash
#!/bin/bash

echo "🚀 Setting up development environment..."

# Check prerequisites
command -v node >/dev/null 2>&1 || { echo "❌ Node.js not installed"; exit 1; }
command -v git >/dev/null 2>&1 || { echo "❌ Git not installed"; exit 1; }

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your configuration"
fi

# Run database migrations
echo "🗄️  Running database migrations..."
npm run migrate

# Verify setup
echo "🔍 Verifying setup..."
npm run test:setup

echo "✅ Setup complete! Run 'npm run dev' to start"
```

## Related Skills

- `@brainstorming` - Plan environment requirements before setup
- `@systematic-debugging` - Debug environment issues
- `@doc-coauthoring` - Create setup documentation
- `@git-pushing` - Set up Git configuration

## Additional Resources

- [Node.js Installation Guide](https://nodejs.org/en/download/)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
- [Docker Documentation](https://docs.docker.com/get-started/)
- [Homebrew (macOS)](https://brew.sh/)
- [Chocolatey (Windows)](https://chocolatey.org/)
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [pyenv (Python Version Manager)](https://github.com/pyenv/pyenv)

---

**Pro Tip:** Create a `setup.sh` or `setup.ps1` script to automate the entire setup process. Test it on a clean system to ensure it works!