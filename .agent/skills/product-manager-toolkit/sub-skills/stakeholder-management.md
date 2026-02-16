# Stakeholder Management

1. Identify RACI for decisions
2. Regular async updates
3. Demo over documentation
4. Address concerns early
5. Celebrate wins publicly
6. Learn from failures openly

## Common Pitfalls to Avoid

1. **Solution-First Thinking**: Jumping to features before understanding problems
2. **Analysis Paralysis**: Over-researching without shipping
3. **Feature Factory**: Shipping features without measuring impact
4. **Ignoring Technical Debt**: Not allocating time for platform health
5. **Stakeholder Surprise**: Not communicating early and often
6. **Metric Theater**: Optimizing vanity metrics over real value

## Integration Points

This toolkit integrates with:
- **Analytics**: Amplitude, Mixpanel, Google Analytics
- **Roadmapping**: ProductBoard, Aha!, Roadmunk
- **Design**: Figma, Sketch, Miro
- **Development**: Jira, Linear, GitHub
- **Research**: Dovetail, UserVoice, Pendo
- **Communication**: Slack, Notion, Confluence

## Quick Commands Cheat Sheet

```bash
# Prioritization
python scripts/rice_prioritizer.py features.csv --capacity 15

# Interview Analysis
python scripts/customer_interview_analyzer.py interview.txt

# Create sample data
python scripts/rice_prioritizer.py sample

# JSON outputs for integration
python scripts/rice_prioritizer.py features.csv --output json
python scripts/customer_interview_analyzer.py interview.txt json
```