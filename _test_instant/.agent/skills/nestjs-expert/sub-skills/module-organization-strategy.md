# Module Organization Strategy

```
Feature Complexity:
├─ Simple CRUD → Single module with controller + service
├─ Domain logic → Separate domain module + infrastructure
├─ Shared logic → Create shared module with exports
├─ Microservice → Separate app with message patterns
└─ External API → Create client module with HttpModule
```