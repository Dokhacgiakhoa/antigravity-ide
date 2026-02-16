# SAQ D (Most Requirements)

- Store, process, or transmit card data
- Full PCI DSS requirements
- ~300 questions

## Compliance Checklist

```python
PCI_COMPLIANCE_CHECKLIST = {
    'network_security': [
        'Firewall configured and maintained',
        'No vendor default passwords',
        'Network segmentation implemented'
    ],
    'data_protection': [
        'No storage of CVV, track data, or PIN',
        'PAN encrypted when stored',
        'PAN masked when displayed',
        'Encryption keys properly managed'
    ],
    'vulnerability_management': [
        'Anti-virus installed and updated',
        'Secure development practices',
        'Regular security patches',
        'Vulnerability scanning performed'
    ],
    'access_control': [
        'Access restricted by role',
        'Unique IDs for all users',
        'Multi-factor authentication',
        'Physical security measures'
    ],
    'monitoring': [
        'Audit logs enabled',
        'Log review process',
        'File integrity monitoring',
        'Regular security testing'
    ],
    'policy': [
        'Security policy documented',
        'Risk assessment performed',
        'Security awareness training',
        'Incident response plan'
    ]
}
```

## Resources

- **references/data-minimization.md**: Never store prohibited data
- **references/tokenization.md**: Tokenization strategies
- **references/encryption.md**: Encryption requirements
- **references/access-control.md**: Role-based access
- **references/audit-logging.md**: Comprehensive logging
- **assets/pci-compliance-checklist.md**: Complete checklist
- **assets/encrypted-storage.py**: Encryption utilities
- **scripts/audit-payment-system.sh**: Compliance audit script

## Common Violations

1. **Storing CVV**: Never store card verification codes
2. **Unencrypted PAN**: Card numbers must be encrypted at rest
3. **Weak Encryption**: Use AES-256 or equivalent
4. **No Access Controls**: Restrict who can access cardholder data
5. **Missing Audit Logs**: Must log all access to payment data
6. **Insecure Transmission**: Always use TLS 1.2+
7. **Default Passwords**: Change all default credentials
8. **No Security Testing**: Regular penetration testing required

## Reducing PCI Scope

1. **Use Hosted Payments**: Stripe Checkout, PayPal, etc.
2. **Tokenization**: Replace card data with tokens
3. **Network Segmentation**: Isolate cardholder data environment
4. **Outsource**: Use PCI-compliant payment processors
5. **No Storage**: Never store full card details

By minimizing systems that touch card data, you reduce compliance burden significantly.