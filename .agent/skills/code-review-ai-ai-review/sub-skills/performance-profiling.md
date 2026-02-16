# Performance Profiling

```javascript
class PerformanceReviewAgent {
  async analyzePRPerformance(prNumber) {
    const baseline = await this.loadBaselineMetrics('main');
    const prBranch = await this.runBenchmarks(`pr-${prNumber}`);

    const regressions = this.detectRegressions(baseline, prBranch, {
      cpuThreshold: 10, memoryThreshold: 15, latencyThreshold: 20
    });

    if (regressions.length > 0) {
      await this.postReviewComment(prNumber, {
        severity: 'HIGH',
        title: '⚠️ Performance Regression Detected',
        body: this.formatRegressionReport(regressions),
        suggestions: await this.aiGenerateOptimizations(regressions)
      });
    }
  }
}
```