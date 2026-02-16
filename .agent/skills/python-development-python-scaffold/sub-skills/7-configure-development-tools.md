# 7. Configure Development Tools

**.env.example**:
```env
# Application
PROJECT_NAME="Project Name"
VERSION="0.1.0"
DEBUG=True

# API
API_V1_PREFIX="/api/v1"
ALLOWED_ORIGINS=["http://localhost:3000"]

# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/dbname"

# Security
SECRET_KEY="your-secret-key-here"
```

**Makefile**:
```makefile
.PHONY: install dev test lint format clean

install:
	uv sync

dev:
	uv run uvicorn src.project_name.main:app --reload

test:
	uv run pytest -v

lint:
	uv run ruff check .

format:
	uv run ruff format .

clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache .ruff_cache
```

## Output Format

1. **Project Structure**: Complete directory tree with all necessary files
2. **Configuration**: pyproject.toml with dependencies and tool settings
3. **Entry Point**: Main application file (main.py, cli.py, etc.)
4. **Tests**: Test structure with pytest configuration
5. **Documentation**: README with setup and usage instructions
6. **Development Tools**: Makefile, .env.example, .gitignore

Focus on creating production-ready Python projects with modern tooling, type safety, and comprehensive testing setup.