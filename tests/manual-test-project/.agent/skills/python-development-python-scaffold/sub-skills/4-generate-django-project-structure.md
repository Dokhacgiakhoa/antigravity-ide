# 4. Generate Django Project Structure

```bash
# Install Django with uv
uv add django django-environ django-debug-toolbar

# Create Django project
django-admin startproject config .
python manage.py startapp core
```

**pyproject.toml for Django**:
```toml
[project]
name = "django-project"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = [
    "django>=5.0.0",
    "django-environ>=0.11.0",
    "psycopg[binary]>=3.1.0",
    "gunicorn>=21.2.0",
]

[project.optional-dependencies]
dev = [
    "django-debug-toolbar>=4.3.0",
    "pytest-django>=4.8.0",
    "ruff>=0.2.0",
]
```