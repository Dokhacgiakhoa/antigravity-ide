# Phase 6: Cloud Security Scanning

#### Prowler (AWS)

AWS security assessment:

```bash
# Install Prowler
pip install prowler

# Basic scan
prowler aws

# Specific checks
prowler aws -c iam s3 ec2

# Compliance framework
prowler aws --compliance cis_aws

# Output formats
prowler aws -M html json csv

# Specific region
prowler aws -f us-east-1

# Assume role
prowler aws -R arn:aws:iam::123456789012:role/ProwlerRole
```

#### ScoutSuite (Multi-cloud)

Multi-cloud security auditing:

```bash
# Install ScoutSuite
pip install scoutsuite

# AWS scan
scout aws

# Azure scan
scout azure --cli

# GCP scan
scout gcp --user-account

# Generate report
scout aws --report-dir ./reports
```