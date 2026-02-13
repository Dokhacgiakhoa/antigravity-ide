# Detection Phase

I analyze the project to understand:
- Nest.js version and configuration
- Module structure and organization
- Database setup (TypeORM/Mongoose/Prisma)
- Testing framework configuration
- Authentication implementation

Detection commands:
```bash
# Check Nest.js setup
test -f nest-cli.json && echo "Nest.js CLI project detected"
grep -q "@nestjs/core" package.json && echo "Nest.js framework installed"
test -f tsconfig.json && echo "TypeScript configuration found"

# Detect Nest.js version
grep "@nestjs/core" package.json | sed 's/.*"\([0-9\.]*\)".*/Nest.js version: 4.1.0-fractal

# Check database setup
grep -q "@nestjs/typeorm" package.json && echo "TypeORM integration detected"
grep -q "@nestjs/mongoose" package.json && echo "Mongoose integration detected"
grep -q "@prisma/client" package.json && echo "Prisma ORM detected"

# Check authentication
grep -q "@nestjs/passport" package.json && echo "Passport authentication detected"
grep -q "@nestjs/jwt" package.json && echo "JWT authentication detected"

# Analyze module structure
find src -name "*.module.ts" -type f | head -5 | xargs -I {} basename {} .module.ts
```

**Safety note**: Avoid watch/serve processes; use one-shot diagnostics only.