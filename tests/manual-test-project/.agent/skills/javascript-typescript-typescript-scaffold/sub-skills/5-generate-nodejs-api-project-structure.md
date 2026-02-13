# 5. Generate Node.js API Project Structure

```
nodejs-api/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts
│   ├── app.ts
│   ├── config/
│   │   ├── database.ts
│   │   └── env.ts
│   ├── routes/
│   │   ├── index.ts
│   │   ├── users.ts
│   │   └── health.ts
│   ├── controllers/
│   │   └── userController.ts
│   ├── services/
│   │   └── userService.ts
│   ├── models/
│   │   └── User.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── errorHandler.ts
│   └── types/
│       └── express.d.ts
└── tests/
    └── routes/
        └── users.test.ts
```

**package.json for Node.js API**:
```json
{
  "name": "nodejs-api",
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest",
    "lint": "eslint src --ext .ts"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.4.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.11.0",
    "typescript": "^5.3.0",
    "tsx": "^4.7.0",
    "vitest": "^1.2.0",
    "eslint": "^8.56.0",
    "@typescript-eslint/parser": "^6.19.0",
    "@typescript-eslint/eslint-plugin": "^6.19.0"
  }
}
```

**src/app.ts**:
```typescript
import express, { Express } from 'express'
import { healthRouter } from './routes/health.js'
import { userRouter } from './routes/users.js'
import { errorHandler } from './middleware/errorHandler.js'

export function createApp(): Express {
  const app = express()

  app.use(express.json())
  app.use('/health', healthRouter)
  app.use('/api/users', userRouter)
  app.use(errorHandler)

  return app
}
```