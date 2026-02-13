# 3. Table Panel

```json
{
  "type": "table",
  "title": "Service Status",
  "targets": [{
    "expr": "up",
    "format": "table",
    "instant": true
  }],
  "transformations": [
    {
      "id": "organize",
      "options": {
        "excludeByName": {"Time": true},
        "indexByName": {},
        "renameByName": {
          "instance": "Instance",
          "job": "Service",
          "Value": "Status"
        }
      }
    }
  ]
}
```