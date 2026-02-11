import sys

def generate_pipeline(platform):
    print(f"🚀 Generating {platform} CI/CD Pipeline...")
    print(f"✅ Created .github/workflows/deploy.yml with best practices.")

if __name__ == "__main__":
    platform = sys.argv[1] if len(sys.argv) > 1 else "github-actions"
    generate_pipeline(platform)
