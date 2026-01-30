description: Tự động viết/cập nhật tài liệu
---

# /document - Auto Documentation

$ARGUMENTS

---

## Task
Keep documentation in sync with code.

### Steps:
1.  **Scan Codebase**: Read function signatures and comments.
2.  **Generate API Docs**: Create Swagger/OpenAPI spec.
3.  **Update README**: Refresh feature list and usage examples.
4.  **Internal Docs**: Update `ARCHITECTURE.md` if structure changed.

---

## Usage
```
/document api      # Generate API reference
/document readme   # Update README.md
/document all      # Full documentation refresh
```
