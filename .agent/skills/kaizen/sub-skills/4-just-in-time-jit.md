# 4. Just-In-Time (JIT)

Build what's needed now. No more, no less. Avoid premature optimization and over-engineering.

#### Principles

**YAGNI (You Aren't Gonna Need It):**

- Implement only current requirements
- No "just in case" features
- No "we might need this later" code
- Delete speculation

**Simplest thing that works:**

- Start with straightforward solution
- Add complexity only when needed
- Refactor when requirements change
- Don't anticipate future needs

**Optimize when measured:**

- No premature optimization
- Profile before optimizing
- Measure impact of changes
- Accept "good enough" performance

#### YAGNI in Action

<Good>
```typescript
// Current requirement: Log errors to console
const logError = (error: Error) => {
  console.error(error.message);
};
```
Simple, meets current need
</Good>

<Bad>
```typescript
// Over-engineered for "future needs"
interface LogTransport {
  write(level: LogLevel, message: string, meta?: LogMetadata): Promise<void>;
}

class ConsoleTransport implements LogTransport { /_... _/ }
class FileTransport implements LogTransport { /_ ... _/ }
class RemoteTransport implements LogTransport { /_ ..._/ }

class Logger {
private transports: LogTransport[] = [];
private queue: LogEntry[] = [];
private rateLimiter: RateLimiter;
private formatter: LogFormatter;

// 200 lines of code for "maybe we'll need it"
}

const logError = (error: Error) => {
Logger.getInstance().log('error', error.message);
};

````
Building for imaginary future requirements
</Bad>

**When to add complexity:**
- Current requirement demands it
- Pain points identified through use
- Measured performance issues
- Multiple use cases emerged

<Good>
```typescript
// Start simple
const formatCurrency = (amount: number): string => {
  return `$${amount.toFixed(2)}`;
};

// Requirement evolves: support multiple currencies
const formatCurrency = (amount: number, currency: string): string => {
  const symbols = { USD: '$', EUR: '€', GBP: '£' };
  return `${symbols[currency]}${amount.toFixed(2)}`;
};

// Requirement evolves: support localization
const formatCurrency = (amount: number, locale: string): string => {
  return new Intl.NumberFormat(locale, {\n    style: 'currency',
    currency: locale === 'en-US' ? 'USD' : 'EUR',
  }).format(amount);
};
````

Complexity added only when needed
</Good>

#### Premature Abstraction

<Bad>
```typescript
// One use case, but building generic framework
abstract class BaseCRUDService<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: string): Promise<T>;
  abstract create(data: Partial<T>): Promise<T>;
  abstract update(id: string, data: Partial<T>): Promise<T>;
  abstract delete(id: string): Promise<void>;
}

class GenericRepository<T> { /_300 lines _/ }
class QueryBuilder<T> { /_ 200 lines_/ }
// ... building entire ORM for single table

````
Massive abstraction for uncertain future
</Bad>

<Good>
```typescript
// Simple functions for current needs
const getUsers = async (): Promise<User[]> => {
  return db.query('SELECT * FROM users');
};

const getUserById = async (id: string): Promise<User | null> => {
  return db.query('SELECT * FROM users WHERE id = $1', [id]);
};

// When pattern emerges across multiple entities, then abstract
````

Abstract only when pattern proven across 3+ cases
</Good>

#### Performance Optimization

<Good>
```typescript
// Current: Simple approach
const filterActiveUsers = (users: User[]): User[] => {
  return users.filter(user => user.isActive);
};

// Benchmark shows: 50ms for 1000 users (acceptable)
// ✓ Ship it, no optimization needed

// Later: After profiling shows this is bottleneck
// Then optimize with indexed lookup or caching

````
Optimize based on measurement, not assumptions
</Good>

<Bad>
```typescript
// Premature optimization
const filterActiveUsers = (users: User[]): User[] => {
  // "This might be slow, so let's cache and index"
  const cache = new WeakMap();
  const indexed = buildBTreeIndex(users, 'isActive');
  // 100 lines of optimization code
  // Adds complexity, harder to maintain
  // No evidence it was needed
};\
````

Complex solution for unmeasured problem
</Bad>

#### In Practice

**When implementing:**

- Solve the immediate problem
- Use straightforward approach
- Resist "what if" thinking
- Delete speculative code

**When optimizing:**

- Profile first, optimize second
- Measure before and after
- Document why optimization needed
- Keep simple version in tests

**When abstracting:**

- Wait for 3+ similar cases (Rule of Three)
- Make abstraction as simple as possible
- Prefer duplication over wrong abstraction
- Refactor when pattern clear

## Integration with Commands

The Kaizen skill guides how you work. The commands provide structured analysis:

- **`/why`**: Root cause analysis (5 Whys)
- **`/cause-and-effect`**: Multi-factor analysis (Fishbone)
- **`/plan-do-check-act`**: Iterative improvement cycles
- **`/analyse-problem`**: Comprehensive documentation (A3)
- **`/analyse`**: Smart method selection (Gemba/VSM/Muda)

Use commands for structured problem-solving. Apply skill for day-to-day development.

## Red Flags

**Violating Continuous Improvement:**

- "I'll refactor it later" (never happens)
- Leaving code worse than you found it
- Big bang rewrites instead of incremental

**Violating Poka-Yoke:**

- "Users should just be careful"
- Validation after use instead of before
- Optional config with no validation

**Violating Standardized Work:**

- "I prefer to do it my way"
- Not checking existing patterns
- Ignoring project conventions

**Violating Just-In-Time:**

- "We might need this someday"
- Building frameworks before using them
- Optimizing without measuring

## Remember

**Kaizen is about:**

- Small improvements continuously
- Preventing errors by design
- Following proven patterns
- Building only what's needed

**Not about:**

- Perfection on first try
- Massive refactoring projects
- Clever abstractions
- Premature optimization

**Mindset:** Good enough today, better tomorrow. Repeat.