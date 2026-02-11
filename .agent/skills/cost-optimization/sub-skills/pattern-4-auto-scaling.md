# Pattern 4: Auto-Scaling

```hcl
resource "aws_autoscaling_policy" "scale_up" {
  name                   = "scale-up"
  scaling_adjustment     = 2
  adjustment_type        = "ChangeInCapacity"
  cooldown              = 300
  autoscaling_group_name = aws_autoscaling_group.main.name
}

resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "60"
  statistic           = "Average"
  threshold           = "80"
  alarm_actions       = [aws_autoscaling_policy.scale_up.arn]
}
```

## Cost Optimization Checklist

- [ ] Implement cost allocation tags
- [ ] Delete unused resources (EBS, EIPs, snapshots)
- [ ] Right-size instances based on utilization
- [ ] Use reserved capacity for steady workloads
- [ ] Implement auto-scaling
- [ ] Optimize storage classes
- [ ] Use lifecycle policies
- [ ] Enable cost anomaly detection
- [ ] Set budget alerts
- [ ] Review costs weekly
- [ ] Use spot/preemptible instances
- [ ] Optimize data transfer costs
- [ ] Implement caching layers
- [ ] Use managed services
- [ ] Monitor and optimize continuously

## Tools

- **AWS:** Cost Explorer, Cost Anomaly Detection, Compute Optimizer
- **Azure:** Cost Management, Advisor
- **GCP:** Cost Management, Recommender
- **Multi-cloud:** CloudHealth, Cloudability, Kubecost

## Reference Files

- `references/tagging-standards.md` - Tagging conventions
- `assets/cost-analysis-template.xlsx` - Cost analysis spreadsheet

## Related Skills

- `terraform-module-library` - For resource provisioning
- `multi-cloud-architecture` - For cloud selection