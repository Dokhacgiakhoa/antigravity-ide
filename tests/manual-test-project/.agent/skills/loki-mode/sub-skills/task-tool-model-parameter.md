# Task Tool Model Parameter

```python
# Opus for planning/architecture ONLY
Task(subagent_type="Plan", model="opus", description="Design system architecture", prompt="...")

# Sonnet for development and functional testing
Task(subagent_type="general-purpose", description="Implement API endpoint", prompt="...")
Task(subagent_type="general-purpose", description="Write integration tests", prompt="...")

# Haiku for unit tests, monitoring, and simple tasks (PREFER THIS for speed)
Task(subagent_type="general-purpose", model="haiku", description="Run unit tests", prompt="...")
Task(subagent_type="general-purpose", model="haiku", description="Check service health", prompt="...")
```