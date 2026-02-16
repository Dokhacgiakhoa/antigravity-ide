# 11. Blameless Postmortem

- Use Task tool with subagent_type="documentation-generation::docs-architect"
- Prompt: "Conduct blameless postmortem for incident: $ARGUMENTS. Document: 1) Complete incident timeline with decisions, 2) Root cause and contributing factors (systems focus), 3) What went well in response, 4) What could improve, 5) Action items with owners and deadlines, 6) Lessons learned for team education. Follow SRE postmortem best practices."
- Output: Postmortem document, action items list, process improvements, training needs
- Context: Complete incident history, all agent outputs