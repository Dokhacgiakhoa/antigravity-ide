# 2. Initialize Project with Cargo

```bash
# Create binary project
cargo new project-name
cd project-name

# Or create library
cargo new --lib library-name

# Initialize git (cargo does this automatically)
# Add to .gitignore if needed
echo "/target" >> .gitignore
echo "Cargo.lock" >> .gitignore  # For libraries only
```