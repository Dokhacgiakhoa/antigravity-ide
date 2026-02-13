# 5. Report Generation

```typescript
class XSSReportGenerator {
  generateReport(findings: XSSFinding[]): string {
    const grouped = this.groupBySeverity(findings);

    let report = '# XSS Vulnerability Scan Report\n\n';
    report += `Total Findings: ${findings.length}\n\n`;

    for (const [severity, issues] of Object.entries(grouped)) {
      report += `## ${severity.toUpperCase()} (${issues.length})\n\n`;

      for (const issue of issues) {
        report += `- **${issue.type}**\n`;
        report += `  File: ${issue.file}:${issue.line}\n`;
        report += `  Fix: ${issue.fix}\n\n`;
      }
    }

    return report;
  }

  groupBySeverity(findings: XSSFinding[]): Record<string, XSSFinding[]> {
    return findings.reduce((acc, finding) => {
      if (!acc[finding.severity]) acc[finding.severity] = [];
      acc[finding.severity].push(finding);
      return acc;
    }, {} as Record<string, XSSFinding[]>);
  }
}
```