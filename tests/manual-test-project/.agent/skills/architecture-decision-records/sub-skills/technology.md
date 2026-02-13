# Technology

- Event Store: EventStoreDB (purpose-built, handles projections)
- Alternative considered: Kafka + custom projection service

## Drawbacks

- Learning curve for team
- Increased complexity vs. CRUD
- Need to design events carefully (immutable once stored)
- Storage growth (events never deleted)

## Alternatives

1. **Audit tables**: Simpler but doesn't enable temporal queries
2. **CDC from existing DB**: Complex, doesn't change data model
3. **Hybrid**: Event source only for order state changes

## Unresolved Questions

- [ ] Event schema versioning strategy
- [ ] Retention policy for events
- [ ] Snapshot frequency for performance

## Implementation Plan

1. Prototype with single order type (2 weeks)
2. Team training on event sourcing (1 week)
3. Full implementation and migration (4 weeks)
4. Monitoring and optimization (ongoing)

## References

- [Event Sourcing by Martin Fowler](https://martinfowler.com/eaaDev/EventSourcing.html)
- [EventStoreDB Documentation](https://www.eventstore.com/docs)
```

## ADR Management