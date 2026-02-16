# Shadow Admin Permissions

These permissions are equivalent to administrator:

| Permission | Exploitation |
|------------|--------------|
| `iam:CreateAccessKey` | Create keys for admin user |
| `iam:CreateLoginProfile` | Set password for any user |
| `iam:AttachUserPolicy` | Attach admin policy to self |
| `iam:PutUserPolicy` | Add inline admin policy |
| `iam:AddUserToGroup` | Add self to admin group |
| `iam:PassRole` + `ec2:RunInstances` | Launch EC2 with admin role |
| `lambda:UpdateFunctionCode` | Inject code into Lambda |