# 2.4 Multi-Agent Collaboration

```python
class AgentTeam:
    """
    Specialized agents collaborating on complex tasks
    """

    def __init__(self):
        self.agents = {
            "researcher": ResearchAgent(),
            "analyst": AnalystAgent(),
            "writer": WriterAgent(),
            "critic": CriticAgent()
        }
        self.coordinator = CoordinatorAgent()

    def solve(self, task: str) -> str:
        # Coordinator assigns subtasks
        assignments = self.coordinator.decompose(task)

        results = {}
        for assignment in assignments:
            agent = self.agents[assignment.agent]
            result = agent.execute(
                assignment.subtask,
                context=results
            )
            results[assignment.id] = result

        # Critic reviews
        critique = self.agents["critic"].review(results)

        if critique.needs_revision:
            # Iterate with feedback
            return self.solve_with_feedback(task, results, critique)

        return self.coordinator.synthesize(results)
```

---

## 3. Prompt IDE Patterns