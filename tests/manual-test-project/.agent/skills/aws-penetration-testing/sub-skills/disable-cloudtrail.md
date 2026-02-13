# Disable CloudTrail

```bash
# Delete trail
aws cloudtrail delete-trail --name trail_name

# Disable global events
aws cloudtrail update-trail --name trail_name \
  --no-include-global-service-events

# Disable specific region
aws cloudtrail update-trail --name trail_name \
  --no-include-global-service-events --no-is-multi-region-trail
```

**Note:** Kali/Parrot/Pentoo Linux triggers GuardDuty alerts based on user-agent. Use Pacu which modifies the user-agent.

---

## Quick Reference

| Task | Command |
|------|---------|
| Get identity | `aws sts get-caller-identity` |
| List users | `aws iam list-users` |
| List roles | `aws iam list-roles` |
| List buckets | `aws s3 ls` |
| List EC2 | `aws ec2 describe-instances` |
| List Lambda | `aws lambda list-functions` |
| Get metadata | `curl http://169.254.169.254/latest/meta-data/` |

---

## Constraints

**Must:**
- Obtain written authorization before testing
- Document all actions for audit trail
- Test in scope resources only

**Must Not:**
- Modify production data without approval
- Leave persistent backdoors without documentation
- Disable security controls permanently

**Should:**
- Check for IMDSv2 before attempting metadata attacks
- Enumerate thoroughly before exploitation
- Clean up test resources after engagement

---

## Examples