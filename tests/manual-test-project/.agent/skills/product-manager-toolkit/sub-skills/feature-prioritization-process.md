# Feature Prioritization Process

1. **Gather Feature Requests**
   - Customer feedback
   - Sales requests
   - Technical debt
   - Strategic initiatives

2. **Score with RICE**
   ```bash
   # Create CSV with: name,reach,impact,confidence,effort
   python scripts/rice_prioritizer.py features.csv
   ```
   - **Reach**: Users affected per quarter
   - **Impact**: massive/high/medium/low/minimal
   - **Confidence**: high/medium/low
   - **Effort**: xl/l/m/s/xs (person-months)

3. **Analyze Portfolio**
   - Review quick wins vs big bets
   - Check effort distribution
   - Validate against strategy

4. **Generate Roadmap**
   - Quarterly capacity planning
   - Dependency mapping
   - Stakeholder alignment