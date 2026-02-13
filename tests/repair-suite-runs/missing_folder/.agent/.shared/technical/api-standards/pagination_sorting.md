# 🔢 Pagination & Sorting Standards

## 1. Pagination Parameters
- **`page`**: The current page number (starts from 1). Default: `1`.
- **`limit`**: Number of records per page. Default: `10`. Maximum: `100`.
- **Response**: Must include a `meta` object with `total`, `per_page`, `current_page`.

## 2. Sorting
- **`sort`**: Field name to sort by. Prefix with `-` for descending order.
- **Example**: `?sort=-created_at,name` (Sort by newest first, then by name ABC).

## 3. Filtering
- Use direct field names: `?status=published&author_id=uuid`.
- Range filters: `?price[gte]=100&price[lte]=500`.
- Search: `?q=search+term`.
