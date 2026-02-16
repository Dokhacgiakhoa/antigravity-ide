# Template 5: Grafana Dashboard JSON

```json
{
  "dashboard": {
    "title": "Service Mesh Overview",
    "panels": [
      {
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "sum(rate(istio_requests_total{reporter=\"destination\"}[5m])) by (destination_service_name)",
            "legendFormat": "{{destination_service_name}}"
          }
        ]
      },
      {
        "title": "Error Rate",
        "type": "gauge",
        "targets": [
          {
            "expr": "sum(rate(istio_requests_total{response_code=~\"5..\"}[5m])) / sum(rate(istio_requests_total[5m])) * 100"
          }
        ],
        "fieldConfig": {
          "defaults": {
            "thresholds": {
              "steps": [
                {"value": 0, "color": "green"},
                {"value": 1, "color": "yellow"},
                {"value": 5, "color": "red"}
              ]
            }
          }
        }
      },
      {
        "title": "P99 Latency",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.99, sum(rate(istio_request_duration_milliseconds_bucket{reporter=\"destination\"}[5m])) by (le, destination_service_name))",
            "legendFormat": "{{destination_service_name}}"
          }
        ]
      },
      {
        "title": "Service Topology",
        "type": "nodeGraph",
        "targets": [
          {
            "expr": "sum(rate(istio_requests_total{reporter=\"destination\"}[5m])) by (source_workload, destination_service_name)"
          }
        ]
      }
    ]
  }
}
```