# Input Validation

```python
import re

def validate_card_number(card_number):
    """Validate card number format (Luhn algorithm)."""
    # Remove spaces and dashes
    card_number = re.sub(r'[\s-]', '', card_number)

    # Check if all digits
    if not card_number.isdigit():
        return False

    # Luhn algorithm
    def luhn_checksum(card_num):
        def digits_of(n):
            return [int(d) for d in str(n)]

        digits = digits_of(card_num)
        odd_digits = digits[-1::-2]
        even_digits = digits[-2::-2]
        checksum = sum(odd_digits)
        for d in even_digits:
            checksum += sum(digits_of(d * 2))
        return checksum % 10

    return luhn_checksum(card_number) == 0

def sanitize_input(user_input):
    """Sanitize user input to prevent injection."""
    # Remove special characters
    # Validate against expected format
    # Escape for database queries
    pass
```

## PCI DSS SAQ (Self-Assessment Questionnaire)