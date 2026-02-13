# 1. Stat Panel (Single Value)

```json
{
  "type": "stat",
  "title": "Total Requests",
  "targets": [{
    "expr": "sum(http_requests_total)"
  }],
  "options": {
    "reduceOptions": {
      "values": false,
      "calcs": ["lastNotNull"]
    },
    "orientation": "auto",
    "textMode": "auto",
    "colorMode": "value"
  },
  "fieldConfig": {
    "defaults": {
      "thresholds": {
        "mode": "absolute",
        "steps": [
          {"value": 0, "color": "green"},
          {"value": 80, "color": "yellow"},
          {"value": 90, "color": "red"}
        ]
      }
    }
  }
}
```