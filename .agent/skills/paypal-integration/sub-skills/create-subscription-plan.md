# Create Subscription Plan

```python
def create_subscription_plan(name, amount, interval='MONTH'):
    """Create a subscription plan."""
    client = PayPalClient(CLIENT_ID, CLIENT_SECRET)

    url = f"{client.base_url}/v1/billing/plans"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.access_token}"
    }

    payload = {
        "product_id": "PRODUCT_ID",  # Create product first
        "name": name,
        "billing_cycles": [{
            "frequency": {
                "interval_unit": interval,
                "interval_count": 1
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": 0,  # Infinite
            "pricing_scheme": {
                "fixed_price": {
                    "value": str(amount),
                    "currency_code": "USD"
                }
            }
        }],
        "payment_preferences": {
            "auto_bill_outstanding": True,
            "setup_fee": {
                "value": "0",
                "currency_code": "USD"
            },
            "setup_fee_failure_action": "CONTINUE",
            "payment_failure_threshold": 3
        }
    }

    response = requests.post(url, headers=headers, json=payload)
    return response.json()

def create_subscription(plan_id, subscriber_email):
    """Create a subscription for a customer."""
    client = PayPalClient(CLIENT_ID, CLIENT_SECRET)

    url = f"{client.base_url}/v1/billing/subscriptions"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.access_token}"
    }

    payload = {
        "plan_id": plan_id,
        "subscriber": {
            "email_address": subscriber_email
        },
        "application_context": {
            "return_url": "https://yourdomain.com/subscription/success",
            "cancel_url": "https://yourdomain.com/subscription/cancel"
        }
    }

    response = requests.post(url, headers=headers, json=payload)
    subscription = response.json()

    # Get approval URL
    for link in subscription.get('links', []):
        if link['rel'] == 'approve':
            return {
                'subscription_id': subscription['id'],
                'approval_url': link['href']
            }
```

## Refund Workflows

```python
def create_refund(capture_id, amount=None, note=None):
    """Create a refund for a captured payment."""
    client = PayPalClient(CLIENT_ID, CLIENT_SECRET)

    url = f"{client.base_url}/v2/payments/captures/{capture_id}/refund"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {client.access_token}"
    }

    payload = {}
    if amount:
        payload["amount"] = {
            "value": str(amount),
            "currency_code": "USD"
        }

    if note:
        payload["note_to_payer"] = note

    response = requests.post(url, headers=headers, json=payload)
    return response.json()

def get_refund_details(refund_id):
    """Get refund details."""
    client = PayPalClient(CLIENT_ID, CLIENT_SECRET)

    url = f"{client.base_url}/v2/payments/refunds/{refund_id}"
    headers = {
        "Authorization": f"Bearer {client.access_token}"
    }

    response = requests.get(url, headers=headers)
    return response.json()
```

## Error Handling

```python
class PayPalError(Exception):
    """Custom PayPal error."""
    pass

def handle_paypal_api_call(api_function):
    """Wrapper for PayPal API calls with error handling."""
    try:
        result = api_function()
        return result
    except requests.exceptions.RequestException as e:
        # Network error
        raise PayPalError(f"Network error: {str(e)}")
    except Exception as e:
        # Other errors
        raise PayPalError(f"PayPal API error: {str(e)}")

# Usage
try:
    order = handle_paypal_api_call(lambda: client.create_order(25.00))
except PayPalError as e:
    # Handle error appropriately
    log_error(e)
```

## Testing

```python
# Use sandbox credentials
SANDBOX_CLIENT_ID = "..."
SANDBOX_SECRET = "..."

# Test accounts
# Create test buyer and seller accounts at developer.paypal.com

def test_payment_flow():
    """Test complete payment flow."""
    client = PayPalClient(SANDBOX_CLIENT_ID, SANDBOX_SECRET, mode='sandbox')

    # Create order
    order = client.create_order(10.00)
    assert 'id' in order

    # Get approval URL
    approval_url = next((link['href'] for link in order['links'] if link['rel'] == 'approve'), None)
    assert approval_url is not None

    # After approval (manual step with test account)
    # Capture order
    # captured = client.capture_order(order['id'])
    # assert captured['status'] == 'COMPLETED'
```

## Resources

- **references/express-checkout.md**: Express Checkout implementation guide
- **references/ipn-handling.md**: IPN verification and processing
- **references/refund-workflows.md**: Refund handling patterns
- **references/billing-agreements.md**: Recurring billing setup
- **assets/paypal-client.py**: Production PayPal client
- **assets/ipn-processor.py**: IPN webhook processor
- **assets/recurring-billing.py**: Subscription management

## Best Practices

1. **Always Verify IPN**: Never trust IPN without verification
2. **Idempotent Processing**: Handle duplicate IPN notifications
3. **Error Handling**: Implement robust error handling
4. **Logging**: Log all transactions and errors
5. **Test Thoroughly**: Use sandbox extensively
6. **Webhook Backup**: Don't rely solely on client-side callbacks
7. **Currency Handling**: Always specify currency explicitly

## Common Pitfalls

- **Not Verifying IPN**: Accepting IPN without verification
- **Duplicate Processing**: Not checking for duplicate transactions
- **Wrong Environment**: Mixing sandbox and production URLs/credentials
- **Missing Webhooks**: Not handling all payment states
- **Hardcoded Values**: Not making configurable for different environments