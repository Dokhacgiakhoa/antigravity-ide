# Step 2: Define Input Parameters

```php
public static function execute_parameters() {
    return new external_function_parameters([
        'userid' => new external_value(PARAM_INT, 'User ID', VALUE_REQUIRED),
        'courseid' => new external_value(PARAM_INT, 'Course ID', VALUE_REQUIRED),
        'options' => new external_single_structure([
            'includedetails' => new external_value(PARAM_BOOL, 'Include details', VALUE_DEFAULT, false),
            'limit' => new external_value(PARAM_INT, 'Result limit', VALUE_DEFAULT, 10)
        ], 'Options', VALUE_OPTIONAL)
    ]);
}
```

**Common Parameter Types**:
- `PARAM_INT` - Integers
- `PARAM_TEXT` - Plain text (HTML stripped)
- `PARAM_RAW` - Raw text (no cleaning)
- `PARAM_BOOL` - Boolean values
- `PARAM_FLOAT` - Floating point numbers
- `PARAM_ALPHANUMEXT` - Alphanumeric with extended chars

**Structures**:
- `external_value` - Single value
- `external_single_structure` - Object with named fields
- `external_multiple_structure` - Array of items

**Value Flags**:
- `VALUE_REQUIRED` - Parameter must be provided
- `VALUE_OPTIONAL` - Parameter is optional
- `VALUE_DEFAULT, defaultvalue` - Optional with default