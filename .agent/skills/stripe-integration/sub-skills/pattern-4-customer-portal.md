# Pattern 4: Customer Portal

```python
def create_customer_portal_session(customer_id):
    """Create a portal session for customers to manage subscriptions."""
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url='https://yourdomain.com/account',
    )
    return session.url  # Redirect customer here
```

## Webhook Handling