# 4. Strategy Selection

Select based on issue characteristics:

**Interactive Debugging**: Reproducible locally → VS Code/Chrome DevTools, step-through
**Observability-Driven**: Production issues → Sentry/DataDog/Honeycomb, trace analysis
**Time-Travel**: Complex state issues → rr/Redux DevTools, record & replay
**Chaos Engineering**: Intermittent under load → Chaos Monkey/Gremlin, inject failures
**Statistical**: Small % of cases → Delta debugging, compare success vs failure