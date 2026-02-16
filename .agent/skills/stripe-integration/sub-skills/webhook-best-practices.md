# Webhook Best Practices

```python
import hashlib
import hmac

def verify_webhook_signature(payload, signature, secret):
    """Manually verify webhook signature."""
    expected_sig = hmac.new(
        secret.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected_sig)

def handle_webhook_idempotently(event_id, handler):
    """Ensure webhook is processed exactly once."""
    # Check if event already processed
    if is_event_processed(event_id):
        return

    # Process event
    try:
        handler()
        mark_event_processed(event_id)
    except Exception as e:
        log_error(e)
        # Stripe will retry failed webhooks
        raise
```

## Customer Management

```python
def create_customer(email, name, payment_method_id=None):
    """Create a Stripe customer."""
    customer = stripe.Customer.create(
        email=email,
        name=name,
        payment_method=payment_method_id,
        invoice_settings={
            'default_payment_method': payment_method_id
        } if payment_method_id else None,
        metadata={
            'user_id': '12345'
        }
    )
    return customer

def attach_payment_method(customer_id, payment_method_id):
    """Attach a payment method to a customer."""
    stripe.PaymentMethod.attach(
        payment_method_id,
        customer=customer_id
    )

    # Set as default
    stripe.Customer.modify(
        customer_id,
        invoice_settings={
            'default_payment_method': payment_method_id
        }
    )

def list_customer_payment_methods(customer_id):
    """List all payment methods for a customer."""
    payment_methods = stripe.PaymentMethod.list(
        customer=customer_id,
        type='card'
    )
    return payment_methods.data
```

## Refund Handling

```python
def create_refund(payment_intent_id, amount=None, reason=None):
    """Create a refund."""
    refund_params = {
        'payment_intent': payment_intent_id
    }

    if amount:
        refund_params['amount'] = amount  # Partial refund

    if reason:
        refund_params['reason'] = reason  # 'duplicate', 'fraudulent', 'requested_by_customer'

    refund = stripe.Refund.create(**refund_params)
    return refund

def handle_dispute(charge_id, evidence):
    """Update dispute with evidence."""
    stripe.Dispute.modify(
        charge_id,
        evidence={
            'customer_name': evidence.get('customer_name'),
            'customer_email_address': evidence.get('customer_email'),
            'shipping_documentation': evidence.get('shipping_proof'),
            'customer_communication': evidence.get('communication'),
        }
    )
```

## Testing

```python
# Use test mode keys
stripe.api_key = "sk_test_..."

# Test card numbers
TEST_CARDS = {
    'success': '4242424242424242',
    'declined': '4000000000000002',
    '3d_secure': '4000002500003155',
    'insufficient_funds': '4000000000009995'
}

def test_payment_flow():
    """Test complete payment flow."""
    # Create test customer
    customer = stripe.Customer.create(
        email="test@example.com"
    )

    # Create payment intent
    intent = stripe.PaymentIntent.create(
        amount=1000,
        currency='usd',
        customer=customer.id,
        payment_method_types=['card']
    )

    # Confirm with test card
    confirmed = stripe.PaymentIntent.confirm(
        intent.id,
        payment_method='pm_card_visa'  # Test payment method
    )

    assert confirmed.status == 'succeeded'
```

## Resources

- **references/checkout-flows.md**: Detailed checkout implementation
- **references/webhook-handling.md**: Webhook security and processing
- **references/subscription-management.md**: Subscription lifecycle
- **references/customer-management.md**: Customer and payment method handling
- **references/invoice-generation.md**: Invoicing and billing
- **assets/stripe-client.py**: Production-ready Stripe client wrapper
- **assets/webhook-handler.py**: Complete webhook processor
- **assets/checkout-config.json**: Checkout configuration templates

## Best Practices

1. **Always Use Webhooks**: Don't rely solely on client-side confirmation
2. **Idempotency**: Handle webhook events idempotently
3. **Error Handling**: Gracefully handle all Stripe errors
4. **Test Mode**: Thoroughly test with test keys before production
5. **Metadata**: Use metadata to link Stripe objects to your database
6. **Monitoring**: Track payment success rates and errors
7. **PCI Compliance**: Never handle raw card data on your server
8. **SCA Ready**: Implement 3D Secure for European payments

## Common Pitfalls

- **Not Verifying Webhooks**: Always verify webhook signatures
- **Missing Webhook Events**: Handle all relevant webhook events
- **Hardcoded Amounts**: Use cents/smallest currency unit
- **No Retry Logic**: Implement retries for API calls
- **Ignoring Test Mode**: Test all edge cases with test cards