# 2.3 Plan-and-Execute Pattern

```python
class PlanAndExecuteAgent:
    """
    1. Create a plan (list of steps)
    2. Execute each step
    3. Replan if needed
    """

    def run(self, task: str) -> str:
        # Planning phase
        plan = self.planner.create_plan(task)
        # Returns: ["Step 1: ...", "Step 2: ...", ...]

        results = []
        for step in plan:
            # Execute each step
            result = self.executor.execute(step, context=results)
            results.append(result)

            # Check if replan needed
            if self._needs_replan(task, results):
                new_plan = self.planner.replan(
                    task,
                    completed=results,
                    remaining=plan[len(results):]
                )
                plan = new_plan

        # Synthesize final answer
        return self.synthesizer.summarize(task, results)
```