# Azure Key Commands

| Action | Command |
|--------|---------|
| Login | `Connect-AzAccount` |
| List subscriptions | `Get-AzSubscription` |
| List users | `Get-MsolUser -All` |
| List groups | `Get-MsolGroup -All` |
| Current roles | `Get-AzRoleAssignment` |
| List VMs | `Get-AzVM` |
| List storage | `Get-AzStorageAccount` |
| Key Vault secrets | `az keyvault secret list --vault-name <name>` |