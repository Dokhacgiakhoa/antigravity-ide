# Terraform with AWS Secrets Manager

```hcl
data "aws_secretsmanager_secret_version" "db_password" {
  secret_id = "production/database/password"
}

resource "aws_db_instance" "main" {
  allocated_storage    = 100
  engine              = "postgres"
  instance_class      = "db.t3.large"
  username            = "admin"
  password            = jsondecode(data.aws_secretsmanager_secret_version.db_password.secret_string)["password"]
}
```

## GitHub Secrets