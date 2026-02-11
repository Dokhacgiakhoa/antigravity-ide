# Bucket Enumeration

```bash
# List buckets (with creds)
aws s3 ls

# List bucket contents
aws s3 ls s3://bucket-name --recursive

# Download all files
aws s3 sync s3://bucket-name ./local-folder
```