# Ansible Provisioning

```yaml
- name: Deploy Grafana dashboards
  copy:
    src: "{{ item }}"
    dest: /etc/grafana/dashboards/
  with_fileglob:
    - "dashboards/*.json"
  notify: restart grafana
```

## Reference Files

- `assets/api-dashboard.json` - API monitoring dashboard
- `assets/infrastructure-dashboard.json` - Infrastructure dashboard
- `assets/database-dashboard.json` - Database monitoring dashboard
- `references/dashboard-design.md` - Dashboard design guide

## Related Skills

- `prometheus-configuration` - For metric collection
- `slo-implementation` - For SLO dashboards