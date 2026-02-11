# 12. Gradual Rollout

- Use Task tool with subagent_type="cloud-infrastructure::deployment-engineer"
- Context: Experiment configuration and monitoring setup
- Prompt: "Execute gradual rollout for feature: $ARGUMENTS. Start with internal dogfooding, then beta users (1-5%), gradually increase to target traffic. Monitor error rates, performance metrics, and early indicators. Implement automated rollback on anomalies."
- Output: Rollout execution, monitoring alerts, health metrics