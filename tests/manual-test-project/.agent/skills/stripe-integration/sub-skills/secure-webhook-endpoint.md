# Secure Webhook Endpoint

```python
from flask import Flask, request
import stripe

app = Flask(__name__)

endpoint_secret = 'whsec_...'

@app.route('/webhook', methods=['POST'])
def webhook():
    payload = request.data
    sig_header = request.headers.get('Stripe-Signature')

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError:
        # Invalid payload
        return 'Invalid payload', 400
    except stripe.error.SignatureVerificationError:
        # Invalid signature
        return 'Invalid signature', 400

    # Handle the event
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        handle_successful_payment(payment_intent)
    elif event['type'] == 'payment_intent.payment_failed':
        payment_intent = event['data']['object']
        handle_failed_payment(payment_intent)
    elif event['type'] == 'customer.subscription.deleted':
        subscription = event['data']['object']
        handle_subscription_canceled(subscription)

    return 'Success', 200

def handle_successful_payment(payment_intent):
    """Process successful payment."""
    customer_id = payment_intent.get('customer')
    amount = payment_intent['amount']
    metadata = payment_intent.get('metadata', {})

    # Update your database
    # Send confirmation email
    # Fulfill order
    print(f"Payment succeeded: {payment_intent['id']}")

def handle_failed_payment(payment_intent):
    """Handle failed payment."""
    error = payment_intent.get('last_payment_error', {})
    print(f"Payment failed: {error.get('message')}")
    # Notify customer
    # Update order status

def handle_subscription_canceled(subscription):
    """Handle subscription cancellation."""
    customer_id = subscription['customer']
    # Update user access
    # Send cancellation email
    print(f"Subscription canceled: {subscription['id']}")
```