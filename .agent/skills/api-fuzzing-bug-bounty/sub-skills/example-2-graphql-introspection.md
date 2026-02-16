# Example 2: GraphQL Introspection

```bash
curl -X POST https://target.com/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{__schema{types{name,fields{name}}}}"}'
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| API returns nothing | Add `X-Requested-With: XMLHttpRequest` header |
| 401 on all endpoints | Try adding `?user_id=1` parameter |
| GraphQL introspection disabled | Use clairvoyance for schema reconstruction |
| Rate limited | Use IP rotation or batch requests |
| Can't find endpoints | Check Swagger, archive.org, JS files |