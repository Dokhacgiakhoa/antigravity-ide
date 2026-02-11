# Example 1: Business Logic Testing

**Scenario**: E-commerce price manipulation

1. Add item to cart normally, intercept request
2. Identify `price=9999` parameter in POST body
3. Modify to `price=1`
4. Forward request
5. Complete checkout at manipulated price

**Finding**: Server trusts client-provided price values.