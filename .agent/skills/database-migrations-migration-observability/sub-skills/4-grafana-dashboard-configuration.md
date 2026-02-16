# 4. Grafana Dashboard Configuration

```python
dashboard_panels = [
    {
        "id": 1,
        "title": "Migration Progress",
        "type": "graph",
        "targets": [{
            "expr": "rate(migration_rows_total[5m])",
            "legendFormat": "{{migration_id}} - {{table_name}}"
        }]
    },
    {
        "id": 2,
        "title": "Data Lag",
        "type": "stat",
        "targets": [{
            "expr": "migration_data_lag_seconds"
        }],
        "fieldConfig": {
            "thresholds": {
                "steps": [
                    {"value": 0, "color": "green"},
                    {"value": 60, "color": "yellow"},
                    {"value": 300, "color": "red"}
                ]
            }
        }
    },
    {
        "id": 3,
        "title": "Error Rate",
        "type": "graph",
        "targets": [{
            "expr": "rate(migration_errors_total[5m])"
        }]
    }
]
```