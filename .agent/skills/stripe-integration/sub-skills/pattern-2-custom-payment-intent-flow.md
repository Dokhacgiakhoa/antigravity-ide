# Pattern 2: Custom Payment Intent Flow

```python
def create_payment_intent(amount, currency='usd', customer_id=None):
    """Create a payment intent for custom checkout UI."""
    intent = stripe.PaymentIntent.create(
        amount=amount,
        currency=currency,
        customer=customer_id,
        automatic_payment_methods={
            'enabled': True,
        },
        metadata={
            'integration_check': 'accept_a_payment'
        }
    )
    return intent.client_secret  # Send to frontend

# Frontend (JavaScript)
"""
const stripe = Stripe('pk_test_...');
const elements = stripe.elements();
const cardElement = elements.create('card');
cardElement.mount('#card-element');

const {error, paymentIntent} = await stripe.confirmCardPayment(
    clientSecret,
    {
        payment_method: {
            card: cardElement,
            billing_details: {
                name: 'Customer Name'
            }
        }
    }
);

if (error) {
    // Handle error
} else if (paymentIntent.status === 'succeeded') {
    // Payment successful
}
"""
```