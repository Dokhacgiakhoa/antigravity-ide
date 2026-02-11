# Information Schema Queries

```sql
-- MySQL/MSSQL table enumeration
SELECT table_name FROM information_schema.tables WHERE table_schema=database()

-- Column enumeration
SELECT column_name FROM information_schema.columns WHERE table_name='users'

-- Oracle equivalent
SELECT table_name FROM all_tables
SELECT column_name FROM all_tab_columns WHERE table_name='USERS'
```