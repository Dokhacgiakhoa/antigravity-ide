# 5. Common IDOR Locations

#### API Endpoints
```
/api/user/{id}
/api/profile/{id}
/api/order/{id}
/api/invoice/{id}
/api/document/{id}
/api/message/{id}
/api/address/{id}/update
/api/address/{id}/delete
```

#### File Downloads
```
/download/invoice_{id}.pdf
/static/receipts/{id}.pdf
/uploads/documents/{filename}
/files/reports/report_{date}_{id}.xlsx
```

#### Query Parameters
```
?userId=123
?orderId=456
?documentId=789
?file=report_123.pdf
?account=user@email.com
```

## Quick Reference